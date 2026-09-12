import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Adds a subtle lift on hover — for clickable cards. */
  interactive?: boolean;
  /** Color scheme. `dark` renders the navy brand surface. */
  tone?: "light" | "dark";
};

const TONES = {
  light: "border-brand-100 bg-white",
  dark: "border-white/10 bg-brand-950 text-white",
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
        "rounded-xl border p-6 shadow-sm",
        TONES[tone],
        interactive &&
          "transition-transform duration-200 hover:-translate-y-1 hover:shadow-md",
        className,
      )}
      {...rest}
    />
  );
}