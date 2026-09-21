import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { StatCounter } from "@/components/ui/StatCounter";
import { getPrograms } from "@/lib/supabase";
import { getDonateUrl, getTallyUrl, site } from "@/lib/site";

const IMPACT_STATS = [
  { end: 2400, suffix: "+", label: "Young people reached" },
  { end: 18, suffix: "", label: "Communities served" },
  { end: 9, suffix: "+", label: "Years building, since 2016" },
];

const MARQUEE_ITEMS = [
  "Mentorship",
  "STEM School Tours",
  "Power of You Festival",
  "Campus Edition",
  "Elevate Camp",
  "Built in Adenta, Accra",
];

// Revalidate every 5 minutes so newly added Supabase programs appear on
// the static homepage without a full redeploy (ISR). Must stay a literal.
export const revalidate = 300;

export default async function HomePage() {
  const programs = await getPrograms();

  return (
    <>
      {/* Hero — Nike-scale type, volt glow, film grain, glass badge */}
      <Section className="hero-dark pt-24 pb-20 text-white md:pt-32 md:pb-28">
        <div
          aria-hidden="true"
          className="glow-blob left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-volt-500/20"
        />
        {/* Oversized watermark — pure CSS, no imagery needed */}
        <p
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 right-0 select-none font-display text-[22vw] font-bold leading-none tracking-tighter text-transparent opacity-60 sm:text-[16vw] lg:text-[13rem] [-webkit-text-stroke:1.5px_rgba(255,255,255,0.14)]"
        >
          ELEVATE
        </p>
        <div className="max-w-4xl">
          <p className="glass inline-block rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-volt-400 sm:text-xs sm:tracking-[0.14em]">
            Youth-led · Adenta, Accra · Est. 2016
          </p>
          <h1 className="mt-8 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block">We don&apos;t wait for permission.</span>
            <span className="mt-1 block text-volt-500 sm:mt-2">
              We build the thing we wish existed.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-brand-200 sm:text-lg">
            {site.mission}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={getTallyUrl()}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Join our next event →
            </Button>
            <Button
              href="/programs"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              See our programs
            </Button>
          </div>
        </div>
      </Section>

      {/* Volt ticker tape — angled strip crossing the hero's baseline */}
      <div className="overflow-hidden bg-brand-950 pb-16 md:pb-20">
        <div className="-ml-[5%] w-[110%] -rotate-1 bg-volt-500 py-3 shadow-[0_10px_40px_-10px_rgba(255,214,10,0.4)]">
          <Marquee items={MARQUEE_ITEMS} className="text-brand-950" />
        </div>
      </div>

      {/* Impact stats — divided band, oversized counters */}
      <Section>
        <dl className="grid divide-y divide-brand-100 border-y border-brand-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {IMPACT_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <div className="px-2 py-10 text-center sm:px-6 sm:py-14">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-6xl font-bold tracking-tight text-brand-950 lg:text-7xl">
                  <StatCounter end={stat.end} suffix={stat.suffix} />
                </dd>
                <dd className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand-700">
                  {stat.label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* Manifesto — huge type, one thought, nothing competing with it */}
      <Section className="hero-dark text-white">
        <div
          aria-hidden="true"
          className="glow-blob left-0 top-1/2 h-96 w-96 -translate-y-1/2 bg-brand-500/25"
        />
        <Reveal>
          <p className="mx-auto max-w-5xl text-center font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Ghana doesn&apos;t lack talent.{" "}
            <span className="text-volt-500">It lacks open doors.</span>
            <span className="mx-auto mt-6 block max-w-2xl font-sans text-base font-normal leading-relaxed tracking-normal text-brand-200 sm:text-lg">
              We&apos;ve been opening them since 2016 — in Adenta classrooms,
              on university campuses, and in rooms where young founders meet
              their first mentor.
            </span>
          </p>
        </Reveal>
      </Section>

      {/* Two tracks — students and entrepreneurs, per our LinkedIn positioning */}
      <Section>
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-flame-500">
              Who we build for
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
              Two kinds of people walk through our doors
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card interactive className="flex h-full flex-col">
              <span className="inline-flex w-fit rounded-full bg-volt-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-900">
                Students
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-brand-950">
                Still in school? Good.
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-brand-700">
                We bring coding, robotics, and AI workshops to senior high
                schools across Accra — free for students. You also get mentors
                you can ask the questions a syllabus won&apos;t answer.
              </p>
              <Button href="/programs" variant="ghost" className="mt-6 w-fit px-0">
                See the school programs →
              </Button>
            </Card>
          </Reveal>
          <Reveal delay={120}>
            <Card interactive className="flex h-full flex-col">
              <span className="inline-flex w-fit rounded-full bg-flame-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-flame-600">
                Entrepreneurs
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-brand-950">
                Building something? Better.
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-brand-700">
                Idea stage, side hustle, or registered business — our Business
                Builder track pairs you with mentors and a network that picks
                up the phone.
              </p>
              <Button href="/contact" variant="ghost" className="mt-6 w-fit px-0">
                Tell us what you&apos;re building →
              </Button>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Programs — grounded, real, not a glossy grid */}
      <Section className="pt-0">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-flame-500">
              The work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
              What we do
            </h2>
            <p className="mt-4 text-brand-700">
              Programs we run in schools, on campuses, and in communities
              across Ghana.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.length > 0 ? (
            programs.map((program, i) => (
              <Reveal key={program.id} delay={(i % 3) * 100}>
                <Card interactive className="group flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold tracking-widest text-flame-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {program.status ? (
                      <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                        {program.status}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-950">
                    {program.title}
                  </h3>
                  {program.tagline ? (
                    <p className="mt-2 text-sm font-medium text-flame-600">
                      {program.tagline}
                    </p>
                  ) : null}
                  {program.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-brand-700">
                      {program.description}
                    </p>
                  ) : null}
                  <span
                    aria-hidden="true"
                    className="mt-4 inline-block font-display text-lg text-flame-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    →
                  </span>
                </Card>
              </Reveal>
            ))
          ) : (
            <EmptyState
              title="New programs are on the way"
              description="We're lining up the next season. Follow us on Instagram to hear about it first."
              className="sm:col-span-2 lg:col-span-3"
            />
          )}
        </div>
      </Section>

      {/* CTA strip — urgent, direct, human */}
      <Section className="hero-dark text-white">
        <div
          aria-hidden="true"
          className="glow-blob right-0 bottom-0 h-80 w-80 bg-flame-500/20"
        />
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              This only works if <span className="text-gradient-volt">you show up</span>.
            </h2>
            <p className="mt-4 text-lg text-brand-200">
              Come to one event. Student, founder, mentor, or funder — an
              hour in the room will tell you more than this website can.
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
        </Reveal>
      </Section>
    </>
  );
}
