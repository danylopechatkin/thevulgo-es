"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Clock3,
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
  ChefHat,
  Wrench,
  Drill,
  Lightbulb,
  House,
  Ruler,
  Hammer,
  Package,
  DoorOpen,
} from "lucide-react";

export default function KitchenPage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for kitchen installations in Valencia."
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
      text: "Neat fitting, straight alignment and a cleaner final kitchen look.",
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
      title: "Kitchen cabinet installation",
      desc: "Installation of compatible kitchen cabinets and storage units with attention to alignment, spacing and cleaner final positioning.",
      price: "from €79",
      icon: <ChefHat className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Wall cabinet mounting",
      desc: "Secure mounting of upper kitchen cabinets in suitable wall types with practical alignment and spacing.",
      price: "from €59",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Base unit installation",
      desc: "Installation and positioning of lower kitchen cabinet units for practical layout and better stability.",
      price: "from €59",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Cabinet door alignment",
      desc: "Adjustment of kitchen cabinet doors to improve gaps, lines and everyday usability.",
      price: "from €35",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Handle installation",
      desc: "Installation of kitchen handles and knobs with cleaner symmetry and spacing across cabinet fronts.",
      price: "from €29",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Soft-close adjustment",
      desc: "Basic adjustment of compatible hinges and fittings to improve cabinet door movement and closing feel.",
      price: "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Shelf installation",
      desc: "Installation of interior or open kitchen shelves for storage, display or daily-use organization.",
      price: "from €35",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Kitchen lighting installation",
      desc: "Installation of simple kitchen lights, under-cabinet lights or compatible lighting elements for better visibility.",
      price: "from €39",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Under-cabinet light setup",
      desc: "Basic mounting and setup of under-cabinet lighting for cleaner worktop visibility and kitchen atmosphere.",
      price: "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Kitchen rail installation",
      desc: "Installation of wall rails and practical kitchen accessories for utensils, storage or small hanging systems.",
      price: "from €29",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Back panel fitting",
      desc: "Basic fitting and positioning of compatible kitchen back panels and finishing pieces where suitable.",
      price: "from €45",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Trim & filler panel fitting",
      desc: "Installation of filler strips, trim pieces and visible finishing parts to improve the final kitchen look.",
      price: "from €39",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Worktop support prep",
      desc: "Basic prep and support fitting for compatible worktop sections where the installation scope is straightforward.",
      price: "from €49",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Appliance housing fitting",
      desc: "Fitting and positioning of cabinets or surrounding units intended for built-in kitchen appliances where suitable.",
      price: "from €49",
      icon: <House className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Kitchen accessory installation",
      desc: "Installation of small practical kitchen accessories such as holders, rails, organizers and visible utility fittings.",
      price: "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Worktop installation & fitting",
  desc: "Positioning and fitting of compatible kitchen worktops with careful alignment, support adjustment and cleaner final finish for everyday kitchen use.",
  price: "from €89",
  icon: <Ruler className="h-5 w-5" />,
  cclassName: "",
},
    {
      title: "Multiple kitchen installation tasks",
      desc: "Best option if you need several kitchen units, fittings, lights, handles or small installation tasks completed in one organized visit.",
      price: "custom quote",
      icon: <ChefHat className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = [
    "Good for apartments, homes and rental property kitchens",
    "Useful for kitchen refreshes, upgrades and move-in setup",
    "Several kitchen fittings can be grouped into one visit",
    "Cleaner visual result with better cabinet alignment",
    "Practical service for visible kitchen improvement work",
    "Clear estimate before booking with defined scope",
  ];

  const faqItems = [
    {
      q: "What kind of kitchen work is included on this page?",
      a: "This page covers practical kitchen installation work such as cabinet fitting, handle installation, shelf mounting, under-cabinet lighting, alignment corrections, trim fitting and small visible kitchen improvement tasks.",
    },
    {
      q: "Do you install full custom kitchens?",
      a: "This page is mainly for practical kitchen installation and visible fitting work rather than full large-scale kitchen construction or specialized trade-only projects.",
    },
    {
      q: "Can several kitchen tasks be done in one visit?",
      a: "Yes. This is one of the best uses of this service. Cabinets, handles, shelves, lighting and small fitting tasks can often be grouped into one organized appointment.",
    },
    {
      q: "Do you work with IKEA kitchen units or similar systems?",
      a: "Yes, compatible kitchen cabinets and modular kitchen systems can be included where the scope is suitable for installation and fitting work.",
    },
    {
      q: "Can you align cabinet doors and handles?",
      a: "Yes. Cabinet door alignment, handle placement and visible finishing details are common kitchen tasks on this page.",
    },
    {
      q: "Do you install under-cabinet lighting?",
      a: "Yes. Simple under-cabinet lighting installation and compatible kitchen light setup are included where conditions are suitable.",
    },
    {
      q: "Is this service useful for rental apartments or kitchen refreshes?",
      a: "Yes. Kitchen installation and fitting work is very useful for apartment upgrades, move-ins, rental refreshes and general visual improvement of the kitchen area.",
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
              Kitchen Installations
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Kitchen cabinet installation, handle fitting, shelves, lighting,
              alignment corrections and practical kitchen improvement work in Valencia.
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
                  Need an exact kitchen installation estimate?
                </h2>
                <p className="mt-3 text-gray-600 leading-8">
                  Send your request now and get a clear estimate for cabinets,
                  handles, kitchen lighting, shelves or several installation tasks in one visit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate?category=kitchen")}
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
                    Kitchen fitting & setup • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  Kitchen Installation Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>kitchen installation services in Valencia</strong>
                    for apartments, homes and rental properties. THEVULGO helps with
                    practical kitchen fitting work such as cabinet installation, shelving,
                    handle fitting, kitchen lighting, alignment correction and visible finishing details.
                  </p>

                  <p>
                    Kitchens are one of the most important and most visible spaces in a home,
                    so even small installation details matter. Uneven cabinet lines, misaligned doors,
                    missing handles, poor lighting or unfinished trim can make the whole kitchen
                    feel less complete than it should.
                  </p>

                  <p>
                    This page is designed for practical kitchen improvement work:
                    cabinet fitting, visible finishing, support prep, accessory installation
                    and grouped kitchen setup tasks. It is ideal for kitchen refreshes,
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
                      Kitchen cabinet and base unit installation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Wall cabinet mounting and alignment
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Handle fitting and soft-close adjustments
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Shelf installation and visible storage fittings
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Kitchen and under-cabinet lighting installation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Trim, filler panel and finishing piece fitting
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Appliance housing preparation and support fitting
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Multiple kitchen installation tasks in one visit
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  <p>
                    Good kitchen installation work is not only about making pieces fit.
                    It is also about improving the visual line of the kitchen, making
                    daily use easier and creating a cleaner, more finished result across the whole space.
                  </p>

                  <p>
                    THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                    helping clients complete practical kitchen setup work with cleaner fitting,
                    more organized installation and better everyday usability.
                  </p>

                  <p>
                    Before work begins, clients receive a transparent estimate based on
                    the number of units, accessories, fittings and total scope. When possible,
                    several kitchen tasks can be grouped into one efficient appointment.
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
                  Kitchen details that make the whole space feel more finished
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  This service is ideal when the kitchen needs practical installation work,
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
                    onClick={() => router.push("/estimate?category=kitchen")}
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
                  Kitchen Installations FAQ
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
                    Ready to book your kitchen installation?
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    Send your request now and get a clear estimate for cabinets,
                    kitchen lighting, shelves, handles or multiple kitchen setup tasks in Valencia.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate?category=kitchen")}
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
            Final price depends on cabinet type, fittings, number of units, access and total installation scope.
          </div>
        </div>
      </section>
    </div>
  );
}