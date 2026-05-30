import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDot,
  Hammer,
  MapPin,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Reparación de Agujeros de Tacos en Valencia | Desde 29€ | THEVULGO"
    : "Anchor Hole Repair in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Reparación de agujeros de tacos, anclajes, tornillos y marcas de soportes en Valencia desde 29€. Relleno, alisado y preparación para pintura."
    : "Anchor hole repair in Valencia from €29. Wall plug holes, screw holes and bracket marks repaired with filling, smoothing and paint preparation.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparar agujeros tacos Valencia",
          "agujeros anclajes pared Valencia",
          "marcas soporte pared Valencia",
          "reparar agujeros pared Valencia",
          "rellenar agujeros tacos Valencia",
          "arreglar pared después soporte Valencia",
          "manitas pared Valencia",
          "tapar agujeros pared Valencia",
          "reparar marcas soporte TV Valencia",
        ]
      : [
          "anchor hole repair Valencia",
          "wall plug hole repair Valencia",
          "bracket marks repair Valencia",
          "repair holes after removal Valencia",
          "old anchor holes Valencia",
          "wall hole filling Valencia",
          "drywall repair Valencia",
          "screw hole repair Valencia",
          "TV bracket wall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/anchor-hole-repair`,
      languages: {
        es: `${siteUrl}/es/services/drywall/anchor-hole-repair`,
        en: `${siteUrl}/en/services/drywall/anchor-hole-repair`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/anchor-hole-repair`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AnchorHoleRepairPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/anchor-hole-repair`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero pedir presupuesto para reparar agujeros de tacos o anclajes en pared en Valencia."
      : "Hi, I would like an estimate for anchor hole repair in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const areas = [
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
  ];

  const faqItems = isEs
    ? [
        {
          q: "¿Qué incluye la reparación de agujeros de tacos o anclajes?",
          a: "Incluye revisión de los agujeros, retirada básica de restos sueltos cuando aplica, relleno, alisado y mejora visible de la zona después de retirar soportes, estantes, cuadros o accesorios.",
        },
        {
          q: "¿Cuánto cuesta reparar agujeros de tacos en Valencia?",
          a: "El servicio empieza desde 29€. El precio final depende del número de agujeros, tamaño, tipo de pared, acabado esperado y si hace falta pintura.",
        },
        {
          q: "¿Podéis reparar marcas después de quitar un soporte de TV o estante?",
          a: "Sí. Este servicio es ideal para marcas de soportes, brackets, estantes, accesorios retirados, cuadros, tacos y tornillos antiguos.",
        },
        {
          q: "¿Incluye pintura?",
          a: "La pintura se valora aparte. Si tienes pintura original, normalmente se puede conseguir un acabado más discreto.",
        },
        {
          q: "¿Es útil antes de entregar un piso?",
          a: "Sí. Es muy útil para move-out, alquileres, entrega de llaves y paredes con agujeros visibles después de retirar accesorios.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía una foto general de la pared, fotos de cerca de los agujeros y una cantidad aproximada de puntos que quieres reparar.",
        },
        {
          q: "¿Se puede dejar la pared perfecta?",
          a: "Depende del tipo de pared, textura, pintura y daño. El objetivo es mejorar mucho el aspecto visible, pero la igualación exacta de color o textura puede requerir pintura adicional.",
        },
      ]
    : [
        {
          q: "What is included in anchor hole repair?",
          a: "It includes checking the holes, basic removal of loose remains where needed, filling, smoothing and visible improvement after removing brackets, shelves, pictures or accessories.",
        },
        {
          q: "How much does anchor hole repair cost in Valencia?",
          a: "The service starts from €29. Final price depends on number of holes, size, wall type, expected finish and whether painting is needed.",
        },
        {
          q: "Can you repair marks after removing a TV bracket or shelf?",
          a: "Yes. This service is ideal for bracket marks, shelf marks, removed accessories, pictures, wall plugs and old screw holes.",
        },
        {
          q: "Is painting included?",
          a: "Painting is reviewed separately. If you have the original paint, it is usually easier to get a more discreet finish.",
        },
        {
          q: "Is this useful before handing over an apartment?",
          a: "Yes. It is very useful for move-outs, rentals, key handovers and walls with visible holes after removing accessories.",
        },
        {
          q: "What photos should I send?",
          a: "Send one general photo of the wall, close-up photos of the holes and the approximate number of points you want repaired.",
        },
        {
          q: "Can the wall look perfect again?",
          a: "It depends on wall type, texture, paint and damage. The goal is to greatly improve the visible look, but exact colour or texture matching may require additional painting.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación de agujeros de tacos en Valencia"
      : "Anchor hole repair in Valencia",
    description: isEs
      ? "Reparación de agujeros antiguos de tacos, tornillos, anclajes y marcas de soportes después de desmontajes en Valencia."
      : "Repair of old wall plug holes, screw holes, anchor holes and bracket marks after removals in Valencia.",
    serviceType: isEs ? "Reparación de agujeros de tacos" : "Anchor hole repair",
    url: pageUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "THEVULGO",
      url: siteUrl,
      telephone: "+34610076942",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressRegion: "Valencia",
        addressCountry: "ES",
      },
    },
    areaServed: areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    offers: {
      "@type": "Offer",
      price: "29",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEs ? "Inicio" : "Home",
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEs ? "Servicios" : "Services",
        item: `${siteUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isEs ? "Pladur y paredes" : "Drywall and walls",
        item: `${siteUrl}/${locale}/services/drywall`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Reparación de agujeros de tacos" : "Anchor hole repair",
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const heroPoints = isEs
    ? [
        "Desde 29€",
        "Agujeros de tacos y anclajes",
        "Marcas de soportes retirados",
        "Relleno limpio y alisado",
      ]
    : [
        "From €29",
        "Wall plug and anchor holes",
        "Removed bracket marks",
        "Clean filling and smoothing",
      ];

  const included = isEs
    ? [
        "Revisión de agujeros y marcas visibles",
        "Limpieza básica de restos sueltos cuando aplica",
        "Relleno de agujeros de tacos o anclajes",
        "Alisado básico para mejorar el acabado visible",
        "Preparación para pintura cuando aplica",
        "Presupuesto claro según fotos, cantidad y alcance",
      ]
    : [
        "Check of holes and visible marks",
        "Basic cleaning of loose remains where needed",
        "Filling of wall plug or anchor holes",
        "Basic smoothing to improve visible finish",
        "Preparation for painting where applicable",
        "Clear estimate based on photos, quantity and scope",
      ];

  const repairSituations = isEs
    ? [
        "Agujeros después de retirar un soporte de TV",
        "Marcas visibles de estantes, cuadros o espejos",
        "Puntos de tacos antiguos en dormitorios o salones",
        "Agujeros de tornillos antes de entregar un piso",
        "Paredes con varios puntos pequeños acumulados",
        "Zonas que necesitan quedar más limpias antes de pintar",
      ]
    : [
        "Holes after removing a TV bracket",
        "Visible marks from shelves, pictures or mirrors",
        "Old wall plug points in bedrooms or living rooms",
        "Screw holes before handing over an apartment",
        "Walls with several small accumulated points",
        "Areas that need to look cleaner before painting",
      ];

  const commonProblems = isEs
    ? [
        {
          title: "Tacos antiguos",
          text: "Reparamos agujeros de tacos retirados o puntos antiguos que quedan visibles en paredes interiores.",
        },
        {
          title: "Soportes retirados",
          text: "Trabajamos marcas después de quitar soportes de TV, estantes, cuadros, espejos o accesorios.",
        },
        {
          title: "Pared irregular",
          text: "Rellenamos y alisamos la zona para reducir el relieve visible antes de pintura o entrega.",
        },
        {
          title: "Entrega de piso",
          text: "Servicio útil para alquileres, mudanzas y viviendas con agujeros visibles antes de devolver llaves.",
        },
      ]
    : [
        {
          title: "Old wall plugs",
          text: "We repair removed wall plug holes or old fixing points left visible on interior walls.",
        },
        {
          title: "Removed brackets",
          text: "We work on marks left after removing TV brackets, shelves, pictures, mirrors or accessories.",
        },
        {
          title: "Uneven wall area",
          text: "We fill and smooth the area to reduce visible relief before painting or handover.",
        },
        {
          title: "Apartment handover",
          text: "Useful for rentals, move-outs and homes with visible holes before returning keys.",
        },
      ];

  const processSteps = isEs
    ? [
        "Envías una foto general de la pared",
        "Envías fotos de cerca de cada zona dañada",
        "Indicas cantidad aproximada de agujeros o puntos",
        "Revisamos si hace falta solo relleno o también pintura",
        "Te damos un presupuesto claro antes de empezar",
      ]
    : [
        "You send a general photo of the wall",
        "You send close-up photos of each damaged area",
        "You indicate the approximate number of holes or points",
        "We check whether filling is enough or painting is also needed",
        "You receive a clear estimate before the work starts",
      ];

  const wallTypes = isEs
    ? [
        {
          title: "Pladur",
          text: "Los agujeros en pladur suelen necesitar relleno cuidadoso y alisado para evitar bultos visibles.",
        },
        {
          title: "Pared pintada",
          text: "En paredes pintadas, el acabado final depende mucho de tener la pintura original o un color compatible.",
        },
        {
          title: "Pared con textura",
          text: "Las paredes con gotelé o textura pueden requerir un enfoque diferente para disimular mejor la reparación.",
        },
      ]
    : [
        {
          title: "Drywall",
          text: "Holes in drywall usually need careful filling and smoothing to avoid visible bumps.",
        },
        {
          title: "Painted wall",
          text: "On painted walls, the final finish depends heavily on having the original paint or a compatible colour.",
        },
        {
          title: "Textured wall",
          text: "Textured walls may require a different approach to make the repair less noticeable.",
        },
      ];

  const notIncluded = isEs
    ? [
        "Reparación estructural de daños grandes",
        "Pintura completa de habitación",
        "Igualación perfecta de color sin pintura original",
        "Reparación de humedad, grietas activas o paredes muy dañadas",
      ]
    : [
        "Structural repair of large damage",
        "Full room painting",
        "Perfect colour matching without original paint",
        "Repair of damp, active cracks or heavily damaged walls",
      ];

  const related = isEs
    ? [
        {
          title: "Reparación de agujeros pequeños",
          href: `/${locale}/services/drywall/small-hole-repair`,
        },
        {
          title: "Retoques antes de entregar piso",
          href: `/${locale}/services/repairs/move-out-touch-ups`,
        },
        {
          title: "Pequeños arreglos de pared",
          href: `/${locale}/services/repairs/minor-wall-fixes`,
        },
        {
          title: "Pladur y paredes",
          href: `/${locale}/services/drywall`,
        },
      ]
    : [
        {
          title: "Small hole repair",
          href: `/${locale}/services/drywall/small-hole-repair`,
        },
        {
          title: "Move-out touch-ups",
          href: `/${locale}/services/repairs/move-out-touch-ups`,
        },
        {
          title: "Minor wall fixes",
          href: `/${locale}/services/repairs/minor-wall-fixes`,
        },
        {
          title: "Drywall and walls",
          href: `/${locale}/services/drywall`,
        },
      ];

  return (
    <main className="min-h-screen bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              {isEs
                ? "THEVULGO • Pladur y paredes en Valencia"
                : "THEVULGO • Drywall and walls in Valencia"}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Reparación de agujeros de tacos" : "Anchor hole repair"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Reparación de agujeros antiguos de tacos, anclajes y marcas de soportes después de retirar estantes, brackets, cuadros o accesorios."
                : "Repair of old anchor holes, wall plug holes and bracket marks after removing shelves, brackets, pictures or accessories."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                {isEs ? "Pedir presupuesto por WhatsApp" : "Get estimate by WhatsApp"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <Link
                href={`/${locale}/services/drywall`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                {isEs ? "Ver pladur y paredes" : "View drywall services"}
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {heroPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-4 shadow-2xl md:p-6">
            <div className="rounded-2xl bg-yellow-400 p-8 text-black shadow-md">
              <CircleDot className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 29€" : "From €29"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Menos marcas. Pared más limpia. Mejor entrega."
                  : "Fewer marks. Cleaner wall. Better handover."}
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                {isEs
                  ? "Ideal para paredes con agujeros visibles después de desmontar soportes, estantes o accesorios."
                  : "Ideal for walls with visible holes after removing brackets, shelves or accessories."}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: isEs ? "Tacos" : "Wall plugs",
                  text: isEs ? "Agujeros antiguos" : "Old holes",
                  icon: CircleDot,
                },
                {
                  title: isEs ? "Soportes" : "Brackets",
                  text: isEs ? "Marcas retiradas" : "Removal marks",
                  icon: Hammer,
                },
                {
                  title: isEs ? "Relleno" : "Filling",
                  text: isEs ? "Aplicación limpia" : "Clean application",
                  icon: Wrench,
                },
                {
                  title: isEs ? "Alisado" : "Smoothing",
                  text: isEs ? "Mejor acabado" : "Better finish",
                  icon: Paintbrush,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm"
                >
                  <item.icon className="h-6 w-6 text-yellow-500" />
                  <p className="mt-3 font-black">{item.title}</p>
                  <p className="mt-1 text-sm text-neutral-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: isEs ? "Después de desmontar" : "After removal",
              text: isEs
                ? "Perfecto para agujeros después de quitar soportes, cuadros, estantes, cortinas o accesorios."
                : "Perfect for holes left after removing brackets, pictures, shelves, curtain fittings or accessories.",
            },
            {
              title: isEs ? "Relleno y alisado" : "Filling and smoothing",
              text: isEs
                ? "Corrección local para mejorar el acabado visible de la pared."
                : "Local correction to improve the visible finish of the wall.",
            },
            {
              title: isEs ? "Presupuesto claro" : "Clear estimate",
              text: isEs
                ? "Envía fotos y cantidad aproximada de agujeros para valorar tiempo y material."
                : "Send photos and approximate number of holes to estimate time and material.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <BadgeCheck className="h-8 w-8 text-yellow-500" />
              <h2 className="mt-4 text-xl font-black">{item.title}</h2>
              <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          {isEs
            ? "Reparación de agujeros antiguos después de retirar soportes y accesorios"
            : "Repair of old holes after removing brackets and accessories"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Después de quitar un soporte de TV, estante, cuadro, cortina, espejo o accesorio, la pared puede quedar llena de agujeros de tacos y marcas visibles. Este servicio está pensado para corregir esos puntos de forma limpia."
              : "After removing a TV bracket, shelf, picture, curtain fitting, mirror or accessory, the wall can be left with wall plug holes and visible marks. This service is designed to correct those points cleanly."}
          </p>

          <p>
            {isEs
              ? "THEVULGO realiza reparación de agujeros de anclajes en Valencia para pisos, casas, alquileres, mudanzas, entregas de vivienda y paredes interiores que necesitan verse más cuidadas."
              : "THEVULGO provides anchor hole repair in Valencia for apartments, homes, rentals, move-outs, property handovers and interior walls that need a cleaner look."}
          </p>

          <p>
            {isEs
              ? "Antes de confirmar, puedes enviar fotos generales y de cerca. Así se puede valorar el número de agujeros, tamaño, tipo de pared y si conviene añadir pintura al trabajo."
              : "Before confirming, you can send general and close-up photos. This helps review the number of holes, size, wall type and whether painting should be added to the job."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs
            ? "Servicio específico para agujeros de tacos, tornillos y soportes en Valencia"
            : "Dedicated service for wall plug holes, screw holes and bracket marks in Valencia"}
        </h2>

        <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Los agujeros de tacos suelen aparecer después de desmontar muebles, soportes de televisión, barras de cortina, estanterías, espejos, cuadros o pequeños accesorios. Aunque cada punto sea pequeño, varios agujeros juntos pueden hacer que una pared se vea descuidada, especialmente antes de una mudanza, una entrega de llaves o una visita del propietario."
              : "Wall plug holes usually appear after removing furniture, TV brackets, curtain rails, shelves, mirrors, pictures or small accessories. Even if each point is small, several holes together can make a wall look neglected, especially before a move-out, key handover or landlord visit."}
          </p>

          <p>
            {isEs
              ? "Este servicio se centra en mejorar visualmente esas zonas sin convertir un trabajo pequeño en una reforma completa. Revisamos el tipo de agujero, si quedan restos sueltos, si el borde está roto, si la pared es de pladur o ladrillo, y si el acabado necesita solo relleno o también pintura."
              : "This service focuses on visually improving those areas without turning a small job into a full renovation. We check the hole type, whether loose remains are present, whether the edge is broken, whether the wall is drywall or masonry, and whether the finish needs filling only or also paint."}
          </p>

          <p>
            {isEs
              ? "En viviendas de alquiler, estos detalles suelen notarse mucho porque normalmente están a la altura de la vista: encima de un escritorio, detrás de una televisión, cerca de una cama, sobre un sofá o junto a ventanas donde antes había barras o soportes. Repararlos ayuda a que la habitación se vea más limpia y preparada."
              : "In rental homes, these details often stand out because they are usually at eye level: above a desk, behind a TV, near a bed, above a sofa or next to windows where rods or brackets used to be. Repairing them helps the room look cleaner and better prepared."}
          </p>

          <p>
            {isEs
              ? "Si tienes la pintura original, el resultado puede quedar mucho más discreto. Si no la tienes, se puede dejar la zona preparada para pintar o valorar una solución visual razonable según el color, la textura y la luz de la pared."
              : "If you have the original paint, the result can be much more discreet. If not, the area can be left ready for painting or a reasonable visual solution can be considered depending on the wall colour, texture and light."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-yellow-200 bg-white p-7 shadow-md">
            <ShieldCheck className="h-10 w-10 text-yellow-500" />
            <h2 className="mt-4 text-3xl font-black">
              {isEs ? "Cuándo conviene reparar" : "When repair makes sense"}
            </h2>

            <div className="mt-6 space-y-4">
              {repairSituations.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                  <p className="font-semibold leading-7 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-7 shadow-md">
            <Wrench className="h-10 w-10 text-yellow-500" />
            <h2 className="mt-4 text-3xl font-black">
              {isEs ? "Proceso antes de confirmar" : "Process before confirming"}
            </h2>

            <div className="mt-6 space-y-4">
              {processSteps.map((item, index) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-black text-black">
                    {index + 1}
                  </span>
                  <p className="font-semibold leading-7 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Problemas habituales que corregimos" : "Common problems we correct"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {commonProblems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Tipos de pared que revisamos" : "Wall types we check"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {wallTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-yellow-200 bg-white p-7 shadow-sm"
              >
                <Sparkles className="h-8 w-8 text-yellow-500" />
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="rounded-3xl border border-yellow-200 bg-white p-7 shadow-md md:p-10">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué no incluye este servicio" : "What this service does not include"}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {notIncluded.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-yellow-50 p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold leading-7 text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Qué incluye el servicio" : "What is included"}
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold text-neutral-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            {isEs ? "Desde 29€" : "From €29"}
          </p>
          <h2 className="mt-3 text-4xl font-black">
            {isEs
              ? "Envía fotos y cantidad de agujeros"
              : "Send photos and number of holes"}
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            {isEs
              ? "Para calcular el precio, envía una foto general, fotos de cerca y la cantidad aproximada de puntos que quieres reparar."
              : "To estimate the price, send a general photo, close-up photos and the approximate number of points you want repaired."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105"
          >
            {isEs ? "Pedir precio por WhatsApp" : "Request price by WhatsApp"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Zonas donde trabajamos" : "Areas we serve"}
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 font-bold text-neutral-900"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>

          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-black">
                  {item.q}
                </summary>
                <p className="mt-4 leading-7 text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs ? "Servicios relacionados" : "Related services"}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {related.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              <p className="text-xl font-black">{item.title}</p>
              <p className="mt-3 inline-flex items-center font-bold text-neutral-700 group-hover:text-black">
                {isEs ? "Ver servicio" : "View service"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-4xl font-black tracking-tight">
            {isEs
              ? "¿Necesitas reparar agujeros de tacos?"
              : "Need anchor holes repaired?"}
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            {isEs
              ? "Envía fotos y cantidad aproximada. Te damos un presupuesto claro antes de empezar."
              : "Send photos and approximate quantity. Get a clear estimate before the work starts."}
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
          >
            {isEs ? "Pedir presupuesto ahora" : "Get estimate now"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}