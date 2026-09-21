"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/layout/BrandMark";
import { cn } from "@/lib/utils";

/** One route per reference-site section. */
const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Programmes", href: "/programmes" },
  { label: "Impact", href: "/impact" },
  { label: "Sign Up", href: "/signup" },
  { label: "Contact", href: "/contact" },
];

/**
 * Fixed nav overlaid on the hero, exactly like the reference site: transparent
 * until you scroll, then it gains the solid paper background (`.scrolled`).
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Only the homepage opens with a full-bleed hero the nav can sit on top of;
  // every other route starts solid.
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav className={cn("site-nav", (!isHome || scrolled || open) && "scrolled")}>
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Elevate Network — home">
          <BrandMark />
        </Link>

        <ul className={cn("nav-links", open && "open")} id="navLinks">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>
    </nav>
  );
}
