import type { Metadata } from "next";
import { FollowMarquee } from "@/components/sections/FollowMarquee";
import { site } from "@/lib/site";

/** Contact section — the mission band with the contact rows. */
export const metadata: Metadata = {
  title: "Contact",
  description: `Bring a school, a festival slot, or a cheque — reach ${site.name} in Adenta, Accra.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
    <section className="missionband page-top" id="contact">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/photos/ref/p27.jpg"
        alt="A facilitator speaking with a circle of young people seated on terracotta steps"
      />
      <div className="wrap missionband-inner">
        <p className="lead">
          &ldquo;Our goal isn&apos;t to keep young Ghanaians busy for a weekend.
          It&apos;s to build a network they can call on for years afterward —
          for a mentor, a partner, or just someone who believes the next idea is
          worth trying.&rdquo;
        </p>
        <div>
          <h2>Bring a school, a festival slot, or a cheque.</h2>
          <div className="mb-actions">
            <a className="pill pill-light" href={`mailto:${site.email}`}>
              Email us
            </a>
            <a className="pill pill-outline" href={site.phoneHref}>
              Call us
            </a>
          </div>
          <div className="mb-row">
            <span>Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="mb-row">
            <span>Phone</span>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
          <div className="mb-row">
            <span>Website</span>
            <a href={site.website} target="_blank" rel="noopener noreferrer">
              www.elevate-network.com
            </a>
          </div>
          <div className="mb-row">
            <span>Based in</span>
            <div>
              {site.address}
              <br />
              <span className="mb-row-sub">{site.addressDetail}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

      <FollowMarquee />
    </>
  );
}
