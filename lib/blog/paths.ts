import { TOOLS } from "@/lib/tools";
import { BLOG_CONFIG, RESERVED_SLUGS } from "./config";

const RESERVED = new Set<string>([
  ...RESERVED_SLUGS,
  ...TOOLS.map((t) => t.slug),
]);

export function getPostPath(slug: string): string {
  const clean = slug.trim().replace(/^\/+|\/+$/g, "");
  if (!clean) return "/";
  // This site serves articles under /blog/<slug> (the WordPress articles
  // live at blog.aussalaryaftertax.com/<slug>). Do NOT depend on the
  // BLOG_POST_URL_PREFIX env var: without it the default was "root",
  // which made every blog card link to /<slug> — a route that does not
  // exist in this app — and /blog/<slug> itself returned 404.
  return `/blog/${clean}`;
}

export function getPostUrl(slug: string): string {
  return `${BLOG_CONFIG.siteUrl}${getPostPath(slug)}`;
}

export function getSiteHost(): string {
  return BLOG_CONFIG.siteUrl.replace(/^https?:\/\//, "");
}

export function isReservedSlug(slug: string): boolean {
  return RESERVED.has(slug.trim().toLowerCase());
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
