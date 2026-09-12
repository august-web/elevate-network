import type { Event, Post, Program, TeamMember } from "@/lib/supabase";

/**
 * Sample content shown only while Supabase is unconfigured (no
 * NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY). Once the
 * credentials are set these are ignored and the database is the source of
 * truth — see supabase/schema.sql for the matching tables and seed inserts.
 */

export const seedPrograms: Program[] = [
  {
    id: "seed-stem-school-tours",
    title: "STEM School Tours",
    slug: "stem-school-tours",
    tagline: "Bringing the future into the classroom",
    description:
      "Hands-on STEM workshops — coding, robotics, AI basics — run inside senior high schools across Accra. Not lectures. Real activities that make students think, 'Wait, I can do this?'",
    impact: "800+ students reached across 12 schools",
    status: "Active",
    sort_order: 1,
  },
  {
    id: "seed-power-of-you-festival",
    title: "Power of You Festival",
    slug: "power-of-you-festival",
    tagline: "The event we wished existed when we were younger",
    description:
      "An annual one-day festival bringing together young entrepreneurs, creatives, and tech builders for workshops, panels, and live demos. No corporate sponsors running the show — just young people showing what they've built.",
    impact: "600+ attendees in 2024",
    status: "Annual",
    sort_order: 2,
  },
  {
    id: "seed-campus-edition",
    title: "Campus Edition",
    slug: "campus-edition",
    tagline: "Taking the movement to universities",
    description:
      "Adapted workshops and networking sessions for university students — bridging the gap between classroom learning and real-world skills. Think startup pitches, portfolio reviews, and mentorship speed rounds.",
    impact: "3 universities, 200+ participants",
    status: "Active",
    sort_order: 3,
  },
  {
    id: "seed-elevate-camp",
    title: "Elevate Camp",
    slug: "elevate-camp",
    tagline: "Where the real connections happen",
    description:
      "A multi-day residential camp for young leaders — intensive workshops, team challenges, and the kind of late-night conversations that actually change how people think about their future.",
    impact: "Pilot edition planned for 2026",
    status: "Coming soon",
    sort_order: 4,
  },
];

export const seedPosts: Post[] = [
  {
    id: "seed-post-first-event",
    title: "What we learned running our first 30-person event",
    slug: "first-event-lessons",
    category: "Reflections",
    excerpt:
      "Borrowed room, borrowed projector, borrowed extension cords. Here's everything that went wrong — and the one thing that went right enough to keep us going.",
    published_at: "2025-06-14T09:00:00Z",
    featured: true,
  },
  {
    id: "seed-post-festival-recap",
    title: "Power of You Festival 2024: the recap",
    slug: "power-of-you-festival-recap",
    category: "Events",
    excerpt:
      "600 people, 14 workshops, one demo floor that ran over by two hours because nobody wanted to leave. A full breakdown of what happened and what we're changing for next year.",
    published_at: "2025-04-02T09:00:00Z",
    featured: false,
  },
  {
    id: "seed-post-stem-tours",
    title: "Why we bring robots into classrooms instead of slides",
    slug: "robots-not-slides",
    category: "Updates",
    excerpt:
      "Every STEM School Tour session ends with students building something with their own hands. Here's the thinking behind that choice — and what we've seen it change.",
    published_at: "2025-02-18T09:00:00Z",
    featured: false,
  },
  {
    id: "seed-post-community-spotlight",
    title: "Member spotlight: from attendee to workshop lead in 8 months",
    slug: "attendee-to-workshop-lead",
    category: "Community",
    excerpt:
      "Ama showed up to a campus edition networking session knowing nobody. Eight months later she's leading our introductory coding workshops. This is how that happened.",
    published_at: "2025-01-09T09:00:00Z",
    featured: false,
  },
  {
    id: "seed-post-transparency",
    title: "Where every cedi went in 2024",
    slug: "where-every-cedi-went-2024",
    category: "Updates",
    excerpt:
      "Radical transparency isn't a slogan — it's a spreadsheet. Our full 2024 income and spending, explained line by line in plain language.",
    published_at: "2024-12-20T09:00:00Z",
    featured: false,
  },
  {
    id: "seed-post-why-accra",
    title: "Why we're building in Adenta, not Accra Central",
    slug: "why-adenta",
    category: "Reflections",
    excerpt:
      "The opportunities concentrate where the offices are. The talent doesn't. A case for building where people actually live.",
    published_at: "2024-11-05T09:00:00Z",
    featured: false,
  },
];

export const seedEvents: Event[] = [
  {
    id: "seed-event-stem-tour-westside",
    title: "STEM School Tour — Westside SHS",
    slug: "stem-tour-westside",
    date: "2026-10-09T09:00:00Z",
    location: "Westside Senior High School, Accra",
    description:
      "A full day of hands-on robotics and intro-to-code sessions with the whole of Form 2. Students build, break, and rebuild — and leave knowing engineering is a real option for them.",
    status: "registration-open",
    tally_url: null,
    attendees: null,
  },
  {
    id: "seed-event-mentorship-mixer",
    title: "Mentorship Mixer: Speed Edition",
    slug: "mentorship-mixer-speed",
    date: "2026-11-21T17:30:00Z",
    location: "Adenta Community Centre, Accra",
    description:
      "Ten mentors. One hundred young people. Seven minutes per table. Come with questions about careers, school, side hustles, or just what to do next — leave with real answers and new contacts.",
    status: "upcoming",
    tally_url: null,
    attendees: null,
  },
  {
    id: "seed-event-poy-2025",
    title: "Power of You Festival 2025",
    slug: "power-of-you-2025",
    date: "2025-08-16T09:00:00Z",
    location: "Accra Digital Centre",
    description:
      "Our biggest edition yet — 12 workshops, 6 panels, a live demo floor for young builders, and a pitch competition judged by founders, not sponsors.",
    status: "past",
    tally_url: null,
    attendees: 612,
  },
  {
    id: "seed-event-campus-legon",
    title: "Campus Edition — University of Ghana, Legon",
    slug: "campus-edition-legon",
    date: "2025-03-14T15:00:00Z",
    location: "University of Ghana, Legon",
    description:
      "Startup pitches, portfolio reviews, and mentorship speed rounds with 200+ students across three faculties.",
    status: "past",
    tally_url: null,
    attendees: 214,
  },
];

export const seedTeamMembers: TeamMember[] = [
  {
    id: "seed-team-augustine",
    name: "Augustine Asare",
    role: "Founder & Lead",
    bio: "Started Elevate in 2024 after one too many conversations with brilliant people who'd never been shown what was possible. Runs strategy, partnerships, and the occasional sound system.",
    photo_url: null,
    socials: { instagram: "https://instagram.com/elevatenetworkhq" },
    sort_order: 1,
  },
  {
    id: "seed-team-ama-owusu",
    name: "Ama Owusu",
    role: "Programs Lead",
    bio: "Designs every workshop we run, from robotics kits to pitch clinics. Former teaching assistant who believes the best learning happens with your hands, not a pen.",
    photo_url: null,
    socials: null,
    sort_order: 2,
  },
  {
    id: "seed-team-kwesi-mensah",
    name: "Kwesi Mensah",
    role: "Community & Logistics",
    bio: "The reason 600 people got fed, seated, and registered at the last festival. Builds the community WhatsApp groups that keep everyone connected between events.",
    photo_url: null,
    socials: null,
    sort_order: 3,
  },
];
