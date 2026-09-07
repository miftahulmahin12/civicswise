import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Flame,
  ListChecks,
  Target,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AvatarInitials } from "@/components/ui/avatar-initials";
import { StatCard } from "@/components/dashboard/stat-card";
import {
  mockCategoryPerformance,
  mockOverview,
  mockRecentResults,
  mockRecommendedActions,
  mockUser,
  mockWeakQuestions,
} from "@/data/dashboard-mock";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Track your civics test practice progress, accuracy by category, and weak areas.",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 border-b border-line pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <AvatarInitials name={mockUser.name} className="h-14 w-14 text-base" />
          <div>
            <h1 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Welcome back, {mockUser.name.split(" ")[0]}
            </h1>
            <p className="text-sm text-ink-faint">
              Interview scheduled for {mockUser.interviewDate}
            </p>
          </div>
        </div>
        <Button asChild variant="primary" size="lg">
          <Link href="/practice/free">
            Continue practicing
            <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={ListChecks}
          label="Questions answered"
          value={String(mockOverview.questionsAnswered)}
        />
        <StatCard
          icon={Target}
          label="Overall accuracy"
          value={`${mockOverview.accuracy}%`}
          hint="+4% this week"
        />
        <StatCard
          icon={BookOpenCheck}
          label="Practice tests completed"
          value={String(mockOverview.testsCompleted)}
        />
        <StatCard
          icon={Flame}
          label="Study streak"
          value={`${mockUser.streakDays} days`}
          accent="brass"
        />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="paper-card rounded-[var(--radius-lg)] p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-medium text-ink">Accuracy by category</h2>
            <TrendingUp className="h-5 w-5 text-teal-700" />
          </div>
          <div className="mt-5 flex flex-col gap-4">
            {mockCategoryPerformance.map((row) => (
              <div key={row.category} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-soft">{row.category}</span>
                  <span className="text-ink-faint">{row.accuracy}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-paper-dim">
                  <div
                    className={
                      row.accuracy >= 80
                        ? "h-full rounded-full bg-success-600"
                        : row.accuracy >= 65
                        ? "h-full rounded-full bg-teal-600"
                        : "h-full rounded-full bg-warning-600"
                    }
                    style={{ width: `${row.accuracy}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="paper-card rounded-[var(--radius-lg)] p-6">
            <h2 className="font-display text-lg font-medium text-ink">Recent results</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {mockRecentResults.map((r) => (
                <li key={r.date} className="flex items-center justify-between text-sm">
                  <span className="text-ink-soft">{r.date}</span>
                  <span className="flex items-center gap-2">
                    <span className="font-medium text-ink">{r.score}</span>
                    <Badge variant={r.passed ? "success" : "warning"}>
                      {r.passed ? "Passed" : "Below pass"}
                    </Badge>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="paper-card rounded-[var(--radius-lg)] p-6">
            <h2 className="font-display text-lg font-medium text-ink">Questions to review</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {mockWeakQuestions.map((q) => (
                <li key={q.question} className="flex items-start justify-between gap-3 text-sm">
                  <span className="text-ink-soft">{q.question}</span>
                  <Badge variant="danger" className="shrink-0">
                    Missed {q.missCount}×
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-lg font-medium text-ink">Recommended next steps</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {mockRecommendedActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="flex flex-col justify-between gap-4 rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)] interactive-lift"
            >
              <div>
                <h3 className="font-display text-base font-medium text-ink">{action.title}</h3>
                <p className="mt-1 text-sm text-ink-faint">{action.body}</p>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-teal-700">
                Go
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
