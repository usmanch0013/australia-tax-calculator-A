import Link from "next/link";
import { SITE } from "@/lib/content";

export default function SeoContent() {
  return (
    <section
      className="site-section site-section--alt"
      aria-labelledby="about-calculator-heading"
    >
      <div className="site-container seo-content">
        <header className="section-header section-header--left">
          <h2 id="about-calculator-heading" className="section-header__title">
            Work Out Your Real Take-Home Pay
          </h2>
          <p className="section-header__desc">
            Job ads quote gross pay. Your bank account gets net pay. This site
            closes that gap for {SITE.year} ATO rates.
          </p>
        </header>

        <div className="seo-content__grid">
          <article>
            <h3>Salary calculator for {SITE.year}</h3>
            <p>
              Punch in your gross salary — annual, monthly, fortnightly or
              hourly — and you&apos;ll see what&apos;s left after income tax,
              the 2% Medicare levy, any HECS/HELP repayments and employer
              super. No account needed. The numbers stay in your browser.
            </p>
            <p>
              Got two offers on the table? A{" "}
              <Link href="/calculators/pay-calculator">pay calculator</Link>{" "}
              makes it easy to compare apples with apples, using the same tax
              brackets the ATO publishes for {SITE.year}, including the 16% and
              30% rates from the Stage 3 cuts.
            </p>
          </article>

          <article>
            <h3>Take-home pay across every pay cycle</h3>
            <p>
              The{" "}
              <Link href="/calculators/take-home-pay-calculator">
                take-home pay calculator
              </Link>{" "}
              breaks your net salary down by year, month, fortnight and week.
              Turn on HECS, salary sacrifice or a super-inclusive package if
              that matches your setup.
            </p>
            <p>
              We&apos;ve also built separate tools for{" "}
              <Link href="/calculators/income-tax-calculator">income tax</Link>,{" "}
              <Link href="/calculators/hecs-calculator">HECS</Link>,{" "}
              <Link href="/calculators/bonus-tax-calculator">bonus tax</Link>,{" "}
              <Link href="/calculators/salary-sacrifice-calculator">
                salary sacrifice
              </Link>
              ,{" "}
              <Link href="/calculators/hourly-to-salary-calculator">
                hourly to salary
              </Link>{" "}
              and{" "}
              <Link href="/calculators/casual-loading-calculator">
                casual loading
              </Link>{" "}
              — pick the one that fits your question.
            </p>
          </article>

          <article>
            <h3>Gross to net, net to gross, day rates</h3>
            <p>
              Know your target take-home but not the gross figure to ask for?
              The{" "}
              <Link href="/calculators/net-to-gross-calculator">
                net to gross calculator
              </Link>{" "}
              works backwards. Going the other way, the{" "}
              <Link href="/calculators/gross-to-net-calculator">
                gross to net calculator
              </Link>{" "}
              shows what actually hits your account.
            </p>
            <p>
              Short on time? Try a pre-filled page —{" "}
              <Link href="/salary/80000">$80k after tax</Link>,{" "}
              <Link href="/salary/100000">$100k after tax</Link> or{" "}
              <Link href="/hourly/35">$35/hr after tax</Link> — then tweak the
              main calculator for your exact numbers.
            </p>
          </article>

          <article>
            <h3>Who actually uses this?</h3>
            <p>
              Anyone staring at a payslip and wondering where the money went.
              Full-timers, casuals, grads paying off HECS, contractors quoting
              day rates, people weighing up a pay rise or redundancy payout.
            </p>
            <p>
              Everything on {SITE.name} is free. Have a look at the{" "}
              <Link href="/calculators/pay-rise-calculator">pay rise tool</Link>
              , the{" "}
              <Link href="/calculators/redundancy-pay-calculator">
                redundancy calculator
              </Link>{" "}
              or the full{" "}
              <Link href="/calculators">tools list</Link>. Still stuck? The{" "}
              <Link href="/faq">FAQ</Link> covers the usual tax questions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
