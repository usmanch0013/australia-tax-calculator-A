import type { Metadata } from "next";
import Link from "next/link";
import PremiumHero from "@/components/PremiumHero";
import { POPULAR_HOURLY_RATES, SITE } from "@/lib/content";
import { TOOL_CATEGORIES, TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "All Calculators — Free Australian Pay & Tax Tools",
  description:
    "Browse free salary, tax, super and leave calculators for Australia. Updated for 2025–26 ATO rates.",
  alternates: { canonical: `${SITE.url}/calculators` },
};

export default function CalculatorsHubPage() {
  const categories = Object.entries(TOOL_CATEGORIES);

  return (
    <>
      <PremiumHero
        compact
        badge={`🇦🇺 ${TOOLS.length}+ free calculators`}
        title="Australian Pay & Tax Calculators"
        subtitle={`Free salary, tax, super and HECS tools for Australian workers — updated for ${SITE.year} ATO rates.`}
      />

      <section className="site-section">
        <div className="site-container">
          {categories.map(([key, label]) => {
            const tools = TOOLS.filter((t) => t.category === key);
            if (tools.length === 0) return null;

            return (
              <div key={key} className="tools-category">
                <h2 className="tools-category__title">{label}</h2>
                <div className="tools-grid">
                  {tools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/calculators/${tool.slug}`}
                      className="tool-card tool-card--premium"
                    >
                      <span className="tool-card__icon" aria-hidden="true">{tool.icon}</span>
                      <h3 className="tool-card__name">{tool.name}</h3>
                      <span className="tool-card__desc">{tool.description}</span>
                      <span className="tool-card__cta">Calculate now →</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="tools-category">
            <h2 className="tools-category__title">Hourly Wage After Tax</h2>
            <p className="site-section__subtitle" style={{ marginBottom: "1.5rem" }}>
              Popular hourly rates with full tax breakdown — based on a 38-hour
              week.
            </p>
            <div className="salary-chips">
              {POPULAR_HOURLY_RATES.map((rate) => (
                <Link
                  key={rate}
                  href={`/hourly/${rate}`}
                  className="salary-chip salary-chip--muted"
                >
                  ${rate}/hr after tax
                </Link>
              ))}
            </div>
          </div>

          <div className="tools-category">
            <h2 className="tools-category__title">Salary After Tax</h2>
            <p className="site-section__subtitle" style={{ marginBottom: "1.5rem" }}>
              Quick lookups for popular salary amounts — each with a full tax
              breakdown.
            </p>
            <div className="salary-chips">
              {[50000, 60000, 70000, 80000, 90000, 100000, 120000, 150000, 200000].map(
                (amount) => (
                  <Link
                    key={amount}
                    href={`/salary/${amount}`}
                    className="salary-chip"
                  >
                    ${amount.toLocaleString("en-AU")} after tax
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
