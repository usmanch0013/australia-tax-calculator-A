import { SITE } from "@/lib/content";
import { TOOLS } from "@/lib/tools";

/** URL paths that cannot be used as article slugs */
export const RESERVED_SLUGS = new Set([
  "about",
  "admin",
  "api",
  "blog",
  "calculators",
  "contact",
  "disclaimer",
  "faq",
  "hourly",
  "manifest.webmanifest",
  "privacy-policy",
  "robots.txt",
  "salary",
  "sitemap.xml",
  "terms-of-use",
  "_next",
  "favicon.ico",
  "icon.svg",
  ...TOOLS.map((t) => t.slug),
]);

export function getPostPath(slug: string): string {
  const clean = slug.trim().replace(/^\/+|\/+$/g, "");
  return clean ? `/${clean}` : "/";
}

export function getPostUrl(slug: string): string {
  return `${SITE.url}${getPostPath(slug)}`;
}

export function getSiteHost(): string {
  return SITE.url.replace(/^https?:\/\//, "");
}

export function isReservedSlug(slug: string): boolean {
  const normalized = slug.trim().toLowerCase();
  return RESERVED_SLUGS.has(normalized);
}

export function validatePostSlug(slug: string): string | null {
  const normalized = slug.trim().toLowerCase();
  if (!normalized) return "URL slug is required.";
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(normalized)) {
    return "Use lowercase letters, numbers, and hyphens only.";
  }
  if (isReservedSlug(normalized)) {
    return "This URL is reserved — choose a different slug.";
  }
  return null;
}
