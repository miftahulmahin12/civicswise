import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-lg font-medium text-ink",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-full seal-ring text-[13px] font-bold text-white"
        style={{ fontFamily: "var(--font-display)" }}
      >
        CW
      </span>
      <span>
        Civics<span className="text-teal-700">Wise</span>
      </span>
    </Link>
  );
}
