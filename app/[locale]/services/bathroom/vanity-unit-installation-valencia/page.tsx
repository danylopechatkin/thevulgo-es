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
const pagePath = "/services/bathroom/vanity-unit-installation-valencia";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Instalación de Mueble Bajo Lavabo en Valencia | Desde 59€ | THEVULGO"
      : "Vanity Unit Installation in Valencia | From €59 | THEVULGO",
    description: isEs
      ? "Instalación de muebles bajo lavabo en Valencia desde 59€. Colocación de vanity units con alineación limpia, buena posición y acabado más ordenado alrededor del lavabo."
      : "Vanity unit installation in Valencia from €59. Bathroom vanity units fitted with clean positioning, alignment and a better final layout around the sink area.",
    alternates: {
      canonical: `${siteUrl}/${locale}${pagePath}`,
      languages: {
        es: `${siteUrl}/es${pagePath}`,
        en: `${siteUrl}/en${pagePath}`,
      },
    },
    openGraph: {
      title: isEs
        ? "Instalación de Mueble Bajo Lavabo en Valencia | THEVULGO"
        : "Vanity Unit Installation in Valencia | THEVULGO",
      description: isEs
        ? "Instalación limpia de muebles bajo lavabo y vanity units para baños en Valencia."
        : "Clean bathroom vanity unit installation around the sink area in Valencia.",
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
    q: "¿Cuánto cuesta instalar un mueble bajo lavabo en Valencia?",
    a: "La instalación de vanity unit o mueble bajo lavabo empieza desde 59€. El precio depende del tamaño, tipo de mueble, pared, lavabo, espacio disponible y dificultad del montaje.",
  },
  {
    q: "¿Instalan muebles bajo lavabo suspendidos?",
    a: "Sí. Podemos instalar muebles bajo lavabo suspendidos si la pared, el sistema de fijación y el peso del mueble son adecuados.",
  },
  {
    q: "¿Pueden instalar muebles de IKEA, Leroy Merlin o Amazon?",
    a: "Sí. Podemos montar e instalar muebles de baño y vanity units de IKEA, Leroy Merlin, Amazon, Conforama y otras tiendas.",
  },
  {
    q: "¿También conectan lavabo o fontanería?",
    a: "Podemos hacer trabajos básicos y sencillos si el sistema es compatible. Para trabajos de fontanería más complejos, revisamos el caso antes de confirmar.",
  },
  {
    q: "¿Pueden ajustar puertas y cajones?",
    a: "Sí. Podemos ajustar puertas, cajones, líneas visuales y separación para que el mueble quede más limpio y cómodo.",
  },
  {
    q: "¿Pueden hacer otros trabajos de baño en la misma visita?",
    a: "Sí. Podemos instalar espejo, estantes, toalleros, portarrollos, luz de baño, accesorios y otros pequeños trabajos en una sola visita.",
  },
  {
    q: "¿Qué necesito enviar para pedir presupuesto?",
    a: "Lo ideal es enviar fotos del baño, foto del mueble, medidas aproximadas, zona del lavabo y decir si el mueble viene montado o en caja.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function VanityUnitInstallationValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para instalación de mueble bajo lavabo en Valencia."
      : "Hi, I would like a quote for vanity unit installation in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEs
      ? "Instalación de Mueble Bajo Lavabo en Valencia"
      : "Vanity Unit Installation in Valencia",
    serviceType: "Vanity unit installation",
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
      price: "59",
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
      "Instalación de muebles bajo lavabo, vanity units, muebles de baño, espejos, estantes, accesorios y servicios handyman en Valencia.",
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
          ? "Instalación de Mueble Bajo Lavabo en Valencia"
          : "Vanity Unit Installation in Valencia",
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
              Muebles bajo lavabo y vanity units en Valencia
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalación de mueble bajo lavabo{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Instalación de vanity units y muebles bajo lavabo con atención a
              la posición, alineación y un acabado más limpio alrededor de la
              zona del lavabo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-4 font-black text-black shadow-md transition hover:scale-105 hover:bg-yellow-300">
                Pedir presupuesto por WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a href={`tel:+${phoneNumber}`} className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-4 font-black text-neutral-950 shadow-sm transition hover:scale-105 hover:border-yellow-400">
                Llamar ahora
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-2">
              {[
                "Desde 59€",
                "Mueble bajo lavabo",
                "Vanity units",
                "Alineación limpia",
                "Layout más ordenado",
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
                Vanity unit installation. Aligned. Practical. Clean finish.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Revisamos la zona del lavabo, colocamos el mueble, ajustamos la
                posición y dejamos un resultado más práctico y ordenado.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Clean layout", "Mejor acabado alrededor del lavabo"],
                ["Good positioning", "Altura y posición más prácticas"],
                ["Secure fitting", "Fijación adecuada según el caso"],
                ["Fast estimate", "Presupuesto rápido por WhatsApp"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm">
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
              title: "Instalación segura",
              text: "Revisamos pared, mueble, peso, apoyo y fijaciones antes de instalar.",
            },
            {
              icon: Ruler,
              title: "Alineación limpia",
              text: "Buscamos buena posición respecto al lavabo, espejo y pared.",
            },
            {
              icon: Drill,
              title: "Montaje práctico",
              text: "Montamos y colocamos vanity units y muebles bajo lavabo compatibles.",
            },
            {
              icon: Star,
              title: "Precio claro",
              text: "Desde 59€. Presupuesto según fotos, medidas y dificultad.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm">
              <item.icon className="h-8 w-8 text-yellow-500" />
              <h2 className="mt-4 text-xl font-black">{item.title}</h2>
              <p className="mt-2 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Instalación de vanity units y muebles bajo lavabo en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos instalación de muebles bajo lavabo en
            Valencia para baños principales, baños pequeños, apartamentos,
            viviendas de alquiler y reformas ligeras donde se necesita mejorar
            el almacenaje y el acabado visual alrededor del lavabo.
          </p>

          <p>
            Antes de instalar revisamos el espacio disponible, el tipo de mueble,
            la altura, la alineación con el lavabo, la apertura de puertas y
            cajones, la pared, el suelo y los elementos cercanos. Esto ayuda a
            conseguir un resultado más cómodo, estable y limpio.
          </p>

          <p>
            También podemos combinar este trabajo con espejo, armario con espejo,
            estantes, toalleros, portarrollos, luz de baño, sellado de juntas y
            otros pequeños ajustes para dejar el baño más completo.
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
              "Revisión del mueble y piezas",
              "Comprobación de zona del lavabo",
              "Medición de altura y posición",
              "Montaje si viene en caja",
              "Colocación del vanity unit",
              "Fijación o apoyo según el modelo",
              "Alineación visual con lavabo",
              "Ajuste básico de puertas o cajones",
              "Presupuesto claro antes del trabajo",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <p className="font-bold text-neutral-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="mb-8 text-3xl font-black md:text-4xl">
          Tipos de muebles bajo lavabo que podemos instalar
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Vanity unit suspendido",
              text: "Instalación de muebles fijados a pared cuando el soporte es adecuado.",
            },
            {
              title: "Mueble bajo lavabo de suelo",
              text: "Colocación y ajuste de unidades con apoyo en suelo para baño.",
            },
            {
              title: "Mueble con cajones",
              text: "Montaje y ajuste de cajones para uso diario y mejor organización.",
            },
            {
              title: "Mueble compacto",
              text: "Solución práctica para baños pequeños y espacios con poco almacenaje.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Bath className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Desde 59€
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Precio para instalar mueble bajo lavabo en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            El precio depende del tipo de mueble, tamaño, lavabo, si viene
            montado o en caja, pared, apoyo, puertas, cajones y dificultad.
            Envíanos fotos y te damos un presupuesto claro.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tipo de vanity unit",
                "Tamaño del mueble",
                "Zona del lavabo",
                "Montado o en caja",
                "Pared o suelo",
                "Puertas y cajones",
                "Otros accesorios",
                "Distancia fuera de Valencia",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-7 py-4 font-black text-white shadow-md transition hover:scale-105">
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
          Realizamos instalación de muebles bajo lavabo en Valencia ciudad y
          alrededores. Si estás fuera de Valencia, envíanos tu dirección y te
          confirmamos disponibilidad.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {serviceAreas.map((area) => (
            <span key={area} className="rounded-full border border-yellow-300 bg-yellow-50 px-4 py-2 font-bold text-neutral-900">
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
              <details key={item.q} className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm">
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
              title: "Instalación de mueble de baño",
              href: `/${locale}/services/bathroom/cabinet-installation-valencia`,
            },
            {
              title: "Instalación de espejo de baño",
              href: `/${locale}/services/bathroom/mirror-installation-valencia`,
            },
            {
              title: "Instalación de armario con espejo",
              href: `/${locale}/services/bathroom/mirror-cabinet-fitting-valencia`,
            },
            {
              title: "Instalación de estantería de baño",
              href: `/${locale}/services/bathroom/shelf-installation-valencia`,
            },
            {
              title: "Servicios handyman Valencia",
              href: `/${locale}/services`,
            },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="group rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
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
            ¿Quieres instalar un mueble bajo lavabo en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos fotos del baño, del mueble, zona del lavabo y medidas
            aproximadas. Te damos un presupuesto claro antes de empezar.
          </p>

          <a href={whatsappUrl} className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 font-black text-white shadow-xl transition hover:scale-105">
            Pedir presupuesto ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}