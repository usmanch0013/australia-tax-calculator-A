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

        <div className="salary-chips">
          {POPULAR_SALARIES.map((amount) => (
            <Link
              key={amount}
              href={`/salary/${amount}`}
              className="salary-chip"
            >
              ${amount.toLocaleString("en-AU")}
            </Link>
          ))}
        </div>

        <p className="site-section__label">High-income calculations</p>
        <div className="salary-chips">
          {HIGH_INCOME_SALARIES.map((amount) => (
            <Link
              key={amount}
              href={`/salary/${amount}`}
              className="salary-chip salary-chip--muted"
            >
              ${amount.toLocaleString("en-AU")}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
