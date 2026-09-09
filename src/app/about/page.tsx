import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PagePlaceholder
      title="About us — coming soon"
      description="Our story, the people behind this, and why we do what we do. Not a corporate 'About' page — a real one."
    />
  );
}