import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-volt-500 text-brand-950 hover:bg-volt-400 active:bg-volt-600",
  secondary:
    "border-2 border-brand-900 bg-transparent text-brand-900 hover:bg-brand-900 hover:text-white",
  /** Outlined button for dark (navy) sections. */
  outline:
    "border-2 border-white/90 bg-transparent text-white hover:bg-white hover:text-brand-950 focus-visible:outline-volt-500",
  dark: "bg-white text-brand-950 hover:bg-brand-100 focus-visible:outline-volt-500",
  ghost:
    "bg-transparent text-brand-900 underline decoration-volt-500 decoration-2 underline-offset-4 hover:text-brand-700",
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
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-colors",
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