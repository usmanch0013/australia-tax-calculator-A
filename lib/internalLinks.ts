import { TOOLS } from "@/lib/tools";

export function getPopularCalculatorLinks(limit = 6) {
  return TOOLS.slice(0, limit).map((tool) => ({
    href: `/calculators/${tool.slug}`,
    label: tool.shortName,
  }));
}
