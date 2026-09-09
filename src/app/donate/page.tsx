import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/ui/PagePlaceholder";

export const metadata: Metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <PagePlaceholder
      title="Donate — coming in Phase 2"
      description="A prominent Paystack payment-page button will live here. Until then, use the Donate button in the navbar."
    />
  );
}