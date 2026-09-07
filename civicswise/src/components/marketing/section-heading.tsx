import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <h2 className="text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-balance text-base leading-relaxed text-ink-faint sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
