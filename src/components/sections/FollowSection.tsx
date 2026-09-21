import { FOLLOW_TILES } from "@/lib/content";
import { site } from "@/lib/site";

/** Instagram tile grid for the "feed behind the photos" section. */
export function FollowSection() {
  return (
    <section className="block block-cream follow" id="follow">
      <div className="wrap follow-wrap">
        <div className="follow-intro block-intro">
          <p className="tag" style={{ color: "var(--marigold-700)" }}>
            On Instagram
          </p>
          <h2>The feed behind the photos.</h2>
          <p>
            Festival replays, mentor call-outs, and the moment a cohort&apos;s
            idea finally clicks — posted as it happens, not just at the end of
            the year.
          </p>
          <a
            className="pill pill-dark"
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @elevatenetworkhq
          </a>
        </div>
        <div className="follow-grid">
          {FOLLOW_TILES.map((tile) => (
            <a
              className="follow-tile"
              key={tile.photo}
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View this post on Instagram"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tile.photo} alt={tile.alt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
