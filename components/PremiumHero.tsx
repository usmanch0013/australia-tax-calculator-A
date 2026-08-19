import Link from "next/link";
import { SITE } from "@/lib/content";
import { TOOLS } from "@/lib/tools";

interface PremiumHeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  compact?: boolean;
}

export default function PremiumHero({
  title = `Australian Salary Calculator ${SITE.year}`,
  subtitle = "See your real take-home pay after tax, Medicare, HECS and super. Free tools for Aussie workers — instant results, no account needed.",
  badge = `${SITE.year} ATO tax rates`,
  compact = false,
}: PremiumHeroProps) {
  if (compact) {
    return (
      <section className="page-hero-bar" aria-labelledby="hero-heading">
        <div className="site-container page-hero-bar__inner">
          <div className="page-hero-bar__content">
            <span className="page-hero-bar__badge">{badge}</span>
            <h1 id="hero-heading" className="page-hero-bar__title">{title}</h1>
            {subtitle && (
              <p className="page-hero-bar__subtitle">{subtitle}</p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="light-hero" aria-labelledby="hero-heading">
      <div className="site-container light-hero__grid">
        <div className="light-hero__main">
          <span className="light-hero__badge">{badge}</span>
          <h1 id="hero-heading" className="light-hero__title">{title}</h1>
          <p className="light-hero__subtitle">{subtitle}</p>
          <div className="light-hero__actions">
            <a href="#salary-calculator" className="btn btn--primary">
              Start Calculating
            </a>
            <Link href="/calculators" className="btn btn--secondary">
              All {TOOLS.length} tools
            </Link>
          </div>
        </div>

        <aside className="light-hero__aside" aria-label="Key features">
          <div className="hero-fact-card">
            <div className="hero-fact">
              <strong>{TOOLS.length}+</strong>
              <span>Free calculators</span>
            </div>
            <div className="hero-fact">
              <strong>ATO</strong>
              <span>{SITE.year} rates</span>
            </div>
            <div className="hero-fact">
              <strong>12%</strong>
              <span>Super guarantee</span>
            </div>
            <div className="hero-fact">
              <strong>100%</strong>
              <span>Browser-based</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
