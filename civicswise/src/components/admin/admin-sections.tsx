"use client";

import { useState } from "react";
import { Bell, Check, FileUp, Plus, Search, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { categories } from "@/data/categories";
import { questions } from "@/data/questions";
import {
  adminAuditLog,
  adminOverview,
  adminPracticePools,
  adminReviewQueue,
  adminUsers,
} from "@/data/admin-mock";

function StatBlock({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)]">
      <p className="font-display text-2xl font-medium text-ink">{value}</p>
      <p className="text-xs text-ink-faint">{label}</p>
    </div>
  );
}

export function OverviewSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatBlock label="Total questions" value={adminOverview.totalQuestions} />
        <StatBlock label="Active users" value={adminOverview.activeUsers.toLocaleString()} />
        <StatBlock
          label="Premium subscribers"
          value={adminOverview.premiumSubscribers.toLocaleString()}
        />
        <StatBlock label="Pending reviews" value={adminOverview.pendingReviews} />
      </div>
      <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-6 shadow-[var(--shadow-soft)]">
        <h3 className="font-display text-lg font-medium text-ink">Recent activity</h3>
        <ul className="mt-4 flex flex-col gap-3 text-sm">
          {adminAuditLog.slice(0, 4).map((entry) => (
            <li key={entry.action} className="flex items-center justify-between border-b border-line pb-3 last:border-b-0 last:pb-0">
              <span className="text-ink-soft">{entry.action}</span>
              <span className="text-xs text-ink-faint">{entry.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function QuestionsSection() {
  const [query, setQuery] = useState("");
  const filtered = questions.filter((q) =>
    q.question.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-sm">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search question bank…"
            className="pl-10"
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary">
              <Plus />
              New question
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a question</DialogTitle>
              <DialogDescription>
                Frontend preview only — this doesn't persist yet. Once the content API is
                connected, this form will write directly to the question bank.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3">
              <div>
                <Label htmlFor="q-text">Question</Label>
                <Input id="q-text" placeholder="What is..." className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="q-answer">Accepted answer</Label>
                <Input id="q-answer" placeholder="..." className="mt-1.5" />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="primary"
                onClick={() => toast.success("Question saved (demo)")}
              >
                Save question
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface shadow-[var(--shadow-soft)]">
        <table className="w-full text-left text-sm">
          <thead className="bg-paper-dim text-xs uppercase tracking-wide text-ink-faint">
            <tr>
              <th className="px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">Question</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Flags</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.slice(0, 12).map((q) => (
              <tr key={q.id} className="border-t border-line">
                <td className="px-4 py-3 text-ink-faint">{q.number}</td>
                <td className="max-w-xs truncate px-4 py-3 text-ink">{q.question}</td>
                <td className="px-4 py-3 text-ink-soft">{q.category}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    {q.isDynamic && <Badge variant="warning">Dynamic</Badge>}
                    {q.isSixtyFiveTwenty && <Badge variant="brass">65/20</Badge>}
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-ink-faint">
        Showing {Math.min(filtered.length, 12)} of {filtered.length} matching questions.
      </p>
    </div>
  );
}

export function CategoriesSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {categories.map((c) => (
        <div
          key={c.slug}
          className="flex items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)]"
        >
          <div>
            <p className="font-medium text-ink">{c.name}</p>
            <p className="text-xs text-ink-faint">{c.questionCount} questions · {c.section}</p>
          </div>
          <Button variant="ghost" size="sm">
            Manage
          </Button>
        </div>
      ))}
    </div>
  );
}

export function PracticePoolsSection() {
  return (
    <div className="flex flex-col gap-4">
      {adminPracticePools.map((pool) => (
        <div
          key={pool.name}
          className="flex flex-col justify-between gap-3 rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center"
        >
          <div>
            <p className="font-medium text-ink">{pool.name}</p>
            <p className="text-xs text-ink-faint">
              {pool.questions} questions · {pool.source}
            </p>
          </div>
          <Button variant="outline" size="sm">
            Configure
          </Button>
        </div>
      ))}
      <Button variant="ghost" className="w-fit">
        <Plus />
        New practice pool
      </Button>
    </div>
  );
}

export function PdfImportSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-[var(--radius-lg)] border border-dashed border-line-strong bg-surface p-14 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-800">
        <FileUp className="h-6 w-6" />
      </span>
      <div>
        <p className="font-display text-lg font-medium text-ink">
          Drop a USCIS PDF to import questions
        </p>
        <p className="mt-1 max-w-sm text-sm text-ink-faint">
          This interface is a frontend mockup for now. The real OCR and parsing pipeline
          connects here in a later phase.
        </p>
      </div>
      <Button variant="outline" disabled>
        Choose file (coming soon)
      </Button>
    </div>
  );
}

export function ReviewQueueSection() {
  return (
    <div className="flex flex-col gap-3">
      {adminReviewQueue.map((item) => (
        <div
          key={item.question}
          className="flex flex-col justify-between gap-3 rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center"
        >
          <div>
            <p className="font-medium text-ink">{item.question}</p>
            <p className="text-xs text-ink-faint">{item.reason}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={
                item.severity === "High" ? "danger" : item.severity === "Medium" ? "warning" : "neutral"
              }
            >
              {item.severity}
            </Badge>
            <Button size="sm" variant="primary">
              <Check className="h-4 w-4" />
              Resolve
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function UsersSection() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface shadow-[var(--shadow-soft)]">
      <table className="w-full text-left text-sm">
        <thead className="bg-paper-dim text-xs uppercase tracking-wide text-ink-faint">
          <tr>
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">Plan</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {adminUsers.map((user) => (
            <tr key={user.email} className="border-t border-line">
              <td className="px-4 py-3 text-ink">{user.name}</td>
              <td className="px-4 py-3 text-ink-soft">{user.email}</td>
              <td className="px-4 py-3">
                <Badge variant={user.plan === "Premium" ? "brass" : "neutral"}>{user.plan}</Badge>
              </td>
              <td className="px-4 py-3">
                <Badge
                  variant={
                    user.status === "Active"
                      ? "success"
                      : user.status === "Invited"
                      ? "teal"
                      : "danger"
                  }
                >
                  {user.status}
                </Badge>
              </td>
              <td className="px-4 py-3 text-right">
                <Button variant="ghost" size="sm">
                  Manage
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SubscriptionsSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <StatBlock label="Premium subscribers" value={adminOverview.premiumSubscribers} />
      <StatBlock label="Monthly plan" value="428 subscribers" />
      <StatBlock label="Annual plan" value="184 subscribers" />
      <div className="sm:col-span-3 rounded-[var(--radius-lg)] border border-line bg-surface p-6 shadow-[var(--shadow-soft)]">
        <p className="text-sm text-ink-faint">
          Payment processing is not connected yet. Once a provider is wired up, subscription
          events, invoices, and churn will surface here automatically.
        </p>
      </div>
    </div>
  );
}

export function AuditLogSection() {
  return (
    <ul className="flex flex-col gap-3">
      {adminAuditLog.map((entry, i) => (
        <li
          key={i}
          className="flex items-center justify-between rounded-[var(--radius-md)] border border-line bg-surface px-5 py-4 shadow-[var(--shadow-soft)]"
        >
          <div>
            <p className="text-sm text-ink">{entry.action}</p>
            <p className="text-xs text-ink-faint">{entry.actor}</p>
          </div>
          <span className="text-xs text-ink-faint">{entry.time}</span>
        </li>
      ))}
    </ul>
  );
}

export function SettingsSection() {
  return (
    <div className="flex flex-col gap-4">
      {[
        { label: "Email notifications for new review items", defaultChecked: true },
        { label: "Auto-flag questions with outdated dynamic answers", defaultChecked: true },
        { label: "Allow public question submissions", defaultChecked: false },
        { label: "Maintenance mode", defaultChecked: false },
      ].map((setting) => (
        <div
          key={setting.label}
          className="flex items-center justify-between rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)]"
        >
          <div className="flex items-center gap-3">
            <Bell className="h-4 w-4 text-ink-faint" />
            <span className="text-sm text-ink">{setting.label}</span>
          </div>
          <Switch defaultChecked={setting.defaultChecked} />
        </div>
      ))}
      <Button variant="destructive" className="w-fit">
        <Trash2 className="h-4 w-4" />
        Delete all local demo data
      </Button>
    </div>
  );
}
