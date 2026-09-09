import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  /** Renders children without the page-width container (for full-bleed layouts). */
  full?: boolean;
  containerClassName?: string;
};

/** Page section with consistent vertical rhythm and a centered container. */
export function Section({
  id,
  className,
  containerClassName,
  full = false,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", className)}
      {...rest}
    >
      {full ? (
        children
      ) : (
        <div
          className={cn(
            "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
            containerClassName,
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}