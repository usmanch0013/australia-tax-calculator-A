import Link from "next/link";
import PremiumHero from "@/components/PremiumHero";
import ToolGuide from "@/components/ToolGuide";
import type { ToolMeta } from "@/lib/tools";
import { TOOLS } from "@/lib/tools";
import { getGuideBySlug } from "@/lib/guides";

interface ToolShellProps {
  tool: ToolMeta;
  children: React.ReactNode;
}

export default function ToolShell({ tool, children }: ToolShellProps) {
  const related = TOOLS.filter(
    (t) => t.category === tool.category && t.slug !== tool.slug
  ).slice(0, 4);
  const guide = getGuideBySlug(tool.slug);

  return (
    <div className="tool-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="site-container">
          <ol className="breadcrumb__list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/calculators">Calculators</Link></li>
            <li aria-current="page">{tool.shortName}</li>
          </ol>
        </div>
      </nav>

      <PremiumHero
        compact
        title={tool.shortName}
        subtitle={tool.description}
        badge={`${tool.icon} Free · ${tool.category === "pay" ? "Pay" : tool.category === "tax" ? "Tax" : tool.category === "super" ? "Super" : "Work"} · Australia`}
      />

      <section className="tool-page__workspace" aria-label={`${tool.shortName} calculator`}>
        <div className="site-container tool-page__calc">{children}</div>
      </section>

      {guide && <ToolGuide guide={guide} />}

      {related.length > 0 && (
        <section
          className="site-section site-section--alt tool-page__related"
          aria-labelledby="related-tools-heading"
        >
          <div className="site-container">
            <header className="section-header">
              <h2 id="related-tools-heading" className="section-header__title">
                Related Calculators
              </h2>
            </header>
            <div className="tools-grid tools-grid--compact">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  href={`/calculators/${t.slug}`}
                  className="tool-card tool-card--premium"
                >
                  <span className="tool-card__icon" aria-hidden="true">
                    {t.icon}
                  </span>
                  <h3 className="tool-card__name">{t.shortName}</h3>
                  <span className="tool-card__cta">Calculate →</span>
                </Link>
              ))}
            </div>
            <p className="site-section__cta">
              <Link href="/calculators" className="site-link">
                View all calculators →
              </Link>
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
