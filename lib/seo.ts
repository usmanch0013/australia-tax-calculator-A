import { FAQ_ITEMS, POPULAR_HOURLY_RATES, SITE } from "./content";
import { getPostPath } from "./blog/paths";
import { getPublishedPosts } from "./blog/storage";
import type { GuideFaq } from "./guides/types";
import type { ToolMeta } from "./tools";
import { TOOLS } from "./tools";

function trimMeta(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

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
  "second job tax calculator australia",
  "minimum wage calculator australia",
  "weekly pay calculator australia",
] as const;

export function buildToolMetaDescription(tool: ToolMeta): string {
  return trimMeta(`${tool.description} ${tool.seoIntro}`);
}

export function getToolPageTitle(tool: ToolMeta): string {
  return `${tool.shortName} Calculator Australia ${SITE.year} — After Tax`;
}

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

export function getFaqJsonLdFromItems(items: readonly GuideFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getFaqJsonLd(limit?: number) {
  const items = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;
  return getFaqJsonLdFromItems(items);
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

export async function getAllSitemapPaths(): Promise<string[]> {
  const toolPaths = TOOLS.map((t) => `/calculators/${t.slug}`);
  const salaryPaths = [
    50000, 60000, 70000, 75000, 80000, 90000, 100000, 120000, 150000,
    180000, 200000, 250000, 300000, 400000, 500000, 600000, 700000,
    800000, 900000, 1000000,
  ].map((a) => `/salary/${a}`);

  const hourlyPaths = [...POPULAR_HOURLY_RATES].map((r) => `/hourly/${r}`);

  let blogPaths: string[] = ["/blog"];
  try {
    const posts = await getPublishedPosts();
    blogPaths = ["/blog", ...posts.map((p) => getPostPath(p.slug))];
  } catch {
    /* blog dir may be empty */
  }

  return [
    "/",
    "/calculators",
    ...toolPaths,
    ...salaryPaths,
    ...hourlyPaths,
    ...blogPaths,
    "/faq",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
    "/disclaimer",
  ];
}

export function getSitemapEntry(path: string): {
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
} {
  if (path === "/") {
    return { changeFrequency: "weekly", priority: 1 };
  }
  if (path === "/calculators") {
    return { changeFrequency: "weekly", priority: 0.9 };
  }
  if (path.startsWith("/calculators/")) {
    return { changeFrequency: "monthly", priority: 0.85 };
  }
  if (path.startsWith("/salary/") || path.startsWith("/hourly/")) {
    return { changeFrequency: "monthly", priority: 0.8 };
  }
  if (path === "/blog") {
    return { changeFrequency: "weekly", priority: 0.75 };
  }
  if (/^\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(path)) {
    return { changeFrequency: "weekly", priority: 0.7 };
  }
  if (path === "/faq") {
    return { changeFrequency: "monthly", priority: 0.7 };
  }
  if (path === "/about" || path === "/contact") {
    return { changeFrequency: "monthly", priority: 0.6 };
  }
  return { changeFrequency: "yearly", priority: 0.4 };
}
