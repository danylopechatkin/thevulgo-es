import WorkerPortalHeader from "@/app/worker/components/WorkerPortalHeader";
import { requireWorker } from "@/lib/worker-auth";
import { Banknote, Camera, Clock3, ShieldCheck } from "lucide-react";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Contractor agreement | THEVULGO",
  robots: { index: false, follow: false, noarchive: true },
};

const terms = [
  {
    icon: Banknote,
    title: "Contractor share & weekly payout",
    text: "The expected worker share is shown inside every assigned job. Contractor payouts are processed weekly on Monday, subject to completed records and any outstanding cash reconciliation.",
  },
  {
    icon: Camera,
    title: "Photos & completion evidence",
    text: "Clear before and after photos are required. A job is not ready to close until the approved work, photos, payment record and status updates are complete.",
  },
  {
    icon: Clock3,
    title: "Cash reconciliation",
    text: "Cash collected for THEVULGO must be transferred within 24 hours after job completion. Outstanding cash may pause contractor payouts until the balance is received.",
  },
  {
    icon: ShieldCheck,
    title: "Private access",
    text: "Use the portal only for your assigned work. Customer, job and identity information is confidential and must not be shared outside the approved assignment.",
  },
];

export default async function WorkerAgreementPage() {
  const { worker } = await requireWorker();

  return (
    <main className="min-h-screen bg-[#f4f4f0] px-3 py-5 text-[#111] sm:px-6 sm:py-8">
      <div className="mx-auto max-w-5xl">
        <WorkerPortalHeader fullName={worker.full_name} />

        <section className="mt-5 overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5">
          <header className="bg-black p-6 text-white sm:p-9">
            <p className="text-[10px] font-black uppercase tracking-[.16em] text-yellow-400">
              THEVULGO contractor portal
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              Operating agreement summary
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/65 sm:text-base">
              Your personal profile is created and managed privately by
              THEVULGO. Contact administration if any recorded information is
              incorrect.
            </p>
          </header>

          <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-9">
            {terms.map((term) => {
              const Icon = term.icon;
              return (
                <article
                  key={term.title}
                  className="rounded-[1.5rem] border border-black/7 bg-[#faf9f2] p-5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-yellow-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 text-lg font-black">{term.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {term.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
