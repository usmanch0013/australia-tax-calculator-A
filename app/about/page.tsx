import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/content";
import { TOOLS } from "@/lib/tools";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${SITE.name} — Australia's free salary, pay and tax calculator built for workers, job seekers and employers.`,
  alternates: { canonical: `${SITE.url}/about` },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <LegalPage
      title={`About ${SITE.name}`}
      description="Free salary and tax calculators for Aussie workers — no sign-up, your numbers stay in your browser."
      showDate={false}
      currentPath="/about"
    >
      <div className="legal-callout legal-callout--info">
        <strong>Our promise:</strong> Free calculators, no sign-up, no salary
        data stored — ever. Updated for {SITE.year} ATO rates.
      </div>

      <h2>Who we are</h2>
      <p>
        {SITE.name} started with a simple frustration: job ads quote gross pay,
        but rent and groceries come out of net pay. We built free calculators
        so you can see what actually lands in your account — without
        spreadsheets, paid apps or tax jargon.
      </p>
      <p>
        Whether you&apos;re comparing job offers, negotiating a pay rise,
        calculating redundancy pay, or simply wondering &quot;how much is $80,000
        after tax?&quot; — our tools are designed to give you fast, reliable
        estimates using official Australian tax data.
      </p>

      <h2>Our Mission</h2>
      <p>
        Salary transparency shouldn&apos;t be a luxury. Too many Australians
        accept job offers or pay rises without knowing their real take-home pay
        after income tax, the Medicare levy, HECS/HELP repayments, and
        superannuation. Our mission is to make pay calculations accessible,
        accurate, and free for everyone.
      </p>

      <h2>What We Offer</h2>
      <p>
        {SITE.name} provides {TOOLS.length}+ free calculators and lookup pages,
        including:
      </p>
      <ul>
        <li>
          <strong>Main salary calculator</strong> — full gross-to-net breakdown
          with HECS, super modes, Medicare exemptions, salary sacrifice, and
          every pay period
        </li>
        <li>
          <strong>Specialist tools</strong> — income tax, Medicare levy, HECS,
          bonus tax, superannuation, pay rise, redundancy, Division 293,
          novated lease, and more
        </li>
        <li>
          <strong>Salary after-tax pages</strong> — instant results for popular
          incomes from $50,000 to $1,000,000
        </li>
        <li>
          <strong>Hourly wage pages</strong> — take-home pay for common hourly
          rates like $30, $35, and $40 per hour
        </li>
        <li>
          <strong>Educational content</strong> — tax brackets, FAQs, and plain-English
          explanations of Australian pay and tax
        </li>
      </ul>
      <p>
        <Link href="/calculators">Browse all calculators →</Link>
      </p>

      <h2>How Our Calculators Work</h2>
      <p>
        Our calculations are based on official Australian Taxation Office (ATO)
        income tax brackets for the {SITE.year} financial year, including:
      </p>
      <ul>
        <li>Progressive income tax rates (0%, 16%, 30%, 37%, 45%)</li>
        <li>Stage 3 tax cuts with updated marginal rates</li>
        <li>Medicare levy at 2% (with low-income exemptions)</li>
        <li>Graduated HECS/HELP repayment rates from 1% to 10%</li>
        <li>12% superannuation guarantee (employer contributions)</li>
        <li>Salary sacrifice and additional income/deduction options</li>
      </ul>
      <p>
        All calculator inputs are processed <strong>locally in your
        browser</strong>. We never store or transmit your salary data to our
        servers.
      </p>

      <h2>Accuracy &amp; Limitations</h2>
      <p>
        We work hard to keep our calculators accurate and up to date. However,
        results are <strong>estimates only</strong> and may not reflect your
        exact tax liability. Individual circumstances — such as multiple income
        sources, deductions, private health insurance, and residency status —
        can significantly affect your actual pay and tax.
      </p>
      <p>
        Always verify important figures with a registered tax agent or the ATO.
        Read our full <Link href="/disclaimer">Disclaimer</Link> for details.
      </p>

      <h2>Free Forever</h2>
      <p>
        {SITE.name} is and will remain free to use. We may display
        advertisements (such as Google AdSense) to cover hosting and
        development costs, but our calculators will always be accessible without
        payment, registration, or paywalls.
      </p>

      <h2>Privacy &amp; Trust</h2>
      <p>
        Your privacy matters. We do not sell personal data, and calculator
        inputs stay on your device. Read our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> for full details on
        how we handle information, cookies, and third-party services.
      </p>

      <h2>Get in Touch</h2>
      <p>
        Found a bug? Think our tax rates are out of date? Want to suggest a new
        calculator? We&apos;d love to hear from you. Visit our{" "}
        <Link href="/contact">Contact page</Link> to send a message.
      </p>
    </LegalPage>
  );
}
