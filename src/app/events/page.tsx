import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Section } from "@/components/ui/Section";
import { getEvents } from "@/lib/supabase";
import { getTallyUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: `Upcoming events and past recaps from ${site.name} — workshops, festivals, and the things that don't fit in a PDF.`,
  alternates: { canonical: "/events" },
};

// Revalidate every 5 minutes (ISR) so newly published events appear without
// a full redeploy. Must stay a literal.
export const revalidate = 300;

/** Format an ISO date string into a human-friendly label. */
function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

/** Human-readable status label for an event. */
function statusLabel(status: string): string {
  const labels: Record<string, string> = {
    upcoming: "Coming soon",
    "registration-open": "Registration open",
    full: "Full — waitlist open",
    past: "Past event",
  };
  return labels[status] ?? status;
}

/** Badge style based on whether the event is upcoming or past. */
function badgeClasses(status: string): string {
  if (status === "past") {
    return "bg-brand-100 text-brand-600";
  }
  return "bg-volt-500/20 text-brand-900";
}

export default async function EventsPage() {
  const events = await getEvents();

  const upcoming = events.filter(
    (e) => e.status !== "past" && new Date(e.date) >= new Date(),
  );
  const past = events.filter(
    (e) => e.status === "past" || new Date(e.date) < new Date(),
  );

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

      {/* Content */}
      {events.length > 0 ? (
        <>
          {/* Upcoming events */}
          {upcoming.length > 0 ? (
            <Section>
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
                  Coming up
                </h2>
                <p className="mt-4 text-brand-700">
                  Mark your calendar. Registration links go live before each
                  event.
                </p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {upcoming.map((event) => (
                  <Card key={event.id} interactive>
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${badgeClasses(event.status)}`}
                      >
                        {statusLabel(event.status)}
                      </span>
                      <span className="text-sm text-brand-500">
                        {formatDate(event.date)}
                      </span>
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
                  </Card>
                ))}
              </div>
              <div className="mt-8">
                <Button href={getTallyUrl()} variant="primary" size="md">
                  Get notified when registration opens →
                </Button>
              </div>
            </Section>
          ) : null}

          {/* Past events */}
          {past.length > 0 ? (
            <Section className="bg-brand-50">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
                  What we&apos;ve done
                </h2>
                <p className="mt-4 text-brand-700">
                  Every event happens. Every workshop runs. Here&apos;s the
                  receipts.
                </p>
              </div>
              <div className="mt-10 space-y-6">
                {past.map((event) => (
                  <Card key={event.id}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-600">
                        Past event
                      </span>
                      <span className="text-sm text-brand-500">
                        {formatDate(event.date)}
                      </span>
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
          ) : null}
        </>
      ) : (
        <Section>
          <EmptyState
            title="Events will appear here"
            description="Once the Supabase dataset is connected and events are added, they'll show up on this page automatically."
          />
        </Section>
      )}
    </>
  );
}
