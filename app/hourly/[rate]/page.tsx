import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PopularHourlyRates from "@/components/PopularHourlyRates";
import PremiumHero from "@/components/PremiumHero";
import { POPULAR_HOURLY_RATES, SITE } from "@/lib/content";
import { calcHourlyAfterTax } from "@/lib/extra-tools";
import {
  getBreadcrumbJsonLd,
  getHourlyPageJsonLd,
} from "@/lib/seo";
import { formatCurrency } from "@/lib/tax";

interface PageProps {
  params: Promise<{ rate: string }>;
}

function parseRate(raw: string): number | null {
  const rate = parseFloat(raw);
  if (!Number.isFinite(rate) || rate < 10 || rate > 500) return null;
  if (!(POPULAR_HOURLY_RATES as readonly number[]).includes(rate)) {
    return null;
  }
  return rate;
}

export function generateStaticParams() {
  return POPULAR_HOURLY_RATES.map((rate) => ({ rate: String(rate) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { rate: raw } = await params;
  const rate = parseRate(raw);
  if (!rate) return { title: "Hourly Wage Calculator" };

  return {
    title: `$${rate}/Hour After Tax Australia ${SITE.year}`,
    description: `How much is $${rate} per hour after tax in Australia? See annual, weekly and hourly take-home pay on a $${rate}/hr wage (38-hour week).`,
    keywords: [
      `$${rate} an hour after tax`,
      `$${rate} per hour after tax australia`,
      "hourly wage calculator",
      "hourly rate after tax",
    ],
    alternates: { canonical: `${SITE.url}/hourly/${rate}` },
    openGraph: {
      title: `$${rate}/hr After Tax — Australian Wage Calculator`,
      description: `Take-home pay on a $${rate} hourly wage in Australia.`,
      locale: "en_AU",
    },
  };
}

export default async function HourlyPage({ params }: PageProps) {
  const { rate: raw } = await params;
  const rate = parseRate(raw);
  if (!rate) notFound();

  const result = calcHourlyAfterTax(rate);
  const pageUrl = `${SITE.url}/hourly/${rate}`;

  return (
    <>
      <JsonLd data={getHourlyPageJsonLd(rate)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", url: SITE.url },
          { name: `$${rate}/hr After Tax`, url: pageUrl },
        ])}
      />

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="site-container">
          <ol className="breadcrumb__list">
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">${rate}/hr After Tax</li>
          </ol>
        </div>
      </nav>

      <PremiumHero
        compact
        badge={`🇦🇺 ${SITE.year} · 38-hour week`}
        title={`$${rate}/Hour After Tax in Australia`}
        subtitle={`On a $${rate}/hr gross hourly wage (38 hours/week), your estimated take-home is ${formatCurrency(result.netHourly)}/hr or ${formatCurrency(result.netAnnual)} per year after tax.`}
      />

      <section className="site-section">
        <div className="site-container">
          <h2 className="section-header__title">${rate}/hr Wage Breakdown</h2>
          <div className="breakdown-cards">
            <div className="breakdown-card">
              <span className="breakdown-card__label">Gross Hourly</span>
              <span className="breakdown-card__value">{formatCurrency(rate)}</span>
            </div>
            <div className="breakdown-card">
              <span className="breakdown-card__label">Annual Gross</span>
              <span className="breakdown-card__value">{formatCurrency(result.annual)}</span>
            </div>
            <div className="breakdown-card">
              <span className="breakdown-card__label">Annual Tax</span>
              <span className="breakdown-card__value breakdown-card__value--tax">
                {formatCurrency(result.tax)}
              </span>
            </div>
            <div className="breakdown-card breakdown-card--highlight">
              <span className="breakdown-card__label">Hourly After Tax</span>
              <span className="breakdown-card__value">{formatCurrency(result.netHourly)}</span>
            </div>
            <div className="breakdown-card">
              <span className="breakdown-card__label">Weekly Take-Home</span>
              <span className="breakdown-card__value">{formatCurrency(result.netAnnual / 52)}</span>
            </div>
            <div className="breakdown-card">
              <span className="breakdown-card__label">Annual Take-Home</span>
              <span className="breakdown-card__value">{formatCurrency(result.netAnnual)}</span>
            </div>
          </div>

          <div className="period-table-wrap">
            <table className="site-table">
              <caption className="sr-only">
                Pay breakdown for ${rate} per hour wage
              </caption>
              <thead>
                <tr>
                  <th scope="col">Period</th>
                  <th scope="col">Gross</th>
                  <th scope="col">Take-Home</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hourly</td>
                  <td>{formatCurrency(rate)}</td>
                  <td>{formatCurrency(result.netHourly)}</td>
                </tr>
                <tr>
                  <td>Weekly</td>
                  <td>{formatCurrency(result.annual / 52)}</td>
                  <td>{formatCurrency(result.netAnnual / 52)}</td>
                </tr>
                <tr>
                  <td>Fortnightly</td>
                  <td>{formatCurrency(result.annual / 26)}</td>
                  <td>{formatCurrency(result.netAnnual / 26)}</td>
                </tr>
                <tr>
                  <td>Monthly</td>
                  <td>{formatCurrency(result.annual / 12)}</td>
                  <td>{formatCurrency(result.netAnnual / 12)}</td>
                </tr>
                <tr>
                  <td>Annual</td>
                  <td>{formatCurrency(result.annual)}</td>
                  <td>{formatCurrency(result.netAnnual)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="site-section__cta">
            <Link href="/calculators/hourly-to-salary-calculator" className="btn btn--outline">
              Custom hourly to salary calculator →
            </Link>
          </p>
        </div>
      </section>

      <PopularHourlyRates />
    </>
  );
}
