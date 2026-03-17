"use client";
import React, { useState } from "react";
import Link from "next/link";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#categories", label: "Categories" },
  { href: "#tips", label: "Tips & Guides" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-yellow-400 text-black font-extrabold grid place-items-center shadow-md">
            V
          </span>
          <span className="font-extrabold tracking-tight text-black">
            THEVULGO
            <span className="text-gray-500 font-semibold"> · Valencia</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-800">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={scrollTo(i.href)}
              className="hover:text-black"
            >
              {i.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={scrollTo("#contact")}
            className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-extrabold shadow-md hover:scale-105 transition"
          >
            Request Quote
          </a>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-xl border border-gray-300 grid place-items-center shadow-sm"
          aria-label="Menu"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3 font-semibold text-gray-900">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={scrollTo(i.href)}
                className="py-2"
              >
                {i.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={scrollTo("#contact")}
              className="mt-2 bg-yellow-400 text-black px-5 py-3 rounded-2xl font-extrabold shadow-md text-center"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}