import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <PagePlaceholder
      title="Events — coming in Phase 2"
      description="Upcoming events with Tally registration, plus past-event recaps and galleries, will live here."
    />
  );
}