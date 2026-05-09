"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Clock3,
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
  Home,
  Package,
  Sofa,
  Tv,
  Lightbulb,
  Drill,
  Wrench,
  Hammer,
  Boxes,
  KeyRound,
  DoorOpen,
  Bath,
  ChefHat,
  Router,
  MonitorSmartphone,
} from "lucide-react";

export default function ApartmentPage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for apartment and move-in setup services in Valencia."
  );
  const whatsappHref = `https://wa.me/14379074913?text=${whatsappText}`;

  const trustPoints = [
    {
      title: "Fast response",
      text: "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: "All-in-one setup",
      text: "Multiple apartment tasks completed in one organized visit.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Transparent pricing",
      text: "Clear estimate logic before work begins, based on full setup scope.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
  title: "Full apartment setup",
  desc: "Complete setup of a new, empty or recently rented apartment including furniture assembly, lighting installation, curtain fitting, wall mounting, room organization and practical finishing tasks. Ideal when you want the apartment to feel functional, organized and ready for everyday living from day one.",
  price: "custom quote",
  icon: <Home className="h-5 w-5" />,
  className: "lg:col-span-2",
},
    {
  title: "Rental-ready apartment setup",
  desc: "Preparation of the apartment for tenants, long-term rental or Airbnb including furniture setup, essential installations, layout improvements, visual finishing details and practical room readiness. A strong option when the goal is to make the property look complete, clean and ready to live in without multiple separate visits.",
  price: "custom quote",
  icon: <Home className="h-5 w-5" />,
  className: "lg:col-span-2",
},
{
  title: "Same-day move-in setup",
  desc: "Fast-track setup service focused on getting your apartment ready in one day with furniture, lights, curtains and essential installations completed efficiently.",
  price: "from €79",
  icon: <Clock3 className="h-5 w-5" />,
  className: "",
},
{
  title: "Final touch & finishing setup",
  desc: "Final adjustments and small installations that make the apartment feel complete — mirrors, decor, alignment fixes, accessories and visual finishing details.",
  price: "from €45",
  icon: <CheckCircle2 className="h-5 w-5" />,
  className: "",
},
    {
      title: "Furniture assembly",
      desc: "Assembly of beds, tables, chairs, shelves, small cabinets and other furniture needed to make the apartment functional from day one.",
      price: "from €39",
      icon: <Sofa className="h-5 w-5" />,
      className: "",
    },
    {
      title: "TV mounting & setup",
      desc: "Mounting TVs and setting up the viewing area with cleaner alignment and a more finished room layout.",
      price: "from €49",
      icon: <Tv className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Lighting installation",
      desc: "Installation of ceiling lights, lamps and basic room lighting fixtures for a ready-to-live apartment setup.",
      price: "from €39",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Curtain & blind installation",
      desc: "Installation of curtain rails, rods, blinds and simple window covering systems for privacy and comfort.",
      price: "from €35",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Mirror & wall accessory mounting",
      desc: "Mounting mirrors, hooks, shelves and practical wall accessories to make the apartment feel more complete and organized.",
      price: "from €29",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Bedroom setup & finishing",
  desc: "Practical bedroom setup including bed positioning, bedside items, mirrors, small fittings and essential finishing touches to make the room feel ready from day one.",
  price: "from €49",
  icon: <Home className="h-5 w-5" />,
  className: "",
},
    {
      title: "Unpacking & room setup",
      desc: "Help with unpacking boxes, arranging furniture and placing essential items so the apartment becomes functional faster.",
      price: "from €49",
      icon: <Boxes className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Home organization setup",
      desc: "Basic room organization, furniture placement and small layout improvements to make better everyday use of the space.",
      price: "from €45",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Minor fixes & adjustments",
      desc: "Small practical corrections, tightening fittings and improving usability across multiple parts of the apartment.",
      price: "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Door & handle adjustments",
      desc: "Basic adjustment of doors, handles and visible hardware to improve how the apartment feels in daily use.",
      price: "from €29",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Kitchen move-in setup",
      desc: "Basic setup of kitchen items, small installations and practical preparation so the kitchen is ready for immediate daily use.",
      price: "from €49",
      icon: <ChefHat className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Bathroom move-in setup",
      desc: "Installation of mirrors, holders, shelves and small bathroom essentials to complete the bathroom quickly and cleanly.",
      price: "from €39",
      icon: <Bath className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Router & device setup",
      desc: "Basic setup of routers, smart devices and home electronics to get the apartment connected and ready to use.",
      price: "from €39",
      icon: <Router className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Workspace / desk setup",
      desc: "Assembly and setup of desks, workstations and home office essentials for practical work-from-home use.",
      price: "from €39",
      icon: <MonitorSmartphone className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Entry & key area setup",
      desc: "Setup of entry-area essentials such as hooks, small storage, mirrors and practical accessories near the entrance.",
      price: "from €29",
      icon: <KeyRound className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Multiple move-in tasks",
      desc: "Best option if you need many apartment setup tasks done in one visit. Furniture, lighting, mounting, organization and small fixes can all be grouped for faster move-in.",
      price: "custom quote",
      icon: <Home className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = [
    "Perfect for new apartments, rentals and move-in days",
    "Useful when you want everything done in one organized visit",
    "Helps make the apartment functional faster and with less stress",
    "Cleaner visual result with better furniture and room setup",
    "Practical service for small installs, setup and finishing tasks",
    "Clear estimate before booking with defined scope",
  ];

  const faqItems = [
    {
      q: "What is included in apartment and move-in setup?",
      a: "This page covers practical move-in tasks such as furniture assembly, lighting installation, curtain fitting, TV setup, wall mounting, unpacking help, room organization and small apartment fixes that help make the space ready for living.",
    },
    {
      q: "Can several move-in tasks be done in one visit?",
      a: "Yes. This is one of the main advantages of this service. Furniture, lights, curtains, mirrors, small fixes and room setup tasks can often be grouped into one organized appointment.",
    },
    {
      q: "Is this service useful for rental apartments?",
      a: "Yes. It is especially useful for rental apartments, newly rented flats, Airbnb preparation, relocation and making a new place feel complete much faster.",
    },
    {
      q: "Do you unpack boxes too?",
      a: "Basic unpacking help and practical room setup can be included where it fits the scope of the move-in visit and helps organize the apartment faster.",
    },
    {
      q: "Can you set up kitchen and bathroom essentials too?",
      a: "Yes. Small kitchen and bathroom setup tasks can be included as part of a wider apartment preparation visit.",
    },
    {
      q: "Do I need to have all furniture and accessories ready before the visit?",
      a: "Ideally yes. The service works best when the main furniture, fittings and apartment items are already on site and ready to be installed or arranged.",
    },
    {
      q: "Is this page good for people moving into an empty apartment?",
      a: "Yes. This is exactly what the service is designed for — turning an empty or incomplete apartment into a practical, ready-to-use home faster and with less hassle.",
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
              Apartment & Move-In Setup
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Furniture assembly, lighting, curtains, mounting, room setup,
              unpacking help and practical apartment preparation in Valencia.
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
                  Need an exact apartment setup estimate?
                </h2>
                <p className="mt-3 text-gray-600 leading-8">
                  Send your request now and get a clear estimate for furniture,
                  lights, curtains, room setup, unpacking or multiple move-in tasks in one visit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate?category=move-in")}
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
                    Move-in preparation • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  Apartment Setup Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>apartment and move-in setup services in Valencia</strong>
                    for rentals, homes and newly occupied apartments. THEVULGO helps with
                    practical move-in work such as furniture assembly, curtain installation,
                    lighting setup, TV mounting, unpacking help, room organization and small apartment fixes.
                  </p>

                  <p>
                    Moving into a new place is often not just about carrying boxes inside.
                    The apartment still needs lights, curtains, furniture, mirrors, basic fittings,
                    better organization and practical everyday usability before it really feels ready to live in.
                  </p>

                  <p>
                    This page is designed for complete apartment preparation:
                    grouped installation tasks, room setup, unpacking support, practical layout improvements
                    and the small finishing details that turn an empty flat into a functional living space.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    What is included
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Furniture assembly and practical room setup
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Curtain, blind and lighting installation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      TV mounting and wall accessory installation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Unpacking help and basic apartment organization
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Kitchen and bathroom move-in essentials
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Small fixes and usability improvements
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Router, device and entry-area setup
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Multiple move-in tasks grouped into one visit
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  <p>
                    Good move-in setup is not only about installing separate things one by one.
                    It is about making the whole apartment feel ready, organized and much easier to live in from the start.
                    The more tasks are combined into one plan, the smoother and more efficient the move-in becomes.
                  </p>

                  <p>
                    THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                    helping clients move into apartments faster with practical setup work,
                    cleaner organization and fewer unfinished tasks left behind.
                  </p>

                  <p>
                    Before work begins, clients receive a transparent estimate based on
                    the number of rooms, furniture pieces, installations and total task scope.
                    When possible, many move-in tasks are grouped into one efficient appointment.
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
                  Move in faster, with less stress and fewer unfinished tasks
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  This service is ideal when the apartment needs practical setup work,
                  basic installation and better organization without turning the process into a long series of separate bookings.
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
                    onClick={() => router.push("/estimate?category=move-in")}
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
                  Apartment & Move-In Setup FAQ
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
                    Ready to book your apartment setup?
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    Send your request now and get a clear estimate for furniture,
                    lighting, curtains, room setup or multiple move-in tasks in Valencia.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate?category=move-in")}
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
            Final price depends on apartment size, number of tasks, furniture, installations and total setup scope.
          </div>
        </div>
      </section>
    </div>
  );
}