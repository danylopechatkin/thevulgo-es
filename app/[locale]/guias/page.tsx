import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Brush,
  Drill,
  Hammer,
  Home,
  Lightbulb,
  MessageCircle,
  Paintbrush,
  Plug,
  Search,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
  Tv,
  Umbrella,
  Wrench,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "guias";

const whatsappTextEs =
  "Hola, he visto las guías de THEVULGO y necesito ayuda con una reparación o instalación en Valencia.";
const whatsappTextEn =
  "Hello, I saw THEVULGO guides and need help with a repair or installation in Valencia.";

const categories = [
  {
    icon: Tv,
    titleEs: "TV y soportes",
    titleEn: "TV and brackets",
    textEs: "Guías para colgar televisores, elegir soporte y ocultar cables.",
    textEn: "Guides for mounting TVs, choosing brackets and hiding cables.",
  },
  {
    icon: Sofa,
    titleEs: "Muebles IKEA",
    titleEn: "IKEA furniture",
    textEs: "Consejos para montar armarios, camas, cómodas y muebles de pared.",
    textEn: "Tips for assembling wardrobes, beds, drawers and wall furniture.",
  },
  {
    icon: Plug,
    titleEs: "Electricidad básica",
    titleEn: "Basic electrical",
    textEs: "Lámparas, enchufes, interruptores, tiras LED y pequeños cambios.",
    textEn: "Lights, sockets, switches, LED strips and small replacements.",
  },
  {
    icon: Hammer,
    titleEs: "Pladur y paredes",
    titleEn: "Drywall and walls",
    textEs: "Agujeros, grietas, tacos, paredes dañadas y preparación para pintar.",
    textEn: "Holes, cracks, anchors, damaged walls and paint preparation.",
  },
  {
    icon: Umbrella,
    titleEs: "Toldos",
    titleEn: "Awnings",
    textEs: "Instalación de toldos para balcón, terraza, patio y Leroy Merlin.",
    textEn: "Awning installation for balconies, terraces, patios and Leroy Merlin.",
  },
  {
    icon: Paintbrush,
    titleEs: "Pintura y retoques",
    titleEn: "Painting and touch-ups",
    textEs: "Pequeñas reparaciones, desperfectos, agujeros y pintura puntual.",
    textEn: "Small repairs, wall damage, holes and paint touch-ups.",
  },
];

