import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Stories, updates, and unfiltered reflections from ${site.name} — event recaps, lessons learned, and the truth about building something from scratch.`,
};

const CATEGORIES = ["All", "Events", "Reflections", "Updates", "Community"];

const POSTS = [
  {
    title: "What we learned from 600 young people at Power of You",
    category: "Events",
    date: "November 2024",
    excerpt:
      "Our first major event exceeded every expectation. Here's what worked, what didn't, and what we're changing for next time.",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "Why we start with SHS schools, not universities",
    category: "Reflections",
    date: "October 2024",
    excerpt:
      "Everyone wants to work with university students. We deliberately chose senior high schools. Here's the strategic thinking behind that.",
    readTime: "4 min read",
    featured: false,
  },
  {
    title: "Elevate Meetup #3 Recap: Jollof, pitches, and real talk",
    category: "Events",
    date: "August 2024",
    excerpt:
      "45 young entrepreneurs showed up. 8 pitched their ideas. 3 got mentorship matches. And the jollof was actually good.",
    readTime: "3 min read",
    featured: false,
  },
  {
    title: "The honest truth about running a youth nonprofit in Ghana",
    category: "Reflections",
    date: "July 2024",
    excerpt:
      "No funding rounds. No press coverage. Just young people trying to do something meaningful with limited resources. Here's what it actually looks like.",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Augustine Asare: From idea to 2,400 young people reached",
    category: "Community",
    date: "June 2024",
    excerpt:
      "The founder's journey from frustrated observer to building one of Accra's most active youth networks.",
    readTime: "4 min read",
    featured: false,
  },
  {
    title: "What's coming in 2025: Campus Edition, new partnerships, and Elevate Camp",
    category: "Updates",
    date: "December 2024",
    excerpt:
      "A preview of what we're building next — university workshops, strategic partnerships, and our most ambitious program yet.",
    readTime: "3 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = POSTS.find((p) => p.featured);
  const regular = POSTS.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <Section className="bg-brand-950 text-white">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-volt-500">
            Blog
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Stories from the ground.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
            Event recaps, honest reflections, and the unfiltered truth about
            building something from scratch in Accra. No PR spin. Just the
            work.
          </p>
        </div>
      </Section>

      {/* Category filters — static for now, will be interactive with Sanity */}
      <Section>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat, i) => (
            <span
              key={cat}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                i === 0
                  ? "bg-brand-950 text-white"
                  : "bg-brand-100 text-brand-700 hover:bg-brand-200"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </Section>

      {/* Featured post */}
      {featured ? (
        <Section className="-mt-8">
          <Card interactive className="border-2 border-volt-500/30">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-volt-500/20 px-3 py-1 text-xs font-bold text-brand-900">
                Featured
              </span>
              <span className="text-sm text-brand-500">{featured.category}</span>
              <span className="text-sm text-brand-500">{featured.date}</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-brand-950 sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-2xl text-brand-700 leading-relaxed">
              {featured.excerpt}
            </p>
            <p className="mt-4 text-sm text-brand-500">{featured.readTime}</p>
          </Card>
        </Section>
      ) : null}

      {/* Post grid */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regular.map((post) => (
            <Card key={post.title} interactive>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-600">
                  {post.category}
                </span>
                <span className="text-xs text-brand-500">{post.date}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-brand-950">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-brand-700 leading-relaxed">
                {post.excerpt}
              </p>
              <p className="mt-3 text-xs text-brand-500">{post.readTime}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-brand-950 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Don&apos;t miss the next story.
          </h2>
          <p className="mt-4 text-lg text-brand-200">
            Get event announcements, reflections, and updates straight to your
            inbox. No spam. No fluff. Just the work.
          </p>
          {/* TODO:content — Phase 2: Replace with real Buttondown/Mailchimp embed */}
          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-brand-300">
              Newsletter signup coming soon — we&apos;re setting up Buttondown.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
