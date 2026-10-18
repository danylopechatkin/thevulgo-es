import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const slug = "instalador-tv-valencia";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const path = `/${slug}`;

  return {
    alternates: {
      canonical: `${baseUrl}${isEs ? "/es" : ""}${path}`,
      languages: {
        es: `${baseUrl}/es${path}`,
        en: `${baseUrl}${path}`,
        "x-default": `${baseUrl}/es/${slug}`,
      },
    },
  };
}

export default function InstaladorTvLayout({ children }: Props) {
  return children;
}
