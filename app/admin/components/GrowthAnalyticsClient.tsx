"use client";

import { useEffect, useMemo, useState } from "react";
import AdminNav from "./AdminNav";

type Order = {
  id: string;
  order_number: number;
  status: string;
  category: string;
  total: number;
  material_cost: number;
  city: string;
  area: string;
  acquisition_source: string;
  attribution_service: string | null;
  attribution_page_path: string | null;
  analytics_session_id: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  created_at: string;
  first_response_at: string | null;
  confirmed_at: string | null;
  completed_at: string | null;
  payment_received_at: string | null;
};
type Event = {
  session_id: string;
  visitor_id: string | null;
  event_name: string;
  source: string | null;
  service: string | null;
  page_path: string;
  referrer: string | null;
  duration_ms: number | null;
  scroll_depth: number | null;
  device_type: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  created_at: string;
};
type Session = {
  session_id: string;
  visitor_id: string;
  landing_page: string;
  referrer: string | null;
  first_touch_source: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  device_type: string;
  first_seen_at: string;
  last_seen_at: string;
  page_view_count: number;
  event_count: number;
  engaged_seconds: number;
  converted: boolean;
};
type Lead = {
  status: string;
  lost_reason: string;
  potential_value: number;
  source: string;
  created_at: string;
};
type LeadStage = {
  from_status: string | null;
  to_status: string;
  source: string;
  potential_value: number;
  changed_at: string;
};
type AnalyticsData = {
  orders: Order[];
  events: Event[];
  sessions: Session[];
  leads: Lead[];
  leadStages: LeadStage[];
  days: number;
};
type Ranked = {
  label: string;
  count: number;
  value: number;
  conversion?: number;
};

const money = (value: number) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value || 0);
const percent = (value: number) => `${Math.round(value || 0)}%`;
const sourceLabel = (value: {
  utm_campaign?: string | null;
  utm_source?: string | null;
  first_touch_source?: string | null;
  acquisition_source?: string | null;
  referrer?: string | null;
}) => {
  if (value.utm_campaign) return value.utm_campaign;
  if (value.utm_source) return value.utm_source;
  if (value.first_touch_source || value.acquisition_source)
    return value.first_touch_source || value.acquisition_source || "Direct";
  if (value.referrer) {
    try {
      return new URL(value.referrer).hostname.replace(/^www\./, "");
    } catch {
      return "Referral";
    }
  }
  return "Direct / unknown";
};
const uniqueSessions = (events: Event[], name: string) =>
  new Set(
    events
      .filter((event) => event.event_name === name)
      .map((event) => event.session_id),
  ).size;

