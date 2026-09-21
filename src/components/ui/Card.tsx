import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Adds a subtle lift on hover — for clickable cards. */
  interactive?: boolean;
  /** Color scheme. `dark` renders the navy brand surface, `glass` a frosted panel for dark sections. */
  tone?: "light" | "dark" | "glass";
};

const TONES = {
  light: "border-brand-100 bg-white shadow-sm",
  dark: "border-white/10 bg-brand-950 text-white shadow-sm",
  glass: "glass text-white shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)]",
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
          "transition-all duration-300 hover:-translate-y-1.5 hover:border-volt-500 hover:shadow-[0_20px_50px_-14px_rgba(255,214,10,0.5)]",
        className,
      )}
      {...rest}
    />
  );
}