import { Progress } from "@/components/ui/progress";

export function PracticeProgressHeader({
  current,
  total,
  correctSoFar,
}: {
  current: number;
  total: number;
  correctSoFar: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-ink-soft">
          Question {current} of {total}
        </span>
        <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-900">
          {correctSoFar} correct
        </span>
      </div>
      <Progress value={(current / total) * 100} aria-label="Test progress" />
    </div>
  );
}
