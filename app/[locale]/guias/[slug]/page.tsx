import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock3,
  Lightbulb,
  MapPin,
  MessageCircle,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { getGuide, guides, textFor } from "../guides-data";

type Props = { params: Promise<{ locale: string; slug: string }> };

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";

export function generateStaticParams() {
  return ["es", "en"].flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const title = `${textFor(guide.title, locale)} | THEVULGO`;
  const description = textFor(guide.description, locale);
  const canonical = `${baseUrl}/${locale}/guias/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: `${baseUrl}/es/guias/${slug}`,
        en: `${baseUrl}/en/guias/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "THEVULGO",
      type: "article",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default async function GuideArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const isEs = locale === "es";
  const pageUrl = `${baseUrl}/${locale}/guias/${guide.slug}`;
  const title = textFor(guide.title, locale);
  const description = textFor(guide.description, locale);
  const category = textFor(guide.category, locale);
  const related = guides
    .filter((item) => item.slug !== guide.slug && textFor(item.category, locale) === category)
    .slice(0, 3);
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
    isEs
      ? `Hola, he leído la guía “${title}” y necesito presupuesto en Valencia.`
      : `Hello, I read “${title}” and need a quote in Valencia.`
  )}`;

  const faq = [
    {
      q: isEs ? "¿Se puede confirmar el precio antes de la visita?" : "Can the price be confirmed before the visit?",
      a: isEs
        ? "Sí. Envía fotos, medidas aproximadas, cantidad y la referencia del producto. Si aparece una dificultad no visible, se confirma antes de continuar."
        : "Yes. Send photos, approximate measurements, quantity and the product reference. If a hidden difficulty appears, it is confirmed before continuing.",
    },
    {
      q: isEs ? "¿Trabajáis en Valencia y alrededores?" : "Do you work in Valencia and nearby areas?",
      a: isEs
        ? "Sí. Atendemos Valencia y localidades cercanas según disponibilidad y tipo de trabajo."
        : "Yes. We serve Valencia and nearby towns depending on availability and the type of job.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      mainEntityOfPage: pageUrl,
      inLanguage: isEs ? "es-ES" : "en-GB",
      author: { "@type": "Organization", name: "THEVULGO" },
      publisher: { "@type": "Organization", name: "THEVULGO", url: baseUrl },
      about: category,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: `${baseUrl}/${locale}` },
        { "@type": "ListItem", position: 2, name: isEs ? "Guías" : "Guides", item: `${baseUrl}/${locale}/guias` },
        { "@type": "ListItem", position: 3, name: title, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-white text-black">
        <article>
          <header className="border-b border-yellow-300 bg-[#fffdf0]">
            <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
              <Link
                href={`/${locale}/guias`}
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-black"
              >
                <ArrowLeft className="h-4 w-4" /> {isEs ? "Todas las guías" : "All guides"}
              </Link>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-bold">
                <span className="rounded-full bg-yellow-400 px-4 py-2">{category}</span>
                <span className="inline-flex items-center gap-2 text-gray-600"><Clock3 className="h-4 w-4" /> 5 min</span>
                <span className="inline-flex items-center gap-2 text-gray-600"><MapPin className="h-4 w-4" /> Valencia</span>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700 sm:text-xl">{description}</p>
            </div>
          </header>

          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_280px] lg:py-16">
            <div>
              <p className="text-lg leading-8 text-gray-800">{textFor(guide.intro, locale)}</p>

              <div className="mt-10 space-y-6">
                {guide.points.map((point, index) => (
                  <section key={point.title.es} className="rounded-3xl border border-yellow-300 bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-sm font-black">{index + 1}</div>
                    <h2 className="mt-5 text-2xl font-black">{textFor(point.title, locale)}</h2>
                    <p className="mt-3 leading-7 text-gray-700">{textFor(point.text, locale)}</p>
                  </section>
                ))}
              </div>

              <section className="mt-10 rounded-3xl bg-black p-6 text-white sm:p-8">
                <div className="flex items-center gap-3 text-yellow-400">
                  <TriangleAlert className="h-6 w-6" />
                  <h2 className="text-2xl font-black text-white">{isEs ? "Errores que conviene evitar" : "Mistakes to avoid"}</h2>
                </div>
                <ul className="mt-6 space-y-4">
                  {guide.mistakes.map((mistake) => (
                    <li key={mistake.es} className="flex gap-3 text-gray-200">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                      {textFor(mistake, locale)}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-10 rounded-3xl border-2 border-yellow-400 bg-[#fff8cc] p-6 sm:p-8">
                <div className="flex items-center gap-3"><Lightbulb className="h-7 w-7" /><h2 className="text-2xl font-black">{isEs ? "Consejo de THEVULGO" : "THEVULGO tip"}</h2></div>
                <p className="mt-4 leading-7 text-gray-800">{textFor(guide.advice, locale)}</p>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-black">{isEs ? "Preguntas frecuentes" : "Frequently asked questions"}</h2>
                <div className="mt-6 space-y-4">
                  {faq.map((item) => (
                    <div key={item.q} className="rounded-2xl border border-gray-200 p-6">
                      <h3 className="font-extrabold">{item.q}</h3>
                      <p className="mt-2 leading-7 text-gray-700">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-3xl border border-yellow-400 bg-white p-6 shadow-lg">
                <ShieldCheck className="h-8 w-8" />
                <h2 className="mt-4 text-xl font-black">{isEs ? "¿Prefieres que lo hagamos?" : "Would you like us to do it?"}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {isEs ? "Envía fotos y recibe una valoración clara antes de reservar." : "Send photos and receive a clear assessment before booking."}
                </p>
                <Link href={`/${locale}/${guide.serviceHref}`} className="mt-5 flex items-center justify-between rounded-2xl bg-yellow-400 px-5 py-4 font-black hover:bg-yellow-300">
                  {textFor(guide.serviceLabel, locale)} <ArrowRight className="h-5 w-5" />
                </Link>
                <a href={whatsapp} className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-gray-300 px-5 py-4 font-bold hover:border-black">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
              <div className="flex items-center gap-3"><BookOpen className="h-6 w-6" /><h2 className="text-3xl font-black">{isEs ? "Guías relacionadas" : "Related guides"}</h2></div>
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <Link key={item.slug} href={`/${locale}/guias/${item.slug}`} className="group rounded-2xl border border-gray-200 bg-white p-5 hover:border-yellow-400">
                    <span className="text-xs font-black uppercase tracking-wide text-gray-500">{textFor(item.category, locale)}</span>
                    <h3 className="mt-2 font-extrabold group-hover:underline">{textFor(item.title, locale)}</h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold">{isEs ? "Leer" : "Read"} <ArrowRight className="h-4 w-4" /></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
