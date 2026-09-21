import { cn } from "@/lib/utils";

type MarqueeProps = {
  /** Phrases that repeat end-to-end across the strip. */
  items: string[];
  className?: string;
  /** Separator between phrases. */
  separator?: string;
};

/**
 * Infinite horizontal ticker (Nike/Spotify-style). The track renders the
  items twice; CSS `marquee` slides it -50% for a seamless loop.
 * Pauses on hover; disabled under `prefers-reduced-motion`.
 */
export function Marquee({
  items,
  className,
  separator = "✦",
}: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className={cn("overflow-hidden", className)}
    >
      <div className="marquee-track marquee-paused">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center font-display text-sm font-bold uppercase tracking-[0.18em]"
          >
            <span className="px-6">{item}</span>
            <span className="opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
