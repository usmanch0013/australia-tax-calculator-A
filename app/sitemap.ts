import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { getAllSitemapPaths, getSitemapEntry } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return getAllSitemapPaths().map((path) => {
    const { changeFrequency, priority } = getSitemapEntry(path);

    return {
      url: `${SITE.url}${path}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
