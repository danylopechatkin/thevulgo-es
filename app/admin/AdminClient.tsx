
"use client";

import AdminNav from "./components/AdminNav";
import OrdersCalendar from "./components/OrdersCalendar";
import OrderPaymentPanel from "./components/OrderPaymentPanel";
import {
  ActivityBars,
  CrmHero,
  CrmMetric,
  CrmPanel,
  EmptyCrm,
  MiniBars,
} from "./components/CrmVisuals";
import { getSupabaseBrowser } from "@/lib/supabase-browser";
import { torontoLocalToUtc } from "@/lib/time";
import {
  calculateTravelDeposit,
  categoryKeys,
  CATEGORY_MAP,
} from "@/lib/estimate";
import { getCatalogServices } from "@/lib/serviceCatalog";
import { findCatalogService } from "@/lib/serviceCatalog";
import { strFromU8, unzipSync } from "fflate";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  CalendarClock,
  Plus,
  RotateCcw,
  Sparkles,
  Upload,
  UserRound,
  WandSparkles,
  Wrench,
  X,
} from "lucide-react";

type Status = "new" | "confirmed" | "in_progress" | "completed" | "done" | "cancelled";
type Service = {
  id?: string;
  label: string;
  price: number;
  qty: number;
  subtotal: number;
};
type Order = {
  id: string;
  order_number: number;
  full_name: string;
  phone: string;
  email: string;
  city: string;
  area: string;
  postal_code: string;
  address: string;
  apartment: string;
  address_details: string;
  preferred_date: string;
  preferred_time: string;
  scheduled_at: string;
  timezone: string;
  category: string;
  services: Service[];
  notes: string;
  internal_notes: string;
  subtotal: number;
  tax: number;
  tax_rate: number;
  total: number;
  deposit_required: boolean;
  deposit_amount: number;
  first_response_at: string | null;
  quote_sent_at: string | null;
  payment_method: "paypal" | "e_transfer" | "cash" | "other" | null;
  payment_received_at: string | null;
  payment_status?: string | null;
  payment_provider?: string | null;
  paid_amount?: number | null;
  material_cost: number;
  travel_minutes: number | null;
  travel_distance_km: number | null;
  review_status: "not_requested" | "requested" | "received" | "declined";
  review_rating: number | null;
  status: Status;
  currency: "EUR";
  created_at: string;
  admin_email_status: string;
  customer_email_status: string;
  customer_email_delivery_status?: string | null;
  customer_email_last_event_at?: string | null;
  customer_email_delivered_at?: string | null;
  customer_email_opened_at?: string | null;
  customer_email_bounced_at?: string | null;
  customer_email_delivery_error?: string | null;
  completed_email_status: string;
  completed_email_delivery_status?: string | null;
  completed_email_last_event_at?: string | null;
  completed_email_delivery_error?: string | null;
  referral_code: string | null;
  completed_at: string | null;
};
type OrderHistory = {
  id: string;
  changed_at: string;
  change_type: "created" | "updated" | "deleted";
  previous_data: Record<string, unknown> | null;
  new_data: Record<string, unknown> | null;
};
type Worker = { user_id: string; full_name: string; email: string; primary_city?: string; service_cities?: string[] };
type WorkerJobPhoto = {
  id: string;
  photoType: "before" | "after" | "issue";
  uploadedAt: string;
  url: string | null;
};
type WorkerAssignment = {
  id: string;
  order_id: string;
  worker_id: string;
  access_token: string;
  status: string;
  response_status: "pending" | "accepted" | "declined";
  worker_share: number;
  assigned_at: string;
  email_link_viewed_at?: string | null;
  accepted_at?: string | null;
  declined_at?: string | null;
  decline_reason?: string | null;
  worker_email_status?: string | null;
  worker_email_delivery_status?: string | null;
  worker_notified_at?: string | null;
  worker_email_last_event_at?: string | null;
  worker_email_delivered_at?: string | null;
  worker_email_opened_at?: string | null;
  worker_email_error?: string | null;
  response_email_kind?: "accepted" | "declined" | null;
  response_email_status?: string | null;
  response_email_sent_at?: string | null;
  response_email_last_event_at?: string | null;
  response_email_delivered_at?: string | null;
  response_email_opened_at?: string | null;
  response_email_error?: string | null;
  access_revoked_at?: string | null;
  worker_profiles:
    | { full_name: string; email: string }
    | Array<{ full_name: string; email: string }>
    | null;
};
type ManualService = { id: string; label: string; price: number; qty: number };

const money = (value: number) =>
  new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(
    Number(value || 0),
  );
