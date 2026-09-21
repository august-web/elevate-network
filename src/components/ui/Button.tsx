import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-sunbeam text-ink shadow-[0_8px_30px_-8px_rgba(255,197,61,0.55)] hover:bg-sunbeam hover:shadow-[0_10px_36px_-6px_rgba(255,197,61,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:bg-sunbeam-600",
  secondary:
    "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white hover:-translate-y-0.5 active:translate-y-0",
  /** Outlined button for dark (navy) sections — glassy on hover. */
  outline:
    "border border-white/30 bg-white/5 text-white backdrop-blur-md hover:border-white/60 hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-sunbeam",
  dark: "bg-white text-ink shadow-[0_8px_30px_-10px_rgba(0,0,0,0.4)] hover:bg-paper hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-sunbeam",
  ghost:
    "bg-transparent text-ink underline decoration-sunbeam decoration-2 underline-offset-4 hover:text-ink-soft",
} as const;

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm sm:text-base",
  lg: "h-14 px-8 text-base sm:text-lg",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Renders a `<Link>` when `href` is provided, otherwise a `<button>`.
 * Server-component safe — pass an `onClick` only from client components.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300",
    variants[variant],
    sizes[size],
    className,
  );

  if (typeof rest.href === "string") {
    const { href, ...anchorProps } = rest;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={rest.type ?? "button"} className={classes} {...rest}>
      {children}
    </button>
  );
}