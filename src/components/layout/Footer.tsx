import "./Footer.scss";
import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/homefieldmarketing/",
    icon: "/icons/social/instagram.svg",
    width: 24,
    height: 24,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/homefield-marketing",
    icon: "/icons/social/linkedin.svg",
    width: 24,
    height: 24,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/myHomefieldMarketing",
    icon: "/icons/social/facebook.svg",
    width: 24,
    height: 24,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__inner">

        {/* Logo */}
        <div className="site-footer__logo-wrap">
          <Link href="/" aria-label="Homefield Marketing — home">
            <Image
              src="/logo.svg"
              alt="Homefield Marketing"
              width={200}
              height={44}
              className="site-footer__logo"
            />
          </Link>
        </div>

        {/* Main nav grid */}
        <nav className="site-footer__nav" aria-label="Footer navigation">

          {/* Solutions */}
          <div>
            <h2 className="site-footer__heading" id="footer-solutions-heading">Solutions</h2>
            <div className="site-footer__gold-bar" />
            <div
              className="site-footer__solutions-grid"
              role="list"
              aria-labelledby="footer-solutions-heading"
            >
              <div className="site-footer__solutions-col" role="listitem">
                {footerNav.solutions.slice(0, 4).map((item) => (
                  <Link key={item.href} href={item.href} className="site-footer__link">
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="site-footer__solutions-col" role="listitem">
                {footerNav.solutions.slice(4, 7).map((item) => (
                  <Link key={item.href} href={item.href} className="site-footer__link">
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="site-footer__solutions-col" role="listitem">
                {footerNav.solutions.slice(7, 10).map((item) => (
                  <Link key={item.href} href={item.href} className="site-footer__link">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Company pages */}
          <div className="site-footer__company-col">
            {footerNav.company.map((item) => (
              <div key={item.href} className="site-footer__company-item">
                <Link href={item.href} className="site-footer__heading site-footer__heading--link">
                  {item.label}
                </Link>
                <div className="site-footer__gold-bar" style={{ marginBottom: 0 }} />
              </div>
            ))}
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="site-footer__heading" id="footer-contact-heading">Contact Us</h2>
            <div className="site-footer__gold-bar" />
            <ul className="site-footer__contact-list" aria-labelledby="footer-contact-heading">
              {footerNav.contact.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Golden West + Social */}
        <div className="site-footer__bottom">
          <p className="site-footer__member">
            A proud member of{" "}
            <Image
              src="/images/gw-logo.svg"
              alt="Golden West"
              width={147}
              height={29}
            />
          </p>
          <div className="site-footer__social">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-link"
                aria-label={s.label}
              >
                <Image
                  src={s.icon}
                  alt={s.label}
                  width={s.width}
                  height={s.height}
                  className="site-footer__social-icon"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="site-footer__copyright">
          <p>
            &copy; Copyright {new Date().getFullYear()}, {siteConfig.companyName}. All Rights Reserved |{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
