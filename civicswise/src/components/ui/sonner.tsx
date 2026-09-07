"use client";

import { Toaster as Sonner } from "sonner";

function Toaster(props: React.ComponentProps<typeof Sonner>) {
  return (
    <Sonner
      className="toaster group"
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-surface! text-ink! border! border-line! shadow-[var(--shadow-raised)]! rounded-[var(--radius-md)]!",
          description: "text-ink-faint!",
          actionButton: "bg-teal-600! text-white!",
          cancelButton: "bg-paper-dim! text-ink!",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
