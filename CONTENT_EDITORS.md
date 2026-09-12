# Content Editor's Guide

How to update the Elevate Network website without touching any code.
Everything lives in **Supabase** — a spreadsheet-like online database.

## Getting access

1. Ask whoever manages the site to create a Supabase account for you at
   [supabase.com](https://supabase.com) and invite you to the project.
2. Sign in at [supabase.com/dashboard](https://supabase.com/dashboard) and
   open the **Elevate Network** project.

> **First-time setup (developer):** run `supabase/schema.sql` once in the
> SQL Editor and set `NEXT_PUBLIC_SUPABASE_URL` +
> `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel. See the README.

## Where content lives

Open **Table Editor** in the left menu. You'll see these tables:

| Table | Where it appears on the site |
| --------------------- | ------------------------------------------------ |
| **programs** | Homepage "What we actually do" grid |
| **posts** | Blog page — cards, categories, featured post |
| **events** | Events page — "Coming up" and "What we've done" |
| **team_members** | About page — "The people doing the work" |
| **contact_messages** | Submissions from the contact form (read only — a form entry goes here) |
| **newsletter_subscribers** | People who signed up for the newsletter (read only) |

## How to edit

1. Click a table (e.g. **programs**).
2. Click a cell to edit text, just like a spreadsheet. Changes save
   automatically as you click away.
3. To add something new, click **Insert row** (green button, top left) and
   fill in the fields. To delete, click the row's ⋯ menu → **Delete row**.

Field notes:

- **programs**: `sort_order` controls the display order (1 = first).
  `status` shows as a badge on the Programs page — use `Active`,
  `Coming soon`, or a short phrase like `Annual`.
- **posts**: `published_at` controls the date shown. Tick `featured` on the
  one post you want highlighted at the top of the blog.
- **events**: `status` must be `upcoming`, `registration-open`, `full`, or
  `past`. The site automatically splits events into "Coming up" vs
  "What we've done" based on the date and status. `attendees` shows on past
  events when filled in.
- **team_members**: `sort_order` controls display order. `photo_url` takes a
  link to a square photo (upload one via **Storage** in Supabase and copy
  its public URL). Leave empty and the site shows initials instead.

## How changes reach the site

The site re-checks the database every **5 minutes**. So: edit a row → wait
a few minutes → refresh the page. No deploy, no code, nothing to "publish."

## Rules of thumb

- **Don't** rename columns, delete tables, or edit anything under
  **Authentication**, **Database → Roles**, or SQL unless a developer told
  you to.
- **Do** proofread text in a separate doc first; the site shows it verbatim.
- If something looks wrong on the site, check the matching table first — a
  typo there is the most common cause. If the table looks fine, take a
  screenshot and send it to whoever maintains the code.

Nothing you do in the Table Editor can break the website's code — worst
case, a row shows up looking odd, and you can edit or delete it again.
