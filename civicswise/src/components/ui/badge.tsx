import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        neutral: "border-line-strong bg-paper-dim text-ink-soft",
        teal: "border-transparent bg-teal-100 text-teal-900",
        brass: "border-transparent bg-brass-100 text-brass-700",
        success: "border-transparent bg-success-100 text-success-600",
        warning: "border-transparent bg-warning-100 text-warning-600",
        danger: "border-transparent bg-danger-100 text-danger-600",
        outline: "border-line-strong bg-transparent text-ink-soft",
      },
    },
    defaultVariants: { variant: "neutral" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
