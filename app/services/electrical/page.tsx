"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Zap,
  Lightbulb,
  Power,
  Plug,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  LampCeiling,
  Wrench,
  BadgePlus,
  CircleOff,
} from "lucide-react";

export default function ElectricalPage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for electrical services in Valencia."
  );
  const whatsappHref = `https://wa.me/14379074913?text=${whatsappText}`;

  const trustPoints = [
    {
      title: "Fast response",
      text: "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: "Clean work",
      text: "Neat installation, tidy mounting and a clean final finish.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Transparent pricing",
      text: "Clear starting prices and estimate logic before work begins.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const serviceCards = [
    {
      title: "Light fixture installation",
      desc: "Ceiling lights, lamps and simple lighting replacement for homes and apartments.",
      price: "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Pendant lights",
      desc: "Pendant light installation with careful positioning and clean finish.",
      price: "from €39",
      icon: <LampCeiling className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Wall lights & sconces",
      desc: "Wall-mounted lighting installed neatly and securely.",
      price: "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Switch replacement",
      desc: "Replacement of damaged or outdated light switches.",
      price: "from €29",
      icon: <Power className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Socket replacement",
      desc: "Replacement of wall sockets and faceplates for a cleaner setup.",
      price: "from €29",
      icon: <Plug className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Basic electrical mounting",
      desc: "Mounting and connecting simple electrical fixtures with tidy final setup.",
      price: "from €35",
      icon: <Zap className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "LED strip setup",
      desc: "Simple LED strip installation for shelves, desks or accent lighting.",
      price: "from €29",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Extractor fan replacement",
      desc: "Replacement of compatible bathroom or kitchen extractor fans.",
      price: "from €45",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Bathroom light replacement",
      desc: "Simple replacement of mirror lights and bathroom fixtures.",
      price: "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Ceiling lamp replacement",
      desc: "Old ceiling light removed and new fixture installed cleanly.",
      price: "from €35",
      icon: <LampCeiling className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Dimmer switch replacement",
      desc: "Simple dimmer replacement where the existing setup is compatible.",
      price: "from €35",
      icon: <BadgePlus className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Power strip / cable tidy setup",
      desc: "Simple visible cable cleanup and power accessory organization.",
      price: "from €29",
      icon: <Plug className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Mirror light installation",
      desc: "Basic installation of compatible mirror and vanity lighting.",
      price: "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Light removal & replacement",
      desc: "Old fixture taken down and replaced with a new compatible one.",
      price: "from €35",
      icon: <CircleOff className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Kitchen light replacement",
      desc: "Simple lighting replacement in kitchens and utility areas.",
      price: "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Multi-item electrical jobs",
      desc: "Combined estimate for several small electrical tasks in one visit.",
      price: "custom quote",
      icon: <Zap className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = [
    "Suitable for homes, apartments and rental properties in Valencia",
    "Clean mounting and neat finishing for visible fixtures",
    "Simple electrical replacement jobs handled efficiently",
    "Good option for landlords, move-ins and apartment refreshes",
    "Clear estimate before booking with transparent scope",
    "Several small electrical tasks can be combined in one visit",
  ];

  const faqItems = [
    {
      q: "Do you handle full rewiring?",
      a: "No. This page is focused on basic electrical work such as replacing lights, switches, sockets and simple fixtures. Full rewiring and larger electrical system work should be handled by a licensed electrician.",
    },
    {
      q: "Can several small electrical jobs be done in one visit?",
      a: "Yes. If you have several lights, switches, sockets or similar small tasks, a combined quote can be provided based on the total scope.",
    },
    {
      q: "Do I need to buy the new light or switch myself?",
      a: "Usually yes. If you already have the replacement fixture or fitting, installation can be done. You can also send photos before booking to confirm compatibility.",
    },
    {
      q: "Can you replace old sockets and switches?",
      a: "Yes. Basic socket and switch replacement is included when the existing setup is suitable for straightforward replacement.",
    },
    {
      q: "Do you install LED strips?",
      a: "Yes, for simple setups such as shelves, desks, media areas or accent lighting where the installation conditions are straightforward.",
    },
    {
      q: "Can you replace bathroom lights or mirror lights?",
      a: "Yes. Simple replacement of compatible bathroom lights, vanity lights and mirror lights can be included in this service category.",
    },
    {
      q: "What kind of properties do you work in?",
      a: "These services are suitable for apartments, homes, rental properties, offices and other spaces that need small electrical replacement and mounting tasks.",
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
              Electrical Services
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Basic electrical services in Valencia for lights, switches, sockets,
              simple fixtures, replacements and clean improvement jobs for homes and apartments.
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
              {serviceCards.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-yellow-400 bg-white p-7 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[210px] ${item.className}`}
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
          </div>

          {/* MAIN CTA */}
          <div className="mt-12 rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                  Need an exact estimate?
                </h2>

                <p className="mt-3 text-gray-600 leading-8">
                  Get a fast estimate for lights, switches, sockets, simple electrical
                  fixtures or multiple small jobs in one visit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate?category=electrical")}
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
                    Basic electrical work • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  Basic Electrical Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>basic electrical services in Valencia</strong>
                    for apartments, homes and rental properties. THEVULGO handles
                    common electrical replacement and mounting tasks such as lights,
                    sockets, switches and compatible fixtures.
                  </p>

                  <p>
                    Many small electrical jobs are simple in theory but messy,
                    time-consuming or risky when done without the right tools and care.
                    Clean installation, correct fitting and tidy finishing make a big
                    difference in the final result, especially when visible fixtures are
                    part of the room design.
                  </p>

                  <p>
                    This page is designed for clients who need practical electrical help
                    without full rewiring. It includes lighting changes, simple fixture
                    replacement, switch and socket updates, mirror light replacement,
                    extractor fan replacement and similar straightforward jobs.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    What is included
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Ceiling light replacement and installation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Pendant and wall light installation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Socket and switch replacement
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      LED strip and accent lighting setup
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Extractor fan replacement
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Bathroom and mirror light replacement
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Simple electrical mounting and finishing
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Multi-item electrical jobs in one visit
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  <p>
                    Each job is approached with care to ensure a neat finish,
                    correct positioning and clean final appearance. Good results in
                    electrical replacement work are not only about function, but also
                    about how clean and balanced the finished room looks.
                  </p>

                  <p>
                    THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                    providing quick response times and clear communication before the appointment.
                    This makes the service especially useful for landlords, move-ins,
                    apartment refreshes and home improvement projects.
                  </p>

                  <p>
                    Before work begins, clients receive a transparent estimate based on
                    the number of fixtures, complexity and total scope. Several simple
                    jobs can often be grouped into one efficient visit.
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
                  Simple electrical jobs done cleanly and clearly
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  This service is designed for people who need practical electrical
                  help without unnecessary complexity: fixture replacement, switches,
                  sockets, small lighting tasks and tidy finishing in homes and apartments.
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
                    onClick={() => router.push("/estimate?category=electrical")}
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
                  Electrical Services FAQ
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
                    Ready to book your electrical job?
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    Send your request now and get a clear estimate for lights, switches,
                    sockets, simple fixtures or multiple small electrical jobs in Valencia.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate?category=electrical")}
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
            Final price depends on fixture type, quantity, access and job complexity.
          </div>
        </div>
      </section>
    </div>
  );
}