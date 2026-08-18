import Link from "next/link";
import type { ToolGuide as ToolGuideType } from "@/lib/guides/types";

interface ToolGuideProps {
  guide: ToolGuideType;
}

export default function ToolGuide({ guide }: ToolGuideProps) {
  return (
    <section
      className="site-section site-section--alt tool-guide"
      aria-labelledby="tool-guide-heading"
    >
      <div className="site-container">
        <header className="tool-guide__header">
          <p className="tool-guide__eyebrow">Complete Guide</p>
          <h2 id="tool-guide-heading" className="tool-guide__title">
            {guide.title}
          </h2>
          <p className="tool-guide__intro">{guide.intro}</p>
        </header>

        <div className="tool-guide__body">
          {guide.sections.map((section) => {
            const Heading = section.level === 3 ? "h4" : "h3";
            return (
              <section key={section.heading} className="tool-guide__section">
                <Heading className="tool-guide__heading">
                  {section.heading}
                </Heading>
                {section.paragraphs.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
                {section.list && section.list.length > 0 && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}

          {guide.faqs.length > 0 && (
            <section className="tool-guide__faq" aria-labelledby="guide-faq-heading">
              <h3 id="guide-faq-heading" className="tool-guide__heading">
                Frequently Asked Questions
              </h3>
              <div className="faq-list">
                {guide.faqs.map((faq) => (
                  <details key={faq.question} className="faq-item">
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>

        <p className="tool-guide__disclaimer">
          These figures are estimates for general information — not personal tax
          or financial advice. See our{" "}
          <Link href="/disclaimer">Disclaimer</Link> for the full picture.
        </p>
      </div>
    </section>
  );
}
