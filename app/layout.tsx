import "./globals.css";

import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {

  title: "THEVULGO",

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
