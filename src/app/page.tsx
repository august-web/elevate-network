import type { Metadata } from "next";
import { FollowSection } from "@/components/sections/FollowSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description: site.tagline,
  alternates: { canonical: "/" },
};

/** Homepage — the hero, the commitments ticker and the Instagram feed. */
export default function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.jpg"
          alt="Young people mid-motion during a Power of You Festival group session at a stone monument site"
        />
        <div className="wrap hero-inner">
          <p className="tag">Elevate Network Foundation · Ghana</p>
          <h1>
            Engage.
            <br />
            Empower.
            <br />
            Enact.
          </h1>
          <p className="hero-sub">
            Since 2017, we&apos;ve grown from a laptop and a bold idea into a
            movement spanning three continents — 11,000+ young people reached,
            1,800 of them through the Power of You Festival alone, and counting.
          </p>
          <div className="hero-actions">
            <a className="pill pill-light" href="/signup">
              Sign up
            </a>
            <a
              className="pill pill-outline"
              href="/programmes"
              style={{ color: "var(--white)" }}
            >
              See the programmes
            </a>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Engage <i>✳</i> Empower <i>✳</i> Enact <i>✳</i> Include <i>✳</i>{" "}
            Sustain <i>✳</i>
          </span>
          <span>
            Engage <i>✳</i> Empower <i>✳</i> Enact <i>✳</i> Include <i>✳</i>{" "}
            Sustain <i>✳</i>
          </span>
        </div>
      </div>

      <FollowSection />
    </>
  );
}
