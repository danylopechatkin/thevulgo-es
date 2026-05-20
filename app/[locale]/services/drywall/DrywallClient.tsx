"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  Wrench,
  Paintbrush,
  Drill,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  Square,
  Ruler,
  Hammer,
  House,
  PencilRuler,
} from "lucide-react";

export default function DrywallClient() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=drywall`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para reparación de paredes y pladur en Valencia."
      : "Hi! I’d like an estimate for wall and drywall repairs in Valencia."
  );

  const whatsappHref = `https://wa.me/14379074913?text=${whatsappText}`;

  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs ? "Paredes y pladur" : "Walls & Drywall Repairs",
    heroSubtitle: isEs
      ? "Reparación de paredes, pladur, perforaciones, agujeros de tacos y preparación para pintura en Valencia."
      : "Wall patching, drywall repair, drilling, anchor hole fixing and paint-prep work in Valencia for apartments, homes and rental properties.",

    ctaTitle: isEs
      ? "¿Necesitas un presupuesto exacto para reparación de pared?"
      : "Need an exact wall repair estimate?",
    ctaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para parches, reparación de pladur, perforaciones o varias tareas de pared en una sola visita."
      : "Send a request now and get a clear estimate for patching, drywall repairs, drilling work or several small wall tasks in one visit.",
    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs
      ? "Pladur y reparación de pared • Valencia"
      : "Drywall & wall repair • Valencia",
    seoTitle: isEs
      ? "Servicios de reparación de paredes y pladur en Valencia"
      : "Wall and Drywall Repair Services in Valencia",

    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",
    whyTitle: isEs
      ? "Reparaciones de pared que hacen que la habitación vuelva a verse terminada"
      : "Wall repairs that make the room look finished again",
    whyText: isEs
      ? "Este servicio está pensado para mejoras prácticas después de soportes, estantes, tacos, instalaciones multimedia, retiradas y desgaste general del hogar."
      : "This service is designed for practical wall improvement after brackets, shelves, anchors, media setups, removals and general home wear. It is especially useful when small damage adds up and starts affecting the look of the space.",

    faqTitle: isEs ? "Preguntas frecuentes sobre paredes y pladur" : "Walls & Drywall FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para reservar tu reparación de pared?"
      : "Ready to book your wall repair?",
    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para reparación de pladur, parches, perforaciones o varias pequeñas reparaciones de pared en Valencia."
      : "Send your request now and get a clear estimate for drywall patching, wall repair, drilling work or multiple small wall fixes in Valencia.",

    finalNote: isEs
      ? "El precio final depende del tipo de pared, tamaño de la reparación, número de zonas dañadas y alcance total."
      : "Final price depends on wall type, repair size, number of damaged areas and total scope.",
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
        ? "Parches limpios, perforaciones cuidadas y un resultado final más profesional."
        : "Neat patching, tidy drilling and a more professional final look.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Precios iniciales claros y lógica de presupuesto antes de empezar."
        : "Clear starting prices and estimate logic before work begins.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Reparación de agujero pequeño" : "Small hole repair",
      desc: isEs
        ? "Reparación de pequeños agujeros en pladur o paredes de yeso con relleno y alisado limpio."
        : "Repair of small holes in drywall or plaster walls with clean filling and smoothing.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Parche mediano de pared" : "Medium wall patching",
      desc: isEs
        ? "Reparación de daños más visibles en pared, golpes, marcas y zonas deterioradas."
        : "Patch repair for more visible wall damage, dents and impact marks.",
      price: isEs ? "desde €45" : "from €45",
      icon: <Square className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Parche grande de pladur" : "Large drywall patch",
      desc: isEs
        ? "Trabajo de corte, parche y preparación para reparaciones de pladur más grandes."
        : "Larger cutout and patch work with more preparation and finishing.",
      price: isEs ? "desde €69" : "from €69",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Reparación de agujeros de tacos" : "Anchor hole repair",
      desc: isEs
        ? "Reparación de agujeros antiguos de tacos y marcas de soportes después de retirarlos."
        : "Repair of old anchor holes and bracket marks after removals.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Preparación de pared para retoque" : "Wall touch-up prep",
      desc: isEs
        ? "Preparación básica de superficie antes de pintura o retoque."
        : "Basic surface preparation before painting or touch-up work.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Paintbrush className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Reparación de corte en pladur" : "Drywall cutout repair",
      desc: isEs
        ? "Reparación de aberturas hechas para cables, accesorios o instalaciones anteriores."
        : "Repair of openings made for cables, fittings or previous installations.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Square className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Relleno de grietas" : "Crack filling",
      desc: isEs
        ? "Relleno y alisado de pequeñas grietas visibles en paredes y esquinas."
        : "Filling and smoothing of small visible cracks in walls and corners.",
      price: isEs ? "desde €29" : "from €29",
      icon: <PencilRuler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Reparación de esquina" : "Corner repair",
      desc: isEs
        ? "Reparación de esquinas de pared dañadas y zonas de borde."
        : "Repair of damaged wall corners and edge areas.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Preparación y nivelación de pared" : "Wall levelling prep",
      desc: isEs
        ? "Corrección básica de superficie para conseguir un acabado más limpio."
        : "Basic wall surface correction and prep for a cleaner finish.",
      price: isEs ? "desde €45" : "from €45",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Alisado localizado" : "Skim coat area repair",
      desc: isEs
        ? "Alisado localizado para zonas parcheadas o pequeñas secciones irregulares."
        : "Localized skim work for patched zones and uneven small sections.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Paintbrush className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Reparación de pared tras soporte de TV" : "TV bracket wall repair",
      desc: isEs
        ? "Restauración de pared después de retirar un soporte de TV o cambiar una instalación multimedia."
        : "Wall restoration after TV bracket removal or media setup changes.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Drill className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Reparación tras retirar estante" : "Shelf removal wall repair",
      desc: isEs
        ? "Reparación de puntos de anclaje, tornillos y daños de montaje tras retirar estantes."
        : "Repair of shelf anchor points, screws and mounting damage.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Reparación de golpe de manilla" : "Door handle wall damage repair",
      desc: isEs
        ? "Reparación de marcas y golpes en pared causados por manillas o impactos."
        : "Repair of wall marks and dents caused by handles or impact.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Parche pequeño en techo" : "Ceiling spot patching",
      desc: isEs
        ? "Parcheo y alisado localizado en pequeñas zonas del techo."
        : "Small localized ceiling patching and smoothing.",
      price: isEs ? "desde €39" : "from €39",
      icon: <House className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Cierre de agujeros de cable" : "Cable hole closing",
      desc: isEs
        ? "Cierre y alisado de pequeñas aberturas de cables o instalaciones en pared."
        : "Closing and smoothing small cable or wiring openings in walls.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Servicio de perforación de pared" : "Wall drilling service",
      desc: isEs
        ? "Perforación limpia para soportes, accesorios o elementos de montaje cuando la pared lo permite."
        : "Clean drilling for mounts, brackets or accessories where suitable.",
      price: isEs ? "desde €25" : "from €25",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Perforación en hormigón o ladrillo" : "Concrete wall drilling",
      desc: isEs
        ? "Perforación básica en hormigón o ladrillo para instalaciones domésticas y accesorios."
        : "Basic drilling in concrete or brick for home installs and fixtures.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Preparación de pladur para montaje" : "Drywall mounting prep",
      desc: isEs
        ? "Preparación de zonas de pladur para un montaje más seguro y limpio en pared."
        : "Preparation of drywall areas for safe and cleaner wall mounting.",
      price: isEs ? "desde €35" : "from €35",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Parche, lijado y acabado" : "Patch and sand finish",
      desc: isEs
        ? "Trabajo de parche con lijado para dejar la zona mejor preparada para pintura."
        : "Patch work finished with sanding for better paint-ready results.",
      price: isEs ? "desde €45" : "from €45",
      icon: <Paintbrush className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Varias reparaciones de pared" : "Multiple wall repairs",
      desc: isEs
        ? "Presupuesto combinado para varias tareas de pladur, parches o perforaciones."
        : "Combined estimate for several drywall, patching or drilling tasks",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
  ];

  const whyChoose = isEs
    ? [
        "Útil para casas, pisos y propiedades en alquiler",
        "Ideal para mudanzas, retiradas y renovación visual de paredes",
        "Parches limpios y presentación final más cuidada",
        "Varias pequeñas reparaciones pueden combinarse en una visita",
        "Útil después de soportes de TV, estantes, escuadras o cableado",
        "Presupuesto claro antes de reservar con alcance práctico",
      ]
    : [
        "Useful for homes, apartments and rental properties",
        "Good for move-outs, removals and wall refreshes",
        "Clean patching and neater final presentation",
        "Several small wall repairs can be combined in one visit",
        "Helpful after TV mounts, shelves, brackets or cable work",
        "Clear estimate before booking with practical scope",
      ];

  const includedItems = isEs
    ? [
        "Reparación de agujeros en pladur y parches localizados",
        "Reparación de agujeros de tacos después de estantes o soportes",
        "Daños de pared tras retirar soportes de TV",
        "Relleno de grietas y alisado localizado",
        "Reparación de cortes en pladur y cierre de agujeros de cable",
        "Perforación en pared, hormigón o ladrillo",
        "Reparación de esquinas y alisado localizado",
        "Parche, lijado y preparación antes de pintar",
      ]
    : [
        "Drywall hole repair and local wall patching",
        "Anchor hole repair after shelves or brackets",
        "Wall damage after TV mount removal",
        "Crack filling and localized smoothing",
        "Drywall cutout repair and cable hole closing",
        "Wall drilling and concrete or brick drilling",
        "Corner repair and localized skim work",
        "Patch, sand and prep before painting",
      ];

  const faqItems = [
    {
      q: isEs ? "¿Reparas pequeños agujeros en pladur?" : "Do you repair small holes in drywall?",
      a: isEs
        ? "Sí. Los agujeros pequeños en pladur, agujeros de tacos y marcas comunes de pared están incluidos cuando la reparación es localizada y sencilla."
        : "Yes. Small drywall holes, anchor holes and common wall marks are included in this category when the repair is localized and straightforward.",
    },
    {
      q: isEs
        ? "¿Puedes reparar la pared después de retirar un soporte de TV?"
        : "Can you repair wall damage after removing a TV bracket?",
      a: isEs
        ? "Sí. Es uno de los trabajos comunes de esta página. Los agujeros, tacos y marcas del soporte normalmente pueden parchearse y prepararse para un acabado más limpio."
        : "Yes. This is one of the common jobs on this page. Old screw holes, anchors and bracket marks can usually be patched and prepared for a cleaner finish.",
    },
    {
      q: isEs ? "¿También pintas la zona reparada?" : "Do you also paint the repaired area?",
      a: isEs
        ? "Esta página se enfoca principalmente en reparación, parcheo, lijado y preparación para pintura. La pintura completa puede tratarse por separado según el alcance."
        : "This page is focused mainly on wall repair, patching, sanding and paint preparation. Full painting may be handled separately depending on the scope.",
    },
    {
      q: isEs
        ? "¿Se pueden hacer varias reparaciones de pared en una visita?"
        : "Can several wall repairs be done in one visit?",
      a: isEs
        ? "Sí. Varias tareas pequeñas de parcheo, perforación o reparación de pladur pueden agruparse en una sola cita."
        : "Yes. Multiple small patching, drilling or drywall repair tasks can often be grouped into one appointment.",
    },
    {
      q: isEs ? "¿Perforas paredes de hormigón o ladrillo?" : "Do you drill into concrete or brick walls?",
      a: isEs
        ? "Sí, para instalaciones domésticas básicas cuando la perforación es sencilla y adecuada para la superficie."
        : "Yes, for basic home installation tasks where the drilling scope is straightforward and suitable for the surface.",
    },
    {
      q: isEs ? "¿El lijado está incluido después del parche?" : "Is sanding included after patching?",
      a: isEs
        ? "Cuando el tipo de reparación lo requiere, el lijado puede incluirse para mejorar el resultado final y dejar la zona más preparada para pintar."
        : "When required for the repair type, sanding can be included to improve the final look and make the area more paint-ready.",
    },
    {
      q: isEs
        ? "¿Qué tipo de daños de pared sueles reparar?"
        : "What kind of wall damage do you usually handle?",
      a: isEs
        ? "Trabajos típicos incluyen agujeros de tacos, golpes, pequeñas grietas, marcas de soportes retirados, cortes en pladur, daños de estantes y parches localizados."
        : "Typical jobs include anchor holes, dents, small cracks, removed bracket marks, drywall cutouts, shelf damage and localized patch areas.",
    },
    {
      q: isEs ? "¿Haces renovación completa de paredes?" : "Do you handle full wall renovation?",
      a: isEs
        ? "No. Esta página está pensada para parches, reparación de pladur, perforaciones y correcciones locales de superficie, no para reformas completas."
        : "No. This page is intended for patching, drywall repair, drilling and local wall surface correction rather than full renovation work.",
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
                <h3 className="mt-4 text-lg font-extrabold text-black">{point.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-7">{point.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {services.map((s, index) => (
                <div
                  key={`${s.title}-${index}`}
                  className={`rounded-2xl border border-yellow-400 bg-white p-7 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[210px] ${s.className || ""}`}
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
                </div>
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
                        <strong>reparación de paredes y pladur en Valencia</strong> para
                        pisos, casas y propiedades en alquiler. THEVULGO realiza parches,
                        reparación de agujeros, cortes de pladur, correcciones localizadas,
                        perforaciones y preparación de superficie para un resultado más limpio.
                      </p>

                      <p>
                        Muchos problemas pequeños de pared son fáciles de ignorar hasta que
                        empiezan a afectar el aspecto general de la habitación. Agujeros de tacos,
                        marcas de soportes de TV, daños de estantes, golpes, esquinas agrietadas
                        o cortes mal terminados pueden hacer que un espacio limpio se vea inacabado.
                      </p>

                      <p>
                        Esta categoría está diseñada para mejoras prácticas de pared: parches,
                        alisado, lijado, reparación de daños por soportes y arreglos localizados de
                        pladur. Es ideal después de retiradas, mudanzas o cambios en instalaciones.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional{" "}
                        <strong>wall and drywall repair services in Valencia</strong> for
                        apartments, homes and rental properties. THEVULGO handles common
                        patching, hole repair, drywall cutout repair, localized wall correction,
                        drilling work and surface preparation for a cleaner final result.
                      </p>

                      <p>
                        Many small wall problems are easy to ignore until they begin affecting
                        the overall look of the room. Old anchor holes, TV bracket marks, shelf
                        damage, wall dents, cracked corners and rough cutouts can make an otherwise
                        clean space look unfinished or poorly maintained.
                      </p>

                      <p>
                        This service category is designed for practical wall improvement work:
                        patching, smoothing, sanding, bracket damage repair and localized drywall fixes.
                        It is ideal after removals, move-outs, wall mounting changes or home refresh projects.
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
                        Cada reparación se hace con el objetivo de que la pared se vea más limpia,
                        más cuidada y mejor preparada para el uso diario o futuros retoques.
                      </p>

                      <p>
                        THEVULGO trabaja principalmente en{" "}
                        <strong>Valencia y alrededores</strong>, ayudando con parches y tareas de
                        pladur después de instalaciones, retiradas de estantes, mudanzas y mejoras.
                      </p>

                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente según el número
                        de zonas dañadas, tamaño de reparación, tipo de pared y alcance total.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Each repair is approached with the goal of making the wall look cleaner,
                        more intentional and better prepared for everyday living or future touch-up work.
                        Good wall repair is not only about filling holes — it is also about improving
                        the overall visual finish of the room.
                      </p>

                      <p>
                        THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                        helping clients with practical patching and drywall tasks after wall-mounted installs,
                        shelf removals, move-outs and general room refreshes.
                      </p>

                      <p>
                        Before work begins, clients receive a transparent estimate based on the number
                        of damaged areas, repair size, wall type and total scope. Several small wall
                        repairs can often be combined into one efficient visit.
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
                      <h3 className="font-extrabold text-black text-lg">{item.q}</h3>
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