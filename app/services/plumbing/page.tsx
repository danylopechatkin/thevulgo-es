"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Droplets,
  Wrench,
  ShowerHead,
  Bath,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  CircleOff,
  Waves,
} from "lucide-react";

export default function PlumbingPage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for plumbing services in Valencia."
  );
  const whatsappHref = `https://wa.me/14379074913?text=${whatsappText}`;

  const trustPoints = [
    {
      title: "Fast response",
      text: "Quick communication and clear appointment scheduling.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: "Clean work",
      text: "Careful installation and tidy finishing for visible fixtures.",
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
      title: "Faucet replacement",
      desc: "Kitchen or bathroom faucet replacement and fitting with careful alignment and leak check.",
      price: "from €39",
      icon: <Droplets className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Sink installation",
      desc: "Simple sink installation and connection for bathrooms or utility areas.",
      price: "from €59",
      icon: <Bath className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Shower head replacement",
      desc: "Replacement of shower heads, holders and compatible fittings.",
      price: "from €29",
      icon: <ShowerHead className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Toilet seat replacement",
      desc: "Installation of new toilet seat fittings with proper adjustment.",
      price: "from €29",
      icon: <Bath className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Washing machine connection",
      desc: "Connection of washing machines to water supply and drain points.",
      price: "from €35",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Dishwasher connection",
      desc: "Dishwasher water connection and simple setup for compatible spaces.",
      price: "from €35",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Leak fixing",
      desc: "Minor visible leak fixes, tightening fittings and simple connection corrections.",
      price: "from €39",
      icon: <Waves className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
  title: "Under sink adjustments",
  desc: "Small adjustments under kitchen or bathroom sinks for better fit and stability.",
  price: "from €35",
  icon: <Wrench className="h-5 w-5" />,
  className: "",
},
    {
      title: "Shower hose replacement",
      desc: "Replacement of shower hose and connector fittings.",
      price: "from €29",
      icon: <ShowerHead className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Bathroom tap installation",
      desc: "Installation of compatible bathroom taps and basic fittings.",
      price: "from €39",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Water filter installation",
      desc: "Basic installation of compatible under-sink or tap filter units.",
      price: "from €39",
      icon: <Droplets className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Pipe connector replacement",
      desc: "Replacement of simple visible pipe connectors and fittings.",
      price: "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Under sink adjustments",
      desc: "Small adjustments under kitchen or bathroom sinks for better fit and stability.",
      price: "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Bidet hose installation",
      desc: "Simple installation of bidet hoses and compatible connectors.",
      price: "from €29",
      icon: <Bath className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Stop valve replacement",
      desc: "Replacement of accessible small shut-off valves where suitable.",
      price: "from €35",
      icon: <CircleOff className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Multiple plumbing tasks",
      desc: "Combined estimate for several basic plumbing tasks completed in one visit.",
      price: "custom quote",
      icon: <Wrench className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = [
    "Basic plumbing help for homes, apartments and rental properties",
    "Clean installation and tidy visible finishing",
    "Good for move-ins, replacements and small upgrades",
    "Simple plumbing tasks grouped into one visit when needed",
    "Clear estimate before booking with transparent scope",
    "Practical help without unnecessary complexity",
  ];

  const faq = [
    {
      q: "Do you handle full plumbing system installation?",
      a: "No. This page is focused on basic plumbing services such as faucet replacement, sink installation, appliance connections and simple visible leak fixes.",
    },
    {
      q: "Can several plumbing tasks be done in one visit?",
      a: "Yes. Many small plumbing tasks can be grouped together in one appointment, which is often more efficient and cost-effective.",
    },
    {
      q: "Do I need to buy the faucet or fixture myself?",
      a: "Usually yes. Clients normally provide the new fixture or fitting, and installation is then completed on site.",
    },
    {
      q: "Can you connect washing machines or dishwashers?",
      a: "Yes. Basic washing machine and dishwasher connections are included when the connection points are already suitable.",
    },
    {
      q: "Do you fix leaking faucets?",
      a: "Yes. Minor visible leak fixes, tightening fittings and simple corrections can often be completed quickly.",
    },
    {
      q: "Do you work in rental apartments?",
      a: "Yes. These services are very suitable for rental apartments, move-ins, bathroom updates and kitchen refresh jobs.",
    },
    {
      q: "Can you replace shower hoses and shower heads?",
      a: "Yes. Simple shower hose, shower head and compatible fitting replacement is included in this category.",
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
              Plumbing Services
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Basic plumbing services in Valencia including faucet replacement, sink installation,
              appliance connections, visible leak fixing and simple fixture upgrades.
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
                  Need an exact plumbing estimate?
                </h2>
                <p className="mt-3 text-gray-600 leading-8">
                  Send a request now and get a clear estimate for faucet replacement,
                  sink installation, appliance connections or several small plumbing tasks in one visit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate/plumbing")}
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
                    Basic plumbing work • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  Basic Plumbing Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>basic plumbing services in Valencia</strong>
                    for apartments, homes and rental properties. THEVULGO handles
                    common visible plumbing tasks such as faucet replacement,
                    sink installation, washing machine connections, dishwasher setup,
                    shower fitting replacement and simple leak correction.
                  </p>

                  <p>
                    Many small plumbing jobs are simple in theory but become messy,
                    inconvenient or frustrating without the right tools and experience.
                    Clean fitting, proper alignment and tidy final finishing matter,
                    especially when the work is visible in kitchens, bathrooms and utility areas.
                  </p>

                  <p>
                    This service category is ideal for simple plumbing improvements,
                    fixture replacement, move-in fixes and straightforward household plumbing tasks.
                    It is not intended for full plumbing system installation or large hidden pipe work.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    What is included
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Faucet replacement and tap installation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Sink installation and simple connection
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Washing machine and dishwasher connections
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Shower head and shower hose replacement
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Toilet seat and simple bathroom fitting replacement
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Minor visible leak fixing and fitting adjustments
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Drain pipe adjustment and connector replacement
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Several basic plumbing tasks grouped into one visit
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  <p>
                    Each job is approached with care to ensure a practical result,
                    clean finish and stable visible installation. Good plumbing service
                    for this kind of work is not only about stopping leaks — it is also
                    about how tidy and reliable the final setup looks in daily use.
                  </p>

                  <p>
                    THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                    providing quick response times and clear communication before the appointment.
                    These services are especially useful for rental apartments, move-ins,
                    bathroom refreshes and kitchen upgrades.
                  </p>

                  <p>
                    Before work begins, clients receive a transparent estimate based on
                    the number of fixtures, type of task and total complexity. When possible,
                    several basic plumbing tasks can be combined into one efficient visit.
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
                  Clean plumbing help for simple jobs that matter
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  This service is designed for clients who need practical plumbing help
                  without full-scale plumbing work: fixture replacement, appliance connections,
                  simple visible leaks and neat finishing in kitchens, bathrooms and utility spaces.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-gray-700 text-[15px] sm:text-base">
                  {[
                    "Suitable for apartments, homes and rental properties",
                    "Useful for move-ins, upgrades and fixture replacement",
                    "Visible plumbing jobs completed cleanly and neatly",
                    "Several basic tasks can often be combined in one visit",
                    "Clear estimate before booking with defined scope",
                    "Practical service for common household plumbing needs",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-[2px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => router.push("/estimate/plumbing")}
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
                  Plumbing FAQ
                </h2>

                <div className="space-y-8">
                  {faq.map((item, index) => (
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
                    Ready to book your plumbing job?
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    Send your request now and get a clear estimate for faucet replacement,
                    sink installation, appliance connections or several small plumbing tasks in Valencia.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate/plumbing")}
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
            Final price depends on fixture type, quantity, access and task complexity.
          </div>
        </div>
      </section>
    </div>
  );
}