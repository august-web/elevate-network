import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PagePlaceholder
      title="Contact — coming in Phase 1"
      description="Tally form, email, socials and our Adenta, Accra address will live here."
    />
  );
}