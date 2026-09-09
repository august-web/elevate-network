import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <PagePlaceholder
      title="Donate — coming soon"
      description="Every cedi counts. We'll show you exactly where your money goes — no black boxes."
    />
  );
}