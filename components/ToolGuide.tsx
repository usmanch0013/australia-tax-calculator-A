import Link from "next/link";
import type { ToolGuide as ToolGuideType } from "@/lib/guides/types";

interface ToolGuideProps {
  guide: ToolGuideType;
}

export default function ToolGuide({ guide }: ToolGuideProps) {
  return (
    <section
      className="guide-section"
      aria-labelledby="tool-guide-heading"
    >
      <div className="site-container">
        <div className="guide-layout">
          <aside className="guide-sidebar" aria-label="Guide sections">
            <div className="guide-sidebar__card">
              <p className="guide-sidebar__label">In this guide</p>
              <nav>
                <ol className="guide-sidebar__nav">
                  {guide.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#guide-section-${index}`}
                        className="guide-sidebar__link"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                  {guide.faqs.length > 0 && (
                    <li>
                      <a href="#guide-faq" className="guide-sidebar__link">
                        Common questions
                      </a>
                    </li>
                  )}
                </ol>
              </nav>
            </div>
            <div className="guide-sidebar__tip">
              <strong>Quick tip</strong>
              <p>
                Numbers here are estimates — your payslip and tax return are
                what actually matter. Not personal tax advice.
              </p>
            </div>
          </aside>

          <div className="guide-main">
            <header className="guide-main__header">
              <p className="guide-main__eyebrow">How it works</p>
              <h2 id="tool-guide-heading" className="guide-main__title">
                {guide.title}
              </h2>
              <p className="guide-main__intro">{guide.intro}</p>
            </header>

            <div className="guide-main__sections">
              {guide.sections.map((section, index) => {
                const Heading = section.level === 3 ? "h4" : "h3";
                return (
                  <article
                    key={section.heading}
                    id={`guide-section-${index}`}
                    className="guide-block"
                  >
                    <div className="guide-block__index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="guide-block__content">
                      <Heading className="guide-block__heading">
                        {section.heading}
                      </Heading>
                      {section.paragraphs.map((para) => (
                        <p key={para.slice(0, 48)}>{para}</p>
                      ))}
                      {section.list && section.list.length > 0 && (
                        <ul className="guide-block__list">
                          {section.list.map((item) => (
                            <li key={item.slice(0, 48)}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {guide.faqs.length > 0 && (
              <section
                id="guide-faq"
                className="guide-faq"
                aria-labelledby="guide-faq-heading"
              >
                <h3 id="guide-faq-heading" className="guide-faq__title">
                  People often ask
                </h3>
                <div className="guide-faq__list">
                  {guide.faqs.map((faq) => (
                    <details key={faq.question} className="guide-faq__item">
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <p className="guide-disclaimer">
              These figures are rough guides, not tax or financial advice. For
              the full picture see our{" "}
              <Link href="/disclaimer">disclaimer</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
