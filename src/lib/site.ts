/**
 * Central place for Elevate Network's identity, links and env-driven URLs.
 * Contact details come from the original elevate-network.com site.
 */
export const site = {
  name: "Elevate Network",
  /** One-line description used in metadata. */
  tagline:
    "Elevate Network Foundation — engaging, empowering and enacting change with young Ghanaians.",
  /** Longer mission copy used in heroes. */
  mission:
    "We're a Ghanaian youth-development nonprofit built on a simple bet: young people don't need another one-off seminar, they need a network that keeps showing up.",
  email: "info@elevate-network.com",
  phone: "+233 53 078 8527",
  phoneHref: "tel:+233530788527",
  website: "https://www.elevate-network.com",
  address: "Dzorshie Street, Adenta Municipality",
  addressDetail: "Opposite Hometown Pharmacy · MRR7+CX7",
  addressLocality: "Adenta, Accra, Ghana",
  founded: 2016,
  socials: {
    instagram: "https://www.instagram.com/elevatenetworkhq/?hl=en",
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
