import { SITE } from "@/lib/content";
import { blogAdminConfig } from "@/lib/blog/admin-config";

const config = blogAdminConfig();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  ? config.siteUrl
  : SITE.url;
const siteName = process.env.NEXT_PUBLIC_SITE_NAME?.trim()
  ? config.siteName
  : SITE.name;

/** Blog admin configuration for this site */
export const BLOG_CONFIG = {
  siteUrl,
  siteName,
  siteEmail: process.env.SITE_EMAIL?.trim() || config.siteEmail,
  brandInitials: process.env.BLOG_BRAND_INITIALS?.trim().toUpperCase() || "AU",
  adminTitle: process.env.BLOG_ADMIN_TITLE?.trim() || "Blog Studio",
  defaultAuthor: process.env.BLOG_DEFAULT_AUTHOR?.trim() || SITE.name,
  previewStorageKey: config.previewStorageKey,
  backupFilenamePrefix: config.backupFilenamePrefix,
  loginTagline: config.loginTagline,
  dashboardTagline:
    process.env.BLOG_DASHBOARD_TAGLINE?.trim() ||
    `Write and publish articles for ${siteName}.`,
};

/** Top-level routes that must NOT be used as article slugs */
export const RESERVED_SLUGS = config.reservedSlugs;
