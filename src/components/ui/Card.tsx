import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Adds a subtle lift on hover — for clickable cards. */
  interactive?: boolean;
};

export function Card({
  className,
  interactive = false,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-brand-100 bg-white p-6 shadow-sm",
        interactive &&
          "transition-transform duration-200 hover:-translate-y-1 hover:shadow-md",
        className,
      )}
      {...rest}
    />
  );
}