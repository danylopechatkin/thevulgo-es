import type { Metadata } from "next";
import KitchenClient from "./KitchenClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalaciones de cocina en Valencia | Muebles, tiradores y luces | THEVULGO"
    : "Kitchen Installations in Valencia | Cabinets, Handles & Lights | THEVULGO";

  const description = isEs
    ? "Instalaciones de cocina en Valencia: muebles, muebles altos, tiradores, estantes, iluminación bajo mueble, remates, encimeras, accesorios y ajustes. Presupuesto claro por WhatsApp."
    : "Kitchen installation services in Valencia: cabinets, wall units, handles, shelves, under-cabinet lights, trim, worktops, accessories and adjustments. Clear estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalación cocina Valencia",
          "montaje muebles cocina Valencia",
          "muebles cocina Valencia",
          "tiradores cocina Valencia",
          "iluminación cocina Valencia",
          "luces bajo mueble Valencia",
          "encimera cocina Valencia",
          "manitas cocina Valencia",
        ]
      : [
          "kitchen installation Valencia",
          "kitchen cabinet installation Valencia",
          "kitchen fitting Valencia",
          "kitchen handles Valencia",
          "under cabinet lights Valencia",
          "kitchen worktop Valencia",
          "kitchen handyman Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/kitchen`,
      languages: {
        es: `${baseUrl}/es/services/kitchen`,
        en: `${baseUrl}/en/services/kitchen`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/kitchen`,
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

export default async function KitchenPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/kitchen`;

  const offers = [
    "Kitchen cabinet installation",
    "Wall cabinet mounting",
    "Base unit installation",
    "Cabinet door alignment",
    "Handle installation",
    "Soft-close adjustment",
    "Shelf installation",
    "Kitchen lighting installation",
    "Under-cabinet light setup",
    "Kitchen rail installation",
    "Back panel fitting",
    "Trim and filler panel fitting",
    "Worktop support prep",
    "Appliance housing fitting",
    "Kitchen accessory installation",
    "Worktop installation and fitting",
    "Multiple kitchen installation tasks",
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalaciones de cocina en Valencia"
      : "Kitchen installation services in Valencia",
    description: isEs
      ? "Instalación de muebles de cocina, muebles altos, muebles bajos, tiradores, estantes, iluminación bajo mueble, remates, paneles, encimeras, accesorios y ajustes de cocina en Valencia."
      : "Kitchen cabinet installation, wall units, base units, handles, shelves, under-cabinet lighting, trim, panels, worktops, accessories and kitchen adjustments in Valencia.",
    serviceType: isEs
      ? "Instalación y montaje de cocina"
      : "Kitchen fitting and installation",
    url: pageUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "THEVULGO",
      url: baseUrl,
      telephone: "+34610076942",
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
        ? "Servicios de instalación de cocina"
        : "Kitchen installation service catalog",
      itemListElement: offers.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          areaServed: "Valencia",
        },
      })),
    },
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
        item: `${baseUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isEs ? "Instalaciones de cocina" : "Kitchen Installations",
        item: pageUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isEs
          ? "¿Qué trabajos de cocina hace THEVULGO?"
          : "What kitchen jobs does THEVULGO do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "THEVULGO realiza instalación de muebles de cocina, muebles altos, muebles bajos, tiradores, estantes, iluminación bajo mueble, remates, paneles, encimeras compatibles, accesorios y ajustes visibles."
            : "THEVULGO handles kitchen cabinet installation, wall units, base units, handles, shelves, under-cabinet lighting, trim, panels, compatible worktops, accessories and visible adjustments.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Instaláis cocinas completas a medida?"
          : "Do you install full custom kitchens?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Esta página está enfocada en instalación práctica, montaje y acabados visibles de cocina, no en grandes reformas completas o proyectos especializados de cocina a medida."
            : "This page focuses on practical kitchen installation, fitting and visible finishing, not full large-scale custom kitchen renovation projects.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Puedo agrupar varias tareas de cocina?"
          : "Can I group several kitchen tasks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Muebles, tiradores, estantes, iluminación y pequeños ajustes de cocina pueden agruparse en una sola visita con presupuesto combinado."
            : "Yes. Cabinets, handles, shelves, lighting and small kitchen adjustments can be grouped into one visit with a combined estimate.",
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
            ? "Sí. Puedes enviar fotos, medidas y una breve descripción de la cocina para recibir una estimación clara antes de reservar."
            : "Yes. You can send photos, measurements and a short kitchen job description to receive a clear estimate before booking.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <KitchenClient />
    </>
  );
}