import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Drill,
  Euro,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Sun,
  Umbrella,
  Users,
  Wrench,
  Building2,
  ClipboardCheck,
  Zap,
  Star,
  Ruler,
  ThumbsUp,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = "https://www.thevulgo.es";
const phone = "34610076942";
const slug = "services/manitas-instalacion-toldos-valencia";

const whatsappTextEs =
  "Hola, necesito un manitas para instalar un toldo en Valencia. Quiero pedir presupuesto.";
const whatsappTextEn =
  "Hello, I need a handyman to install an awning in Valencia. I would like to request a quote.";

const areas = [
  "Valencia",
  "Ruzafa",
  "Russafa",
  "Benimaclet",
  "Campanar",
  "Patraix",
  "El Carmen",
  "Extramurs",
  "Mestalla",
  "Algirós",
  "Malvarrosa",
  "Cabanyal",
  "Mislata",
  "Burjassot",
  "Paterna",
  "Torrent",
  "Alboraya",
  "Xirivella",
];

const relatedPages = [
  {
    titleEs: "Instalación de toldos en Valencia",
    titleEn: "Awning installation in Valencia",
    href: "/services/instalacion-toldos-valencia",
  },
  {
    titleEs: "Montaje de toldos en Valencia",
    titleEn: "Awning mounting in Valencia",
    href: "/services/montaje-toldos-valencia",
  },
  {
    titleEs: "Instalar un toldo en Valencia",
    titleEn: "Install an awning in Valencia",
    href: "/services/instalar-toldo-valencia",
  },
  {
    titleEs: "Instalador de toldos en Valencia",
    titleEn: "Awning installer in Valencia",
    href: "/services/instalador-toldos-valencia",
  },
];

const faqsEs = [
  {
    question: "¿Cuánto cuesta un manitas para instalar un toldo?",
    answer:
      "El servicio de manitas para instalar toldos en Valencia empieza desde 145 €. El precio final depende del tamaño del toldo, tipo de pared, altura, acceso y si hace falta una segunda persona.",
  },
  {
    question: "¿Puedo contratar un manitas si ya compré el toldo?",
    answer:
      "Sí. Si ya tiene el toldo comprado, puede contratar solo la instalación. Podemos instalar modelos de Leroy Merlin, Naterial, Calima, Amazon y otras tiendas.",
  },
  {
    question: "¿El manitas puede hacer otros trabajos el mismo día?",
    answer:
      "Sí. Además de instalar el toldo, también podemos ayudar con montaje de TV, muebles, lámparas, estanterías, barras de cortina y pequeñas reparaciones.",
  },
  {
    question: "¿Hace falta enviar fotos antes?",
    answer:
      "Sí, es recomendable. Con fotos del lugar, medidas del toldo y modelo o enlace podemos preparar un presupuesto rápido por WhatsApp.",
  },
  {
    question: "¿Instaláis toldos grandes?",
    answer:
      "Sí. Para toldos grandes o pesados puede hacer falta una segunda persona para sujetar el toldo durante la instalación.",
  },
];

const faqsEn = [
  {
    question: "How much does a handyman cost to install an awning?",
    answer:
      "Handyman awning installation in Valencia starts from €145. The final price depends on awning size, wall type, height, access and whether a second person is needed.",
  },
  {
    question: "Can I hire a handyman if I already bought the awning?",
    answer:
      "Yes. If you already bought the awning, you can hire only the installation. We can install models from Leroy Merlin, Naterial, Calima, Amazon and other stores.",
  },
  {
    question: "Can the handyman do other jobs the same day?",
    answer:
      "Yes. Besides installing the awning, we can also help with TV mounting, furniture assembly, lights, shelves, curtain rods and small home repairs.",
  },
  {
    question: "Should I send photos before?",
    answer:
      "Yes, it is recommended. With photos of the place, awning measurements and product model or link, we can prepare a fast quote by WhatsApp.",
  },
  {
    question: "Do you install large awnings?",
    answer:
      "Yes. Large or heavy awnings may require a second person to hold the awning during installation.",
  },
];

