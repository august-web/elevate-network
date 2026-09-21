import type { Metadata } from "next";

/** Impact section — the two statement blocks. */
export const metadata: Metadata = {
  title: "Impact",
  description:
    "11,000+ young Ghanaians reached since 2017, roughly 70% of them young women — and the design decisions behind those numbers.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <>
      <section className="block block-ink page-top" id="impact">
        <div className="wrap statement">
          <h2>
            Since 2017, more than <em>11,000</em> young Ghanaians have found
            their way into an Elevate Network room — <em>1,800</em> of them
            through the Power of You Festival alone.
          </h2>
          <p>
            Roughly 70% of them are young women. In the 2025–2026 year alone
            that meant 3,000+ young people reached across seven schools and
            seven communities in three regions, twenty startup founders
            incubated, and a three-day festival that drew 1,800 attendees in
            person — all powered by a five-person staff team and fifteen
            volunteers.
          </p>
        </div>
      </section>

      <section className="block block-cream">
        <div className="wrap statement">
          <h2>
            That&apos;s not an <em>accident.</em>
          </h2>
          <p>
            Every programme we run is designed around the young women and men
            who actually show up — from AmplifyHer&apos;s focus on voice and
            negotiation, to Prodigy Clubs running inside partner schools term
            after term. The numbers hold because the design does.
          </p>
          <a className="pill pill-dark" href="/programmes">
            See how the programmes work
          </a>
        </div>
      </section>
    </>
  );
}
