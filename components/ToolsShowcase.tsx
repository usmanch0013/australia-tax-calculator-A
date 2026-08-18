import Link from "next/link";
import { TOOL_CATEGORIES, TOOLS } from "@/lib/tools";

export default function ToolsShowcase() {
  const featured = TOOLS.slice(0, 6);

  return (
    <section
      className="site-section"
      aria-labelledby="tools-showcase-heading"
    >
      <div className="site-container">
        <header className="section-header">
          <p className="section-header__eyebrow">Free Australian Tools</p>
          <h2 id="tools-showcase-heading" className="section-header__title">
            Pay, Tax &amp; Super Calculators
          </h2>
          <p className="section-header__desc">
            {TOOLS.length}+ free calculators for salary, income tax, HECS,
            superannuation, bonus tax and more — all updated for Australian
            2025–26 rates.
          </p>
        </header>

        <div className="tools-grid">
          {featured.map((tool) => (
            <Link
              key={tool.slug}
              href={`/calculators/${tool.slug}`}
              className="tool-card tool-card--premium"
            >
              <span className="tool-card__icon" aria-hidden="true">
                {tool.icon}
              </span>
              <h3 className="tool-card__name">{tool.shortName}</h3>
              <p className="tool-card__desc">{tool.description}</p>
              <span className="tool-card__cta">Calculate now →</span>
            </Link>
          ))}
        </div>

        <div className="category-pills" aria-label="Calculator categories">
          {Object.entries(TOOL_CATEGORIES).map(([key, label]) => {
            const count = TOOLS.filter((t) => t.category === key).length;
            return (
              <Link
                key={key}
                href="/calculators"
                className="category-pill"
              >
                {label}
                <span className="category-pill__count">{count}</span>
              </Link>
            );
          })}
        </div>

        <p className="site-section__cta">
          <Link href="/calculators" className="btn btn--outline">
            View all {TOOLS.length} calculators
          </Link>
        </p>
      </div>
    </section>
  );
}
