import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { footerColumns } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 lg:col-span-2">
            <BrandMark />
            <p className="max-w-xs text-sm leading-relaxed text-ink-faint">
              An independent study platform for the U.S. naturalization civics test, built on
              official USCIS source material.
            </p>
            <p className="text-xs text-ink-faint">
              CivicsWise is not affiliated with or endorsed by USCIS or the U.S. government.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <p className="text-sm font-medium text-ink">{column.title}</p>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-faint transition-colors hover:text-teal-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CivicsWise. All rights reserved.</p>
          <div className="flex gap-5">
            <Link
              href="https://www.uscis.gov/citizenship"
              className="hover:text-teal-700"
              target="_blank"
              rel="noreferrer"
            >
              Official USCIS citizenship resources
            </Link>
            <Link href="/faq" className="hover:text-teal-700">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
