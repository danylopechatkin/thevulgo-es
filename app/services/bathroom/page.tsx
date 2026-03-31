"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Clock3,
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
  Bath,
  Wrench,
  Drill,
  Lightbulb,
  House,
  Ruler,
  Hammer,
  Package,
  Droplets,
  ShowerHead,
  SquareDashedMousePointer,
} from "lucide-react";

export default function BathroomPage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for bathroom installations in Valencia."
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
      text: "Neat fitting, straight alignment and a cleaner final bathroom look.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Transparent pricing",
      text: "Clear estimate logic before work begins, based on scope and fittings.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: "Bathroom cabinet installation",
      desc: "Installation of bathroom cabinets and storage units with attention to alignment, spacing and a cleaner final position.",
      price: "from €59",
      icon: <Bath className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Mirror installation",
      desc: "Secure wall mounting of bathroom mirrors with proper height, cleaner alignment and more balanced visual placement.",
      price: "from €35",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Mirror cabinet fitting",
      desc: "Installation of mirror cabinets and practical storage units for better bathroom organization and everyday use.",
      price: "from €49",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Towel holder installation",
      desc: "Mounting of towel bars, hooks and holder systems with clean spacing and practical everyday positioning.",
      price: "from €29",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Toilet paper holder installation",
      desc: "Installation of toilet paper holders and small wall-mounted bathroom accessories in convenient positions.",
      price: "from €25",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Bathroom shelf installation",
      desc: "Installation of bathroom shelves for storage, cosmetics, décor or everyday items with cleaner wall alignment.",
      price: "from €35",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Vanity unit installation",
  desc: "Installation of bathroom vanity units with attention to positioning, alignment and a cleaner final furniture layout around the sink area.",
  price: "from €59",
  icon: <Bath className="h-5 w-5" />,
  className: "",
},
    {
      title: "Vanity light installation",
      desc: "Installation of compatible vanity or mirror-area lighting for better visibility and a more finished bathroom setup.",
      price: "from €39",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Shower head replacement",
      desc: "Replacement of shower heads and compatible fittings for cleaner look and better everyday comfort.",
      price: "from €29",
      icon: <ShowerHead className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Shower hose replacement",
      desc: "Replacement of shower hoses and visible connectors where the setup is straightforward and compatible.",
      price: "from €29",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Bathroom accessory installation",
      desc: "Installation of small bathroom accessories such as holders, rails, hooks and practical wall-mounted fittings.",
      price: "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Silicone renewal",
      desc: "Removal and replacement of old silicone around sinks, ванities, bathtubs and shower areas for cleaner finishing.",
      price: "from €39",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Seal & gap fixing",
      desc: "Sealing of small visible gaps around fixtures and bathroom elements for a tidier look and better protection.",
      price: "from €29",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Cabinet door alignment",
      desc: "Adjustment of bathroom cabinet doors to improve symmetry, closing feel and the visual line of the furniture.",
      price: "from €29",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Wall mounting for bathroom items",
      desc: "Drilling and mounting for mirrors, cabinets, shelves and accessories in suitable wall types.",
      price: "from €35",
      icon: <SquareDashedMousePointer className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Glass shelf installation",
  desc: "Installation of glass bathroom shelves for cosmetics, storage or decorative use with clean spacing and secure mounting.",
  price: "from €35",
  icon: <Ruler className="h-5 w-5" />,
  className: "",
},
    {
      title: "Multiple bathroom installation tasks",
      desc: "Best option if you need several bathroom fittings, accessories, mirrors, cabinets or small install tasks completed in one organized visit.",
      price: "custom quote",
      icon: <Bath className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = [
    "Good for apartments, homes and rental property bathrooms",
    "Useful for bathroom refreshes, upgrades and move-in setup",
    "Several bathroom fittings can be grouped into one visit",
    "Cleaner visual result with better mirror and cabinet alignment",
    "Practical service for visible bathroom improvement work",
    "Clear estimate before booking with defined scope",
  ];

  const faqItems = [
    {
      q: "What kind of bathroom work is included on this page?",
      a: "This page covers practical bathroom installation work such as mirror mounting, cabinet fitting, shelf installation, towel holders, bathroom accessories, silicone renewal, simple lighting and visible finishing tasks.",
    },
    {
      q: "Do you do full bathroom renovation?",
      a: "No. This page is mainly for practical bathroom installation and visible fitting work rather than full renovation, tiling or major construction projects.",
    },
    {
      q: "Can several bathroom tasks be done in one visit?",
      a: "Yes. This is one of the best uses of this service. Mirrors, holders, shelves, cabinets, accessories and small bathroom improvements can often be grouped into one organized appointment.",
    },
    {
      q: "Do you install bathroom mirrors and mirror cabinets?",
      a: "Yes. Mirror installation and mirror cabinet fitting are both included where the wall and mounting conditions are suitable.",
    },
    {
      q: "Can you replace silicone around bathroom fixtures?",
      a: "Yes. Silicone renewal around sinks, vanities, bathtubs and shower areas is included when the visible scope is suitable for this type of work.",
    },
    {
      q: "Do you install bathroom lighting?",
      a: "Yes. Simple compatible vanity lights, mirror-area lighting and basic bathroom light installation can be included where conditions are suitable.",
    },
    {
      q: "Is this service useful for rental apartments or bathroom refreshes?",
      a: "Yes. Bathroom installations and fitting work are very useful for apartment upgrades, move-ins, rental refreshes and improving the visual finish of the bathroom area.",
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
              Bathroom Installations
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Bathroom mirrors, cabinets, accessories, shelves, lighting,
              sealing and practical fitting work in Valencia.
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
                  className={`rounded-2xl border border-yellow-400 bg-white p-7 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[220px] ${s.className || ""}`}
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
                  Need an exact bathroom installation estimate?
                </h2>
                <p className="mt-3 text-gray-600 leading-8">
                  Send your request now and get a clear estimate for mirrors,
                  cabinets, bathroom accessories, shelves or several installation tasks in one visit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate")}
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
                    Bathroom fitting & setup • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  Bathroom Installation Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>bathroom installation services in Valencia</strong>
                    for apartments, homes and rental properties. THEVULGO helps with
                    practical bathroom fitting work such as mirror installation, cabinet fitting,
                    shelf mounting, towel holders, lighting, sealing and visible finishing details.
                  </p>

                  <p>
                    Bathrooms are compact but highly visible spaces, so even small installation
                    details make a big difference. Uneven mirrors, badly placed accessories,
                    poor cabinet alignment, missing shelves or worn silicone can make the whole
                    bathroom feel less complete than it should.
                  </p>

                  <p>
                    This page is designed for practical bathroom improvement work:
                    mirror mounting, cabinet fitting, shelf installation, visible accessories,
                    silicone renewal and grouped bathroom setup tasks. It is ideal for refreshes,
                    apartment upgrades and move-in projects.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    What is included
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Bathroom cabinets and mirror cabinet installation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Mirror mounting and alignment
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Towel holders, hooks and bathroom accessories
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Bathroom shelf installation and wall-mounted storage
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Vanity lighting and simple bathroom light setup
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Shower head and shower hose replacement
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Silicone renewal and seal fixing
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Multiple bathroom installation tasks in one visit
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  <p>
                    Good bathroom installation work is not only about attaching items to the wall.
                    It is also about making the bathroom feel cleaner, more organized and more finished
                    in everyday use, especially in smaller spaces where details stand out more.
                  </p>

                  <p>
                    THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                    helping clients complete practical bathroom setup work with cleaner fitting,
                    more balanced spacing and better visual results.
                  </p>

                  <p>
                    Before work begins, clients receive a transparent estimate based on
                    the number of items, fittings, mounting needs and total scope. When possible,
                    several bathroom tasks can be grouped into one efficient appointment.
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
                  Bathroom details that make the whole space feel cleaner and more complete
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  This service is ideal when the bathroom needs practical installation work,
                  cleaner alignment and better visible finishing without turning the job into a full renovation.
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
                    onClick={() => router.push("/estimate")}
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
                  Bathroom Installations FAQ
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
                    Ready to book your bathroom installation?
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    Send your request now and get a clear estimate for mirrors,
                    cabinets, shelves, lighting or multiple bathroom setup tasks in Valencia.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate")}
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
            Final price depends on item type, fittings, mounting surface, access and total installation scope.
          </div>
        </div>
      </section>
    </div>
  );
}