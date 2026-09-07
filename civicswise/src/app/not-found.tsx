import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-5 px-4 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-800">
        <Compass className="h-6 w-6" />
      </span>
      <h1 className="font-display text-3xl font-medium text-ink">Page not found</h1>
      <p className="text-sm leading-relaxed text-ink-faint">
        That page doesn't exist — but there's plenty to study in the meantime. Try the practice
        test or the full question bank.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="primary">
          <Link href="/practice/free">
            Start a practice test
            <ArrowRight />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Back to homepage</Link>
        </Button>
      </div>
    </div>
  );
}
