import "./globals.css";

import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { SITE_ORIGIN } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "THEVULGO",
  robots: { index: true, follow: true },
};

export default async function RootLayout({

  children,

}: {

  children: React.ReactNode;

}) {
  const locale = await getLocale();
  const documentLanguage = locale === "es" ? "es" : "en";

  return (

    <html lang={documentLanguage}>

      <body>{children}</body>

    </html>

  );

}
