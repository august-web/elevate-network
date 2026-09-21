import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Adds a subtle lift on hover — for clickable cards. */
  interactive?: boolean;
  /** Color scheme. `dark` renders the ink brand surface. */
  tone?: "light" | "dark";
};

const TONES = {
  light: "border-cream bg-white shadow-sm",
  dark: "border-white/10 bg-ink text-white shadow-sm",
} as const;

export function Card({
  className,
  interactive = false,
  tone = "light",
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6",
        TONES[tone],
        interactive &&
          "transition-all duration-300 hover:-translate-y-1.5 hover:border-sunbeam hover:shadow-[0_20px_50px_-14px_rgba(255,197,61,0.5)]",
        className,
      )}
      {...rest}
    />
  );
}