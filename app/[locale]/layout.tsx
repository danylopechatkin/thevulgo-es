import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import Link from "next/link";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

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
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (locale !== "en" && locale !== "es") {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased bg-white text-black font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <header className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-sm">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:px-4">
              <Link href={`/${locale}`} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-yellow-400 text-black font-extrabold flex items-center justify-center shadow-sm">
                  V
                </div>
                <div className="font-extrabold text-yellow-400">
                  THEVULGO
                  <span className="text-gray-500 ml-1">Valencia</span>
                </div>
              </Link>

              <nav className="hidden md:flex items-center gap-6 text-[15px] font-semibold text-gray-800">
                <Link href={`/${locale}/services`}>Services</Link>
                <Link href={`/${locale}/#how`}>How it works?</Link>
                <Link href={`/${locale}/#guides`}>Tips & Guides</Link>
                <Link href={`/${locale}/#faq`}>FAQ</Link>
                <Link href={`/${locale}/estimate`}>Estimate</Link>
              </nav>

              <div className="flex items-center gap-2">
                <LanguageSwitcher locale={locale} />

                <Link
                  href={`/${locale}/estimate`}
                  className="bg-yellow-400 text-black px-4 sm:px-5 py-2.5 rounded-2xl font-bold shadow-md whitespace-nowrap"
                >
                  Get estimate
                </Link>

                <a
                  href="https://wa.me/14379074913"
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}