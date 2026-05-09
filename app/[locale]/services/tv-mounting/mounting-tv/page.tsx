import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Tv, Wrench, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "TV Mounting in Valencia | THEVULGO",
  description:
    "Professional TV mounting in Valencia and nearby. Clean installation, cable management, bracket mounting and fast response.",
  keywords: [
    "TV mounting Valencia",
    "TV installation Valencia",
    "wall TV mounting Valencia",
    "cable concealment Valencia",
    "handyman Valencia TV mounting",
  ],
  openGraph: {
    title: "TV Mounting in Valencia | THEVULGO",
    description:
      "Professional TV mounting in Valencia and nearby. Clean installation, cable management and bracket mounting.",
    url: "https://thevulgo.es/services/tv-mounting",
    siteName: "THEVULGO",
    type: "website",
  },
};

export default function TvMountingServicePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-white" />
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-200/40 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-2 text-sm font-semibold">
            <Tv className="h-4 w-4" />
            TV Mounting Service
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            TV mounting in Valencia
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Clean, secure and professional TV mounting for apartments, homes and rental properties.
            We install TVs on suitable wall types, help with bracket fitting and offer neat cable routing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/estimate?category=tv-mounting"
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 text-sm font-extrabold text-black shadow-md transition hover:scale-[1.02]"
            >
              Get estimate
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-4 text-sm font-bold text-black transition hover:bg-gray-50"
            >
              Back to services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-yellow-400 bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-extrabold">What’s included</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "TV mounting on suitable wall types",
                "Bracket installation",
                "Basic leveling and positioning",
                "Cable concealment with raceway",
                "Soundbar mounting",
                "Clean finish and fast response",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-400 bg-yellow-50 p-8 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-gray-500">
              From
            </p>
            <div className="mt-3 text-4xl font-extrabold">€49</div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Wrench className="mt-0.5 h-5 w-5 text-black" />
                <div>
                  <p className="font-bold">Bracket install available</p>
                  <p className="text-sm text-gray-600">
                    Bring your own bracket or include bracket installation as part of the service.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-black" />
                <div>
                  <p className="font-bold">Clear pricing</p>
                  <p className="text-sm text-gray-600">
                    We confirm the job before drilling. No surprises.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/estimate?category=tv-mounting"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-sm font-extrabold text-white transition hover:opacity-90"
            >
              Book TV mounting
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-yellow-400 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-extrabold">Why this page is useful for SEO</h2>

          <div className="mt-4 space-y-4 text-gray-700">
            <p>
              This service page targets people searching for TV mounting in Valencia. Instead of sending all traffic
              only to the homepage, you now have a dedicated page focused on one exact service.
            </p>
            <p>
              Later you can create the same type of page for electrical, plumbing, furniture assembly, drywall,
              repairs, doors, smart home, kitchen, bathroom, move-in setup and exterior work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}