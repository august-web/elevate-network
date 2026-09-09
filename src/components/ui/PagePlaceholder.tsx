import { EmptyState } from "@/components/ui/EmptyState";
import { Section } from "@/components/ui/Section";

/** Temporary body for routes that are stubbed until their phase ships. */
export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Section className="py-24">
      <EmptyState title={title} description={description} />
    </Section>
  );
}