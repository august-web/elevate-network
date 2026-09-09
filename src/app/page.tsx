import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Section } from "@/components/ui/Section";
import { PROGRAM_QUERY, sanityFetch, type Program } from "@/lib/sanity";
import { getDonateUrl, getTallyUrl, site } from "@/lib/site";

// TODO:content — Phase 0 placeholder. The full marketing home page ships in
// Phase 1 (impact stats, Sanity-driven upcoming-event banner, programs grid).
export default async function HomePage() {
  const programs = await sanityFetch<Program>(PROGRAM_QUERY);

  return (
    <>
      <Section className="relative overflow-hidden bg-brand-950 text-white">
        <div aria-hidden className="absolute inset-0 bg-african-pattern" />
        <div className="relative">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-volt-500">
            Youth-led · Accra, Ghana
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Big ideas.{" "}
            <span className="text-volt-500">Bold youth.</span> Built for
            Ghana&apos;s next generation.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
            {site.mission}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={getTallyUrl()} variant="primary" size="lg">
              Attend an event
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Volunteer
            </Button>
            <Button href={getDonateUrl()} variant="dark" size="lg">
              Donate
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            What we&apos;re building
          </h2>
          <p className="mt-4 text-brand-700">
            Phase 0 scaffold — programs below stream from the Sanity CMS once
            connected.
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
              description="Once the Sanity dataset is connected (Phase 2), programs are edited in the CMS and appear here automatically."
              className="sm:col-span-2 lg:col-span-3"
            />
          )}
        </div>
      </Section>
    </>
  );
}