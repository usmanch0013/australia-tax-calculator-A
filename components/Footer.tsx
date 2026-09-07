import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { POPULAR_SALARIES, SITE } from "@/lib/content";
import { TOOL_CATEGORIES, TOOLS } from "@/lib/tools";

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

const CATEGORY_ORDER = ["pay", "tax", "super", "work"] as const;

export default function Footer() {
  const quickSalaries = POPULAR_SALARIES.slice(0, 6);

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer__grid site-footer__grid--wide">
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__logo">
              <LogoMark size={36} />
              <span className="site-footer__title">{SITE.name}</span>
            </Link>
            <p className="site-footer__desc">
              Free salary and tax calculators built for Australian workers.
              Updated for {SITE.year} ATO rates. Estimates only — not tax advice.
            </p>
            <p className="site-footer__desc">
              <Link href="/calculators">Browse all {TOOLS.length} calculators →</Link>
            </p>
          </div>

          {CATEGORY_ORDER.map((category) => (
            <div key={category}>
              <p className="site-footer__heading">{TOOL_CATEGORIES[category]}</p>
              <ul className="site-footer__links">
                {TOOLS.filter((tool) => tool.category === category).map((tool) => (
                  <li key={tool.slug}>
                    <Link href={`/calculators/${tool.slug}`}>{tool.shortName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="site-footer__heading">Popular Salaries</p>
            <ul className="site-footer__links">
              {quickSalaries.map((amount) => (
                <li key={amount}>
                  <Link href={`/salary/${amount}`}>
                    ${amount.toLocaleString("en-AU")} after tax
                  </Link>
                </li>
              ))}
            </ul>
            <p className="site-footer__heading site-footer__heading--spaced">Legal</p>
            <ul className="site-footer__links">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. Tax calculations
            based on ATO {SITE.year} rates.
          </p>
          <p className="site-footer__disclaimer">
            General information only — not financial, tax, or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
