"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function UpgradeDialog({
  plan,
  trigger,
}: {
  plan: "monthly" | "annual";
  trigger: React.ReactNode;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [open, setOpen] = useState(false);

  function handleUpgrade() {
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      toast.success("Premium demo activated", {
        description: "This is a frontend-only preview — no payment was processed.",
      });
    }, 900);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setStatus("idle");
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        {status !== "done" ? (
          <>
            <DialogHeader>
              <DialogTitle>
                Upgrade to Premium — {plan === "monthly" ? "Monthly" : "Annual"}
              </DialogTitle>
              <DialogDescription>
                This is a frontend preview of the upgrade flow. No payment provider is connected
                yet, so nothing will actually be charged.
              </DialogDescription>
            </DialogHeader>
            <div className="rounded-[var(--radius-md)] bg-paper-dim p-4 text-sm text-ink-soft">
              <div className="flex items-center justify-between">
                <span>Plan</span>
                <span className="font-medium text-ink">
                  {plan === "monthly" ? "$7.99 / month" : "$59 / year"}
                </span>
              </div>
            </div>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="brass" onClick={handleUpgrade} disabled={status === "loading"}>
                {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "loading" ? "Processing…" : "Confirm upgrade"}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-100 text-success-600">
                <Check className="h-6 w-6" />
              </div>
              <DialogTitle className="text-center">You're all set (demo)</DialogTitle>
              <DialogDescription className="text-center">
                In a later phase, this confirms your subscription with a real payment provider.
                For now, explore what Premium unlocks from your dashboard.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-center">
              <Button variant="primary" onClick={() => setOpen(false)}>
                Done
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
