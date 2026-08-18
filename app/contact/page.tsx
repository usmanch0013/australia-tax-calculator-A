import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/legal";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${SITE.name} for questions, feedback, calculator issues or support.`,
  alternates: { canonical: `${SITE.url}/contact` },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact Us"
      description="Have a question, spotted an issue, or want to suggest a new calculator? We'd love to hear from you."
      showDate={false}
      currentPath="/contact"
    >
      <div className="contact-layout">
        <div className="contact-layout__form">
          <h2>Send us a message</h2>
          <p>
            Fill out the form below and we&apos;ll get back to you as soon as we
            can. For calculation issues, please include the salary amount and
            options you used so we can investigate quickly.
          </p>
          <ContactForm />
        </div>

        <div className="contact-layout__info">
          <div className="contact-info-card">
            <span className="contact-info-card__icon" aria-hidden="true">✉️</span>
            <h3>Email</h3>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>

          <div className="contact-info-card">
            <span className="contact-info-card__icon" aria-hidden="true">⏱️</span>
            <h3>Response time</h3>
            <p>
              We aim to reply within 2–3 business days. Messages received on
              weekends or public holidays are answered on the next business day.
            </p>
          </div>

          <div className="contact-info-card">
            <span className="contact-info-card__icon" aria-hidden="true">🧮</span>
            <h3>Report a calculation issue</h3>
            <p>Please include:</p>
            <ul>
              <li>The salary or wage amount you entered</li>
              <li>All toggles and options selected (HECS, super mode, etc.)</li>
              <li>What result you expected vs. what you received</li>
              <li>Your employment type if relevant (PAYG, casual, contractor)</li>
            </ul>
          </div>

          <div className="contact-info-card contact-info-card--highlight">
            <span className="contact-info-card__icon" aria-hidden="true">⚠️</span>
            <h3>We cannot provide tax advice</h3>
            <p>
              {SITE.name} provides general calculator estimates only. We are not
              registered tax agents or financial advisers. For personalised tax
              advice, please consult a qualified professional or visit the{" "}
              <a
                href="https://www.ato.gov.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                ATO website
              </a>
              .
            </p>
          </div>

          <div className="contact-info-card">
            <span className="contact-info-card__icon" aria-hidden="true">🤝</span>
            <h3>Business enquiries</h3>
            <p>
              For partnership, advertising, media or licensing enquiries, select
              &quot;Business / advertising&quot; in the form and include details
              about your proposal.
            </p>
          </div>
        </div>
      </div>
    </LegalPage>
  );
}
