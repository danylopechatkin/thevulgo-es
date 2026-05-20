import type { Metadata } from "next";
import DrywallClient from "./DrywallClient";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reparación de paredes y pladur en Valencia | Parches y agujeros | THEVULGO"
    : "Wall & Drywall Repair in Valencia | Patching, Holes & Drilling | THEVULGO";

  const description = isEs
    ? "Reparación de paredes y pladur en Valencia: agujeros, parches, tacos, grietas, cortes de pladur, daños de soportes TV, lijado, preparación para pintura y perforaciones. Presupuesto claro por WhatsApp."
    : "Wall and drywall repair in Valencia: holes, patches, anchors, cracks, drywall cutouts, TV bracket damage, sanding, paint preparation and drilling. Clear estimate by WhatsApp.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparación pladur Valencia",
          "reparación paredes Valencia",
          "parches pared Valencia",
          "agujeros pared Valencia",
          "reparar agujeros tacos Valencia",
          "pladur Valencia",
          "perforación pared Valencia",
          "manitas pladur Valencia",
        ]
      : [
          "drywall repair Valencia",
          "wall repair Valencia",
          "wall patching Valencia",
          "hole repair Valencia",
          "anchor hole repair Valencia",
          "drywall patch Valencia",
          "wall drilling Valencia",
          "handyman drywall Valencia",
        ],
    alternates: {
      canonical: `${baseUrl}/${locale}/services/drywall`,
      languages: {
        es: `${baseUrl}/es/services/drywall`,
        en: `${baseUrl}/en/services/drywall`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/services/drywall`,
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

export default async function DrywallPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/services/drywall`;

  const offers = [
    "Small hole repair",
    "Medium wall patching",
    "Large drywall patch",
    "Anchor hole repair",
    "Wall touch-up prep",
    "Drywall cutout repair",
    "Crack filling",
    "Corner repair",
    "Wall levelling prep",
    "Skim coat area repair",
    "TV bracket wall repair",
    "Shelf removal wall repair",
    "Door handle wall damage repair",
    "Ceiling spot patching",
    "Cable hole closing",
    "Wall drilling service",
    "Concrete wall drilling",
    "Drywall mounting prep",
    "Patch and sand finish",
    "Multiple wall repairs",
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de paredes y pladur en Valencia"
      : "Wall and drywall repair services in Valencia",
    description: isEs
      ? "Reparación de paredes, parches de pladur, agujeros de tacos, grietas, daños por soportes de TV, cortes de pladur, lijado, preparación para pintura y perforaciones en Valencia."
      : "Wall repair, drywall patching, anchor hole repair, cracks, TV bracket wall damage, drywall cutouts, sanding, paint preparation and drilling in Valencia.",
    serviceType: isEs
      ? "Reparación de paredes y pladur"
      : "Wall and drywall repair",
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
        ? "Servicios de reparación de paredes y pladur"
        : "Wall and drywall repair services",
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
        name: isEs ? "Paredes y pladur" : "Walls & Drywall",
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
          ? "¿Reparáis pequeños agujeros en pladur?"
          : "Do you repair small holes in drywall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. THEVULGO repara agujeros pequeños en pladur, agujeros de tacos, marcas de soportes, grietas pequeñas y daños localizados de pared."
            : "Yes. THEVULGO repairs small drywall holes, anchor holes, bracket marks, small cracks and localized wall damage.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿Podéis reparar la pared después de quitar un soporte de TV?"
          : "Can you repair the wall after removing a TV bracket?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Se pueden reparar agujeros, tacos y marcas de soportes de TV, dejando la zona mejor preparada para pintura o retoque."
            : "Yes. Old screw holes, anchors and TV bracket marks can be repaired and prepared for painting or touch-up.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿También hacéis perforaciones en pared?"
          : "Do you also do wall drilling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Sí. Se realizan perforaciones básicas en pared, ladrillo u hormigón para instalaciones domésticas cuando la superficie y el alcance son adecuados."
            : "Yes. Basic drilling in wall, brick or concrete is available for home installation tasks when the surface and scope are suitable.",
        },
      },
      {
        "@type": "Question",
        name: isEs
          ? "¿El servicio incluye pintura?"
          : "Does the service include painting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEs
            ? "Esta página se centra en reparación, parcheo, lijado y preparación para pintura. La pintura puede tratarse aparte según el alcance del trabajo."
            : "This page focuses on repair, patching, sanding and paint preparation. Painting can be handled separately depending on the job scope.",
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

      <DrywallClient />
    </>
  );
}