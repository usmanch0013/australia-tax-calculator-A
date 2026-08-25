import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { getAllSitemapPaths, getSitemapEntry } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const paths = await getAllSitemapPaths();

  return paths.map((path) => {
    const { changeFrequency, priority } = getSitemapEntry(path);

    return {
      url: `${SITE.url}${path}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
