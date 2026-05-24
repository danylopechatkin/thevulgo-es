import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Hammer,
  MapPin,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Wrench,
  Layers3,
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
    ? "Reparación Media de Pared en Valencia | Desde 45€ | THEVULGO"
    : "Medium Wall Patching in Valencia | From €45 | THEVULGO";

  const description = isEs
    ? "Reparación de daños visibles en pared, golpes, abolladuras y zonas dañadas en pladur o yeso en Valencia desde 45€. Parcheado, relleno y alisado."
    : "Patch repair for visible wall damage, dents, impact marks and damaged drywall or plaster in Valencia from €45. Patching, filling and smoothing.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparación pared Valencia",
          "reparación pladur Valencia",
          "parche pared Valencia",
          "golpe pared reparación Valencia",
          "abolladura pared Valencia",
          "arreglo pared yeso Valencia",
          "drywall repair Valencia",
        ]
      : [
          "medium wall patching Valencia",
          "drywall patch repair Valencia",
          "wall dent repair Valencia",
          "impact wall damage repair Valencia",
          "plaster wall patch Valencia",
          "damaged wall repair Valencia",
          "drywall repair Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/drywall/medium-wall-patching`,
      languages: {
        es: `${siteUrl}/es/services/drywall/medium-wall-patching`,
        en: `${siteUrl}/en/services/drywall/medium-wall-patching`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/drywall/medium-wall-patching`,
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

export default async function MediumWallPatchingPage({ params }: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/drywall/medium-wall-patching`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero presupuesto para reparación de pared con daños visibles en Valencia."
      : "Hi, I would like an estimate for medium wall patch repair in Valencia."
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
          q: "¿Qué incluye la reparación media de pared?",
          a: "Incluye revisión del daño, preparación de la zona, parcheado, relleno, alisado y mejora visible del acabado. La pintura se valora según el caso.",
        },
        {
          q: "¿Cuándo es una reparación media y no pequeña?",
          a: "Cuando el daño es más visible: golpes, abolladuras, zonas rotas, marcas de impacto o áreas que necesitan parcheado más amplio que un agujero simple.",
        },
        {
          q: "¿Trabajáis con pladur y yeso?",
          a: "Sí. Trabajamos con pladur, yeso y paredes interiores similares cuando el daño es local y no requiere reconstrucción estructural completa.",
        },
        {
          q: "¿Incluye pintura?",
          a: "La pintura puede valorarse aparte. Si tienes pintura original, normalmente se consigue mejor integración visual.",
        },
        {
          q: "¿Es útil antes de entregar piso?",
          a: "Sí. Este servicio es muy útil para alquileres, move-out, preparación de entrega y corrección de daños visibles.",
        },
      ]
    : [
        {
          q: "What is included in medium wall patching?",
          a: "It includes damage review, area preparation, patching, filling, smoothing and visible finish improvement. Painting is reviewed depending on the case.",
        },
        {
          q: "When is this considered medium repair instead of small repair?",
          a: "When damage is more visible: dents, impact marks, broken wall areas or damage requiring wider patching than a simple small hole.",
        },
        {
          q: "Do you work with drywall and plaster?",
          a: "Yes. We work with drywall, plaster and similar interior walls when the damage is local and does not require full structural rebuilding.",
        },
        {
          q: "Is painting included?",
          a: "Painting can be reviewed separately. If you have original paint, visual blending is usually easier.",
        },
        {
          q: "Is this useful before move-out?",
          a: "Yes. This is ideal for rentals, move-outs, property handover preparation and visible wall damage correction.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Reparación media de pared en Valencia"
      : "Medium wall patching in Valencia",
    description: isEs
      ? "Parcheado de daños visibles, golpes y abolladuras en pladur o yeso con relleno y alisado."
      : "Patch repair for visible wall damage, dents and impact marks with filling and smoothing.",
    serviceType: isEs ? "Reparación de pared" : "Wall patch repair",
    url: pageUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "THEVULGO",
      url: siteUrl,
      telephone: "+34610076942",
      priceRange: "€€",
    },
    areaServed: areas,
    offers: {
      "@type": "Offer",
      price: "45",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
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
        name: isEs ? "Pladur" : "Drywall",
        item: `${siteUrl}/${locale}/services/drywall`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs ? "Reparación media de pared" : "Medium wall patching",
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

  const related = [
    {
      title: isEs ? "Agujeros pequeños" : "Small hole repair",
      href: `/${locale}/services/drywall/small-hole-repair`,
    },
    {
      title: isEs ? "Retoques move-out" : "Move-out touch-ups",
      href: `/${locale}/services/repairs/move-out-touch-ups`,
    },
    {
      title: isEs ? "Pequeños arreglos pared" : "Minor wall fixes",
      href: `/${locale}/services/repairs/minor-wall-fixes`,
    },
    {
      title: isEs ? "Servicios drywall" : "Drywall services",
      href: `/${locale}/services/drywall`,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-black shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              THEVULGO • Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs ? "Reparación media de pared" : "Medium wall patching"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Parcheado de daños visibles, golpes, abolladuras y marcas de impacto en paredes interiores."
                : "Patch repair for visible wall damage, dents and impact marks in interior walls."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105"
              >
                {isEs ? "Pedir presupuesto" : "Get estimate"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <Link
                href={`/${locale}/services/drywall`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black shadow-sm transition hover:scale-105"
              >
                {isEs ? "Ver drywall" : "View drywall"}
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold sm:grid-cols-2">
              {[
                isEs ? "Desde 45€" : "From €45",
                isEs ? "Daños visibles" : "Visible damage",
                isEs ? "Pladur y yeso" : "Drywall & plaster",
                isEs ? "Preparación para pintura" : "Prep for repaint",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-4 shadow-2xl md:p-6">
            <div className="rounded-2xl bg-yellow-400 p-8 shadow-md">
              <Layers3 className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                {isEs ? "Desde 45€" : "From €45"}
              </p>
              <h2 className="mt-3 text-3xl font-black">
                {isEs
                  ? "Daño visible reparado con mejor acabado."
                  : "Visible wall damage repaired with better finish."}
              </h2>
              <p className="mt-4 leading-7">
                {isEs
                  ? "Ideal para golpes de muebles, impactos, zonas dañadas o paredes marcadas."
                  : "Ideal for furniture impacts, dents, damaged areas or visibly marked walls."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          {isEs
            ? "Reparación de daños visibles en pared"
            : "Repair of visible wall damage"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "Este servicio está pensado para daños mayores que un agujero pequeño: golpes, marcas de impacto, zonas abolladas o daños visibles que necesitan un parcheado más amplio."
              : "This service is designed for damage larger than a small hole: dents, impact marks, damaged wall sections and visible areas requiring wider patching."}
          </p>

          <p>
            {isEs
              ? "Es una solución ideal para viviendas, alquileres, oficinas y preparación de entrega donde la pared necesita una mejora visual clara."
              : "This is ideal for homes, rentals, offices and handover preparation where the wall needs a clear visual improvement."}
          </p>

          <p>
            {isEs
              ? "Envía fotos y medidas aproximadas para valorar alcance, materiales y acabado."
              : "Send photos and approximate dimensions so scope, materials and finish can be reviewed."}
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="text-3xl font-black">
            {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>

          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer font-black">
                  {item.q}
                </summary>
                <p className="mt-4 leading-7 text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          {isEs ? "Servicios relacionados" : "Related services"}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {related.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xl font-black">{item.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-4xl font-black">
            {isEs
              ? "¿Necesitas reparar una pared dañada?"
              : "Need wall damage repaired?"}
          </h2>

          <p className="mt-5 text-lg">
            {isEs
              ? "Envíanos fotos y te damos presupuesto claro."
              : "Send photos and get a clear estimate."}
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