import Link from "next/link";
import { POPULAR_HOURLY_RATES, SITE } from "@/lib/content";

export default function PopularHourlyRates() {
  return (
    <section className="site-section site-section--alt">
      <div className="site-container">
        <h2 className="site-section__title">
          Popular Hourly Wage After Tax
        </h2>
        <p className="site-section__subtitle">
          See take-home pay for common hourly rates in Australia — based on a
          38-hour week and {SITE.year} tax rates.
        </p>

        <div className="salary-chips">
          {POPULAR_HOURLY_RATES.map((rate) => (
            <Link
              key={rate}
              href={`/hourly/${rate}`}
              className="salary-chip"
            >
              ${rate}/hr after tax
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
