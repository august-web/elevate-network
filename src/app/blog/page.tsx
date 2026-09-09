import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <PagePlaceholder
      title="Blog — coming soon"
      description="Stories from the ground. Event recaps, reflections, and the unfiltered truth about building something from scratch."
    />
  );
}