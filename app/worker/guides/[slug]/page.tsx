import WorkerPortalHeader from "@/app/worker/components/WorkerPortalHeader";
import { requireWorker } from "@/lib/worker-auth";
import { getWorkerGuide } from "@/lib/worker-guides";
import { ArrowLeft, Check, Clock3, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Contractor field guide | THEVULGO",
  robots: { index: false, follow: false, noarchive: true },
};

export default async function WorkerGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { worker } = await requireWorker();
  const { slug } = await params;
  const guide = getWorkerGuide(slug);
  if (!guide) notFound();

  return (
    <main className="min-h-screen bg-[#f4f4f0] px-3 py-5 text-[#111] sm:px-6 sm:py-8">
      <div className="mx-auto max-w-5xl">
        <WorkerPortalHeader fullName={worker.full_name} />

        <Link
          href="/worker/guides"
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-black shadow-sm ring-1 ring-black/5"
        >
          <ArrowLeft className="h-4 w-4" /> All training guides
        </Link>

        <article className="mt-4 overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5">
          <header className="bg-black p-6 text-white sm:p-10">
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[.14em] text-yellow-400">
              <span>{guide.category}</span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" /> {guide.duration}
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/65 sm:text-base">
              {guide.summary}
            </p>
          </header>

          <div className="space-y-5 p-5 sm:p-9">
            {guide.sections.map((section, sectionIndex) => (
              <section
                key={section.title}
                className="rounded-[1.5rem] border border-black/7 bg-[#faf9f2] p-5 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-yellow-400 text-sm font-black">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-black">{section.title}</h2>
                    <ol className="mt-5 space-y-4">
                      {section.steps.map((step) => (
                        <li
                          key={step}
                          className="flex gap-3 text-sm leading-6 text-gray-700 sm:text-base"
                        >
                          <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    {section.warning ? (
                      <div className="mt-5 flex gap-3 rounded-2xl bg-red-50 p-4 text-sm font-bold leading-6 text-red-800 ring-1 ring-red-100">
                        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" />
                        <span>{section.warning}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </section>
            ))}

            <div className="rounded-[1.5rem] bg-yellow-400 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-7">
              <div>
                <h2 className="text-xl font-black">Unsure about this job?</h2>
                <p className="mt-1 text-sm font-semibold text-black/65">
                  Pause the work and contact THEVULGO before proceeding.
                </p>
              </div>
              <Link
                href="/worker"
                className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-black px-5 py-3 text-sm font-black text-white sm:mt-0"
              >
                Return to my jobs
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
