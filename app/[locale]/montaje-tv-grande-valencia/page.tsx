import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Tv,
  ShieldCheck,
  Wrench,
  Cable,
  Home,
  HelpCircle,
  MapPin,
  Star,
  Ruler,
} from "lucide-react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://thevulgo.es";
const phoneNumber = "34610076942";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Montaje de TV Grande en Valencia | 65”, 75”, 85”, 98” | THEVULGO"
      : "Large TV Mounting in Valencia | 65”, 75”, 85”, 98” | THEVULGO",
    description: isEs
      ? "Montaje profesional de televisores grandes en Valencia. Instalación segura de TVs de 65, 75, 85 y 98 pulgadas, soportes reforzados, nivelación precisa y acabado limpio."
      : "Professional large TV mounting in Valencia. Safe installation for 65, 75, 85 and 98 inch TVs, reinforced brackets, precise leveling and clean finish.",
    alternates: {
      canonical: `${siteUrl}/${locale}/montaje-tv-grande-valencia`,
      languages: {
        es: `${siteUrl}/es/montaje-tv-grande-valencia`,
      },
    },
    openGraph: {
      title: isEs
        ? "Montaje de TV Grande en Valencia | THEVULGO"
        : "Large TV Mounting in Valencia | THEVULGO",
      description: isEs
        ? "Instalación segura y limpia de televisores grandes en Valencia y alrededores."
        : "Safe and clean large TV installation in Valencia and nearby areas.",
      url: `${siteUrl}/${locale}/montaje-tv-grande-valencia`,
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
    q: "¿Cuánto cuesta montar una TV grande en Valencia?",
    a: "El precio depende del tamaño del televisor, peso, tipo de soporte, tipo de pared y dificultad de instalación. Para TVs grandes, revisamos primero las fotos y confirmamos el presupuesto antes de empezar.",
  },
  {
    q: "¿Instalan televisores de 65, 75, 85 o 98 pulgadas?",
    a: "Sí. Instalamos televisores grandes de 65, 75, 85 y 98 pulgadas, siempre comprobando el soporte, la pared, el peso y los puntos de fijación.",
  },
  {
    q: "¿Una TV grande se puede instalar en pladur?",
    a: "Sí, pero hay que revisar bien la estructura. En muchos casos buscamos montantes internos o usamos fijaciones adecuadas. No perforamos sin comprobar la seguridad.",
  },
  {
    q: "¿Qué soporte necesito para una TV grande?",
    a: "Depende del tamaño, peso y uso. Para TVs grandes recomendamos soportes de buena calidad, reforzados y compatibles con el patrón VESA del televisor.",
  },
  {
    q: "¿Pueden ocultar cables en una TV grande?",
    a: "Sí. Podemos organizar cables con canaleta exterior o estudiar una solución más limpia según la pared, enchufes y dispositivos conectados.",
  },
  {
    q: "¿Cuánto tarda montar una TV grande?",
    a: "Una instalación de TV grande suele tardar entre 60 y 120 minutos. Puede tardar más si hay canaleta, soporte articulado, pared complicada o trabajo eléctrico.",
  },
  {
    q: "¿Pueden traer el soporte?",
    a: "Sí. Podemos ayudarte a elegir el soporte correcto, comprarlo y llevarlo el día de la instalación.",
  },
  {
    q: "¿Trabajan fuera de Valencia ciudad?",
    a: "Sí. Trabajamos en Valencia y alrededores como Mislata, Burjassot, Paterna, Torrent, Sagunto, Cullera, Gandía y otras zonas cercanas.",
  },
];

