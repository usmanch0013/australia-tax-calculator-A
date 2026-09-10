import Link from "next/link";
import { BLOG_CONFIG } from "@/lib/blog/config";
import { getPostPath } from "@/lib/blog/paths";
import type { BlogPost } from "@/lib/blog/types";

interface SidebarLink {
  href: string;
  label: string;
}

interface BlogArticleSidebarProps {
  recentPosts: BlogPost[];
  calculators: SidebarLink[];
}

export default function BlogArticleSidebar({
  recentPosts,
  calculators,
}: BlogArticleSidebarProps) {
  const quickLinks = BLOG_CONFIG.quickLinks;
  const sidebarCta = BLOG_CONFIG.sidebarCta;
  return (
    <>
      {calculators.length > 0 && (
        <section className="blog-sidebar-card">
          <h2 className="blog-sidebar-card__title">Popular calculators</h2>
          <ul className="blog-sidebar-tools">
            {calculators.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="blog-sidebar-tools__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {calculators.length > 0 && (
            <Link href="/" className="blog-sidebar-card__more">
              Browse more →
            </Link>
          )}
        </section>
      )}

      {recentPosts.length > 0 && (
        <section className="blog-sidebar-card">
          <h2 className="blog-sidebar-card__title">Latest articles</h2>
          <ul className="blog-sidebar-list">
            {recentPosts.map((post) => (
              <li key={post.id} className="blog-sidebar-list__item">
                <Link href={getPostPath(post.slug)} className="blog-sidebar-list__link">
                  {post.featuredImage && (
                    <span className="blog-sidebar-list__thumb">
                      <img src={post.featuredImage} alt="" loading="lazy" />
                    </span>
                  )}
                  <span className="blog-sidebar-list__text">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/blog" className="blog-sidebar-card__more">View all articles →</Link>
        </section>
      )}

      <section className="blog-sidebar-card">
        <h2 className="blog-sidebar-card__title">Quick links</h2>
        <ul className="blog-sidebar-tools">
          {quickLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="blog-sidebar-tools__link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {sidebarCta && (
        <section className="blog-sidebar-card blog-sidebar-card--accent">
          <h2 className="blog-sidebar-card__title">{sidebarCta.title}</h2>
          <p className="blog-sidebar-card__text">{sidebarCta.text}</p>
          <Link href={sidebarCta.href} className="blog-sidebar-card__cta">{sidebarCta.label}</Link>
        </section>
      )}
    </>
  );
}
