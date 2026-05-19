import type { Metadata } from "next";
import BathroomClient from "./BathroomClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Instalaciones de baño en Valencia | Espejos, muebles y accesorios | THEVULGO"
    : "Bathroom Installations in Valencia | Mirrors, Cabinets & Accessories | THEVULGO";

  const description = isEs
    ? "Instalación de baño en Valencia: espejos, muebles de baño, armarios con espejo, estantes, accesorios, toalleros, iluminación, silicona y pequeños trabajos de acabado. Presupuesto claro por WhatsApp."
    : "Bathroom installation services in Valencia: mirrors, bathroom cabinets, mirror cabinets, shelves, accessories, towel holders, lighting, silicone renewal and small finishing jobs. Clear estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "instalación baño Valencia",
          "montaje espejo baño Valencia",
          "mueble baño Valencia",
          "instalar accesorios baño Valencia",
          "silicona baño Valencia",
          "toallero Valencia",
          "manitas baño Valencia",
        ]
      : [
          "bathroom installation Valencia",
          "bathroom mirror mounting Valencia",
          "bathroom cabinet installation Valencia",
          "bathroom accessories Valencia",
          "silicone renewal Valencia",
          "bathroom handyman Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/bathroom`,
      languages: {
        es: `${baseUrl}/es/services/bathroom`,
        en: `${baseUrl}/en/services/bathroom`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/bathroom`,
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

export default async function BathroomPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/bathroom`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalaciones de baño en Valencia"
      : "Bathroom installations in Valencia",
    description: isEs
      ? "Instalación de espejos, muebles de baño, armarios con espejo, estantes, accesorios, toalleros, iluminación, renovación de silicona y pequeños acabados de baño en Valencia."
      : "Installation of bathroom mirrors, cabinets, mirror cabinets, shelves, accessories, towel holders, lighting, silicone renewal and small bathroom finishing jobs in Valencia.",
    serviceType: isEs
      ? "Instalación y montaje de baño"
      : "Bathroom fitting and installation",
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
        ? "Servicios de instalación de baño"
        : "Bathroom installation services",
      itemListElement: [
        "Bathroom cabinet installation",
        "Mirror installation",
        "Mirror cabinet fitting",
        "Towel holder installation",
        "Toilet paper holder installation",
        "Bathroom shelf installation",
        "Vanity unit installation",
        "Vanity light installation",
        "Shower head replacement",
        "Shower hose replacement",
        "Bathroom accessory installation",
        "Silicone renewal",
        "Seal and gap fixing",
        "Cabinet door alignment",
        "Glass shelf installation",
      ].map((name) => ({
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
        name: isEs ? "Baño" : "Bathroom",
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
          ? "¿Qué trabajos de baño hace THEVULGO en Valencia?"
          : "What bathroom jobs does THEVULGO do in Valencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "THEVULGO realiza instalaciones prácticas de baño como montaje de espejos, muebles, armarios con espejo, estantes, toalleros, accesorios, iluminación simple, renovación de silicona y pequeños acabados visibles."
            : "THEVULGO handles practical bathroom installations such as mirror mounting, cabinets, mirror cabinets, shelves, towel holders, accessories, simple lighting, silicone renewal and small visible finishing jobs.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Hacéis reformas completas de baño?"
          : "Do you do full bathroom renovations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "No. Esta página está enfocada en instalaciones prácticas, montaje y acabados visibles, no en reformas completas, alicatado o grandes obras."
            : "No. This page focuses on practical installations, fitting and visible finishing, not full renovations, tiling or major construction work.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Puedo pedir presupuesto por WhatsApp?"
          : "Can I request a quote by WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Puedes enviar fotos, medidas y una breve descripción del trabajo para recibir una estimación clara antes de reservar."
            : "Yes. You can send photos, measurements and a short job description to receive a clear estimate before booking.",
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

      <BathroomClient />
    </>
  );
}