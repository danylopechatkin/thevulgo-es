"use client";

import { useEffect, useMemo, useState } from "react";
import AdminNav from "./AdminNav";
import {
  ActivityBars,
  CrmHero,
  CrmMetric,
  CrmPanel,
  EmptyCrm,
  MiniBars,
} from "./CrmVisuals";

type Click = {
  id: string;
  source: string;
  service: string | null;
  page_path: string;
  message_type: string;
  created_at: string;
};
type EstimateClick = {
  id: string;
  source: string;
  service: string | null;
  page_path: string;
  category: string;
  created_at: string;
};
type AttributedOrder = {
  id: string;
  order_number: number;
  total: number;
  currency: string;
  city: string;
  area: string;
  deposit_required: boolean;
  deposit_amount: number;
  attribution_source: string | null;
  attribution_service: string | null;
  attribution_page_path: string | null;
  created_at: string;
};
const localDate = (value: string) =>
  new Intl.DateTimeFormat("en-IE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Madrid",
  }).format(new Date(value));

export default function WhatsAppAnalyticsClient() {
  const [clicks, setClicks] = useState<Click[]>([]);
  const [estimateClicks, setEstimateClicks] = useState<EstimateClick[]>([]);
  const [orders, setOrders] = useState<AttributedOrder[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    void Promise.all([
      fetch("/api/admin/whatsapp-clicks", { cache: "no-store" }),
      fetch("/api/admin/estimate-clicks", { cache: "no-store" }),
      fetch("/api/admin/order-attribution", { cache: "no-store" }),
    ])
      .then(async ([whatsapp, estimates, attributedOrders]) => {
        const [whatsappData, estimateData, ordersData] = await Promise.all([
          whatsapp.json(),
          estimates.json(),
          attributedOrders.json(),
        ]);
        if (!whatsapp.ok)
          throw new Error(
            whatsappData.error || "Could not load WhatsApp analytics",
          );
        if (!estimates.ok)
          throw new Error(
            estimateData.error || "Could not load estimate analytics",
          );
        if (!attributedOrders.ok)
          throw new Error(
            ordersData.error || "Could not load order attribution",
          );
        setClicks(whatsappData.clicks);
        setEstimateClicks(estimateData.clicks);
        setOrders(ordersData.orders);
      })
      .catch((reason: Error) => setError(reason.message));
  }, []);
  const summary = useMemo(
    () =>
      Object.entries(
        clicks.reduce<Record<string, number>>((total, click) => {
          total[click.source] = (total[click.source] || 0) + 1;
          return total;
        }, {}),
      ).sort((a, b) => b[1] - a[1]),
    [clicks],
  );
  const areaSummary = useMemo(
    () =>
      Object.values(
        orders.reduce<
          Record<string, { label: string; orders: number; revenue: number }>
        >((total, order) => {
          const label =
            [order.city, order.area].filter(Boolean).join(" · ") ||
            "Location not supplied";
          const item = total[label] || { label, orders: 0, revenue: 0 };
          item.orders += 1;
          item.revenue += Number(order.total || 0);
          total[label] = item;
          return total;
        }, {}),
      ).sort((a, b) => b.orders - a.orders || b.revenue - a.revenue),
    [orders],
  );
  const activity = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => {
        const date = new Date();
        date.setDate(date.getDate() - (13 - index));
        const key = date.toISOString().slice(0, 10);
        return {
          label: date.toLocaleDateString("en-IE", {
            month: "short",
            day: "numeric",
          }),
          value:
            clicks.filter((click) => click.created_at.slice(0, 10) === key)
              .length +
            estimateClicks.filter(
              (click) => click.created_at.slice(0, 10) === key,
            ).length,
        };
      }),
    [clicks, estimateClicks],
  );
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f4f0] p-3 pb-[max(1rem,env(safe-area-inset-bottom))] text-black sm:p-6">
      <div className="mx-auto max-w-7xl space-y-5">
        <AdminNav />
        <CrmHero
          eyebrow="First-party intent analytics"
          title="WhatsApp & quote demand"
          description="See which pages, services and Spanish cities create real contact intent and submitted orders."
        />
        {error ? (
          <p className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">
            {error}
          </p>
        ) : null}
        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <CrmMetric
            label="WhatsApp intent"
            value={clicks.length}
            note="Tracked contact clicks"
            accent
          />
          <CrmMetric
            label="Estimate intent"
            value={estimateClicks.length}
            note="Calculator visits"
          />
          <CrmMetric
            label="Attributed orders"
            value={orders.length}
            note={`${areaSummary.length} service areas`}
          />
          <CrmMetric
            label="Intent → order"
            value={
              clicks.length + estimateClicks.length
                ? `${Math.round((orders.length / (clicks.length + estimateClicks.length)) * 100)}%`
                : "—"
            }
            note={
              summary[0]?.[0] ? `Top: ${summary[0][0]}` : "Waiting for traffic"
            }
          />
        </section>
        <section className="grid gap-5 lg:grid-cols-[1.4fr_.8fr]">
          <CrmPanel
            title="Contact intent trend"
            subtitle="WhatsApp and calculator clicks over the last 14 days"
          >
            <ActivityBars values={activity} />
          </CrmPanel>
          <CrmPanel
            title="WhatsApp sources"
            subtitle="Where people start conversations"
          >
            <MiniBars
              items={summary.map(([label, value]) => ({ label, value }))}
            />
          </CrmPanel>
        </section>
        <ClickList
          title="Latest WhatsApp clicks"
          empty="No WhatsApp clicks yet."
          clicks={clicks.map((click) => ({
            ...click,
            detail: click.service || "General quote",
          }))}
        />
        <ClickList
          title="Latest calculator visits"
          empty="No tracked calculator visits yet."
          clicks={estimateClicks.map((click) => ({
            ...click,
            detail: click.service || click.category,
          }))}
        />
        <section className="rounded-[2rem] border border-black/5 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-black">Demand by service area</h2>
          <p className="mt-1 text-sm text-gray-600">
            Use completed submissions to decide which Spanish areas deserve
            advertising.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {areaSummary.length ? (
              areaSummary.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-yellow-50 px-4 py-3"
                >
                  <p className="font-black">{item.label}</p>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.orders} order{item.orders === 1 ? "" : "s"} · €
                    {item.revenue.toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <EmptyCrm
                title="No attributed orders yet"
                text="Submitted calculator orders will appear here with their Spain area."
              />
            )}
          </div>
        </section>
        <section className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
          <div className="border-b p-5">
            <h2 className="text-xl font-black">Submitted orders by source</h2>
          </div>
          <div className="divide-y">
            {orders.length ? (
              orders.map((order) => (
                <article
                  key={order.id}
                  className="grid gap-2 p-4 text-sm sm:grid-cols-[140px_1fr_1fr_1fr_140px]"
                >
                  <b>TVG-ES-{String(order.order_number).padStart(5, "0")}</b>
                  <span>
                    {order.attribution_service ||
                      order.attribution_source ||
                      "Direct / unknown"}
                  </span>
                  <span>
                    {[order.city, order.area].filter(Boolean).join(" · ") ||
                      "—"}
                  </span>
                  <span className="truncate text-gray-600">
                    {order.attribution_page_path || "—"}
                  </span>
                  <span className="font-black">
                    €{Number(order.total).toFixed(2)}
                    {order.deposit_required
                      ? ` · deposit €${Number(order.deposit_amount).toFixed(2)}`
                      : ""}
                  </span>
                </article>
              ))
            ) : (
              <div className="p-5">
                <EmptyCrm
                  title="No submitted orders yet"
                  text="New orders will appear with their originating page, service and area."
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function ClickList({
  title,
  empty,
  clicks,
}: {
  title: string;
  empty: string;
  clicks: Array<{
    id: string;
    source: string;
    page_path: string;
    created_at: string;
    detail: string;
  }>;
}) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm">
      <div className="border-b p-5">
        <h2 className="text-xl font-black">{title}</h2>
      </div>
      <div className="divide-y">
        {clicks.length ? (
          clicks.map((click) => (
            <article
              key={click.id}
              className="grid gap-2 p-4 text-sm sm:grid-cols-[180px_1fr_1fr_190px]"
            >
              <b>{click.source}</b>
              <span>{click.detail}</span>
              <span className="truncate text-gray-600">{click.page_path}</span>
              <span className="text-gray-500">
                {localDate(click.created_at)}
              </span>
            </article>
          ))
        ) : (
          <div className="p-5">
            <EmptyCrm
              title={empty}
              text="New first-party contact events will appear here automatically."
            />
          </div>
        )}
      </div>
    </section>
  );
}
