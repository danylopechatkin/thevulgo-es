"use client";

import React from "react";
import { useRouter } from "next/navigation";
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

export default function DrywallPage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for wall and drywall repairs in Valencia."
  );
  const whatsappHref = `https://wa.me/14379074913?text=${whatsappText}`;

  const trustPoints = [
    {
      title: "Fast response",
      text: "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: "Clean finish",
      text: "Neat patching, tidy drilling and a more professional final look.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Transparent pricing",
      text: "Clear starting prices and estimate logic before work begins.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: "Small hole repair",
      desc: "Repair of small holes in drywall or plaster walls with clean filling and smoothing.",
      price: "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Medium wall patching",
      desc: "Patch repair for more visible wall damage, dents and impact marks.",
      price: "from €45",
      icon: <Square className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Large drywall patch",
      desc: "Larger cutout and patch work with more preparation and finishing.",
      price: "from €69",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Anchor hole repair",
      desc: "Repair of old anchor holes and bracket marks after removals.",
      price: "from €29",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Wall touch-up prep",
      desc: "Basic surface preparation before painting or touch-up work.",
      price: "from €35",
      icon: <Paintbrush className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Drywall cutout repair",
      desc: "Repair of openings made for cables, fittings or previous installations.",
      price: "from €49",
      icon: <Square className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Crack filling",
      desc: "Filling and smoothing of small visible cracks in walls and corners.",
      price: "from €29",
      icon: <PencilRuler className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Corner repair",
      desc: "Repair of damaged wall corners and edge areas.",
      price: "from €39",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Wall levelling prep",
      desc: "Basic wall surface correction and prep for a cleaner finish.",
      price: "from €45",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Skim coat area repair",
      desc: "Localized skim work for patched zones and uneven small sections.",
      price: "from €49",
      icon: <Paintbrush className="h-5 w-5" />,
      className: "",
    },
    {
      title: "TV bracket wall repair",
      desc: "Wall restoration after TV bracket removal or media setup changes.",
      price: "from €39",
      icon: <Drill className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Shelf removal wall repair",
      desc: "Repair of shelf anchor points, screws and mounting damage.",
      price: "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Door handle wall damage repair",
      desc: "Repair of wall marks and dents caused by handles or impact.",
      price: "from €29",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Ceiling spot patching",
      desc: "Small localized ceiling patching and smoothing.",
      price: "from €39",
      icon: <House className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Cable hole closing",
      desc: "Closing and smoothing small cable or wiring openings in walls.",
      price: "from €29",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Wall drilling service",
      desc: "Clean drilling for mounts, brackets or accessories where suitable.",
      price: "from €25",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Concrete wall drilling",
      desc: "Basic drilling in concrete or brick for home installs and fixtures.",
      price: "from €35",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Drywall mounting prep",
      desc: "Preparation of drywall areas for safe and cleaner wall mounting.",
      price: "from €35",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Patch and sand finish",
      desc: "Patch work finished with sanding for better paint-ready results.",
      price: "from €45",
      icon: <Paintbrush className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Multiple wall repairs",
  desc: "Combined estimate for several drywall, patching or drilling tasks",
  price: "custom quote",
  icon: <Wrench className="h-5 w-5" />,
  className: "",
},
  ];

  const whyChoose = [
    "Useful for homes, apartments and rental properties",
    "Good for move-outs, removals and wall refreshes",
    "Clean patching and neater final presentation",
    "Several small wall repairs can be combined in one visit",
    "Helpful after TV mounts, shelves, brackets or cable work",
    "Clear estimate before booking with practical scope",
  ];

  const faqItems = [
    {
      q: "Do you repair small holes in drywall?",
      a: "Yes. Small drywall holes, anchor holes and common wall marks are included in this category when the repair is localized and straightforward.",
    },
    {
      q: "Can you repair wall damage after removing a TV bracket?",
      a: "Yes. This is one of the common jobs on this page. Old screw holes, anchors and bracket marks can usually be patched and prepared for a cleaner finish.",
    },
    {
      q: "Do you also paint the repaired area?",
      a: "This page is focused mainly on wall repair, patching, sanding and paint preparation. Full painting may be handled separately depending on the scope.",
    },
    {
      q: "Can several wall repairs be done in one visit?",
      a: "Yes. Multiple small patching, drilling or drywall repair tasks can often be grouped into one appointment.",
    },
    {
      q: "Do you drill into concrete or brick walls?",
      a: "Yes, for basic home installation tasks where the drilling scope is straightforward and suitable for the surface.",
    },
    {
      q: "Is sanding included after patching?",
      a: "When required for the repair type, sanding can be included to improve the final look and make the area more paint-ready.",
    },
    {
      q: "What kind of wall damage do you usually handle?",
      a: "Typical jobs include anchor holes, dents, small cracks, removed bracket marks, drywall cutouts, shelf damage and localized patch areas.",
    },
    {
      q: "Do you handle full wall renovation?",
      a: "No. This page is intended for patching, drywall repair, drilling and local wall surface correction rather than full renovation work.",
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
          {/* HERO */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              THEVULGO • Valencia
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black">
              Walls & Drywall Repairs
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Wall patching, drywall repair, drilling, anchor hole fixing and paint-prep work
              in Valencia for apartments, homes and rental properties.
            </p>
          </div>

          {/* TRUST */}
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

          {/* SERVICES GRID */}
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

          {/* MAIN CTA */}
          <div className="mt-12 rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                  Need an exact wall repair estimate?
                </h2>
                <p className="mt-3 text-gray-600 leading-8">
                  Send a request now and get a clear estimate for patching, drywall repairs,
                  drilling work or several small wall tasks in one visit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate?category=drywall")}
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

          {/* SEO BLOCK */}
          <section className="mt-16">
            <div className="w-full rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 lg:p-12 shadow-xl">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-semibold text-black">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    Drywall & wall repair • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  Wall and Drywall Repair Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>wall and drywall repair services in Valencia</strong>
                    for apartments, homes and rental properties. THEVULGO handles
                    common patching, hole repair, drywall cutout repair, localized wall correction,
                    drilling work and surface preparation for a cleaner final result.
                  </p>

                  <p>
                    Many small wall problems are easy to ignore until they begin affecting
                    the overall look of the room. Old anchor holes, TV bracket marks, shelf damage,
                    wall dents, cracked corners and rough cutouts can make an otherwise clean space
                    look unfinished or poorly maintained.
                  </p>

                  <p>
                    This service category is designed for practical wall improvement work:
                    patching, smoothing, sanding, bracket damage repair and localized drywall fixes.
                    It is ideal after removals, move-outs, wall mounting changes or home refresh projects.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    What is included
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Drywall hole repair and local wall patching
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Anchor hole repair after shelves or brackets
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Wall damage after TV mount removal
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Crack filling and localized smoothing
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Drywall cutout repair and cable hole closing
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Wall drilling and concrete or brick drilling
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Corner repair and localized skim work
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Patch, sand and prep before painting
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
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
                </div>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE */}
          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                  <BadgeCheck className="h-4 w-4" />
                  Why clients choose this service
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-black">
                  Wall repairs that make the room look finished again
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  This service is designed for practical wall improvement after brackets, shelves,
                  anchors, media setups, removals and general home wear. It is especially useful
                  when small damage adds up and starts affecting the look of the space.
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
                    onClick={() => router.push("/estimate?category=drywall")}
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

          {/* FAQ */}
          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-10 text-center sm:text-left">
                  Walls & Drywall FAQ
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

          {/* FINAL CTA */}
          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                    Ready to book your wall repair?
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    Send your request now and get a clear estimate for drywall patching,
                    wall repair, drilling work or multiple small wall fixes in Valencia.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate?category=drywall")}
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
            Final price depends on wall type, repair size, number of damaged areas and total scope.
          </div>
        </div>
      </section>
    </div>
  );
}