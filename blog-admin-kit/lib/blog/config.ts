/**
 * Edit this file when adding the admin panel to a new project.
 */
export const BLOG_CONFIG = {
  siteUrl: "https://yourdomain.com",
  siteName: "My Site",
  siteEmail: "hello@yourdomain.com",
  brandInitials: "MS",
  adminTitle: "Blog Studio",
  defaultAuthor: "Editor",
  previewStorageKey: "site-blog-article-preview",
  backupFilenamePrefix: "site-blog-backup",
  loginTagline: "Blog & content admin",
  dashboardTagline: "Write and publish articles.",
};

export const RESERVED_SLUGS = [
  "about", "admin", "api", "blog", "calculators", "contact",
  "disclaimer", "faq", "hourly", "privacy-policy", "salary",
  "terms-of-use", "sitemap.xml", "robots.txt", "manifest.webmanifest",
  "_next", "favicon.ico", "icon.svg",
] as const;