export default async function LargeTvMountingValenciaPage({
  params,
}: PageProps) {
  const { locale } = await params;
  const isEs = locale === "es";

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, quiero un presupuesto para montar una TV grande en Valencia."
      : "Hi, I would like a quote for large TV mounting in Valencia."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappText}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Montaje de TV Grande en Valencia",
    serviceType: "Large TV mounting",
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
      "Montaje profesional de televisores grandes, soportes reforzados, ocultación de cables y servicios handyman en Valencia.",
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
        name: "Montaje de TV Grande en Valencia",
        item: `${siteUrl}/${locale}/montaje-tv-grande-valencia`,
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
              TVs grandes en Valencia · 65” · 75” · 85” · 98”
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Montaje de TV grande{" "}
              <span className="text-yellow-500">en Valencia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Instalación segura y profesional de televisores grandes en pared.
              Revisamos peso, soporte, tipo de pared y puntos de fijación para
              dejar tu TV grande nivelada, centrada y bien asegurada.
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
                "TVs 65”, 75”, 85” y 98”",
                "Soportes reforzados",
                "Revisión de pared y peso",
                "Nivelación precisa",
                "Ocultación de cables",
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
              <Tv className="mb-6 h-12 w-12 text-black" />
              <p className="text-sm font-black uppercase tracking-widest">
                THEVULGO Valencia
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Large TV installation. Strong. Level. Clean.
              </h2>
              <p className="mt-4 font-medium leading-7 text-neutral-900">
                Para TVs grandes no basta con colgar la pantalla. Hay que
                revisar pared, peso, soporte y seguridad antes de perforar.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Safe mounting", "Instalación segura y estable"],
                ["Big screens", "65”, 75”, 85” y 98”"],
                ["Right bracket", "Soporte correcto para el peso"],
                ["Clean finish", "Acabado limpio y ordenado"],
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
              title: "Seguridad primero",
              text: "Comprobamos pared, soporte y peso antes de instalar.",
            },
            {
              icon: Ruler,
              title: "Nivelación precisa",
              text: "La TV queda centrada, recta y cómoda para ver.",
            },
            {
              icon: Wrench,
              title: "Soporte adecuado",
              text: "Te ayudamos a elegir soporte fijo, inclinable o articulado.",
            },
            {
              icon: Cable,
              title: "Cables organizados",
              text: "Canaleta, HDMI, enchufe o solución más limpia.",
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
          Montaje profesional de televisores grandes en Valencia
        </h2>

        <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
          <p>
            En THEVULGO realizamos montaje de TV grande en Valencia para
            televisores de 65, 75, 85 y 98 pulgadas. Una pantalla grande necesita
            una instalación más cuidadosa que una TV pequeña: el peso es mayor,
            el soporte debe ser compatible y la pared tiene que aguantar bien la
            carga.
          </p>

          <p>
            Antes de perforar revisamos el tipo de pared, la distancia entre
            puntos de fijación, el patrón VESA, el peso aproximado del televisor,
            la altura ideal y la posición del sofá, cama o zona de visualización.
            El objetivo es que la TV quede segura, recta, centrada y cómoda.
          </p>

          <p>
            También podemos ayudarte con soportes reforzados, instalación de
            soportes articulados para televisores grandes, canaletas para cables,
            preparación de HDMI, soundbar, consolas, router o decodificador. Si
            tienes dudas, envíanos fotos de la pared y del soporte por WhatsApp.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Qué incluye el montaje de una TV grande?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Revisión del tipo de pared",
              "Comprobación del peso de la TV",
              "Revisión del soporte y VESA",
              "Medición y nivelación precisa",
              "Instalación segura del soporte",
              "Montaje de la TV con cuidado",
              "Organización básica de cables",
              "Comprobación final de estabilidad",
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
          Tamaños de TV que instalamos
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              title: "65 pulgadas",
              text: "Ideal para salones medianos. Requiere buena nivelación y soporte adecuado.",
            },
            {
              title: "75 pulgadas",
              text: "Pantalla grande para salón. Revisamos peso, pared y altura antes de instalar.",
            },
            {
              title: "85 pulgadas",
              text: "Instalación pesada. Recomendamos soporte reforzado y planificación cuidadosa.",
            },
            {
              title: "98 pulgadas",
              text: "Montaje especial. Necesita revisión previa, espacio suficiente y fijación segura.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-300 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">
                <Tv className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Soportes reforzados",
              text: "Para TVs grandes usamos soportes adecuados al peso y al patrón VESA.",
            },
            {
              title: "Soporte articulado",
              text: "Si quieres mover la TV, revisamos que la pared y el soporte sean adecuados.",
            },
            {
              title: "Ocultación de cables",
              text: "Podemos organizar HDMI, alimentación, soundbar, consolas y decodificadores.",
            },
            {
              title: "Instalación en pladur",
              text: "Comprobamos estructura y fijaciones antes de instalar una TV pesada.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm"
            >
              <h2 className="text-xl font-black">{item.title}</h2>
              <p className="mt-4 leading-7 text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-black">
          ¿En qué tipo de pared instalamos TVs grandes?
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Ladrillo",
            "Hormigón",
            "Pladur con revisión",
            "Paredes interiores",
            "Apartamentos",
            "Locales comerciales",
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
          Para una TV grande, la pared es una parte muy importante del trabajo.
          Si no sabes si tu pared es ladrillo, hormigón o pladur, envíanos fotos
          o vídeo por WhatsApp y te orientamos antes de la visita.
        </p>
      </section>

      <section className="bg-yellow-400 py-16 text-black">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-sm font-black uppercase tracking-widest">
            Instalación segura
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Presupuesto para TV grande en Valencia
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-neutral-900">
            Para televisores grandes, el precio depende del tamaño, peso, tipo
            de soporte, pared y dificultad. Envíanos fotos y te damos un precio
            claro antes de empezar.
          </p>

          <div className="mt-8 rounded-3xl border border-yellow-600/30 bg-white p-6 text-left shadow-xl">
            <h3 className="text-xl font-black">El precio depende de:</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Tamaño del televisor",
                "Peso de la pantalla",
                "Tipo de soporte",
                "Tipo de pared",
                "Altura de instalación",
                "Ocultación de cables",
                "Soporte articulado",
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
          Realizamos montaje de TV grande en Valencia ciudad y alrededores. Si
          estás fuera de Valencia, envíanos tu dirección y te confirmamos
          disponibilidad.
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
              title: "Montaje de TV en Valencia",
              href: `/${locale}/montaje-tv-valencia`,
            },
            {
              title: "Ocultar cables de TV",
              href: `/${locale}/ocultar-cables-tv-valencia`,
            },
            {
              title: "Instalar enchufe para TV",
              href: `/${locale}/instalar-enchufe-valencia`,
            },
            {
              title: "Instalar soundbar",
              href: `/${locale}/instalar-soundbar-valencia`,
            },
            {
              title: "Montaje Samsung Frame",
              href: `/${locale}/montaje-samsung-frame-valencia`,
            },
            {
              title: "Servicios handyman Valencia",
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
            ¿Quieres montar una TV grande en Valencia?
          </h2>
          <p className="mt-5 text-lg font-medium text-neutral-900">
            Envíanos una foto de la pared, el tamaño de la TV y el modelo del
            soporte. Te damos un presupuesto claro antes de empezar.
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