export default function GrowthAnalyticsClient() {
  const [days, setDays] = useState(30);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    void fetch(`/api/admin/growth-analytics?days=${days}`, {
      cache: "no-store",
    })
      .then(async (response) => ({ response, body: await response.json() }))
      .then(({ response, body }) =>
        response.ok
          ? setData(body)
          : setError(body.error || "Could not load analytics"),
      )
      .catch(() => setError("Could not load analytics"))
      .finally(() => setLoading(false));
  }, [days]);

  const changeRange = (value: number) => {
    setLoading(true);
    setError("");
    setDays(value);
  };

  const report = useMemo(() => buildReport(data, days), [data, days]);
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f5f5f2] p-3 pb-[max(1rem,env(safe-area-inset-bottom))] text-[#101010] sm:p-6">
      <div className="mx-auto max-w-[1500px] space-y-5">
        <AdminNav />
        <header className="overflow-hidden rounded-[1.75rem] bg-[#111] p-5 text-white shadow-xl sm:rounded-[2rem] sm:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex rounded-full bg-yellow-400 px-3 py-1 text-xs font-black uppercase tracking-[.16em] text-black">
                First-party intelligence
              </div>
              <h1 className="mt-4 text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl">
                THEVULGO Growth OS
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                Every anonymous journey from landing page to booked and
                completed Spain job — stored in your own Supabase project.
              </p>
            </div>
            <div className="grid w-full grid-cols-3 rounded-2xl bg-white/10 p-1 sm:flex sm:w-auto">
              {[7, 30, 90].map((value) => (
                <button
                  key={value}
                  onClick={() => changeRange(value)}
                  className={`rounded-xl px-3 py-2 text-xs font-black sm:px-4 sm:text-sm ${days === value ? "bg-yellow-400 text-black" : "text-white/70"}`}
                >
                  {value} days
                </button>
              ))}
            </div>
          </div>
        </header>
        {error ? (
          <p className="rounded-2xl bg-red-50 p-4 font-bold text-red-700">
            {error}. Run migration 202608080013 in Supabase.
          </p>
        ) : null}
        {loading ? (
          <div className="rounded-3xl bg-white p-8 text-center font-bold text-gray-500">
            Building your live report…
          </div>
        ) : null}

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
          <Metric
            label="Sessions"
            value={report.sessions.length}
            note={`${report.visitors} unique visitors`}
          />
          <Metric
            label="Engaged"
            value={percent(report.engagementRate)}
            note={`${report.engaged} quality sessions`}
            accent
          />
          <Metric
            label="Estimate leads"
            value={report.submitted}
            note={`${percent(report.sessionConversion)} session conversion`}
          />
          <Metric
            label="Orders"
            value={report.orders.length}
            note={`${report.confirmed} confirmed`}
          />
          <Metric
            label="Completed revenue"
            value={money(report.revenue)}
            note={`${money(report.net)} after materials`}
            accent
          />
          <Metric
            label="Avg response"
            value={
              report.avgResponse ? `${report.avgResponse.toFixed(1)}h` : "—"
            }
            note={`${report.paid} payments recorded`}
          />
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.65fr_.85fr]">
          <Panel
            title="Demand & revenue trend"
            subtitle="Sessions, submitted orders and completed revenue by day"
          >
            <TrendChart points={report.trend} />
          </Panel>
          <Panel
            title="Lead funnel"
            subtitle="Unique sessions at each decision point"
          >
            <Funnel steps={report.funnel} />
          </Panel>
        </section>

        <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          <Ranking
            title="Acquisition channels"
            subtitle="Sessions, conversion and completed revenue"
            rows={report.sources}
            showConversion
            showMoney
          />
          <Ranking
            title="Landing pages"
            subtitle="Best entry pages by qualified traffic"
            rows={report.landings}
            showConversion
          />
          <Ranking
            title="Services generating demand"
            subtitle="Orders and completed revenue by category"
            rows={report.services}
            showMoney
          />
          <Ranking
            title="Spain operations areas"
            subtitle="Where orders and revenue originate"
            rows={report.areas}
            showMoney
          />
          <Ranking
            title="CTA intent"
            subtitle="Buttons people use before contacting you"
            rows={report.ctas}
          />
          <Ranking
            title="Devices"
            subtitle="Session mix and lead conversion"
            rows={report.devices}
            showConversion
          />
          <Ranking
            title="Pipeline movement"
            subtitle="Lead status changes recorded by the CRM"
            rows={report.stageMoves}
          />
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.5fr_.8fr]">
          <Panel
            title="Recent lead journeys"
            subtitle="The actual route from entry page to conversion; no customer PII is shown"
          >
            <JourneyList journeys={report.journeys} />
          </Panel>
          <div className="space-y-5">
            <Ranking
              title="Drop-off pages"
              subtitle="Exits without an estimate submission"
              rows={report.exits}
            />
            <Ranking
              title="Lost lead reasons"
              subtitle="Reasons recorded by the CRM team"
              rows={report.lost}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function buildReport(data: AnalyticsData | null, days: number) {
  const sessions = data?.sessions || [],
    events = data?.events || [],
    orders = data?.orders || [],
    leads = data?.leads || [],
    leadStages = data?.leadStages || [];
  const completed = orders.filter((order) =>
    ["completed", "done"].includes(order.status),
  );
  const confirmed = orders.filter((order) =>
    ["confirmed", "in_progress", "completed", "done"].includes(order.status),
  ).length;
  const paid = orders.filter((order) => order.payment_received_at).length;
  const visitors = new Set(sessions.map((session) => session.visitor_id)).size;
  const scrollSessions = new Set(
    events
      .filter((event) => Number(event.scroll_depth) >= 50)
      .map((event) => event.session_id),
  );
  const engagedSessions = sessions.filter(
    (session) =>
      session.page_view_count >= 2 ||
      session.engaged_seconds >= 30 ||
      scrollSessions.has(session.session_id),
  );
  const submitted = uniqueSessions(events, "estimate_submitted");
  const responseHours = orders
    .filter((order) => order.first_response_at)
    .map(
      (order) =>
        (new Date(order.first_response_at!).getTime() -
          new Date(order.created_at).getTime()) /
        36e5,
    )
    .filter((value) => value >= 0);
  const bySession = new Map<string, Event[]>();
  events.forEach((event) => {
    const list = bySession.get(event.session_id) || [];
    list.push(event);
    bySession.set(event.session_id, list);
  });
  bySession.forEach((list) =>
    list.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at)),
  );
  const sessionOrder = new Map(
    orders
      .filter((order) => order.analytics_session_id)
      .map((order) => [order.analytics_session_id!, order]),
  );
  const trackedOrderSessions = new Set(sessions.map((session) => session.session_id));
  const trackedOrders = orders.filter(
    (order) =>
      order.analytics_session_id && trackedOrderSessions.has(order.analytics_session_id),
  );
  const trackedConfirmed = trackedOrders.filter((order) =>
    ["confirmed", "in_progress", "completed", "done"].includes(order.status),
  ).length;
  const trackedCompleted = trackedOrders.filter((order) =>
    ["completed", "done"].includes(order.status),
  ).length;
  const rank = <T,>(
    items: T[],
    label: (item: T) => string,
    value: (item: T) => number = () => 0,
  ): Ranked[] =>
    Object.values(
      items.reduce<Record<string, Ranked>>((acc, item) => {
        const name = label(item) || "Unknown";
        acc[name] ||= { label: name, count: 0, value: 0 };
        acc[name].count++;
        acc[name].value += value(item);
        return acc;
      }, {}),
    ).sort((a, b) => b.value - a.value || b.count - a.count);
  const sources = rank(sessions, sourceLabel).map((row) => {
    const sourceSessions = sessions.filter((s) => sourceLabel(s) === row.label);
    const converted = sourceSessions.filter((s) => s.converted).length;
    const revenue = completed
      .filter((o) => sourceLabel(o) === row.label)
      .reduce((sum, o) => sum + Number(o.total), 0);
    return {
      ...row,
      value: revenue,
      conversion: sourceSessions.length
        ? (converted / sourceSessions.length) * 100
        : 0,
    };
  });
  const landings = rank(sessions, (s) => s.landing_page).map((row) => {
    const list = sessions.filter((s) => s.landing_page === row.label);
    return {
      ...row,
      conversion: list.length
        ? (list.filter((s) => s.converted).length / list.length) * 100
        : 0,
    };
  });
  const devices = rank(sessions, (s) => s.device_type).map((row) => {
    const list = sessions.filter((s) => s.device_type === row.label);
    return {
      ...row,
      conversion: list.length
        ? (list.filter((s) => s.converted).length / list.length) * 100
        : 0,
    };
  });
  const exits = rank(
    events.filter(
      (e) =>
        e.event_name === "page_exit" &&
        !sessions.find((s) => s.session_id === e.session_id)?.converted,
    ),
    (e) => e.page_path,
  );
  const ctas = rank(
    events.filter((e) =>
      ["cta_click", "whatsapp_click", "estimate_click"].includes(e.event_name),
    ),
    (e) => e.source || e.event_name.replaceAll("_", " "),
  );
  const trend = Array.from({ length: days }, (_, index) => {
    const date = new Date();
    date.setUTCHours(0, 0, 0, 0);
    date.setUTCDate(date.getUTCDate() - (days - 1 - index));
    const key = date.toISOString().slice(0, 10);
    return {
      key,
      label: date.toLocaleDateString("en-IE", {
        month: "short",
        day: "numeric",
      }),
      sessions: sessions.filter((s) => s.first_seen_at.slice(0, 10) === key)
        .length,
      orders: orders.filter((o) => o.created_at.slice(0, 10) === key).length,
      revenue: completed
        .filter((o) => (o.completed_at || o.created_at).slice(0, 10) === key)
        .reduce((sum, o) => sum + Number(o.total), 0),
    };
  });
  const journeys = sessions
    .filter(
      (s) =>
        s.converted ||
        bySession
          .get(s.session_id)
          ?.some((e) =>
            ["estimate_click", "whatsapp_click"].includes(e.event_name),
          ),
    )
    .slice(0, 15)
    .map((session) => ({
      session,
      events: bySession.get(session.session_id) || [],
      order: sessionOrder.get(session.session_id),
    }));
  return {
    sessions,
    visitors,
    engaged: engagedSessions.length,
    engagementRate: sessions.length
      ? (engagedSessions.length / sessions.length) * 100
      : 0,
    submitted,
    sessionConversion: sessions.length
      ? (submitted / sessions.length) * 100
      : 0,
    orders,
    confirmed,
    paid,
    revenue: completed.reduce((sum, o) => sum + Number(o.total), 0),
    net: completed.reduce(
      (sum, o) => sum + Number(o.total) - Number(o.material_cost || 0),
      0,
    ),
    avgResponse: responseHours.length
      ? responseHours.reduce((a, b) => a + b, 0) / responseHours.length
      : 0,
    trend,
    sources,
    landings,
    devices,
    exits,
    ctas,
    services: rank(
      orders,
      (o) => o.category || o.attribution_service || "Uncategorised",
      (o) => (["completed", "done"].includes(o.status) ? Number(o.total) : 0),
    ),
    areas: rank(
      orders,
      (o) => `${o.city} · ${o.area}`,
      (o) => (["completed", "done"].includes(o.status) ? Number(o.total) : 0),
    ),
    lost: rank(
      leads.filter((lead) => lead.status === "lost"),
      (lead) => lead.lost_reason || "No reason recorded",
    ),
    stageMoves: rank(
      leadStages,
      (event) => `${event.from_status || "created"} → ${event.to_status}`,
    ),
    funnel: [
      { label: "Sessions", value: sessions.length },
      { label: "Engaged visits", value: engagedSessions.length },
      {
        label: "Estimate / WhatsApp intent",
        value: new Set(
          events
            .filter((e) =>
              ["estimate_click", "whatsapp_click"].includes(e.event_name),
            )
            .map((e) => e.session_id),
        ).size,
      },
      { label: "Estimate submitted", value: submitted },
      { label: "Confirmed jobs", value: trackedConfirmed },
      { label: "Completed jobs", value: trackedCompleted },
    ],
    journeys,
  };
}

