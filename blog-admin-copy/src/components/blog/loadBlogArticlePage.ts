import { notFound } from "next/navigation";
import { getCategories, resolvePostCategories } from "@/lib/blog/categories";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog/storage";
import { renderMarkdown } from "@/lib/blog/markdown";
import { prepareArticleHtml } from "@/lib/blog/toc";
import { isReservedSlug } from "@/lib/blog/paths";
import { BLOG_CONFIG } from "@/lib/blog/config";

export async function loadBlogArticlePage(slug: string) {
  if (isReservedSlug(slug)) notFound();

  const post = await getPostBySlug(slug);
  if (!post || post.status !== "published") notFound();

  const [allPosts, categories] = await Promise.all([getPublishedPosts(), getCategories()]);
  const rendered = renderMarkdown(post.content);
  const { html, toc } = prepareArticleHtml(rendered);
  const resolvedCategories = resolvePostCategories(post.categories, categories);
  const recentPosts = allPosts.filter((item) => item.slug !== slug).slice(0, 5);

  let calculators = BLOG_CONFIG.sidebarCalculators;
  if (BLOG_CONFIG.publicChrome === "site" && calculators.length === 0) {
    try {
      const { getPopularCalculatorLinks } = await import("@/lib/internalLinks");
      calculators = getPopularCalculatorLinks(6);
    } catch {
      calculators = [];
    }
  }

  return {
    post,
    html,
    toc,
    resolvedCategories,
    recentPosts,
    calculators,
  };
}
