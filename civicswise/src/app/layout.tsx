import type { Metadata } from "next";
import { Public_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteLoader } from "@/components/site-loader";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

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
    <html
      lang="en"
      className={`${publicSans.variable} ${fraunces.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <Script id="skip-intro-check" strategy="beforeInteractive">
          {`try {
            if (sessionStorage.getItem('civicswise-intro-seen') === '1') {
              document.documentElement.setAttribute('data-skip-intro', 'true');
            }
          } catch (e) {}`}
        </Script>
        <ThemeProvider>
          <SiteLoader />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink-fixed focus:px-4 focus:py-2 focus:text-paper-fixed"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
