import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <PagePlaceholder
      title="Programs — coming in Phase 1"
      description="STEM school tours, the Power of You Festival, Campus Edition and Elevate Camp will be listed here."
    />
  );
}