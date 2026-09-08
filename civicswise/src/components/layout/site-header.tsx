"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { learnLinks, practiceLinks, primaryNav } from "@/data/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinkClass =
  "relative rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:origin-left after:scale-x-0 after:bg-teal-600 after:transition-transform after:duration-200 hover:text-ink hover:after:scale-x-100";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-200",
        scrolled ? "border-white/40 glass-surface !rounded-none" : "border-transparent bg-paper"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandMark />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  navLinkClass,
                  isActive("/practice") && "text-teal-700 after:scale-x-100"
                )}
              >
                Practice
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72">
              {practiceLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="flex flex-col items-start gap-0.5 py-2.5">
                    <span className="font-medium text-ink">{link.label}</span>
                    {link.description && (
                      <span className="text-xs text-ink-faint">{link.description}</span>
                    )}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={navLinkClass}>
                Learn
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72">
              {learnLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="flex flex-col items-start gap-0.5 py-2.5">
                    <span className="font-medium text-ink">{link.label}</span>
                    {link.description && (
                      <span className="text-xs text-ink-faint">{link.description}</span>
                    )}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/premium"
            className={cn(navLinkClass, isActive("/premium") && "text-teal-700 after:scale-x-100")}
          >
            Premium
          </Link>
          <Link
            href="/dashboard"
            className={cn(navLinkClass, isActive("/dashboard") && "text-teal-700 after:scale-x-100")}
          >
            Dashboard
          </Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm">
            <Link href="/dashboard">Sign in</Link>
          </Button>
          <Button asChild variant="primary" size="sm">
            <Link href="/practice/free">Start free practice</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full max-w-sm flex-col gap-6">
              <SheetHeader>
                <SheetTitle>
                <BrandMark />
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 overflow-y-auto">
              <p className="px-2 pt-2 text-xs font-medium uppercase tracking-wide text-ink-faint">
                Practice
              </p>
              {practiceLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-[var(--radius-md)] px-2 py-3 text-base font-medium text-ink hover:bg-paper-dim"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <p className="px-2 pt-4 text-xs font-medium uppercase tracking-wide text-ink-faint">
                Learn
              </p>
              {learnLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-[var(--radius-md)] px-2 py-3 text-base font-medium text-ink hover:bg-paper-dim"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <p className="px-2 pt-4 text-xs font-medium uppercase tracking-wide text-ink-faint">
                CivicsWise
              </p>
              {primaryNav
                .filter((l) => l.label === "Premium")
                .concat([{ label: "Dashboard", href: "/dashboard" }])
                .map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-[var(--radius-md)] px-2 py-3 text-base font-medium text-ink hover:bg-paper-dim"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
            </nav>
            <div className="flex flex-col gap-2 border-t border-line pt-4">
              <Button asChild variant="outline">
                <Link href="/dashboard">Sign in</Link>
              </Button>
              <Button asChild variant="primary">
                <Link href="/practice/free">Start free practice</Link>
              </Button>
            </div>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
