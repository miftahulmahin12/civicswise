"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/data/categories";
import { questions } from "@/data/questions";
import type { CategorySlug } from "@/types/question";

export function QuestionBankBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategorySlug | "all">("all");
  const [dynamicOnly, setDynamicOnly] = useState(false);

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      if (category !== "all" && q.category !== category) return false;
      if (dynamicOnly && !q.isDynamic) return false;
      if (query.trim()) {
        const haystack = `${q.question} ${q.answers.join(" ")}`.toLowerCase();
        if (!haystack.includes(query.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [query, category, dynamicOnly]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions or answers…"
            className="pl-11"
            aria-label="Search the question bank"
          />
        </div>
        <Select value={category} onValueChange={(v) => setCategory(v as CategorySlug | "all")}>
          <SelectTrigger className="w-full sm:w-64">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            {categories.map((c) => (
              <SelectItem key={c.slug} value={c.slug}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <button
          type="button"
          onClick={() => setDynamicOnly((v) => !v)}
          aria-pressed={dynamicOnly}
          className={
            dynamicOnly
              ? "shrink-0 rounded-full border border-warning-600 bg-warning-100 px-4 py-2.5 text-sm font-medium text-warning-600"
              : "shrink-0 rounded-full border border-line-strong bg-surface px-4 py-2.5 text-sm font-medium text-ink-soft hover:bg-paper-dim"
          }
        >
          Dynamic only
        </button>
      </div>

      <p className="text-sm text-ink-faint">
        Showing {filtered.length} of {questions.length} questions in the local bank
      </p>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-2 rounded-[var(--radius-lg)] border border-dashed border-line-strong py-16 text-center">
          <p className="font-display text-lg text-ink">No questions match those filters</p>
          <p className="text-sm text-ink-faint">Try a different search term or category.</p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {filtered.map((q) => {
            const cat = categories.find((c) => c.slug === q.category);
            return (
              <li
                key={q.id}
                className="rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-ink-faint">#{q.number}</span>
                  {cat && (
                    <Link href={`/categories/${cat.slug}`}>
                      <Badge variant="teal">{cat.shortName}</Badge>
                    </Link>
                  )}
                  {q.isDynamic && <Badge variant="warning">Dynamic</Badge>}
                  {q.isSixtyFiveTwenty && <Badge variant="brass">65/20</Badge>}
                </div>
                <p className="mt-3 font-display text-lg font-medium text-ink">{q.question}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {q.answers.map((a) => (
                    <span
                      key={a}
                      className="rounded-full bg-paper-dim px-3 py-1 text-xs text-ink-soft"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                {q.officialNote && (
                  <p className="mt-2 text-xs text-ink-faint">{q.officialNote}</p>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
