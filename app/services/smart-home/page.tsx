"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  Camera,
  BellRing,
  Lock,
  Wifi,
  Plug,
  Router,
  Smartphone,
  Siren,
  Radio,
  House,
  Lightbulb,
  Thermometer,
  MonitorSmartphone,
  Speaker,
  Wrench,
  ScanSearch,
  BatteryCharging,
  KeyRound,
} from "lucide-react";

export default function SmartHomePage() {
  const router = useRouter();

  const whatsappText = encodeURIComponent(
    "Hi! I’d like an estimate for smart home and device installation in Valencia."
  );
  const whatsappHref = `https://wa.me/14379074913?text=${whatsappText}`;

  const trustPoints = [
    {
      title: "Fast response",
      text: "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: "Clean setup",
      text: "Neat installation, tidy positioning and practical everyday usability.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: "Transparent pricing",
      text: "Clear estimate logic before work begins, based on scope and device type.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: "Smart camera installation",
      desc: "Installation of indoor or outdoor smart cameras with practical placement, clean mounting and basic app-ready setup where supported.",
      price: "from €49",
      icon: <Camera className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Video doorbell installation",
      desc: "Installation of compatible smart video doorbells with clean mounting and basic device setup for app connection.",
      price: "from €49",
      icon: <BellRing className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Smart lock installation",
      desc: "Installation of compatible smart locks and door access devices where the door and fitting are suitable.",
      price: "from €59",
      icon: <Lock className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Wi-Fi camera setup",
      desc: "Basic connection and positioning of Wi-Fi cameras for apartments, homes and small indoor monitoring setups.",
      price: "from €39",
      icon: <Wifi className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Battery camera mounting",
      desc: "Mounting of battery-powered cameras in suitable indoor or outdoor locations with attention to angle and coverage.",
      price: "from €39",
      icon: <BatteryCharging className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Wired smart camera mounting",
      desc: "Clean mounting of compatible wired smart cameras where power and location are already suitable.",
      price: "from €49",
      icon: <Camera className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Smart curtain motor setup",
  desc: "Setup of smart curtain or blind motors for automated opening, closing and app or voice control in modern home environments.",
  price: "from €49",
  icon: <Wifi className="h-5 w-5" />,
  className: "",
},
    {
      title: "Smart sensor installation",
      desc: "Installation of compatible smart motion, door, window or environmental sensors for home automation and alerts.",
      price: "from €35",
      icon: <ScanSearch className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Door / window sensor setup",
      desc: "Setup of contact sensors for entry points, cabinets, windows or doors as part of smart monitoring systems.",
      price: "from €29",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Motion sensor installation",
      desc: "Basic installation and placement of compatible indoor motion sensors for smarter alerts and automation.",
      price: "from €29",
      icon: <Radio className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Smart plug setup",
      desc: "Configuration and placement of smart plugs for lamps, appliances or timed control in everyday home use.",
      price: "from €25",
      icon: <Plug className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Smart switch setup",
      desc: "Installation or setup of compatible smart switches and connected control devices where suitable.",
      price: "from €39",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Smart light setup",
      desc: "Setup of smart bulbs, connected lights and app-controlled lighting for rooms, shelves or home scenes.",
      price: "from €29",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Smart energy monitor setup",
  desc: "Installation and setup of compatible smart energy monitoring devices to track power usage and improve efficiency in everyday home use.",
  price: "from €39",
  icon: <BatteryCharging className="h-5 w-5" />,
  className: "",
},
    {
      title: "Smart LED strip setup",
      desc: "Installation and basic configuration of smart LED strips for accent lighting, media units, desks or decorative areas.",
      price: "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Hub / bridge setup",
      desc: "Setup of compatible hubs and bridges used for smart cameras, lights, sensors and automation devices.",
      price: "from €35",
      icon: <Router className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Wi-Fi extender placement",
      desc: "Basic placement and setup of compatible Wi-Fi extenders to improve signal for smart devices around the home.",
      price: "from €35",
      icon: <Wifi className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Router / smart device pairing",
      desc: "Help with connecting compatible smart devices to Wi-Fi networks, apps and basic home setups.",
      price: "from €29",
      icon: <Router className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Intercom device setup",
      desc: "Basic setup or mounting of compatible smart intercom devices and connected access units where suitable.",
      price: "from €49",
      icon: <MonitorSmartphone className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Smart alarm device setup",
      desc: "Installation and positioning of compatible smart alarm parts such as hubs, sensors and sirens for home use.",
      price: "from €49",
      icon: <Siren className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Indoor siren setup",
      desc: "Basic setup and positioning of compatible indoor sirens or alert devices in smart home systems.",
      price: "from €29",
      icon: <Siren className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Outdoor siren mounting",
      desc: "Mounting of compatible outdoor sirens where the device and location are suitable for installation.",
      price: "from €39",
      icon: <Siren className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Smart thermostat setup",
      desc: "Basic setup of compatible smart thermostats and connected climate control devices where the system allows it.",
      price: "from €49",
      icon: <Thermometer className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Voice assistant device setup",
      desc: "Setup of smart speakers and voice assistant devices for basic control of lights, plugs and compatible home devices.",
      price: "from €29",
      icon: <Speaker className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Smart display setup",
      desc: "Configuration of compatible smart displays for monitoring, intercom use or home control in one place.",
      price: "from €35",
      icon: <MonitorSmartphone className="h-5 w-5" />,
      className: "",
    },
    {
      title: "App connection help",
      desc: "Basic assistance with connecting compatible smart devices to their mobile apps, accounts and user setup steps.",
      price: "from €25",
      icon: <Smartphone className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Smart home troubleshooting",
      desc: "Practical troubleshooting for common connection, positioning or device setup issues in simple smart home environments.",
      price: "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Camera angle optimization",
      desc: "Adjustment of mounted cameras to improve room coverage, entry monitoring or visibility around key areas.",
      price: "from €25",
      icon: <Camera className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Entry access device setup",
      desc: "Setup of smart entry devices such as connected locks, keypads and access accessories where compatible.",
      price: "from €49",
      icon: <KeyRound className="h-5 w-5" />,
      className: "",
    },
    {
      title: "Smart home room setup",
      desc: "Combined installation and setup of several smart devices in one room such as lights, plugs, sensors and cameras.",
      price: "from €69",
      icon: <House className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: "Apartment smart setup",
      desc: "Smart home setup for apartments including practical combinations of cameras, plugs, lights and sensors.",
      price: "from €79",
      icon: <House className="h-5 w-5" />,
      className: "",
    },
    {
  title: "Device repositioning & optimization",
  desc: "Improving placement of existing smart devices for better signal, coverage and usability. Includes camera angles, sensors and Wi-Fi-dependent devices.",
  price: "from €29",
  icon: <ScanSearch className="h-5 w-5" />,
  className: "",
},
    {
      title: "Multiple smart home tasks",
      desc: "Best option if you need several devices installed or configured in one visit. Cameras, sensors, plugs, locks, lights and app setup can be grouped into one organized appointment.",
      price: "custom quote",
      icon: <Wrench className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = [
    "Good for apartments, homes and rental properties",
    "Useful for cameras, access, lighting and everyday smart automation",
    "Several smart devices can be grouped into one organized visit",
    "Practical setup for clients who want everything working together",
    "Clean mounting and clearer device placement around the home",
    "Clear estimate before booking with defined scope",
  ];

  const faqItems = [
    {
      q: "What kind of smart home devices do you install?",
      a: "This page includes common household smart devices such as cameras, video doorbells, smart locks, smart plugs, sensors, lights, hubs, sirens, thermostats and similar compatible home technology.",
    },
    {
      q: "Can several smart devices be set up in one visit?",
      a: "Yes. This is one of the strongest reasons to use this service. Cameras, plugs, sensors, lights and app setup can often be grouped into one organized appointment.",
    },
    {
      q: "Do you provide the devices?",
      a: "Usually the client already has the devices, and the service focuses on installation, mounting, setup and practical configuration. Compatibility can often be checked in advance by message or photos.",
    },
    {
      q: "Can you help connect devices to Wi-Fi and the app?",
      a: "Yes. Basic device pairing, app connection and simple smart home setup assistance are included where the devices and network conditions are suitable.",
    },
    {
      q: "Do you install smart cameras and video doorbells?",
      a: "Yes. This is one of the main categories on this page. Indoor and outdoor smart cameras, Wi-Fi cameras and compatible video doorbells can be installed and positioned cleanly.",
    },
    {
      q: "Can you set up smart locks?",
      a: "Compatible smart lock installation can be included where the door, lock type and fitting conditions are suitable for the device.",
    },
    {
      q: "Do you also troubleshoot smart devices?",
      a: "Yes. Common practical issues such as bad placement, pairing problems, setup confusion or basic device organization can often be corrected during a visit.",
    },
    {
      q: "Is this service useful for rental apartments?",
      a: "Yes. Smart home devices are very useful for rental apartments, move-ins, home upgrades, room control and simple apartment security improvements.",
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
              Smart Home & Devices
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              Smart camera installation, video doorbells, smart locks, sensors, plugs, hubs,
              Wi-Fi setup and connected home device installation in Valencia.
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
                  Need an exact smart home estimate?
                </h2>
                <p className="mt-3 text-gray-600 leading-8">
                  Send your request now and get a clear estimate for smart cameras,
                  locks, sensors, plugs, hubs or several connected devices in one visit.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/estimate/smart-home")}
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
                    Smart devices & setup • Valencia
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  Smart Home Installation Services in Valencia
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  <p>
                    Professional <strong>smart home installation services in Valencia</strong>
                    for apartments, homes and rental properties. THEVULGO helps with the practical
                    installation and setup of connected home devices such as smart cameras, video doorbells,
                    smart locks, sensors, plugs, hubs, lights, sirens and related home automation hardware.
                  </p>

                  <p>
                    Smart home devices are most useful when they are installed cleanly, placed correctly
                    and configured in a way that makes everyday use simple. A badly placed camera, weak Wi-Fi connection,
                    poor doorbell angle or confusing device setup can reduce the value of the whole system.
                  </p>

                  <p>
                    This page is designed for practical connected home work: device mounting, app setup,
                    basic pairing, room-based smart organization, entry monitoring and simple smart automation support.
                    It is ideal for home upgrades, apartment security improvements and better everyday control.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    What is included
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Smart camera and video doorbell installation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Smart lock and entry access device setup
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Sensor, siren and smart alarm device setup
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Smart plugs, lights and LED strip configuration
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Hubs, bridges, routers and Wi-Fi device connection help
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Smart display, intercom and voice assistant setup
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Troubleshooting and room-based smart device organization
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                      Several connected devices grouped into one visit
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  <p>
                    Good smart home service is not just about attaching devices to the wall.
                    It is about making the whole setup practical, reliable and comfortable to use in real life —
                    better camera angles, better access control, better room automation and clearer day-to-day control.
                  </p>

                  <p>
                    THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                    helping clients build more useful smart apartments and homes with practical device installation,
                    cleaner positioning and more organized setup in one place.
                  </p>

                  <p>
                    Before work begins, clients receive a transparent estimate based on the number of devices,
                    device type, mounting complexity and setup scope. When possible, several smart home tasks
                    are grouped into one efficient appointment.
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
                  Connected devices that work better together
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  This service is ideal for people who want cameras, sensors, smart access,
                  lighting or device automation installed cleanly and set up in a way that actually makes daily life easier.
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
                    onClick={() => router.push("/estimate/smart-home")}
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
                  Smart Home & Devices FAQ
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
                    Ready to book your smart home setup?
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    Send your request now and get a clear estimate for smart cameras,
                    locks, sensors, lighting or several connected devices in Valencia.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => router.push("/estimate/smart-home")}
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
            Final price depends on device type, quantity, mounting complexity, Wi-Fi conditions and total setup scope.
          </div>
        </div>
      </section>
    </div>
  );
}