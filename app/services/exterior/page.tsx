"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Clock3,
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
  House,
  Wrench,
  Drill,
  Hammer,
  Ruler,
  Fence,
  TreePine,
  Package,
  Paintbrush,
  Shield,
  DoorOpen,
} from "lucide-react";

export default function ExteriorPage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for house exterior and outdoor work in Valencia."
  );
  const whatsappHref = `https://wa.me/14379074913?text=${whatsappText}`;

  const trustPoints = [
    {
      title: "Fast response",
      text: "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: "Clean exterior work",
      text: "Practical outdoor fixes with cleaner fitting and a tidy final look.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Transparent pricing",
      text: "Clear estimate logic before work begins, based on outdoor scope and access.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: "Fence repair & adjustment",
      desc: "Repair and adjustment of fences, fence sections and visible outdoor boundaries to improve stability, function and overall exterior appearance.",
      price: "from €59",
      icon: <Fence className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Gate alignment",
      desc: "Basic correction of gates and outdoor access elements to improve opening, closing and practical daily use.",
      price: "from €49",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Outdoor hardware fixing",
      desc: "Small repairs and tightening of visible outdoor fittings, brackets, handles and practical hardware elements.",
      price: "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Facade touch-up work",
      desc: "Basic visible touch-up work on accessible exterior surfaces where the job is suitable for practical improvement rather than full renovation.",
      price: "from €59",
      icon: <Paintbrush className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Outdoor wall mounting",
      desc: "Mounting of exterior accessories, signs, holders, small fixtures and practical outdoor items on suitable surfaces.",
      price: "from €39",
      icon: <Drill className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Outdoor shelf or bracket fitting",
      desc: "Installation of practical brackets, holders and small exterior support elements for organized outdoor use.",
      price: "from €39",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Outdoor waterproof sealing",
  desc: "Sealing of small exterior gaps, joints and exposed areas to help protect surfaces from moisture and improve durability of outdoor elements.",
  price: "from €49",
  icon: <ShieldCheck className="h-5 w-5" />,
  className: "",
},
    {
      title: "Pergola / shade accessory fitting",
      desc: "Basic fitting and adjustment of compatible pergola accessories, shade elements or simple outdoor support items.",
      price: "from €49",
      icon: <House className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Outdoor storage setup",
      desc: "Assembly or setup of simple outdoor storage pieces and utility elements for patios, terraces or house exteriors.",
      price: "from €49",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Exterior fixture replacement",
  desc: "Replacement of worn or damaged outdoor fixtures such as holders, brackets, visible fittings and practical exterior utility elements to improve both function and presentation.",
  price: "from €39",
  icon: <Wrench className="h-5 w-5" />,
  className: "",
},
{
  title: "Patio furniture assembly",
  desc: "Assembly and setup of outdoor tables, chairs, benches and patio furniture for cleaner, more usable exterior spaces around the home.",
  price: "from €49",
  icon: <Package className="h-5 w-5" />,
  className: "",
},
{
  title: "Outdoor refresh & finishing",
  desc: "A practical service for visible exterior improvements such as repositioning, small fixes, accessory fitting and finishing details that make the property look more complete.",
  price: "custom quote",
  icon: <Paintbrush className="h-5 w-5" />,
  className: "lg:col-span-2",
},
    {
      title: "Mailbox installation",
      desc: "Installation and positioning of mailboxes or exterior entry accessories with cleaner alignment and practical placement.",
      price: "from €35",
      icon: <Package className="h-5 w-5" />,
      className: "",
    },
    {
      title: "House number / sign mounting",
      desc: "Mounting of house numbers, name signs and small visible entry details to improve exterior presentation.",
      price: "from €29",
      icon: <Ruler className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Outdoor light fitting",
      desc: "Installation of compatible exterior light fixtures where the setup is suitable and the scope is straightforward.",
      price: "from €49",
      icon: <Shield className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Garden accessory installation",
      desc: "Installation of small garden or patio accessories such as hooks, holders, decorative supports and simple outdoor fittings.",
      price: "from €35",
      icon: <TreePine className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Terrace / patio setup help",
      desc: "Practical setup of outdoor terrace or patio items including small fittings, arrangement help and visible finishing tasks.",
      price: "from €49",
      icon: <House className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Roof edge / visible exterior checks",
      desc: "Basic visible correction work around accessible exterior edges and surface details where the job is suitable for safe minor improvement.",
      price: "from €59",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Balcony & railing fixes",
  desc: "Adjustment and tightening of balcony elements, railings and visible safety parts to improve stability, alignment and overall exterior feel.",
  price: "from €59",
  icon: <Ruler className="h-5 w-5" />,
  className: "",
},
    {
      title: "Outdoor repair bundle",
      desc: "Best option if you need several small exterior and outdoor tasks completed in one organized visit, with cleaner results and better efficiency around the property.",
      price: "custom quote",
      icon: <House className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = [
    "Good for houses, villas, patios and rental properties",
    "Useful for outdoor refreshes, visible repairs and practical improvements",
    "Several exterior tasks can be grouped into one visit",
    "Cleaner visual result around fences, gates and outdoor fittings",
    "Practical service for visible exterior work without full renovation",
    "Clear estimate before booking with defined scope",
  ];

  const faqItems = [
    {
      q: "What kind of exterior work is included on this page?",
      a: "This page covers practical exterior and outdoor work such as fence repair, gate adjustment, exterior mounting, outdoor accessory installation, patio setup help, visible facade touch-ups and grouped outdoor repair tasks.",
    },
    {
      q: "Do you do full roof replacement or major facade renovation?",
      a: "No. This page is mainly for accessible, practical exterior tasks and visible outdoor improvement work rather than large-scale roof or facade construction projects.",
    },
    {
      q: "Can several outdoor tasks be done in one visit?",
      a: "Yes. This is one of the best uses of this service. Fence corrections, outdoor mounting, signs, hardware, lights and other small exterior tasks can often be grouped into one organized appointment.",
    },
    {
      q: "Is this service suitable for patios and terraces?",
      a: "Yes. Patio and terrace setup, small accessory fitting and visible exterior improvements are a good fit for this page.",
    },
    {
      q: "Do you install exterior accessories and house number signs?",
      a: "Yes. Exterior accessory installation, mailboxes, signs and house number mounting are included where the surface and setup are suitable.",
    },
    {
      q: "Can you help improve the look of the exterior without big renovation work?",
      a: "Yes. That is exactly what this page is for — practical visible exterior improvements, cleaner mounting and grouped small repairs that make the house look more finished.",
    },
    {
      q: "Is this useful for rental houses or holiday properties?",
      a: "Yes. Exterior and outdoor work is especially useful for rental homes, holiday properties and houses that need to look cleaner, more presentable and better maintained.",
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
              House Exterior & Outdoor Work
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Fences, gates, facades, patio setup, exterior accessories,
              outdoor repairs and practical house exterior work in Valencia.
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
                  Need an exact exterior work estimate?
                </h2>
                <p className="mt-3 text-gray-600 leading-8">
                  Send your request now and get a clear estimate for fences,
                  gates, outdoor accessories, patio setup or several exterior tasks in one visit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate/exterior")}
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
                    Exterior work & outdoor setup • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  Exterior Work Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>house exterior and outdoor work services in Valencia</strong>
                    for houses, villas, patios and rental properties. THEVULGO helps with
                    practical outdoor work such as fence repair, gate adjustment, exterior accessory installation,
                    patio setup, visible facade touch-ups and small grouped outdoor fixes.
                  </p>

                  <p>
                    Exterior areas strongly affect the first impression of a property.
                    Loose fittings, worn fence sections, badly placed signs, unfinished patio details
                    or visible outdoor issues can make the whole house look less maintained than it really is.
                  </p>

                  <p>
                    This page is designed for practical outdoor improvement work:
                    fences, gates, visible facade details, exterior mounting, patio and terrace preparation,
                    outdoor accessories and grouped exterior tasks. It is ideal for refreshes,
                    rental property improvements and cleaner presentation of the house.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    What is included
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Fence repair and visible boundary corrections
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Gate alignment and outdoor access improvements
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Exterior accessory and wall-mounted item installation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Mailboxes, signs and house number mounting
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Patio, terrace and outdoor storage setup
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Outdoor light fitting and practical exterior details
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Visible facade touch-ups and accessible exterior correction work
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Multiple exterior and outdoor tasks in one visit
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  <p>
                    Good exterior work is not only about fixing what is loose or damaged.
                    It is also about improving the visual presentation of the property,
                    making outdoor areas feel more complete and creating a cleaner result around the home.
                  </p>

                  <p>
                    THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                    helping clients improve exterior spaces with practical repair work,
                    better positioning of outdoor elements and more organized finishing details.
                  </p>

                  <p>
                    Before work begins, clients receive a transparent estimate based on
                    the number of tasks, outdoor access conditions, materials and total scope.
                    When possible, several outdoor tasks can be grouped into one efficient appointment.
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
                  Exterior details that make the whole property look more complete
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  This service is ideal when the outside of the property needs practical work,
                  cleaner presentation and better visible finishing without turning the project into major construction.
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
                    onClick={() => router.push("/estimate/exterior")}
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
                  Exterior & Outdoor Work FAQ
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
                    Ready to book your exterior work?
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    Send your request now and get a clear estimate for fences,
                    gates, patio setup, outdoor accessories or grouped exterior tasks in Valencia.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate/exterior")}
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
            Final price depends on outdoor access, number of tasks, mounting surfaces and total work scope.
          </div>
        </div>
      </section>
    </div>
  );
}