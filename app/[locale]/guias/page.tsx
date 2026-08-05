import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";
import { guides, textFor } from "./guides-data";

type Props = { params: Promise<{ locale: string }> };

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs
    ? "Guías de Manitas e Instalaciones en Valencia | THEVULGO"
    : "Handyman and Installation Guides in Valencia | THEVULGO";
  const description = isEs
    ? "20 guías prácticas sobre ventiladores de techo, montaje de TV y muebles, lámparas, estanterías, espejos y pequeños trabajos en Valencia."
    : "20 practical guides about ceiling fans, TV and furniture assembly, lights, shelves, mirrors and small jobs in Valencia.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/guias`,
      languages: { es: `${baseUrl}/es/guias`, en: `${baseUrl}/en/guias` },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/guias`,
      siteName: "THEVULGO",
      type: "website",
      locale: isEs ? "es_ES" : "en_US",
    },
  };
}

export default async function GuidesPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const categories = Array.from(new Set(guides.map((guide) => textFor(guide.category, locale))));
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
    isEs ? "Hola, he visto las guías y necesito ayuda con un trabajo en Valencia." : "Hello, I saw your guides and need help with a job in Valencia."
  )}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: isEs ? "Guías de manitas e instalaciones en Valencia" : "Handyman and installation guides in Valencia",
      description: isEs ? "Centro de guías prácticas de THEVULGO." : "THEVULGO practical guide centre.",
      url: `${baseUrl}/${locale}/guias`,
      hasPart: guides.map((guide) => ({
        "@type": "Article",
        headline: textFor(guide.title, locale),
        url: `${baseUrl}/${locale}/guias/${guide.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${baseUrl}/${locale}` },
        { "@type": "ListItem", position: 2, name: isEs ? "Guías" : "Guides", item: `${baseUrl}/${locale}/guias` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-white text-black">
        <section className="overflow-hidden border-b border-yellow-300 bg-[#fffdf0]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-4 py-2 text-sm font-black shadow-sm">
              <BookOpen className="h-4 w-4" /> THEVULGO · {isEs ? "Guías prácticas" : "Practical guides"}
            </div>
            <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
                  {isEs ? "Pequeños trabajos, explicados sin complicaciones" : "Small jobs, explained without complications"}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700 sm:text-xl">
                  {isEs
                    ? "Consejos claros antes de comprar, perforar o instalar. Ventiladores, TV, muebles, lámparas y fijaciones para hogares de Valencia."
                    : "Clear advice before buying, drilling or installing. Ceiling fans, TV, furniture, lighting and wall fixing for Valencia homes."}
                </p>
              </div>
              <div className="rounded-3xl bg-black p-6 text-white shadow-xl">
                <Sparkles className="h-7 w-7 text-yellow-400" />
                <p className="mt-4 text-3xl font-black">20</p>
                <p className="mt-1 font-bold text-gray-300">{isEs ? "guías reales para decidir mejor" : "real guides to help you decide"}</p>
                <a href={whatsapp} className="mt-5 flex items-center justify-between rounded-2xl bg-yellow-400 px-5 py-4 font-black text-black hover:bg-yellow-300">
                  {isEs ? "Preguntar por WhatsApp" : "Ask on WhatsApp"} <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-yellow-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`rounded-full border px-4 py-2 text-sm font-black shadow-sm ${
                  index === 0
                    ? "border-yellow-400 bg-yellow-400"
                    : "border-yellow-300 bg-[#fffbe5]"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#fffdf0_0%,#ffffff_42%)] px-5 pb-16 pt-12 sm:px-8 sm:pb-24">
          <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-gray-500"><Search className="h-4 w-4" /> {isEs ? "Biblioteca" : "Library"}</div>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">{isEs ? "Todas las guías" : "All guides"}</h2>
            </div>
            <span className="hidden items-center gap-2 text-sm font-bold text-gray-500 sm:flex"><Clock3 className="h-4 w-4" /> 5 min</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, index) => (
              <Link
                key={guide.slug}
                href={`/${locale}/guias/${guide.slug}`}
                className={`group relative flex min-h-[300px] flex-col overflow-hidden rounded-3xl border p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl ${
                  index % 5 === 0
                    ? "border-yellow-400 bg-[#fff8cc]"
                    : "border-yellow-300 bg-white"
                }`}
              >
                <span className="absolute inset-x-0 top-0 h-2 bg-yellow-400" />
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-yellow-300 bg-yellow-100 px-3 py-1.5 text-xs font-black">{textFor(guide.category, locale)}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-sm font-black text-black shadow-sm">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black leading-tight group-hover:underline">{textFor(guide.title, locale)}</h3>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">{textFor(guide.description, locale)}</p>
                <div className="mt-auto flex items-center justify-between pt-7 text-sm font-black">
                  <span className="rounded-xl bg-yellow-400 px-4 py-2 transition group-hover:bg-black group-hover:text-white">{isEs ? "Leer guía" : "Read guide"}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400 bg-white"><ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
          </div>
        </section>

        <section className="border-y border-yellow-300 bg-[#fff8cc]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-3">
            {[
              [isEs ? "Antes de comprar" : "Before buying", isEs ? "Comprueba medidas, compatibilidad y tipo de pared antes de pagar." : "Check measurements, compatibility and wall type before paying."],
              [isEs ? "Antes de perforar" : "Before drilling", isEs ? "Revisa cables, tuberías, altura y posición con una marca provisional." : "Check cables, pipes, height and position with a temporary mark."],
              [isEs ? "Antes de reservar" : "Before booking", isEs ? "Envía fotos y cantidades para recibir una valoración clara." : "Send photos and quantities for a clear assessment."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
                <CheckCircle2 className="h-7 w-7" />
                <h2 className="mt-4 text-xl font-black">{title}</h2>
                <p className="mt-3 leading-7 text-gray-700">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <Wrench className="mx-auto h-9 w-9" />
          <h2 className="mt-5 text-3xl font-black sm:text-5xl">{isEs ? "¿No encuentras tu trabajo?" : "Can't find your job?"}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{isEs ? "Envíanos fotos y te diremos si podemos hacerlo y cuánto costará antes de reservar." : "Send photos and we will tell you if we can do it and what it will cost before booking."}</p>
          <Link href={`/${locale}/estimate`} className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-yellow-400 px-7 py-4 font-black shadow-lg hover:bg-yellow-300">
            {isEs ? "Pedir presupuesto" : "Request a quote"} <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </main>
    </>
  );
}
