"use client";

import React from "react";
import { useRouter } from "next/navigation";
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

export default function RepairsPage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for home repairs in Valencia."
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
      text: "Neat minor repairs with tidy details and a cleaner final look.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Transparent pricing",
      text: "Clear estimate logic before work begins, with no unnecessary surprises.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: "Silicone renewal",
      desc: "Replacement of old silicone in kitchens, bathrooms and around fixtures.",
      price: "from €29",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Sealing & gap filling",
      desc: "Small gap sealing around surfaces, fittings and visible home details.",
      price: "from €29",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Minor wall fixes",
      desc: "Simple local wall touch-ups, screw marks and small visible corrections.",
      price: "from €29",
      icon: <Paintbrush className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Door adjustment",
      desc: "Small door alignment fixes and basic usability improvements.",
      price: "from €35",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Loose handle fixing",
      desc: "Tightening and fixing of loose handles, knobs and small fittings.",
      price: "from €25",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Curtain rail adjustments",
      desc: "Minor fixes and corrections for curtain rails and simple fittings.",
      price: "from €29",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Wall anchor installation",
  desc: "Installation of wall anchors and plugs for safe mounting of shelves, mirrors and fixtures.",
  price: "from €25",
  icon: <Drill className="h-5 w-5" />,
  className: "",
},
    {
      title: "Shelf re-fixing",
      desc: "Re-tightening or repositioning loose or unstable small shelves.",
      price: "from €35",
      icon: <Drill className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Mirror re-mounting",
      desc: "Adjustment or re-fixing of mirrors and small wall accessories.",
      price: "from €35",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Furniture touch-up fixes",
      desc: "Simple corrections for small furniture issues and fitting problems.",
      price: "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Bathroom accessory fixing",
      desc: "Minor repair or re-fixing of holders, hooks and bathroom accessories.",
      price: "from €29",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Socket / cover straightening",
      desc: "Basic correction of loose covers, plates and visible accessory alignment.",
      price: "from €25",
      icon: <Plug className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Cabinet door alignment",
      desc: "Simple hinge adjustments for cabinet doors and interior fittings.",
      price: "from €35",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Small drilling jobs",
      desc: "Clean drilling for simple home fixes, accessories and minor installs.",
      price: "from €25",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Move-out touch-ups",
      desc: "Small visible corrections to improve a room before move-out or handover.",
      price: "from €39",
      icon: <House className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Kitchen minor fixes",
      desc: "Small kitchen adjustments and visible repair work for daily usability.",
      price: "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Multiple small repairs",
      desc: "Combined estimate for several minor home repair tasks in one visit.",
      price: "custom quote",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    
  ];

  const whyChoose = [
    "Good for apartments, homes and rental properties",
    "Useful for move-ins, move-outs and small refresh jobs",
    "Several minor tasks can be grouped into one visit",
    "Practical help for visible everyday repair issues",
    "Clean final result without overcomplicating the job",
    "Clear estimate before booking with defined scope",
  ];

  const faqItems = [
    {
      q: "What kind of home repairs are included here?",
      a: "This page covers small practical repair tasks such as silicone renewal, sealing, loose fittings, cabinet adjustments, shelf re-fixing, small drilling jobs and general visible touch-up fixes around the home.",
    },
    {
      q: "Can several small repairs be done in one visit?",
      a: "Yes. This is one of the main advantages of this service. Several minor repair tasks can often be grouped into one appointment for a more efficient visit.",
    },
    {
      q: "Is this service good for rental apartments?",
      a: "Yes. Home repairs are especially useful for rental properties, move-outs, move-ins and small refresh work before photos, tenants or inspections.",
    },
    {
      q: "Do you handle large renovation work?",
      a: "No. This page is focused on small home repair tasks and visible fixes rather than full renovation, major construction or highly specialized trade work.",
    },
    {
      q: "Can you fix loose shelves, handles and accessories?",
      a: "Yes. Loose shelves, handles, bathroom accessories, cabinet doors and similar household items are common jobs in this category.",
    },
    {
      q: "Do you do wall touch-ups too?",
      a: "Basic localized wall touch-ups and small visible corrections can be included when they fit the scope of minor repairs.",
    },
    {
      q: "Can this page include kitchen and bathroom small fixes?",
      a: "Yes. Many small kitchen and bathroom usability issues fit perfectly into this category, especially when they do not require major plumbing or electrical work.",
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
              Home Repairs
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Minor home repairs in Valencia for apartments, houses and rental properties:
              sealing, silicone, small fixes, adjustments, re-fixing and everyday repair work.
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
                  Need an exact home repair estimate?
                </h2>
                <p className="mt-3 text-gray-600 leading-8">
                  Send your request now and get a clear estimate for minor repairs,
                  sealing, adjustments or several small tasks completed in one visit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate/repairs")}
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
                    Minor home repairs • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  Home Repair Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>home repair services in Valencia</strong> for apartments,
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
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    What is included
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Silicone replacement and sealing work
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Small visible wall and surface touch-ups
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Loose handle, fitting and accessory fixing
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Cabinet door and small alignment corrections
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Shelf re-fixing and minor drilling tasks
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Bathroom, kitchen and everyday minor repairs
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Move-out and move-in touch-up corrections
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Multiple small jobs combined into one visit
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  <p>
                    Good home repair service is not only about fixing what is broken. It is also
                    about improving the overall feeling of the space, reducing visual clutter
                    and making everyday details look cleaner and more finished.
                  </p>

                  <p>
                    THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                    helping clients with grouped small tasks, maintenance-style fixes and
                    practical repair work that makes homes feel more complete again.
                  </p>

                  <p>
                    Before work begins, clients receive a transparent estimate based on
                    the number of tasks, materials involved and total complexity. When possible,
                    several minor repairs are combined into one efficient appointment.
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
                  Practical small fixes that make the whole home feel better
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  This service works especially well for people who do not need a big renovation,
                  but do want multiple small problems fixed properly, cleanly and in one organized visit.
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
                    onClick={() => router.push("/estimate/repairs")}
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
                  Home Repairs FAQ
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
                    Ready to book your home repairs?
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    Send your request now and get a clear estimate for sealing, small fixes,
                    grouped repair tasks or practical touch-up work in Valencia.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate/repairs")}
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
            Final price depends on the number of repair tasks, materials, access and total scope.
          </div>
        </div>
      </section>
    </div>
  );
}