const articles = [
  {
    href: "como-elegir-soporte-tv",
    categoryEs: "TV",
    categoryEn: "TV",
    titleEs: "Cómo elegir un soporte para TV",
    titleEn: "How to choose a TV wall mount",
    textEs: "Diferencias entre soporte fijo, inclinable y articulado antes de comprar.",
    textEn: "Differences between fixed, tilting and full-motion mounts before buying.",
    icon: Tv,
  },
  {
    href: "que-tacos-usar-en-pladur",
    categoryEs: "Pladur",
    categoryEn: "Drywall",
    titleEs: "Qué tacos usar en una pared de pladur",
    titleEn: "Which anchors to use on drywall",
    textEs: "Guía rápida para evitar que estanterías, muebles o soportes se suelten.",
    textEn: "Quick guide to prevent shelves, furniture or brackets from coming loose.",
    icon: Drill,
  },
  {
    href: "como-tapar-agujeros-pared",
    categoryEs: "Paredes",
    categoryEn: "Walls",
    titleEs: "Cómo tapar agujeros en la pared",
    titleEn: "How to fill holes in a wall",
    textEs: "Pasos básicos para reparar agujeros pequeños antes de pintar.",
    textEn: "Basic steps to repair small holes before painting.",
    icon: Brush,
  },
  {
    href: "cuanto-cuesta-instalar-toldo-valencia",
    categoryEs: "Toldos",
    categoryEn: "Awnings",
    titleEs: "Cuánto cuesta instalar un toldo en Valencia",
    titleEn: "How much awning installation costs in Valencia",
    textEs: "Factores que cambian el precio: tamaño, pared, altura y tipo de toldo.",
    textEn: "Factors that affect price: size, wall, height and awning type.",
    icon: Umbrella,
  },
  {
    href: "errores-al-montar-muebles-ikea",
    categoryEs: "Muebles",
    categoryEn: "Furniture",
    titleEs: "Errores comunes al montar muebles IKEA",
    titleEn: "Common mistakes when assembling IKEA furniture",
    textEs: "Qué revisar antes de montar armarios, cómodas, camas o muebles de TV.",
    textEn: "What to check before assembling wardrobes, drawers, beds or TV units.",
    icon: Sofa,
  },
  {
    href: "como-preparar-piso-para-alquilar",
    categoryEs: "Alquiler",
    categoryEn: "Rental",
    titleEs: "Cómo preparar un piso para alquilar",
    titleEn: "How to prepare an apartment for rent",
    textEs: "Pequeños arreglos que ayudan a entregar una vivienda en mejor estado.",
    textEn: "Small fixes that help deliver a property in better condition.",
    icon: Home,
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  const title = isEs
    ? "Guías de Reparaciones e Instalaciones en Valencia | THEVULGO"
    : "Repair and Installation Guides in Valencia | THEVULGO";

  const description = isEs
    ? "Guías prácticas sobre TV, muebles IKEA, pladur, electricidad básica, toldos, pintura y pequeñas reparaciones del hogar en Valencia."
    : "Practical guides about TV mounting, IKEA furniture, drywall, basic electrical, awnings, painting and small home repairs in Valencia.";

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/${slug}`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function GuiasPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = isEs ? whatsappTextEs : whatsappTextEn;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    whatsappText
  )}`;

  const pageUrl = `${baseUrl}/${locale}/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: isEs
        ? "Guías de reparaciones e instalaciones en Valencia"
        : "Repair and installation guides in Valencia",
      description: isEs
        ? "Centro de guías prácticas de THEVULGO para reparaciones, instalaciones y mantenimiento del hogar."
        : "THEVULGO practical guide center for home repairs, installations and maintenance.",
      url: pageUrl,
      publisher: {
        "@type": "Organization",
        name: "THEVULGO",
        url: baseUrl,
      },
    },
    {
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
          name: isEs ? "Guías" : "Guides",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_36%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
                <BookOpen className="h-4 w-4" />
                {isEs ? "Centro de guías THEVULGO" : "THEVULGO guide center"}
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {isEs
                  ? "Guías de reparaciones e instalaciones en Valencia"
                  : "Repair and installation guides in Valencia"}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
                {isEs
                  ? "Consejos prácticos sobre TV, muebles, pladur, electricidad básica, toldos, pintura y pequeñas reparaciones del hogar. Aprende qué revisar antes de comprar, instalar o reparar."
                  : "Practical advice about TV mounting, furniture, drywall, basic electrical work, awnings, painting and small home repairs. Learn what to check before buying, installing or repairing."}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  {isEs ? "Necesito ayuda en Valencia" : "I need help in Valencia"}
                </a>

                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  {isEs ? "Ver servicios" : "View services"}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  isEs ? "Guías prácticas" : "Practical guides",
                  isEs ? "Consejos antes de comprar" : "Tips before buying",
                  isEs ? "Enlaces a servicios reales" : "Links to real services",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <BadgeCheck className="h-5 w-5 text-amber-300" />
                    <span className="text-sm text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-3 rounded-2xl bg-neutral-900 px-5 py-4 text-neutral-400">
              <Search className="h-5 w-5 text-amber-300" />
              <span>
                {isEs
                  ? "Busca por tema: TV, pladur, toldos, IKEA, electricidad, pintura..."
                  : "Search by topic: TV, drywall, awnings, IKEA, electrical, painting..."}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-300">
                <Sparkles className="h-4 w-4 text-amber-300" />
                {isEs ? "Categorías" : "Categories"}
              </div>

              <h2 className="text-3xl font-bold tracking-tight">
                {isEs ? "Explora por tipo de trabajo" : "Explore by work type"}
              </h2>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.titleEs}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {isEs ? category.titleEs : category.titleEn}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {isEs ? category.textEs : category.textEn}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-300">
                  <Star className="h-4 w-4 text-amber-300" />
                  {isEs ? "Artículos destacados" : "Featured articles"}
                </div>

                <h2 className="text-3xl font-bold tracking-tight">
                  {isEs ? "Guías nuevas y populares" : "New and popular guides"}
                </h2>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => {
                const Icon = article.icon;

                return (
                  <Link
                    key={article.href}
                    href={`/${locale}/guias/${article.href}`}
                    className="group rounded-3xl border border-white/10 bg-neutral-950 p-6 transition hover:border-amber-400/30 hover:bg-white/[0.04]"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300">
                        {isEs ? article.categoryEs : article.categoryEn}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold group-hover:text-amber-200">
                      {isEs ? article.titleEs : article.titleEn}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-neutral-400">
                      {isEs ? article.textEs : article.textEn}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                      {isEs ? "Leer guía" : "Read guide"}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                titleEs: "Antes de comprar",
                titleEn: "Before buying",
                textEs:
                  "Qué revisar antes de comprar soportes, toldos, muebles, lámparas o accesorios.",
                textEn:
                  "What to check before buying brackets, awnings, furniture, lights or accessories.",
              },
              {
                icon: ShieldCheck,
                titleEs: "Antes de instalar",
                titleEn: "Before installing",
                textEs:
                  "Pared, peso, medidas, tacos, herramientas y errores que conviene evitar.",
                textEn:
                  "Wall, weight, measurements, anchors, tools and mistakes to avoid.",
              },
              {
                icon: Wrench,
                titleEs: "Cuándo pedir ayuda",
                titleEn: "When to ask for help",
                textEs:
                  "Si el trabajo puede dañar la pared, instalación eléctrica o mueble, mejor revisarlo antes.",
                textEn:
                  "If the job may damage the wall, electrical setup or furniture, it is better to check first.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.titleEs}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {isEs ? item.titleEs : item.titleEn}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {isEs ? item.textEs : item.textEn}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-t border-white/10 bg-neutral-900">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold">
                    {isEs
                      ? "¿Prefieres que lo hagamos por ti?"
                      : "Prefer us to do it for you?"}
                  </h2>

                  <p className="mt-4 max-w-2xl text-neutral-300">
                    {isEs
                      ? "Si necesitas instalar, montar, reparar o preparar una vivienda en Valencia, envíanos fotos por WhatsApp y te damos presupuesto."
                      : "If you need installation, assembly, repair or property preparation in Valencia, send us photos by WhatsApp and we will quote it."}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}