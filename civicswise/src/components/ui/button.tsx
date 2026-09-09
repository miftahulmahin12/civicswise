import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-medium transition-[background-color,color,box-shadow,transform] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98] hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-ink-fixed text-paper-fixed hover:bg-teal-900 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-raised)]",
        primary: "bg-teal-600 text-white hover:bg-teal-700 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-raised)]",
        brass: "bg-brass-500 text-white hover:bg-brass-700 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-raised)]",
        outline:
          "border border-line-strong bg-transparent text-ink hover:bg-paper-dim",
        ghost: "bg-transparent text-ink hover:bg-paper-dim",
        link: "bg-transparent text-teal-700 underline-offset-4 hover:underline p-0 h-auto rounded-none hover:translate-y-0",
        destructive: "bg-danger-600 text-white hover:opacity-90",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
