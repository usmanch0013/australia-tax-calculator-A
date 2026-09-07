"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { estimateReadingTime, renderMarkdown } from "@/lib/blog/markdown";
import { getPostPath } from "@/lib/blog/paths";
import {
  ARTICLE_PREVIEW_STORAGE_KEY,
  loadArticlePreview,
  type ArticlePreviewPayload,
} from "@/lib/blog/preview";

export default function AdminArticlePreviewPage() {
  const [data, setData] = useState<ArticlePreviewPayload | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function readPreview() {
      setData(loadArticlePreview());
      setReady(true);
    }

    readPreview();

    function onStorage(event: StorageEvent) {
      if (event.key !== ARTICLE_PREVIEW_STORAGE_KEY || !event.newValue) return;
      try {
        setData(JSON.parse(event.newValue) as ArticlePreviewPayload);
      } catch {
        setData(null);
      }
    }

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const html = useMemo(() => (data ? renderMarkdown(data.content) : ""), [data]);
  const path = data?.slug.trim() ? getPostPath(data.slug) : "/your-article-slug";
  const readingMin = data
    ? estimateReadingTime(data.content.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length)
    : 1;

  if (!ready) {
    return null;
  }

  if (!data) {
    return (
      <>
        <Header />
        <main className="site-container" style={{ padding: "4rem 1rem", minHeight: "50vh" }}>
          <h1 style={{ marginBottom: "0.75rem" }}>No preview available</h1>
          <p style={{ marginBottom: "1.25rem", color: "var(--stone-600)" }}>
            Open the editor and click Preview to view your article as a full page.
          </p>
          <Link href="/admin">Back to admin</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="admin-article-preview-banner" role="status">
        <div className="admin-article-preview-banner__inner site-container">
          <div>
            <strong>Article preview</strong>
            <span className="admin-article-preview-banner__url">{path}</span>
          </div>
          <div className="admin-article-preview-banner__actions">
            <button
              type="button"
              className="admin-article-preview-banner__btn"
              onClick={() => window.close()}
            >
              Close tab
            </button>
            <Link
              href="/admin"
              className="admin-article-preview-banner__btn admin-article-preview-banner__btn--ghost"
            >
              Back to editor
            </Link>
          </div>
        </div>
      </div>

      <Header />
      <article className="blog-article">
        <nav className="breadcrumb breadcrumb--tool" aria-label="Breadcrumb">
          <div className="site-container">
            <ol className="breadcrumb__list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li aria-current="page">{data.title || "Preview"}</li>
            </ol>
          </div>
        </nav>

        <header className="blog-article__header">
          <div className="site-container">
            {data.featuredImage && (
              <div className="blog-article__hero-image">
                <img
                  src={data.featuredImage}
                  alt={data.featuredImageAlt || data.title || "Featured image"}
                  width={1200}
                  height={630}
                />
              </div>
            )}
            <time className="blog-article__date" dateTime={new Date().toISOString()}>
              Preview
            </time>
            <h1 className="blog-article__title">{data.title || "Untitled"}</h1>
            <p className="blog-article__meta">
              By {data.author || "Editor"} · {readingMin} min read
            </p>
            {data.excerpt && <p className="blog-article__excerpt">{data.excerpt}</p>}
          </div>
        </header>

        <div className="site-container blog-article__body">
          <div
            className="blog-article__prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
