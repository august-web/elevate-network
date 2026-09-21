"use client";

import { useRef } from "react";

type Programme = {
  photo: string;
  alt: string;
  category: string;
  name: string;
  description: string;
};

/** Dark, slide-driven programmes carousel — arrows scroll one card at a time. */
export function ProgramaCarousel({ programmes }: { programmes: Programme[] }) {
  const track = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: direction * 380, behavior: "smooth" });
  };

  return (
    <section className="block-carousel" id="programmes">
      <div className="carousel-marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Our Programmes <i>✳</i> Our Programmes <i>✳</i> Our Programmes{" "}
            <i>✳</i>
          </span>
          <span>
            Our Programmes <i>✳</i> Our Programmes <i>✳</i> Our Programmes{" "}
            <i>✳</i>
          </span>
        </div>
      </div>

      <div className="wrap">
        <div className="carousel-head">
          <div className="block-intro" style={{ marginBottom: 0 }}>
            <p className="tag" style={{ color: "var(--sunbeam)" }}>
              Five doors in
            </p>
            <h2 style={{ color: "var(--paper)" }}>
              One network on the other side.
            </h2>
            <p>
              Each programme is a different entry point — a festival, a
              classroom, an incubator — but they all feed the same network of
              mentors, alumni and partners.
            </p>
          </div>
          <div className="carousel-nav">
            <button
              className="car-btn"
              type="button"
              aria-label="Previous programme"
              onClick={() => scrollByCard(-1)}
            >
              ←
            </button>
            <button
              className="car-btn"
              type="button"
              aria-label="Next programme"
              onClick={() => scrollByCard(1)}
            >
              →
            </button>
          </div>
        </div>

        <div className="carousel-track" ref={track}>
          {programmes.map((programme) => (
            <article className="car-card" key={programme.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={programme.photo} alt={programme.alt} />
              <div className="car-card-body">
                <span className="car-cat">{programme.category}</span>
                <h3 className="car-name">{programme.name}</h3>
                <p className="car-desc">{programme.description}</p>
                <a
                  className="pill pill-outline car-pill"
                  href="mailto:info@elevate-network.com"
                  target="_blank"
                  rel="noopener"
                >
                  Learn more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