function Metric({
  label,
  value,
  note,
  accent = false,
}: {
  label: string;
  value: string | number;
  note: string;
  accent?: boolean;
}) {
  return (
    <article
      className={`rounded-3xl border p-5 ${accent ? "border-yellow-400 bg-yellow-400" : "border-black/5 bg-white"}`}
    >
      <p className="text-[11px] font-black uppercase tracking-[.12em] text-black/50">
        {label}
      </p>
      <p className="mt-2 text-3xl font-black tracking-tight">{value}</p>
      <p className="mt-2 text-xs font-semibold text-black/55">{note}</p>
    </article>
  );
}
function Panel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-black/5 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-xl font-black">{title}</h2>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function TrendChart({
  points,
}: {
  points: Array<{
    label: string;
    sessions: number;
    orders: number;
    revenue: number;
  }>;
}) {
  const width = 900,
    height = 260,
    pad = 24,
    max = Math.max(1, ...points.map((p) => p.sessions));
  const path = (key: "sessions" | "orders") =>
    points
      .map(
        (point, index) =>
          `${index ? "L" : "M"}${pad + index * ((width - pad * 2) / Math.max(1, points.length - 1))},${height - pad - (point[key] / max) * (height - pad * 2)}`,
      )
      .join(" ");
  return (
    <div>
      <div className="flex gap-5 text-xs font-bold">
        <span>
          <i className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-black" />
          Sessions
        </span>
        <span>
          <i className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
          Orders
        </span>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mt-3 h-64 w-full overflow-visible"
        role="img"
        aria-label="Sessions and orders trend"
      >
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#facc15" stopOpacity=".35" />
            <stop offset="1" stopColor="#facc15" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75, 1].map((n) => (
          <line
            key={n}
            x1={pad}
            x2={width - pad}
            y1={height - pad - n * (height - pad * 2)}
            y2={height - pad - n * (height - pad * 2)}
            stroke="#eee"
          />
        ))}
        <path
          d={`${path("sessions")} L${width - pad},${height - pad} L${pad},${height - pad} Z`}
          fill="url(#area)"
        />
        <path
          d={path("sessions")}
          fill="none"
          stroke="#111"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d={path("orders")}
          fill="none"
          stroke="#facc15"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex justify-between text-[10px] font-bold text-gray-400">
        <span>{points[0]?.label}</span>
        <span>{points[Math.floor(points.length / 2)]?.label}</span>
        <span>{points.at(-1)?.label}</span>
      </div>
    </div>
  );
}
function Funnel({ steps }: { steps: Array<{ label: string; value: number }> }) {
  const max = Math.max(1, steps[0]?.value || 0);
  return (
    <div className="space-y-3">
      {steps.map((step, index) => (
        <div key={step.label}>
          <div className="mb-1 flex justify-between text-xs font-bold">
            <span>{step.label}</span>
            <span>
              {step.value}
              {index ? ` · ${percent((step.value / max) * 100)}` : ""}
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"
              style={{
                width: `${Math.max(step.value ? 4 : 0, (step.value / max) * 100)}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
function Ranking({
  title,
  subtitle,
  rows,
  showMoney = false,
  showConversion = false,
}: {
  title: string;
  subtitle: string;
  rows: Ranked[];
  showMoney?: boolean;
  showConversion?: boolean;
}) {
  const max = Math.max(1, ...rows.map((r) => r.count));
  return (
    <Panel title={title} subtitle={subtitle}>
      <div className="space-y-4">
        {rows.slice(0, 8).map((row) => (
          <div key={row.label}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="min-w-0 truncate font-bold">{row.label}</span>
              <span className="shrink-0 text-xs font-black">
                {row.count}
                {showConversion ? ` · ${percent(row.conversion || 0)}` : ""}
                {showMoney ? ` · ${money(row.value)}` : ""}
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-yellow-400"
                style={{ width: `${(row.count / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
        {!rows.length ? (
          <p className="py-6 text-center text-sm text-gray-400">
            Data will appear after new visits.
          </p>
        ) : null}
      </div>
    </Panel>
  );
}
function JourneyList({
  journeys,
}: {
  journeys: Array<{ session: Session; events: Event[]; order?: Order }>;
}) {
  return (
    <div className="space-y-3">
      {journeys.length ? (
        journeys.map(({ session, events, order }) => {
          const pages = events
            .filter((e) => e.event_name === "page_view")
            .map((e) => e.page_path)
            .filter(
              (path, index, all) => index === 0 || path !== all[index - 1],
            );
          const intent = events
            .filter((e) =>
              [
                "whatsapp_click",
                "estimate_click",
                "estimate_submitted",
              ].includes(e.event_name),
            )
            .map((e) => e.event_name.replaceAll("_", " "));
          return (
            <article
              key={session.session_id}
              className="rounded-2xl border border-black/5 bg-[#fafaf7] p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <b>{sourceLabel(session)}</b>
                  <span className="ml-2 text-xs text-gray-400">
                    {session.device_type} ·{" "}
                    {Math.round(session.engaged_seconds)}s
                  </span>
                </div>
                {order ? (
                  <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-black">
                    TVG-ES-{String(order.order_number).padStart(5, "0")} ·{" "}
                    {money(order.total)}
                  </span>
                ) : (
                  <span className="rounded-full bg-black px-3 py-1 text-xs font-black text-white">
                    Active lead journey
                  </span>
                )}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
                {pages.slice(0, 8).map((page, index) => (
                  <span
                    key={`${page}-${index}`}
                    className="flex items-center gap-1.5"
                  >
                    <span className="rounded-lg border bg-white px-2 py-1 font-semibold">
                      {page}
                    </span>
                    {index < pages.length - 1 ? (
                      <b className="text-yellow-600">→</b>
                    ) : null}
                  </span>
                ))}
              </div>
              {intent.length ? (
                <p className="mt-3 text-xs font-bold text-gray-500">
                  Intent: {intent.join(" → ")}
                </p>
              ) : null}
            </article>
          );
        })
      ) : (
        <p className="py-8 text-center text-sm text-gray-400">
          Converted journeys will appear here.
        </p>
      )}
    </div>
  );
}
