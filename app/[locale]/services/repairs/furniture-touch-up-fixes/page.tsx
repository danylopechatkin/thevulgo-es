import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Hammer,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wrench,
  Sofa,
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
    ? "Pequeñas Reparaciones de Muebles en Valencia | Desde 29€ | THEVULGO"
    : "Furniture Touch-Up Fixes in Valencia | From €29 | THEVULGO";

  const description = isEs
    ? "Pequeñas correcciones de muebles en Valencia desde 29€. Ajustes simples, fijaciones, pequeñas reparaciones visibles y problemas de montaje."
    : "Furniture touch-up fixes in Valencia from €29. Simple corrections for small furniture issues, fitting problems and visible adjustments.";

  return {
    title,
    description,
    keywords: isEs
      ? [
          "reparar muebles Valencia",
          "arreglo mueble Valencia",
          "pequeñas reparaciones muebles Valencia",
          "ajuste muebles Valencia",
          "manitas muebles Valencia",
          "arreglar cajón Valencia",
          "corregir mueble Valencia",
        ]
      : [
          "furniture repair Valencia",
          "furniture touch up Valencia",
          "small furniture fixes Valencia",
          "furniture fitting problems Valencia",
          "handyman furniture Valencia",
          "drawer adjustment Valencia",
          "cabinet furniture fix Valencia",
        ],
    alternates: {
      canonical: `${siteUrl}/${locale}/services/repairs/furniture-touch-up-fixes`,
      languages: {
        es: `${siteUrl}/es/services/repairs/furniture-touch-up-fixes`,
        en: `${siteUrl}/en/services/repairs/furniture-touch-up-fixes`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/repairs/furniture-touch-up-fixes`,
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

export default async function FurnitureTouchUpFixesPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const pageUrl = `${siteUrl}/${locale}/services/repairs/furniture-touch-up-fixes`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero presupuesto para pequeñas reparaciones de muebles en Valencia."
      : "Hi, I would like an estimate for furniture touch-up fixes in Valencia."
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
          q: "¿Qué incluye este servicio?",
          a: "Incluye pequeñas correcciones visibles de muebles, ajustes simples, reapriete de piezas, pequeñas mejoras de montaje y problemas menores de uso diario.",
        },
        {
          q: "¿Cuánto cuesta reparar un mueble pequeño?",
          a: "El servicio empieza desde 29€. El precio depende del tipo de mueble, problema, tiempo estimado, piezas necesarias y complejidad.",
        },
        {
          q: "¿Arregláis cajones o puertas que no cierran bien?",
          a: "Sí. Muchos pequeños problemas de alineación o uso diario se pueden corregir si el mueble lo permite.",
        },
        {
          q: "¿Trabajáis con muebles IKEA?",
          a: "Sí. Podemos revisar y corregir pequeños problemas de muebles IKEA u otros sistemas similares.",
        },
        {
          q: "¿Qué fotos tengo que enviar?",
          a: "Envía fotos del mueble, del problema y una breve explicación de qué no funciona correctamente.",
        },
      ]
    : [
        {
          q: "What is included in this service?",
          a: "It includes small visible furniture corrections, simple adjustments, tightening of parts, minor fitting improvements and everyday usability issues.",
        },
        {
          q: "How much does small furniture repair cost?",
          a: "The service starts from €29. Final price depends on furniture type, issue, estimated time, required parts and complexity.",
        },
        {
          q: "Can you fix drawers or doors that do not close properly?",
          a: "Yes. Many small alignment or usability issues can be corrected where suitable.",
        },
        {
          q: "Do you work with IKEA furniture?",
          a: "Yes. We can check and correct small issues with IKEA furniture and similar systems.",
        },
        {
          q: "What photos should I send?",
          a: "Send photos of the furniture, the issue and a short explanation of what is not working properly.",
        },
      ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Pequeñas reparaciones de muebles en Valencia"
      : "Furniture touch-up fixes in Valencia",
    description: isEs
      ? "Correcciones simples para pequeños problemas de muebles y ajustes visibles en Valencia."
      : "Simple corrections for small furniture issues and visible fitting problems in Valencia.",
    serviceType: isEs ? "Reparación de muebles" : "Furniture repair",
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
      price: "29",
      priceCurrency: "EUR",
    },
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

  return (
    <main className="min-h-screen bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-black shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              THEVULGO • Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {isEs
                ? "Pequeñas reparaciones de muebles"
                : "Furniture touch-up fixes"}{" "}
              <span className="text-yellow-500">
                {isEs ? "en Valencia" : "in Valencia"}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              {isEs
                ? "Correcciones simples para pequeños problemas de muebles, ajustes visibles y problemas de montaje o uso diario."
                : "Simple corrections for small furniture issues, fitting problems and everyday usability fixes."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md hover:scale-105 transition"
              >
                {isEs ? "Pedir presupuesto" : "Get estimate"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {(isEs
                ? [
                    "Desde 29€",
                    "Pequeños problemas",
                    "Ajustes simples",
                    "Mejor uso diario",
                  ]
                : [
                    "From €29",
                    "Small issues",
                    "Simple fixes",
                    "Better usability",
                  ]
              ).map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-2xl">
            <div className="rounded-2xl bg-yellow-400 p-8 shadow-md">
              <Sofa className="mb-6 h-12 w-12 text-black" />
              <h2 className="text-3xl font-black">
                {isEs
                  ? "Pequeños problemas. Soluciones prácticas."
                  : "Small problems. Practical fixes."}
              </h2>
              <p className="mt-4 leading-7">
                {isEs
                  ? "Ideal para muebles con pequeños defectos, ajustes o detalles molestos."
                  : "Ideal for furniture with small defects, adjustments or annoying usability issues."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10">
        <h2 className="text-3xl font-black">
          {isEs
            ? "Correcciones simples para muebles en Valencia"
            : "Simple furniture corrections in Valencia"}
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            {isEs
              ? "No todos los muebles necesitan sustitución. Muchos pequeños problemas se pueden corregir con ajustes, reapriete o pequeñas reparaciones visibles."
              : "Not every furniture issue requires replacement. Many small problems can be corrected with adjustments, tightening or minor visible fixes."}
          </p>

          <p>
            {isEs
              ? "THEVULGO ayuda con pequeños problemas de muebles en pisos, casas, apartamentos de alquiler y oficinas."
              : "THEVULGO helps with small furniture issues in apartments, homes, rental properties and offices."}
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-3xl font-black">
            {isEs ? "Preguntas frecuentes" : "FAQ"}
          </h2>

          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-yellow-200 bg-white p-6"
              >
                <summary className="cursor-pointer font-black">{item.q}</summary>
                <p className="mt-4 text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}