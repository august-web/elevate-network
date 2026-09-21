import type { Metadata } from "next";
import { RevealObserver } from "@/components/RevealObserver";
import { GALLERY } from "@/lib/content";

/** Gallery section — the masonry with CSS crossfade pairs. */
export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at recent programme days — the Power of You Festival, Prodigy Club sessions and school STEM workshops.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <RevealObserver />
      <section className="gallery page-top" id="gallery">
        <div className="wrap">
          <div className="gallery-head">
            <p className="tag">In the field</p>
            <h2>What we&apos;ve been building.</h2>
            <p>
              A look at recent programme days — for the partners and donors who
              want to see where the reports and the numbers actually come from.
            </p>
          </div>
          <div className="masonry">
            {GALLERY.map((figure, index) =>
              figure.kind === "crossfade" ? (
                <figure
                  className="crossfade"
                  data-ratio={figure.ratio}
                  key={`crossfade-${index}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="frame-a" src={figure.a} alt={figure.aAlt} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="frame-b" src={figure.b} alt={figure.bAlt} />
                </figure>
              ) : (
                <figure className="single" key={figure.photo}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={figure.photo} alt={figure.alt} />
                </figure>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
