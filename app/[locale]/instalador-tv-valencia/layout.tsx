import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const slug = "instalador-tv-valencia";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
        "x-default": `${baseUrl}/es/${slug}`,
      },
    },
  };
}

export default function InstaladorTvLayout({ children }: Props) {
  return children;
}
