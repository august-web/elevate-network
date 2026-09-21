import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getDonateUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description: `Support ${site.name} — every cedi goes directly to young people in Ghana. No black boxes. Full transparency.`,
  alternates: { canonical: "/donate" },
};

const IMPACT_TIERS = [
  {
    amount: "GH₵ 50",
    impact: "Supplies for one STEM workshop participant",
    example: "Covers notebooks, pens, and a snack for a student attending a full-day coding workshop.",
  },
  {
    amount: "GH₵ 200",
    impact: "One school visit, fully funded",
    example: "Pays for transport, materials, and facilitator time for a 2-hour workshop at a senior high school.",
  },
  {
    amount: "GH₵ 500",
    impact: "One young person's full program experience",
    example: "Covers registration, meals, materials, and mentorship sessions for one participant across multiple events.",
  },
  {
    amount: "GH₵ 2,000",
    impact: "Sponsor an entire school workshop",
    example: "Covers everything needed to run a full-day STEM workshop for 60 students at a school in Accra.",
  },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <Section className="hero-dark text-white">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sunbeam">
            Donate
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Fund the next generation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream">
            Every cedi you give goes directly to young people in Ghana. No
            overhead myths. No administrative black boxes. We publish exactly
            where every donation goes.
          </p>
          <div className="mt-8">
            <Button href={getDonateUrl()} variant="primary" size="lg">
              Donate now →
            </Button>
          </div>
        </div>
      </Section>

      {/* Impact tiers */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Where your money goes
          </h2>
          <p className="mt-4 text-ink-soft">
            No vague &ldquo;support our mission&rdquo; language. Here&apos;s
            exactly what your donation does.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {IMPACT_TIERS.map((tier) => (
            <Card key={tier.amount}>
              <p className="font-display text-2xl font-bold text-ink">
                {tier.amount}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold text-ink">
                {tier.impact}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {tier.example}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Transparency section */}
      <Section className="bg-paper">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Radical transparency
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We publish a quarterly report showing exactly how every donation
              was spent. No vague categories. No &ldquo;administrative
              costs&rdquo; hiding real numbers.
            </p>
            <ul className="mt-6 space-y-3 text-ink-soft">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-marigold">✓</span>
                <span>100% of donations go to programs and participants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-marigold">✓</span>
                <span>Quarterly financial reports published on our blog</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-marigold">✓</span>
                <span>Team members are volunteers — no salaries from donations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-marigold">✓</span>
                <span>Event budgets published before each event</span>
              </li>
            </ul>
          </div>
          <Card tone="dark">
            <h3 className="font-display text-xl font-bold text-white">
              Our numbers (2024)
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-display text-2xl font-bold text-sunbeam">
                  GH₵ 12,400
                </p>
                <p className="text-sm text-ink-soft">
                  Total raised and deployed
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-sunbeam">
                  100%
                </p>
                <p className="text-sm text-ink-soft">
                  Went to programs (not admin)
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-sunbeam">
                  4
                </p>
                <p className="text-sm text-ink-soft">
                  Events fully funded by donations
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="hero-dark text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to invest in Ghana&apos;s future?
          </h2>
          <p className="mt-4 text-lg text-cream">
            Every donation is a bet on young people. We intend to prove you
            right.
          </p>
          <div className="mt-8">
            <Button href={getDonateUrl()} variant="primary" size="lg">
              Donate via Paystack →
            </Button>
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            Secure payment via Paystack. You&apos;ll receive a receipt
            instantly.
          </p>
        </div>
      </Section>
    </>
  );
}
