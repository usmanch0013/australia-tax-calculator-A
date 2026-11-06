import { BLOG_CONFIG } from "./config";
import { generateSlug } from "./utils";
import type { BlogCategory, BlogPost } from "./types";

/**
 * WordPress source for the main-domain blog.
 *
 * Articles are written/published on the WordPress subdomain
 * https://blog.aussalaryaftertax.com — the main Next.js site used to read
 * only its own local `content/blog/*.json` files (which are empty), so
 * nothing ever showed on aussalaryaftertax.com/blog.
 *
 * This module fetches published posts from the public WordPress REST API
 * and maps them onto the site's existing BlogPost shape, so the existing
 * blog list, article page, TOC and sitemap all work unchanged.
 *
 * Freshness: every fetch uses `next: { revalidate: 30 }` and the blog
 * pages use `export const revalidate = 30`, so a post published on the
 * subdomain shows on the main domain within ~30 seconds (on the first
 * visit after that 30s window — Next.js ISR regenerates the page then).
 * If WordPress is unreachable the fetch returns [] / null instead of
 * throwing, so the site keeps working with local posts only.
 */

export const WORDPRESS_REVALIDATE_SECONDS = 30;

export const WORDPRESS_API_BASE =
  process.env.WORDPRESS_API_URL?.trim().replace(/\/$/, "") ||
  "https://blog.aussalaryaftertax.com/wp-json/wp/v2";

type WpEmbedded = {
  author?: Array<{ name?: string }>;
  "wp:featuredmedia"?: Array<{
    source_url?: string;
    alt_text?: string;
    caption?: { rendered?: string };
  }>;
  "wp:term"?: Array<Array<{ name?: string; slug?: string }>>;
};

type WpPost = {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title?: { rendered?: string };
  content?: { rendered?: string };
  excerpt?: { rendered?: string };
  author?: number;
  featured_media?: number;
  _embedded?: WpEmbedded;
};

function decodeEntities(value: string): string {
  return value
    .replace(/&#8217;|&#x2019;/gi, "'")
    .replace(/&#8220;|&#8221;|&#x201c;|&#x201d;/gi, '"')
    .replace(/&#8211;|&#8212;|&#x2013;|&#x2014;/gi, "-")
    .replace(/&hellip;/gi, "...")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'");
}

function stripTags(value: string): string {
  return decodeEntities(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function truncateWords(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  const cut = value.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}...`;
}

async function fetchWp<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${WORDPRESS_API_BASE}${path}`, {
      next: { revalidate: WORDPRESS_REVALIDATE_SECONDS },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export function mapWordPressPost(raw: WpPost): BlogPost | null {
  const slug = raw.slug?.trim().toLowerCase();
  if (!slug || !raw.title?.rendered) return null;

  const title = stripTags(raw.title.rendered);
  const excerptText = stripTags(raw.excerpt?.rendered ?? "");
  const content = (raw.content?.rendered ?? "").trim();
  if (!title || !content) return null;

  const embedded = raw._embedded ?? {};
  const featured = embedded["wp:featuredmedia"]?.[0];
  const terms = embedded["wp:term"]?.[0] ?? [];
  const categories = terms
    .map((term) => (term.slug?.trim() || generateSlug(term.name ?? "")).toLowerCase())
    .filter(Boolean);

  return {
    id: `wp-${raw.id}`,
    slug,
    title,
    focusKeyword: slug.replace(/-/g, " "),
    secondaryKeywords: [],
    categories,
    metaDescription: truncateWords(excerptText, 160),
    excerpt: truncateWords(excerptText, 320),
    content,
    status: "published",
    publishedAt: raw.date || new Date().toISOString(),
    updatedAt: raw.modified || raw.date || new Date().toISOString(),
    author: embedded.author?.[0]?.name?.trim() || BLOG_CONFIG.defaultAuthor,
    featuredImage: featured?.source_url || undefined,
    featuredImageAlt: featured?.alt_text?.trim() || title,
    featuredImageTitle: undefined,
    featuredImageDescription: undefined,
  };
}

export async function getWordPressPosts(): Promise<BlogPost[]> {
  const raw = await fetchWp<WpPost[]>(
    "/posts?per_page=100&status=publish&orderby=date&order=desc&_embed=1"
  );
  if (!raw) return [];
  return raw
    .map(mapWordPressPost)
    .filter((post): post is BlogPost => post !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function getWordPressPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const clean = slug.trim().toLowerCase();
  if (!clean) return null;
  const raw = await fetchWp<WpPost[]>(
    `/posts?slug=${encodeURIComponent(clean)}&status=publish&_embed=1`
  );
  if (!raw?.length) return null;
  return mapWordPressPost(raw[0]);
}

export async function getWordPressCategories(): Promise<BlogCategory[]> {
  const raw = await fetchWp<Array<{ name: string; slug: string }>>(
    "/categories?per_page=100&orderby=count&order=desc"
  );
  if (!raw) return [];
  const seen = new Set<string>();
  const out: BlogCategory[] = [];
  for (const item of raw) {
    const name = (item.name ?? "").trim();
    const catSlug = (item.slug ?? "").trim().toLowerCase() || generateSlug(name);
    if (!name || !catSlug || seen.has(catSlug)) continue;
    seen.add(catSlug);
    out.push({ slug: catSlug, name: decodeEntities(name) });
  }
  return out;
}
