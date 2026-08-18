import { FAQ_ITEMS, POPULAR_HOURLY_RATES, SITE } from "./content";
import type { ToolMeta } from "./tools";
import { TOOLS } from "./tools";

export const PRIMARY_KEYWORDS = [
  "salary calculator australia",
  "pay calculator australia",
  "take home pay calculator",
  "australian salary calculator",
  "australian salary calculator 2025",
  "income tax calculator australia",
  "net pay calculator",
  "gross to net calculator",
  "gross to net calculator australia",
  "net to gross calculator",
  "hecs calculator",
  "hecs help calculator",
  "superannuation calculator",
  "super calculator australia",
  "hourly to salary calculator",
  "salary to hourly calculator",
  "bonus tax calculator australia",
  "salary sacrifice calculator",
  "medicare levy calculator",
  "casual loading calculator",
  "annual leave calculator",
  "overtime calculator australia",
  "after tax salary calculator",
  "wage calculator australia",
  "pay rise calculator",
  "redundancy pay calculator",
  "division 293 calculator",
  "novated lease calculator",
  "long service leave calculator",
  "pro rata salary calculator",
  "day rate calculator",
  "penalty rates calculator",
  "tax refund calculator australia",
  "hourly rate after tax",
] as const;

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en-AU",
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE.url}/calculators?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/icon.svg`,
        areaServed: { "@type": "Country", name: "Australia" },
      },
      {
        "@type": "WebApplication",
        "@id": `${SITE.url}/#calculator`,
        name: `Australian Salary Calculator ${SITE.year}`,
        url: SITE.url,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
        description: SITE.description,
        featureList: [
          "Income tax calculation",
          "Medicare levy",
          "HECS-HELP repayments",
          "Superannuation",
          "Salary sacrifice",
        ],
        audience: {
          "@type": "Audience",
          audienceType: "Australian employees and contractors",
        },
      },
    ],
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getToolJsonLd(tool: ToolMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    url: `${SITE.url}/calculators/${tool.slug}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
    description: tool.description,
    keywords: tool.keywords.join(", "),
    inLanguage: "en-AU",
    areaServed: { "@type": "Country", name: "Australia" },
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getSalaryPageJsonLd(amount: number) {
  const formatted = amount.toLocaleString("en-AU");
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `$${formatted} Salary After Tax Australia ${SITE.year}`,
    description: `Calculate take-home pay on a $${formatted} annual salary in Australia after income tax, Medicare levy and superannuation.`,
    url: `${SITE.url}/salary/${amount}`,
    inLanguage: "en-AU",
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}

export function getHourlyPageJsonLd(rate: number) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `$${rate}/Hour After Tax Australia ${SITE.year}`,
    description: `Calculate take-home pay on a $${rate} per hour wage in Australia after income tax and Medicare levy.`,
    url: `${SITE.url}/hourly/${rate}`,
    inLanguage: "en-AU",
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}

export function getAllSitemapPaths(): string[] {
  const toolPaths = TOOLS.map((t) => `/calculators/${t.slug}`);
  const salaryPaths = [
    50000, 60000, 70000, 75000, 80000, 90000, 100000, 120000, 150000,
    180000, 200000, 250000, 300000, 400000, 500000, 600000, 700000,
    800000, 900000, 1000000,
  ].map((a) => `/salary/${a}`);

  const hourlyPaths = [...POPULAR_HOURLY_RATES].map((r) => `/hourly/${r}`);

  return [
    "/",
    "/calculators",
    "/faq",
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
    "/terms-of-use",
    ...toolPaths,
    ...salaryPaths,
    ...hourlyPaths,
  ];
}
