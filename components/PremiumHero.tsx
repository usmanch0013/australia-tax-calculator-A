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
  subtitle = "Work out what you actually take home after tax, Medicare, HECS and super. Free calculators for Aussie workers — no sign-up, no fuss.",
  badge = `🇦🇺 Updated for ${SITE.year} ATO tax rates`,
  compact = false,
}: PremiumHeroProps) {
  return (
    <section
      className={`premium-hero${compact ? " premium-hero--compact" : ""}`}
      aria-labelledby="hero-heading"
    >
      <div className="premium-hero__bg" aria-hidden="true" />
      <div className="site-container premium-hero__inner">
        <span className="premium-hero__badge">{badge}</span>
        <h1 id="hero-heading" className="premium-hero__title">
          {title}
        </h1>
        <p className="premium-hero__subtitle">{subtitle}</p>

        {!compact && (
          <div className="trust-bar" role="list" aria-label="Key features">
            <div className="trust-bar__item" role="listitem">
              <strong>{TOOLS.length}+</strong>
              <span>Free calculators</span>
            </div>
            <div className="trust-bar__item" role="listitem">
              <strong>ATO</strong>
              <span>{SITE.year} rates</span>
            </div>
            <div className="trust-bar__item" role="listitem">
              <strong>12%</strong>
              <span>Super guarantee</span>
            </div>
            <div className="trust-bar__item" role="listitem">
              <strong>Free</strong>
              <span>No sign-up</span>
            </div>
          </div>
        )}

        {!compact && (
          <div className="premium-hero__actions">
            <a href="#salary-calculator" className="btn btn--primary">
              Calculate Take-Home Pay
            </a>
            <Link href="/calculators" className="btn btn--ghost">
              Browse All Tools
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
