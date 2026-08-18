"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "@/components/Logo";
import { SITE } from "@/lib/content";

const NAV_LINKS = [
  { href: "/", label: "Salary Calculator" },
  { href: "/calculators", label: "All Tools" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link href="/" className="site-logo" onClick={() => setMenuOpen(false)}>
          <span className="site-logo__icon" aria-hidden="true">
            <LogoMark size={40} />
          </span>
          <span className="site-logo__text">
            {SITE.name}
            <small>Australia · {SITE.year}</small>
          </span>
        </Link>

        <button
          type="button"
          className="site-nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`site-nav__link${pathname === link.href ? " site-nav__link--active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#salary-calculator"
            className="btn btn--primary btn--sm site-nav__cta"
            onClick={() => setMenuOpen(false)}
          >
            Calculate Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
