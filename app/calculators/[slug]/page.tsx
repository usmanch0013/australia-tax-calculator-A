import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import SalaryCalculator from "@/components/SalaryCalculator";
import ToolCalculator from "@/components/ToolCalculator";
import ToolShell from "@/components/ToolShell";
import { SITE } from "@/lib/content";
import {
  buildToolMetaDescription,
  getBreadcrumbJsonLd,
  getFaqJsonLdFromItems,
  getToolJsonLd,
  getToolPageTitle,
} from "@/lib/seo";
import { TOOLS, getToolBySlug } from "@/lib/tools";
import { getGuideBySlug } from "@/lib/guides";

const FULL_CALCULATOR_SLUGS = [
  "take-home-pay-calculator",
  "pay-calculator",
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Calculator" };

  const title = getToolPageTitle(tool);
  const description = buildToolMetaDescription(tool);
  return {
    title,
    description,
    keywords: tool.keywords,
    alternates: {
      canonical: `${SITE.url}/calculators/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/calculators/${slug}`,
      locale: "en_AU",
      type: "website",
    },
  };
}

export default async function CalculatorToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const usesFullCalculator = FULL_CALCULATOR_SLUGS.includes(slug);
  const toolUrl = `${SITE.url}/calculators/${slug}`;
  const guide = getGuideBySlug(slug);

  return (
    <>
      <JsonLd data={getToolJsonLd(tool)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", url: SITE.url },
          { name: "Calculators", url: `${SITE.url}/calculators` },
          { name: tool.shortName, url: toolUrl },
        ])}
      />
      {guide?.faqs.length ? <JsonLd data={getFaqJsonLdFromItems(guide.faqs)} /> : null}

      <ToolShell tool={tool}>
        {usesFullCalculator ? (
          <SalaryCalculator />
        ) : (
          <ToolCalculator slug={slug} />
        )}
      </ToolShell>
    </>
  );
}
