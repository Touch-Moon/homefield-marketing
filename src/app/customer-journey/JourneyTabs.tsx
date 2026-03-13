"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Marketing Strategy", href: "/customer-journey/strategy" },
  { label: "Awareness",          href: "/customer-journey/awareness" },
  { label: "Findability",        href: "/customer-journey/findability" },
  { label: "Reputation",         href: "/customer-journey/reputation" },
  { label: "Conversion",         href: "/customer-journey/conversion" },
];

export default function JourneyTabs() {
  const pathname = usePathname();

  return (
    <section className="cj-journey">
      <div className="cj-journey__inner">
        <div className="cj-journey__nav">

          {/* ── heading overlapping the border-top ── */}
          <h2 className="cj-journey__nav-heading">Our Customer Journey</h2>

          {/* ── navigation buttons ── */}
          <div className="cj-journey__nav-items">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`cj-journey__nav-item${
                  pathname === item.href ? " cj-journey__nav-item--active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
