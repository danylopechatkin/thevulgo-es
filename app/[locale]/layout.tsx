import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import WhatsAppConversionTracker from "@/app/components/WhatsAppConversionTracker";
import HeaderEstimateLink from "@/app/components/HeaderEstimateLink";
import MobileHeaderMenu from "@/app/components/MobileHeaderMenu";
import CitySwitcher from "@/app/components/CitySwitcher";
import { MarketLabel, MarketWhatsApp } from "@/app/components/MarketHeaderDetails";
import MarketDesktopNav from "@/app/components/MarketDesktopNav";
import MarketHomeLink from "@/app/components/MarketHomeLink";
import MarketingTracker from "@/app/components/MarketingTracker";

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
      <div
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden bg-white font-sans text-black antialiased`}
        data-locale={locale}
      >
        <Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=AW-18261040714"
  strategy="afterInteractive"
/>

<Script id="google-ads-tag" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-18261040714');
  `}
</Script>

        <WhatsAppConversionTracker />
        <MarketingTracker />

        <NextIntlClientProvider messages={messages}>
          <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-[1600px] items-center gap-3 px-3 py-3 sm:px-5">
              <MarketHomeLink
                locale={locale}
                className="flex shrink-0 items-center gap-2 sm:gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-extrabold text-black shadow-sm">
                  V
                </div>

                <div className="hidden min-w-0 font-extrabold leading-none text-yellow-400 sm:block">
                  <span className="block truncate">THEVULGO</span>
                  <MarketLabel locale={locale} />
                </div>
              </MarketHomeLink>

              <MarketDesktopNav locale={locale} labels={{ services: t("services"), tips: t("tips"), faq: t("faq"), estimate: t("estimate") }} />

              <div className="ml-auto flex shrink-0 items-center justify-end gap-2">
                <CitySwitcher locale={locale} />
                <div>
                  <LanguageSwitcher locale={locale} />
                </div>

                <MobileHeaderMenu locale={locale} />

                <HeaderEstimateLink
                  locale={locale}
                  className="hidden h-10 items-center whitespace-nowrap rounded-xl bg-yellow-400 px-3 text-sm font-bold text-black shadow-sm transition hover:shadow-md sm:inline-flex sm:h-auto sm:rounded-2xl sm:px-5 sm:py-2.5 sm:text-base"
                >
                  {t("getEstimate")}
                </HeaderEstimateLink>

                <MarketWhatsApp locale={locale} label={t("whatsapp")} className="hidden items-center gap-2 whitespace-nowrap rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm transition hover:scale-[1.02] hover:border-[#25D366]/60 hover:shadow-md sm:inline-flex sm:rounded-2xl sm:px-4 sm:py-2.5 sm:text-base" />
              </div>
            </div>
          </header>

          {children}

          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </div>
  );
}
