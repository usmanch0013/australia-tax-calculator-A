import type { Metadata } from "next";
import Link from "next/link";
import PremiumHero from "@/components/PremiumHero";
import { POPULAR_HOURLY_RATES, SITE } from "@/lib/content";
import { TOOL_CATEGORIES, TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "All Calculators — Free Australian Pay & Tax Tools",
  description:
    "Every salary, tax, super and leave calculator you need — free, no sign-up, built for Aussie workers on 2025–26 ATO rates.",
  alternates: { canonical: `${SITE.url}/calculators` },
};

const CATEGORY_ICONS: Record<string, string> = {
  pay: "💵",
  tax: "📋",
  super: "🏦",
  work: "🛠️",
};

export default function CalculatorsHubPage() {
  const categories = Object.entries(TOOL_CATEGORIES);

  return (
    <>
      <PremiumHero
        compact
        badge={`${TOOLS.length} free tools`}
        title="Every calculator, one place"
        subtitle={`Salary, tax, super, HECS, leave — pick a tool, plug in your numbers, and see what you actually earn or owe. All updated for ${SITE.year}.`}
      />

      <section className="calc-hub">
        <div className="site-container">
          <div className="calc-hub__intro">
            <p>
              Job ads talk gross pay. Your bank account shows net. These tools
              bridge that gap — whether you&apos;re comparing offers, checking a
              bonus, or figuring out what a day rate really means after tax.
            </p>
          </div>

          {categories.map(([key, label]) => {
            const tools = TOOLS.filter((t) => t.category === key);
            if (tools.length === 0) return null;

            return (
              <div key={key} className="calc-hub__category">
                <header className="calc-hub__category-header">
                  <span className="calc-hub__category-icon" aria-hidden="true">
                    {CATEGORY_ICONS[key] ?? "📊"}
                  </span>
                  <div>
                    <h2 className="calc-hub__category-title">{label}</h2>
                    <p className="calc-hub__category-desc">
                      {tools.length} free {label.toLowerCase()} calculators
                    </p>
                  </div>
                </header>
                <div className="tools-grid tools-grid--hub">
                  {tools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/calculators/${tool.slug}`}
                      className="tool-card tool-card--hub"
                    >
                      <span className="tool-card__icon" aria-hidden="true">
                        {tool.icon}
                      </span>
                      <div className="tool-card__body">
                        <h3 className="tool-card__name">{tool.shortName}</h3>
                        <p className="tool-card__desc">{tool.description}</p>
                        <span className="tool-card__cta">Open calculator →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="calc-hub__quick">
            <div className="calc-hub__quick-block">
              <h2 className="calc-hub__quick-title">Hourly rates after tax</h2>
              <p className="calc-hub__quick-desc">
                Based on a 38-hour week and {SITE.year} tax rates.
              </p>
              <div className="salary-grid salary-grid--hourly">
                {POPULAR_HOURLY_RATES.map((rate) => (
                  <Link
                    key={rate}
                    href={`/hourly/${rate}`}
                    className="salary-grid__item"
                  >
                    <span className="salary-grid__amount">${rate}</span>
                    <span className="salary-grid__label">per hour after tax</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="calc-hub__quick-block">
              <h2 className="calc-hub__quick-title">Salary after tax</h2>
              <p className="calc-hub__quick-desc">
                Tap an amount for the full tax breakdown.
              </p>
              <div className="salary-grid">
                {[50000, 60000, 70000, 80000, 90000, 100000, 120000, 150000, 200000].map(
                  (amount) => (
                    <Link
                      key={amount}
                      href={`/salary/${amount}`}
                      className="salary-grid__item"
                    >
                      <span className="salary-grid__amount">
                        ${amount.toLocaleString("en-AU")}
                      </span>
                      <span className="salary-grid__label">after tax</span>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
