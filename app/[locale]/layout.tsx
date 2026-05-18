import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL("https://www.thevulgo.es"),
    title:
      locale === "es"
        ? "THEVULGO | Servicios de manitas en Valencia"
        : "THEVULGO | Valencia Handyman Services",
    description:
      locale === "es"
        ? "Servicios profesionales de manitas en Valencia: montaje de TV, muebles, electricidad básica, fontanería y reparaciones del hogar."
        : "Professional handyman services in Valencia: TV mounting, furniture assembly, basic electrical, plumbing and home repairs.",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "es") {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations("nav");

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden bg-white font-sans text-black antialiased`}
      >
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17552260425"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17552260425');
          `}
        </Script>

        <NextIntlClientProvider messages={messages}>
          <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:px-4">
              <Link
                href={`/${locale}`}
                className="flex min-w-0 items-center gap-2 sm:gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-extrabold text-black shadow-sm">
                  V
                </div>

                <div className="min-w-0 font-extrabold leading-none text-yellow-400">
                  <span className="block truncate">THEVULGO</span>
                  <span className="ml-0 mt-0.5 hidden text-sm font-semibold text-gray-500 sm:block">
                    Valencia
                  </span>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 text-[15px] font-semibold text-gray-800 md:flex">
                <Link href={`/${locale}/services`} className="hover:text-black">
                  {t("services")}
                </Link>
                <Link href={`/${locale}/#how`} className="hover:text-black">
                  {t("howItWorks")}
                </Link>
                <Link href={`/${locale}/#guides`} className="hover:text-black">
                  {t("tips")}
                </Link>
                <Link href={`/${locale}/#faq`} className="hover:text-black">
                  {t("faq")}
                </Link>
                <Link href={`/${locale}/estimate`} className="hover:text-black">
                  {t("estimate")}
                </Link>
              </nav>

              <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                <div className="mr-3 sm:mr-4">
                  <LanguageSwitcher locale={locale} />
                </div>

                <Link
                  href={`/${locale}/estimate`}
                  className="whitespace-nowrap rounded-xl bg-yellow-400 px-3 py-2 text-sm font-bold text-black shadow-sm transition hover:shadow-md sm:rounded-2xl sm:px-5 sm:py-2.5 sm:text-base"
                >
                  {t("getEstimate")}
                </Link>

                <a
                  href={`https://wa.me/34610076942?text=${encodeURIComponent(
                    locale === "es"
                      ? "Hola, me gustaría pedir presupuesto para un servicio en Valencia."
                      : "Hi! I’d like an estimate for a service in Valencia."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-2 whitespace-nowrap rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm transition hover:scale-[1.02] hover:border-[#25D366]/60 hover:shadow-md sm:inline-flex sm:rounded-2xl sm:px-4 sm:py-2.5 sm:text-base"
                >
                  {t("whatsapp")}
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