import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getTallyUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description: `What ${site.name} actually does — STEM tours, festivals, camps, and mentorship that changes how young people see themselves.`,
};

const PROGRAMS = [
  {
    name: "STEM School Tours",
    tagline: "Bringing the future into the classroom",
    description:
      "We visit senior high schools across Accra with hands-on STEM workshops — coding, robotics, AI basics. Not lectures. Not slides. Real activities that make students think, 'Wait, I can do this?'",
    impact: "800+ students reached across 12 schools",
    status: "Active",
  },
  {
    name: "Power of You Festival",
    tagline: "The event we wished existed when we were younger",
    description:
      "An annual one-day festival bringing together young entrepreneurs, creatives, and tech builders for workshops, panels, and live demos. No corporate sponsors running the show — just young people showing what they've built.",
    impact: "600+ attendees in 2024",
    status: "Annual — next edition Q1 2026",
  },
  {
    name: "Campus Edition",
    tagline: "Taking the movement to universities",
    description:
      "Adapted workshops and networking sessions for university students — bridging the gap between classroom learning and real-world skills. Think startup pitches, portfolio reviews, and mentorship speed rounds.",
    impact: "3 universities, 200+ participants",
    status: "Active",
  },
  {
    name: "Elevate Camp",
    tagline: "Where the real connections happen",
    description:
      "A multi-day residential camp for young leaders — intensive workshops, team challenges, and the kind of late-night conversations that actually change how people think about their future.",
    impact: "Pilot edition planned for 2026",
    status: "Coming soon",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-brand-950 text-white">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-volt-500">
            What we do
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Not just events. Infrastructure.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
            Every program we run is designed to leave young people with
            something tangible — a skill, a connection, a new way of seeing
            what&apos;s possible. Not a certificate. Not a photo op. Actual
            value.
          </p>
        </div>
      </Section>

      {/* Program cards */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {PROGRAMS.map((program) => (
            <Card key={program.name} className="flex flex-col">
              <div className="flex items-center gap-3">
                <h2 className="font-display text-2xl font-bold text-brand-950">
                  {program.name}
                </h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    program.status === "Active"
                      ? "bg-volt-500/20 text-brand-900"
                      : "bg-brand-100 text-brand-700"
                  }`}
                >
                  {program.status}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-flame-500">
                {program.tagline}
              </p>
              <p className="mt-4 flex-1 text-brand-700 leading-relaxed">
                {program.description}
              </p>
              <p className="mt-5 border-t border-brand-100 pt-4 text-sm font-semibold text-brand-950">
                {program.impact}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-950 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Want to join the next one?
          </h2>
          <p className="mt-4 text-lg text-brand-200">
            Registration opens before every event. Drop your details and
            we&apos;ll make sure you&apos;re first to know.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={getTallyUrl()} variant="primary" size="lg">
              Register for an event →
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Ask us anything
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
