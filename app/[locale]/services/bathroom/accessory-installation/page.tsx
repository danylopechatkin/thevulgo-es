import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Bath,
  ShieldCheck,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
  Drill,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://www.thevulgo.es";
const phoneNumber = "34610076942";
const pagePath = "/services/bathroom/accessory-installation";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Instalación de Accesorios de Baño | Desde 29€ | THEVULGO"
      : "Bathroom Accessory Installation | From €29 | THEVULGO",
    description: isEs
      ? "Instalación de accesorios de baño desde 29€. Montaje de soportes, barras, ganchos, portarrollos, toalleros y pequeños accesorios de pared."
      : "Bathroom accessory installation from €29. Mounting holders, rails, hooks, towel bars and practical wall-mounted bathroom fittings.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalación de Accesorios de Baño | THEVULGO"
        : "Bathroom Accessory Installation | THEVULGO",
      description: isEs
        ? "Montaje limpio de accesorios pequeños de baño, soportes, barras, ganchos y elementos de pared."
        : "Clean mounting of small bathroom accessories, holders, rails, hooks and wall-mounted fittings.",
      url: `${siteUrl}/${locale}${pagePath}`,
      siteName: "THEVULGO",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

const serviceAreas = [
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

const faqs = [
  {
    q: "¿Cuánto cuesta instalar accesorios de baño?",
    a: "La instalación de accesorios de baño empieza desde 29€. El precio depende del número de piezas, tipo de pared, azulejo, fijaciones, ubicación y dificultad del montaje.",
  },
  {
    q: "¿Qué accesorios de baño pueden instalar?",
    a: "Podemos instalar soportes, barras, ganchos, portarrollos, toalleros, estantes pequeños, perchas, organizadores y accesorios de pared compatibles.",
  },
  {
    q: "¿Instalan accesorios sobre azulejo?",
    a: "Sí. Podemos instalar accesorios sobre azulejo si la superficie es adecuada. Revisamos la zona antes de perforar para evitar problemas innecesarios.",
  },
  {
    q: "¿Pueden instalar accesorios adhesivos?",
    a: "Sí. Podemos colocar accesorios adhesivos cuando el producto y la superficie son adecuados. También instalamos accesorios atornillados.",
  },
  {
    q: "¿Pueden instalar varios accesorios en una sola visita?",
    a: "Sí. Es la mejor opción si tienes varios accesorios pequeños. Podemos agrupar toallero, portarrollos, ganchos, estantes y soportes en una misma visita.",
  },
  {
    q: "¿Necesito comprar los accesorios antes?",
    a: "Sí, lo ideal es tener los accesorios comprados antes de la visita. Puedes enviarnos fotos o enlaces para revisar si parecen compatibles.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Envíanos fotos del baño, fotos de los accesorios, número de piezas, zona donde quieres instalarlos y tipo de pared o azulejo.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function BathroomAccessoryInstallationPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para instalación de accesorios de baño."
      : "Hi, I would like a quote for bathroom accessory installation."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalación de Accesorios de Baño"
      : "Bathroom Accessory Installation",
    serviceType: "Bathroom accessory installation",
    provider: {
      "@type": "LocalBusiness",
      name: "THEVULGO",
      url: siteUrl,
      telephone: "+34610076942",
      areaServed: "Valencia",
    },
    areaServed: serviceAreas,
    offers: {
      "@type": "Offer",
      price: "29",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "THEVULGO",
    url: siteUrl,
    telephone: "+34610076942",
    areaServed: "Valencia",
    priceRange: "€€",
    description:
      "Instalación de accesorios de baño, toalleros, portarrollos, ganchos, estantes, espejos, muebles, luces y servicios handyman en Valencia.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bathroom",
        item: `${siteUrl}/${locale}/services/bathroom`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: isEs
          ? "Instalación de Accesorios de Baño"
          : "Bathroom Accessory Installation",
        item: `${siteUrl}/${locale}${pagePath}`,
      },
    ],
  };

  return (
    <main className="bg-white text-neutral-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden border-b border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-black text-neutral-900 shadow-sm">
              <MapPin className="h-4 w-4 text-yellow-600" />
              Soportes, barras, ganchos y accesorios de baño
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalación de accesorios de baño
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Instalación de pequeños accesorios de baño como soportes, barras,
              ganchos, portarrollos, toalleros y elementos de pared con
              separación limpia y posición práctica.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300"
              >
                Pedir presupuesto por WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href={`tel:+${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400"
              >
                Llamar ahora
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {[
                "Desde 29€",
                "Soportes y barras",
                "Ganchos y portarrollos",
                "Accesorios de pared",
                "Montaje limpio",
                "Valencia y alrededores",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-white p-4 shadow-2xl md:p-6">
            <div className="rounded-2xl bg-yellow-400 p-8 text-black shadow-md">
              <Bath className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Bathroom accessories. Clean spacing. Practical placement.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la pared, marcamos la posición, instalamos los
                accesorios y dejamos el baño más cómodo y ordenado.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Clean spacing", "Separación visual más ordenada"],
                ["Practical placement", "Posición cómoda para uso diario"],
                ["Wall-mounted fittings", "Soportes, barras y ganchos"],
                ["Fast estimate", "Presupuesto rápido por WhatsApp"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm"
                >
                  <p className="font-black">{title}</p>
                  <p className="mt-1 text-sm text-neutral-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Fijación segura",
              text: "Revisamos pared, azulejo, accesorio y fijaciones antes de instalar.",
            },
            {
              icon: Ruler,
              title: "Posición práctica",
              text: "Buscamos una ubicación cómoda para el uso diario del baño.",
            },
            {
              icon: Drill,
              title: "Montaje limpio",
              text: "Marcado, perforación o colocación adhesiva según el producto.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 29€. Presupuesto según fotos, piezas y dificultad.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm"
            >
              <item.icon className="h-8 w-8 text-yellow-500" />
              <h2 className="mt-4 text-xl font-black">{item.title}</h2>
              <p className="mt-2 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Instalación de accesorios pequeños de baño
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos instalación de accesorios de baño para
            viviendas, apartamentos, pisos de alquiler, baños pequeños y aseos
            que necesitan una mejora práctica, ordenada y visualmente limpia.
          </p>

          <p>
            Antes de instalar revisamos el tipo de accesorio, el sistema de
            fijación, la pared, el azulejo, la altura, el espacio disponible y la
            comodidad de uso. Esto ayuda a evitar accesorios mal colocados,
            torcidos o incómodos en el día a día.
          </p>

          <p>
            Podemos instalar varios accesorios en una sola visita: toalleros,
            portarrollos, ganchos, barras, estantes pequeños, soportes,
            organizadores, espejos, luces y pequeños elementos de pared.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye la instalación?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión de accesorios y piezas",
              "Comprobación de pared o azulejo",
              "Medición de altura y separación",
              "Marcado de posición práctica",
              "Perforación si hace falta",
              "Montaje atornillado o adhesivo",
              "Nivelación y alineación visual",
              "Revisión de estabilidad",
              "Presupuesto claro antes del trabajo",
            ].map((item) => (
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

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="mb-8 text-3xl font-black md:text-4xl">
          Tipos de accesorios que podemos instalar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Toalleros y barras",
              text: "Montaje de barras, soportes y accesorios para toallas.",
            },
            {
              title: "Portarrollos y soportes",
              text: "Instalación de portarrollos y soportes pequeños de pared.",
            },
            {
              title: "Ganchos y perchas",
              text: "Colocación de ganchos individuales o múltiples para uso diario.",
            },
            {
              title: "Accesorios combinados",
              text: "Instalación de varios accesorios pequeños en una visita organizada.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Bath className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿Dónde se pueden instalar accesorios de baño?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Baño principal",
            "Aseo pequeño",
            "Zona de lavabo",
            "Zona de ducha",
            "Apartamento de alquiler",
            "Baño recién equipado",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm"
            >
              <Home className="h-7 w-7 text-yellow-500" />
              <p className="mt-3 font-bold">{item}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-lg leading-8 text-neutral-700">
          Si tienes varios accesorios, envíanos fotos del baño y de cada pieza.
          Podemos organizar el montaje para que todo quede alineado, cómodo y con
          mejor acabado visual.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 29€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para instalar accesorios de baño
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del número de accesorios, tipo de pared, azulejo,
            sistema de fijación, ubicación y dificultad. Envíanos fotos y te
            damos un presupuesto claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Número de accesorios",
                "Tipo de accesorio",
                "Pared o azulejo",
                "Sistema adhesivo o atornillado",
                "Altura y posición",
                "Tiempo de instalación",
                "Otros trabajos de baño",
                "Distancia fuera de Valencia",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105"
          >
            Enviar fotos y pedir precio
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          Zonas donde trabajamos
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
          Realizamos instalación de accesorios de baño en Valencia ciudad y
          alrededores. Si estás fuera de Valencia, envíanos tu dirección y te
          confirmamos disponibilidad.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {serviceAreas.map((area) => (
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
            Preguntas frecuentes
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">
                  <span>{item.q}</span>
                  <HelpCircle className="h-5 w-5 shrink-0 text-yellow-500" />
                </summary>
                <p className="mt-4 leading-7 text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black md:text-4xl">
          Servicios relacionados
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Servicios de baño",
              href: `/${locale}/services/bathroom`,
            },
            {
              title: "Instalación de toallero",
              href: `/${locale}/services/bathroom/towel-holder-installation`,
            },
            {
              title: "Instalación de portarrollos",
              href: `/${locale}/services/bathroom/toilet-paper-holder-installation`,
            },
            {
              title: "Instalación de estantería de baño",
              href: `/${locale}/services/bathroom/shelf-installation`,
            },
            {
              title: "Instalación de espejo de baño",
              href: `/${locale}/services/bathroom/mirror-installation`,
            },
            {
              title: "Servicios handyman",
              href: `/${locale}/services`,
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              <p className="text-xl font-black">{item.title}</p>
              <p className="mt-3 inline-flex items-center font-bold text-neutral-700 group-hover:text-black">
                Ver servicio
                <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-4xl font-black tracking-tight">
            ¿Quieres instalar accesorios de baño?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del baño, de los accesorios, número de piezas y zona
            donde quieres instalarlos. Te damos un presupuesto claro antes de
            empezar.
          </p>

          <a
            href={whatsappUrl}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
          >
            Pedir presupuesto ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}