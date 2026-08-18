import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { getAllSitemapPaths } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const paths = getAllSitemapPaths();

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/salary") ? 0.8 : 0.7,
  }));
}
