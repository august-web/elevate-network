"use client";

import { useEffect } from "react";

/**
 * Adds `.revealed` to each `.masonry figure` as it scrolls into view — the
 * gallery's entrance animation, matching the reference site's behaviour.
 */
export function RevealObserver() {
  useEffect(() => {
    const figures = Array.from(
      document.querySelectorAll<HTMLElement>(".masonry figure"),
    );
    if (figures.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      figures.forEach((figure) => figure.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    figures.forEach((figure) => observer.observe(figure));
    return () => observer.disconnect();
  }, []);

  return null;
}
