import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}. How we collect, use, store and protect your information when you use our Australian salary calculators.`,
  alternates: { canonical: `${SITE.url}/privacy-policy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How we handle your data when you use our free Australian salary and tax calculators — transparent, simple, and privacy-first."
      currentPath="/privacy-policy"
    >
      <div className="legal-callout legal-callout--info">
        <strong>Summary:</strong> Your salary data stays in your browser. We do
        not store, sell, or share the figures you enter into our calculators.
      </div>

      <h2>1. Introduction</h2>
      <p>
        {SITE.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates
        the website {SITE.url} and provides free online salary, tax and
        superannuation calculators for Australian workers. We respect your
        privacy and are committed to protecting any personal information we
        collect in accordance with the Australian Privacy Act 1988 (Cth) and the
        Australian Privacy Principles (APPs).
      </p>
      <p>
        This Privacy Policy explains what information we collect, how we use it,
        who we share it with, and your rights. By using our website, you agree
        to the practices described in this policy.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Calculator inputs (not stored)</h3>
      <p>
        When you use our salary calculators, you may enter information such as
        your gross salary, pay frequency, HECS/HELP status, superannuation
        settings, and other financial inputs. <strong>These calculations are
        performed entirely in your web browser.</strong> We do not transmit,
        store, log, or sell your salary or financial data on our servers.
      </p>

      <h3>2.2 Information you voluntarily provide</h3>
      <p>
        If you contact us via our contact form or email, we may collect:
      </p>
      <ul>
        <li>Your name and email address</li>
        <li>The content of your message or enquiry</li>
        <li>Any additional details you choose to include (e.g. salary figures when reporting an issue)</li>
      </ul>

      <h3>2.3 Automatically collected information</h3>
      <p>
        Like most websites, we and our third-party service providers may
        automatically collect certain technical information when you visit,
        including:
      </p>
      <ul>
        <li>IP address (which may be anonymised)</li>
        <li>Browser type, version and language</li>
        <li>Operating system and device type</li>
        <li>Pages visited, time spent, and referring website</li>
        <li>General geographic location (country/city level)</li>
        <li>Cookie and similar tracking technology data</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use collected information for the following purposes:</p>
      <ul>
        <li>To operate, maintain and improve our calculator tools and website</li>
        <li>To respond to your enquiries, feedback and support requests</li>
        <li>To analyse website usage and improve user experience</li>
        <li>To display relevant advertisements (where Google AdSense or similar services are enabled)</li>
        <li>To detect, prevent and address technical issues or abuse</li>
        <li>To comply with legal obligations</li>
      </ul>
      <p>
        We do <strong>not</strong> use your information for automated
        decision-making or profiling that produces legal or similarly significant
        effects.
      </p>

      <h2>4. Cookies &amp; Tracking Technologies</h2>
      <p>
        Cookies are small text files stored on your device. We may use the
        following types of cookies:
      </p>
      <ul>
        <li>
          <strong>Essential cookies</strong> — required for basic site
          functionality, such as remembering your cookie consent preference
        </li>
        <li>
          <strong>Analytics cookies</strong> — help us understand how visitors
          use our site (e.g. Google Analytics, if enabled)
        </li>
        <li>
          <strong>Advertising cookies</strong> — used by ad networks such as
          Google AdSense to serve relevant ads and measure ad performance
        </li>
      </ul>
      <p>
        You can control or delete cookies through your browser settings. Note
        that disabling cookies may affect certain features. For more information
        about Google&apos;s advertising cookies, visit{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Ads policies
        </a>
        .
      </p>

      <h2>5. Third-Party Services</h2>
      <p>We may use third-party services that collect information, including:</p>
      <ul>
        <li>
          <strong>Google AdSense</strong> — for displaying advertisements. Google
          may use cookies to serve ads based on your prior visits. Review
          Google&apos;s privacy policy at{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy
          </a>
        </li>
        <li>
          <strong>Google Analytics</strong> — for website traffic analysis (if
          enabled)
        </li>
        <li>
          <strong>Hosting providers</strong> — to serve our website securely
        </li>
      </ul>
      <p>
        These third parties have their own privacy policies. We encourage you to
        review them. We are not responsible for the privacy practices of
        external websites linked from our site.
      </p>

      <h2>6. Data Sharing &amp; Disclosure</h2>
      <p>We do not sell your personal information. We may share information only:</p>
      <ul>
        <li>With service providers who assist in operating our website (under confidentiality obligations)</li>
        <li>When required by law, court order, or government request</li>
        <li>To protect our rights, safety, or the rights of others</li>
        <li>In connection with a business transfer (merger, acquisition, etc.) with notice to users</li>
      </ul>

      <h2>7. Data Security</h2>
      <p>
        We implement reasonable technical and organisational measures to protect
        information against unauthorised access, alteration, disclosure, or
        destruction. These include HTTPS encryption, secure hosting, and limited
        access to systems.
      </p>
      <p>
        However, no method of transmission over the internet or electronic
        storage is 100% secure. While we strive to protect your information, we
        cannot guarantee absolute security.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        Calculator inputs are not retained on our servers. Contact form
        enquiries and emails are retained only as long as necessary to respond
        to your request and for legitimate business or legal purposes, after
        which they are deleted or anonymised.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Our services are not directed at children under 13 years of age. We do
        not knowingly collect personal information from children. If you believe
        a child has provided us with personal information, please contact us and
        we will promptly delete it.
      </p>

      <h2>10. Your Rights</h2>
      <p>
        Under Australian privacy law, you may have the right to:
      </p>
      <ul>
        <li>Access personal information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your information (where applicable)</li>
        <li>Opt out of marketing communications</li>
        <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
      </ul>
      <p>
        To exercise these rights, please contact us via our{" "}
        <a href="/contact">Contact page</a>. We will respond within a reasonable
        timeframe.
      </p>

      <h2>11. International Users</h2>
      <p>
        Our website is intended for users in Australia. If you access our site
        from outside Australia, your information may be transferred to and
        processed in Australia or other countries where our service providers
        operate.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices, technology, or legal requirements. The &quot;Last
        updated&quot; date at the top of this page will be revised accordingly.
        Continued use of the website after changes constitutes acceptance of the
        updated policy.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        For privacy-related questions, concerns, or requests, please visit our{" "}
        <a href="/contact">Contact page</a> or email us. We take all privacy
        enquiries seriously and will respond as promptly as possible.
      </p>
    </LegalPage>
  );
}
