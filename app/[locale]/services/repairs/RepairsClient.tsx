"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  Wrench,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  Hammer,
  Paintbrush,
  DoorOpen,
  Droplets,
  Plug,
  Drill,
  Ruler,
  House,
  Package,
} from "lucide-react";

export default function RepairsClient() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=repairs`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para reparaciones del hogar en Valencia."
      : "Hi! I’d like an estimate for home repairs in Valencia."
  );

  const whatsappHref = `https://wa.me/34610076942?text=${whatsappText}`;

const repairLinks = [
  `/${locale}/services/repairs/silicone-renewal`,
  `/${locale}/services/repairs/sealing-gap-filling`,
  `/${locale}/services/repairs/minor-wall-fixes`,
  `/${locale}/services/repairs/door-adjustment`,
  `/${locale}/services/repairs/loose-handle-fixing`,
  `/${locale}/services/repairs/curtain-rail-adjustments`,
  `/${locale}/services/repairs/wall-anchor-installation`,
  `/${locale}/services/repairs/shelf-refixing`,
  `/${locale}/services/repairs/mirror-remounting`,
  `/${locale}/services/repairs/furniture-touch-up-fixes`,
  `/${locale}/services/repairs/bathroom-accessory-fixing`,
  `/${locale}/services/repairs/socket-cover-straightening`,
  `/${locale}/services/repairs/cabinet-door-alignment`,
  `/${locale}/services/repairs/small-drilling-jobs`,
  `/${locale}/services/repairs/move-out-touch-ups`,
  `/${locale}/services/repairs/kitchen-minor-fixes`,
  `/${locale}/services/repairs/multiple-small-repairs`,
];


  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs ? "Reparaciones del hogar" : "Home Repairs",
    heroSubtitle: isEs
      ? "Pequeñas reparaciones del hogar en Valencia para pisos, casas y propiedades en alquiler: sellado, silicona, ajustes, recolocaciones y arreglos prácticos del día a día."
      : "Minor home repairs in Valencia for apartments, houses and rental properties: sealing, silicone, small fixes, adjustments, re-fixing and everyday repair work.",

    ctaTitle: isEs
      ? "¿Necesitas un presupuesto exacto para reparaciones?"
      : "Need an exact home repair estimate?",
    ctaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para pequeñas reparaciones, sellado, ajustes o varias tareas en una sola visita."
      : "Send your request now and get a clear estimate for minor repairs, sealing, adjustments or several small tasks completed in one visit.",
    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs
      ? "Pequeñas reparaciones • Valencia"
      : "Minor home repairs • Valencia",
    seoTitle: isEs
      ? "Servicios de reparación del hogar en Valencia"
      : "Home Repair Services in Valencia",
    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",
    whyTitle: isEs
      ? "Pequeños arreglos prácticos que hacen que toda la casa se sienta mejor"
      : "Practical small fixes that make the whole home feel better",
    whyText: isEs
      ? "Este servicio funciona especialmente bien para personas que no necesitan una gran reforma, pero sí quieren arreglar varios problemas pequeños de forma limpia y organizada en una sola visita."
      : "This service works especially well for people who do not need a big renovation, but do want multiple small problems fixed properly, cleanly and in one organized visit.",

    faqTitle: isEs ? "Preguntas frecuentes sobre reparaciones" : "Home Repairs FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para reservar tus reparaciones?"
      : "Ready to book your home repairs?",
    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para sellado, pequeños arreglos, tareas agrupadas o retoques prácticos en Valencia."
      : "Send your request now and get a clear estimate for sealing, small fixes, grouped repair tasks or practical touch-up work in Valencia.",

    finalNote: isEs
      ? "El precio final depende del número de tareas, materiales, acceso y alcance total."
      : "Final price depends on the number of repair tasks, materials, access and total scope.",
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
        ? "Pequeñas reparaciones limpias, detalles cuidados y mejor aspecto final."
        : "Neat minor repairs with tidy details and a cleaner final look.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Estimación clara antes de empezar, sin sorpresas innecesarias."
        : "Clear estimate logic before work begins, with no unnecessary surprises.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Renovación de silicona" : "Silicone renewal",
      desc: isEs
        ? "Cambio de silicona antigua en cocinas, baños y alrededor de piezas visibles."
        : "Replacement of old silicone in kitchens, bathrooms and around fixtures.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Sellado de juntas y huecos" : "Sealing & gap filling",
      desc: isEs
        ? "Sellado de pequeños huecos alrededor de superficies, piezas y detalles visibles del hogar."
        : "Small gap sealing around surfaces, fittings and visible home details.",
      price: isEs ? "desde €29" : "from €29",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Pequeños arreglos de pared" : "Minor wall fixes",
      desc: isEs
        ? "Retoques locales de pared, marcas de tornillos y pequeñas correcciones visibles."
        : "Simple local wall touch-ups, screw marks and small visible corrections.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Paintbrush className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Ajuste de puerta" : "Door adjustment",
      desc: isEs
        ? "Pequeños ajustes de alineación de puertas y mejoras básicas de uso diario."
        : "Small door alignment fixes and basic usability improvements.",
      price: isEs ? "desde €35" : "from €35",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Arreglo de manilla suelta" : "Loose handle fixing",
      desc: isEs
        ? "Ajuste y reparación de manillas, pomos y piezas pequeñas sueltas."
        : "Tightening and fixing of loose handles, knobs and small fittings.",
      price: isEs ? "desde €25" : "from €25",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Ajustes de barra de cortina" : "Curtain rail adjustments",
      desc: isEs
        ? "Pequeñas correcciones y arreglos de barras de cortina y fijaciones simples."
        : "Minor fixes and corrections for curtain rails and simple fittings.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de tacos y anclajes" : "Wall anchor installation",
      desc: isEs
        ? "Instalación de tacos y anclajes de pared para montar estantes, espejos y accesorios de forma segura."
        : "Installation of wall anchors and plugs for safe mounting of shelves, mirrors and fixtures.",
      price: isEs ? "desde €25" : "from €25",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Recolocación de estante" : "Shelf re-fixing",
      desc: isEs
        ? "Reapriete o recolocación de estantes pequeños sueltos o inestables."
        : "Re-tightening or repositioning loose or unstable small shelves.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Drill className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Recolocación de espejo" : "Mirror re-mounting",
      desc: isEs
        ? "Ajuste o nueva fijación de espejos y pequeños accesorios de pared."
        : "Adjustment or re-fixing of mirrors and small wall accessories.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Retoques de muebles" : "Furniture touch-up fixes",
      desc: isEs
        ? "Correcciones simples de muebles pequeños y problemas de fijación."
        : "Simple corrections for small furniture issues and fitting problems.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Arreglo de accesorios de baño" : "Bathroom accessory fixing",
      desc: isEs
        ? "Pequeña reparación o recolocación de soportes, ganchos y accesorios de baño."
        : "Minor repair or re-fixing of holders, hooks and bathroom accessories.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Alineación de tapas y embellecedores" : "Socket / cover straightening",
      desc: isEs
        ? "Corrección básica de tapas, placas y accesorios visibles sueltos o torcidos."
        : "Basic correction of loose covers, plates and visible accessory alignment.",
      price: isEs ? "desde €25" : "from €25",
      icon: <Plug className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Alineación de puerta de mueble" : "Cabinet door alignment",
      desc: isEs
        ? "Ajustes sencillos de bisagras para puertas de muebles y elementos interiores."
        : "Simple hinge adjustments for cabinet doors and interior fittings.",
      price: isEs ? "desde €35" : "from €35",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Pequeños trabajos de taladro" : "Small drilling jobs",
      desc: isEs
        ? "Perforación limpia para arreglos simples, accesorios y pequeñas instalaciones."
        : "Clean drilling for simple home fixes, accessories and minor installs.",
      price: isEs ? "desde €25" : "from €25",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Retoques para entrega de piso" : "Move-out touch-ups",
      desc: isEs
        ? "Pequeñas correcciones visibles para mejorar una habitación antes de entregar o dejar una vivienda."
        : "Small visible corrections to improve a room before move-out or handover.",
      price: isEs ? "desde €39" : "from €39",
      icon: <House className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Pequeños arreglos de cocina" : "Kitchen minor fixes",
      desc: isEs
        ? "Pequeños ajustes de cocina y reparaciones visibles para mejorar el uso diario."
        : "Small kitchen adjustments and visible repair work for daily usability.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Varias pequeñas reparaciones" : "Multiple small repairs",
      desc: isEs
        ? "Presupuesto combinado para varias pequeñas reparaciones del hogar en una sola visita."
        : "Combined estimate for several minor home repair tasks in one visit.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
  ];

  const whyChoose = isEs
    ? [
        "Ideal para pisos, casas y propiedades en alquiler",
        "Útil para mudanzas, entregas de piso y pequeños retoques",
        "Varias tareas menores pueden agruparse en una sola visita",
        "Ayuda práctica para problemas visibles del día a día",
        "Resultado limpio sin complicar el trabajo",
        "Presupuesto claro antes de reservar con alcance definido",
      ]
    : [
        "Good for apartments, homes and rental properties",
        "Useful for move-ins, move-outs and small refresh jobs",
        "Several minor tasks can be grouped into one visit",
        "Practical help for visible everyday repair issues",
        "Clean final result without overcomplicating the job",
        "Clear estimate before booking with defined scope",
      ];

  const includedItems = isEs
    ? [
        "Cambio de silicona y trabajos de sellado",
        "Pequeños retoques visibles de pared y superficies",
        "Arreglo de manillas, piezas y accesorios sueltos",
        "Alineación de puertas de muebles y pequeñas correcciones",
        "Recolocación de estantes y pequeños trabajos de taladro",
        "Pequeñas reparaciones de baño, cocina y uso diario",
        "Retoques para mudanza, entrada o entrega de piso",
        "Varias tareas pequeñas combinadas en una sola visita",
      ]
    : [
        "Silicone replacement and sealing work",
        "Small visible wall and surface touch-ups",
        "Loose handle, fitting and accessory fixing",
        "Cabinet door and small alignment corrections",
        "Shelf re-fixing and minor drilling tasks",
        "Bathroom, kitchen and everyday minor repairs",
        "Move-out and move-in touch-up corrections",
        "Multiple small jobs combined into one visit",
      ];

  const faqItems = [
    {
      q: isEs
        ? "¿Qué tipo de reparaciones del hogar incluye esta página?"
        : "What kind of home repairs are included here?",
      a: isEs
        ? "Esta página incluye pequeñas reparaciones prácticas como renovación de silicona, sellado, piezas sueltas, ajustes de muebles, recolocación de estantes, pequeños trabajos de taladro y retoques visibles del hogar."
        : "This page covers small practical repair tasks such as silicone renewal, sealing, loose fittings, cabinet adjustments, shelf re-fixing, small drilling jobs and general visible touch-up fixes around the home.",
    },
    {
      q: isEs
        ? "¿Se pueden hacer varias reparaciones pequeñas en una visita?"
        : "Can several small repairs be done in one visit?",
      a: isEs
        ? "Sí. Es una de las principales ventajas de este servicio. Varias tareas pequeñas se pueden agrupar en una sola cita para trabajar de forma más eficiente."
        : "Yes. This is one of the main advantages of this service. Several minor repair tasks can often be grouped into one appointment for a more efficient visit.",
    },
    {
      q: isEs
        ? "¿Este servicio sirve para pisos de alquiler?"
        : "Is this service good for rental apartments?",
      a: isEs
        ? "Sí. Las reparaciones del hogar son muy útiles para pisos de alquiler, entregas, mudanzas y pequeños retoques antes de fotos, inquilinos o inspecciones."
        : "Yes. Home repairs are especially useful for rental properties, move-outs, move-ins and small refresh work before photos, tenants or inspections.",
    },
    {
      q: isEs
        ? "¿Haces reformas grandes?"
        : "Do you handle large renovation work?",
      a: isEs
        ? "No. Esta página está enfocada en pequeñas reparaciones y arreglos visibles, no en reformas completas, grandes obras o trabajos muy especializados."
        : "No. This page is focused on small home repair tasks and visible fixes rather than full renovation, major construction or highly specialized trade work.",
    },
    {
      q: isEs
        ? "¿Puedes arreglar estantes, manillas y accesorios sueltos?"
        : "Can you fix loose shelves, handles and accessories?",
      a: isEs
        ? "Sí. Estantes, manillas, accesorios de baño, puertas de muebles y elementos similares son trabajos comunes en esta categoría."
        : "Yes. Loose shelves, handles, bathroom accessories, cabinet doors and similar household items are common jobs in this category.",
    },
    {
      q: isEs
        ? "¿También haces retoques de pared?"
        : "Do you do wall touch-ups too?",
      a: isEs
        ? "Sí. Se pueden incluir pequeños retoques localizados de pared y correcciones visibles si encajan dentro del alcance de pequeñas reparaciones."
        : "Basic localized wall touch-ups and small visible corrections can be included when they fit the scope of minor repairs.",
    },
    {
      q: isEs
        ? "¿Puede incluir pequeños arreglos de cocina y baño?"
        : "Can this page include kitchen and bathroom small fixes?",
      a: isEs
        ? "Sí. Muchos pequeños problemas de cocina y baño encajan perfectamente en esta categoría, siempre que no requieran trabajos grandes de fontanería o electricidad."
        : "Yes. Many small kitchen and bathroom usability issues fit perfectly into this category, especially when they do not require major plumbing or electrical work.",
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
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
    {services.map((s, index) => (
      <Link
        key={`${s.title}-${index}`}
        href={repairLinks[index]}
        className={`group rounded-2xl border border-yellow-400 bg-white p-7 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[210px] ${s.className || ""}`}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
          {s.icon}
        </div>

        <h3 className="mt-4 text-xl font-extrabold text-black">
          {s.title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-gray-700">
          {s.desc}
        </p>

        <div className="mt-4 text-sm font-extrabold text-yellow-500">
          {s.price}
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
                        <strong>reparación del hogar en Valencia</strong> para pisos,
                        casas y propiedades en alquiler. THEVULGO ayuda con pequeñas tareas
                        del día a día que mejoran cómo se ve, se siente y funciona una vivienda
                        sin necesidad de una reforma grande.
                      </p>

                      <p>
                        Con el tiempo, muchas casas acumulan pequeños problemas: manillas sueltas,
                        silicona vieja, bordes sin sellar, puertas de muebles desalineadas,
                        estantes inestables, retoques de pared y daños visibles menores.
                      </p>

                      <p>
                        Esta página está pensada para arreglos prácticos, retoques, sellado,
                        recolocaciones, mejoras de uso diario y visitas con varias tareas pequeñas.
                        Es ideal para mudanzas, entregas de piso, pisos de alquiler y mantenimiento general.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>home repair services in Valencia</strong> for apartments,
                        homes and rental properties. THEVULGO helps with small everyday repair tasks
                        that improve how a space looks, feels and functions without requiring large renovation work.
                      </p>

                      <p>
                        Many homes collect small issues over time: loose handles, old silicone,
                        unsealed edges, cabinet alignment problems, shelf instability, wall touch-ups
                        and minor visible damage. These tasks are often too small for a major contractor,
                        but together they strongly affect the overall impression of the home.
                      </p>

                      <p>
                        This page is designed for practical small fixes, touch-up corrections,
                        sealing, re-fixing, usability improvements and grouped minor repair visits.
                        It is ideal for move-ins, move-outs, rental refreshes and general maintenance.
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
                        Un buen servicio de pequeñas reparaciones no solo arregla lo que está roto.
                        También mejora la sensación general del espacio, reduce el desorden visual
                        y hace que los detalles diarios se vean más limpios y terminados.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, ayudando con tareas agrupadas,
                        mantenimiento práctico y arreglos que hacen que la vivienda vuelva a sentirse completa.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente según
                        el número de tareas, materiales necesarios y complejidad total.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Good home repair service is not only about fixing what is broken. It is also
                        about improving the overall feeling of the space, reducing visual clutter
                        and making everyday details look cleaner and more finished.
                      </p>

                      <p>
                        THEVULGO works mainly in{" "}
                        <strong>Valencia and nearby areas</strong>,
                        helping clients with grouped small tasks, maintenance-style fixes and
                        practical repair work that makes homes feel more complete again.
                      </p>

                      <p>
                        Before work begins, clients receive a transparent estimate based on
                        the number of tasks, materials involved and total complexity.
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