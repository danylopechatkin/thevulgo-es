"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  Hammer,
  BedDouble,
  Package,
  Boxes,
  LampDesk,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  FolderOpen,
} from "lucide-react";

export default function FurnitureClient() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=furniture`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para montaje de muebles en Valencia."
      : "Hi! I’d like an estimate for furniture assembly in Valencia."
  );

  const whatsappHref = `https://wa.me/34610076942?text=${whatsappText}`;

  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs ? "Montaje de muebles" : "Furniture Assembly",
    heroSubtitle: isEs
      ? "Montaje profesional de muebles en Valencia: IKEA, armarios, camas, estanterías, escritorios, muebles TV, cómodas y preparación completa al mudarse."
      : "Professional furniture assembly in Valencia for IKEA, wardrobes, beds, shelving units, desks, cabinets and full move-in setups.",

    ctaTitle: isEs ? "¿Necesitas un presupuesto exacto?" : "Need an exact estimate?",
    ctaText: isEs
      ? "Recibe un presupuesto rápido para muebles IKEA, armarios, camas, escritorios, muebles TV o montaje de varias piezas. Continúa al presupuesto o envía una solicitud por WhatsApp."
      : "Get a fast estimate for IKEA furniture, wardrobes, beds, cabinets, desks or multi-item furniture setup. Continue to the calculator or send a request directly on WhatsApp.",
    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs
      ? "Montaje profesional • Valencia"
      : "Professional assembly • Valencia",
    seoTitle: isEs
      ? "Servicios de montaje de muebles en Valencia"
      : "Furniture Assembly Services in Valencia",
    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",
    whyTitle: isEs
      ? "Montaje cuidadoso, estructura estable y sin perder tiempo"
      : "Careful fitting, stable setup, no wasted time",

    faqTitle: isEs ? "Preguntas frecuentes sobre montaje de muebles" : "Furniture Assembly FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para montar tus muebles?"
      : "Ready to assemble your furniture?",
    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para montaje de muebles, armarios, escritorios, estanterías o preparación de muebles al mudarte en Valencia."
      : "Send your request now and get a clear estimate for furniture assembly, wardrobe setup, desks, shelving units or move-in furniture installation in Valencia.",

    finalNote: isEs
      ? "El precio final depende del tipo de mueble, cantidad, complejidad y fijación opcional a la pared."
      : "Final price depends on furniture type, quantity, complexity and optional wall fixing.",
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
      title: isEs ? "Montaje limpio" : "Clean assembly",
      text: isEs
        ? "Montaje ordenado, cuidado con las piezas y resultado final limpio."
        : "Neat setup, careful handling and a tidy final result.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Precios iniciales claros y estimación antes de empezar el trabajo."
        : "Clear starting prices and estimate logic before the job starts.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const serviceCards = [
    {
      title: isEs ? "Montaje de muebles IKEA" : "IKEA furniture assembly",
      desc: isEs
        ? "Montaje profesional de muebles IKEA tipo flat-pack: armarios, camas, muebles, cómodas y estanterías. Ajuste cuidadoso, alineación correcta y estructura estable para uso diario."
        : "Professional assembly of IKEA flat-pack furniture including wardrobes, beds, cabinets, dressers and shelving units.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Hammer className="h-5 w-5" />,
      className: "lg:col-span-2",
      href: `/${locale}/montaje-muebles-ikea-valencia`,
    },
    {
      title: isEs ? "Montaje de armario" : "Wardrobe assembly",
      desc: isEs
        ? "Montaje y alineación de armarios correderos o estándar."
        : "Sliding or standard wardrobes assembled and aligned properly.",
      price: isEs ? "desde €69" : "from €69",
      icon: <Boxes className="h-5 w-5" />,
      className: "",
      href: `/${locale}/montaje-armario-valencia`,
    },
    {
      title: isEs ? "Montaje de cama" : "Bed frame assembly",
      desc: isEs
        ? "Montaje de cama estándar, ajuste de estructura y alineación estable."
        : "Standard bed setup, frame fitting and stable final alignment.",
      price: isEs ? "desde €49" : "from €49",
      icon: <BedDouble className="h-5 w-5" />,
      className: "",
      href: `/${locale}/montaje-cama-valencia`,
    },
    {
      title: isEs ? "Cómodas y cajoneras" : "Chest of drawers",
      desc: isEs
        ? "Montaje limpio de cajoneras con guías y ajuste correcto de cajones."
        : "Drawer units assembled cleanly with proper rail fitting.",
      price: isEs ? "desde €45" : "from €45",
      icon: <FolderOpen className="h-5 w-5" />,
      className: "",
      href: `/${locale}/montaje-comodas-cajoneras-valencia`,
    },
    {
      title: isEs ? "Estanterías" : "Shelving units",
      desc: isEs
        ? "Montaje de estanterías, librerías y unidades independientes."
        : "Freestanding shelving and bookcase assembly.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Boxes className="h-5 w-5" />,
      className: "",
      href: `/${locale}/montaje-estanterias-valencia`,
    },
    {
      title: isEs ? "Muebles TV y multimedia" : "TV stands & media units",
      desc: isEs
        ? "Montaje de muebles TV, consolas multimedia y unidades de entretenimiento con alineación cuidada y posición estable."
        : "Assembly of TV stands, media consoles and entertainment units with careful alignment and stable positioning.",
      price: isEs ? "desde €45" : "from €45",
      icon: <Package className="h-5 w-5" />,
      className: "lg:col-span-2",
      href: `/${locale}/montaje-muebles-tv-multimedia-valencia`,
    },
    {
      title: isEs ? "Escritorios y zonas de trabajo" : "Desks & workstations",
      desc: isEs
        ? "Montaje de escritorios, mesas de trabajo y zonas compactas de oficina en casa."
        : "Home office desks, work tables and compact workstations.",
      price: isEs ? "desde €39" : "from €39",
      icon: <LampDesk className="h-5 w-5" />,
      className: "",
      href: `/${locale}/montaje-escritorios-valencia`,
    },
    {
      title: isEs ? "Mesas de comedor" : "Dining tables",
      desc: isEs
        ? "Montaje de estructuras, tableros y patas con resultado final estable."
        : "Table frames, tops and legs assembled with stable final setup.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Package className="h-5 w-5" />,
      className: "",
      href: `/${locale}/montaje-mesas-comedor-valencia`,
    },
    {
      title: isEs ? "Aparadores y muebles auxiliares" : "Sideboards & cabinets",
      desc: isEs
        ? "Montaje de aparadores, armarios auxiliares y muebles de entrada."
        : "Storage cabinets, sideboards and hallway furniture.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Boxes className="h-5 w-5" />,
      className: "",
      href: `/${locale}/montaje-aparadores-muebles-auxiliares-valencia`,
    },
    {
      title: isEs ? "Sofás y piezas modulares" : "Sofa & modular pieces",
      desc: isEs
        ? "Montaje simple de sofás y piezas modulares cuando el sistema lo permite."
        : "Simple sofa assembly and modular seating setup when applicable.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Package className="h-5 w-5" />,
      className: "",
      href: `/${locale}/montaje-sofas-modulares-valencia`,
    },
    {
      title: isEs ? "Fijación de muebles a la pared" : "Furniture fixing to wall",
      desc: isEs
        ? "Fijación profesional anti-vuelco para armarios, muebles altos, estanterías y almacenamiento alto."
        : "Professional anti-tip wall fixing for wardrobes, cabinets, shelving units and tall storage furniture.",
      price: isEs ? "desde €29" : "from €29",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "lg:col-span-2",
      href: `/${locale}/fijacion-muebles-pared-valencia`,
    },
    {
      title: isEs ? "Preparación de muebles al mudarse" : "Move-in furniture setup",
      desc: isEs
        ? "Montaje de varias piezas durante la preparación de una habitación o piso."
        : "Multiple pieces assembled during apartment or room setup.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Package className="h-5 w-5" />,
      className: "",
      href: `/${locale}/preparacion-muebles-mudanza-valencia`,
    },
  ];

  const whyChoose = isEs
    ? [
        "Montaje para pisos, casas y propiedades en alquiler",
        "Ajuste cuidadoso y revisión de herrajes",
        "Fijación opcional a la pared para instalaciones más seguras",
        "Presupuesto claro antes de reservar",
      ]
    : [
        "Assembly for apartments, homes and rental properties",
        "Careful fitting and hardware check",
        "Optional wall fixing for safer setups",
        "Clear estimate before booking",
      ];

  const includedItems = isEs
    ? [
        "Montaje de muebles IKEA",
        "Armarios y muebles altos de almacenamiento",
        "Camas y muebles de dormitorio",
        "Escritorios, zonas de trabajo y home office",
        "Armarios, estanterías y aparadores",
        "Fijación opcional a la pared para mayor seguridad",
      ]
    : [
        "IKEA furniture assembly",
        "Wardrobes and tall storage units",
        "Bed frames and bedroom furniture",
        "Desks, workstations and home office setups",
        "Cabinets, shelves and sideboards",
        "Optional wall fixing for safer furniture setup",
      ];

  const faqItems = [
    {
      q: isEs ? "¿Solo montas muebles IKEA?" : "Do you assemble IKEA furniture only?",
      a: isEs
        ? "No. IKEA es común, pero también se pueden montar muchas otras marcas de muebles flat-pack y estándar según el tipo de mueble y herrajes."
        : "No. IKEA is common, but many other flat-pack and standard furniture brands can also be assembled depending on the item and hardware.",
    },
    {
      q: isEs
        ? "¿Puedes fijar armarios y muebles altos a la pared?"
        : "Can wardrobes and tall cabinets be fixed to the wall?",
      a: isEs
        ? "Sí. La fijación a la pared se puede añadir cuando es adecuada y suele recomendarse por seguridad, especialmente en muebles altos."
        : "Yes. Wall fixing can be added when suitable and is often recommended for safety, especially for taller furniture.",
    },
    {
      q: isEs
        ? "¿Tengo que desempaquetar todo antes de la cita?"
        : "Do I need to unpack everything before the appointment?",
      a: isEs
        ? "No necesariamente. Se puede montar desde las cajas, pero tener todas las piezas disponibles y la zona preparada ayuda a acelerar el trabajo."
        : "Not necessarily. Furniture can be assembled from boxed items, but having all parts available and the room prepared helps speed up the process.",
    },
    {
      q: isEs
        ? "¿Se pueden montar varios muebles en una sola visita?"
        : "Can multiple furniture items be assembled in one visit?",
      a: isEs
        ? "Sí. Si tienes varias piezas, se puede preparar un presupuesto combinado según el alcance total y el tiempo necesario."
        : "Yes. If you have several items, a combined estimate can be provided based on the total scope and time required.",
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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {serviceCards.map((item) => (
              <button
                key={item.title}
                onClick={() => router.push(item.href)}
                className={`group rounded-2xl border border-yellow-400 bg-white p-6 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] ${item.className}`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                  {item.icon}
                </div>

                <h2 className="mt-4 text-xl font-extrabold text-black">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm leading-7 text-gray-700">
                  {item.desc}
                </p>

                <div className="mt-4 text-sm font-extrabold text-yellow-500">
                  {item.price}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-black opacity-0 transition group-hover:opacity-100">
                  {isEs ? "Ver servicio" : "Open service"}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                  {copy.ctaTitle}
                </h2>

                <p className="mt-3 text-gray-600 leading-8">
                  {copy.ctaText}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push(estimateHref)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                >
                  {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                </button>

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
              <div className="max-w-4xl mx-auto">
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
                        <strong>montaje de muebles en Valencia</strong> para pisos,
                        casas, propiedades en alquiler y oficinas. THEVULGO monta
                        armarios, muebles IKEA, camas, estanterías, muebles TV,
                        escritorios y muebles auxiliares con ajuste cuidadoso y resultado limpio.
                      </p>

                      <p>
                        Los muebles flat-pack suelen parecer sencillos hasta que los herrajes,
                        la alineación y la posición final empiezan a consumir tiempo. Un montaje
                        incorrecto puede afectar la estabilidad, el movimiento de cajones,
                        la alineación de puertas o la seguridad.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>furniture assembly services in Valencia</strong>
                        for apartments, homes, rental properties and offices. THEVULGO
                        assembles wardrobes, IKEA furniture, beds, shelving units,
                        media units, desks and cabinets with careful fitting and a clean result.
                      </p>

                      <p>
                        Flat-pack furniture often looks simple until the hardware, alignment
                        and final positioning start becoming time-consuming. Incorrect assembly
                        can affect stability, drawer movement, door alignment or safety.
                        That is why every furniture setup should be done carefully.
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
                        Cada pieza se monta con atención a los herrajes, ajustes,
                        alineación de puertas, movimiento de cajones y posición final.
                        El objetivo siempre es un resultado estable y limpio, no un montaje rápido sin cuidado.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, con respuesta rápida
                        y comunicación clara antes de la cita.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente
                        basado en el número de piezas, tipo de mueble y complejidad.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Each item is assembled carefully with attention to fittings,
                        hardware, door alignment, drawer movement and final placement.
                        The goal is always a stable and clean result rather than a rushed setup.
                      </p>

                      <p>
                        THEVULGO works mainly in{" "}
                        <strong>Valencia and nearby areas</strong>, providing quick
                        response times and clear communication before the appointment.
                      </p>

                      <p>
                        Before assembly begins, clients receive a transparent estimate
                        based on the number of pieces, furniture type and complexity.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                  <BadgeCheck className="h-4 w-4" />
                  {copy.whyBadge}
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-black">
                  {copy.whyTitle}
                </h2>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-gray-700 text-[15px] sm:text-base">
                  {whyChoose.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-[2px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => router.push(estimateHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                  >
                    {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                  </button>

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
              <div className="max-w-4xl mx-auto">
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
                  <button
                    onClick={() => router.push(estimateHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                  >
                    {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                  </button>

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