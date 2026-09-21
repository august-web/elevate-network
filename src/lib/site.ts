/**
 * Central place for Elevate Network's identity, links and env-driven URLs.
 * Values flagged `TODO:content` are placeholders the team should confirm.
 */
export const site = {
  name: "Elevate Network",
  /** One-line description used in metadata — aligned with the LinkedIn About. */
  tagline:
    "Youth development and business builder helping students and entrepreneurs start and grow.",
  /** Longer mission copy used in heroes — aligned with the LinkedIn About. */
  mission:
    "We're committed to helping students and entrepreneurs build their dreams at any stage of their journey — and to changing the culture from the inside out, by investing in young people.",
  /** TODO:content — confirm the official contact email before launch. */
  email: "hello@elevatenetworkhq.com",
  address:
    "Adenta SDA, Donkor Tawiah Street, Adenta, Accra 233, Ghana",
  founded: 2016,
  socials: {
    instagram: "https://instagram.com/elevatenetworkhq",
    facebook: "https://facebook.com/elevatenetworkhq",
    linkedin: "https://www.linkedin.com/company/elevatenetwork/",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  donateUrl: process.env.NEXT_PUBLIC_PAYSTACK_DONATE_URL ?? null,
  tallyUrl: process.env.NEXT_PUBLIC_TALLY_EVENT_FORM_URL ?? null,
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