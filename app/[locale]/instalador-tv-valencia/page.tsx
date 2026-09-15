import type { Metadata } from "next";
import InstaladorTvClient from "./InstaladorTvClient";

type Props = { params: Promise<{ locale: string }> };

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs
    ? "Instalador de TV en Valencia | Montaje en pared | THEVULGO"
    : "TV Installer in Valencia | Wall Mounting | THEVULGO";
  const description = isEs
    ? "Instalador de TV en Valencia para montaje en pared, soportes, televisores grandes, Samsung Frame, soundbar y cableado limpio. Presupuesto por WhatsApp."
    : "TV installer in Valencia for wall mounting, brackets, large TVs, Samsung Frame, soundbars and clean cable management. Quote by WhatsApp.";
  const url = `${baseUrl}/${locale}/instalador-tv-valencia`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}/es/instalador-tv-valencia`,
        en: `${baseUrl}/en/instalador-tv-valencia`,
        "x-default": `${baseUrl}/es/instalador-tv-valencia`,
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_GB",
      type: "website",
    },
  };
}

export default function InstaladorTvPage() {
  return <InstaladorTvClient />;
}
