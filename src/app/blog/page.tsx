import type { Metadata } from "next";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Section } from "@/components/ui/Section";
import { getPosts } from "@/lib/supabase";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Stories, updates, and unfiltered reflections from ${site.name} — event recaps, lessons learned, and the truth about building something from scratch.`,
  alternates: { canonical: "/blog" },
};

const CATEGORIES = ["All", "Events", "Reflections", "Updates", "Community"];

// Revalidate every 5 minutes (ISR) so newly published posts appear without
// a full redeploy. Must stay a literal.
export const revalidate = 300;

/** Format an ISO datetime string into a human-friendly label. */
function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default async function BlogPage() {
  const posts = await getPosts();

  // Derive a "featured" post — first one marked featured, or first overall.
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const regular = posts.filter((p) => p.id !== featured?.id);

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

      {/* Content */}
      {posts.length > 0 ? (
        <>
          {/* Featured post */}
          {featured ? (
            <Section className="-mt-8">
              <Card interactive>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-volt-500/20 px-3 py-1 text-xs font-bold text-brand-900">
                    Featured
                  </span>
                  <span className="text-sm text-brand-500 capitalize">
                    {featured.category}
                  </span>
                  <span className="text-sm text-brand-500">
                    {formatDate(featured.published_at)}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold text-brand-950 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 max-w-2xl text-brand-700 leading-relaxed">
                  {featured.excerpt}
                </p>
              </Card>
            </Section>
          ) : null}

          {/* Post grid */}
          <Section>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regular.map((post) => (
                <Card key={post.id} interactive>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-600 capitalize">
                      {post.category}
                    </span>
                    <span className="text-xs text-brand-500">
                      {formatDate(post.published_at)}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-brand-950">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                </Card>
              ))}
            </div>
          </Section>
        </>
      ) : (
        <Section>
          <EmptyState
            title="Blog posts will appear here"
            description="Once the Supabase dataset is connected and posts are added, they'll show up on this page automatically."
          />
        </Section>
      )}

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
          <div className="mx-auto mt-8 max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </Section>
    </>
  );
}
