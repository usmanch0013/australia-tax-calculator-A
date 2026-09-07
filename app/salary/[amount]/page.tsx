import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PremiumHero from "@/components/PremiumHero";
import PopularSalaries from "@/components/PopularSalaries";
import SalaryCalculator from "@/components/SalaryCalculator";
import { HIGH_INCOME_SALARIES, POPULAR_SALARIES, SITE } from "@/lib/content";
import {
  getBreadcrumbJsonLd,
  getFaqJsonLdFromItems,
  getSalaryPageJsonLd,
} from "@/lib/seo";
import { getSalaryFaqs, getSalaryInsights } from "@/lib/salary-content";
import {
  calculateSalary,
  defaultInput,
  formatCurrency,
} from "@/lib/calculator";

const ALL_SALARIES = [...POPULAR_SALARIES, ...HIGH_INCOME_SALARIES];

interface PageProps {
  params: Promise<{ amount: string }>;
}

function parseAmount(raw: string): number | null {
  const amount = parseInt(raw, 10);
  if (!Number.isFinite(amount) || amount < 1000 || amount > 50_000_000) {
    return null;
  }
  return amount;
}

export function generateStaticParams() {
  return ALL_SALARIES.map((amount) => ({ amount: String(amount) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { amount: raw } = await params;
  const amount = parseAmount(raw);
  if (!amount) return { title: "Salary Calculator" };

  const formatted = amount.toLocaleString("en-AU");
  return {
    title: `$${formatted} Salary After Tax Australia ${SITE.year}`,
    description: `How much is $${formatted} after tax in Australia? Free salary calculator showing take-home pay, income tax, Medicare levy and super on a $${formatted} annual salary.`,
    keywords: [
      `$${formatted} after tax`,
      `$${formatted} salary after tax australia`,
      "salary calculator australia",
      "take home pay calculator",
    ],
    alternates: {
      canonical: `${SITE.url}/salary/${amount}`,
    },
    openGraph: {
      title: `$${formatted} After Tax — Australian Salary Calculator`,
      description: `See exactly how much you take home on a $${formatted} salary in Australia.`,
      locale: "en_AU",
    },
  };
}

export default async function SalaryPage({ params }: PageProps) {
  const { amount: raw } = await params;
  const amount = parseAmount(raw);
  if (!amount) notFound();

  const results = calculateSalary({ ...defaultInput, salary: amount });
  const formatted = amount.toLocaleString("en-AU");
  const pageUrl = `${SITE.url}/salary/${amount}`;
  const salaryFaqs = getSalaryFaqs(amount, results.net, results.net / 52);
  const insights = getSalaryInsights(amount, results.net);

  return (
    <>
      <JsonLd data={getSalaryPageJsonLd(amount)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", url: SITE.url },
          { name: `$${formatted} After Tax`, url: pageUrl },
        ])}
      />
      <JsonLd data={getFaqJsonLdFromItems(salaryFaqs)} />

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="site-container">
          <ol className="breadcrumb__list">
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">${formatted} After Tax</li>
          </ol>
        </div>
      </nav>

      <PremiumHero
        compact
        badge={`🇦🇺 ${SITE.year} Australian tax rates`}
        title={`$${formatted} Salary After Tax in Australia`}
        subtitle={`On a $${formatted} gross annual salary, your estimated take-home pay is ${formatCurrency(results.net)} per year (${formatCurrency(results.net / 12)} per month) after income tax and Medicare.`}
      />

      <div className="site-container calc-wrapper">
        <SalaryCalculator initialSalary={amount} />
      </div>

      <section
        className="site-section site-section--alt"
        aria-labelledby="breakdown-heading"
      >
        <div className="site-container">
          <h2 id="breakdown-heading" className="section-header__title">
            ${formatted} Salary Breakdown
          </h2>
          <div className="breakdown-cards">
            <div className="breakdown-card">
              <span className="breakdown-card__label">Gross Salary</span>
              <span className="breakdown-card__value">
                {formatCurrency(amount)}
              </span>
            </div>
            <div className="breakdown-card">
              <span className="breakdown-card__label">Total Tax &amp; Deductions</span>
              <span className="breakdown-card__value breakdown-card__value--tax">
                {formatCurrency(results.deductions)}
              </span>
            </div>
            <div className="breakdown-card breakdown-card--highlight">
              <span className="breakdown-card__label">Take-Home Pay</span>
              <span className="breakdown-card__value">
                {formatCurrency(results.net)}
              </span>
            </div>
            <div className="breakdown-card">
              <span className="breakdown-card__label">Effective Tax Rate</span>
              <span className="breakdown-card__value">{results.effRate}%</span>
            </div>
            <div className="breakdown-card">
              <span className="breakdown-card__label">Marginal Tax Rate</span>
              <span className="breakdown-card__value">{results.marRate}%</span>
            </div>
            <div className="breakdown-card">
              <span className="breakdown-card__label">Super (employer)</span>
              <span className="breakdown-card__value">
                {formatCurrency(results.super)}
              </span>
            </div>
          </div>

          <div className="period-table-wrap">
            <table className="site-table">
              <caption className="sr-only">
                Pay period breakdown for ${formatted} salary
              </caption>
              <thead>
                <tr>
                  <th scope="col">Pay Period</th>
                  <th scope="col">Gross</th>
                  <th scope="col">Take-Home</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual</td>
                  <td>{formatCurrency(amount)}</td>
                  <td>{formatCurrency(results.net)}</td>
                </tr>
                <tr>
                  <td>Monthly</td>
                  <td>{formatCurrency(amount / 12)}</td>
                  <td>{formatCurrency(results.net / 12)}</td>
                </tr>
                <tr>
                  <td>Fortnightly</td>
                  <td>{formatCurrency(amount / 26)}</td>
                  <td>{formatCurrency(results.net / 26)}</td>
                </tr>
                <tr>
                  <td>Weekly</td>
                  <td>{formatCurrency(amount / 52)}</td>
                  <td>{formatCurrency(results.net / 52)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="site-section" aria-labelledby="salary-insights-heading">
        <div className="site-container">
          <header className="section-header section-header--left">
            <h2 id="salary-insights-heading" className="section-header__title">
              ${formatted} after tax — what to know
            </h2>
          </header>
          <div className="salary-insights">
            {insights.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="salary-insights__p">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="salary-insights__links">
            <p className="salary-insights__links-title">Related calculators</p>
            <ul className="salary-insights__list">
              {insights.relatedSlugs.map((item) => (
                <li key={item.slug}>
                  <Link href={`/calculators/${item.slug}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="faq-list salary-insights__faq">
            {salaryFaqs.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PopularSalaries />
    </>
  );
}
