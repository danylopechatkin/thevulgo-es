"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  DoorOpen,
  Wrench,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  Hammer,
  KeyRound,
  SquareDashedMousePointer,
  House,
} from "lucide-react";

export default function DoorsPage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for doors and hardware services in Valencia."
  );
  const whatsappHref = `https://wa.me/14379074913?text=${whatsappText}`;

  const trustPoints = [
    {
      title: "Fast response",
      text: "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: "Clean adjustments",
      text: "Neat hardware work, cleaner alignment and practical usability improvements.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Transparent pricing",
      text: "Clear starting prices and practical estimate logic before work begins.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: "Door alignment adjustment",
      desc: "Basic door alignment correction for doors that rub, sit unevenly or do not close as smoothly as they should. A practical option for small usability issues in apartments and homes.",
      price: "from €39",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Handle replacement",
      desc: "Replacement of worn, damaged or outdated door handles with cleaner, better-looking hardware. Suitable for interior doors and common household setups.",
      price: "from €29",
      icon: <Hammer className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Loose handle fixing",
      desc: "Tightening and stabilizing loose handles, knobs and visible fittings that have started moving or feeling unreliable in daily use.",
      price: "from €25",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Latch adjustment",
      desc: "Small latch corrections when the door does not catch properly or needs better closing alignment. Useful for everyday functionality issues.",
      price: "from €29",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Strike plate adjustment",
      desc: "Adjustment of strike plates and related visible hardware to improve how the door closes and lines up with the frame.",
      price: "from €29",
      icon: <SquareDashedMousePointer className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Hinge tightening",
      desc: "Tightening and small corrections of hinges that have loosened over time and started affecting the way the door opens or closes.",
      price: "from €25",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Door seal replacement",
  desc: "Replacement or adjustment of worn door seals to reduce drafts, noise and improve closing comfort. Useful for better insulation and cleaner door fit.",
  price: "from €29",
  icon: <ShieldCheck className="h-5 w-5" />,
  className: "",
},
    {
      title: "Hinge replacement",
      desc: "Replacement of visible door hinges where compatible hardware is already available or provided. Good for worn or damaged fittings.",
      price: "from €35",
      icon: <Hammer className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    
    {
      title: "Door closer adjustment",
      desc: "Basic adjustment of compatible closers to improve door movement, reduce slamming or make the opening and closing action feel smoother.",
      price: "from €39",
      icon: <DoorOpen className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Door stopper installation",
      desc: "Installation of simple door stoppers to protect walls, furniture and handles from repeated impact damage.",
      price: "from €25",
      icon: <House className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Lock cylinder replacement",
      desc: "Replacement of compatible visible lock cylinders when the new part is already available and the setup is suitable for straightforward work.",
      price: "from €39",
      icon: <KeyRound className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Cabinet and interior door hardware",
      desc: "Small hardware corrections for cabinet doors, utility doors and interior fittings where hinges, handles or visible mechanisms need improvement.",
      price: "from €29",
      icon: <Wrench className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Multiple door & hardware tasks",
      desc: "Ideal if you have multiple small door or hardware problems. Instead of booking separate visits, everything can be fixed in one efficient session — handles, hinges, latches, alignment and minor adjustments. Faster, more convenient and usually more cost-effective than splitting the work.",      price: "custom quote",
      icon: <Hammer className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = [
    "Useful for apartments, homes and rental properties",
    "Good for doors that feel slightly off, loose or inconvenient",
    "Several small door and hardware tasks can be combined in one visit",
    "Practical service for visible daily-use problems around the home",
    "Cleaner alignment and better usability without overcomplicating the job",
    "Clear estimate before booking with practical scope",
  ];

  const faqItems = [
    {
      q: "What kind of door problems are included on this page?",
      a: "This page is designed for small practical door and hardware tasks such as handle replacement, hinge tightening, latch adjustment, strike plate correction, lock cylinder replacement and general usability improvements for interior doors and common household setups.",
    },
    {
      q: "Can several small door tasks be done in one visit?",
      a: "Yes. This category works especially well when several minor issues are grouped together, for example a loose handle, one misaligned latch and a door stopper installation in the same appointment.",
    },
    {
      q: "Do you install completely new doors?",
      a: "This page is focused on minor adjustments, visible hardware replacement and practical corrections rather than full door installation or major carpentry work.",
    },
    {
      q: "Can you fix a door that rubs or closes badly?",
      a: "Basic alignment corrections, hinge tightening and latch or strike plate adjustments can often improve how the door moves and closes in daily use.",
    },
    {
      q: "Do you replace locks?",
      a: "Compatible visible lock cylinder replacement can be included where the setup is straightforward and suitable for this kind of service.",
    },
    {
      q: "Is this service useful for rental apartments?",
      a: "Yes. Door and hardware fixes are very common in rental properties, move-ins, move-outs and general home refresh work where small usability issues need to be corrected.",
    },
    {
      q: "Do you also work on cabinet doors or utility doors?",
      a: "Yes. Small hardware corrections on cabinet doors, utility doors and similar interior fittings can often fit naturally into this service category.",
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
              Doors & Hardware
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Door adjustments, handle replacement, hinge fixes, latch corrections and small
              hardware work in Valencia for apartments, homes and rental properties.
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
                  className={`rounded-2xl border border-yellow-400 bg-white p-8 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[260px] ${s.className || ""}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {s.icon}
                  </div>

                  <h3 className="mt-5 text-[30px] leading-tight font-extrabold text-black md:text-2xl">
                    {s.title}
                  </h3>

                  <p className="mt-4 text-[15px] sm:text-base leading-8 text-gray-700">
                    {s.desc}
                  </p>

                  <div className="mt-5 text-base font-extrabold text-yellow-500">
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
                  Need an exact door or hardware estimate?
                </h2>
                <p className="mt-3 text-gray-600 leading-8">
                  Send your request now and get a clear estimate for handle replacement,
                  hinge fixes, latch adjustment or several small door and hardware tasks in one visit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate?category=doors")}
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
                    Door adjustments & hardware • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  Door and Hardware Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>door and hardware services in Valencia</strong> for apartments,
                    homes and rental properties. THEVULGO helps with common visible door issues such as
                    loose handles, poor closing alignment, latch problems, hinge wear and small hardware
                    replacement tasks that affect everyday usability.
                  </p>

                  <p>
                    Doors are one of the most frequently used elements in a home, which means even small
                    problems become noticeable very quickly. A loose handle, a latch that does not catch,
                    a hinge that shifts the door out of line or a closer that behaves badly can make the
                    whole space feel less finished and less comfortable.
                  </p>

                  <p>
                    This page is designed for practical door adjustment, visible hardware fixes and small
                    usability improvements rather than full carpentry or major door installation work.
                    It is especially useful for rental apartments, move-ins, move-outs and general home refreshes.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    What is included
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Door alignment and closing adjustment
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Handle replacement and loose handle fixing
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Hinge tightening and hinge replacement
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Latch and strike plate correction
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Door closer and stopper adjustments
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Lock cylinder replacement where suitable
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Small cabinet and interior door hardware fixes
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Several minor door and hardware tasks in one visit
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  <p>
                    Good door and hardware service is not only about making the door work again.
                    It is also about improving how the home feels in daily use — smoother movement,
                    cleaner closing, more stable fittings and a better visual finish.
                  </p>

                  <p>
                    THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                    helping clients solve small but annoying household issues that affect convenience,
                    presentation and everyday comfort.
                  </p>

                  <p>
                    Before work begins, clients receive a transparent estimate based on the number
                    of doors, type of hardware, visible condition and total task scope. When possible,
                    multiple small issues are grouped into one efficient visit.
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
                  Small door fixes that noticeably improve daily use
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  This service is a strong option when doors and fittings are not badly damaged,
                  but clearly need practical adjustment, cleaner hardware work and better everyday usability.
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
                    onClick={() => router.push("/estimate?category=doors")}
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
                  Doors & Hardware FAQ
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
                    Ready to book your door or hardware fix?
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    Send your request now and get a clear estimate for door adjustment,
                    handle replacement, hinge fixes or several small hardware tasks in Valencia.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate?category=doors")}
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
            Final price depends on the number of doors, hardware type, access and total task scope.
          </div>
        </div>
      </section>
    </div>
  );
}