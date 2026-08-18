import type { GuideFaq, GuideSection, ToolGuide } from "./types";

export function section(
  heading: string,
  paragraphs: string[],
  options?: { level?: 2 | 3; list?: string[] }
): GuideSection {
  return {
    heading,
    paragraphs,
    level: options?.level,
    list: options?.list,
  };
}

export function buildGuide(
  slug: string,
  title: string,
  intro: string,
  sections: GuideSection[],
  faqs: GuideFaq[]
): ToolGuide {
  return { slug, title, intro, sections, faqs };
}
