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

const CATEGORY_LABELS: Record<ToolMeta["category"], string> = {
  pay: "Pay & salary",
  tax: "Tax",
  super: "Super",
  work: "Work & leave",
};

export default function ToolShell({ tool, children }: ToolShellProps) {
  const related = TOOLS.filter(
    (t) => t.category === tool.category && t.slug !== tool.slug
  ).slice(0, 4);
  const guide = getGuideBySlug(tool.slug);

  return (
    <div className="tool-page">
      <nav className="breadcrumb breadcrumb--tool" aria-label="Breadcrumb">
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
        title={tool.name}
        subtitle={tool.seoIntro}
        badge={`${CATEGORY_LABELS[tool.category]} · Free`}
      />

      <section
        className="tool-page__workspace"
        aria-label={`${tool.shortName} calculator`}
      >
        <div className="site-container">
          <div className="tool-workspace-card">
            <div className="tool-workspace-card__label">
              <span className="tool-workspace-card__icon" aria-hidden="true">
                {tool.icon}
              </span>
              <div>
                <p className="tool-workspace-card__eyebrow">Calculator</p>
                <p className="tool-workspace-card__name">{tool.shortName}</p>
              </div>
            </div>
            <div className="tool-page__calc">{children}</div>
          </div>
        </div>
      </section>

      {guide && <ToolGuide guide={guide} />}

      {related.length > 0 && (
        <section
          className="site-section tool-page__related"
          aria-labelledby="related-tools-heading"
        >
          <div className="site-container">
            <header className="section-header section-header--left">
              <p className="section-header__eyebrow">More tools</p>
              <h2 id="related-tools-heading" className="section-header__title">
                You might also need
              </h2>
            </header>
            <div className="tools-grid tools-grid--hub">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  href={`/calculators/${t.slug}`}
                  className="tool-card tool-card--hub"
                >
                  <span className="tool-card__icon" aria-hidden="true">
                    {t.icon}
                  </span>
                  <div className="tool-card__body">
                    <h3 className="tool-card__name">{t.shortName}</h3>
                    <p className="tool-card__desc">{t.description}</p>
                    <span className="tool-card__cta">Open calculator →</span>
                  </div>
                </Link>
              ))}
            </div>
            <p className="site-section__cta">
              <Link href="/calculators" className="btn btn--outline">
                Browse all calculators
              </Link>
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
