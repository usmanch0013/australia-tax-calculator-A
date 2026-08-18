import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/content";

interface FAQProps {
  limit?: number;
  showViewAll?: boolean;
  hideHeader?: boolean;
}

export default function FAQ({ limit, showViewAll = false, hideHeader = false }: FAQProps) {
  const items = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;

  return (
    <section className="site-section">
      <div className="site-container">
        {!hideHeader && (
          <>
            <h2 className="site-section__title">Frequently Asked Questions</h2>
            <p className="site-section__subtitle">
              Common questions about Australian income tax, Medicare, super and
              take-home pay.
            </p>
          </>
        )}

        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        {showViewAll && (
          <p className="site-section__cta">
            <Link href="/faq" className="site-link">
              View all questions →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
