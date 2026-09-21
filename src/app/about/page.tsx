import type { Metadata } from "next";
import { COMMITMENTS } from "@/lib/content";

/** About section — the marigold block with the five-commitment accordion. */
export const metadata: Metadata = {
  title: "About",
  description:
    "Five commitments, one network — how Elevate Network engages, empowers, enacts, includes and sustains.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="block block-marigold page-top" id="about">
        <div className="corner-accent" aria-hidden="true">
          <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.4">
            <circle cx="60" cy="60" r="2" />
            <circle cx="60" cy="60" r="18" />
            <circle cx="60" cy="60" r="34" />
            <circle cx="60" cy="60" r="50" />
            <path d="M60 4 V26 M60 94 V116 M4 60 H26 M94 60 H116 M20 20 L35 35 M85 85 L100 100 M100 20 L85 35 M35 85 L20 100" />
          </svg>
        </div>
        <div className="wrap">
          <div className="block-intro">
            <p className="tag">About Elevate Network</p>
            <h2>Five commitments, one network.</h2>
            <p>
              We&apos;re a Ghanaian youth-development nonprofit built on a
              simple bet: young people don&apos;t need another one-off seminar,
              they need a network that keeps showing up. Here&apos;s what that
              means in practice.
            </p>
          </div>
          <ul className="accordion">
            {COMMITMENTS.map((commitment) => (
              <li className="acc-item" key={commitment.name}>
                <details>
                  <summary className="acc-row">
                    <span className="acc-name">{commitment.name}</span>
                    <span className="chev" />
                  </summary>
                  <div className="acc-body">
                    <p>{commitment.body}</p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="interlude">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/ref/p01.jpg"
          alt="Young women dancing confidently together on an outdoor terracotta-tiled terrace"
        />
        <div className="wrap interlude-inner">
          <p className="interlude-cap">
            &ldquo;We don&apos;t believe young people need saving. They need a
            platform — real skills, real mentors, and a real shot at building
            something that lasts.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
