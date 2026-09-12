# Elevate Network — Official Website

The official website for **Elevate Network**, a youth-led nonprofit in Adenta,
Accra, Ghana, empowering the next generation of Ghanaian leaders,
entrepreneurs and innovators through mentorship, STEM education and bold youth
events.

Built with **Next.js (App Router) + TypeScript (strict) + Tailwind CSS**, with
Supabase powering all dynamic content.

## Stack

| Concern      | Choice                                                        |
| ------------ | ------------------------------------------------------------- |
| Framework    | Next.js 16 (App Router), React 19                             |
| Language     | TypeScript (strict)                                           |
| Styling      | Tailwind CSS v4 (design tokens in `src/app/globals.css`)      |
| Fonts        | Space Grotesk (headings), Inter (body) via `next/font`        |
| Database     | Supabase (free tier) — `programs`, `posts`, `events`, `team_members`, `contact_messages`, `newsletter_subscribers` |
| Forms        | Built-in React forms writing to Supabase (mailto fallback)    |
| Donations    | Paystack payment-page link (button only)                      |
| Newsletter   | First-party signup form → Supabase                            |
| Analytics    | Vercel Analytics                                              |
| Hosting      | Vercel (free tier), custom domain + auto SSL                  |

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your values (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev        # dev server
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # production build (runs lint + type checks)
npm run start      # serve the production build
```

## Environment variables

All values live in `.env.local` (see `.env.example`). Never hardcode them.

| Variable                        | Required | Description                                          |
| ------------------------------- | -------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | yes      | Supabase project URL (public-safe)                   |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | yes      | Supabase anon/public key (public-safe, RLS-protected) |
| `NEXT_PUBLIC_PAYSTACK_DONATE_URL` | no     | Paystack payment page URL for donations              |
| `NEXT_PUBLIC_TALLY_EVENT_FORM_URL` | no    | Tally.so registration form URL                       |
| `NEXT_PUBLIC_SITE_URL`          | no       | Production domain for metadata/OG/sitemap            |

> The site builds and renders **without** any env vars set — database-backed
> sections fall back to sample seed content (see `src/lib/seed-data.ts`) so
> nothing looks broken locally. Set the Supabase vars to go live with real
> content.

## Project structure

```
src/
  app/                  # App Router pages + root layout
  components/
    layout/             # Navbar, Footer
    ui/                 # Button, Card, Section, EmptyState, PagePlaceholder
  lib/
    site.ts             # org identity, links, env-driven URLs
    supabase.ts         # Supabase client + typed fetch helpers
    seed-data.ts        # sample content used while Supabase is unconfigured
    utils.ts            # cn() helper
supabase/
  schema.sql            # tables, row-level security, seed data (run once)
```

Design tokens (colors, fonts, African-print pattern utility) live in
`src/app/globals.css`.

## Content management

Content lives in **Supabase** and is edited in the Supabase dashboard
(Table Editor) — no code needed. All dynamic sections (programs, blog, events,
team) read from the database and revalidate every 5 minutes, so changes appear
on the site without redeploying.

**For the team (no code needed):** read [`CONTENT_EDITORS.md`](CONTENT_EDITORS.md)
— it covers logging in, editing tables safely, and how changes reach the site.

**Placeholders:** where real copy/images are missing you'll find a
`TODO:content` comment in the code — search the repo for `TODO:content` to
find everything the team should replace.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repo (framework is
   auto-detected as Next.js).
3. Add the environment variables from `.env.example` in
   **Settings → Environment Variables** (all environments) — at minimum
   `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Without
   them the site still builds and shows sample content.
4. **Deploy.** Vercel builds with `npm run build` and serves the result.
5. Custom domain: **Settings → Domains** → add `elevatenetworkhq.com` and
   follow the DNS instructions (Vercel issues the SSL certificate
   automatically).

### Setting up Supabase (one time)

1. Create a free project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** and run the contents of
   [`supabase/schema.sql`](supabase/schema.sql) — this creates the tables,
   row-level security policies, and sample seed rows.
3. Copy the **Project URL** and **anon/public key** from
   **Project Settings → API** into `.env.local` (locally) and Vercel
   environment variables (production).
4. Redeploy. Content edited in the Supabase dashboard appears on the site
   within a few minutes via ISR — no redeploy needed.

## SEO & performance

- `sitemap.xml`, `robots.txt`, and a web manifest are
  generated automatically.
- A branded Open Graph share image is generated at build time (`next/og`).
- Canonical URLs, Open Graph/Twitter tags, and Organization structured data
  (JSON-LD) are included on every page.
- The homepage is statically generated with 5-minute ISR revalidation.
- Vercel Analytics + Speed Insights are installed (`@vercel/analytics`, `@vercel/speed-insights`).

## Phase status

- [x] **Phase 0 — Foundation** — scaffold, design tokens, core UI components,
      env/README.
- [x] **Phase 1 — Core pages** — Home (hero + impact stats + CTA), About
      (founder story, values, team), Programs (STEM tours, festivals, camps),
      Contact (form, email, socials).
- [x] **Phase 2 — Dynamic content** — Events (upcoming + past), Blog (posts
      + categories), Donate (Paystack + impact tiers), newsletter signup,
      Supabase schema (`supabase/schema.sql`).
- [x] **Phase 3 — Polish & ship** — SEO (sitemap, robots, manifest, OG image,
      canonical URLs, JSON-LD), performance (ISR revalidation, preconnect,
      Vercel Analytics + Speed Insights),
      [`CONTENT_EDITORS.md`](CONTENT_EDITORS.md) guide for non-technical
      editors.
- [x] **Phase 4 — Supabase migration** — Sanity removed; all dynamic content
      (programs, posts, events, team) plus the contact form and newsletter
      signup now run on Supabase, with sample seed content for local dev.

### Next up (Phase 5)

- Wire the Blog, Events, and Team sections to real content in Supabase (the
  schema and queries are live; replace the seed rows with real content).
- Admin review flow for contact messages and newsletter subscribers.