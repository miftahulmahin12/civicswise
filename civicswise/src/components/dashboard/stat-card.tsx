import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  accent,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  hint?: string;
  accent?: "teal" | "brass";
}) {
  return (
    <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)]">
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full",
          accent === "brass" ? "bg-brass-100 text-brass-700" : "bg-teal-100 text-teal-800"
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="font-display text-2xl font-medium text-ink">{value}</p>
        <p className="text-xs text-ink-faint">{label}</p>
      </div>
      {hint && <p className="text-xs text-teal-700">{hint}</p>}
    </div>
  );
}
