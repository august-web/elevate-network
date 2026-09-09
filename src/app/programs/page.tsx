import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <PagePlaceholder
      title="Programs — coming soon"
      description="STEM tours. Camps. Festivals. The real stuff that changes how young people see themselves."
    />
  );
}