import { cn } from "@/lib/utils";

export function AvatarInitials({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-900",
        className
      )}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
