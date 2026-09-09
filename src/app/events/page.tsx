import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <PagePlaceholder
      title="Events — coming soon"
      description="Where we actually meet. Workshops, festivals, hack nights — the things that don't fit in a PDF."
    />
  );
}