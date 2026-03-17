"use client";

import React from "react";
import { useRouter } from "next/navigation";
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

export default function FurniturePage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for furniture assembly in Valencia."
  );
  const whatsappHref = `https://wa.me/14379074913?text=${whatsappText}`;

  const trustPoints = [
    {
      title: "Fast response",
      text: "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: "Clean assembly",
      text: "Neat setup, careful handling and a tidy final result.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Transparent pricing",
      text: "Clear starting prices and estimate logic before the job starts.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const serviceCards = [
    {
      title: "IKEA furniture assembly",
      desc: "Professional assembly of IKEA flat-pack furniture including wardrobes, beds, cabinets, dressers and shelving units. Careful fitting, correct alignment and stable setup for everyday use.",
      price: "from €39",
      icon: <Hammer className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Wardrobe assembly",
      desc: "Sliding or standard wardrobes assembled and aligned properly.",
      price: "from €69",
      icon: <Boxes className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Bed frame assembly",
      desc: "Standard bed setup, frame fitting and stable final alignment.",
      price: "from €49",
      icon: <BedDouble className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Chest of drawers",
      desc: "Drawer units assembled cleanly with proper rail fitting.",
      price: "from €45",
      icon: <FolderOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Shelving units",
      desc: "Freestanding shelving and bookcase assembly.",
      price: "from €39",
      icon: <Boxes className="h-5 w-5" />,
      className: "",
    },
    {
      title: "TV stands & media units",
       desc: "Assembly of TV stands, media consoles and entertainment units with careful alignment and stable positioning. Suitable for living rooms, home cinema setups and media storage furniture.",
      price: "from €45",
      icon: <Package className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Desks & workstations",
      desc: "Home office desks, work tables and compact workstations.",
      price: "from €39",
      icon: <LampDesk className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Dining tables",
      desc: "Table frames, tops and legs assembled with stable final setup.",
      price: "from €35",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Sideboards & cabinets",
      desc: "Storage cabinets, sideboards and hallway furniture.",
      price: "from €49",
      icon: <Boxes className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Sofa & modular pieces",
      desc: "Simple sofa assembly and modular seating setup when applicable.",
      price: "from €39",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Furniture fixing to wall",
      desc: "Professional anti-tip wall fixing for wardrobes, cabinets, shelving units and tall storage furniture. Improves stability and safety by securing furniture to the wall using suitable anchors and hardware.",
      price: "from €29",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Move-in furniture setup",
      desc: "Multiple pieces assembled during apartment or room setup.",
      price: "custom quote",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
  ];

  const whyChoose = [
    "Assembly for apartments, homes and rental properties",
    "Careful fitting and hardware check",
    "Optional wall fixing for safer setups",
    "Clear estimate before booking",
  ];

  const faqItems = [
    {
      q: "Do you assemble IKEA furniture only?",
      a: "No. IKEA is common, but many other flat-pack and standard furniture brands can also be assembled depending on the item and hardware.",
    },
    {
      q: "Can wardrobes and tall cabinets be fixed to the wall?",
      a: "Yes. Wall fixing can be added when suitable and is often recommended for safety, especially for taller furniture.",
    },
    {
      q: "Do I need to unpack everything before the appointment?",
      a: "Not necessarily. Furniture can be assembled from boxed items, but having all parts available and the room prepared helps speed up the process.",
    },
    {
      q: "Can multiple furniture items be assembled in one visit?",
      a: "Yes. If you have several items, a combined estimate can be provided based on the total scope and time required.",
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
              THEVULGO • Valencia
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black">
              Furniture Assembly
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Professional furniture assembly in Valencia for IKEA, wardrobes, beds,
              shelving units, desks, cabinets and full move-in setups.
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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {serviceCards.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-yellow-400 bg-white p-6 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] ${item.className}`}
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
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                  Need an exact estimate?
                </h2>

                <p className="mt-3 text-gray-600 leading-8">
                  Get a fast estimate for IKEA furniture, wardrobes, beds, cabinets,
                  desks or multi-item furniture setup. Continue to the calculator
                  or send a request directly on WhatsApp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate/furniture")}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                >
                  Get estimate <ArrowRight className="h-4 w-4" />
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
                    Professional assembly • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  Furniture Assembly Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>furniture assembly services in Valencia</strong>
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
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    What is included
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      IKEA furniture assembly
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Wardrobes and tall storage units
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Bed frames and bedroom furniture
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Desks, workstations and home office setups
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Cabinets, shelves and sideboards
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Optional wall fixing for safer furniture setup
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  <p>
                    Each item is assembled carefully with attention to fittings,
                    hardware, door alignment, drawer movement and final placement.
                    The goal is always a stable and clean result rather than a rushed setup.
                  </p>

                  <p>
                    THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                    providing quick response times and clear communication before the appointment.
                  </p>

                  <p>
                    Before assembly begins, clients receive a transparent estimate
                    based on the number of pieces, furniture type and complexity.
                  </p>
                </div>
              </div>
            </div>
          </section>

         {/* WHY CHOOSE BLOCK */}
<section className="mt-16">
  <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">

    <div className="max-w-4xl">

      <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
        <BadgeCheck className="h-4 w-4" />
        Why clients choose this service
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-black">
        Careful fitting, stable setup, no wasted time
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
          onClick={() => router.push("/estimate/furniture")}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
        >
          Get estimate <ArrowRight className="h-4 w-4" />
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
                  Furniture Assembly FAQ
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
                    Ready to assemble your furniture?
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    Send your request now and get a clear estimate for furniture assembly,
                    wardrobe setup, desks, shelving units or move-in furniture installation in Valencia.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate/furniture")}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition"
                  >
                    Get estimate <ArrowRight className="h-4 w-4" />
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
            Final price depends on furniture type, quantity, complexity and optional wall fixing.
          </div>
        </div>
      </section>
    </div>
  );
}