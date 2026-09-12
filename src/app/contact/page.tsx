import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — we actually read these.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-brand-950 text-white">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-volt-500">
            Get in touch
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            We actually read these.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
            Whether you&apos;re a young person looking for community, a school
            wanting to host a workshop, a potential partner, or just someone
            with a question — reach out. No gatekeepers. No auto-replies.
          </p>
        </div>
      </Section>

      {/* Contact grid */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <div className="flex flex-col">
            <h2 className="font-display text-2xl font-bold tracking-tight text-brand-950">
              Send us a message
            </h2>
            <p className="mt-2 text-brand-600">
              We&apos;ll get back to you within 48 hours. Usually faster.
            </p>
            <div className="mt-6 flex-1">
              <ContactForm />
            </div>
            <p className="mt-4 text-sm text-brand-500">
              Prefer email? Write to us directly at{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-volt-500 underline-offset-4 hover:text-brand-900"
              >
                {site.email}
              </a>{" "}
              — we read everything.
            </p>
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <Card>
              <h3 className="font-display text-lg font-bold text-brand-950">
                Email
              </h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-brand-600 underline decoration-volt-500 underline-offset-4 hover:text-brand-900"
              >
                {site.email}
              </a>
            </Card>

            <Card>
              <h3 className="font-display text-lg font-bold text-brand-950">
                Location
              </h3>
              <p className="mt-2 text-brand-600">{site.address}</p>
              <p className="text-sm text-brand-500">
                We meet in person when we can. Virtual calls work too.
              </p>
            </Card>

            <Card>
              <h3 className="font-display text-lg font-bold text-brand-950">
                Socials
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-100"
                >
                  Instagram
                </a>
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-100"
                >
                  Facebook
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-100"
                >
                  LinkedIn
                </a>
              </div>
            </Card>

            <Card tone="dark">
              <h3 className="font-display text-lg font-bold text-white">
                Want to partner?
              </h3>
              <p className="mt-2 text-brand-200 text-sm leading-relaxed">
                Schools, NGOs, tech companies, government agencies — if
                you&apos;re serious about youth development in Ghana, let&apos;s
                talk. We&apos;re selective about partners but open to anyone
                doing real work.
              </p>
              <a
                href={`mailto:${site.email}?subject=Partnership%20inquiry`}
                className="mt-4 inline-block text-sm font-semibold text-volt-400 underline decoration-volt-500 underline-offset-4 hover:text-volt-300"
              >
                Send a partnership inquiry →
              </a>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
