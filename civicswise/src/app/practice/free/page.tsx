import type { Metadata } from "next";
import { PracticeTestShell } from "@/components/practice/practice-test-shell";

export const metadata: Metadata = {
  title: "Free practice test",
  description:
    "Take a free 20-question practice test for the U.S. civics test with instant feedback on every answer.",
};

export default function FreePracticePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <PracticeTestShell
        questionCount={20}
        passThreshold={12}
        version="2025"
        title="Free practice test"
      />
    </div>
  );
}
