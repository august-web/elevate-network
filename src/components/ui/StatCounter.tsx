"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type StatCounterProps = {
  /** Final number to count up to. */
  end: number;
  /** Static prefix/suffix, e.g. "+" or "%". */
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

/** Formats 2400 → "2,400" using the visitor's locale. */
function format(n: number): string {
  return n.toLocaleString("en-US");
}

/**
 * Counts from 0 to `end` with an ease-out curve the first time it scrolls
 * into view. Jumps straight to the final value under reduced motion.
 */
export function StatCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 1600,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setValue(end));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(eased * end));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {format(value)}
      {suffix}
    </span>
  );
}
