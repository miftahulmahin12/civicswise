import { cn } from "@/lib/utils";

export function StatPills({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            "flex flex-col gap-1 rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)]",
            i === 0 && "border-teal-600/40 bg-teal-100/50"
          )}
        >
          <dt className="text-xs font-medium uppercase tracking-wide text-ink-faint">
            {item.label}
          </dt>
          <dd className="font-display text-2xl font-medium text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
