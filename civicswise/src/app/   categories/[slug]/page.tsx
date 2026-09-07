import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories, getCategory } from "@/data/categories";
import { getQuestionsByCategory } from "@/data/questions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category not found" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryQuestions = getQuestionsByCategory(category.slug);
  const related = categories.filter((c) => c.section === category.section && c.slug !== category.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-paper-dim">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <Link
            href="/128-civics-questions"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-faint hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" />
            All categories
          </Link>
          <Badge variant="teal" className="mt-4 w-fit">
            {category.section}
          </Badge>
          <h1 className="mt-3 text-balance font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-ink-faint sm:text-lg">
            {category.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="primary">
              <Link href="/practice/free">
                Practice this category
                <ArrowRight />
              </Link>
            </Button>
            <Badge variant="outline">{categoryQuestions.length} sample questions here</Badge>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-medium text-ink">Question previews</h2>
        <div className="mt-6 flex flex-col gap-3">
          {categoryQuestions.map((q) => (
            <div
              key={q.id}
              className="rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="flex flex-wrap items-center gap-2">
                {q.isDynamic && <Badge variant="warning">Dynamic</Badge>}
                {q.isSixtyFiveTwenty && <Badge variant="brass">65/20</Badge>}
              </div>
              <p className="mt-2 font-display text-lg font-medium text-ink">{q.question}</p>
              <p className="mt-1 text-sm text-ink-faint">{q.answers[0]}</p>
            </div>
          ))}
          {categoryQuestions.length === 0 && (
            <p className="text-sm text-ink-faint">
              Sample questions for this category are coming soon — practice a full random set in
              the meantime.
            </p>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-paper-dim">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-medium text-ink">Related categories</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/categories/${c.slug}`}
                  className="rounded-[var(--radius-lg)] border border-line bg-surface p-5 shadow-[var(--shadow-soft)] interactive-lift"
                >
                  <h3 className="font-display text-base font-medium text-ink">{c.name}</h3>
                  <p className="mt-1 text-xs text-ink-faint">{c.questionCount} questions</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
