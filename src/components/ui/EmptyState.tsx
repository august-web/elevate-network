import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title?: string;
  description?: string;
  className?: string;
};

/**
 * Graceful empty state shown wherever the database has no content yet
 * (unconfigured Supabase, empty tables, or a failed fetch).
 */
export function EmptyState({
  title = "Content coming soon",
  description,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-xl border border-dashed border-ink-soft bg-paper/70 px-6 py-12 text-center",
        className,
      )}
    >
      <h3 className="font-display text-xl font-bold text-ink">
        {title}
      </h3>
      {description ? (
        <p className="max-w-md text-sm leading-relaxed text-ink-soft">
          {description}
        </p>
      ) : null}
    </div>
  );
}