function getContent(locale: string) {
  const isEs = locale === "es";

  return {
    isEs,
    title: isEs
      ? "Manitas para Instalar Toldos en Valencia | Desde 145€ | THEVULGO"
      : "Handyman for Awning Installation in Valencia | From €145 | THEVULGO",
    description: isEs
      ? "Manitas para instalar toldos en Valencia desde 145€. Instalación de toldos manuales, Leroy Merlin, Naterial y Calima. También pequeños trabajos del hogar."
      : "Handyman for awning installation in Valencia from €145. Manual awnings, Leroy Merlin, Naterial and Calima models. Also small home jobs.",
    h1: isEs
      ? "Manitas para Instalar Toldos en Valencia"
      : "Handyman for Awning Installation in Valencia",
    heroText: isEs
      ? "¿Ya compró el toldo y necesita un manitas para instalarlo? Podemos montarlo de forma segura y también ayudarle con otros pequeños trabajos del hogar el mismo día."
      : "Already bought the awning and need a handyman to install it? We can mount it safely and also help with other small home jobs on the same day.",
    whatsappText: isEs ? whatsappTextEs : whatsappTextEn,
    faqs: isEs ? faqsEs : faqsEn,
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
      languages: {
        es: `${baseUrl}/es/${slug}`,
        en: `${baseUrl}/en/${slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `${baseUrl}/${locale}/${slug}`,
      siteName: "THEVULGO Valencia",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function ManitasInstalacionToldosValenciaPage({
  params,
}: Props) {
  const { locale } = await params;
  const content = getContent(locale);

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    content.whatsappText
  )}`;

  const pageUrl = `${baseUrl}/${locale}/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "THEVULGO Valencia",
      url: baseUrl,
      telephone: `+${phone}`,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Valencia",
        addressRegion: "Valencia",
        addressCountry: "ES",
      },
      areaServed: areas.map((area) => ({
        "@type": "City",
        name: area,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: content.isEs
        ? "Manitas para instalar toldos en Valencia"
        : "Handyman for awning installation in Valencia",
      serviceType: content.isEs
        ? "Manitas instalación de toldos"
        : "Handyman awning installation",
      provider: {
        "@type": "LocalBusiness",
        name: "THEVULGO Valencia",
      },
      areaServed: {
        "@type": "City",
        name: "Valencia",
      },
      offers: {
        "@type": "Offer",
        price: "145",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: content.isEs ? "Inicio" : "Home",
          item: `${baseUrl}/${locale}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: content.isEs ? "Servicios" : "Services",
          item: `${baseUrl}/${locale}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: content.isEs
            ? "Manitas para instalar toldos en Valencia"
            : "Handyman for awning installation in Valencia",
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

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-yellow-50/60 to-white">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-5 py-3 text-sm font-black text-neutral-900 shadow-sm">
                <MapPin className="h-4 w-4 text-yellow-600" />
                {content.isEs
                  ? "Manitas en Valencia"
                  : "Handyman in Valencia"}
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-neutral-950 md:text-7xl">
                {content.isEs ? (
                  <>
                    Manitas para Instalar Toldos{" "}
                    <span className="text-yellow-500">en Valencia</span>
                  </>
                ) : (
                  <>
                    Handyman for Awning Installation{" "}
                    <span className="text-yellow-500">in Valencia</span>
                  </>
                )}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
                {content.heroText}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 text-base font-black text-neutral-950 shadow-lg shadow-yellow-400/30 transition hover:bg-yellow-300"
                >
                  {content.isEs
                    ? "Solicitar presupuesto"
                    : "Request a quote"}
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href={`tel:+${phone}`}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-8 py-4 text-base font-black text-neutral-950 shadow-sm transition hover:border-neutral-950"
                >
                  {content.isEs ? "Llamar ahora" : "Call now"}
                </a>
              </div>
                            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  content.isEs ? "Desde 145€" : "From €145",
                  content.isEs
                    ? "Toldos manuales y eléctricos"
                    : "Manual and electric awnings",
                  content.isEs
                    ? "También otros trabajos del hogar"
                    : "Also other home jobs",
                  "Leroy Merlin · Naterial · Calima",
                  content.isEs
                    ? "Valencia y alrededores"
                    : "Valencia and nearby areas",
                  content.isEs
                    ? "Presupuesto rápido por WhatsApp"
                    : "Fast quote by WhatsApp",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold text-neutral-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-400 bg-white p-6 shadow-2xl shadow-neutral-900/10">
              <div className="rounded-3xl bg-yellow-400 p-8 text-neutral-950 shadow-lg">
                <Wrench className="h-12 w-12" />
                <p className="mt-8 text-sm font-black uppercase tracking-[0.2em]">
                  THEVULGO HANDYMAN
                </p>
                <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl">
                  {content.isEs
                    ? "Instalamos su toldo y podemos resolver más cosas el mismo día."
                    : "We install your awning and can solve more things the same day."}
                </h2>
                <p className="mt-6 text-lg leading-8">
                  {content.isEs
                    ? "Si necesita colgar una TV, montar muebles, instalar lámparas o hacer pequeñas reparaciones, puede pedirlo junto con el toldo."
                    : "If you need TV mounting, furniture assembly, light installation or small repairs, you can request it together with the awning."}
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Clock3,
                    title: content.isEs ? "Respuesta rápida" : "Fast reply",
                    text: content.isEs ? "Por WhatsApp" : "By WhatsApp",
                  },
                  {
                    icon: Euro,
                    title: content.isEs ? "Precio claro" : "Clear price",
                    text: content.isEs
                      ? "Antes del trabajo"
                      : "Before the job",
                  },
                  {
                    icon: Drill,
                    title: content.isEs ? "Herramientas" : "Tools",
                    text: content.isEs
                      ? "Para instalación"
                      : "For installation",
                  },
                  {
                    icon: ShieldCheck,
                    title: content.isEs ? "Seguro" : "Safe",
                    text: content.isEs
                      ? "Montaje nivelado"
                      : "Level mounting",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-yellow-300 bg-yellow-50/70 p-5"
                    >
                      <Icon className="mb-4 h-6 w-6 text-yellow-600" />
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-2 text-sm text-neutral-600">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                  {content.isEs ? "Precio del manitas" : "Handyman price"}
                </p>
                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  {content.isEs
                    ? "Manitas para toldos desde 145€"
                    : "Handyman for awnings from €145"}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                  {content.isEs
                    ? "El precio depende del tamaño del toldo, tipo de pared, altura, acceso y si además quiere aprovechar la visita para otros trabajos pequeños."
                    : "The price depends on awning size, wall type, height, access and whether you also want to use the visit for other small jobs."}
                </p>
              </div>

              <div className="rounded-[2rem] border border-yellow-400/40 bg-white/5 p-6">
                <div className="rounded-3xl bg-yellow-400 p-7 text-neutral-950">
                  <p className="text-sm font-black uppercase tracking-[0.2em]">
                    {content.isEs ? "Desde" : "From"}
                  </p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-7xl font-black leading-none">
                      145€
                    </span>
                    <span className="mb-2 text-lg font-bold">
                      {content.isEs ? "instalación" : "installation"}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-7">
                    {content.isEs
                      ? "Precio claro antes de empezar. Puede combinar varios trabajos en una sola visita."
                      : "Clear price before starting. You can combine several jobs in one visit."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: content.isEs
                    ? "Instalar toldo"
                    : "Install awning",
                  price: content.isEs ? "desde 145€" : "from €145",
                  text: content.isEs
                    ? "Para toldos con acceso cómodo, pared adecuada y montaje estándar."
                    : "For awnings with easy access, suitable wall and standard mounting.",
                  icon: Umbrella,
                },
                {
                  title: content.isEs
                    ? "Toldo + otro trabajo"
                    : "Awning + extra job",
                  price: content.isEs ? "a consultar" : "on request",
                  text: content.isEs
                    ? "Puede aprovechar la visita para montar una lámpara, una estantería o revisar otra reparación."
                    : "You can use the visit to install a light, shelf or check another repair.",
                  icon: Hammer,
                },
                {
                  title: content.isEs
                    ? "Toldo grande"
                    : "Large awning",
                  price: "200€ - 280€",
                  text: content.isEs
                    ? "Los toldos pesados pueden necesitar una segunda persona para sujetarlos con seguridad."
                    : "Heavy awnings may need a second person to hold them safely.",
                  icon: Users,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                  >
                    <Icon className="h-9 w-9 text-yellow-400" />
                    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                    <p className="mt-3 text-3xl font-black text-yellow-400">
                      {item.price}
                    </p>
                    <p className="mt-4 leading-7 text-neutral-300">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-black">
                    {content.isEs
                      ? "Pida presupuesto por WhatsApp"
                      : "Request a quote by WhatsApp"}
                  </h3>
                  <p className="mt-2 max-w-3xl text-neutral-300">
                    {content.isEs
                      ? "Envíenos fotos del lugar, medidas del toldo, modelo y cualquier otro trabajo que quiera hacer el mismo día."
                      : "Send photos of the place, awning measurements, model and any other job you want to do on the same day."}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-black text-neutral-950 transition hover:bg-yellow-300"
                >
                  {content.isEs ? "Enviar fotos" : "Send photos"}
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
                <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                {content.isEs ? "Servicio manitas" : "Handyman service"}
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Instalamos toldos y otros trabajos del hogar"
                  : "We install awnings and other home jobs"}
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                {content.isEs
                  ? "Esta página está pensada para clientes que buscan un manitas práctico: instalar el toldo y, si hace falta, resolver otros pequeños trabajos en la misma visita."
                  : "This page is for clients looking for a practical handyman: install the awning and, if needed, solve other small jobs in the same visit."}
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: content.isEs
                    ? "Instalar toldos manuales"
                    : "Manual awnings",
                  text: content.isEs
                    ? "Montaje de toldos con manivela, soportes de pared y brazos extensibles."
                    : "Mounting of crank awnings, wall brackets and extendable arms.",
                  icon: Umbrella,
                },
                {
                  title: content.isEs
                    ? "Instalar toldos eléctricos"
                    : "Electric awnings",
                  text: content.isEs
                    ? "Instalación de toldos motorizados. La parte eléctrica se revisa aparte si es necesaria."
                    : "Installation of motorized awnings. Electrical work is checked separately if needed.",
                  icon: Zap,
                },
                {
                  title: content.isEs
                    ? "Toldos Leroy Merlin"
                    : "Leroy Merlin awnings",
                  text: content.isEs
                    ? "Instalamos toldos comprados en Leroy Merlin, Naterial, Calima y modelos similares."
                    : "We install awnings bought from Leroy Merlin, Naterial, Calima and similar models.",
                  icon: Store,
                },
                {
                  title: content.isEs
                    ? "Montaje de TV"
                    : "TV mounting",
                  text: content.isEs
                    ? "Puede aprovechar la visita para colgar una TV o revisar un soporte."
                    : "You can use the visit to mount a TV or check a bracket.",
                  icon: Home,
                },
                {
                  title: content.isEs
                    ? "Muebles y estanterías"
                    : "Furniture and shelves",
                  text: content.isEs
                    ? "Montaje de muebles, estanterías, barras de cortina y accesorios."
                    : "Furniture assembly, shelves, curtain rods and accessories.",
                  icon: Hammer,
                },
                {
                  title: content.isEs
                    ? "Pequeñas reparaciones"
                    : "Small repairs",
                  text: content.isEs
                    ? "Ajustes, fijaciones, lámparas, manillas y pequeñas reparaciones del hogar."
                    : "Adjustments, fixings, lights, handles and small home repairs.",
                  icon: Wrench,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100">
                      <Icon className="h-7 w-7 text-yellow-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                    <p className="mt-4 leading-7 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-yellow-50/70 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                {content.isEs ? "Antes de la visita" : "Before the visit"}
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Qué necesita saber el manitas antes de instalar el toldo"
                  : "What the handyman needs to know before installing the awning"}
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-700">
                {content.isEs
                  ? "Para preparar bien la instalación necesitamos ver el lugar, el modelo del toldo, las medidas y el acceso. Así podemos confirmar precio y evitar sorpresas."
                  : "To prepare the installation properly, we need to see the place, the awning model, measurements and access. This lets us confirm the price and avoid surprises."}
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  content.isEs
                    ? "Fotos del lugar de instalación"
                    : "Photos of the installation place",
                  content.isEs
                    ? "Medidas del toldo"
                    : "Awning measurements",
                  content.isEs
                    ? "Modelo, manual o enlace del producto"
                    : "Product model, manual or link",
                  content.isEs
                    ? "Ubicación aproximada"
                    : "Approximate location",
                  content.isEs
                    ? "Otros trabajos que quiere hacer"
                    : "Other jobs you want to do",
                  content.isEs
                    ? "Disponibilidad de día y hora"
                    : "Day and time availability",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-500" />
                    <span className="font-bold text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-300 bg-white p-7 shadow-xl">
              <div className="rounded-3xl bg-neutral-950 p-8 text-white">
                <ClipboardCheck className="h-12 w-12 text-yellow-400" />
                <h3 className="mt-7 text-3xl font-black">
                  {content.isEs
                    ? "Presupuesto rápido"
                    : "Fast quote"}
                </h3>
                <p className="mt-5 leading-8 text-neutral-300">
                  {content.isEs
                    ? "Con fotos claras podemos darle un precio orientativo o cerrado antes de organizar la visita."
                    : "With clear photos we can provide an estimated or fixed price before arranging the visit."}
                </p>
              </div>

              <div className="mt-6 grid gap-4">
                {[
                  {
                    label: content.isEs ? "Foto frontal" : "Front photo",
                    text: content.isEs
                      ? "Para ver la pared y la zona completa."
                      : "To see the wall and the full area.",
                  },
                  {
                    label: content.isEs ? "Foto lateral" : "Side photo",
                    text: content.isEs
                      ? "Para entender altura, salida y acceso."
                      : "To understand height, projection and access.",
                  },
                  {
                    label: content.isEs ? "Modelo del toldo" : "Awning model",
                    text: content.isEs
                      ? "Nombre, manual o enlace de compra."
                      : "Name, manual or purchase link.",
                  },
                  {
                    label: content.isEs ? "Lista extra" : "Extra list",
                    text: content.isEs
                      ? "Otros trabajos para aprovechar la visita."
                      : "Other jobs to use the same visit.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-neutral-200 p-5"
                  >
                    <h4 className="font-black">{item.label}</h4>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                  {content.isEs ? "Proceso" : "Process"}
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                  {content.isEs
                    ? "Cómo trabaja nuestro manitas"
                    : "How our handyman works"}
                </h2>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  {content.isEs
                    ? "Organizamos el trabajo para que la instalación del toldo sea clara, segura y útil. Si hay otros pequeños trabajos, los podemos añadir al presupuesto."
                    : "We organize the work so the awning installation is clear, safe and useful. If there are other small jobs, they can be added to the quote."}
                </p>
              </div>

              <div className="grid gap-5">
                {[
                  {
                    step: "01",
                    title: content.isEs
                      ? "Mensaje por WhatsApp"
                      : "WhatsApp message",
                    text: content.isEs
                      ? "Envía fotos, medidas y modelo del toldo."
                      : "Send photos, measurements and awning model.",
                  },
                  {
                    step: "02",
                    title: content.isEs
                      ? "Presupuesto"
                      : "Quote",
                    text: content.isEs
                      ? "Confirmamos precio y disponibilidad."
                      : "We confirm price and availability.",
                  },
                  {
                    step: "03",
                    title: content.isEs
                      ? "Revisión en el lugar"
                      : "On-site check",
                    text: content.isEs
                      ? "Comprobamos pared, altura y acceso."
                      : "We check wall, height and access.",
                  },
                  {
                    step: "04",
                    title: content.isEs
                      ? "Instalación del toldo"
                      : "Awning installation",
                    text: content.isEs
                      ? "Marcamos, perforamos, fijamos y nivelamos."
                      : "We mark, drill, fix and level.",
                  },
                  {
                    step: "05",
                    title: content.isEs
                      ? "Trabajos extra"
                      : "Extra jobs",
                    text: content.isEs
                      ? "Si acordamos otros trabajos, los hacemos en la misma visita."
                      : "If extra jobs are agreed, we do them in the same visit.",
                  },
                  {
                    step: "06",
                    title: content.isEs
                      ? "Prueba final"
                      : "Final test",
                    text: content.isEs
                      ? "Probamos apertura, cierre y estabilidad."
                      : "We test opening, closing and stability.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:grid-cols-[80px_1fr]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-2xl font-black">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 leading-7 text-neutral-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
                <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                {content.isEs ? "Zonas de servicio" : "Service areas"}
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Trabajamos en Valencia y alrededores"
                  : "We work across Valencia and nearby areas"}
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-300">
                {content.isEs
                  ? "Nos desplazamos por Valencia ciudad y municipios cercanos para instalar toldos y realizar otros trabajos de manitas."
                  : "We travel across Valencia and nearby towns to install awnings and complete other handyman jobs."}
              </p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="font-bold">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-600">
                {content.isEs ? "Servicios relacionados" : "Related services"}
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "También puede interesarle"
                  : "You may also be interested in"}
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={`/${locale}${page.href}`}
                  className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Umbrella className="h-8 w-8 text-yellow-500" />

                  <h3 className="mt-5 text-xl font-black">
                    {content.isEs ? page.titleEs : page.titleEn}
                  </h3>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-black">
                    {content.isEs ? "Ver página" : "View page"}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 md:px-10">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-500">
                FAQ
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                {content.isEs
                  ? "Preguntas frecuentes"
                  : "Frequently asked questions"}
              </h2>
            </div>

            <div className="mt-12 grid gap-5">
              {content.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="text-xl font-black">
                    {faq.question}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              ))}

              {[
                {
                  qEs: "¿También montáis muebles?",
                  aEs: "Sí. Podemos aprovechar la misma visita para montar muebles, colgar TV, instalar lámparas, estanterías y otros trabajos.",
                  qEn: "Do you also assemble furniture?",
                  aEn: "Yes. We can use the same visit to assemble furniture, mount TVs, install lights, shelves and other handyman jobs.",
                },
                {
                  qEs: "¿Trabajáis fines de semana?",
                  aEs: "Siempre que tengamos disponibilidad podemos organizar una visita también durante el fin de semana.",
                  qEn: "Do you work on weekends?",
                  aEn: "If we have availability we can also arrange weekend visits.",
                },
                {
                  qEs: "¿Puedo comprar el toldo por mi cuenta?",
                  aEs: "Sí. Nosotros realizamos únicamente la instalación si el cliente ya dispone del toldo.",
                  qEn: "Can I buy the awning myself?",
                  aEn: "Yes. We can provide installation only if you already have the awning.",
                },
                {
                  qEs: "¿Qué marcas instaláis?",
                  aEs: "Instalamos modelos de Leroy Merlin, Naterial, Calima, Amazon y otras marcas compatibles.",
                  qEn: "Which brands do you install?",
                  aEn: "We install Leroy Merlin, Naterial, Calima, Amazon and many other compatible brands.",
                },
                {
                  qEs: "¿Cuánto tarda la instalación?",
                  aEs: "Depende del tamaño del toldo y de la pared. Lo confirmamos después de revisar las fotos.",
                  qEn: "How long does installation take?",
                  aEn: "It depends on the awning size and wall type. We confirm it after reviewing the photos.",
                },
                {
                  qEs: "¿Podéis hacer varios trabajos en una visita?",
                  aEs: "Sí. Esa es una de las ventajas del servicio manitas. Podemos realizar varias tareas en la misma cita.",
                  qEn: "Can you do several jobs in one visit?",
                  aEn: "Yes. That's one of the advantages of a handyman service. We can complete several tasks in one appointment.",
                },
              ].map((faq) => (
                <div
                  key={faq.qEs}
                  className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <h3 className="text-xl font-black">
                    {content.isEs ? faq.qEs : faq.qEn}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {content.isEs ? faq.aEs : faq.aEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-400">
              <Wrench className="h-10 w-10 text-neutral-950" />
            </div>

            <h2 className="mt-8 text-4xl font-black tracking-tight md:text-6xl">
              {content.isEs
                ? "Manitas para instalar toldos desde 145€"
                : "Handyman for awning installation from €145"}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              {content.isEs
                ? "Envíenos fotos del lugar, medidas y modelo del toldo. También puede añadir cualquier otro trabajo de manitas para aprovechar la visita."
                : "Send photos of the place, measurements and awning model. You can also add any other handyman jobs to make the most of the visit."}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-black text-neutral-950 transition hover:bg-yellow-300"
              >
                {content.isEs ? "Solicitar presupuesto" : "Request a quote"}
                <MessageCircle className="h-5 w-5" />
              </a>

              <a
                href={`tel:+${phone}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-black text-white transition hover:border-yellow-400"
              >
                {content.isEs ? "Llamar ahora" : "Call now"}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}