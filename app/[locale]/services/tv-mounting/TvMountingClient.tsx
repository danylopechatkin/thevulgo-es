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
  Ruler,
  Hammer,
  Layers,
  Star,
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
      ? "Instalaciones limpias y seguras para televisores, Samsung Frame, TVs grandes, proyectores, soportes, soundbars y ocultación de cables en Valencia. Precios claros antes de reservar."
      : "Clean, secure installations for TVs, Samsung Frame, large TVs, projectors, brackets, soundbars and cable concealment in Valencia. Clear prices before booking.",

    ctaTitle: isEs
      ? "¿Necesitas un presupuesto exacto?"
      : "Need an exact estimate?",

    ctaText: isEs
      ? "Recibe un presupuesto rápido para montaje de TV, Samsung Frame, TVs grandes, soporte, ocultación de cables, proyector o soundbar. Continúa al presupuesto o envía una solicitud por WhatsApp."
      : "Get a fast estimate for TV mounting, Samsung Frame, large TVs, brackets, cable concealment, projector or soundbar. Continue to the calculator or send a request on WhatsApp.",

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
      ? "Este servicio está pensado para clientes que quieren una instalación visualmente limpia, segura y bien alineada para TV, Samsung Frame, sonido, proyector o zona multimedia."
      : "This service is designed for clients who want a visually clean, secure and well-aligned setup for TVs, Samsung Frame, soundbars, projectors or media areas.",

    faqTitle: isEs ? "Preguntas frecuentes sobre montaje de TV" : "TV Mounting FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para montar tu TV?"
      : "Ready to mount your TV?",

    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para montaje de TV, Samsung Frame, TV grande, ocultación de cables, soundbar, proyector o instalación multimedia en Valencia."
      : "Send your request now and get a clear estimate for TV mounting, Samsung Frame, large TV, cable concealment, soundbar setup, projector mounting or media installation in Valencia.",

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
    },
    {
      title: isEs ? "Montaje de TV grande" : "Large TV mounting",
      desc: isEs
        ? "Instalación de TVs grandes con posicionamiento cuidadoso y fijación adecuada."
        : "Installation for larger TVs with careful positioning and suitable fixing.",
      price: isEs ? "desde €69" : "from €69",
      icon: <Monitor className="h-5 w-5" />,
      href: `/${locale}/montaje-tv-grande-valencia`,
    },
    {
      title: isEs ? "Samsung Frame" : "Samsung Frame",
      desc: isEs
        ? "Montaje Samsung Frame con One Connect Box, cable invisible y acabado tipo cuadro."
        : "Samsung Frame mounting with One Connect Box, invisible cable and picture-frame finish.",
      price: isEs ? "desde €69" : "from €69",
      icon: <Ruler className="h-5 w-5" />,
      href: `/${locale}/montaje-tv-samsung-frame-valencia`,
    },
    {
      title: isEs ? "Ocultación de cables" : "Cable concealment",
      desc: isEs
        ? "Soluciones más limpias con canaletas, rutas sencillas o cable management."
        : "Cleaner look with raceways, simple routing or cable management.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Cable className="h-5 w-5" />,
      href: `/${locale}/ocultar-cables-valencia`,
    },
    {
      title: isEs ? "Instalación de soundbar" : "Soundbar mounting",
      desc: isEs
        ? "Soundbar, 5.1, Dolby y sistemas de audio para casa, oficina, bar o café."
        : "Soundbar, 5.1, Dolby and home audio installation for homes, offices, bars or cafés.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Speaker className="h-5 w-5" />,
      href: `/${locale}/instalar-soundbar-valencia`,
    },
    {
      title: isEs ? "Montaje de proyector" : "Projector mounting",
      desc: isEs
        ? "Instalación de proyector en techo o pared con alineación limpia."
        : "Ceiling or wall projector installation with clean alignment.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Monitor className="h-5 w-5" />,
      href: `/${locale}/montaje-proyector-valencia`,
    },
  ];

  const tvSeoPages = [
    {
      title: isEs ? "Instalador TV Valencia" : "TV installer Valencia",
      desc: isEs
        ? "Servicio específico para instalar televisores en pared en Valencia."
        : "Specific service for installing TVs on walls in Valencia.",
      href: `/${locale}/instalador-tv-valencia`,
      icon: <Tv className="h-5 w-5" />,
    },
    {
      title: isEs ? "Colgar TV Valencia" : "Hang TV Valencia",
      desc: isEs
        ? "Colgar televisión en pared con soporte seguro y acabado limpio."
        : "Hang a TV on the wall with secure bracket and clean finish.",
      href: `/${locale}/colgar-tv-valencia`,
      icon: <Hammer className="h-5 w-5" />,
    },
    {
      title: isEs ? "Instalar TV en pared" : "Install TV on wall",
      desc: isEs
        ? "Instalación de TV en pared de ladrillo, hormigón o pladur."
        : "TV wall installation on brick, concrete or drywall.",
      href: `/${locale}/instalar-tv-pared-valencia`,
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: isEs ? "Instalación soporte TV" : "TV bracket installation",
      desc: isEs
        ? "Soportes fijos, inclinables y articulados para TV."
        : "Fixed, tilting and full-motion TV brackets.",
      href: `/${locale}/instalacion-soporte-tv-valencia`,
      icon: <Hammer className="h-5 w-5" />,
    },
    {
      title: isEs ? "Montaje Samsung Frame" : "Samsung Frame mounting",
      desc: isEs
        ? "Montaje Samsung Frame con One Connect Box y acabado tipo cuadro."
        : "Samsung Frame mounting with One Connect Box and picture-frame finish.",
      href: `/${locale}/montaje-tv-samsung-frame-valencia`,
      icon: <Ruler className="h-5 w-5" />,
    },
    {
      title: isEs ? "Instalar Samsung Frame" : "Install Samsung Frame",
      desc: isEs
        ? "Instalación limpia de Samsung Frame en pared con cable invisible."
        : "Clean Samsung Frame wall installation with invisible cable.",
      href: `/${locale}/instalar-samsung-frame-valencia`,
      icon: <Ruler className="h-5 w-5" />,
    },
  ];

  const tvSizePages = [
    {
      title: isEs ? "Montaje TV 65 pulgadas" : "65 inch TV mounting",
      desc: isEs
        ? "Montaje seguro para televisores de 65 pulgadas en Valencia."
        : "Safe mounting for 65 inch TVs in Valencia.",
      price: isEs ? "desde €59" : "from €59",
      href: `/${locale}/montaje-tv-65-pulgadas-valencia`,
    },
    {
      title: isEs ? "Montaje TV 75 pulgadas" : "75 inch TV mounting",
      desc: isEs
        ? "Instalación profesional para TVs grandes de 75 pulgadas."
        : "Professional installation for large 75 inch TVs.",
      price: isEs ? "desde €79" : "from €79",
      href: `/${locale}/montaje-tv-75-pulgadas-valencia`,
    },
    {
      title: isEs ? "Montaje TV 85 pulgadas" : "85 inch TV mounting",
      desc: isEs
        ? "Montaje de pantallas grandes de 85 pulgadas con revisión de pared."
        : "85 inch large screen mounting with wall check.",
      price: isEs ? "desde €99" : "from €99",
      href: `/${locale}/montaje-tv-85-pulgadas-valencia`,
    },
    {
      title: isEs ? "Montaje TV 98 pulgadas" : "98 inch TV mounting",
      desc: isEs
        ? "Instalación high-ticket para pantallas gigantes de 98 pulgadas."
        : "High-ticket installation for giant 98 inch screens.",
      price: isEs ? "desde €129" : "from €129",
      href: `/${locale}/montaje-tv-98-pulgadas-valencia`,
    },
  ];

  const secondaryServices = [
    {
      title: isEs ? "Instalación de estanterías" : "Shelf installation",
      desc: isEs
        ? "Montaje limpio de estanterías con anclajes adecuados y buena alineación."
        : "Clean shelf mounting with proper anchors and alignment.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Square className="h-5 w-5" />,
      href: `/${locale}/instalacion-estanterias-valencia`,
    },
  ];

  const whyChoose = isEs
    ? [
        "Adecuado para pisos, casas, oficinas y locales",
        "Alineación cuidadosa antes de perforar",
        "Opciones de cableado limpio disponibles",
        "Presupuesto transparente antes de reservar",
        "Páginas específicas para Samsung Frame y TVs grandes",
        "Revisión de pared, soporte, altura y cableado",
      ]
    : [
        "Suitable for apartments, homes, offices and units",
        "Careful alignment before drilling",
        "Clean cable routing options available",
        "Transparent estimate before booking",
        "Specific pages for Samsung Frame and large TVs",
        "Wall, bracket, height and cabling check",
      ];

  const includedItems = isEs
    ? [
        "Montaje de TV en pared para pantallas pequeñas y grandes",
        "Instalación de soporte fijo, inclinable o articulado",
        "Instalación Samsung Frame y One Connect Box",
        "Montaje de TV 65, 75, 85 y 98 pulgadas",
        "Montaje de proyector en techo o pared",
        "Instalación de soundbar bajo TV o en pared",
        "Ocultación de cables con canaleta o ruta limpia",
        "Instalación de estanterías cerca de media setups",
      ]
    : [
        "TV wall mounting for small and large screens",
        "Fixed, tilting or full-motion bracket installation",
        "Samsung Frame and One Connect Box installation",
        "65, 75, 85 and 98 inch TV mounting",
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
        ? "¿Instaláis Samsung Frame?"
        : "Do you install Samsung Frame TVs?",
      a: isEs
        ? "Sí. Se puede instalar Samsung Frame con alineación precisa, cable One Invisible Connection, ubicación del One Connect Box y acabado tipo cuadro."
        : "Yes. Samsung Frame can be installed with precise alignment, One Invisible Connection cable, One Connect Box planning and picture-frame finish.",
    },
    {
      q: isEs
        ? "¿Montáis TVs grandes de 75, 85 o 98 pulgadas?"
        : "Do you mount large 75, 85 or 98 inch TVs?",
      a: isEs
        ? "Sí. Las pantallas grandes requieren revisar pared, soporte, peso, altura, acceso y ayuda necesaria antes de confirmar el montaje."
        : "Yes. Large screens require wall, bracket, weight, height, access and required help checks before confirming the mounting.",
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

  const renderLinkCard = (item: {
    title: string;
    desc: string;
    href: string;
    icon?: React.ReactNode;
    price?: string;
  }) => (
    <Link
      key={item.href}
      href={item.href}
      className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-yellow-400 hover:shadow-lg hover:scale-[1.01]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {item.icon && (
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
              {item.icon}
            </div>
          )}

          <h3 className="text-base font-extrabold text-black">{item.title}</h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">{item.desc}</p>

          {item.price && (
            <div className="mt-3 text-sm font-extrabold text-yellow-500">
              {item.price}
            </div>
          )}
        </div>

        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gray-400 transition group-hover:text-yellow-500" />
      </div>
    </Link>
  );

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

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href={estimateHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
              >
                {copy.estimateButton} <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition"
              >
                WhatsApp
              </a>
            </div>
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
                  className="group rounded-2xl border border-yellow-400 bg-white p-7 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[220px]"
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

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-semibold text-black">
                  <BadgeCheck className="h-4 w-4" />
                  {isEs ? "Servicios específicos SEO" : "Specific SEO services"}
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-black">
                  {isEs
                    ? "Servicios específicos de montaje de TV en Valencia"
                    : "Specific TV mounting services in Valencia"}
                </h2>

                <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-8">
                  {isEs
                    ? "Elige el servicio exacto según tipo de instalación, soporte, pared, Samsung Frame, cableado o tamaño de pantalla."
                    : "Choose the exact service by installation type, bracket, wall, Samsung Frame, cabling or screen size."}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tvSeoPages.map(renderLinkCard)}
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-semibold text-black">
                  <Star className="h-4 w-4" />
                  {isEs ? "TVs grandes" : "Large TVs"}
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-black">
                  {isEs
                    ? "Montaje de TV por tamaño de pantalla"
                    : "TV mounting by screen size"}
                </h2>

                <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-8">
                  {isEs
                    ? "Las TVs grandes necesitan más cuidado, mejor soporte, revisión de pared y una altura bien calculada."
                    : "Large TVs need more care, better brackets, wall checking and a well-calculated height."}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tvSizePages.map(renderLinkCard)}
              </div>
            </div>
          </section>

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
                        Samsung Frame, TVs grandes, proyectores, soportes,
                        soundbars y soluciones de cableado con alineación precisa
                        y acabado limpio.
                      </p>

                      <p>
                        Una TV bien montada mejora la seguridad, la comodidad de
                        visualización y el aspecto de toda la habitación. Una
                        instalación incorrecta puede dañar la pared, dejar cables
                        desordenados, colocar la pantalla demasiado alta o crear
                        una posición incómoda para ver.
                      </p>

                      <p>
                        Esta categoría conecta todos los servicios del cluster TV:
                        montaje de TV estándar, instalar TV en pared, instalador
                        TV, colgar TV, Samsung Frame, TVs de 65, 75, 85 y 98
                        pulgadas, soporte TV, ocultación de cables, soundbar,
                        proyector y media setups.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>TV mounting services in Valencia</strong> for
                        apartments, homes, offices and commercial spaces.
                        THEVULGO installs televisions, Samsung Frame, large TVs,
                        projectors, brackets, soundbars and cable management
                        solutions with precise alignment and clean finishing.
                      </p>

                      <p>
                        A correctly mounted TV improves safety, viewing comfort
                        and the overall look of the room. Poor installation can
                        damage walls, leave cables messy, place the screen too
                        high or create an uncomfortable viewing position.
                      </p>

                      <p>
                        This category connects the full TV cluster: standard TV
                        mounting, install TV on wall, TV installer, hang TV,
                        Samsung Frame, 65, 75, 85 and 98 inch TVs, TV brackets,
                        cable concealment, soundbar, projector and media setups.
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
                        Cada instalación se mide con cuidado para conseguir la
                        altura correcta, alineación equilibrada y un resultado
                        visualmente limpio. El objetivo es que la instalación
                        parezca intencional y profesional, no improvisada.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, con respuesta
                        rápida y comunicación clara antes de la cita.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto
                        transparente según tipo de pared, tamaño de pantalla,
                        soporte, altura, ocultación de cables y complejidad.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Each installation is measured carefully to ensure the
                        correct height, balanced alignment and a visually clean
                        finish. The goal is always a result that looks intentional
                        and professional rather than improvised.
                      </p>

                      <p>
                        THEVULGO works mainly in{" "}
                        <strong>Valencia and nearby areas</strong>, providing
                        quick response times and clear communication before the
                        appointment.
                      </p>

                      <p>
                        Before installation begins, clients receive a transparent
                        estimate based on wall type, screen size, bracket,
                        mounting height, cable concealment and complexity.
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

          {secondaryServices.length > 0 && (
            <section className="mt-16">
              <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
                    {isEs
                      ? "Otros servicios cerca de tu zona multimedia"
                      : "Other services near your media area"}
                  </h2>

                  <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-8">
                    {isEs
                      ? "También podemos ayudarte con estanterías, pequeños accesorios y elementos alrededor de la TV."
                      : "We can also help with shelves, small accessories and elements around the TV."}
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {secondaryServices.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="group rounded-2xl border border-gray-200 bg-white p-7 text-left shadow-sm transition hover:border-yellow-400 hover:shadow-md"
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
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

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
                      className={
                        index === 0 ? "" : "border-t border-gray-200 pt-6"
                      }
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