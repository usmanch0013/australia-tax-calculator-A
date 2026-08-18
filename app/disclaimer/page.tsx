import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Legal disclaimer for ${SITE.name}. Calculator results are estimates only — not financial, tax or legal advice.`,
  alternates: { canonical: `${SITE.url}/disclaimer` },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer & Legal Information"
      description="Important information about the accuracy, limitations and intended use of our Australian salary and tax calculators."
      currentPath="/disclaimer"
    >
      <div className="legal-callout legal-callout--warning">
        <strong>Important:</strong> All calculator results are estimates for
        general information only. They are not a substitute for professional
        tax, financial or legal advice.
      </div>

      <h2>1. General Information Only</h2>
      <p>
        The information, tools and calculations provided on {SITE.name}{" "}
        (&quot;the Website&quot;) are for general informational and educational
        purposes only. Nothing on this Website constitutes financial advice, tax
        advice, investment advice, legal advice, or any other form of
        professional advice.
      </p>
      <p>
        You should not rely solely on our calculators when making financial
        decisions such as accepting a job offer, negotiating salary, planning
        investments, lodging a tax return, or making redundancy or superannuation
        decisions.
      </p>

      <h2>2. Estimates — Not Exact Figures</h2>
      <p>
        Our salary, tax, superannuation, HECS, redundancy, Division 293 and
        other calculators produce <strong>estimates only</strong>. Actual
        amounts may differ based on your individual circumstances, employer
        payroll practices, and current Australian tax law.
      </p>
      <p>
        While we use Australian Taxation Office (ATO) tax brackets and rates for
        the {SITE.year} financial year — including Stage 3 tax cuts and the 12%
        superannuation guarantee — we cannot account for every variable that
        affects your personal tax position.
      </p>

      <h2>3. Factors Not Fully Accounted For</h2>
      <p>Our calculators may not reflect the following, among others:</p>
      <ul>
        <li>Tax residency status (Australian resident, foreign resident, working holiday maker)</li>
        <li>Multiple sources of income, side income, or investment income</li>
        <li>Tax offsets, rebates, deductions, and work-related expenses</li>
        <li>Private health insurance and Medicare Levy Surcharge (MLS)</li>
        <li>HECS/HELP, VET Student Loans, or other study and training loan repayments</li>
        <li>Salary sacrifice, novated leases, and reportable fringe benefits</li>
        <li>Division 293 tax on high-income super contributions</li>
        <li>Leave loading, allowances, overtime, penalty rates, and award variations</li>
        <li>Changes to tax law announced during the financial year</li>
        <li>State-based payroll tax, workers compensation, or other levies</li>
      </ul>

      <h2>4. No Professional Relationship</h2>
      <p>
        Use of this Website does not create any client, adviser, fiduciary, or
        professional relationship between you and {SITE.name}, its owners, or
        operators. We are not registered tax agents, certified practising
        accountants (CPAs), chartered accountants, financial advisers, or legal
        practitioners.
      </p>

      <h2>5. Seek Qualified Professional Advice</h2>
      <p>
        Before making important financial or tax decisions, we strongly recommend
        consulting a qualified registered tax agent, CPA, chartered accountant,
        or licensed financial adviser who can assess your complete personal
        situation.
      </p>
      <p>
        For official Australian tax information, visit the{" "}
        <a
          href="https://www.ato.gov.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          Australian Taxation Office (ATO)
        </a>
        . For employment entitlements, visit the{" "}
        <a
          href="https://www.fairwork.gov.au"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fair Work Ombudsman
        </a>
        .
      </p>

      <h2>6. Redundancy, Leave &amp; Award Calculations</h2>
      <p>
        Tools such as our redundancy pay, long service leave, sick leave, and
        shift penalty calculators use simplified assumptions based on common
        National Employment Standards (NES) or typical award rates. Actual
        entitlements vary significantly by industry award, enterprise agreement,
        employment contract, and state legislation. Always verify with your
        employer or a qualified employment law professional.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by Australian law, {SITE.name} and its
        owners, operators, employees, and affiliates shall not be liable for any
        direct, indirect, incidental, special, consequential, or punitive
        damages arising from:
      </p>
      <ul>
        <li>Your use of or inability to use the Website</li>
        <li>Reliance on any calculator result or website content</li>
        <li>Errors, omissions, or delays in updating tax rates</li>
        <li>Unauthorized access to or alteration of your data</li>
        <li>Any third-party content, advertisements, or linked websites</li>
      </ul>

      <h2>8. External Links</h2>
      <p>
        Our Website may contain links to third-party websites (including the ATO,
        Fair Work, and Google). These links are provided for convenience only.
        We do not endorse, control, or accept responsibility for the content,
        accuracy, privacy practices, or availability of external sites.
      </p>

      <h2>9. Advertising</h2>
      <p>
        This Website may display advertisements through Google AdSense or other
        advertising networks. Advertisements are served by third parties and do
        not constitute our endorsement of any product or service. We are not
        responsible for the content, claims, or practices of advertisers.
      </p>

      <h2>10. Currency &amp; Accuracy of Information</h2>
      <p>
        Tax rates, thresholds, superannuation guarantee rates, and HECS
        repayment thresholds change regularly — typically at the start of each
        financial year (1 July). We update our calculators when new rates are
        announced, but delays may occur. Always verify current figures with
        official sources before making decisions.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        This disclaimer is governed by the laws of the Commonwealth of Australia
        and the State or Territory in which our operators are based. Any
        disputes arising from use of this Website shall be subject to the
        exclusive jurisdiction of the courts of Australia.
      </p>

      <h2>12. Contact</h2>
      <p>
        If you have questions about this disclaimer or believe you have found an
        error in our calculations, please contact us via our{" "}
        <a href="/contact">Contact page</a>. While we cannot provide personal
        tax advice, we welcome reports of technical issues.
      </p>
    </LegalPage>
  );
}
