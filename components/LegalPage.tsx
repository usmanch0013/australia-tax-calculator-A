import Link from "next/link";
import { LEGAL_LAST_UPDATED, LEGAL_PAGES } from "@/lib/legal";

interface LegalPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
  showDate?: boolean;
  currentPath?: string;
}

export default function LegalPage({
  title,
  description,
  children,
  showDate = true,
  currentPath,
}: LegalPageProps) {
  return (
    <div className="legal-page">
      <section className="legal-hero" aria-labelledby="legal-page-title">
        <div className="legal-hero__bg" aria-hidden="true" />
        <div className="site-container legal-hero__inner">
          <span className="legal-hero__badge">Legal &amp; Information</span>
          <h1 id="legal-page-title" className="legal-hero__title">
            {title}
          </h1>
          <p className="legal-hero__desc">{description}</p>
          {showDate && (
            <p className="legal-hero__meta">
              Last updated: <time dateTime="2025-08-18">{LEGAL_LAST_UPDATED}</time>
            </p>
          )}
        </div>
      </section>

      <div className="site-container legal-page__layout">
        <aside className="legal-sidebar" aria-label="Legal pages navigation">
          <div className="legal-sidebar__card">
            <p className="legal-sidebar__heading">Quick Links</p>
            <nav>
              <ul className="legal-sidebar__links">
                {LEGAL_PAGES.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className={`legal-sidebar__link${
                        currentPath === page.href
                          ? " legal-sidebar__link--active"
                          : ""
                      }`}
                      aria-current={
                        currentPath === page.href ? "page" : undefined
                      }
                    >
                      <span aria-hidden="true">{page.icon}</span>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="legal-sidebar__card legal-sidebar__card--muted">
            <p className="legal-sidebar__heading">Need help?</p>
            <p className="legal-sidebar__text">
              Questions about our calculators or your privacy? We&apos;re here to
              help.
            </p>
            <Link href="/contact" className="btn btn--outline btn--sm legal-sidebar__cta">
              Contact us
            </Link>
          </div>
        </aside>

        <article className="legal-card">
          <div className="legal-page__content">{children}</div>

          <footer className="legal-card__footer">
            <p>
              This page forms part of our website policies. Please also read our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
              <Link href="/terms-of-use">Terms of Use</Link> and{" "}
              <Link href="/disclaimer">Disclaimer</Link>.
            </p>
            <Link href="/" className="site-link">
              ← Back to salary calculator
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}
