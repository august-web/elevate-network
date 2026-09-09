import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PagePlaceholder
      title="About us — coming in Phase 1"
      description="Our story, founder profile, values, team grid and photo gallery will live here."
    />
  );
}