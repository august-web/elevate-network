"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { getDonateUrl, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Sticky header with desktop links, mobile menu and a Donate CTA. */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the mobile menu when the route changes (adjust state during render
  // rather than in an effect, per React's recommended pattern).
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-cream/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg"
          aria-label="Elevate Network — home"
        >
          <span
            aria-hidden
            className="grid size-9 place-items-center rounded-xl bg-brand-900 font-display text-lg font-bold text-volt-500"
          >
            E
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-brand-950">
            Elevate<span className="text-flame-500">.</span>Network
          </span>
          <span className="ml-1 hidden rounded-full bg-volt-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-volt-600 sm:inline-block">
            Accra
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-100 hover:text-brand-900",
                  pathname === link.href
                    ? "bg-brand-100 text-brand-900"
                    : "text-brand-700",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            href={getDonateUrl()}
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Donate
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-xl border border-brand-200 bg-white text-brand-900 md:hidden"
          >
            {open ? (
              <svg
                aria-hidden
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                aria-hidden
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-brand-100 bg-cream px-4 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-4 py-3 font-display font-semibold transition-colors hover:bg-brand-100",
                    pathname === link.href
                      ? "bg-brand-100 text-brand-900"
                      : "text-brand-800",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <Button
                href={getDonateUrl()}
                variant="primary"
                className="w-full"
              >
                Donate
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}