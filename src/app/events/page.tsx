import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getTallyUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: `Upcoming events and past recaps from ${site.name} — workshops, festivals, and the things that don't fit in a PDF.`,
};

const UPCOMING_EVENTS = [
  {
    title: "Power of You Festival 2026",
    date: "March 2026",
    location: "Accra, Ghana",
    description:
      "Our flagship annual event. Workshops, panels, live demos, and the kind of energy you can't manufacture. Registration opens February.",
    status: "Registration opening soon",
  },
  {
    title: "STEM Workshop — Accra Academy",
    date: "January 2026",
    location: "Accra Academy SHS",
    description:
      "Hands-on coding and robotics workshop for SHS students. Limited to 60 participants.",
    status: "Full — waitlist open",
  },
];

const PAST_EVENTS = [
  {
    title: "Power of You Festival 2024",
    date: "November 2024",
    location: "Adenta, Accra",
    description:
      "Our first major event. 600+ attendees, 12 speakers, 8 workshops. The one that proved this wasn't just an idea.",
    attendees: "600+",
  },
  {
    title: "STEM Tour — Presbyterian Boys' SHS",
    date: "September 2024",
    location: "Presec Legon",
    description:
      "Two-day workshop covering web development basics and career paths in tech. Students built their first websites.",
    attendees: "85",
  },
  {
    title: "Elevate Meetup #3",
    date: "August 2024",
    location: "Adenta Community Center",
    description:
      "Casual networking event for young entrepreneurs. Pitch practice, mentorship speed rounds, and good jollof.",
    attendees: "45",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-brand-950 text-white">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-volt-500">
            Events
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Where the work actually happens.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
            Not conferences with bad coffee. Real gatherings where young people
            build skills, make connections, and leave with something tangible.
          </p>
        </div>
      </Section>

      {/* Upcoming events */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Coming up
          </h2>
          <p className="mt-4 text-brand-700">
            Mark your calendar. Registration links go live before each event.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {UPCOMING_EVENTS.map((event) => (
            <Card key={event.title} interactive>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-volt-500/20 px-3 py-1 text-xs font-bold text-brand-900">
                  Upcoming
                </span>
                <span className="text-sm text-brand-500">{event.date}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-brand-950">
                {event.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-flame-500">
                {event.location}
              </p>
              <p className="mt-3 text-sm text-brand-700 leading-relaxed">
                {event.description}
              </p>
              <p className="mt-4 text-xs font-semibold text-brand-500">
                {event.status}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button href={getTallyUrl()} variant="primary" size="md">
            Get notified when registration opens →
          </Button>
        </div>
      </Section>

      {/* Past events */}
      <Section className="bg-brand-50">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            What we&apos;ve done
          </h2>
          <p className="mt-4 text-brand-700">
            Every event happens. Every workshop runs. Here&apos;s the receipts.
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {PAST_EVENTS.map((event) => (
            <Card key={event.title}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-600">
                  Past event
                </span>
                <span className="text-sm text-brand-500">{event.date}</span>
                <span className="text-sm text-brand-500">
                  {event.location}
                </span>
                {event.attendees ? (
                  <span className="text-sm font-semibold text-brand-700">
                    {event.attendees} attendees
                  </span>
                ) : null}
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-brand-950">
                {event.title}
              </h3>
              <p className="mt-2 text-sm text-brand-700 leading-relaxed">
                {event.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
