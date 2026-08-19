import Link from "next/link";
import { HIGH_INCOME_SALARIES, POPULAR_SALARIES, SITE } from "@/lib/content";

export default function PopularSalaries() {
  return (
    <section className="site-section">
      <div className="site-container">
        <h2 className="site-section__title">
          Popular Salary After Tax in Australia
        </h2>
        <p className="site-section__subtitle">
          Click any amount to see a detailed tax breakdown, net pay and
          take-home pay calculator result for {SITE.year}.
        </p>

        <div className="salary-grid">
          {POPULAR_SALARIES.map((amount) => (
            <Link
              key={amount}
              href={`/salary/${amount}`}
              className="salary-grid__item"
            >
              <span className="salary-grid__amount">
                ${amount.toLocaleString("en-AU")}
              </span>
              <span className="salary-grid__label">after tax</span>
            </Link>
          ))}
        </div>

        <p className="site-section__label">High-income calculations</p>
        <div className="salary-grid">
          {HIGH_INCOME_SALARIES.map((amount) => (
            <Link
              key={amount}
              href={`/salary/${amount}`}
              className="salary-grid__item salary-grid__item--muted"
            >
              <span className="salary-grid__amount">
                ${amount.toLocaleString("en-AU")}
              </span>
              <span className="salary-grid__label">after tax</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
