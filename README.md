# Elevate Network — Official Website

The official website for **Elevate Network**, a youth-led nonprofit in Adenta,
Accra, Ghana, empowering the next generation of Ghanaian leaders,
entrepreneurs and innovators through mentorship, STEM education and bold youth
events.

Built with **Next.js (App Router) + TypeScript (strict) + Tailwind CSS**, with
Sanity CMS powering all dynamic content.

## Stack

| Concern      | Choice                                                        |
| ------------ | ------------------------------------------------------------- |
| Framework    | Next.js 16 (App Router), React 19                             |
| Language     | TypeScript (strict)                                           |
| Styling      | Tailwind CSS v4 (design tokens in `src/app/globals.css`)      |
| Fonts        | Space Grotesk (headings), Inter (body) via `next/font`        |
| CMS          | Sanity (free tier) — schemas: `post`, `event`, `program`, `teamMember` |
| Forms        | Tally.so embeds (no custom backend)                           |
| Donations    | Paystack payment-page link (button only)                      |
| Newsletter   | Buttondown / Mailchimp embed                                  |
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
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | yes      | Sanity project id (public)                           |
| `NEXT_PUBLIC_SANITY_DATASET`    | no       | Defaults to `production`                             |
| `SANITY_API_READ_TOKEN`         | no       | Server-only read token (Viewer permission)           |
| `NEXT_PUBLIC_PAYSTACK_DONATE_URL` | no     | Paystack payment page URL for donations              |
| `NEXT_PUBLIC_TALLY_EVENT_FORM_URL` | no    | Tally.so registration form URL                       |
| `NEXT_PUBLIC_NEWSLETTER_URL`    | no       | Buttondown/Mailchimp embed endpoint                  |
| `NEXT_PUBLIC_SITE_URL`          | no       | Production domain for metadata/OG/sitemap            |

> The site builds and renders **without** any env vars set — Sanity-dependent
> sections show a graceful empty state instead of breaking. Set the Sanity
> vars to go live with content.

## Project structure

```
src/
  app/                  # App Router pages + root layout
  components/
    layout/             # Navbar, Footer
    ui/                 # Button, Card, Section, EmptyState, PagePlaceholder
  lib/
    site.ts             # org identity, links, env-driven URLs
    sanity.ts           # Sanity client + queries (graceful empty state)
    utils.ts            # cn() helper
```

Design tokens (colors, fonts, African-print pattern utility) live in
`src/app/globals.css`.

## Content management

Content (programs, events, posts, team members) is edited in **Sanity
Studio** — embedded at `/studio` from Phase 2. Pages are statically generated
with ISR, so published changes appear on the site without redeploying code.

**Placeholders:** where real copy/images are missing you'll find a
`TODO:content` comment in the code — search the repo for `TODO:content` to
find everything the team should replace.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repo (framework is
   auto-detected as Next.js).
3. Add the environment variables from `.env.example` in
   **Settings → Environment Variables** (all environments).
4. **Deploy.** Vercel builds with `npm run build` and serves the result.
5. Custom domain: **Settings → Domains** → add `elevatenetworkhq.com` and
   follow the DNS instructions (Vercel issues the SSL certificate
   automatically).

## Phase status

- [x] **Phase 0 — Foundation** — scaffold, design tokens, core UI components,
      Sanity client with graceful empty state, env/README.
- [ ] **Phase 1 — Core pages** — Home, About, Programs, Contact.
- [ ] **Phase 2 — Dynamic content** — Events, Blog, Donate, newsletter,
      Sanity Studio + seed content.
- [ ] **Phase 3 — Polish & ship** — SEO, performance, deploy guide for
      non-technical editors.