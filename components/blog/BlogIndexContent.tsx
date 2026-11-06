import Link from "next/link";
import { getPostPath } from "@/lib/blog/paths";
import { getCategories, resolvePostCategories } from "@/lib/blog/categories";
import { getPublishedPosts } from "@/lib/blog/storage";
import { BLOG_CONFIG } from "@/lib/blog/config";
import type { BlogCategory, BlogPost } from "@/lib/blog/types";
import "@/styles/blog-public.css";

const PAGE_SIZE = 9;

function stripTags(value: string): string {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function readingTimeMinutes(post: BlogPost): number {
  const words = stripTags(post.content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function pageHref(page: number, categorySlug?: string | null): string {
  const params = new URLSearchParams();
  if (categorySlug) params.set("category", categorySlug);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

function pageNumbers(current: number, total: number): Array<number | "…"> {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set<number>([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out: Array<number | "…"> = [];
  for (let i = 0; i < sorted.length; i += 1) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) out.push("…");
    out.push(sorted[i]);
  }
  return out;
}

function BlogCard({
  post,
  categories,
  featured = false,
}: {
  post: BlogPost;
  categories: BlogCategory[];
  featured?: boolean;
}) {
  return (
    <article className={`blog-card${featured ? " blog-card--featured" : ""}`}>
      <Link href={getPostPath(post.slug)} className="blog-card__link">
        {post.featuredImage && (
          <div className="blog-card__image">
            <img
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              loading={featured ? "eager" : "lazy"}
            />
          </div>
        )}
        <div className="blog-card__body">
          {featured && <span className="blog-card__badge">Featured guide</span>}
          {categories.length > 0 && (
            <div className="blog-card__cats">
              {categories.map((category) => (
                <span key={category.slug} className="blog-cat">
                  {category.name}
                </span>
              ))}
            </div>
          )}
          <div className="blog-card__meta">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span>{readingTimeMinutes(post)} min read</span>
          </div>
          <h2 className="blog-card__title">{post.title}</h2>
          <p className="blog-card__excerpt">{post.excerpt}</p>
          <div className="blog-card__footer">
            <span className="blog-card__cta">Read article</span>
            <span className="blog-card__arrow" aria-hidden>
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default async function BlogIndexContent({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category: categorySlug, page: pageParam } = await searchParams;
  const [posts, catalog] = await Promise.all([getPublishedPosts(), getCategories()]);
  const activeCategory = catalog.find((category) => category.slug === categorySlug) ?? null;
  const visible = activeCategory
    ? posts.filter((post) => (post.categories ?? []).includes(activeCategory.slug))
    : posts;

  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const requestedPage = Number.parseInt(pageParam ?? "1", 10);
  const page = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1;
  const pagePosts = visible.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const featuredPost = page === 1 && !activeCategory && pagePosts.length > 0 ? pagePosts[0] : null;
  const gridPosts = featuredPost ? pagePosts.slice(1) : pagePosts;
  const firstShown = visible.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const lastShown = Math.min(page * PAGE_SIZE, visible.length);
  const latestDate = posts[0]?.publishedAt;

  return (
    <main id="main-content" className="page-shell blog-index">
      <header className="blog-index__hero">
        <div className="site-container">
          <p className="blog-index__eyebrow">Salary &amp; tax guides · Australia</p>
          <h1 className="blog-index__title">{BLOG_CONFIG.blogIndexTitle}</h1>
          <p className="blog-index__subtitle">{BLOG_CONFIG.blogIndexSubtitle}</p>
          <div className="blog-index__stats" aria-label="Blog statistics">
            <span>
              <strong>{posts.length}</strong> guides
            </span>
            <span>
              <strong>{catalog.length}</strong> topics
            </span>
            {latestDate && (
              <span>
                Updated <strong>{formatDate(latestDate)}</strong>
              </span>
            )}
          </div>
          {catalog.length > 0 && (
            <nav className="blog-index__cats" aria-label="Filter by topic">
              <Link
                href="/blog"
                className={`blog-cat ${!activeCategory ? "blog-cat--active" : ""}`}
                aria-current={!activeCategory ? "page" : undefined}
              >
                All guides
              </Link>
              {catalog.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog?category=${category.slug}`}
                  className={`blog-cat ${activeCategory?.slug === category.slug ? "blog-cat--active" : ""}`}
                  aria-current={activeCategory?.slug === category.slug ? "page" : undefined}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      <div className="site-container page-body">
        {visible.length === 0 ? (
          <p className="blog-index__empty">
            {activeCategory ? `No articles in ${activeCategory.name} yet.` : "New articles coming soon."}
          </p>
        ) : (
          <>
            <div className="blog-grid">
              {featuredPost && (
                <BlogCard
                  post={featuredPost}
                  categories={resolvePostCategories(featuredPost.categories, catalog)}
                  featured
                />
              )}
              {gridPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  categories={resolvePostCategories(post.categories, catalog)}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <nav className="blog-pagination" aria-label="Blog pages">
                {page > 1 ? (
                  <Link
                    className="blog-pagination__link blog-pagination__link--prev"
                    href={pageHref(page - 1, activeCategory?.slug)}
                    aria-label="Previous page"
                  >
                    ← Prev
                  </Link>
                ) : (
                  <span
                    className="blog-pagination__link blog-pagination__link--disabled"
                    aria-hidden
                  >
                    ← Prev
                  </span>
                )}
                {pageNumbers(page, totalPages).map((item, index) =>
                  item === "…" ? (
                    <span key={`gap-${index}`} className="blog-pagination__gap" aria-hidden>
                      …
                    </span>
                  ) : (
                    <Link
                      key={item}
                      className={`blog-pagination__link${item === page ? " blog-pagination__link--active" : ""}`}
                      href={pageHref(item, activeCategory?.slug)}
                      aria-label={`Page ${item}`}
                      aria-current={item === page ? "page" : undefined}
                    >
                      {item}
                    </Link>
                  )
                )}
                {page < totalPages ? (
                  <Link
                    className="blog-pagination__link blog-pagination__link--next"
                    href={pageHref(page + 1, activeCategory?.slug)}
                    aria-label="Next page"
                  >
                    Next →
                  </Link>
                ) : (
                  <span
                    className="blog-pagination__link blog-pagination__link--disabled"
                    aria-hidden
                  >
                    Next →
                  </span>
                )}
              </nav>
            )}
            <p className="blog-pagination__info">
              Showing {firstShown}–{lastShown} of {visible.length} articles
              {activeCategory ? ` in ${activeCategory.name}` : ""}
              {totalPages > 1 ? ` · Page ${page} of ${totalPages}` : ""}
            </p>
          </>
        )}
      </div>
    </main>
  );
}
