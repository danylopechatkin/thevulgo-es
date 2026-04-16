"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Wrench,
  Zap,
  Droplets,
  Hammer,
  DoorOpen,
  Paintbrush,
  ShieldCheck,
  ChefHat,
  Bath,
  Home,
  House,
} from "lucide-react";

export default function ServicesPage() {
  const router = useRouter();

  const services = [
    {
      title: "TV Mounting & Wall Installations",
      desc: "TVs, shelves, mirrors and cable routing.",
      price: "from €49",
      slug: "tv-mounting",
      badge: "Top",
      icon: <Wrench className="h-5 w-5" />,
    },
    {
      title: "Furniture Assembly",
      desc: "IKEA, wardrobes, beds and cabinets.",
      price: "from €39",
      slug: "furniture",
      badge: "Popular",
      icon: <Hammer className="h-5 w-5" />,
    },
    {
      title: "Electrical Services",
      desc: "Lights, switches, sockets and basics.",
      price: "from €35",
      slug: "electrical",
      badge: "Safe",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "Plumbing",
      desc: "Faucets, sinks, toilets and leaks.",
      price: "from €39",
      slug: "plumbing",
      badge: "Fast",
      icon: <Droplets className="h-5 w-5" />,
    },
    {
      title: "Home Repairs",
      desc: "Small fixes and general maintenance.",
      price: "from €25",
      slug: "repairs",
      badge: "Quick",
      icon: <Wrench className="h-5 w-5" />,
    },
    {
      title: "Walls & Drywall Repairs",
      desc: "Patching, anchors, drilling and repairs.",
      price: "from €45",
      slug: "drywall",
      badge: "Pro",
      icon: <Paintbrush className="h-5 w-5" />,
    },
    {
      title: "Doors & Hardware",
      desc: "Handles, hinges, locks and closers.",
      price: "from €35",
      slug: "doors",
      badge: "Fix",
      icon: <DoorOpen className="h-5 w-5" />,
    },
    {
      title: "Smart Home & Devices",
      desc: "Cameras, smart locks, doorbells and setup.",
      price: "from €49",
      slug: "smart-home",
      badge: "Smart",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: "Kitchen Installations",
      desc: "Cabinets, shelves, lights and fittings.",
      price: "from €45",
      slug: "kitchen",
      badge: "Kitchen",
      icon: <ChefHat className="h-5 w-5" />,
    },
    {
      title: "Bathroom Installations",
      desc: "Mirrors, cabinets, holders and fittings.",
      price: "from €39",
      slug: "bathroom",
      badge: "Bath",
      icon: <Bath className="h-5 w-5" />,
    },
    {
      title: "Apartment & Move-In Setup",
      desc: "Curtains, furniture and move-in installs.",
      price: "from €49",
      slug: "move-in",
      badge: "Setup",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "House Exterior & Outdoor Work",
      desc: "Fences, roofs, facades and outdoor repairs.",
      price: "from €59",
      slug: "exterior",
      badge: "House",
      icon: <House className="h-5 w-5" />,
    },
  ];

  return (
  <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
    <section className="relative py-20 sm:py-24 px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
        <div className="absolute right-10 top-24 h-[320px] w-[320px] rounded-full bg-yellow-100/60 blur-3xl" />
      </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              THEVULGO • Valencia
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-black">
              Our services
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
              Broad service categories for homes, apartments and private houses in Valencia.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <button
                key={service.slug}
                onClick={() => router.push(`/services/${service.slug}`)}
                className="group rounded-2xl border border-yellow-400 bg-white p-6 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-[2px]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {service.icon}
                  </div>

                  <span className="rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    {service.badge}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-extrabold text-black">
                  {service.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {service.desc}
                </p>

                <div className="mt-4 text-sm font-extrabold text-yellow-500">
                  {service.price}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-black">
                  View services
                  <span className="text-yellow-400 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}