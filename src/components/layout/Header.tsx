"use client";
import "./Header.scss";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { mainNav, headerCTA } from "@/data/navigation";
import type { NavItem } from "@/types";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchFormRef = useRef<HTMLFormElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchFormRef = useRef<HTMLFormElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // ── Scroll-shrink: detect scroll position to shrink header on desktop
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Mobile menu scroll lock (rAF + wheel + touch + keyboard + 2-frame flush)
  useEffect(() => {
    if (!menuOpen) return;

    let startY = 0;
    const savedY = window.scrollY;
    let rafId: number;

    // 1) rAF loop — suppress compositor thread at 60fps
    const enforcePosition = () => {
      if (window.scrollY !== savedY) window.scrollTo(0, savedY);
      rafId = requestAnimationFrame(enforcePosition);
    };
    rafId = requestAnimationFrame(enforcePosition);

    // 2) Prevent wheel — block all wheel events with capture:true
    const onWheel = (e: WheelEvent) => { e.preventDefault(); };

    // 3) Touch — allow movements under 10px for iOS tap safety
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const onTouchMove = (e: TouchEvent) => {
      if (!e.cancelable) return;
      const deltaY = Math.abs(e.touches[0].clientY - startY);
      if (deltaY < 10) return; // allow tap
      // Allow internal scroll if the nav itself is overflow:scroll
      if (
        navRef.current?.contains(e.target as Node) &&
        navRef.current.scrollHeight > navRef.current.clientHeight
      ) return;
      e.preventDefault();
    };

    // 4) Prevent keyboard scroll
    const onKeyDown = (e: KeyboardEvent) => {
      const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
      const tag = (e.target as HTMLElement).tagName;
      if (['INPUT', 'TEXTAREA', 'BUTTON', 'A'].includes(tag)) return;
      if (scrollKeys.includes(e.key)) e.preventDefault();
    };

    document.addEventListener('wheel',      onWheel      as EventListener, { passive: false, capture: true });
    document.addEventListener('touchstart', onTouchStart as EventListener, { passive: true });
    document.addEventListener('touchmove',  onTouchMove  as EventListener, { passive: false });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('wheel',      onWheel      as EventListener, { capture: true });
      document.removeEventListener('touchstart', onTouchStart as EventListener);
      document.removeEventListener('touchmove',  onTouchMove  as EventListener);
      window.removeEventListener('keydown', onKeyDown);

      // 5) 2-frame flush — clear accumulated compositor delta (prevent bounce on close)
      document.documentElement.style.overflowY = 'hidden';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.style.overflowY = '';
          window.scrollTo(0, savedY);
        });
      });
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      const header = document.querySelector("header");

      // Solutions dropdown: close when clicking outside the header
      if (header && !header.contains(target)) {
        setSolutionsOpen(false);
      }

      // Desktop Search: close when clicking outside the form
      if (searchFormRef.current && !searchFormRef.current.contains(target)) {
        setSearchOpen(false);
        setSearchQuery("");
      }

      // Mobile Search: close when clicking outside the form
      if (mobileSearchFormRef.current && !mobileSearchFormRef.current.contains(target)) {
        setMobileSearchOpen(false);
        setMobileSearchQuery("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Open search box — focus on next frame
  const openSearch = () => {
    setSearchOpen(true);
    setTimeout(() => searchInputRef.current?.focus(), 50);
  };
  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    closeSearch();
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };
  const handleSearchKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeSearch();
  };

  // Mobile search box
  const openMobileSearch = () => {
    setMobileSearchOpen(true);
    setTimeout(() => mobileSearchInputRef.current?.focus(), 50);
  };
  const closeMobileSearch = () => {
    setMobileSearchOpen(false);
    setMobileSearchQuery("");
  };
  const handleMobileSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = mobileSearchQuery.trim();
    if (!q) return;
    closeMobileSearch();
    setMenuOpen(false);
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };
  const handleMobileSearchKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeMobileSearch();
  };

  const solutionsItem = mainNav.find((n) => n.label === "Solutions");
  const otherNavItems = mainNav.filter((n) => n.label !== "Solutions");

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 200);
  };

  return (
    <>
      <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`} role="banner">

        {/* ── Top bar ── */}
        <div className="site-header__inner">

          {/* Logo */}
          <Link href="/" className="site-header__logo-link" aria-label="Homefield Marketing — home">
            <Image
              src="/logo.svg"
              alt="Homefield Marketing"
              width={214}
              height={47}
              priority
              className="site-header__logo"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="site-header__nav" aria-label="Main navigation">
            {solutionsItem && (
              <button
                className="site-header__solutions-btn"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
                onClick={() => setSolutionsOpen((o) => !o)}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                {solutionsItem.label}
                <span className="site-header__solutions-underline" />
              </button>
            )}
            {otherNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-header__nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="site-header__cta">

            {/* Search form — inline, icon fixed right, expands left only */}
            <form
              ref={searchFormRef}
              className={`site-header__search${searchOpen ? " site-header__search--open" : ""}`}
              onSubmit={handleSearchSubmit}
              role="search"
              aria-label="Site search"
            >
              {/* row-reverse: DOM first (button) appears right, second (input) expands left */}
              <button
                type={searchOpen ? "submit" : "button"}
                className="site-header__search-btn"
                onClick={!searchOpen ? openSearch : undefined}
                aria-label={searchOpen ? "Submit search" : "Open search"}
              >
                <Search size={14} />
              </button>
              <input
                ref={searchInputRef}
                type="text"
                className="site-header__search-input"
                placeholder="Search…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKey}
                aria-label="Search"
                tabIndex={searchOpen ? 0 : -1}
              />
            </form>

            {headerCTA.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-header__cta-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger — fixed above overlay, = ↔ X animation */}
          <button
            className={`site-header__hamburger${menuOpen ? " site-header__hamburger--open" : ""}`}
            onClick={() => {
              if (!menuOpen) setMobileSolutionsOpen(false);
              setMenuOpen((o) => !o);
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="site-header__hamburger-icon">
              <span />
              <span />
            </span>
          </button>
        </div>

        {/* ── Solutions Mega-Dropdown (desktop) ── */}
        {solutionsItem?.children && (
          <div
            className={`site-header__dropdown${solutionsOpen ? " site-header__dropdown--open" : ""}`}
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
            aria-hidden={!solutionsOpen}
          >
            <div className="site-header__dropdown-inner">
              <div className="site-header__dropdown-grid">
                <div className="site-header__dropdown-col">
                  {solutionsItem.children.slice(0, 4).map((child: NavItem) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="site-header__dropdown-item"
                      tabIndex={solutionsOpen ? 0 : -1}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
                <div className="site-header__dropdown-col">
                  {solutionsItem.children.slice(4, 7).map((child: NavItem) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="site-header__dropdown-item"
                      tabIndex={solutionsOpen ? 0 : -1}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
                <div className="site-header__dropdown-col">
                  {solutionsItem.children.slice(7, 10).map((child: NavItem) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="site-header__dropdown-item"
                      tabIndex={solutionsOpen ? 0 : -1}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </header>

      {/* ── Mobile Nav Overlay ── */}
      {menuOpen && (
        <nav ref={navRef} className="mobile-nav" aria-label="Mobile navigation">

          {/* mobile-nav__header removed — logo and hamburger (X) remain visible
              from site-header since site-header (z-101) renders above the overlay */}

          {solutionsItem && (
            <>
              <button
                className="mobile-nav__solutions-btn"
                onClick={() => setMobileSolutionsOpen((o) => !o)}
              >
                <span className="mobile-nav__solutions-title">Solutions</span>
                <span
                  className="mobile-nav__gold-bar"
                  style={{ width: mobileSolutionsOpen ? "48px" : "8px" }}
                />
              </button>

              {mobileSolutionsOpen && (
                <div className="mobile-nav__solutions-list">
                  {solutionsItem.children?.map((child: NavItem) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="mobile-nav__solutions-item"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}

          {otherNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="mobile-nav__nav-item"
            >
              {item.label}
            </Link>
          ))}

          <div className="mobile-nav__cta-row">
            {/* Mobile search form */}
            <form
              ref={mobileSearchFormRef}
              className={`mobile-nav__search${mobileSearchOpen ? " mobile-nav__search--open" : ""}`}
              onSubmit={handleMobileSearchSubmit}
              role="search"
              aria-label="Site search"
            >
              <button
                type={mobileSearchOpen ? "submit" : "button"}
                className="site-header__search-btn"
                onClick={!mobileSearchOpen ? openMobileSearch : undefined}
                aria-label={mobileSearchOpen ? "Submit search" : "Open search"}
              >
                <Search size={14} />
              </button>
              <input
                ref={mobileSearchInputRef}
                type="text"
                className="site-header__search-input"
                placeholder="Search…"
                value={mobileSearchQuery}
                onChange={(e) => setMobileSearchQuery(e.target.value)}
                onKeyDown={handleMobileSearchKey}
                aria-label="Search"
                tabIndex={mobileSearchOpen ? 0 : -1}
              />
            </form>
            {headerCTA.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="site-header__cta-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

        </nav>
      )}
    </>
  );
}
