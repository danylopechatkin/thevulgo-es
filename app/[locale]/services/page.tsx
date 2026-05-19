import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

const serviceCategories = [
  {
    slug: "tv-mounting",
    es: "Montaje de TV en Valencia",
    en: "TV mounting in Valencia",
  },
  {
    slug: "furniture",
    es: "Montaje de muebles en Valencia",
    en: "Furniture assembly in Valencia",
  },
  {
    slug: "electrical",
    es: "Electricidad básica en Valencia",
    en: "Basic electrical services in Valencia",
  },
  {
    slug: "plumbing",
    es: "Fontanería básica en Valencia",
    en: "Basic plumbing services in Valencia",
  },
  {
    slug: "repairs",
    es: "Reparaciones del hogar en Valencia",
    en: "Home repairs in Valencia",
  },
  {
    slug: "drywall",
    es: "Pladur y pequeñas reformas en Valencia",
    en: "Drywall and small renovation jobs in Valencia",
  },
  {
    slug: "doors",
    es: "Puertas y herrajes en Valencia",
    en: "Doors and hardware in Valencia",
  },
  {
    slug: "smart-home",
    es: "Smart home e instalaciones en Valencia",
    en: "Smart home installations in Valencia",
  },
  {
    slug: "kitchen",
    es: "Trabajos de cocina en Valencia",
    en: "Kitchen handyman jobs in Valencia",
  },
  {
    slug: "bathroom",
    es: "Trabajos de baño en Valencia",
    en: "Bathroom handyman jobs in Valencia",
  },
  {
    slug: "move-in",
    es: "Servicios para mudanzas en Valencia",
    en: "Move-in handyman services in Valencia",
  },
  {
    slug: "exterior",
    es: "Pequeños trabajos exteriores en Valencia",
    en: "Exterior small jobs in Valencia",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Servicios de handyman en Valencia | TV, muebles, reparaciones | THEVULGO"
    : "Handyman Services in Valencia | TV, Furniture, Repairs | THEVULGO";

  const description = isEs
    ? "Servicios de handyman en Valencia: montaje de TV, montaje de muebles, electricidad básica, fontanería básica, pladur, puertas, cocina, baño, mudanzas y pequeñas reparaciones. Presupuesto claro y acabado limpio."
    : "Handyman services in Valencia: TV mounting, furniture assembly, basic electrical, basic plumbing, drywall, doors, kitchen, bathroom, move-in jobs and small repairs. Clear estimate and clean finish.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "servicios handyman Valencia",
          "manitas Valencia",
          "montaje TV Valencia",
          "montaje muebles Valencia",
          "reparaciones hogar Valencia",
          "electricidad básica Valencia",
          "fontanería básica Valencia",
          "pladur Valencia",
          "puertas Valencia",
          "cocina baño Valencia",
        ]
      : [
          "handyman services Valencia",
          "handyman Valencia",
          "TV mounting Valencia",
          "furniture assembly Valencia",
          "home repairs Valencia",
          "basic electrical Valencia",
          "basic plumbing Valencia",
          "drywall Valencia",
          "doors Valencia",
          "kitchen bathroom Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services`,
      languages: {
        es: `${baseUrl}/es/services`,
        en: `${baseUrl}/en/services`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services`,
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

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${baseUrl}/${locale}/services`;

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isEs
      ? "Servicios de handyman en Valencia"
      : "Handyman services in Valencia",
    description: isEs
      ? "Página de servicios de THEVULGO para trabajos de handyman en Valencia: montaje de TV, muebles, electricidad básica, fontanería básica, pladur, puertas, cocina, baño, mudanzas y reparaciones."
      : "THEVULGO services page for handyman jobs in Valencia: TV mounting, furniture assembly, basic electrical, basic plumbing, drywall, doors, kitchen, bathroom, move-in jobs and repairs.",
    url: pageUrl,
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
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Servicios" : "Services",
        item: pageUrl,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isEs
      ? "Categorías de servicios handyman en Valencia"
      : "Handyman service categories in Valencia",
    itemListElement: serviceCategories.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: isEs ? service.es : service.en,
      url: `${baseUrl}/${locale}/services/${service.slug}`,
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Servicios de handyman en Valencia"
      : "Handyman services in Valencia",
    serviceType: isEs
      ? "Montaje, reparaciones e instalaciones del hogar"
      : "Home mounting, repair and installation services",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "THEVULGO",
      telephone: "+34610076942",
      url: baseUrl,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressRegion: "Valencia",
        addressCountry: "ES",
      },
    },
    areaServed: [
      "Valencia",
      "Campanar",
      "Ruzafa",
      "Benimaclet",
      "Patraix",
      "El Carmen",
      "Extramurs",
      "Mislata",
      "Burjassot",
      "Paterna",
      "Torrent",
      "Sagunto",
      "Cullera",
      "Gandía",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isEs
        ? "Catálogo de servicios THEVULGO"
        : "THEVULGO service catalog",
      itemListElement: serviceCategories.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEs ? service.es : service.en,
          url: `${baseUrl}/${locale}/services/${service.slug}`,
          areaServed: "Valencia",
        },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isEs
          ? "¿Qué servicios de handyman ofrece THEVULGO en Valencia?"
          : "What handyman services does THEVULGO offer in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "THEVULGO ofrece montaje de TV, montaje de muebles, reparaciones del hogar, electricidad básica, fontanería básica, pladur, puertas, cocina, baño, smart home, mudanzas y pequeños trabajos exteriores en Valencia."
            : "THEVULGO offers TV mounting, furniture assembly, home repairs, basic electrical, basic plumbing, drywall, doors, kitchen, bathroom, smart home, move-in services and small exterior jobs in Valencia.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Trabajáis solo en Valencia ciudad?"
          : "Do you only work in Valencia city?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Trabajamos en Valencia y zonas cercanas como Campanar, Ruzafa, Benimaclet, Patraix, Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera y Gandía."
            : "We work in Valencia and nearby areas including Campanar, Ruzafa, Benimaclet, Patraix, Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera and Gandía.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Puedo pedir presupuesto por WhatsApp?"
          : "Can I request an estimate by WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Puedes enviar fotos, medidas y una breve descripción del trabajo por WhatsApp para recibir una estimación clara antes de confirmar la visita."
            : "Yes. You can send photos, measurements and a short description of the job by WhatsApp to receive a clear estimate before confirming the visit.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <ServicesClient />
    </>
  );
}