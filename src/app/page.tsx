import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Section } from "@/components/ui/Section";
import { PROGRAM_QUERY, sanityFetch, type Program } from "@/lib/sanity";
import { getDonateUrl, getTallyUrl, site } from "@/lib/site";

const IMPACT_STATS = [
  { value: "2,400+", label: "Young people reached" },
  { value: "18", label: "Communities served" },
  { value: "94%", label: "Would recommend to a friend" },
];

// TODO:content — Phase 0 placeholder. The full marketing home page ships in
// Phase 1 (impact stats, Sanity-driven upcoming-event banner, programs grid).
export default async function HomePage() {
  const programs = await sanityFetch<Program>(PROGRAM_QUERY);

  return (
    <>
      {/* Hero — asymmetric, energetic, not a cookie-cutter centered block */}
      <Section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="inline-block rounded-full border border-volt-500/30 bg-volt-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-volt-400">
              Youth-led · Adenta, Accra
            </p>
            <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              We don&apos;t wait for permission.
              <br />
              <span className="text-volt-500">We build the thing</span> we wish
              existed.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-200">
              {site.mission}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={getTallyUrl()} variant="primary" size="lg">
                Join our next event →
              </Button>
              <Button href="/programs" variant="outline" size="lg">
                See our programs
              </Button>
            </div>
          </div>
          {/* Decorative stats sidebar — gives the hero weight and proof */}
          <div className="hidden shrink-0 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:block">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-volt-500">
              Our impact so far
            </p>
            <dl className="mt-4 space-y-5">
              {IMPACT_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-bold text-white">
                    {stat.value}
                  </dd>
                  <dd className="mt-0.5 text-sm text-brand-300">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Programs — grounded, real, not a glossy grid */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            What we actually do
          </h2>
          <p className="mt-4 text-brand-700">
            Real programs. Real people. No buzzwords — just the work.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.length > 0 ? (
            programs.map((program) => (
              <Card key={program._id}>
                <h3 className="font-display text-xl font-bold text-brand-950">
                  {program.title}
                </h3>
                {program.tagline ? (
                  <p className="mt-2 text-sm text-brand-700">
                    {program.tagline}
                  </p>
                ) : null}
              </Card>
            ))
          ) : (
            <EmptyState
              title="Programs will appear here"
              description="Once the Sanity dataset is connected, programs are edited in the CMS and appear here automatically."
              className="sm:col-span-2 lg:col-span-3"
            />
          )}
        </div>
      </Section>

      {/* CTA strip — urgent, direct, human */}
      <Section className="bg-brand-950 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            This only works if you show up.
          </h2>
          <p className="mt-4 text-lg text-brand-200">
            Whether you&apos;re a young person looking for community, a mentor with
            skills to share, or someone who believes in what we&apos;re building —
            there&apos;s a seat here for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={getTallyUrl()} variant="primary" size="lg">
              Register for an event
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get involved
            </Button>
            <Button href={getDonateUrl()} variant="dark" size="lg">
              Fund the next one
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}