/**
 * Central place for Elevate Network's identity, links and env-driven URLs.
 * Values flagged `TODO:content` are placeholders the team should confirm.
 */
export const site = {
  name: "Elevate Network",
  /** One-line description used in metadata. */
  tagline:
    "Youth-led nonprofit building the future of Ghana — one bold event, one classroom, one idea at a time.",
  /** Longer mission copy used in heroes. */
  mission:
    "We're young Ghanaians who got tired of waiting for someone else to fix things. So we started building — mentorship programs, STEM workshops, festivals that actually matter. No imported blueprints. Just the work.",
  /** TODO:content — confirm the official contact email before launch. */
  email: "hello@elevatenetworkhq.com",
  address: "Adenta, Accra, Ghana",
  socials: {
    instagram: "https://instagram.com/elevatenetworkhq",
    facebook: "https://facebook.com/elevatenetworkhq",
    linkedin: "https://linkedin.com/company/elevatenetworkhq",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  donateUrl: process.env.NEXT_PUBLIC_PAYSTACK_DONATE_URL ?? null,
  tallyUrl: process.env.NEXT_PUBLIC_TALLY_EVENT_FORM_URL ?? null,
  newsletterUrl: process.env.NEXT_PUBLIC_NEWSLETTER_URL ?? null,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

/** Paystack payment page, falling back to the /donate page while it is unconfigured. */
export function getDonateUrl(): string {
  return site.donateUrl ?? "/donate";
}

/** Tally registration form, falling back to the events page while it is unconfigured. */
export function getTallyUrl(): string {
  return site.tallyUrl ?? "/events";
}