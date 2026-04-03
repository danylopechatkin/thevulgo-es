import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THEVULGO | Valencia Handyman Services",
  description:
    "Professional handyman services in Valencia. TV mounting, electrical, plumbing, furniture assembly and home repairs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
  className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased bg-white text-black font-sans`}
>
        {/* GLOBAL HEADER */}
        <header className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-sm">
          <div className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-3"
              aria-label="Go to home"
            >
              <div className="w-9 h-9 rounded-full bg-yellow-400 text-black font-extrabold flex items-center justify-center shadow-sm">
                V
              </div>
              <div className="font-extrabold tracking-tight text-yellow-400">
                THEVULGO
                <span className="font-semibold text-gray-500"> Valencia</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-gray-800">
              <a
                href="/services"
                className="group relative px-2 py-1 text-gray-700 hover:text-black transition"
              >
                <span className="relative z-10 inline-block transition-transform duration-200 ease-out group-hover:-translate-y-[1px]">
                  Services
                </span>
                <span className="absolute inset-0 rounded-lg bg-yellow-100/0 transition group-hover:bg-yellow-100/40" />
                <span className="absolute left-2 right-2 -bottom-[3px] h-[2px] bg-yellow-400 scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>

              <a
                href="/#how"
                className="group relative px-2 py-1 text-gray-700 hover:text-black transition"
              >
                <span className="relative z-10 inline-block transition-transform duration-200 ease-out group-hover:-translate-y-[1px]">
                  How it works?
                </span>
                <span className="absolute inset-0 rounded-lg bg-yellow-100/0 transition group-hover:bg-yellow-100/40" />
                <span className="absolute left-2 right-2 -bottom-[3px] h-[2px] bg-yellow-400 scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>

              <a
                href="/#guides"
                className="group relative px-2 py-1 text-gray-700 hover:text-black transition"
              >
                <span className="relative z-10 inline-block transition-transform duration-200 ease-out group-hover:-translate-y-[1px]">
                  Tips & Guides
                </span>
                <span className="absolute inset-0 rounded-lg bg-yellow-100/0 transition group-hover:bg-yellow-100/40" />
                <span className="absolute left-2 right-2 -bottom-[3px] h-[2px] bg-yellow-400 scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>

              <a
                href="/#faq"
                className="group relative px-2 py-1 text-gray-700 hover:text-black transition"
              >
                <span className="relative z-10 inline-block transition-transform duration-200 ease-out group-hover:-translate-y-[1px]">
                  FAQ
                </span>
                <span className="absolute inset-0 rounded-lg bg-yellow-100/0 transition group-hover:bg-yellow-100/40" />
                <span className="absolute left-2 right-2 -bottom-[3px] h-[2px] bg-yellow-400 scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>

              <a
                href="/#contact"
                className="group relative px-2 py-1 text-gray-700 hover:text-black transition"
              >
                <span className="relative z-10 inline-block transition-transform duration-200 ease-out group-hover:-translate-y-[1px]">
                  Estimate
                </span>
                <span className="absolute inset-0 rounded-lg bg-yellow-100/0 transition group-hover:bg-yellow-100/40" />
                <span className="absolute left-2 right-2 -bottom-[3px] h-[2px] bg-yellow-400 scale-x-0 origin-left transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <a
  href="/estimate"
  className="inline-flex min-w-[158px] items-center justify-center whitespace-nowrap rounded-2xl bg-yellow-400 px-5 py-2.5 text-black font-bold shadow-md transition hover:shadow-xl hover:scale-105"
>
  Get estimate
</a>

              <a
                href="https://wa.me/14379074913?text=Hi!%20I%E2%80%99d%20like%20an%20estimate%20in%20Valencia."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-300 text-black px-4 py-2.5 rounded-2xl font-semibold shadow-sm hover:shadow-md hover:scale-[1.02] transition inline-flex items-center gap-2 hover:border-[#25D366]/60"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}