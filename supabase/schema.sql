-- Elevate Network — Supabase schema
-- Run this in the Supabase dashboard (SQL Editor) or with `supabase db push`.
-- Safe to re-run: uses idempotent creates where possible; seed data uses ON CONFLICT.

-- ── Tables ──────────────────────────────────────────────────────────────

create table if not exists public.programs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique,
  tagline text,
  description text,
  impact text,
  status text default 'Active',
  sort_order int default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null default 'Updates',
  excerpt text not null,
  published_at timestamptz not null default now(),
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  date timestamptz not null,
  location text not null,
  description text not null,
  status text not null default 'upcoming'
    check (status in ('upcoming', 'registration-open', 'full', 'past')),
  tally_url text,
  attendees int,
  created_at timestamptz not null default now()
);

create table if not exists public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  bio text not null,
  photo_url text,
  socials jsonb,
  sort_order int default 0,
  created_at timestamptz not null default now()
);

-- Public submissions (written by anonymous visitors, read only by staff).
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- ── Row Level Security ──────────────────────────────────────────────────

alter table public.programs enable row level security;
alter table public.posts enable row level security;
alter table public.events enable row level security;
alter table public.team_members enable row level security;
alter table public.contact_messages enable row level security;
alter table public.newsletter_subscribers enable row level security;

-- Content tables: anyone can read; only staff (authenticated) can write.
create policy "public read programs" on public.programs
  for select using (true);
create policy "public read posts" on public.posts
  for select using (true);
create policy "public read events" on public.events
  for select using (true);
create policy "public read team members" on public.team_members
  for select using (true);

-- Submissions: anyone can insert; nothing is readable via the public key.
create policy "public submit contact messages" on public.contact_messages
  for insert with check (true);
create policy "public subscribe" on public.newsletter_subscribers
  for insert with check (true);

-- ── Seed content (safe to delete once real content is in place) ─────────

insert into public.programs (id, title, slug, tagline, description, impact, status, sort_order)
values
  ('00000000-0000-4000-8000-000000000001', 'STEM School Tours', 'stem-school-tours',
   'Bringing the future into the classroom',
   'Hands-on STEM workshops — coding, robotics, AI basics — run inside senior high schools across Accra. Not lectures. Real activities that make students think, ''Wait, I can do this?''',
   '800+ students reached across 12 schools', 'Active', 1),
  ('00000000-0000-4000-8000-000000000002', 'Power of You Festival', 'power-of-you-festival',
   'The event we wished existed when we were younger',
   'An annual one-day festival bringing together young entrepreneurs, creatives, and tech builders for workshops, panels, and live demos. No corporate sponsors running the show — just young people showing what they''ve built.',
   '600+ attendees in 2024', 'Annual', 2),
  ('00000000-0000-4000-8000-000000000003', 'Campus Edition', 'campus-edition',
   'Taking the movement to universities',
   'Adapted workshops and networking sessions for university students — bridging the gap between classroom learning and real-world skills. Think startup pitches, portfolio reviews, and mentorship speed rounds.',
   '3 universities, 200+ participants', 'Active', 3),
  ('00000000-0000-4000-8000-000000000004', 'Elevate Camp', 'elevate-camp',
   'Where the real connections happen',
   'A multi-day residential camp for young leaders — intensive workshops, team challenges, and the kind of late-night conversations that actually change how people think about their future.',
   'Pilot edition planned for 2026', 'Coming soon', 4)
on conflict (id) do nothing;

insert into public.posts (id, title, slug, category, excerpt, published_at, featured)
values
  ('00000000-0000-4000-8000-000000000011', 'What we learned running our first 30-person event',
   'first-event-lessons', 'Reflections',
   'Borrowed room, borrowed projector, borrowed extension cords. Here''s everything that went wrong — and the one thing that went right enough to keep us going.',
   '2025-06-14T09:00:00Z', true),
  ('00000000-0000-4000-8000-000000000012', 'Power of You Festival 2024: the recap',
   'power-of-you-festival-recap', 'Events',
   '600 people, 14 workshops, one demo floor that ran over by two hours because nobody wanted to leave. A full breakdown of what happened and what we''re changing for next year.',
   '2025-04-02T09:00:00Z', false),
  ('00000000-0000-4000-8000-000000000013', 'Why we bring robots into classrooms instead of slides',
   'robots-not-slides', 'Updates',
   'Every STEM School Tour session ends with students building something with their own hands. Here''s the thinking behind that choice — and what we''ve seen it change.',
   '2025-02-18T09:00:00Z', false),
  ('00000000-0000-4000-8000-000000000014', 'Member spotlight: from attendee to workshop lead in 8 months',
   'attendee-to-workshop-lead', 'Community',
   'Ama showed up to a campus edition networking session knowing nobody. Eight months later she''s leading our introductory coding workshops. This is how that happened.',
   '2025-01-09T09:00:00Z', false)
on conflict (id) do nothing;

insert into public.events (id, title, slug, date, location, description, status, attendees)
values
  ('00000000-0000-4000-8000-000000000021', 'STEM School Tour — Westside SHS',
   'stem-tour-westside', '2026-10-09T09:00:00Z', 'Westside Senior High School, Accra',
   'A full day of hands-on robotics and intro-to-code sessions with the whole of Form 2. Students build, break, and rebuild — and leave knowing engineering is a real option for them.',
   'registration-open', null),
  ('00000000-0000-4000-8000-000000000022', 'Mentorship Mixer: Speed Edition',
   'mentorship-mixer-speed', '2026-11-21T17:30:00Z', 'Adenta Community Centre, Accra',
   'Ten mentors. One hundred young people. Seven minutes per table. Come with questions about careers, school, side hustles, or just what to do next — leave with real answers and new contacts.',
   'upcoming', null),
  ('00000000-0000-4000-8000-000000000023', 'Power of You Festival 2025',
   'power-of-you-2025', '2025-08-16T09:00:00Z', 'Accra Digital Centre',
   'Our biggest edition yet — 12 workshops, 6 panels, a live demo floor for young builders, and a pitch competition judged by founders, not sponsors.',
   'past', 612),
  ('00000000-0000-4000-8000-000000000024', 'Campus Edition — University of Ghana, Legon',
   'campus-edition-legon', '2025-03-14T15:00:00Z', 'University of Ghana, Legon',
   'Startup pitches, portfolio reviews, and mentorship speed rounds with 200+ students across three faculties.',
   'past', 214)
on conflict (id) do nothing;

insert into public.team_members (id, name, role, bio, socials, sort_order)
values
  ('00000000-0000-4000-8000-000000000031', 'Augustine Asare', 'Founder & Lead',
   'Started Elevate in 2024 after one too many conversations with brilliant people who''d never been shown what was possible. Runs strategy, partnerships, and the occasional sound system.',
   '{"instagram": "https://instagram.com/elevatenetworkhq"}', 1),
  ('00000000-0000-4000-8000-000000000032', 'Ama Owusu', 'Programs Lead',
   'Designs every workshop we run, from robotics kits to pitch clinics. Former teaching assistant who believes the best learning happens with your hands, not a pen.',
   null, 2),
  ('00000000-0000-4000-8000-000000000033', 'Kwesi Mensah', 'Community & Logistics',
   'The reason 600 people got fed, seated, and registered at the last festival. Builds the community WhatsApp groups that keep everyone connected between events.',
   null, 3)
on conflict (id) do nothing;
