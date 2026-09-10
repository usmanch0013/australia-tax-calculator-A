# Blog Admin — integrate into this Next.js project

You are helping merge a **blog admin plugin** into the user's existing Next.js App Router site.

## What the user did

They copied the contents of `blog-admin-copy/` into this project root (merged `src`, `content`, `public`).

## Your job (checklist)

1. **Dependencies** — Ensure `package.json` has `marked` (^15). Run `npm install` if you add it.

2. **Environment** — Create or update `.env.local` from `env.local.example.txt` in the copy kit (or merge if user already pasted those files):
   - `NEXT_PUBLIC_SITE_URL` (required)
   - `ADMIN_PASSWORD` (required)
   - `BLOG_PUBLIC_CHROME=minimal` (new sites without site Navbar)
   - `BLOG_POST_URL_PREFIX=blog` (articles at `/blog/slug`)

3. **Middleware** — Merge `middleware.snippet.ts` into `src/middleware.ts`:
   - Protect `/admin/*` (except login) and `/api/admin/*` (except login API)
   - Do not break existing middleware matchers; combine matchers if needed

4. **Admin layout** — Verify `src/app/admin/layout.tsx` imports:
   ```ts
   import "@/styles/admin-panel.css";
   import "@/styles/blog-public.css";
   ```

5. **Path alias** — Imports use `@/`. Ensure `tsconfig.json` has `"@/*": ["./src/*"]` (standard Next.js).

6. **Route conflicts**
   - `src/app/[slug]/page.tsx` from the kit is for **root-level** articles (`BLOG_POST_URL_PREFIX=root`).
   - If this site already has `src/app/[slug]/page.tsx`, merge carefully or delete kit version and use only `/blog/[slug]` with `BLOG_POST_URL_PREFIX=blog`.

7. **Site chrome** — `BlogChrome.tsx` with `BLOG_PUBLIC_CHROME=site` dynamically imports `@/components/Navbar` and `Footer`. If missing, set `BLOG_PUBLIC_CHROME=minimal` in `.env.local`.

8. **Verify** — `npm run build` then test `/admin/login`, `/admin`, `/blog`.

## Key paths

| Area | Path |
|------|------|
| Admin UI | `src/app/admin/` |
| Admin API | `src/app/api/admin/` |
| Public blog | `src/app/blog/` |
| Editor + SEO lib | `src/lib/blog/` |
| Posts JSON | `content/blog/*.json` |
| Images | `public/blog-images/` |

## Do not

- Change article URLs or slugs in existing `content/blog/*.json` unless user asks
- Remove user's existing routes without asking
