import type { Metadata } from "next";
import BlogArticleView from "@/components/blog/BlogArticleView";
import BlogChrome from "@/components/blog/BlogChrome";
import { loadBlogArticlePage } from "@/components/blog/loadBlogArticlePage";
import { BLOG_CONFIG } from "@/lib/blog/config";
import { getPostPath } from "@/lib/blog/paths";
import { getPostBySlug } from "@/lib/blog/storage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 30;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post || post.status !== "published") return { title: "Article" };

  const canonical = `${BLOG_CONFIG.siteUrl}${getPostPath(slug)}`;
  const keywords = [post.focusKeyword, ...(post.secondaryKeywords ?? [])]
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: canonical,
    },
  };
}

export default async function BlogArticleUnderBlogPrefixPage({ params }: PageProps) {
  const { slug } = await params;
  const { post, html, toc, resolvedCategories, recentPosts, calculators } =
    await loadBlogArticlePage(slug);

  return (
    <BlogChrome>
      <BlogArticleView
        title={post.title}
        slug={post.slug}
        excerpt={post.excerpt}
        author={post.author}
        featuredImage={post.featuredImage}
        featuredImageAlt={post.featuredImageAlt}
        featuredImageTitle={post.featuredImageTitle}
        featuredImageDescription={post.featuredImageDescription}
        html={html}
        content={post.content}
        publishedAt={post.publishedAt}
        categories={resolvedCategories}
        toc={toc}
        recentPosts={recentPosts}
        calculators={calculators}
      />
    </BlogChrome>
  );
}
