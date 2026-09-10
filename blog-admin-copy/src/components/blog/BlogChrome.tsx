import Link from "next/link";
import type { ReactNode } from "react";
import { BLOG_CONFIG } from "@/lib/blog/config";

interface BlogChromeProps {
  children: ReactNode;
}

function MinimalChrome({ children }: BlogChromeProps) {
  return (
    <div className="blog-public-chrome">
      <header className="blog-public-chrome__bar">
        <div className="blog-public-chrome__inner">
          <Link href="/" className="blog-public-chrome__brand">
            <span className="blog-public-chrome__mark" aria-hidden>{BLOG_CONFIG.brandInitials}</span>
            <span>{BLOG_CONFIG.siteName}</span>
          </Link>
          <nav className="blog-public-chrome__nav" aria-label="Blog">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/admin">Admin</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="blog-public-chrome__footer">
        <div className="blog-public-chrome__inner">
          <p>© {new Date().getFullYear()} {BLOG_CONFIG.siteName}</p>
          <a href={`mailto:${BLOG_CONFIG.siteEmail}`}>{BLOG_CONFIG.siteEmail}</a>
        </div>
      </footer>
    </div>
  );
}

async function SiteChrome({ children }: BlogChromeProps) {
  const [{ default: Navbar }, { default: Footer }] = await Promise.all([
    import("@/components/Navbar"),
    import("@/components/Footer"),
  ]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default async function BlogChrome({ children }: BlogChromeProps) {
  if (BLOG_CONFIG.publicChrome === "site") {
    return <SiteChrome>{children}</SiteChrome>;
  }
  return <MinimalChrome>{children}</MinimalChrome>;
}
