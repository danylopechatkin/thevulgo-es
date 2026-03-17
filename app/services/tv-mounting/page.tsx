"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Tv,
  Monitor,
  Cable,
  Speaker,
  Square,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export default function TvMountingPage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for TV mounting or wall installations in Valencia."
  );
  const whatsappHref = `https://wa.me/14379074913?text=${whatsappText}`;

  const services = [
    {
      title: "TV mounting",
      desc: "Secure, level TV installation on suitable wall types.",
      price: "from €49",
      icon: <Tv className="h-5 w-5" />,
    },
    {
      title: "Large TV mounting",
      desc: "Installation for larger TVs with careful positioning.",
      price: "from €69",
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      title: "Shelf installation",
      desc: "Clean shelf mounting with proper anchors and alignment.",
      price: "from €35",
      icon: <Square className="h-5 w-5" />,
    },
    {
      title: "Projector mounting",
      desc: "Ceiling or wall projector installation with clean alignment.",
      price: "from €39",
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      title: "Cable concealment",
      desc: "Cleaner look with raceways or simple cable routing options.",
      price: "from €29",
      icon: <Cable className="h-5 w-5" />,
    },
    {
      title: "Soundbar mounting",
      desc: "Neat soundbar installation aligned with the TV setup.",
      price: "from €29",
      icon: <Speaker className="h-5 w-5" />,
    },
  ];

  const faqItems = [
    {
      q: "What wall types can TVs be mounted on?",
      a: "TVs can usually be mounted on brick, concrete and drywall walls using the correct anchors and hardware. The wall type should always be checked before drilling.",
    },
    {
      q: "How high should a TV be mounted?",
      a: "In most living rooms, the center of the TV should be close to eye level when seated. The ideal height also depends on screen size and viewing distance.",
    },
    {
      q: "Can cables be hidden during installation?",
      a: "Yes. Cable concealment can be done with surface raceways or hidden routing depending on the wall structure and setup conditions.",
    },
    {
      q: "Do I need to provide the bracket?",
      a: "Not always. If you already have a compatible bracket, it can be installed. If not, suitable mounting options can be discussed before the job.",
    },
  ];

  const trustPoints = [
    {
      title: "Fast response",
      text: "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: "Clean finish",
      text: "Straight alignment, tidy cable routing and a neat final result.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Transparent pricing",
      text: "Clear starting prices and estimate logic before any drilling starts.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const whyChoose = [
    "Suitable for apartments, homes and offices",
    "Careful alignment before drilling",
    "Clean cable routing options available",
    "Transparent estimate before booking",
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
              TV Mounting & Wall Installations
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Clean, secure installations for TVs, projectors, shelves and media setups in Valencia.
              Transparent starting prices before booking. No mess. No surprises.
            </p>
          </div>

          {/* TRUST / ADVANTAGES */}
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

          {/* SERVICES */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-yellow-400 bg-white p-6 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-yellow-400 text-black shadow-md">
                  {service.icon}
                </div>

                <h2 className="mt-4 text-xl font-extrabold text-black">
                  {service.title}
                </h2>

                <p className="mt-2 text-sm leading-7 text-gray-700">
                  {service.desc}
                </p>

                <div className="mt-4 text-sm font-extrabold text-yellow-500">
                  {service.price}
                </div>
              </div>
            ))}
          </div>

          {/* MAIN CTA */}
          <div className="mt-12 rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                  Need an exact estimate?
                </h2>

                <p className="mt-3 text-gray-600 leading-8">
                  Get a fast estimate for TV mounting, projector mounting, shelves,
                  soundbar setups or cable concealment. Continue to the calculator
                  or send a request directly on WhatsApp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate/tv-mounting")}
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
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-semibold text-black">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    Professional installations • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  TV Mounting Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>TV mounting services in Valencia</strong> for apartments,
                    homes and offices. THEVULGO installs televisions securely on brick,
                    concrete and drywall surfaces using proper anchors, precise alignment
                    and clean cable management.
                  </p>

                  <p>
                    A correctly mounted TV improves both safety and viewing comfort.
                    Incorrect anchors, poor positioning or uneven installation can damage
                    walls or equipment. That is why every installation is planned
                    carefully before drilling.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    What is included
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      TV wall mounting for small and large screens
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Projector ceiling or wall mounting
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Soundbar mounting under TVs
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Cable concealment with raceways or hidden routing
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Shelf installations near media setups
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Basic media wall preparation
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  <p>
                    Each installation is measured carefully to ensure the correct height,
                    balanced alignment and a visually clean finish. The goal is always a
                    result that looks intentional and professional rather than improvised.
                  </p>

                  <p>
                    THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                    providing quick response times and clear communication before the
                    appointment.
                  </p>

                  <p>
                    Before installation begins, clients receive a transparent price
                    estimate based on wall type, screen size and mounting complexity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* UPGRADE / CONVERSION BLOCK */}
          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                    <BadgeCheck className="h-4 w-4" />
                    Why clients choose this service
                  </div>

                  <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-black">
                    Clean setup, correct height, no guesswork
                  </h2>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                    {whyChoose.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate/tv-mounting")}
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

    <div className="max-w-4xl mx-auto">

      <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-10 text-center sm:text-left">
        TV Mounting FAQ
      </h2>

      <div className="space-y-8">

        <div>
          <h3 className="font-extrabold text-black text-lg">
            What wall types can TVs be mounted on?
          </h3>
          <p className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">
            TVs can usually be mounted on brick, concrete and drywall walls using the correct anchors and hardware.
            The wall type should always be checked before drilling.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-extrabold text-black text-lg">
            How high should a TV be mounted?
          </h3>
          <p className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">
            In most living rooms the center of the TV should be close to eye level when seated.
            The ideal height also depends on screen size and viewing distance.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-extrabold text-black text-lg">
            Can cables be hidden during installation?
          </h3>
          <p className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">
            Yes. Cable concealment can be done with surface raceways or hidden routing
            depending on the wall structure and setup conditions.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-extrabold text-black text-lg">
            Do I need to provide the bracket?
          </h3>
          <p className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">
            Not always. If you already have a compatible bracket, it can be installed.
            If not, suitable mounting options can be discussed before the job.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

          <div className="mt-10 text-center text-sm text-gray-500">
            Final price depends on wall type, screen size, mounting surface and add-ons.
          </div>
        </div>
      </section>
    </div>
  );
}