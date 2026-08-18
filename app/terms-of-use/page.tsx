import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${SITE.name}. Rules and conditions for using our free Australian salary, tax and superannuation calculators.`,
  alternates: { canonical: `${SITE.url}/terms-of-use` },
  robots: { index: true, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="The rules and conditions governing your use of our website and calculator tools."
      currentPath="/terms-of-use"
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using {SITE.name} (&quot;the Website&quot;), located at{" "}
        {SITE.url}, you agree to be bound by these Terms of Use, our{" "}
        <a href="/privacy-policy">Privacy Policy</a>, and our{" "}
        <a href="/disclaimer">Disclaimer</a>. If you do not agree with any part
        of these terms, you must not use the Website.
      </p>
      <p>
        We may update these Terms of Use at any time. The &quot;Last
        updated&quot; date will reflect the most recent revision. Your continued
        use of the Website after changes are posted constitutes acceptance of
        the revised terms.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        {SITE.name} provides free online calculators and informational content
        related to Australian salaries, income tax, Medicare levy,
        superannuation, HECS/HELP repayments, and related employment and tax
        topics. The Website is intended for general informational and
        educational purposes only.
      </p>

      <h2>3. Permitted Use</h2>
      <p>You may use the Website for personal, non-commercial purposes, including:</p>
      <ul>
        <li>Calculating estimated take-home pay and tax</li>
        <li>Comparing job offers and salary scenarios</li>
        <li>Learning about Australian tax and pay structures</li>
        <li>Sharing links to our calculators with others</li>
      </ul>

      <h2>4. Prohibited Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Website for any unlawful purpose or in violation of any applicable laws</li>
        <li>Attempt to gain unauthorized access to our systems, servers, or networks</li>
        <li>Interfere with or disrupt the Website&apos;s operation or security</li>
        <li>Scrape, crawl, or automatically extract data from the Website without written permission</li>
        <li>Reproduce, redistribute, or republish substantial portions of our content or calculators for commercial purposes</li>
        <li>Misrepresent calculator results as professional tax, financial, or legal advice</li>
        <li>Use the Website to transmit malware, spam, or harmful code</li>
        <li>Impersonate {SITE.name} or misrepresent your affiliation with us</li>
      </ul>

      <h2>5. No Professional Advice</h2>
      <p>
        The Website does not provide tax, financial, investment, or legal advice.
        Calculator results are estimates only. See our{" "}
        <a href="/disclaimer">Disclaimer</a> for full details. You are solely
        responsible for any decisions you make based on information from this
        Website.
      </p>

      <h2>6. Accuracy of Information</h2>
      <p>
        While we strive to keep all calculators and content accurate and updated
        with current ATO rates for {SITE.year}, we make no warranties or
        representations about the accuracy, completeness, reliability, or
        suitability of any information or calculation for your specific
        circumstances.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        All content on the Website — including text, graphics, logos, design,
        code, calculator logic, and branding — is owned by {SITE.name} or its
        licensors and is protected by Australian and international copyright and
        intellectual property laws.
      </p>
      <p>
        You may not copy, modify, distribute, sell, or create derivative works
        from our content without prior written consent, except for personal
        reference or sharing links to our pages.
      </p>

      <h2>8. User Submissions</h2>
      <p>
        If you contact us or submit feedback, suggestions, or other
        communications, you grant us a non-exclusive, royalty-free, perpetual
        licence to use, reproduce, and incorporate such submissions for the
        purpose of operating and improving the Website, without obligation to
        you.
      </p>

      <h2>9. Third-Party Services &amp; Advertising</h2>
      <p>
        The Website may display advertisements through Google AdSense or other ad
        networks, and may include links to third-party websites. We are not
        responsible for the content, accuracy, privacy practices, or conduct of
        third parties. Your interactions with advertisers are solely between you
        and the advertiser.
      </p>
      <p>
        See our <a href="/privacy-policy">Privacy Policy</a> for information
        about cookies and how third-party services may collect data.
      </p>

      <h2>10. Disclaimer of Warranties</h2>
      <p>
        The Website is provided on an &quot;as is&quot; and &quot;as
        available&quot; basis without warranties of any kind, whether express or
        implied, including but not limited to implied warranties of
        merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by Australian law, {SITE.name} and its
        owners, operators, employees, and affiliates shall not be liable for any
        direct, indirect, incidental, special, consequential, or punitive
        damages arising from your use of the Website, reliance on calculator
        results, or inability to access the Website — even if we have been
        advised of the possibility of such damages.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {SITE.name} and its operators
        from any claims, damages, losses, or expenses (including reasonable legal
        fees) arising from your use of the Website, violation of these Terms, or
        infringement of any third-party rights.
      </p>

      <h2>13. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to the Website
        at any time, without notice, for conduct that we believe violates these
        Terms or is harmful to other users, us, or third parties.
      </p>

      <h2>14. Governing Law</h2>
      <p>
        These Terms of Use are governed by the laws of the Commonwealth of
        Australia. Any disputes shall be subject to the exclusive jurisdiction
        of the courts of Australia.
      </p>

      <h2>15. Severability</h2>
      <p>
        If any provision of these Terms is found to be invalid or unenforceable,
        the remaining provisions shall continue in full force and effect.
      </p>

      <h2>16. Contact</h2>
      <p>
        For questions about these Terms of Use, please visit our{" "}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalPage>
  );
}
