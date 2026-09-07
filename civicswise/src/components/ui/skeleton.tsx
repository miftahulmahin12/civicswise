import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-[var(--radius-sm)] bg-paper-dim", className)}
      {...props}
    />
  );
}

export { Skeleton };
