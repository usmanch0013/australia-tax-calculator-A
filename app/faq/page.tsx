import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import PremiumHero from "@/components/PremiumHero";
import { SITE } from "@/lib/content";
import { getFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ — Australian Salary & Tax Questions",
  description:
    "Answers to common questions about Australian income tax, Medicare levy, superannuation, HECS repayments and take-home pay.",
  alternates: { canonical: `${SITE.url}/faq` },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={getFaqJsonLd()} />
      <PremiumHero
        compact
        title="Frequently Asked Questions"
        subtitle="Common questions about Australian income tax, Medicare levy, superannuation, HECS and take-home pay."
        badge={`🇦🇺 ${SITE.name}`}
      />
      <FAQ hideHeader />
    </>
  );
}