const statusLabel: Record<Status, string> = {
  new: "New",
  confirmed: "Confirmed",
  in_progress: "In progress",
  completed: "Completed",
  done: "Completed (legacy)",
  cancelled: "Cancelled",
};
const compactAppointment = (order: Order) => {
  const date = order.preferred_date
    ? new Date(`${order.preferred_date}T12:00:00`).toLocaleDateString("en-IE", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Date not set";
  return order.preferred_time
    ? `${date} · ${order.preferred_time.slice(0, 5)}`
    : date;
};

const deliveryLabel: Record<string, string> = {
  sent: "Accepted by Resend",
  delivered: "Delivered to the customer's mail server",
  opened: "Opened by the customer (tracking signal)",
  clicked: "Customer clicked a link",
  delivery_delayed: "Delivery delayed by the receiving server",
  bounced: "Bounced — not delivered",
  failed: "Delivery failed",
  suppressed: "Suppressed by Resend",
  complained: "Customer marked the email as spam",
};

export default function AdminClient() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [assignments, setAssignments] = useState<WorkerAssignment[]>([]);
  const [selected, setSelected] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [query, setQuery] = useState("");
  const [showManual, setShowManual] = useState(false);
  const [saving, setSaving] = useState(false);
  const [manual, setManual] = useState({
    full_name: "",
    phone: "",
    email: "",
    city: "Valencia",
    area: "",
    address: "",
    apartment: "",
    preferred_date: "",
    preferred_time: "09:00",
    category: "Repairs",
    notes: "",
  });
  const [manualServices, setManualServices] = useState<ManualService[]>(() => {
    const first = getCatalogServices("Repairs")[0];
    return first
      ? [{ id: first.id, label: first.label, price: first.price, qty: 1 }]
      : [];
  });
  const [referenceNow] = useState(() => Date.now());
  const [recoveringOrder, setRecoveringOrder] = useState(false);

  async function recoverDeletedOrder() {
    const raw = window.prompt(
      "Enter the deleted order number (for example 10004):",
    );
    if (!raw) return;
    const orderNumber = Number(raw.replace(/\D/g, ""));
    if (!Number.isInteger(orderNumber)) {
      setError("Enter a valid numeric order number.");
      return;
    }
    setRecoveringOrder(true);
    setError("");
    setNotice("");
    const response = await fetch("/api/admin/orders/recover", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderNumber }),
    });
    const body = await response.json();
    setRecoveringOrder(false);
    if (!response.ok) {
      setError(body.error || "Could not restore the deleted order.");
      return;
    }
    setNotice(
      `Order TVG-ES-${String(body.order.order_number).padStart(5, "0")} was restored from its audit snapshot. No email was sent.`,
    );
    await loadOrders();
  }

  async function loadOrders() {
    setLoading(true);
    const response = await fetch("/api/admin/orders", { cache: "no-store" });
    const body = await response.json();
    if (!response.ok) setError(body.error || "Could not load orders.");
    else setOrders((body.orders || []) as Order[]);
    setLoading(false);
  }
  const loadAssignments = async () => {
    const response = await fetch("/api/admin/assignments", {
      cache: "no-store",
    });
    const body = await response.json();
    if (!response.ok) {
      setError(body.error || "Could not load contractor assignments.");
      return;
    }
    setAssignments(body.assignments || []);
  };
  useEffect(() => {
    void fetch("/api/admin/orders", { cache: "no-store" })
      .then(async (response) => {
        const body = await response.json();
        if (!response.ok)
          throw new Error(body.error || "Could not load orders.");
        setOrders((body.orders || []) as Order[]);
      })
      .catch((cause) =>
        setError(
          cause instanceof Error ? cause.message : "Could not load orders.",
        ),
      )
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    void fetch("/api/admin/assignments", { cache: "no-store" })
      .then(async (response) => {
        const body = await response.json();
        if (!response.ok)
          throw new Error(body.error || "Could not load assignments.");
        setAssignments(body.assignments || []);
      })
      .catch((cause) =>
        setError(
          cause instanceof Error
            ? cause.message
            : "Could not load assignments.",
        ),
      );
  }, []);
  useEffect(() => {
    void fetch("/api/admin/workers", { cache: "no-store" })
      .then(async (response) => {
        const body = await response.json();
        if (!response.ok)
          throw new Error(body.error || "Could not load active workers.");
        setWorkers(
          ((body.workers || []) as (Worker & { contractor_status?: string })[])
            .filter((worker) => worker.contractor_status === "active")
            .sort((a, b) => a.full_name.localeCompare(b.full_name)),
        );
      })
      .catch((cause) =>
        setError(
          cause instanceof Error
            ? cause.message
            : "Could not load active workers.",
        ),
      );
  }, []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return orders.filter(
      (order) =>
        !term ||
        [
          order.full_name,
          order.phone,
          order.email,
          order.city,
          order.area,
          order.category,
          String(order.order_number),
        ]
          .join(" ")
          .toLowerCase()
          .includes(term),
    );
  }, [orders, query]);
  const metrics = useMemo(
    () => ({
      booked: orders.filter((order) => !["cancelled"].includes(order.status))
        .length,
      completed: orders.filter((order) => ["completed", "done"].includes(order.status)).length,
      revenue: orders
        .filter((order) => ["completed", "done"].includes(order.status))
        .reduce((sum, order) => sum + Number(order.total), 0),
      upcoming: orders.filter(
        (order) =>
          new Date(order.scheduled_at).getTime() > referenceNow &&
          !["cancelled", "completed", "done"].includes(order.status),
      ).length,
    }),
    [orders, referenceNow],
  );
  const clients = useMemo(
    () =>
      new Set(
        orders.map(
          (order) =>
            order.phone.replace(/\D/g, "") || order.email.toLowerCase(),
        ),
      ).size,
    [orders],
  );
  const orderActivity = useMemo(
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
          value: orders.filter((order) => order.created_at.slice(0, 10) === key)
            .length,
        };
      }),
    [orders],
  );
  const categoryDemand = useMemo(
    () =>
      Object.entries(
        orders.reduce<Record<string, number>>((total, order) => {
          total[order.category || "Uncategorised"] =
            (total[order.category || "Uncategorised"] || 0) + 1;
          return total;
        }, {}),
      )
        .map(([label, value]) => ({ label, value }))
        .sort((a, b) => b.value - a.value),
    [orders],
  );

  async function updateOrder(id: string, updates: Partial<Order>) {
    setSaving(true);
    setError("");
    const { data, error: updateError } = await getSupabaseBrowser()
      .from("orders")
      .update(updates)
      .eq("id", id)
      .select("*")
      .single();
    setSaving(false);
    if (updateError) {
      setError(updateError.message);
      return false;
    }
    const fresh = data as Order;
    setOrders((current) =>
      current.map((item) => (item.id === id ? fresh : item)),
    );
    setSelected(fresh);
    return true;
  }

  async function completeOrder() {
    if (
      !selected ||
      !confirm(
        `Complete TVG-ES-${String(selected.order_number).padStart(5, "0")} and send the final email${selected.email ? ` to ${selected.email}` : ""}?`,
      )
    )
      return;
    setSaving(true);
    setError("");
    const response = await fetch("/api/orders/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId: selected.id }),
    });
    const result = await response.json();
    setSaving(false);
    if (!response.ok || !result.success) {
      setError(result.error || "Could not complete order");
      return;
    }
    await loadOrders();
    setSelected((current) =>
      current
        ? {
            ...current,
            status: "completed",
            completed_at: new Date().toISOString(),
            completed_email_status: current.email
              ? result.emailWarning
                ? "failed"
                : "sent"
              : "not_required",
          }
        : current,
    );
  }

  async function deleteOrder(order: Order) {
    setSaving(true);
    setError("");
    const { error: deleteError } = await getSupabaseBrowser()
      .from("orders")
      .delete()
      .eq("id", order.id);
    setSaving(false);
    if (deleteError) {
      setError(deleteError.message);
      return;
    }
    setOrders((current) => current.filter((item) => item.id !== order.id));
    setSelected(null);
  }

  async function createManualOrder(event: React.FormEvent) {
    event.preventDefault();
    if (
      !manual.full_name ||
      !manual.phone ||
      !manual.area ||
      !manual.address ||
      !manual.preferred_date
    ) {
      setError(
        "Name, phone, area, address and appointment are required.",
      );
      return;
    }
    const services = manualServices
      .filter(
        (service) => service.label && service.price > 0 && service.qty > 0,
      )
      .map((service) => ({
        ...service,
        subtotal: Number((service.price * service.qty).toFixed(2)),
      }));
    if (!services.length) {
      setError("Add at least one priced service.");
      return;
    }
    setSaving(true);
    setError("");
    setNotice("");
    const hasCustomerEmail = Boolean(manual.email.trim());
    const response = await fetch("/api/admin/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...manual, services }),
    });
    const result = await response.json();
    setSaving(false);
    if (!response.ok) {
      setError(result.error || "Could not create manual order");
      return;
    }
    setNotice(
      !hasCustomerEmail
        ? "Order created. Add a customer email in the order details to send confirmation."
        : result.emailWarning
          ? "Order created, but confirmation delivery failed. Open the order and use Send confirmation to retry."
          : "Order created. The customer confirmation and business notification were sent.",
    );
    setShowManual(false);
    setManual({
      full_name: "",
      phone: "",
      email: "",
      city: "Valencia",
      area: "",
      address: "",
      apartment: "",
      preferred_date: "",
      preferred_time: "09:00",
      category: "Repairs",
      notes: "",
    });
    await loadOrders();
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f4f0] p-3 pb-[max(1rem,env(safe-area-inset-bottom))] text-black sm:p-6">
      <div className="mx-auto max-w-7xl space-y-5">
        <div>
          <AdminNav />
        </div>
        <CrmHero
          eyebrow="Spain operations operations"
          title="Orders command centre"
          description="Schedule jobs, control revenue, assign contractors and keep every customer record in one operating view."
          action={
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={recoverDeletedOrder}
                disabled={recoveringOrder}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-5 py-3.5 font-black text-white disabled:opacity-50"
              >
                <RotateCcw className="h-4 w-4" />
                {recoveringOrder ? "Restoring…" : "Restore deleted order"}
              </button>
              <button
                onClick={() => setShowManual(true)}
                className="rounded-2xl bg-yellow-400 px-5 py-3.5 font-black text-black shadow-lg"
              >
                + New manual order
              </button>
            </div>
          }
        />
        {error ? (
          <p className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">
            {error}
          </p>
        ) : null}
        {notice ? (
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-800">
            {notice}
          </p>
        ) : null}
        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <CrmMetric
            label="Upcoming"
            value={metrics.upcoming}
            note="Future active appointments"
            accent
          />
          <CrmMetric
            label="Booked"
            value={metrics.booked}
            note={`${clients} customer profiles`}
          />
          <CrmMetric
            label="Completed"
            value={metrics.completed}
            note="Finished jobs"
          />
          <CrmMetric
            label="Completed revenue"
            value={money(metrics.revenue)}
            note="Recorded gross EUR"
          />
        </section>
        <section className="grid gap-5 lg:grid-cols-[1.4fr_.8fr]">
          <CrmPanel
            title="Order demand"
            subtitle="New orders over the last 14 days"
          >
            <ActivityBars values={orderActivity} />
          </CrmPanel>
          <CrmPanel
            title="Services booked"
            subtitle="Current demand by category"
          >
            <MiniBars items={categoryDemand} />
          </CrmPanel>
        </section>
        <OrdersCalendar
          orders={orders}
          onOpenOrder={(order) => setSelected(order as Order)}
        />
        <section className="rounded-[1.75rem] border border-black/5 bg-white p-4 shadow-sm sm:rounded-[2rem] sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-black">All orders</h2>
              <p className="text-sm text-gray-600">
                {clients} client profile{clients === 1 ? "" : "s"} built from
                order history. Tap an order to open its full details.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search customer, area, order…"
              className="w-full rounded-xl border border-gray-300 px-3 py-2 sm:w-72"
            />
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200">
            {loading ? (
              <p className="p-4 text-sm text-gray-600">Loading…</p>
            ) : filtered.length ? (
              <div>
                {filtered.map((order) => (
                  <button
                    key={order.id}
                    type="button"
                    onClick={() => setSelected(order)}
                    aria-label={`Open order TVG-ES-${String(order.order_number).padStart(5, "0")}`}
                    className="grid w-full grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)_auto] items-center gap-2 border-b border-gray-200 px-3 py-4 text-left last:border-b-0 hover:bg-yellow-50 focus:bg-yellow-50 focus:outline-none"
                  >
                    <span className="min-w-0 truncate font-extrabold text-sm sm:text-base">
                      TVG-ES-{String(order.order_number).padStart(5, "0")}
                    </span>
                    <span className="min-w-0 truncate text-xs text-gray-600 sm:text-sm">
                      {compactAppointment(order)}
                    </span>
                    <span className="whitespace-nowrap text-sm font-black sm:text-base">
                      {money(order.total)}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4">
                <EmptyCrm
                  title="No matching orders"
                  text="Try another search or create a new manual order."
                />
              </div>
            )}
          </div>
        </section>
        {selected ? (
          <OrderPanel
            key={selected.id}
            order={selected}
            saving={saving}
            workers={workers}
            assignments={assignments.filter(
              (assignment) => assignment.order_id === selected.id,
            )}
            onAssignmentChanged={loadAssignments}
            onClose={() => setSelected(null)}
            onUpdate={updateOrder}
            onComplete={completeOrder}
            onDelete={deleteOrder}
          />
        ) : null}
        {showManual ? (
          <ManualOrderForm
            manual={manual}
            services={manualServices}
            saving={saving}
            onChange={(updates) => {
              setManual((current) => ({ ...current, ...updates }));
              if (updates.category) {
                const first = getCatalogServices(updates.category)[0];
                setManualServices(
                  first
                    ? [
                        {
                          id: first.id,
                          label: first.label,
                          price: first.price,
                          qty: 1,
                        },
                      ]
                    : [],
                );
              }
            }}
            onServices={setManualServices}
            onClose={() => setShowManual(false)}
            onSubmit={createManualOrder}
          />
        ) : null}
      </div>
    </main>
  );
}

function OrderPanel({
  order,
  saving,
  onClose,
  onUpdate,
  onComplete,
  onDelete,
  workers,
  assignments,
  onAssignmentChanged,
}: {
  order: Order;
  saving: boolean;
  onClose: () => void;
  onUpdate: (id: string, updates: Partial<Order>) => Promise<boolean>;
  onComplete: () => Promise<void>;
  onDelete: (order: Order) => Promise<void>;
  workers: Worker[];
  assignments: WorkerAssignment[];
  onAssignmentChanged: () => Promise<void>;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Order>({
    ...order,
    services: order.services.map((service) => ({ ...service })),
  });
  const [history, setHistory] = useState<OrderHistory[]>([]);
  const [historyError, setHistoryError] = useState("");
  const [jobPhotos, setJobPhotos] = useState<WorkerJobPhoto[]>([]);
  const [photoError, setPhotoError] = useState("");
  const [loadingPhotos, setLoadingPhotos] = useState(false);
  const [notes, setNotes] = useState(order.internal_notes || "");
  const [date, setDate] = useState(order.preferred_date);
  const [time, setTime] = useState(order.preferred_time?.slice(0, 5));
  const [status, setStatus] = useState<Status>(order.status);
  const [transit, setTransit] = useState("");
  const [workerId, setWorkerId] = useState("");
  const [assignmentMessage, setAssignmentMessage] = useState("");
  const [customerEmailStatus, setCustomerEmailStatus] = useState(
    order.customer_email_status,
  );
  const [customerDeliveryStatus, setCustomerDeliveryStatus] = useState(
    order.customer_email_delivery_status || null,
  );
  const [customerDeliveryEventAt, setCustomerDeliveryEventAt] = useState(
    order.customer_email_last_event_at || null,
  );
  const [customerDeliveryError, setCustomerDeliveryError] = useState(
    order.customer_email_delivery_error || null,
  );
  const [sendingConfirmation, setSendingConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [completedDeliveryStatus, setCompletedDeliveryStatus] = useState(
    order.completed_email_delivery_status || null,
  );
  const [completedDeliveryMessage, setCompletedDeliveryMessage] = useState("");
  const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(
    null,
  );
  const currentAssignment = assignments.find(
    (assignment) =>
      !assignment.access_revoked_at &&
      assignment.response_status !== "declined",
  );
  const latestAssignment = assignments[0];
  const setDraftField = <K extends keyof Order>(key: K, value: Order[K]) =>
    setDraft((current) => ({ ...current, [key]: value }));

  const loadHistory = async () => {
    setHistoryError("");
    const response = await fetch(`/api/admin/orders/${order.id}/history`, {
      cache: "no-store",
    });
    const body = await response.json();
    if (!response.ok)
      setHistoryError(body.error || "Could not load order history.");
    else setHistory((body.history || []) as OrderHistory[]);
  };

  const loadJobPhotos = useCallback(async (assignmentId?: string) => {
    if (!assignmentId) {
      setJobPhotos([]);
      return;
    }
    setLoadingPhotos(true);
    setPhotoError("");
    try {
      const response = await fetch(
        `/api/admin/assignments/${assignmentId}/photos`,
        { cache: "no-store" },
      );
      const payload = (await response.json()) as {
        photos?: WorkerJobPhoto[];
        error?: string;
      };
      if (!response.ok)
        throw new Error(payload.error || "Could not load photos");
      setJobPhotos(payload.photos || []);
    } catch (cause) {
      setPhotoError(
        cause instanceof Error ? cause.message : "Could not load job photos",
      );
    } finally {
      setLoadingPhotos(false);
    }
  }, []);

  useEffect(() => {
    void fetch(`/api/admin/orders/${order.id}/history`, {
      cache: "no-store",
    })
      .then(async (response) => {
        const body = await response.json();
        if (!response.ok)
          throw new Error(body.error || "Could not load order history.");
        setHistory((body.history || []) as OrderHistory[]);
      })
      .catch((cause) =>
        setHistoryError(
          cause instanceof Error
            ? cause.message
            : "Could not load order history.",
        ),
      );
  }, [order.id]);

  useEffect(() => {
    const assignmentId = currentAssignment?.id || latestAssignment?.id;
    if (!assignmentId) return;
    void fetch(`/api/admin/assignments/${assignmentId}/photos`, {
      cache: "no-store",
    })
      .then(async (response) => {
        const payload = (await response.json()) as {
          photos?: WorkerJobPhoto[];
          error?: string;
        };
        if (!response.ok)
          throw new Error(payload.error || "Could not load photos");
        setJobPhotos(payload.photos || []);
      })
      .catch((cause: unknown) =>
        setPhotoError(
          cause instanceof Error ? cause.message : "Could not load job photos",
        ),
      );
  }, [currentAssignment?.id, latestAssignment?.id]);

  async function saveAll() {
    const services = draft.services
      .filter(
        (service) =>
          service.label.trim() &&
          Number(service.price) > 0 &&
          Number(service.qty) > 0,
      )
      .map((service) => ({
        ...service,
        price: Number(service.price),
        qty: Number(service.qty),
        subtotal: Number(
          (Number(service.price) * Number(service.qty)).toFixed(2),
        ),
      }));
    if (!services.length) return;
    const subtotal = Number(
      services.reduce((sum, service) => sum + service.subtotal, 0).toFixed(2),
    );
    const tax = Number((subtotal * Number(draft.tax_rate || 0)).toFixed(2));
    const total = Number((subtotal + tax).toFixed(2));
    const deposit = calculateTravelDeposit(total, draft.city);
    await onUpdate(order.id, {
      ...draft,
      services,
      subtotal,
      tax,
      total,
      deposit_required: deposit.required,
      deposit_amount: deposit.amount,
      scheduled_at: torontoLocalToUtc(
        draft.preferred_date,
        draft.preferred_time,
      ),
    });
    setEditing(false);
    await loadHistory();
  }

  async function saveOperationalChanges() {
    await onUpdate(order.id, {
      status,
      preferred_date: date,
      preferred_time: time,
      scheduled_at: torontoLocalToUtc(date, time),
      internal_notes: notes,
    });
    await loadHistory();
  }

  async function completeAndSendFinalEmail() {
    const saved = await onUpdate(order.id, {
      preferred_date: date,
      preferred_time: time,
      scheduled_at: torontoLocalToUtc(date, time),
      internal_notes: notes,
    });
    if (!saved) return;
    await onComplete();
    await loadHistory();
  }
  async function checkTransit() {
    setTransit("Checking transit…");
    const response = await fetch("/api/admin/transit-time", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        useStartAddress: true,
        destination: `${order.address}, ${order.area}, ${order.city}, ${order.postal_code}`,
      }),
    });
    const result = await response.json();
    setTransit(
      response.ok
        ? `${result.durationText} · ${result.mapsUrl}`
        : result.error || "Could not calculate transit",
    );
  }
  async function assignWorker(replaceExisting = false) {
    if (!workerId) return;
    if (
      replaceExisting &&
      !confirm(
        "Change the assigned contractor? The current contractor will immediately lose access and the new contractor will receive a job email.",
      )
    )
      return;
    setAssignmentMessage(
      replaceExisting
        ? "Changing contractor and sending the new assignment email…"
        : "Assigning worker and sending email…",
    );
    const response = await fetch("/api/admin/assignments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: order.id,
        workerId,
        replaceExisting,
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      setAssignmentMessage(result.error || "Could not assign this worker.");
      return;
    }
    if (result.link && navigator.clipboard)
      void navigator.clipboard.writeText(result.link);
    setAssignmentMessage(
      result.emailWarning
        ? `Contractor ${replaceExisting ? "changed" : "assigned"}, but the email could not be delivered: ${result.emailWarning}. The protected link was copied.`
        : replaceExisting
          ? "Contractor changed. The previous access was closed and the new worker was emailed."
          : "Job assigned. The worker was emailed and the protected link was copied.",
    );
    setWorkerId("");
    await onAssignmentChanged();
    await loadHistory();
  }

  async function unassignWorker(assignmentId: string) {
    if (
      !confirm(
        "Unassign this contractor? Their job access will close immediately. The customer order will remain in CRM.",
      )
    )
      return;
    setAssignmentMessage("Removing contractor access…");
    const response = await fetch("/api/admin/assignments", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ assignmentId }),
    });
    const result = await response.json();
    if (!response.ok) {
      setAssignmentMessage(result.error || "Could not unassign contractor.");
      return;
    }
    setWorkerId("");
    setAssignmentMessage(
      result.emailWarning
        ? `Contractor unassigned and access closed, but the notification email failed: ${result.emailWarning}`
        : "Contractor unassigned. Their access is closed, the order remains unchanged and the worker was emailed.",
    );
    await onAssignmentChanged();
    await loadHistory();
  }

  async function resendAssignmentEmail(assignmentId: string) {
    if (
      !confirm(
        "Resend the contractor job email with Accept job / Cannot accept buttons?",
      )
    )
      return;
    setAssignmentMessage("Resending the protected job email…");
    const response = await fetch("/api/admin/assignments", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ assignmentId }),
    });
    const result = await response.json();
    if (!response.ok) {
      setAssignmentMessage(result.error || "The email could not be resent.");
      await onAssignmentChanged();
      await loadHistory();
      return;
    }
    setAssignmentMessage(
      "Assignment email resent with Accept job / Cannot accept buttons.",
    );
    await onAssignmentChanged();
    await loadHistory();
  }

  async function sendConfirmation() {
    if (!order.email) {
      setConfirmationMessage(
        "Add the customer's email address before sending confirmation.",
      );
      return;
    }
    if (
      !confirm(
        `Send the current order details to ${order.email}? Check the price, date, time and address first.`,
      )
    )
      return;
    setSendingConfirmation(true);
    setConfirmationMessage("Sending customer confirmation…");
    const response = await fetch(
      `/api/admin/orders/${order.id}/send-confirmation`,
      { method: "POST" },
    );
    const result = await response.json();
    setSendingConfirmation(false);
    if (!response.ok) {
      setCustomerEmailStatus("failed");
      setConfirmationMessage(result.error || "Confirmation could not be sent.");
      return;
    }
    setCustomerEmailStatus("sent");
    setCustomerDeliveryStatus("sent");
    setCustomerDeliveryEventAt(new Date().toISOString());
    setCustomerDeliveryError(null);
    setConfirmationMessage(
      `Confirmation sent to ${order.email}. The delivery status was saved in CRM.`,
    );
    window.setTimeout(() => void refreshDelivery(), 1800);
  }

  async function refreshDelivery() {
    setConfirmationMessage("Checking Resend…");
    const response = await fetch(`/api/admin/orders/${order.id}/email-status`, {
      method: "POST",
    });
    const result = await response.json();
    if (!response.ok) {
      setConfirmationMessage(result.error || "Could not check Resend status.");
      return;
    }
    setCustomerDeliveryStatus(result.status || null);
    setCustomerDeliveryEventAt(result.checkedAt || null);
    setCustomerDeliveryError(null);
    setConfirmationMessage(
      `Resend verified this email as “${deliveryLabel[result.status] || result.status}”.`,
    );
    await loadHistory();
  }

  async function refreshCompletedDelivery() {
    setCompletedDeliveryMessage("Checking Resend…");
    const response = await fetch(
      `/api/admin/orders/${order.id}/email-status?kind=completed`,
      { method: "POST" },
    );
    const result = await response.json();
    if (!response.ok) {
      setCompletedDeliveryMessage(
        result.error || "Could not check final email status.",
      );
      return;
    }
    setCompletedDeliveryStatus(result.status || null);
    setCompletedDeliveryMessage(
      `Resend verified the final email as “${deliveryLabel[result.status] || result.status}”.`,
    );
    await loadHistory();
  }
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 p-2 backdrop-blur-sm sm:p-8">
      <section className="mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] bg-[#f4f4f0] shadow-2xl sm:rounded-[2rem]">
        <div className="flex flex-col justify-between gap-4 bg-[#111] p-5 text-white sm:flex-row sm:items-center sm:p-7">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[.12em] text-yellow-400">
              TVG-ES-{String(order.order_number).padStart(5, "0")}
            </p>
            <h2 className="mt-1 truncate text-3xl font-black">
              {order.full_name}
            </h2>
          </div>
          <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto">
            <button
              onClick={() => setEditing((value) => !value)}
              className="rounded-xl bg-yellow-400 px-3 py-2.5 text-sm font-black text-black"
            >
              {editing ? "Cancel edit" : "Edit order"}
            </button>
            <button
              onClick={onClose}
              className="rounded-xl border border-white/30 px-3 py-2.5 text-sm font-bold"
            >
              Close
            </button>
          </div>
        </div>
        <div className="p-4 sm:p-7">
          {editing ? (
            <OrderEditor
              draft={draft}
              onChange={setDraftField}
              onServices={(services) => setDraftField("services", services)}
            />
          ) : (
            <>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Info label="Phone" value={order.phone} />
                <Info label="Email" value={order.email || "—"} />
                <Info
                  label="Service address"
                  value={`${order.address}${order.apartment ? `, ${order.apartment}` : ""}, ${order.area}, ${order.city}`}
                />
                <Info label="Customer notes" value={order.notes || "—"} />
              </div>
              <button
                onClick={() => void checkTransit()}
                className="mt-3 w-full rounded-xl border border-yellow-400 bg-white px-4 py-3 text-sm font-bold sm:w-auto sm:py-2"
              >
                Check travel time
              </button>
              {transit ? (
                <p className="mt-2 break-all text-xs text-gray-600">
                  {transit}
                </p>
              ) : null}
              <div className="mt-5 rounded-2xl border border-yellow-300 bg-white p-4">
                <div className="flex items-center justify-between">
                  <b>Services</b>
                  <b>{money(order.total)}</b>
                </div>
                {order.services?.map((service, index) => (
                  <div
                    key={`${service.id}-${index}`}
                    className="mt-2 flex items-start justify-between gap-3 text-sm"
                  >
                    <span className="min-w-0">
                      {service.label} × {service.qty}
                    </span>
                    <span className="shrink-0 font-bold">
                      {money(service.subtotal)}
                    </span>
                  </div>
                ))}
              </div>
              {order.deposit_required ? (
                <p className="mt-3 text-sm font-black text-yellow-700">
                  50% travel deposit before confirmation:{" "}
                  {money(order.deposit_amount)}
                </p>
              ) : (
                <p className="mt-3 text-sm text-gray-600">
                  Payment after work: secure link or cash.
                </p>
              )}
              <div className="mt-5">
                <OrderPaymentPanel
                  orderId={order.id}
                  paymentStatus={order.payment_status}
                  paidAmount={order.paid_amount}
                />
              </div>
              <section className="mt-5 rounded-2xl border border-yellow-300 bg-yellow-50/60 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[.12em] text-yellow-700">
                      Contractor assignment
                    </p>
                    <h3 className="mt-1 text-lg font-black">
                      {currentAssignment
                        ? "Assigned contractor"
                        : latestAssignment?.response_status === "declined"
                          ? "Contractor declined — reassign job"
                          : "Assign contractor"}
                    </h3>
                  </div>
                  {currentAssignment ? (
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-black uppercase ${currentAssignment.response_status === "accepted" ? "bg-emerald-100 text-emerald-800" : "bg-yellow-100 text-yellow-800"}`}
                    >
                      {currentAssignment.response_status === "accepted"
                        ? "Accepted"
                        : "Awaiting response"}
                    </span>
                  ) : null}
                </div>

                {currentAssignment ? (
                  <>
                    <AssignmentCard assignment={currentAssignment} />
                    <button
                      type="button"
                      onClick={() =>
                        void resendAssignmentEmail(currentAssignment.id)
                      }
                      className="mt-3 w-full rounded-xl border border-black bg-white px-4 py-3 text-sm font-black transition hover:bg-black hover:text-white"
                    >
                      Resend assignment email
                    </button>
                    <div className="mt-4 rounded-xl border border-yellow-200 bg-white p-3">
                      <p className="text-xs font-black uppercase tracking-[.12em] text-gray-500">
                        Change contractor
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        The current worker loses access immediately. The new
                        worker receives the usual assignment email.
                      </p>
                      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                        <select
                          value={workerId}
                          onChange={(event) => setWorkerId(event.target.value)}
                          className="min-w-0 flex-1 rounded-xl border bg-white p-3 text-sm"
                        >
                          <option value="">Select another active worker</option>
                          {workers
                            .filter(
                              (worker) =>
                                worker.user_id !== currentAssignment.worker_id &&
                                (worker.service_cities || [worker.primary_city || "Valencia"]).includes(order.city),
                            )
                            .map((worker) => (
                              <option
                                key={worker.user_id}
                                value={worker.user_id}
                              >
                                {worker.full_name} · {worker.email}
                              </option>
                            ))}
                        </select>
                        <button
                          type="button"
                          disabled={!workerId}
                          onClick={() => void assignWorker(true)}
                          className="w-full rounded-xl bg-yellow-400 px-4 py-3 text-sm font-black disabled:opacity-50 sm:w-auto"
                        >
                          Change &amp; email
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => void unassignWorker(currentAssignment.id)}
                        className="mt-3 w-full rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-black text-red-700 transition hover:bg-red-100"
                      >
                        Unassign contractor
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {latestAssignment?.response_status === "declined" ? (
                      <div className="mt-3 rounded-xl border border-red-100 bg-red-50 p-3 text-sm font-bold text-red-800">
                        {assignmentWorker(latestAssignment).full_name} could not
                        accept this job. The order is available for another
                        contractor.
                      </div>
                    ) : (
                      <p className="mt-2 text-sm text-gray-600">
                        The worker receives job details, their 50% share and
                        secure Accept / Cannot accept actions.
                      </p>
                    )}
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                      <select
                        value={workerId}
                        onChange={(event) => setWorkerId(event.target.value)}
                        className="min-w-0 flex-1 rounded-xl border bg-white p-3 text-sm"
                      >
                        <option value="">Select an active worker</option>
                        {workers
                          .filter(
                            (worker) =>
                              (worker.service_cities || [worker.primary_city || "Valencia"]).includes(order.city) &&
                              !assignments.some(
                                (assignment) =>
                                  assignment.worker_id === worker.user_id &&
                                  !assignment.access_revoked_at &&
                                  assignment.response_status !== "declined",
                              ),
                          )
                          .map((worker) => (
                            <option key={worker.user_id} value={worker.user_id}>
                              {worker.full_name} · {worker.email}
                            </option>
                          ))}
                      </select>
                      <button
                        disabled={!workerId}
                        onClick={() => void assignWorker()}
                        className="w-full rounded-xl bg-yellow-400 px-4 py-3 text-sm font-black disabled:opacity-50 sm:w-auto"
                      >
                        Assign &amp; email
                      </button>
                    </div>
                  </>
                )}
                {assignmentMessage ? (
                  <p className="mt-3 text-sm font-medium text-gray-700">
                    {assignmentMessage}
                  </p>
                ) : null}
                {assignments.length > 1 ? (
                  <details className="mt-3 rounded-xl bg-white p-3 text-sm">
                    <summary className="cursor-pointer font-black">
                      Previous assignments ({assignments.length - 1})
                    </summary>
                    <div className="mt-3 space-y-2">
                      {assignments.slice(1).map((assignment) => (
                        <AssignmentCard
                          key={assignment.id}
                          assignment={assignment}
                          compact
                        />
                      ))}
                    </div>
                  </details>
                ) : null}
              </section>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="text-sm font-bold">
                  Status
                  <select
                    value={status}
                    onChange={(event) =>
                      setStatus(event.target.value as Status)
                    }
                    className="mt-1 w-full rounded-xl border p-3"
                  >
                    {Object.entries(statusLabel).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="rounded-2xl border border-gray-200 bg-white p-4 text-sm">
                  <b>Email delivery</b>
                  <p className="mt-2 text-gray-600">
                    Business: {order.admin_email_status} · Customer:{" "}
                    {customerEmailStatus}
                  </p>
                  <div
                    className={`mt-3 rounded-xl p-3 ${customerDeliveryStatus && ["bounced", "failed", "suppressed", "complained"].includes(customerDeliveryStatus) ? "bg-red-50 text-red-800" : customerDeliveryStatus === "delivered" || customerDeliveryStatus === "opened" || customerDeliveryStatus === "clicked" ? "bg-emerald-50 text-emerald-800" : "bg-gray-100 text-gray-700"}`}
                  >
                    <p className="font-black">
                      {customerDeliveryStatus
                        ? deliveryLabel[customerDeliveryStatus] ||
                          customerDeliveryStatus
                        : customerEmailStatus === "sent"
                          ? "Accepted by Resend — awaiting delivery webhook"
                          : "No verified delivery event yet"}
                    </p>
                    {customerDeliveryEventAt ? (
                      <p className="mt-1 text-xs">
                        Latest verification:{" "}
                        {new Intl.DateTimeFormat("en-IE", {
                          dateStyle: "medium",
                          timeStyle: "short",
                          timeZone: "Europe/Madrid",
                        }).format(new Date(customerDeliveryEventAt))}
                      </p>
                    ) : null}
                    {customerDeliveryError ? (
                      <p className="mt-1 text-xs">{customerDeliveryError}</p>
                    ) : null}
                  </div>
                  <p className="mt-3 text-xs leading-5 text-gray-600">
                    A hidden copy of every customer confirmation is sent to the
                    configured business notification email.
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <a
                      href={`/api/admin/orders/${order.id}/email-preview`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-gray-300 bg-white px-3 py-3 text-center font-black text-black"
                    >
                      Preview email
                    </a>
                    <button
                      type="button"
                      onClick={() => void refreshDelivery()}
                      className="rounded-xl border border-gray-300 bg-white px-3 py-3 font-black text-black"
                    >
                      Refresh status
                    </button>
                  </div>
                  <button
                    type="button"
                    disabled={sendingConfirmation || !order.email}
                    onClick={() => void sendConfirmation()}
                    className="mt-3 w-full rounded-xl bg-yellow-400 px-4 py-3 font-black text-black disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {sendingConfirmation
                      ? "Sending…"
                      : customerEmailStatus === "sent"
                        ? "Resend confirmation"
                        : "Send confirmation"}
                  </button>
                  {confirmationMessage ? (
                    <p className="mt-2 text-xs font-medium leading-5 text-gray-700">
                      {confirmationMessage}
                    </p>
                  ) : null}
                </div>
                <label className="text-sm font-bold">
                  Date
                  <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    className="mt-1 w-full rounded-xl border p-3"
                  />
                </label>
                <label className="text-sm font-bold">
                  Madrid time
                  <input
                    type="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    className="mt-1 w-full rounded-xl border p-3"
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm font-bold">
                Internal notes
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  className="mt-1 min-h-28 w-full rounded-xl border p-3 font-normal"
                />
              </label>
              {status === "completed" &&
              !["sent", "not_required"].includes(
                order.completed_email_status,
              ) ? (
                <div className="mt-5 space-y-3">
                  <a
                    href={`/api/admin/orders/${order.id}/email-preview?kind=completed`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full rounded-2xl border border-gray-300 bg-white px-5 py-3.5 text-center font-extrabold"
                  >
                    Preview final email
                  </a>
                  <button
                    disabled={saving}
                    onClick={() => void completeAndSendFinalEmail()}
                    className="w-full rounded-2xl bg-yellow-400 px-5 py-4 font-extrabold shadow-lg"
                  >
                    {saving
                      ? "Completing order…"
                      : "Complete order & send final email"}
                  </button>
                </div>
              ) : status === "completed" ? (
                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center font-black text-emerald-800">
                    <p>
                      {order.completed_email_status === "not_required"
                        ? "Order completed · no customer email required"
                        : "Order completed · final email sent"}
                    </p>
                    {order.completed_email_status === "sent" ? (
                      <p className="mt-1 text-sm">
                        {deliveryLabel[
                          completedDeliveryStatus ||
                            order.completed_email_delivery_status ||
                            "sent"
                        ] || completedDeliveryStatus}
                      </p>
                    ) : null}
                  </div>
                  <div
                    className={`grid gap-2 ${
                      order.completed_email_status === "sent"
                        ? "grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    <a
                      href={`/api/admin/orders/${order.id}/email-preview?kind=completed`}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full rounded-2xl border border-gray-300 bg-white px-4 py-3.5 text-center font-extrabold"
                    >
                      View final email
                    </a>
                    {order.completed_email_status === "sent" ? (
                      <button
                        type="button"
                        onClick={() => void refreshCompletedDelivery()}
                        className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3.5 font-extrabold"
                      >
                        Check delivery
                      </button>
                    ) : null}
                  </div>
                  {completedDeliveryMessage ? (
                    <p className="text-center text-sm font-medium text-gray-700">
                      {completedDeliveryMessage}
                    </p>
                  ) : null}
                </div>
              ) : (
                <button
                  disabled={saving}
                  onClick={() => void saveOperationalChanges()}
                  className="mt-5 w-full rounded-2xl bg-yellow-400 px-5 py-4 font-extrabold shadow-lg"
                >
                  {saving ? "Saving…" : "Save changes"}
                </button>
              )}
            </>
          )}
          {editing ? (
            <button
              disabled={saving}
              onClick={() => void saveAll()}
              className="mt-5 w-full rounded-2xl bg-yellow-400 px-5 py-3.5 font-extrabold"
            >
              {saving ? "Saving…" : "Save all order changes"}
            </button>
          ) : null}
          {currentAssignment || latestAssignment ? (
            <section className="mt-6 overflow-hidden rounded-3xl border border-yellow-300 bg-white shadow-sm">
              <div className="bg-black p-5 text-white sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[.16em] text-yellow-400">
                  Live field operations
                </p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-black">
                      Worker progress &amp; photos
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      Every stage and upload is retained with this order.
                    </p>
                  </div>
                  <span className="self-start rounded-full bg-yellow-400 px-4 py-2 text-xs font-black uppercase text-black sm:self-auto">
                    {String(
                      (currentAssignment || latestAssignment)?.status ||
                        "assigned",
                    ).replaceAll("_", " ")}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                  {[
                    ["assigned", "Assigned"],
                    ["en_route", "On the way"],
                    ["arrived", "Arrived"],
                    ["in_progress", "In progress"],
                    ["completed", "Completed"],
                  ].map(([value, label], index, stages) => {
                    const assignmentStatus = String(
                      (currentAssignment || latestAssignment)?.status ||
                        "assigned",
                    );
                    const currentIndex = stages.findIndex(
                      ([stage]) => stage === assignmentStatus,
                    );
                    const active = currentIndex >= index;
                    return (
                      <div
                        key={value}
                        className={`rounded-2xl border p-3 text-center text-xs font-black ${active ? "border-yellow-400 bg-yellow-50 text-black" : "border-gray-200 bg-gray-50 text-gray-400"}`}
                      >
                        <span
                          className={`mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full ${active ? "bg-yellow-400 text-black" : "bg-gray-200"}`}
                        >
                          {index + 1}
                        </span>
                        {label}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="font-black">Stored job photos</h4>
                    <p className="text-xs text-gray-500">
                      Private links expire automatically after one hour.
                    </p>
                  </div>
                  <button
                    type="button"
                    disabled={loadingPhotos}
                    onClick={() =>
                      void loadJobPhotos(
                        currentAssignment?.id || latestAssignment?.id,
                      )
                    }
                    className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm font-black sm:w-auto"
                  >
                    {loadingPhotos ? "Loading…" : "Refresh photos"}
                  </button>
                </div>
                {photoError ? (
                  <p className="mt-3 rounded-xl bg-red-50 p-3 text-sm font-bold text-red-700">
                    {photoError}
                  </p>
                ) : null}
                {jobPhotos.length ? (
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {jobPhotos.map((photo) => (
                      <a
                        key={photo.id}
                        href={photo.url || undefined}
                        target="_blank"
                        rel="noreferrer"
                        className="group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
                      >
                        {photo.url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={photo.url}
                            alt={`${photo.photoType} work photo`}
                            className="aspect-square w-full object-cover transition group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div className="flex aspect-square items-center justify-center text-sm text-gray-400">
                            Preview unavailable
                          </div>
                        )}
                        <div className="p-3">
                          <p className="font-black capitalize">
                            {photo.photoType} photo
                          </p>
                          <p className="mt-1 text-[11px] text-gray-500">
                            {assignmentTime(photo.uploadedAt)}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : !loadingPhotos ? (
                  <div className="mt-4 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">
                    <p className="font-black">No work photos uploaded yet</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Before, after and issue photos will appear here.
                    </p>
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}
          <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-black">Order change history</h3>
                <p className="text-xs text-gray-500">
                  Recorded automatically in the Spanish CRM database.
                </p>
              </div>
              <button
                onClick={() => {
                  void loadHistory();
                  void loadJobPhotos(
                    currentAssignment?.id || latestAssignment?.id,
                  );
                }}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm font-bold sm:w-auto"
              >
                Refresh
              </button>
            </div>
            {historyError ? (
              <p className="mt-3 text-sm text-red-700">{historyError}</p>
            ) : null}
            <div className="mt-3 space-y-2">
              {history.length ? (
                history.map((entry) => {
                  const presentation = historyPresentation(entry);
                  return (
                    <article
                      key={entry.id}
                      className={`rounded-xl border p-3 text-sm ${
                        presentation.tone === "success"
                          ? "border-emerald-200 bg-emerald-50"
                          : presentation.tone === "warning"
                            ? "border-amber-200 bg-amber-50"
                            : presentation.tone === "danger"
                              ? "border-red-200 bg-red-50"
                              : "border-transparent bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <b>{presentation.title}</b>
                        <time className="text-xs text-gray-500">
                          {new Intl.DateTimeFormat("en-IE", {
                            dateStyle: "medium",
                            timeStyle: "short",
                            timeZone: "Europe/Madrid",
                          }).format(new Date(entry.changed_at))}
                        </time>
                      </div>
                      <p className="mt-1 text-gray-600">
                        {presentation.detail}
                      </p>
                    </article>
                  );
                })
              ) : (
                <p className="text-sm text-gray-500">
                  No recorded changes yet. New updates to this order will
                  appear here automatically.
                </p>
              )}
            </div>
          </section>
          {deleteConfirmation === null ? (
            <button
              disabled={saving}
              onClick={() => setDeleteConfirmation("")}
              className="mt-6 w-full rounded-2xl border border-red-300 bg-red-50 px-5 py-3.5 font-extrabold text-red-700"
            >
              Delete order permanently
            </button>
          ) : (
            <section
              role="dialog"
              aria-label="Confirm permanent order deletion"
              className="mt-6 rounded-2xl border border-red-300 bg-red-50 p-4"
            >
              <h3 className="font-black text-red-800">
                Permanently delete TVG-ES-
                {String(order.order_number).padStart(5, "0")}?
              </h3>
              <p className="mt-1 text-sm text-red-700">
                The order will be removed from CRM. Its protected audit history
                will be retained. Type DELETE to confirm.
              </p>
              <label className="mt-4 block text-sm font-black text-red-900">
                Confirmation
                <input
                  autoFocus
                  value={deleteConfirmation}
                  onChange={(event) =>
                    setDeleteConfirmation(event.target.value)
                  }
                  placeholder="DELETE"
                  autoComplete="off"
                  className="mt-1 w-full rounded-xl border border-red-300 bg-white p-3 text-black"
                />
              </label>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => setDeleteConfirmation(null)}
                  className="rounded-xl border border-gray-300 bg-white px-4 py-3 font-extrabold text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={saving || deleteConfirmation !== "DELETE"}
                  onClick={() => void onDelete(order)}
                  className="rounded-xl bg-red-700 px-4 py-3 font-extrabold text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {saving ? "Deleting…" : "Delete permanently"}
                </button>
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}

function OrderEditor({
  draft,
  onChange,
  onServices,
}: {
  draft: Order;
  onChange: <K extends keyof Order>(key: K, value: Order[K]) => void;
  onServices: (services: Service[]) => void;
}) {
  const setService = (index: number, updates: Partial<Service>) =>
    onServices(
      draft.services.map((service, current) =>
        current === index ? { ...service, ...updates } : service,
      ),
    );
  return (
    <div className="mt-5 space-y-5">
      <section className="grid gap-3 sm:grid-cols-2">
        <Field label="Customer name">
          <input
            value={draft.full_name}
            onChange={(event) => onChange("full_name", event.target.value)}
          />
        </Field>
        <Field label="Phone">
          <input
            value={draft.phone}
            onChange={(event) => onChange("phone", event.target.value)}
          />
        </Field>
        <Field label="Email">
          <input
            value={draft.email}
            onChange={(event) => onChange("email", event.target.value)}
          />
        </Field>
        <Field label="Status">
          <select
            value={draft.status}
            onChange={(event) =>
              onChange("status", event.target.value as Status)
            }
          >
            {Object.entries(statusLabel).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="City">
          <select
            value={draft.city}
            onChange={(event) => onChange("city", event.target.value)}
          >
            {['Valencia', 'Madrid', 'Barcelona', 'Alicante'].map((city) => <option key={city}>{city}</option>)}
          </select>
        </Field>
        <Field label="Area / neighbourhood">
          <input
            value={draft.area}
            onChange={(event) => onChange("area", event.target.value)}
          />
        </Field>
        <Field label="Postal code">
          <input
            value={draft.postal_code}
            onChange={(event) => onChange("postal_code", event.target.value)}
          />
        </Field>
        <Field label="Unit / apartment">
          <input
            value={draft.apartment}
            onChange={(event) => onChange("apartment", event.target.value)}
          />
        </Field>
        <Field label="Service address">
          <input
            value={draft.address}
            onChange={(event) => onChange("address", event.target.value)}
          />
        </Field>
        <Field label="Category">
          <select
            value={draft.category}
            onChange={(event) => onChange("category", event.target.value)}
          >
            {categoryKeys.map((key) => (
              <option key={key} value={CATEGORY_MAP[key]}>
                {CATEGORY_MAP[key]}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Date">
          <input
            type="date"
            value={draft.preferred_date}
            onChange={(event) => onChange("preferred_date", event.target.value)}
          />
        </Field>
        <Field label="Madrid time">
          <input
            type="time"
            value={draft.preferred_time.slice(0, 5)}
            onChange={(event) => onChange("preferred_time", event.target.value)}
          />
        </Field>
      </section>
      <Field label="Customer notes">
        <textarea
          value={draft.notes}
          onChange={(event) => onChange("notes", event.target.value)}
          className="min-h-24"
        />
      </Field>
      <Field label="Internal notes">
        <textarea
          value={draft.internal_notes}
          onChange={(event) => onChange("internal_notes", event.target.value)}
          className="min-h-24"
        />
      </Field>
      <section className="rounded-2xl border border-yellow-300 p-4">
        <p className="font-black">Operations, payment &amp; review</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <OrderPaymentPanel
            orderId={draft.id}
            paymentStatus={draft.payment_status}
            paidAmount={draft.paid_amount}
          />
          <Field label="First response">
            <input
              type="datetime-local"
              value={draft.first_response_at?.slice(0, 16) || ""}
              onChange={(event) =>
                onChange(
                  "first_response_at",
                  event.target.value
                    ? new Date(event.target.value).toISOString()
                    : null,
                )
              }
            />
          </Field>
          <Field label="Quote sent">
            <input
              type="datetime-local"
              value={draft.quote_sent_at?.slice(0, 16) || ""}
              onChange={(event) =>
                onChange(
                  "quote_sent_at",
                  event.target.value
                    ? new Date(event.target.value).toISOString()
                    : null,
                )
              }
            />
          </Field>
          <Field label="Payment method">
            <select
              value={draft.payment_method || ""}
              onChange={(event) =>
                onChange(
                  "payment_method",
                  (event.target.value || null) as Order["payment_method"],
                )
              }
            >
              <option value="">Not received</option>
              <option value="paypal">PayPal</option>
              <option value="e_transfer">Bank transfer / Bizum</option>
              <option value="cash">Cash</option>
              <option value="other">Other</option>
            </select>
          </Field>
          <Field label="Payment received">
            <input
              type="datetime-local"
              value={draft.payment_received_at?.slice(0, 16) || ""}
              onChange={(event) =>
                onChange(
                  "payment_received_at",
                  event.target.value
                    ? new Date(event.target.value).toISOString()
                    : null,
                )
              }
            />
          </Field>
          <Field label="Material cost (EUR)">
            <input
              type="number"
              min="0"
              step="0.01"
              value={draft.material_cost || 0}
              onChange={(event) =>
                onChange("material_cost", Number(event.target.value))
              }
            />
          </Field>
          <Field label="Travel minutes">
            <input
              type="number"
              min="0"
              value={draft.travel_minutes || ""}
              onChange={(event) =>
                onChange(
                  "travel_minutes",
                  event.target.value ? Number(event.target.value) : null,
                )
              }
            />
          </Field>
          <Field label="Distance (km)">
            <input
              type="number"
              min="0"
              step="0.1"
              value={draft.travel_distance_km || ""}
              onChange={(event) =>
                onChange(
                  "travel_distance_km",
                  event.target.value ? Number(event.target.value) : null,
                )
              }
            />
          </Field>
          <Field label="Review">
            <select
              value={draft.review_status}
              onChange={(event) =>
                onChange(
                  "review_status",
                  event.target.value as Order["review_status"],
                )
              }
            >
              <option value="not_requested">Not requested</option>
              <option value="requested">Requested</option>
              <option value="received">Received</option>
              <option value="declined">Declined</option>
            </select>
          </Field>
          <Field label="Review rating">
            <input
              type="number"
              min="1"
              max="5"
              value={draft.review_rating || ""}
              onChange={(event) =>
                onChange(
                  "review_rating",
                  event.target.value ? Number(event.target.value) : null,
                )
              }
            />
          </Field>
        </div>
      </section>
      <section className="rounded-2xl border border-yellow-300 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-black">Services and EUR pricing</p>
          <button
            type="button"
            onClick={() =>
              onServices([
                ...draft.services,
                {
                  id: "manual",
                  label: "Custom job",
                  price: 1,
                  qty: 1,
                  subtotal: 1,
                },
              ])
            }
            className="text-sm font-bold underline"
          >
            + Add line
          </button>
        </div>
        {draft.services.map((service, index) => (
          <div
            key={`${service.id}-${index}`}
            className="mt-3 grid grid-cols-[1fr_1fr_auto] gap-2 sm:grid-cols-[1fr_76px_64px_auto]"
          >
            <input
              aria-label="Service label"
              className="col-span-3 rounded-xl border p-2 sm:col-span-1"
              value={service.label}
              onChange={(event) =>
                setService(index, { label: event.target.value })
              }
            />
            <input
              aria-label="Price"
              type="number"
              min="0.01"
              step="0.01"
              value={service.price}
              onChange={(event) =>
                setService(index, { price: Number(event.target.value) })
              }
              className="rounded-xl border p-2"
            />
            <input
              aria-label="Quantity"
              type="number"
              min="1"
              value={service.qty}
              onChange={(event) =>
                setService(index, { qty: Number(event.target.value) })
              }
              className="rounded-xl border p-2"
            />
            <button
              type="button"
              onClick={() =>
                onServices(
                  draft.services.filter((_, current) => current !== index),
                )
              }
              className="rounded-xl border border-red-200 px-2 text-sm text-red-700"
            >
              ×
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

function historySummary(entry: OrderHistory) {
  if (entry.change_type === "created") return "Order created.";
  if (entry.change_type === "deleted")
    return "Order permanently deleted; its previous data was retained in this audit log.";
  const before = entry.previous_data || {},
    after = entry.new_data || {};
  const labels: Record<string, string> = {
    full_name: "customer",
    phone: "phone",
    email: "email",
    city: "city",
    area: "area",
    postal_code: "postal code",
    address: "address",
    apartment: "unit",
    preferred_date: "date",
    preferred_time: "time",
    category: "category",
    services: "services/pricing",
    subtotal: "subtotal",
    tax: "tax",
    total: "total",
    deposit_required: "deposit rule",
    deposit_amount: "deposit",
    status: "status",
    notes: "customer notes",
    internal_notes: "internal notes",
  };
  const changes = Object.keys(labels)
    .filter((key) => JSON.stringify(before[key]) !== JSON.stringify(after[key]))
    .map((key) => labels[key]);
  return changes.length ? `Changed: ${changes.join(", ")}.` : "Order updated.";
}

function historyPresentation(entry: OrderHistory): {
  title: string;
  detail: string;
  tone: "default" | "success" | "warning" | "danger";
} {
  if (entry.change_type === "created")
    return {
      title: "Order created",
      detail: "The order was added to the Spanish CRM.",
      tone: "default",
    };
  if (entry.change_type === "deleted")
    return {
      title: "Order deleted",
      detail:
        "The order was permanently deleted; its previous data remains in this audit log.",
      tone: "danger",
    };

  const before = entry.previous_data || {};
  const after = entry.new_data || {};
  const crmEvent = String(after.crm_event || "");
  const workerName = String(after.worker_name || "the assigned contractor");
  if (crmEvent === "worker_assigned")
    return {
      title: "Contractor assigned",
      detail: `${workerName} was assigned with a ${money(Number(after.worker_share || 0))} expected share. Waiting for their response.`,
      tone: "warning",
    };
  if (crmEvent === "worker_reassigned")
    return {
      title: "Contractor changed",
      detail: `${String(after.previous_worker_name || "The previous contractor")} (${String(after.previous_worker_email || "email unavailable")}) was unassigned and their access was closed. A new contractor assignment was created without changing the customer order.`,
      tone: "warning",
    };
  if (crmEvent === "worker_unassigned")
    return {
      title: "Contractor unassigned",
      detail: `${workerName}${after.worker_email ? ` (${String(after.worker_email)})` : ""} was unassigned and their access was closed. The customer order remains open and can be assigned again.`,
      tone: "warning",
    };
  if (crmEvent === "worker_unassignment_email_sent")
    return {
      title: "Unassignment email sent",
      detail: `The assignment-removal email for ${workerName} was accepted by Resend.`,
      tone: "success",
    };
  if (crmEvent === "worker_unassignment_email_failed")
    return {
      title: "Unassignment email failed",
      detail: String(after.error || "The worker notification email failed."),
      tone: "danger",
    };
  if (crmEvent === "worker_assignment_email_sent")
    return {
      title: "Assignment email sent",
      detail: `The job email for ${workerName} was accepted by Resend.`,
      tone: "success",
    };
  if (crmEvent === "worker_assignment_email_resent")
    return {
      title: "Assignment email resent",
      detail: `A new response email was sent to ${workerName}.`,
      tone: "success",
    };
  if (crmEvent === "worker_assignment_email_failed")
    return {
      title: "Assignment email failed",
      detail: String(after.error || `The email for ${workerName} failed.`),
      tone: "danger",
    };
  if (crmEvent === "worker_assignment_email_event")
    return {
      title: `Assignment email ${String(after.email_event || "updated").replaceAll("_", " ")}`,
      detail: `Resend recorded an assignment-email event for ${workerName}.`,
      tone: ["failed", "bounced", "complained", "suppressed"].includes(
        String(after.email_event || ""),
      )
        ? "danger"
        : "success",
    };
  if (crmEvent === "worker_assignment_link_opened")
    return {
      title: "Worker opened protected job",
      detail: "The assigned contractor authenticated and opened the job link.",
      tone: "success",
    };
  if (crmEvent === "worker_assignment_accepted")
    return {
      title: "Worker accepted the job",
      detail:
        "The contractor accepted this assignment in the protected portal.",
      tone: "success",
    };
  if (crmEvent === "worker_assignment_declined")
    return {
      title: "Worker declined the job",
      detail:
        "The contractor could not accept this assignment. The order is available for reassignment.",
      tone: "warning",
    };
  if (crmEvent === "worker_response_email_sent")
    return {
      title: `${String(after.response_status || "Response")} confirmation email sent`,
      detail: `The worker confirmation email for ${workerName} was accepted by Resend.`,
      tone: "success",
    };
  if (crmEvent === "worker_response_email_failed")
    return {
      title: "Worker response email failed",
      detail: String(
        after.error ||
          "The response was saved, but its confirmation email failed.",
      ),
      tone: "danger",
    };
  if (crmEvent === "worker_response_email_tracking_unavailable")
    return {
      title: "Worker response email sent",
      detail:
        "Resend accepted the email. Delivery tracking is waiting for the latest database migration.",
      tone: "warning",
    };
  if (crmEvent === "worker_response_email_event") {
    const responseStatus = String(after.response_status || "response");
    const emailStatus = String(after.email_event || "updated").replaceAll(
      "_",
      " ",
    );
    return {
      title: `${responseStatus} email ${emailStatus}`,
      detail: `Resend recorded ${emailStatus} for ${workerName}'s response confirmation.`,
      tone: ["failed", "bounced", "complained", "suppressed"].includes(
        String(after.email_event || ""),
      )
        ? "danger"
        : "success",
    };
  }
  if (crmEvent === "worker_job_page_viewed")
    return {
      title: "Worker viewed the order",
      detail: "The assigned contractor opened this order after authentication.",
      tone: "success",
    };
  if (crmEvent === "worker_route_opened")
    return {
      title: "Worker opened Google Maps",
      detail: "The contractor requested directions to the service address.",
      tone: "default",
    };
  if (crmEvent === "worker_whatsapp_opened")
    return {
      title: "Worker opened THEVULGO WhatsApp",
      detail: "The contractor used the order contact button.",
      tone: "default",
    };
  if (crmEvent === "worker_note_added")
    return {
      title: "Worker added a private note",
      detail: String(after.message || "A note was saved for this job."),
      tone: "default",
    };
  if (crmEvent === "worker_question_sent")
    return {
      title: "Worker asked a question",
      detail: String(after.message || "A question was sent to THEVULGO."),
      tone: "warning",
    };
  if (crmEvent === "worker_question_email_failed")
    return {
      title: "Worker question email failed",
      detail: String(after.error || "The question was saved but email failed."),
      tone: "danger",
    };
  if (crmEvent === "worker_question_email_event") {
    const emailEvent = String(after.email_event || "updated").replaceAll(
      "_",
      " ",
    );
    return {
      title: `Worker question email ${emailEvent}`,
      detail: `Resend recorded ${emailEvent} for the internal question notification.`,
      tone: ["failed", "bounced", "complained", "suppressed"].includes(
        String(after.email_event || ""),
      )
        ? "danger"
        : "success",
    };
  }
  if (crmEvent === "worker_job_status_changed")
    return {
      title: "Worker updated job progress",
      detail: `Status changed from ${String(after.previous_status || "unknown").replaceAll("_", " ")} to ${String(after.status || "unknown").replaceAll("_", " ")}.`,
      tone: after.status === "completed" ? "success" : "default",
    };
  if (crmEvent === "worker_completion_note_updated")
    return {
      title: "Worker updated completion notes",
      detail: String(after.note || "Completion or issue notes were updated."),
      tone: "default",
    };
  if (crmEvent === "worker_job_photo_uploaded")
    return {
      title: "Worker uploaded a job photo",
      detail: `${String(after.photo_type || "Job").replaceAll("_", " ")} photo saved securely.`,
      tone: "success",
    };
  if (crmEvent === "worker_payment_recorded")
    return {
      title: "Worker recorded customer payment",
      detail: `Payment method: ${String(after.payment_method || "unknown").replaceAll("_", " ")}.`,
      tone: "success",
    };
  if (crmEvent === "payment_link_created")
    return {
      title: "Secure payment link created",
      detail: `Payment request for €${Number(after.amount || 0).toFixed(2)} was created.`,
      tone: "default",
    };
  if (crmEvent === "payment_link_emailed")
    return {
      title: "Payment link emailed to customer",
      detail: `The secure payment request was sent to ${String(after.email || "the customer")}.`,
      tone: "success",
    };
  if (crmEvent === "payment_link_reemailed")
    return {
      title: "Payment link resent to customer",
      detail: `A fresh secure payment request was sent to ${String(after.email || "the customer")}.`,
      tone: "success",
    };
  if (crmEvent === "payment_link_email_failed" || crmEvent === "worker_payment_link_email_failed")
    return {
      title: "Payment-link email failed",
      detail: String(after.error || "The secure link was created, but the email could not be sent."),
      tone: "danger",
    };
  if (crmEvent === "payment_link_email_event") {
    const emailEvent = String(after.email_event || "updated");
    return {
      title: `Payment email ${emailEvent.replaceAll("_", " ")}`,
      detail: after.recipient
        ? `Resend recorded ${emailEvent} for ${String(after.recipient)}.`
        : `Resend recorded the latest payment-email event.`,
      tone: ["failed", "bounced", "complained", "suppressed"].includes(emailEvent)
        ? "danger"
        : "success",
    };
  }
  if (crmEvent === "payment_link_clicked")
    return {
      title: "Customer opened payment page",
      detail: "The secure payment link was opened from the customer email.",
      tone: "success",
    };
  if (crmEvent === "worker_payment_link_emailed")
    return {
      title: "Worker sent payment link",
      detail: `The assigned contractor sent the secure payment request to ${String(after.email || "the customer")}.`,
      tone: "success",
    };
  if (crmEvent === "worker_cash_collected")
    return {
      title: "Worker recorded cash collection",
      detail: `€${Number(after.cash_amount || 0).toFixed(2)} collected. Company remittance due within 24 hours.`,
      tone: "warning",
    };
  if (crmEvent === "paypal_payment_completed")
    return {
      title: "PayPal payment verified",
      detail: `€${Number(after.amount || 0).toFixed(2)} received and verified by the server.`,
      tone: "success",
    };
  if (crmEvent === "worker_cash_remittance_paid")
    return {
      title: "Cash remittance received",
      detail: `The company share of €${Number(after.amount || 0).toFixed(2)} was paid through PayPal.`,
      tone: "success",
    };
  if (crmEvent === "payment_notifications_sent")
    return {
      title: "Payment notifications sent",
      detail:
        "The customer, assigned worker and company were notified about the verified payment.",
      tone: "success",
    };
  if (crmEvent === "payment_notifications_failed")
    return {
      title: "Payment notification needs attention",
      detail: String(
        after.error ||
          "The payment is safely recorded, but one or more notification emails failed.",
      ),
      tone: "danger",
    };
  const changed = (key: string) =>
    JSON.stringify(before[key]) !== JSON.stringify(after[key]);

  const emailEvent = (kind: "confirmation" | "final", status: unknown) => {
    const label =
      kind === "confirmation" ? "Confirmation email" : "Final email";
    const recipient = String(after.email || "the customer");
    const normalized = String(status || "").replace("email.", "");
    if (normalized === "delivered")
      return {
        title: `${label} delivered`,
        detail: `Resend confirmed delivery to ${recipient}.`,
        tone: "success" as const,
      };
    if (normalized === "opened")
      return {
        title: `${label} opened`,
        detail: `The customer opened the email sent to ${recipient}.`,
        tone: "success" as const,
      };
    if (normalized === "clicked")
      return {
        title: `${label} link clicked`,
        detail: `The customer clicked a link in the email sent to ${recipient}.`,
        tone: "success" as const,
      };
    if (normalized === "delivery_delayed")
      return {
        title: `${label} delayed`,
        detail: "Resend is still attempting delivery.",
        tone: "warning" as const,
      };
    if (["failed", "bounced", "suppressed", "complained"].includes(normalized))
      return {
        title: `${label} not delivered`,
        detail: `Delivery to ${recipient} failed: ${normalized}.`,
        tone: "danger" as const,
      };
    return null;
  };

  if (changed("completed_email_delivery_status")) {
    const presentation = emailEvent(
      "final",
      after.completed_email_delivery_status,
    );
    if (presentation) return presentation;
  }
  if (changed("customer_email_delivery_status")) {
    const presentation = emailEvent(
      "confirmation",
      after.customer_email_delivery_status,
    );
    if (presentation) return presentation;
  }
  if (
    changed("completed_email_status") &&
    after.completed_email_status === "sent"
  )
    return {
      title: "Final email sent",
      detail: `The completed-service email was accepted by Resend for ${String(after.email || "the customer")}.`,
      tone: "success",
    };
  if (
    changed("customer_email_status") &&
    after.customer_email_status === "sent"
  )
    return {
      title: "Confirmation email sent",
      detail: `The order confirmation was accepted by Resend for ${String(after.email || "the customer")}.`,
      tone: "success",
    };
  if (
    changed("completed_email_status") &&
    after.completed_email_status === "failed"
  )
    return {
      title: "Final email failed",
      detail: String(
        after.completed_email_error || "The final email could not be sent.",
      ),
      tone: "danger",
    };
  if (
    changed("customer_email_status") &&
    after.customer_email_status === "failed"
  )
    return {
      title: "Confirmation email failed",
      detail: String(
        after.email_error || "The confirmation email could not be sent.",
      ),
      tone: "danger",
    };

  return {
    title: "Order updated",
    detail: historySummary(entry),
    tone: "default",
  };
}
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-3">
      <p className="text-xs font-bold uppercase text-gray-500">{label}</p>
      <p className="mt-1 break-words text-sm">{value}</p>
    </div>
  );
}

function assignmentWorker(assignment: WorkerAssignment) {
  const profile = Array.isArray(assignment.worker_profiles)
    ? assignment.worker_profiles[0]
    : assignment.worker_profiles;
  return profile || { full_name: "Unknown contractor", email: "—" };
}

function assignmentTime(value?: string | null) {
  if (!value) return "Not recorded";
  return new Intl.DateTimeFormat("en-IE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Madrid",
  }).format(new Date(value));
}

function AssignmentCard({
  assignment,
  compact = false,
}: {
  assignment: WorkerAssignment;
  compact?: boolean;
}) {
  const worker = assignmentWorker(assignment);
  const responseTone =
    assignment.response_status === "accepted"
      ? "border-emerald-200 bg-emerald-50"
      : assignment.response_status === "declined"
        ? "border-red-200 bg-red-50"
        : "border-yellow-200 bg-white";
  return (
    <div className={`mt-3 rounded-2xl border p-4 ${responseTone}`}>
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div className="min-w-0">
          <p className="truncate text-lg font-black">{worker.full_name}</p>
          <p className="truncate text-sm text-gray-600">{worker.email}</p>
          <p className="mt-2 text-sm font-black">
            Worker share: {money(Number(assignment.worker_share))}
          </p>
        </div>
        <span className="self-start rounded-full bg-black px-3 py-1 text-[10px] font-black uppercase text-white">
          {assignment.response_status}
        </span>
      </div>
      {!compact ? (
        <div className="mt-4 grid gap-2 text-xs sm:grid-cols-2">
          <div className="rounded-xl bg-white/75 p-3">
            <b>Assigned</b>
            <p className="mt-1 text-gray-600">
              {assignmentTime(assignment.assigned_at)}
            </p>
          </div>
          <div className="rounded-xl bg-white/75 p-3">
            <b>Email</b>
            <p className="mt-1 text-gray-600">
              {assignment.worker_email_delivery_status ||
                assignment.worker_email_status ||
                "pending"}
            </p>
          </div>
          <div className="rounded-xl bg-white/75 p-3">
            <b>Protected link</b>
            <p className="mt-1 text-gray-600">
              {assignment.email_link_viewed_at
                ? `Opened ${assignmentTime(assignment.email_link_viewed_at)}`
                : "Not opened yet"}
            </p>
          </div>
          <div className="rounded-xl bg-white/75 p-3">
            <b>Contractor response</b>
            <p className="mt-1 text-gray-600">
              {assignment.response_status === "accepted"
                ? `Accepted ${assignmentTime(assignment.accepted_at)}`
                : assignment.response_status === "declined"
                  ? `Declined ${assignmentTime(assignment.declined_at)}`
                  : "Waiting for response"}
            </p>
          </div>
          <div className="rounded-xl bg-white/75 p-3 sm:col-span-2">
            <b>Response confirmation email</b>
            <p className="mt-1 text-gray-600">
              {assignment.response_email_kind
                ? `${assignment.response_email_kind} · ${assignment.response_email_delivered_at ? "delivered" : assignment.response_email_status || "pending"}${assignment.response_email_opened_at ? ` · opened ${assignmentTime(assignment.response_email_opened_at)}` : ""}`
                : "Not sent yet"}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ManualOrderForm({
  manual,
  services,
  saving,
  onChange,
  onServices,
  onClose,
  onSubmit,
}: {
  manual: Record<string, string>;
  services: ManualService[];
  saving: boolean;
  onChange: (updates: Record<string, string>) => void;
  onServices: (services: ManualService[]) => void;
  onClose: () => void;
  onSubmit: (event: React.FormEvent) => Promise<void>;
}) {
  const catalog = getCatalogServices(manual.category);
  const manualTotal = services.reduce(
    (sum, service) =>
      sum + Number(service.price || 0) * Number(service.qty || 0),
    0,
  );
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 p-2 backdrop-blur-sm sm:p-6">
      <form
        onSubmit={onSubmit}
        className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-[#f5f5f2] shadow-2xl"
      >
        <div className="relative flex items-center justify-between overflow-hidden bg-[#111] p-6 text-white sm:p-7">
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-yellow-400/20 blur-3xl" />
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-yellow-400">
              <Sparkles className="h-4 w-4" />
              Spain operations operations
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              New manual order
            </h2>
            <p className="mt-2 text-sm text-white/55">
              Create a complete customer job or extract it from WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close manual order"
            className="relative rounded-2xl border border-white/15 bg-white/10 p-3 transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-5 p-4 sm:p-7">
          <AiOrderImport
            onApply={(order, parsedServices) => {
              onChange({
                full_name: order.fullName || manual.full_name,
                phone: order.phone || manual.phone,
                email: order.email || manual.email,
                city: order.city || manual.city,
                area: order.area || manual.area,
                address:
                  [order.houseAddress, order.postalCode]
                    .filter(Boolean)
                    .join(", ") || manual.address,
                apartment: order.apartmentNumber || manual.apartment,
                preferred_date: order.preferredDate || manual.preferred_date,
                preferred_time: order.preferredTime || manual.preferred_time,
                category: order.category || manual.category,
                notes: order.notes || manual.notes,
              });
              const mapped = parsedServices.map((service) => {
                const matched = findCatalogService(
                  order.category || manual.category,
                  service.label,
                );
                return {
                  id: matched?.id || "manual",
                  label: matched?.label || service.label || "Custom job",
                  price: service.price ?? matched?.price ?? 0,
                  qty: service.qty || 1,
                };
              });
              if (mapped.length) onServices(mapped);
            }}
          />
          <section className="rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-yellow-100 p-2">
                <UserRound className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-black">Customer &amp; location</h3>
                <p className="text-sm text-gray-500">
                  Contact and service address details
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Full name">
                <input
                  required
                  value={manual.full_name}
                  onChange={(e) => onChange({ full_name: e.target.value })}
                />
              </Field>
              <Field label="Phone">
                <input
                  required
                  value={manual.phone}
                  onChange={(e) => onChange({ phone: e.target.value })}
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={manual.email}
                  onChange={(e) => onChange({ email: e.target.value })}
                />
              </Field>
              <Field label="City">
                <select
                  value={manual.city}
                  onChange={(e) => onChange({ city: e.target.value })}
                >
                  {['Valencia', 'Madrid', 'Barcelona', 'Alicante'].map((city) => <option key={city}>{city}</option>)}
                </select>
              </Field>
              <Field label="Area / neighbourhood">
                <input
                  required
                  value={manual.area}
                  onChange={(e) => onChange({ area: e.target.value })}
                />
              </Field>
              <Field label="Service address">
                <input
                  required
                  value={manual.address}
                  onChange={(e) => onChange({ address: e.target.value })}
                />
              </Field>
              <Field label="Unit / apartment">
                <input
                  value={manual.apartment}
                  onChange={(e) => onChange({ apartment: e.target.value })}
                />
              </Field>
              <Field label="Category">
                <select
                  value={manual.category}
                  onChange={(e) => onChange({ category: e.target.value })}
                >
                  {categoryKeys.map((key) => (
                    <option key={key} value={CATEGORY_MAP[key]}>
                      {CATEGORY_MAP[key]}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </section>
          <section className="rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-yellow-100 p-2">
                <CalendarClock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-black">Appointment</h3>
                <p className="text-sm text-gray-500">
                  All times are Europe/Madrid
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Preferred date">
                <input
                  required
                  type="date"
                  value={manual.preferred_date}
                  onChange={(e) => onChange({ preferred_date: e.target.value })}
                />
              </Field>
              <Field label="Madrid time">
                <input
                  required
                  type="time"
                  value={manual.preferred_time}
                  onChange={(e) => onChange({ preferred_time: e.target.value })}
                />
              </Field>
            </div>
            <label className="mt-4 block text-sm font-bold">
              Notes
              <textarea
                value={manual.notes}
                onChange={(e) => onChange({ notes: e.target.value })}
                className="mt-2 min-h-24 w-full rounded-2xl border border-black/10 bg-[#f7f7f4] p-4 font-normal outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100"
              />
            </label>
          </section>
          <section className="rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-yellow-100 p-2">
                  <Wrench className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-black">
                    Services &amp; EUR pricing
                  </h3>
                  <p className="text-sm text-gray-500">
                    Review every line before creating the order
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-black px-4 py-2 text-right text-white">
                <p className="text-[10px] font-black uppercase text-white/50">
                  Total
                </p>
                <p className="text-xl font-black text-yellow-400">
                  {money(manualTotal)}
                </p>
              </div>
            </div>
            {services.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="mt-4 grid gap-2 rounded-2xl bg-[#f7f7f4] p-3 sm:grid-cols-[1fr_110px_90px] [&_input]:rounded-xl [&_input]:border-0 [&_input]:bg-white [&_input]:p-3 [&_select]:rounded-xl [&_select]:border-0 [&_select]:bg-white [&_select]:p-3"
              >
                <select
                  value={service.id}
                  onChange={(e) => {
                    const found = catalog.find(
                      (item) => item.id === e.target.value,
                    );
                    if (found)
                      onServices(
                        services.map((item, i) =>
                          i === index
                            ? {
                                id: found.id,
                                label: found.label,
                                price: found.price,
                                qty: item.qty,
                              }
                            : item,
                        ),
                      );
                  }}
                >
                  <option value={service.id}>{service.label}</option>
                  {catalog
                    .filter((item) => item.id !== service.id)
                    .map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                </select>
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  value={service.price}
                  onChange={(e) =>
                    onServices(
                      services.map((item, i) =>
                        i === index
                          ? { ...item, price: Number(e.target.value) }
                          : item,
                      ),
                    )
                  }
                />
                <input
                  type="number"
                  min="1"
                  value={service.qty}
                  onChange={(e) =>
                    onServices(
                      services.map((item, i) =>
                        i === index
                          ? { ...item, qty: Number(e.target.value) }
                          : item,
                      ),
                    )
                  }
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                onServices([
                  ...services,
                  { id: "manual", label: "Custom job", price: 0, qty: 1 },
                ])
              }
              className="mt-4 flex items-center gap-2 rounded-xl border border-dashed border-yellow-500 px-4 py-2.5 text-sm font-black text-yellow-800 transition hover:bg-yellow-50"
            >
              <Plus className="h-4 w-4" /> Add service line
            </button>
          </section>
          <div className="sticky bottom-0 -mx-4 -mb-4 flex flex-col-reverse items-center justify-between gap-3 border-t border-black/5 bg-white/95 p-4 backdrop-blur sm:-mx-7 sm:-mb-7 sm:flex-row sm:px-7">
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-2xl border border-black/10 px-5 py-3.5 font-black sm:w-auto"
            >
              Cancel
            </button>
            <button
              disabled={saving}
              className="w-full rounded-2xl bg-yellow-400 px-6 py-4 font-black shadow-[0_8px_25px_rgba(250,204,21,.3)] transition hover:bg-yellow-300 disabled:opacity-50 sm:w-auto"
            >
              {saving ? "Saving…" : "Create Spanish order"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
function AiOrderImport({
  onApply,
}: {
  onApply: (
    order: Record<string, string | null>,
    services: Array<{ label: string; price: number | null; qty: number }>,
  ) => void;
}) {
  const [text, setText] = useState(""),
    [images, setImages] = useState<string[]>([]),
    [loading, setLoading] = useState(false),
    [error, setError] = useState("");
  async function compressImage(file: File) {
    const source = URL.createObjectURL(file);
    try {
      const image = await new Promise<HTMLImageElement>((resolve, reject) => {
        const element = new Image();
        element.onload = () => resolve(element);
        element.onerror = () => reject(new Error("Could not read image"));
        element.src = source;
      });
      // Phone screenshots contain a lot of pixels but little extra information.
      // Keeping the long edge at 1200px makes the request reliable and cheaper.
      const maxEdge = 1200;
      const scale = Math.min(1, maxEdge / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Could not prepare image");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/jpeg", 0.62),
      );
      if (!blob) throw new Error("Could not compress image");
      return await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error("Could not read image"));
        reader.readAsDataURL(blob);
      });
    } finally {
      URL.revokeObjectURL(source);
    }
  }
  async function readFiles(files?: FileList | null) {
    if (!files?.length) return;
    setError("");
    try {
      const selected = Array.from(files);
      const imageFiles = selected.filter((file) => file.type.startsWith("image/"));
      const nonImage = selected.find((file) => !file.type.startsWith("image/"));
      if (imageFiles.length) {
        const urls = await Promise.all(imageFiles.slice(0, 6).map(compressImage));
        setImages((current) => [...current, ...urls].slice(0, 6));
      }
      if (!nonImage) return;
      if (nonImage.name.toLowerCase().endsWith(".zip")) {
        const archive = unzipSync(new Uint8Array(await nonImage.arrayBuffer()), {
          filter: (entry) => entry.name.toLowerCase().endsWith(".txt"),
        });
        const chat = Object.values(archive)[0];
        if (!chat) throw new Error("ZIP does not contain a WhatsApp TXT export");
        setText(strFromU8(chat).slice(-100000));
        return;
      }
      setText((await nonImage.text()).slice(-100000));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Could not read files");
    }
  }
  async function parse() {
    if (!text.trim() && !images.length) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/ai/parse-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, imageDataUrls: images }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "AI import failed");
      onApply(result.order, result.order.services || []);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "AI import failed");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="rounded-[1.75rem] border border-yellow-300 bg-gradient-to-br from-yellow-50 to-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-3">
        <span className="rounded-xl bg-black p-2.5 text-yellow-400">
          <WandSparkles className="h-5 w-5" />
        </span>
        <div>
          <p className="text-lg font-black">AI WhatsApp import</p>
          <p className="text-xs font-black uppercase tracking-[.12em] text-yellow-700">
            Optional fast entry
          </p>
        </div>
      </div>
      <p className="mt-1 text-xs text-gray-600">
        Paste a conversation or add WhatsApp TXT/ZIP export and screenshots.
        Review all values before saving.
      </p>
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="mt-4 min-h-28 w-full rounded-2xl border border-black/10 bg-white p-4 text-sm outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100"
        placeholder="Paste WhatsApp conversation…"
      />
      <div className="mt-3 flex flex-wrap gap-2">
        <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-black shadow-sm hover:border-yellow-500">
          <Upload className="h-4 w-4" />
          Add TXT, ZIP or screenshot
          <input
            type="file"
            accept=".txt,.zip,image/png,image/jpeg,image/webp"
            multiple
            onChange={(event) => {
              void readFiles(event.target.files);
              event.currentTarget.value = "";
            }}
            className="hidden"
          />
        </label>
        {images.length ? (
          <span className="px-2 py-2 text-xs text-gray-600">
            {images.length} screenshot(s) · select up to 6 at once
          </span>
        ) : null}
        <button
          type="button"
          disabled={loading || (!text.trim() && !images.length)}
          onClick={() => void parse()}
          className="rounded-xl bg-black px-4 py-2.5 text-sm font-black text-white disabled:opacity-50"
        >
          {loading ? "Reading…" : "Extract with AI"}
        </button>
      </div>
      {error ? <p className="mt-2 text-xs text-red-700">{error}</p> : null}
    </section>
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
    <label className="text-sm font-bold">
      {label}
      <span className="mt-2 block [&_input]:w-full [&_input]:rounded-2xl [&_input]:border [&_input]:border-black/10 [&_input]:bg-[#f7f7f4] [&_input]:p-3.5 [&_input]:outline-none [&_input]:focus:border-yellow-500 [&_input]:focus:bg-white [&_input]:focus:ring-4 [&_input]:focus:ring-yellow-100 [&_select]:w-full [&_select]:rounded-2xl [&_select]:border [&_select]:border-black/10 [&_select]:bg-[#f7f7f4] [&_select]:p-3.5 [&_select]:outline-none [&_select]:focus:border-yellow-500 [&_select]:focus:ring-4 [&_select]:focus:ring-yellow-100">
        {children}
      </span>
    </label>
  );
}

  
