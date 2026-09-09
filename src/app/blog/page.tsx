import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <PagePlaceholder
      title="Blog — coming in Phase 2"
      description="News, stories and updates from the Sanity CMS will be listed here with category filters."
    />
  );
}