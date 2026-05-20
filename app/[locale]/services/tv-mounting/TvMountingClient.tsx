"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  Tv,
  Monitor,
  Cable,
  Speaker,
  Square,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export default function TvMountingClient() {
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=tv-mounting`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para montaje de TV o instalaciones de pared en Valencia."
      : "Hi! I’d like an estimate for TV mounting or wall installations in Valencia."
  );

  const whatsappHref = `https://wa.me/34610076942?text=${whatsappText}`;

  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs
      ? "Montaje de TV e instalaciones de pared"
      : "TV Mounting & Wall Installations",

    heroSubtitle: isEs
      ? "Instalaciones limpias y seguras para televisores, proyectores, estanterías, soundbars, ocultación de cables y media setups en Valencia. Precios claros antes de reservar. Sin desorden. Sin sorpresas."
      : "Clean, secure installations for TVs, projectors, shelves, soundbars, cable concealment and media setups in Valencia. Transparent starting prices before booking. No mess. No surprises.",

    ctaTitle: isEs
      ? "¿Necesitas un presupuesto exacto?"
      : "Need an exact estimate?",

    ctaText: isEs
      ? "Recibe un presupuesto rápido para montaje de TV, proyectores, estanterías, soundbars, ocultación de cables o instalación multimedia. Continúa al presupuesto o envía una solicitud por WhatsApp."
      : "Get a fast estimate for TV mounting, projector mounting, shelves, soundbar setups or cable concealment. Continue to the calculator or send a request directly on WhatsApp.",

    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs
      ? "Instalaciones profesionales • Valencia"
      : "Professional installations • Valencia",

    seoTitle: isEs
      ? "Servicios de montaje de TV en Valencia"
      : "TV Mounting Services in Valencia",

    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",

    whyTitle: isEs
      ? "Instalación limpia, altura correcta y sin improvisar"
      : "Clean setup, correct height, no guesswork",

    whyText: isEs
      ? "Este servicio está pensado para clientes que quieren una instalación visualmente limpia, segura y bien alineada para TV, sonido, proyector o zona multimedia."
      : "This service is designed for clients who want a visually clean, secure and well-aligned setup for TVs, soundbars, projectors or media areas.",

    faqTitle: isEs ? "Preguntas frecuentes sobre montaje de TV" : "TV Mounting FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para montar tu TV?"
      : "Ready to mount your TV?",

    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para montaje de TV, ocultación de cables, soundbar, proyector o instalación multimedia en Valencia."
      : "Send your request now and get a clear estimate for TV mounting, cable concealment, soundbar setup, projector mounting or media installation in Valencia.",

    finalNote: isEs
      ? "El precio final depende del tipo de pared, tamaño de pantalla, soporte, altura, ocultación de cables y extras."
      : "Final price depends on wall type, screen size, bracket, mounting height, cable concealment and add-ons.",
  };

  const trustPoints = [
    {
      title: isEs ? "Respuesta rápida" : "Fast response",
      text: isEs
        ? "Comunicación rápida y próximos pasos claros antes de la cita."
        : "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Acabado limpio" : "Clean finish",
      text: isEs
        ? "Alineación recta, cableado ordenado y resultado final limpio."
        : "Straight alignment, tidy cable routing and a neat final result.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Precios iniciales claros y estimación antes de perforar."
        : "Clear starting prices and estimate logic before any drilling starts.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Montaje de TV" : "TV mounting",
      desc: isEs
        ? "Instalación segura y nivelada de televisores en paredes adecuadas."
        : "Secure, level TV installation on suitable wall types.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Tv className="h-5 w-5" />,
      href: `/${locale}/montaje-tv-valencia`,
      className: "",
    },
    {
      title: isEs ? "Montaje de TV grande" : "Large TV mounting",
      desc: isEs
        ? "Instalación de TVs grandes con posicionamiento cuidadoso y fijación adecuada."
        : "Installation for larger TVs with careful positioning and suitable fixing.",
      price: isEs ? "desde €69" : "from €69",
      icon: <Monitor className="h-5 w-5" />,
      href: `/${locale}/montaje-tv-grande-valencia`,
      className: "",
    },
    {
      title: isEs ? "Instalación de estanterías" : "Shelf installation",
      desc: isEs
        ? "Montaje limpio de estanterías con anclajes adecuados y buena alineación."
        : "Clean shelf mounting with proper anchors and alignment.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Square className="h-5 w-5" />,
      href: `/${locale}/instalacion-estanterias-valencia`,
      className: "",
    },
    {
      title: isEs ? "Montaje de proyector" : "Projector mounting",
      desc: isEs
        ? "Instalación de proyector en techo o pared con alineación limpia."
        : "Ceiling or wall projector installation with clean alignment.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Monitor className="h-5 w-5" />,
      href: `/${locale}/montaje-proyector-valencia`,
      className: "",
    },
    {
      title: isEs ? "Ocultación de cables" : "Cable concealment",
      desc: isEs
        ? "Soluciones más limpias con canaletas, rutas sencillas o cable management."
        : "Cleaner look with raceways, simple routing or cable management.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Cable className="h-5 w-5" />,
      href: `/${locale}/ocultar-cables-valencia`,
      className: "",
    },
    {
      title: isEs ? "Instalación de soundbar" : "Soundbar mounting",
      desc: isEs
        ? "Soundbar, 5.1, Dolby y sistemas de audio para casa, oficina, bar o café."
        : "Soundbar, 5.1, Dolby and home audio installation for homes, offices, bars or cafés.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Speaker className="h-5 w-5" />,
      href: `/${locale}/instalar-soundbar-valencia`,
      className: "",
    },
  ];

  const whyChoose = isEs
    ? [
        "Adecuado para pisos, casas, oficinas y locales",
        "Alineación cuidadosa antes de perforar",
        "Opciones de cableado limpio disponibles",
        "Presupuesto transparente antes de reservar",
      ]
    : [
        "Suitable for apartments, homes and offices",
        "Careful alignment before drilling",
        "Clean cable routing options available",
        "Transparent estimate before booking",
      ];

  const includedItems = isEs
    ? [
        "Montaje de TV en pared para pantallas pequeñas y grandes",
        "Instalación de soporte fijo, inclinable o articulado",
        "Montaje de proyector en techo o pared",
        "Instalación de soundbar bajo TV o en pared",
        "Ocultación de cables con canaleta o ruta limpia",
        "Instalación de estanterías cerca de media setups",
      ]
    : [
        "TV wall mounting for small and large screens",
        "Fixed, tilting or full-motion bracket installation",
        "Projector ceiling or wall mounting",
        "Soundbar mounting under TVs or on wall",
        "Cable concealment with raceways or clean routing",
        "Shelf installations near media setups",
      ];

  const faqItems = [
    {
      q: isEs
        ? "¿En qué tipos de pared se puede montar una TV?"
        : "What wall types can TVs be mounted on?",
      a: isEs
        ? "Normalmente se puede montar TV en ladrillo, hormigón y pladur usando anclajes y fijaciones adecuados. Siempre se debe revisar el tipo de pared antes de perforar."
        : "TVs can usually be mounted on brick, concrete and drywall walls using the correct anchors and hardware. The wall type should always be checked before drilling.",
    },
    {
      q: isEs
        ? "¿A qué altura debería montarse una TV?"
        : "How high should a TV be mounted?",
      a: isEs
        ? "En la mayoría de salones, el centro de la TV debe quedar cerca del nivel de los ojos cuando estás sentado. La altura ideal también depende del tamaño de pantalla y distancia de visión."
        : "In most living rooms, the center of the TV should be close to eye level when seated. The ideal height also depends on screen size and viewing distance.",
    },
    {
      q: isEs
        ? "¿Se pueden ocultar los cables durante la instalación?"
        : "Can cables be hidden during installation?",
      a: isEs
        ? "Sí. La ocultación de cables se puede hacer con canaleta exterior, rutas limpias o soluciones más discretas según la pared, enchufes y dispositivos."
        : "Yes. Cable concealment can be done with surface raceways or hidden routing depending on the wall structure and setup conditions.",
    },
    {
      q: isEs
        ? "¿Tengo que tener el soporte de TV?"
        : "Do I need to provide the bracket?",
      a: isEs
        ? "No siempre. Si ya tienes un soporte compatible, se puede instalar. Si no, podemos ayudarte a elegir una opción adecuada antes del trabajo."
        : "Not always. If you already have a compatible bracket, it can be installed. If not, suitable mounting options can be discussed before the job.",
    },
    {
      q: isEs
        ? "¿Instalan soundbars y sistemas de sonido?"
        : "Do you install soundbars and sound systems?",
      a: isEs
        ? "Sí. Podemos instalar soundbars, altavoces básicos, sistemas 5.1 y preparar una zona de sonido más limpia para casa, oficina, bar o café."
        : "Yes. We can install soundbars, basic speakers, 5.1 systems and cleaner audio setups for homes, offices, bars or cafés.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
          <div className="absolute right-10 top-24 h-[320px] w-[320px] rounded-full bg-yellow-100/60 blur-3xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              {copy.badge}
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black">
              {copy.heroTitle}
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              {copy.heroSubtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                  {point.icon}
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-black">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-7">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`group rounded-2xl border border-yellow-400 bg-white p-7 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[220px] ${service.className || ""}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {service.icon}
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-black">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-700">
                    {service.desc}
                  </p>

                  <div className="mt-4 text-sm font-extrabold text-yellow-500">
                    {service.price}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-black opacity-0 transition group-hover:opacity-100">
                    {isEs ? "Ver servicio" : "Open service"}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                  {copy.ctaTitle}
                </h2>
                <p className="mt-3 text-gray-600 leading-8">{copy.ctaText}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={estimateHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                >
                  {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <div className="w-full rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 lg:p-12 shadow-xl">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-semibold text-black">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    {copy.seoBadge}
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  {copy.seoTitle}
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  {isEs ? (
                    <>
                      <p>
                        Servicios profesionales de{" "}
                        <strong>montaje de TV en Valencia</strong> para pisos,
                        casas, oficinas y locales. THEVULGO instala televisores,
                        proyectores, estanterías, soundbars y soluciones de cableado
                        con alineación precisa y acabado limpio.
                      </p>

                      <p>
                        Una TV bien montada mejora la seguridad, la comodidad de
                        visualización y el aspecto de toda la habitación. Una instalación
                        incorrecta puede dañar la pared, dejar cables desordenados o crear
                        una posición incómoda para ver la pantalla.
                      </p>

                      <p>
                        Esta categoría es ideal para montaje de TV estándar, TVs grandes,
                        ocultación de cables, instalación de soportes, soundbars, proyectores
                        y pequeños elementos multimedia.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>TV mounting services in Valencia</strong> for
                        apartments, homes, offices and commercial spaces. THEVULGO installs
                        televisions, projectors, shelves, soundbars and cable management
                        solutions with precise alignment and clean finishing.
                      </p>

                      <p>
                        A correctly mounted TV improves safety, viewing comfort and the
                        overall look of the room. Poor installation can damage walls,
                        leave cables messy or create an uncomfortable viewing position.
                      </p>

                      <p>
                        This category is ideal for standard TV mounting, large TVs,
                        cable concealment, bracket installation, soundbars, projectors
                        and small media setup tasks.
                      </p>
                    </>
                  )}
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    {copy.includedTitle}
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    {includedItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  {isEs ? (
                    <>
                      <p>
                        Cada instalación se mide con cuidado para conseguir la altura
                        correcta, alineación equilibrada y un resultado visualmente limpio.
                        El objetivo es que la instalación parezca intencional y profesional,
                        no improvisada.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, con respuesta rápida y
                        comunicación clara antes de la cita.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente
                        según tipo de pared, tamaño de pantalla, soporte y complejidad.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Each installation is measured carefully to ensure the correct height,
                        balanced alignment and a visually clean finish. The goal is always
                        a result that looks intentional and professional rather than improvised.
                      </p>

                      <p>
                        THEVULGO works mainly in{" "}
                        <strong>Valencia and nearby areas</strong>, providing quick response
                        times and clear communication before the appointment.
                      </p>

                      <p>
                        Before installation begins, clients receive a transparent estimate
                        based on wall type, screen size, bracket and mounting complexity.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                  <BadgeCheck className="h-4 w-4" />
                  {copy.whyBadge}
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-black">
                  {copy.whyTitle}
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  {copy.whyText}
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-gray-700 text-[15px] sm:text-base">
                  {whyChoose.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-[2px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href={estimateHref}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                  >
                    {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-10 text-center sm:text-left">
                  {copy.faqTitle}
                </h2>

                <div className="space-y-8">
                  {faqItems.map((item, index) => (
                    <div
                      key={item.q}
                      className={index === 0 ? "" : "border-t border-gray-200 pt-6"}
                    >
                      <h3 className="font-extrabold text-black text-lg">
                        {item.q}
                      </h3>
                      <p className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                    {copy.finalCtaTitle}
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    {copy.finalCtaText}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={estimateHref}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                  >
                    {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 text-center text-sm text-gray-500">
            {copy.finalNote}
          </div>
        </div>
      </section>
    </div>
  );
}