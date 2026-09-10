import type { Metadata } from "next";
import BlogChrome from "@/components/blog/BlogChrome";
import BlogIndexContent from "@/components/blog/BlogIndexContent";
import { BLOG_CONFIG } from "@/lib/blog/config";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: BLOG_CONFIG.blogIndexTitle,
  description: BLOG_CONFIG.blogIndexSubtitle,
  alternates: { canonical: `${BLOG_CONFIG.siteUrl}/blog` },
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  return (
    <BlogChrome>
      <BlogIndexContent searchParams={searchParams} />
    </BlogChrome>
  );
}
