import { getPaymentByToken } from "@/lib/payment-service";
import { notFound } from "next/navigation";
import PaymentClient from "./PaymentClient";

export const dynamic = "force-dynamic";
export const metadata = { title: "Secure payment | THEVULGO", robots: { index: false, follow: false } };

export default async function PaymentPage({
  params,
  searchParams,
}: {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ status?: string }>;
}) {
  const { token } = await params;
  const payment = await getPaymentByToken(token);
  if (!payment) notFound();
  const order = Array.isArray(payment.orders) ? payment.orders[0] : payment.orders;
  const { status } = await searchParams;
  return (
    <main className="min-h-screen bg-[#f4f4f0] px-4 py-12 text-[#111]">
      <div className="mx-auto max-w-xl overflow-hidden rounded-[2.2rem] bg-white shadow-2xl ring-1 ring-black/5">
        <header className="bg-[#111] px-7 py-6 text-white">
          <b className="text-xl">THEVULGO</b>
          <span className="float-right rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-black">TORONTO &amp; GTA</span>
        </header>
        <section className="p-7 sm:p-10">
          <PaymentClient
            token={token}
            amount={Number(payment.amount)}
            orderLabel={`TVG-ES-${String(order?.order_number || "").padStart(5, "0")}`}
            completed={payment.status === "completed"}
            status={status}
          />
        </section>
      </div>
    </main>
  );
}
