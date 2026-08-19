import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import PopularHourlyRates from "@/components/PopularHourlyRates";
import PopularSalaries from "@/components/PopularSalaries";
import PremiumHero from "@/components/PremiumHero";
import SalaryCalculator from "@/components/SalaryCalculator";
import SeoContent from "@/components/SeoContent";
import TaxGuide from "@/components/TaxGuide";
import ToolsShowcase from "@/components/ToolsShowcase";
import { SITE } from "@/lib/content";
import { getFaqJsonLd, getWebsiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Australian Salary After Tax ${SITE.year} — Pay & Take-Home Pay`,
  description:
    "See what you actually take home after tax, Medicare, HECS and super. Free pay calculators for Australia, using 2025–26 ATO rates.",
  keywords: [
    "salary calculator australia",
    "pay calculator australia",
    "take home pay calculator",
    "australian salary calculator 2025",
    "income tax calculator australia",
    "net pay calculator",
    "gross to net calculator australia",
    "hecs calculator",
    "superannuation calculator",
  ],
  alternates: { canonical: SITE.url },
  openGraph: {
    title: `Australian Salary & Pay After Tax ${SITE.year}`,
    description:
      "Calculate your take-home pay after tax, Medicare, HECS and super. Free tools for Australian workers.",
    type: "website",
    locale: "en_AU",
    url: SITE.url,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={getWebsiteJsonLd()} />
      <JsonLd data={getFaqJsonLd()} />

      <PremiumHero />

      <section id="salary-calculator" aria-label="Salary calculator tool">
        <div className="site-container calc-wrapper">
          <SalaryCalculator />
        </div>
      </section>

      <PopularSalaries />
      <PopularHourlyRates />
      <ToolsShowcase />
      <SeoContent />
      <TaxGuide />

      <section className="site-section" aria-labelledby="why-us-heading">
        <div className="site-container">
          <header className="section-header">
            <h2 id="why-us-heading" className="section-header__title">
              Why Australians Trust Our Calculator
            </h2>
          </header>
          <div className="features-grid">
            <article className="feature-card feature-card--premium">
              <span className="feature-card__icon" aria-hidden="true">⚡</span>
              <h3>Instant Results</h3>
              <p>
                See your take-home pay in milliseconds — no sign-up, no
                downloads, completely free.
              </p>
            </article>
            <article className="feature-card feature-card--premium">
              <span className="feature-card__icon" aria-hidden="true">📊</span>
              <h3>ATO-Aligned Accuracy</h3>
              <p>
                Updated for {SITE.year} tax brackets, 12% super guarantee,
                Medicare levy and graduated HECS rates.
              </p>
            </article>
            <article className="feature-card feature-card--premium">
              <span className="feature-card__icon" aria-hidden="true">🔒</span>
              <h3>Private &amp; Secure</h3>
              <p>
                All calculations run in your browser. We never store or share
                your salary data.
              </p>
            </article>
          </div>
        </div>
      </section>

      <FAQ limit={5} showViewAll />
    </>
  );
}
