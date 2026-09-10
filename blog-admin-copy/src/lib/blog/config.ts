import { blogAdminConfig } from "@/lib/blog/admin-config";

const config = blogAdminConfig();

/**
 * Blog admin configuration — branding comes from env / domain automatically.
 */
export const BLOG_CONFIG = {
  siteUrl: config.siteUrl,
  siteName: config.siteName,
  siteEmail: config.siteEmail,
  brandInitials: config.brandInitials,
  adminTitle: config.adminTitle,
  defaultAuthor: config.defaultAuthor,
  previewStorageKey: config.previewStorageKey,
  backupFilenamePrefix: config.backupFilenamePrefix,
  loginTagline: config.loginTagline,
  dashboardTagline: config.dashboardTagline,
  postUrlPrefix: config.postUrlPrefix,
  publicChrome: config.publicChrome,
  quickLinks: config.quickLinks,
  sidebarCalculators: config.sidebarCalculators,
  sidebarCta: config.sidebarCta,
  blogIndexTitle: config.blogIndexTitle,
  blogIndexSubtitle: config.blogIndexSubtitle,
};

/** Top-level routes that must NOT be used as article slugs */
export const RESERVED_SLUGS = config.reservedSlugs;
