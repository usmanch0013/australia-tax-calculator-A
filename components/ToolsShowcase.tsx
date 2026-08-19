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
        <header className="section-header section-header--left">
          <p className="section-header__eyebrow">More free tools</p>
          <h2 id="tools-showcase-heading" className="section-header__title">
            Pay, tax &amp; super calculators
          </h2>
          <p className="section-header__desc">
            {TOOLS.length} calculators for the stuff payslips don&apos;t spell
            out clearly — HECS, bonuses, day rates, leave payouts and more.
          </p>
        </header>

        <div className="tools-grid tools-grid--hub">
          {featured.map((tool) => (
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
            See all {TOOLS.length} calculators
          </Link>
        </p>
      </div>
    </section>
  );
}
