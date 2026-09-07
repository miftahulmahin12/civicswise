import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

/**
 * Font loading note: this build environment has no outbound access to
 * fonts.googleapis.com, so next/font/google cannot fetch Public Sans or
 * Fraunces at build time here. The type scale, weights, and layout are all
 * designed around those two families (a humanist sans for UI copy and a
 * high-contrast serif for display headings) — swap the block below back to
 * `next/font/google` the moment you build somewhere with internet access
 * and the visual design will pick them up with no other changes needed:
 *
 *   import { Public_Sans, Fraunces } from "next/font/google";
 *   const publicSans = Public_Sans({ variable: "--font-public-sans", subsets: ["latin"] });
 *   const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["opsz","SOFT","WONK"] });
 *   ...and apply `${publicSans.variable} ${fraunces.variable}` on <html> below.
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://civicswise.example.com"),
  title: {
    default: "CivicsWise — U.S. citizenship & civics test practice",
    template: "%s | CivicsWise",
  },
  description:
    "Practice the U.S. naturalization civics test with a question bank built from official USCIS sources, instant feedback, and a study plan that adapts to you.",
  openGraph: {
    title: "CivicsWise — U.S. citizenship & civics test practice",
    description:
      "Practice the U.S. naturalization civics test with a question bank built from official USCIS sources.",
    siteName: "CivicsWise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CivicsWise — U.S. citizenship & civics test practice",
    description:
      "Practice the U.S. naturalization civics test with a question bank built from official USCIS sources.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
