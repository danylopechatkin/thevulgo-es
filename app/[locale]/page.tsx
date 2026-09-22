import type { Metadata } from "next";
import HomeClient from "./HomeClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Manitas Valencia | TV, IKEA y reparaciones | THEVULGO"
    : "Handyman Valencia | TV, IKEA & Home Repairs | THEVULGO";

  const description = isEs
    ? "Manitas en Valencia para montar TV, muebles IKEA y cocinas, además de pequeñas reparaciones. Precio claro y presupuesto rápido por WhatsApp."
    : "Handyman in Valencia for TV mounting, IKEA furniture, kitchen assembly and small repairs. Clear pricing and a fast WhatsApp quote.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "handyman Valencia",
          "manitas Valencia",
          "montaje TV Valencia",
          "montaje muebles Valencia",
          "reparaciones Valencia",
          "fontanería básica Valencia",
          "electricidad básica Valencia",
          "pladur Valencia",
        ]
      : [
          "handyman Valencia",
          "TV mounting Valencia",
          "furniture assembly Valencia",
          "home repairs Valencia",
          "basic plumbing Valencia",
          "basic electrical Valencia",
          "drywall Valencia",
        ],
    alternates: {
      canonical: isEs ? `${baseUrl}/es` : baseUrl,
      languages: {
        es: `${baseUrl}/es`,
        en: baseUrl,
        "x-default": baseUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: isEs ? `${baseUrl}/es` : baseUrl,
      siteName: "THEVULGO",
      type: "website",
      locale: isEs ? "es_ES" : "en_US",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const services = [
    "TV mounting",
    "Furniture assembly",
    "Basic electrical",
    "Basic plumbing",
    "Drywall / plasterboard",
    "Home repairs",
    "Doors and hardware",
    "Smart home",
    "Kitchen jobs",
    "Bathroom jobs",
    "Move-in services",
    "Exterior small jobs",
  ];

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "THEVULGO",
    url: isEs ? `${baseUrl}/es` : baseUrl,
    telephone: "+34610076942",
    priceRange: "€€",
    image: `${baseUrl}/og-image.jpg`,
    areaServed: [
      "Valencia",
      "Campanar",
      "Ruzafa",
      "Benimaclet",
      "Patraix",
      "El Carmen",
      "Mislata",
      "Burjassot",
      "Paterna",
      "Torrent",
      "Sagunto",
      "Cullera",
      "Gandía",
    ],
    description: isEs
      ? "Servicios de montaje y reparaciones en Valencia: montaje de TV, muebles, reparaciones, electricidad básica, fontanería básica, pladur, puertas, cocina, baño y mudanzas."
      : "Home installation and repair services in Valencia: TV mounting, furniture assembly, repairs, basic electrical, basic plumbing, drywall, doors, kitchen, bathroom and move-in jobs.",
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        areaServed: "Valencia",
      },
    })),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "THEVULGO",
    url: baseUrl,
    inLanguage: isEs ? "es" : "en",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: isEs ? `${baseUrl}/es` : baseUrl,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Servicios de montaje y reparaciones en Valencia"
      : "Home installation and repair services in Valencia",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "THEVULGO",
      telephone: "+34610076942",
    },
    areaServed: {
      "@type": "City",
      name: "Valencia",
    },
    serviceType: services,
    url: isEs ? `${baseUrl}/es` : baseUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <HomeClient locale={locale} />
    </>
  );
}
