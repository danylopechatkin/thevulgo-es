"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  ContactRound,
  MapPin,
  PencilLine,
  Search,
  ShieldCheck,
  ShoppingBag,
  X,
} from "lucide-react";
import AdminNav from "./AdminNav";

type Client = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  alternate_phone: string;
  address: string;
  apartment: string;
  city: string;
  area: string;
  postal_code: string;
  customer_type: "residential" | "commercial" | "property_manager" | "other";
  preferred_contact_method: "whatsapp" | "phone" | "email" | "sms";
  marketing_source: string;
  access_notes: string;
  private_notes: string;
  tags: string[];
  do_not_contact: boolean;
  first_order_at?: string | null;
  last_order_at?: string | null;
  created_at: string;
};

type Order = {
  id: string;
  client_profile_id: string | null;
  order_number: number;
  category: string;
  total: number;
  currency: string;
  status: string;
  services?: Array<{ label?: string; qty?: number }>;
  notes?: string;
  scheduled_at: string;
  created_at: string;
  completed_at?: string | null;
  payment_received_at?: string | null;
  payment_method?: string | null;
  area: string;
  city: string;
  address: string;
};

export default function ClientsDatabaseClient() {
  const [clients, setClients] = useState<Client[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const load = useCallback(() => {
    void fetch("/api/admin/clients", { cache: "no-store" }).then(
      async (response) => {
        const body = await response.json();
        setLoading(false);
        if (!response.ok)
          return setMessage(body.error || "Could not load clients.");
        setClients(body.clients || []);
        setOrders(body.orders || []);
      },
    );
  }, []);
  useEffect(load, [load]);

  const ordersByClient = useMemo(() => {
    const map = new Map<string, Order[]>();
    orders.forEach((order) => {
      if (!order.client_profile_id) return;
      map.set(order.client_profile_id, [
        ...(map.get(order.client_profile_id) || []),
        order,
      ]);
    });
    return map;
  }, [orders]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return clients.filter((client) => {
      const matchesType = type === "all" || client.customer_type === type;
      const matchesQuery =
        !needle ||
        [
          client.full_name,
          client.email,
          client.phone,
          client.area,
          client.city,
          client.address,
          ...client.tags,
        ].some((value) => value?.toLowerCase().includes(needle));
      return matchesType && matchesQuery;
    });
  }, [clients, query, type]);

  const totalRevenue = orders
    .filter(
      (order) => order.payment_received_at || order.status === "completed",
    )
    .reduce((sum, order) => sum + Number(order.total || 0), 0);
  const repeatClients = clients.filter(
    (client) => (ordersByClient.get(client.id)?.length || 0) > 1,
  ).length;
  const selected = clients.find((client) => client.id === selectedId) || null;
  const selectedOrders = selected ? ordersByClient.get(selected.id) || [] : [];
  const selectedStats = clientStats(selectedOrders);

  function open(client: Client) {
    setSelectedId(client.id);
    setDraft({ ...client, tags: [...client.tags] });
    setMessage("");
  }

  async function save() {
    if (!draft) return;
    setSaving(true);
    setMessage("");
    const response = await fetch(`/api/admin/clients/${draft.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: draft.full_name,
        email: draft.email,
        phone: draft.phone,
        alternate_phone: draft.alternate_phone,
        address: draft.address,
        apartment: draft.apartment,
        city: draft.city,
        area: draft.area,
        postal_code: draft.postal_code,
        customer_type: draft.customer_type,
        preferred_contact_method: draft.preferred_contact_method,
        marketing_source: draft.marketing_source,
        access_notes: draft.access_notes,
        private_notes: draft.private_notes,
        tags: draft.tags,
        do_not_contact: draft.do_not_contact,
      }),
    });
    const body = await response.json();
    setSaving(false);
    if (!response.ok) return setMessage(body.error || "Could not save client.");
    setClients((current) =>
      current.map((client) =>
        client.id === body.client.id ? body.client : client,
      ),
    );
    setDraft(body.client);
    setMessage("Client profile saved in the Spanish CRM database.");
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f4f0] p-3 pb-10 text-[#111] sm:p-6">
      <div className="mx-auto max-w-7xl space-y-5">
        <AdminNav />
        <header className="relative overflow-hidden rounded-[2rem] bg-black p-6 text-white shadow-xl sm:p-9">
          <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-black uppercase tracking-[.14em] text-black">
                <ShieldCheck className="h-4 w-4" /> Private customer records
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Clients database
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                One customer profile across every quote and completed job, with
                private notes, preferences and complete order history.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Metric label="Clients" value={String(clients.length)} />
              <Metric label="Repeat" value={String(repeatClients)} accent />
              <Metric label="Revenue" value={`$${Math.round(totalRevenue)}`} />
            </div>
          </div>
        </header>

        {message ? (
          <div className="rounded-2xl border border-yellow-300 bg-yellow-50 p-4 text-sm font-bold">
            {message}
          </div>
        ) : null}

        <section className="rounded-[2rem] border border-black/5 bg-white p-4 shadow-sm sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex min-h-14 flex-1 items-center gap-3 rounded-2xl border border-black/10 bg-[#fafaf7] px-4 focus-within:border-yellow-400">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search customer, phone, email, area or tag"
                className="w-full bg-transparent text-sm outline-none"
              />
            </label>
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="min-h-14 rounded-2xl border border-black/10 bg-white px-4 text-sm font-bold"
            >
              <option value="all">All customer types</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="property_manager">Property manager</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            {loading ? (
              <p className="col-span-full p-10 text-center text-gray-500">
                Loading client database…
              </p>
            ) : (
              filtered.map((client) => {
                const clientOrders = ordersByClient.get(client.id) || [];
                const spent = clientOrders.reduce(
                  (sum, order) =>
                    sum +
                    (order.payment_received_at || order.status === "completed"
                      ? Number(order.total || 0)
                      : 0),
                  0,
                );
                return (
                  <button
                    key={client.id}
                    type="button"
                    onClick={() => open(client)}
                    className="group min-w-0 rounded-3xl border border-black/8 bg-[#fbfbf8] p-5 text-left transition hover:border-yellow-400 hover:shadow-md"
                  >
                    <div className="flex min-w-0 items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black font-black text-yellow-400">
                          {client.full_name.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <h2 className="truncate text-lg font-black">
                            {client.full_name || "Unnamed client"}
                          </h2>
                          <p className="truncate text-sm text-gray-500">
                            {client.email ||
                              client.phone ||
                              "No contact recorded"}
                          </p>
                        </div>
                      </div>
                      <PencilLine className="h-5 w-5 shrink-0 text-gray-300 group-hover:text-yellow-600" />
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <SmallStat
                        label="Orders"
                        value={String(clientOrders.length)}
                      />
                      <SmallStat
                        label="Spent EUR"
                        value={`$${spent.toFixed(0)}`}
                      />
                      <SmallStat
                        label="Type"
                        value={client.customer_type.replace("_", " ")}
                      />
                    </div>
                    <div className="mt-4 flex min-w-0 items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span className="truncate">
                        {[client.area, client.city]
                          .filter(Boolean)
                          .join(", ") || "No location"}
                      </span>
                    </div>
                  </button>
                );
              })
            )}
            {!loading && !filtered.length ? (
              <p className="col-span-full p-10 text-center text-gray-500">
                No clients match this view.
              </p>
            ) : null}
          </div>
        </section>
      </div>

      {selected && draft ? (
        <div className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-sm">
          <section
            className="h-full w-full max-w-3xl overflow-y-auto bg-[#f4f4f0] p-4 shadow-2xl sm:p-7"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[.15em] text-yellow-700">
                  Customer profile
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  {selected.full_name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedId(null);
                  setDraft(null);
                }}
                className="rounded-2xl border bg-white p-3"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <SmallStat label="Orders" value={String(selectedOrders.length)} />
              <SmallStat
                label="Spent EUR"
                value={`$${selectedStats.spent.toFixed(2)}`}
              />
              <SmallStat
                label="Booked value"
                value={`$${selectedStats.booked.toFixed(2)}`}
              />
              <SmallStat
                label="Average job"
                value={`$${selectedStats.average.toFixed(2)}`}
              />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
              <SmallStat
                label="First visit"
                value={formatDate(selectedStats.firstVisit)}
              />
              <SmallStat
                label="Last visit"
                value={formatDate(selectedStats.lastVisit)}
              />
              <SmallStat
                label="Completed"
                value={String(selectedStats.completed)}
              />
              <SmallStat
                label="Upcoming"
                value={String(selectedStats.upcoming)}
              />
              <SmallStat
                label="Cancelled"
                value={String(selectedStats.cancelled)}
              />
            </div>

            <div className="mt-5 grid gap-4 rounded-[2rem] bg-black p-5 text-white sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.15em] text-yellow-400">
                  Most requested services
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedStats.topServices.length ? (
                    selectedStats.topServices.map(([service, count]) => (
                      <span
                        key={service}
                        className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold"
                      >
                        {service} · {count}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-white/50">
                      No service history yet
                    </span>
                  )}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.15em] text-yellow-400">
                  Customer relationship
                </p>
                <p className="mt-3 text-lg font-black">
                  {selectedOrders.length > 1
                    ? "Repeat customer"
                    : "First-time customer"}
                </p>
                <p className="mt-1 text-sm text-white/55">
                  Active since {formatDate(selectedStats.firstContact)} ·
                  preferred contact: {selected.preferred_contact_method}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-[2rem] bg-white p-5 shadow-sm">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <ContactRound className="h-5 w-5 text-yellow-600" /> Contact &
                property
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="Full name">
                  <input
                    value={draft.full_name}
                    onChange={(e) =>
                      setDraft({ ...draft, full_name: e.target.value })
                    }
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    value={draft.email}
                    onChange={(e) =>
                      setDraft({ ...draft, email: e.target.value })
                    }
                  />
                </Field>
                <Field label="Primary phone">
                  <input
                    value={draft.phone}
                    onChange={(e) =>
                      setDraft({ ...draft, phone: e.target.value })
                    }
                  />
                </Field>
                <Field label="Alternate phone">
                  <input
                    value={draft.alternate_phone}
                    onChange={(e) =>
                      setDraft({ ...draft, alternate_phone: e.target.value })
                    }
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Address">
                    <input
                      value={draft.address}
                      onChange={(e) =>
                        setDraft({ ...draft, address: e.target.value })
                      }
                    />
                  </Field>
                </div>
                <Field label="Unit / apartment">
                  <input
                    value={draft.apartment}
                    onChange={(e) =>
                      setDraft({ ...draft, apartment: e.target.value })
                    }
                  />
                </Field>
                <Field label="Postal code">
                  <input
                    value={draft.postal_code}
                    onChange={(e) =>
                      setDraft({ ...draft, postal_code: e.target.value })
                    }
                  />
                </Field>
                <Field label="City">
                  <input
                    value={draft.city}
                    onChange={(e) =>
                      setDraft({ ...draft, city: e.target.value })
                    }
                  />
                </Field>
                <Field label="Area">
                  <input
                    value={draft.area}
                    onChange={(e) =>
                      setDraft({ ...draft, area: e.target.value })
                    }
                  />
                </Field>
              </div>
            </div>

            <div className="mt-5 rounded-[2rem] bg-white p-5 shadow-sm">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <BriefcaseBusiness className="h-5 w-5 text-yellow-600" /> CRM
                information
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="Customer type">
                  <select
                    value={draft.customer_type}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        customer_type: e.target
                          .value as Client["customer_type"],
                      })
                    }
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="property_manager">Property manager</option>
                    <option value="other">Other</option>
                  </select>
                </Field>
                <Field label="Preferred contact">
                  <select
                    value={draft.preferred_contact_method}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        preferred_contact_method: e.target
                          .value as Client["preferred_contact_method"],
                      })
                    }
                  >
                    <option value="whatsapp">WhatsApp</option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="sms">SMS</option>
                  </select>
                </Field>
                <Field label="Marketing source">
                  <input
                    value={draft.marketing_source}
                    onChange={(e) =>
                      setDraft({ ...draft, marketing_source: e.target.value })
                    }
                    placeholder="Google Ads, organic, referral…"
                  />
                </Field>
                <Field label="Tags">
                  <input
                    value={draft.tags.join(", ")}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        tags: e.target.value
                          .split(",")
                          .map((tag) => tag.trim())
                          .filter(Boolean),
                      })
                    }
                    placeholder="VIP, condo, repeat"
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Property access notes">
                    <textarea
                      value={draft.access_notes}
                      onChange={(e) =>
                        setDraft({ ...draft, access_notes: e.target.value })
                      }
                      placeholder="Parking, concierge, buzzer, loading dock…"
                    />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Private customer notes">
                    <textarea
                      value={draft.private_notes}
                      onChange={(e) =>
                        setDraft({ ...draft, private_notes: e.target.value })
                      }
                      placeholder="Preferences, follow-up, pricing context…"
                    />
                  </Field>
                </div>
              </div>
              <label className="mt-4 flex items-center gap-3 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-800">
                <input
                  type="checkbox"
                  checked={draft.do_not_contact}
                  onChange={(e) =>
                    setDraft({ ...draft, do_not_contact: e.target.checked })
                  }
                  className="h-5 w-5"
                />{" "}
                Do not contact this customer for marketing
              </label>
              <button
                type="button"
                disabled={saving}
                onClick={() => void save()}
                className="mt-5 min-h-14 w-full rounded-2xl bg-yellow-400 px-5 font-black shadow-lg disabled:opacity-50"
              >
                {saving ? "Saving client…" : "Save client profile"}
              </button>
            </div>

            <div className="mt-5 rounded-[2rem] bg-white p-5 shadow-sm">
              <h3 className="flex items-center gap-2 text-xl font-black">
                <ShoppingBag className="h-5 w-5 text-yellow-600" /> Complete
                order history
              </h3>
              <div className="mt-4 space-y-3">
                {selectedOrders.map((order) => (
                  <div
                    key={order.id}
                    className="grid gap-3 rounded-2xl bg-[#f5f5f1] p-4 sm:grid-cols-[1fr_auto] sm:items-center"
                  >
                    <div>
                      <p className="font-black">
                        TVG-ES-{String(order.order_number).padStart(5, "0")} ·{" "}
                        {order.category}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {new Date(order.scheduled_at).toLocaleString("en-IE", {
                          timeZone: "Europe/Madrid",
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}{" "}
                        · {order.status}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-lg font-black">
                        C${Number(order.total).toFixed(2)}
                      </p>
                      <p
                        className={`mt-1 text-xs font-black uppercase ${order.payment_received_at ? "text-emerald-700" : "text-gray-400"}`}
                      >
                        {order.payment_received_at
                          ? `Paid · ${friendlyPayment(order.payment_method)}`
                          : order.status === "completed"
                            ? "Completed · payment not recorded"
                            : "Not paid"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {!selectedOrders.length ? (
                <p className="mt-4 text-sm text-gray-500">
                  No linked orders yet.
                </p>
              ) : null}
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}

function Metric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`min-w-20 rounded-2xl px-3 py-3 text-center ${accent ? "bg-yellow-400 text-black" : "bg-white/10"}`}
    >
      <p className="text-lg font-black sm:text-xl">{value}</p>
      <p
        className={`text-[9px] font-black uppercase tracking-wider ${accent ? "text-black/60" : "text-white/50"}`}
      >
        {label}
      </p>
    </div>
  );
}
function SmallStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-2xl bg-[#f5f5f1] p-3">
      <p className="truncate text-[9px] font-black uppercase tracking-wider text-gray-400">
        {label}
      </p>
      <p className="mt-1 truncate text-sm font-black sm:text-base">{value}</p>
    </div>
  );
}
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-xs font-black uppercase tracking-wider text-gray-500">
      {label}
      <div className="mt-2 [&_input]:min-h-13 [&_input]:w-full [&_input]:rounded-2xl [&_input]:border [&_input]:border-black/10 [&_input]:px-4 [&_input]:text-sm [&_input]:font-medium [&_input]:text-black [&_select]:min-h-13 [&_select]:w-full [&_select]:rounded-2xl [&_select]:border [&_select]:border-black/10 [&_select]:bg-white [&_select]:px-4 [&_select]:text-sm [&_select]:text-black [&_textarea]:min-h-28 [&_textarea]:w-full [&_textarea]:rounded-2xl [&_textarea]:border [&_textarea]:border-black/10 [&_textarea]:p-4 [&_textarea]:text-sm [&_textarea]:font-medium [&_textarea]:normal-case [&_textarea]:text-black [&_textarea]:tracking-normal">
        {children}
      </div>
    </label>
  );
}

function clientStats(orders: Order[]) {
  const now = Date.now();
  const completedOrders = orders.filter(
    (order) => order.payment_received_at || order.status === "completed",
  );
  const bookedOrders = orders.filter((order) => order.status !== "cancelled");
  const serviceCounts = new Map<string, number>();
  orders.forEach((order) => {
    const services = order.services?.length
      ? order.services
      : [{ label: order.category, qty: 1 }];
    services.forEach((service) => {
      const label = service.label || order.category || "Other service";
      serviceCounts.set(
        label,
        (serviceCounts.get(label) || 0) + Number(service.qty || 1),
      );
    });
  });
  const scheduledTimes = orders
    .map((order) => new Date(order.scheduled_at).getTime())
    .filter(Number.isFinite)
    .sort((a, b) => a - b);
  const createdTimes = orders
    .map((order) => new Date(order.created_at).getTime())
    .filter(Number.isFinite)
    .sort((a, b) => a - b);
  const spent = completedOrders.reduce(
    (sum, order) => sum + Number(order.total || 0),
    0,
  );
  return {
    spent,
    booked: bookedOrders.reduce(
      (sum, order) => sum + Number(order.total || 0),
      0,
    ),
    average: completedOrders.length ? spent / completedOrders.length : 0,
    completed: orders.filter((order) => order.status === "completed").length,
    cancelled: orders.filter((order) => order.status === "cancelled").length,
    upcoming: orders.filter(
      (order) =>
        order.status !== "completed" &&
        order.status !== "cancelled" &&
        new Date(order.scheduled_at).getTime() >= now,
    ).length,
    firstVisit: scheduledTimes[0],
    lastVisit: scheduledTimes.at(-1),
    firstContact: createdTimes[0],
    topServices: [...serviceCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5),
  };
}

function formatDate(value?: number) {
  return value ? new Date(value).toLocaleDateString("en-IE") : "—";
}

function friendlyPayment(value?: string | null) {
  if (value === "e_transfer") return "Bank transfer / Bizum";
  if (value === "cash") return "Cash";
  if (value === "other") return "Other";
  return "Recorded";
}
