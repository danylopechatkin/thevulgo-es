"use client";

import { formatMadridDateTime } from "@/lib/time";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LogOut } from "lucide-react";

type OrderStatus = "new" | "in_progress" | "done";

type ServiceItem = {
  label?: string;
  qty?: number;
  price?: number;
  subtotal?: number;
};

type ManualService = {
  label: string;
  price: number;
  qty: number;
};

type AiParsedOrder = {
  fullName: string | null;
  phone: string | null;
  email: string | null;

  category:
    | "TV Mounting"
    | "Electrical"
    | "Plumbing"
    | "Furniture Assembly"
    | "Drywall"
    | "Repairs"
    | "Doors & Hardware"
    | "Smart Home"
    | "Kitchen"
    | "Bathroom"
    | "Move-In Setup"
    | "Exterior";

  city: string | null;
  area: string | null;
  houseAddress: string | null;

postalCode: string | null;

apartmentNumber: string | null;
  addressDetails: string | null;

  preferredDate: string | null;
  preferredTime: string | null;

  notes: string | null;

  services: Array<{
    label: string;
    price: number | null;
    qty: number;
  }>;

  missingFields: string[];
  warnings: string[];
};

type Order = {
  id: string;
  order_number: number | null;
  full_name: string;
  phone: string;
  email: string;
  city: string;
  area: string;
  address: string;
  apartment?: string;
  address_details?: string;
  preferred_date: string | null;
  preferred_time: string;
  subtotal: number;
  iva: number;
  total: number;
  status: OrderStatus;
  email_sent: boolean;
  reminder_sent: boolean;
  completed_email_sent: boolean;
  category?: string;
  services?: ServiceItem[];
  notes?: string;
  internal_notes?: string;
  scheduled_at?: string;
  referral_code?: string | null;
  completed_at?: string | null;
};

type ClientProfile = {
  key: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  area: string;
  address: string;
  apartment: string;
  addressDetails: string;
  orders: Order[];
  completedNetPrice: number;
  bookedNetPrice: number;
  lastVisit: string | null;
};

const MANUAL_CATEGORIES = [
  "TV Mounting",
  "Electrical",
  "Plumbing",
  "Furniture Assembly",
  "Drywall",
  "Repairs",
  "Doors & Hardware",
  "Smart Home",
  "Kitchen",
  "Bathroom",
  "Move-In Setup",
  "Exterior",
];
const MADRID_TIME_ZONE = "Europe/Madrid";

function getMadridDateKey(date: Date) {

  return new Intl.DateTimeFormat("en-CA", {

    timeZone: MADRID_TIME_ZONE,

    year: "numeric",

    month: "2-digit",

    day: "2-digit",

  }).format(date);

}

function getMonthDate(monthKey: string) {

  const [year, month] = monthKey.split("-").map(Number);

  return new Date(Date.UTC(year, month - 1, 1, 12, 0, 0));

}

export default function AdminClient() {
  const [internalNotes, setInternalNotes] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [selected, setSelected] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  const [calendarMonth, setCalendarMonth] = useState(() =>
  getMadridDateKey(new Date()).slice(0, 7)
);

  const [isCompleting, setIsCompleting] = useState(false);
  const [showCompleteConfirm, setShowCompleteConfirm] = useState(false);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const [showManualForm, setShowManualForm] = useState(false);
  const [isCreatingManual, setIsCreatingManual] = useState(false);
  const [manualIncludeIva, setManualIncludeIva] = useState(true);
  const [isSavingPricing, setIsSavingPricing] = useState(false);
  const [showClientSuggestions, setShowClientSuggestions] = useState(false);
  const [showClients, setShowClients] = useState(false);
  const [selectedClient, setSelectedClient] = useState<ClientProfile | null>(null);
  const [clientSearch, setClientSearch] = useState("");
  const [showMobileMetrics, setShowMobileMetrics] = useState(false);
  const [showMobileMonthCalendar, setShowMobileMonthCalendar] = useState(false);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(() =>
    getMadridDateKey(new Date())
  );

  const [aiOrderText, setAiOrderText] = useState("");

const [isParsingAiOrder, setIsParsingAiOrder] = useState(false);

const [aiOrderError, setAiOrderError] = useState("");

const [aiMissingFields, setAiMissingFields] = useState<string[]>([]);

const [aiWarnings, setAiWarnings] = useState<string[]>([]);

  const [manualOrder, setManualOrder] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "Valencia",
    area: "",
    houseAddress: "",
    apartmentNumber: "",
    addressDetails: "",
    preferredDate: "",
    preferredTime: "",
    category: "Furniture Assembly",
    notes: "",
  });

  const [manualServices, setManualServices] = useState<ManualService[]>([
    {
      label: "Servicio manual",
      price: 49,
      qty: 1,
    },
  ]);

  const manualSubtotal = useMemo(() => {
    return manualServices.reduce(
      (sum, item) => sum + Number(item.price || 0) * Number(item.qty || 0),
      0
    );
  }, [manualServices]);

  const manualIva = manualIncludeIva
    ? Number((manualSubtotal * 0.21).toFixed(2))
    : 0;
  const manualTotal = Number((manualSubtotal + manualIva).toFixed(2));

  const clientProfiles = useMemo(() => {
    const profiles = new Map<string, ClientProfile>();

    for (const order of orders) {
      const normalizedPhone = order.phone?.replace(/\D/g, "");
      const normalizedEmail = order.email?.trim().toLowerCase();
      const normalizedName = order.full_name?.trim().toLowerCase();
      const key = normalizedPhone || normalizedEmail || normalizedName;
      if (!key) continue;

      const existing = profiles.get(key);
      const visitDate =
        order.completed_at ||
        order.scheduled_at ||
        (order.preferred_date ? `${order.preferred_date}T12:00:00` : null);

      if (!existing) {
        profiles.set(key, {
          key,
          fullName: order.full_name || "Unknown client",
          phone: order.phone || "",
          email: order.email || "",
          city: order.city || "",
          area: order.area || "",
          address: order.address || "",
          apartment: order.apartment || "",
          addressDetails: order.address_details || "",
          orders: [order],
          completedNetPrice:
            order.status === "done" ? Number(order.subtotal || 0) : 0,
          bookedNetPrice: Number(order.subtotal || 0),
          lastVisit: visitDate,
        });
        continue;
      }

      existing.orders.push(order);
      existing.bookedNetPrice += Number(order.subtotal || 0);
      if (order.status === "done") {
        existing.completedNetPrice += Number(order.subtotal || 0);
      }

      if (
        visitDate &&
        (!existing.lastVisit || new Date(visitDate) > new Date(existing.lastVisit))
      ) {
        existing.lastVisit = visitDate;
        existing.fullName = order.full_name || existing.fullName;
        existing.phone = order.phone || existing.phone;
        existing.email = order.email || existing.email;
        existing.city = order.city || existing.city;
        existing.area = order.area || existing.area;
        existing.address = order.address || existing.address;
        existing.apartment = order.apartment || existing.apartment;
        existing.addressDetails =
          order.address_details || existing.addressDetails;
      }
    }

    return Array.from(profiles.values()).sort((a, b) => {
      if (!a.lastVisit) return 1;
      if (!b.lastVisit) return -1;
      return new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime();
    });
  }, [orders]);

  const knownClients = useMemo(
    () => clientProfiles.map((client) => client.orders[0]),
    [clientProfiles]
  );

  const filteredClientProfiles = useMemo(() => {
    const query = clientSearch.trim().toLowerCase();
    if (!query) return clientProfiles;

    return clientProfiles.filter((client) =>
      [client.fullName, client.phone, client.email, client.area, client.address]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [clientProfiles, clientSearch]);

  const clientSuggestions = useMemo(() => {
    const query = manualOrder.fullName.trim().toLowerCase();

    return knownClients
      .filter((client) => {
        if (!query) return true;

        return [client.full_name, client.phone, client.email].some((value) =>
          value?.toLowerCase().includes(query)
        );
      })
      .slice(0, 8);
  }, [knownClients, manualOrder.fullName]);

  const selectKnownClient = (client: Order) => {
    setManualOrder((current) => ({
      ...current,
      fullName: client.full_name || "",
      phone: client.phone || "",
      email: client.email || "",
      city: client.city || "Valencia",
      area: client.area || "",
      houseAddress: client.address || "",
      apartmentNumber: client.apartment || "",
      addressDetails: client.address_details || "",
    }));
    setShowClientSuggestions(false);
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("LOGOUT ERROR:", error);
        return;
      }

      window.location.href = "/admin-login";
    } catch (err) {
      console.error("LOGOUT EXCEPTION:", err);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const loadOrders = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("LOAD ORDERS ERROR:", error);
      setLoading(false);
      return;
    }

    setOrders((data as Order[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    if (selected) {
      setInternalNotes(selected.internal_notes || "");
    }
  }, [selected]);

  const metricOrders = useMemo(
    () =>
      orders.filter((order) =>
        order.preferred_date?.startsWith(calendarMonth)
      ),
    [orders, calendarMonth]
  );

  const metrics = useMemo(() => {
    const totalOrders = metricOrders.length;

    const grossRevenue = metricOrders.reduce(
      (sum, o) => sum + Number(o.total || 0),
      0
    );

    const ivaReserve = metricOrders.reduce(
      (sum, o) => sum + Number(o.iva || 0),
      0
    );

    const netRevenue = metricOrders.reduce(
      (sum, o) => sum + Number(o.subtotal || 0),
      0
    );

    const newCount = metricOrders.filter((o) => o.status === "new").length;
    const progress = metricOrders.filter(
      (o) => o.status === "in_progress"
    ).length;
    const done = metricOrders.filter((o) => o.status === "done").length;

    return {
      totalOrders,
      grossRevenue,
      ivaReserve,
      netRevenue,
      newCount,
      progress,
      done,
    };
  }, [metricOrders]);

  const ordersByDate = useMemo(() => {
  const grouped = new Map<string, Order[]>();

  orders.forEach((order) => {
    if (!order.preferred_date) return;

    const existingOrders = grouped.get(order.preferred_date) || [];
    existingOrders.push(order);
    grouped.set(order.preferred_date, existingOrders);
  });

  grouped.forEach((dayOrders) => {
    dayOrders.sort((a, b) =>
      String(a.preferred_time || "").localeCompare(
        String(b.preferred_time || "")
      )
    );
  });

  return grouped;
}, [orders]);

const calendarDays = useMemo(() => {
  const [year, month] = calendarMonth.split("-").map(Number);

  const firstDayOfMonth = new Date(
    Date.UTC(year, month - 1, 1, 12, 0, 0)
  );

  const daysInMonth = new Date(
    Date.UTC(year, month, 0, 12, 0, 0)
  ).getUTCDate();

  // Переводим воскресенье = 0 в формат:
  // понедельник = 0, вторник = 1 ... воскресенье = 6
  const mondayBasedWeekday = (firstDayOfMonth.getUTCDay() + 6) % 7;

  // Количество ячеек: 35 или 42, чтобы показать полные недели
  const totalCalendarCells =
    Math.ceil((mondayBasedWeekday + daysInMonth) / 7) * 7;

  const calendarStartDate = new Date(
    Date.UTC(
      year,
      month - 1,
      1 - mondayBasedWeekday,
      12,
      0,
      0
    )
  );

  return Array.from({ length: totalCalendarCells }).map((_, index) => {
    const date = new Date(calendarStartDate);
    date.setUTCDate(calendarStartDate.getUTCDate() + index);

    const dateKey = getMadridDateKey(date);
    const cellMonthKey = dateKey.slice(0, 7);

    return {
      date,
      dateKey,
      isCurrentMonth: cellMonthKey === calendarMonth,
      isToday: dateKey === getMadridDateKey(new Date()),
      orders: ordersByDate.get(dateKey) || [],
    };
  });
}, [calendarMonth, ordersByDate]);

const calendarMonthTitle = useMemo(() => {
  return getMonthDate(calendarMonth).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}, [calendarMonth]);

const selectedDayOrders = ordersByDate.get(selectedCalendarDate) || [];

const selectedDayTitle = useMemo(() => {
  const [year, month, day] = selectedCalendarDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day, 12)).toLocaleDateString(
    "en-GB",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }
  );
}, [selectedCalendarDate]);

const changeCalendarMonth = (offset: number) => {
  setCalendarMonth((currentMonth) => {
    const [year, month] = currentMonth.split("-").map(Number);

    const newDate = new Date(
      Date.UTC(year, month - 1 + offset, 1, 12, 0, 0)
    );

    return `${newDate.getUTCFullYear()}-${String(
      newDate.getUTCMonth() + 1
    ).padStart(2, "0")}`;
  });
};

const goToCurrentMonth = () => {
  setCalendarMonth(getMadridDateKey(new Date()).slice(0, 7));
};

const changeCalendarDay = (offset: number) => {
  const [year, month, day] = selectedCalendarDate.split("-").map(Number);
  const nextDate = new Date(Date.UTC(year, month - 1, day + offset, 12));
  const nextDateKey = getMadridDateKey(nextDate);
  setSelectedCalendarDate(nextDateKey);
  setCalendarMonth(nextDateKey.slice(0, 7));
};

const goToToday = () => {
  const today = getMadridDateKey(new Date());
  setSelectedCalendarDate(today);
  setCalendarMonth(today.slice(0, 7));
};

const parseOrderWithAi = async () => {
  const cleanText = aiOrderText.trim();

  if (!cleanText) {
    setAiOrderError("Paste the client message or order details first.");
    return;
  }

  try {
    setIsParsingAiOrder(true);
    setAiOrderError("");
    setAiMissingFields([]);
    setAiWarnings([]);

    const response = await fetch("/api/admin/ai/parse-order", {
  method: "POST",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
      body: JSON.stringify({
        text: cleanText,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.error || "Failed to parse order");
    }

    const parsed = result.order as AiParsedOrder;

    setManualOrder({
      fullName: parsed.fullName || "",
      email: parsed.email || "",
      phone: parsed.phone || "",
      city: parsed.city || "Valencia",
      area: parsed.area || "",
      houseAddress: [parsed.houseAddress, parsed.postalCode]
  .filter(
    (value): value is string =>
      Boolean(value?.trim())
  )
  .filter(
    (value, index, values) =>
      values.findIndex(
        (item) =>
          item.trim().toLowerCase() ===
          value.trim().toLowerCase()
      ) === index
  )
  .join(", "),
      apartmentNumber: parsed.apartmentNumber || "",
      addressDetails: parsed.addressDetails || "",
      preferredDate: parsed.preferredDate || "",
      preferredTime: parsed.preferredTime || "",
      category: parsed.category || "Repairs",
      notes: parsed.notes || "",
    });

    const parsedServices: ManualService[] = parsed.services.map((service) => ({
      label: service.label || "Servicio manual",
      price: service.price ?? 0,
      qty: service.qty || 1,
    }));

    setManualServices(
      parsedServices.length > 0
        ? parsedServices
        : [
            {
              label: "Servicio manual",
              price: 0,
              qty: 1,
            },
          ]
    );

    setAiMissingFields(parsed.missingFields || []);
    setAiWarnings(parsed.warnings || []);
  } catch (error) {
    console.error("AI ORDER PARSE ERROR:", error);

    setAiOrderError(
      error instanceof Error
        ? error.message
        : "Unexpected error while parsing the order."
    );
  } finally {
    setIsParsingAiOrder(false);
  }
};

  const createManualOrder = async () => {
    if (!manualOrder.fullName.trim()) {
      alert("Client name is required");
      return;
    }

    if (!manualOrder.phone.trim() && !manualOrder.email.trim()) {
      alert("Phone or email is required");
      return;
    }

    if (!manualOrder.area.trim()) {
      alert("Area is required");
      return;
    }

    if (!manualOrder.houseAddress.trim()) {
      alert("Address is required");
      return;
    }

    if (!manualOrder.preferredDate || !manualOrder.preferredTime) {
      alert("Date and time are required");
      return;
    }

    const cleanServices = manualServices
      .filter((s) => s.label.trim() && Number(s.price) > 0 && Number(s.qty) > 0)
      .map((s) => ({
        id: s.label.toLowerCase().replace(/\s+/g, "-"),
        label: s.label.trim(),
        price: Number(s.price),
        qty: Number(s.qty),
        subtotal: Number(s.price) * Number(s.qty),
        badge: "Manual",
      }));

    if (cleanServices.length === 0) {
      alert("Add at least one service");
      return;
    }

    const subtotal = Number(
      cleanServices.reduce((sum, item) => sum + item.subtotal, 0).toFixed(2)
    );

    const iva = manualIncludeIva
      ? Number((subtotal * 0.21).toFixed(2))
      : 0;
    const total = Number((subtotal + iva).toFixed(2));

    const scheduledAt = new Date(
      `${manualOrder.preferredDate}T${manualOrder.preferredTime}:00+02:00`
    ).toISOString();

    try {
      setIsCreatingManual(true);

      const { error } = await supabase.from("orders").insert([
        {
          full_name: manualOrder.fullName.trim(),
          email: manualOrder.email.trim(),
          phone: manualOrder.phone.trim(),
          city: manualOrder.city.trim() || "Valencia",
          area: manualOrder.area.trim(),
          address: manualOrder.houseAddress.trim(),
          apartment: manualOrder.apartmentNumber.trim(),
          address_details: manualOrder.addressDetails.trim(),
          category: manualOrder.category,
          services: cleanServices,
          subtotal,
          iva,
          total,
          status: "new",
          preferred_date: manualOrder.preferredDate,
          preferred_time: manualOrder.preferredTime,
          scheduled_at: scheduledAt,
          notes: manualOrder.notes.trim(),
          email_sent: false,
          reminder_sent: false,
          completed_email_sent: false,
          referral_code: null,
          locale: "es",
        },
      ]);

      if (error) {
        console.error("CREATE MANUAL ORDER ERROR:", error);
        alert("Error creating manual order");
        return;
      }

      setManualOrder({
        fullName: "",
        email: "",
        phone: "",
        city: "Valencia",
        area: "",
        houseAddress: "",
        apartmentNumber: "",
        addressDetails: "",
        preferredDate: "",
        preferredTime: "",
        category: "Furniture Assembly",
        notes: "",
      });

      setManualServices([
        {
          label: "Servicio manual",
          price: 49,
          qty: 1,
        },
      ]);
      setManualIncludeIva(true);

      setShowManualForm(false);
      await loadOrders();
    } finally {
      setIsCreatingManual(false);
    }
  };

  const updateStatus = async (id: string, status: OrderStatus) => {
    const { error } = await supabase
      .from("orders")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("UPDATE STATUS ERROR:", error);
      return;
    }

    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    );

    if (selected?.id === id) {
      setSelected((prev) => (prev ? { ...prev, status } : prev));
    }
  };

  const openDeleteConfirm = (order: Order) => {
    setSelected(order);
    setShowDeleteConfirm(true);
  };

  const deleteOrder = async () => {
    if (!selected) return;

    try {
      setIsDeleting(true);

      const { error } = await supabase
        .from("orders")
        .delete()
        .eq("id", selected.id);

      if (error) {
        console.error("DELETE ORDER ERROR:", error);
        alert("Error deleting order");
        return;
      }

      setOrders((prev) => prev.filter((o) => o.id !== selected.id));
      setSelected(null);
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error("DELETE ORDER EXCEPTION:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const saveInternalNotes = async () => {
    if (!selected) return;

    const { error } = await supabase
      .from("orders")
      .update({ internal_notes: internalNotes })
      .eq("id", selected.id);

    if (error) {
      console.error("SAVE INTERNAL NOTES ERROR:", error);
      return;
    }

    setOrders((prev) =>
      prev.map((o) =>
        o.id === selected.id ? { ...o, internal_notes: internalNotes } : o
      )
    );

    setSelected((prev) =>
      prev ? { ...prev, internal_notes: internalNotes } : prev
    );
  };

  const recalculateSelectedPricing = (
    order: Order,
    services: ServiceItem[],
    includeIva: boolean
  ): Order => {
    const normalizedServices = services.map((service) => {
      const price = Number(service.price || 0);
      const qty = Number(service.qty || 0);
      return { ...service, price, qty, subtotal: price * qty };
    });
    const subtotal = Number(
      normalizedServices
        .reduce((sum, service) => sum + Number(service.subtotal || 0), 0)
        .toFixed(2)
    );
    const iva = includeIva ? Number((subtotal * 0.21).toFixed(2)) : 0;

    return {
      ...order,
      services: normalizedServices,
      subtotal,
      iva,
      total: Number((subtotal + iva).toFixed(2)),
    };
  };

  const updateSelectedService = (
    index: number,
    field: "label" | "price" | "qty",
    value: string | number
  ) => {
    setSelected((current) => {
      if (!current) return current;
      const services = [...(current.services || [])];
      services[index] = { ...services[index], [field]: value };
      return recalculateSelectedPricing(current, services, current.iva > 0);
    });
  };

  const setSelectedIvaEnabled = (includeIva: boolean) => {
    setSelected((current) =>
      current
        ? recalculateSelectedPricing(
            current,
            current.services || [],
            includeIva
          )
        : current
    );
  };

  const saveOrderPricing = async () => {
    if (!selected) return;

    const services = (selected.services || []).map((service) => ({
      ...service,
      label: service.label?.trim() || "Servicio manual",
      price: Number(service.price || 0),
      qty: Number(service.qty || 0),
      subtotal: Number(service.subtotal || 0),
    }));

    try {
      setIsSavingPricing(true);
      const { data, error } = await supabase
        .from("orders")
        .update({
          services,
          subtotal: selected.subtotal,
          iva: selected.iva,
          total: selected.total,
        })
        .eq("id", selected.id)
        .select("*")
        .single();

      if (error) throw error;

      const updatedOrder = data as Order;
      setOrders((current) =>
        current.map((order) =>
          order.id === updatedOrder.id ? updatedOrder : order
        )
      );
      setSelected(updatedOrder);
      alert("Pricing updated");
    } catch (error) {
      console.error("UPDATE PRICING ERROR:", error);
      alert("Error updating pricing");
    } finally {
      setIsSavingPricing(false);
    }
  };

  const updateOrderSchedule = async () => {
  if (!selected) return;

  const cleanDate = selected.preferred_date;
  const cleanTime = selected.preferred_time?.slice(0, 5);

  if (!cleanDate || !cleanTime) {
    alert("Date and time are required");
    return;
  }

  const scheduledAt = new Date(`${cleanDate}T${cleanTime}:00+02:00`).toISOString();

  const updatedOrder = {
    ...selected,
    preferred_date: cleanDate,
    preferred_time: cleanTime,
    scheduled_at: scheduledAt,
  };

  const { data, error } = await supabase
    .from("orders")
    .update({
      preferred_date: cleanDate,
      preferred_time: cleanTime,
      scheduled_at: scheduledAt,
    })
    .eq("id", selected.id)
    .select("*")
    .single();

  if (error) {
    console.error("UPDATE SCHEDULE ERROR:", error);
    alert("Error updating schedule");
    return;
  }

  const freshOrder = (data as Order) || updatedOrder;

  setOrders((prev) =>
    prev.map((order) => (order.id === selected.id ? freshOrder : order))
  );

  setSelected(freshOrder);

  alert("Schedule updated");
};

  const completeOrder = async () => {
    if (!selected) return;

    try {
      setIsCompleting(true);

      const response = await fetch("/api/orders/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: selected.id,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to complete order");
      }

      setOrders((prev) =>
        prev.map((o) =>
          o.id === selected.id
            ? {
                ...o,
                status: "done",
                completed_email_sent: true,
                referral_code: result.referralCode || o.referral_code,
                completed_at: result.completedAt || o.completed_at,
              }
            : o
        )
      );

      setSelected((prev) =>
        prev
          ? {
              ...prev,
              status: "done",
              completed_email_sent: true,
              referral_code: result.referralCode || prev.referral_code,
              completed_at: result.completedAt || prev.completed_at,
            }
          : prev
      );

      setShowCompleteConfirm(false);
    } catch (error) {
      console.error("COMPLETE ORDER ERROR:", error);
    } finally {
      setIsCompleting(false);
    }
  };

  const formatOrderId = (order: Order) => {
    if (order.order_number) {
      return `TVG-${String(order.order_number).padStart(4, "0")}`;
    }
    return order.id.slice(0, 8).toUpperCase();
  };

  const formatStatusLabel = (status: OrderStatus) => {
    if (status === "new") return "NEW";
    if (status === "in_progress") return "IN PROGRESS";
    return "DONE";
  };

  return (
    <div className="min-h-screen bg-white px-3 py-4 text-black sm:p-6">
      <div className="mx-auto max-w-7xl space-y-5 sm:space-y-8">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_44px] items-center gap-2 rounded-3xl border border-gray-100 bg-[#fffdf7] p-3 shadow-sm sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:gap-3 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
          <button
            type="button"
            onClick={() => setShowClients(true)}
            className="rounded-2xl border border-yellow-400 bg-white px-3 py-3 text-sm font-extrabold text-black shadow-sm transition hover:bg-yellow-50 hover:shadow-md sm:px-5"
          >
            Clients ({clientProfiles.length})
          </button>

          <button
            type="button"
            onClick={() => setShowManualForm(true)}
            className="rounded-2xl bg-yellow-400 px-3 py-3 text-sm font-extrabold text-black shadow-md transition hover:scale-[1.02] hover:shadow-lg sm:px-5"
          >
            <span className="sm:hidden">+ Add order</span>
            <span className="hidden sm:inline">+ Add manual order</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            aria-label="Log out"
            title="Log out"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 bg-white text-black shadow-sm transition hover:bg-gray-50 hover:shadow-md disabled:opacity-60 sm:h-auto sm:w-auto sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm sm:font-extrabold"
          >
            <LogOut
              aria-hidden="true"
              className={`h-5 w-5 sm:hidden ${isLoggingOut ? "animate-pulse" : ""}`}
            />
            <span className="hidden sm:inline">
              {isLoggingOut ? "Signing out..." : "Log out"}
            </span>
          </button>
        </div>

        <div className="w-full rounded-3xl border border-yellow-400 bg-[#fffdf6] p-5 text-left shadow-md sm:hidden">
          <div className="flex items-center justify-between gap-2 border-b border-yellow-200 pb-4">
            <button
              type="button"
              onClick={() => changeCalendarMonth(-1)}
              aria-label="Previous month"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-400 bg-white text-xl font-extrabold text-black shadow-sm active:scale-95"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goToCurrentMonth}
              className="min-w-0 flex-1 text-center"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                Overview
              </p>
              <p className="mt-1 truncate text-base font-extrabold capitalize text-black">
                {calendarMonthTitle}
              </p>
            </button>

            <button
              type="button"
              onClick={() => changeCalendarMonth(1)}
              aria-label="Next month"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-400 bg-white text-xl font-extrabold text-black shadow-sm active:scale-95"
            >
              ›
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShowMobileMetrics((current) => !current)}
            aria-expanded={showMobileMetrics}
            className="mt-4 w-full text-left transition active:scale-[0.99]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-3xl font-extrabold tracking-tight text-black">
                  €{metrics.netRevenue.toFixed(2)}
                </p>
                <p className="mt-1 text-xs text-gray-500">Net revenue this month</p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-xl font-extrabold text-black">
                {showMobileMetrics ? "−" : "+"}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2 border-t border-yellow-200 pt-4 text-center">
              <MobileOverviewValue label="Orders" value={metrics.totalOrders} />
              <MobileOverviewValue label="New" value={metrics.newCount} />
              <MobileOverviewValue label="Active" value={metrics.progress} />
              <MobileOverviewValue label="Done" value={metrics.done} />
            </div>

            <p className="mt-4 text-center text-xs font-bold text-gray-500">
              {showMobileMetrics
                ? "Hide all statistics"
                : "Tap to show all statistics"}
            </p>
          </button>
        </div>

        <div className="hidden items-center justify-between rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:flex">
          <button
            type="button"
            onClick={() => changeCalendarMonth(-1)}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-bold hover:border-yellow-400 hover:bg-yellow-50"
          >
            ← Previous
          </button>
          <button type="button" onClick={goToCurrentMonth} className="text-center">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Overview
            </span>
            <span className="mt-1 block text-lg font-extrabold capitalize text-black">
              {calendarMonthTitle}
            </span>
          </button>
          <button
            type="button"
            onClick={() => changeCalendarMonth(1)}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-bold hover:border-yellow-400 hover:bg-yellow-50"
          >
            Next →
          </button>
        </div>

        <div
          className={`${showMobileMetrics ? "grid" : "hidden"} grid-cols-2 gap-3 sm:grid sm:grid-cols-2 sm:gap-4 xl:grid-cols-7`}
        >
          <MetricCard
            title="Gross booked"
            value={`€${metrics.grossRevenue.toFixed(2)}`}
            subtitle="This month including IVA"
          />

          <MetricCard
            title="IVA reserve"
            value={`€${metrics.ivaReserve.toFixed(2)}`}
            subtitle="This month tax reserve"
          />

          <MetricCard
            title="Net revenue"
            value={`€${metrics.netRevenue.toFixed(2)}`}
            subtitle="This month before expenses"
          />

          <MetricCard
            title="Orders"
            value={metrics.totalOrders}
            subtitle="Orders this month"
          />

          <StatusCard title="New" value={metrics.newCount} />
          <StatusCard title="In Progress" value={metrics.progress} />
          <StatusCard title="Done" value={metrics.done} />
        </div>

        <div className="rounded-[28px] border border-yellow-400 bg-white p-4 shadow-xl sm:p-6">
          <div className="sm:hidden">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">
                  Calendar
                </p>
                <h2 className="mt-1 text-xl font-extrabold capitalize tracking-tight text-black">
                  {showMobileMonthCalendar ? calendarMonthTitle : selectedDayTitle}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {showMobileMonthCalendar
                    ? `${calendarDays
                        .filter((day) => day.isCurrentMonth)
                        .reduce((sum, day) => sum + day.orders.length, 0)} bookings this month`
                    : `${selectedDayOrders.length} bookings this day`}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (showMobileMonthCalendar) {
                    goToToday();
                    setShowMobileMonthCalendar(false);
                  } else {
                    setShowMobileMonthCalendar(true);
                  }
                }}
                className="shrink-0 rounded-xl bg-yellow-400 px-3 py-2.5 text-xs font-extrabold text-black shadow-sm"
              >
                {showMobileMonthCalendar ? "Day view" : "Month view"}
              </button>
            </div>

            {showMobileMonthCalendar && (
              <div className="mt-5 grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => changeCalendarMonth(-1)}
                  className="rounded-xl border border-gray-300 bg-white px-2 py-2.5 text-xs font-extrabold shadow-sm"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={goToCurrentMonth}
                  className="rounded-xl bg-yellow-400 px-2 py-2.5 text-xs font-extrabold text-black shadow-sm"
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={() => changeCalendarMonth(1)}
                  className="rounded-xl border border-gray-300 bg-white px-2 py-2.5 text-xs font-extrabold shadow-sm"
                >
                  Next →
                </button>
              </div>
            )}

            {!showMobileMonthCalendar && (
              <>
                <div className="mt-5 grid grid-cols-[44px_1fr_44px] items-center gap-2">
                  <button
                    type="button"
                    onClick={() => changeCalendarDay(-1)}
                    aria-label="Previous day"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400 bg-white text-xl font-extrabold shadow-sm"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={goToToday}
                    className="rounded-xl bg-yellow-400 px-4 py-3 text-sm font-extrabold text-black shadow-sm"
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    onClick={() => changeCalendarDay(1)}
                    aria-label="Next day"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400 bg-white text-xl font-extrabold shadow-sm"
                  >
                    ›
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  {selectedDayOrders.length > 0 ? (
                    <>
                      <TransitTimeBetweenOrders
                        toOrder={selectedDayOrders[0]}
                        useStartAddress
                      />
                      {selectedDayOrders.map((order, orderIndex) => (
                        <div key={order.id}>
                          <button
                            type="button"
                            onClick={() => setSelected(order)}
                            className="w-full rounded-2xl border border-yellow-400 bg-[#fffdf6] p-4 text-left shadow-sm transition active:scale-[0.99]"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <p className="truncate text-base font-extrabold text-black">
                                  {order.preferred_time?.slice(0, 5) || "—"}{" "}
                                  {order.full_name}
                                </p>
                                <p className="mt-1 truncate text-sm text-gray-500">
                                  {order.area || order.city || "—"}
                                </p>
                              </div>
                              <span className="shrink-0 text-base font-extrabold text-black">
                                €{Number(order.total || 0).toFixed(2)}
                              </span>
                            </div>
                            <span className="mt-3 inline-flex rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase text-gray-500">
                              {formatStatusLabel(order.status)}
                            </span>
                          </button>
                          {orderIndex < selectedDayOrders.length - 1 && (
                            <TransitTimeBetweenOrders
                              fromOrder={order}
                              toOrder={selectedDayOrders[orderIndex + 1]}
                            />
                          )}
                          </div>
                      ))}
                    </>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-gray-300 bg-[#fffdf7] px-4 py-10 text-center">
                      <p className="text-lg font-extrabold text-black">Free day</p>
                      <p className="mt-1 text-sm text-gray-500">No bookings scheduled</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="hidden flex-col gap-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">
                Calendar
              </p>
              <h2 className="mt-1 text-2xl font-extrabold capitalize tracking-tight text-black">
                {calendarMonthTitle}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {calendarDays
                  .filter((day) => day.isCurrentMonth)
                  .reduce((sum, day) => sum + day.orders.length, 0)}{" "}
                bookings this month
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => changeCalendarMonth(-1)}
                className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-black shadow-sm transition hover:border-yellow-400 hover:bg-yellow-50"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={goToCurrentMonth}
                className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black shadow-sm transition hover:scale-[1.02]"
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => changeCalendarMonth(1)}
                className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-black shadow-sm transition hover:border-yellow-400 hover:bg-yellow-50"
              >
                Next →
              </button>
            </div>
          </div>

  <div className={`${showMobileMonthCalendar ? "mt-6 block" : "hidden"} overflow-x-auto sm:mt-6 sm:block`}>
    <div className="min-w-[1050px]">
      <div className="grid grid-cols-7 gap-2">
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
          (weekday) => (
            <div
              key={weekday}
              className="rounded-xl bg-[#fffdf4] px-3 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-gray-500"
            >
              {weekday}
            </div>
          )
        )}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2">
        {calendarDays.map((day) => (
          <div
            key={day.dateKey}
            className={`min-h-[190px] rounded-2xl border p-3 transition ${
              day.isToday
                ? "border-black bg-yellow-50 shadow-md"
                : day.isCurrentMonth
                ? "border-gray-200 bg-[#fffdf6]"
                : "border-gray-100 bg-gray-50/70"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold ${
                  day.isToday
                    ? "bg-black text-white"
                    : day.isCurrentMonth
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                {day.date.getUTCDate()}
              </div>

              {day.orders.length > 0 && (
                <span className="rounded-full bg-yellow-400 px-2 py-1 text-[10px] font-extrabold text-black">
                  {day.orders.length}
                </span>
              )}
            </div>

            <div className="mt-3 max-h-[145px] space-y-2 overflow-y-auto pr-1">
              {day.orders.length === 0 ? (
                day.isCurrentMonth && (
                  <p className="text-xs text-gray-400">Free</p>
                )
              ) : (
                <>
                  <TransitTimeBetweenOrders
                    toOrder={day.orders[0]}
                    useStartAddress
                    compact
                  />
                  {day.orders.map((order, orderIndex) => (
                    <div key={order.id}>
                      <button
                        type="button"
                        onClick={() => setSelected(order)}
                        className="w-full rounded-xl border border-yellow-400 bg-white p-2.5 text-left shadow-sm transition hover:bg-yellow-50 hover:shadow-md"
                      >
                    <p className="truncate text-xs font-extrabold text-black">
                      {order.preferred_time?.slice(0, 5) || "—"}{" "}
                      {order.full_name}
                    </p>

                    <p className="mt-1 truncate text-[11px] text-gray-500">
                      {order.area || order.city || "—"}
                    </p>

                    <div className="mt-1 flex items-center justify-between gap-2">
                      <span className="truncate text-[10px] font-semibold uppercase text-gray-400">
                        {formatStatusLabel(order.status)}
                      </span>

                      <span className="shrink-0 text-[11px] font-extrabold text-black">
                        €{Number(order.total || 0).toFixed(2)}
                      </span>
                    </div>
                      </button>
                      {orderIndex < day.orders.length - 1 && (
                        <TransitTimeBetweenOrders
                          fromOrder={order}
                          toOrder={day.orders[orderIndex + 1]}
                          compact
                        />
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        <div className="overflow-hidden rounded-[28px] border border-yellow-400 bg-white shadow-xl">
          <div className="border-b border-yellow-400 bg-gradient-to-r from-yellow-50 via-[#fffdf4] to-white px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">
                  Orders
                </p>
                <h2 className="mt-1 text-xl font-extrabold tracking-tight text-black">
                  Current booking list
                </h2>
              </div>

              <div className="rounded-2xl border border-yellow-400 bg-yellow-50 px-4 py-2 text-sm font-semibold text-black shadow-sm">
                {orders.length} active
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#fffdf4]">
                <tr className="border-b border-yellow-400">
                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    ID
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Client
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Schedule
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Pricing
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Status
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Emails
                  </th>
                  <th className="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="p-6 text-center text-gray-500">
                      Loading orders...
                    </td>
                  </tr>
                ) : orders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-6 text-center text-gray-500">
                      No orders yet
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-100 transition-colors duration-150 hover:bg-yellow-50/40"
                    >
                      <td className="px-6 py-5 align-top">
                        <div className="font-extrabold text-black">
                          {formatOrderId(order)}
                        </div>
                      </td>

                      <td className="px-4 py-5 align-top">
                        <div className="flex flex-col">
                          <span className="font-bold text-black">
                            {order.full_name}
                          </span>
                          <span className="mt-1 text-xs text-gray-500">
                            {order.city || "—"}, {order.area || "—"}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-5 align-top">
                        <div className="flex flex-col">
                          <span className="font-semibold text-black">
                            {order.preferred_date && order.preferred_time
  ? `${order.preferred_date} ${order.preferred_time.slice(0, 5)}`
  : "—"}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-5 align-top">
                        <div className="flex flex-col">
                          <span className="text-base font-extrabold text-black">
                            €{Number(order.total || 0).toFixed(2)}
                          </span>
                          <span className="mt-1 text-xs text-gray-500">
                            Net €{Number(order.subtotal || 0).toFixed(2)}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-5 align-top">
                        <select
                          value={order.status}
                          onChange={(e) =>
                            updateStatus(
                              order.id,
                              e.target.value as OrderStatus
                            )
                          }
                          className="min-w-[140px] rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-black outline-none transition focus:border-yellow-400"
                        >
                          <option value="new">NEW</option>
                          <option value="in_progress">IN PROGRESS</option>
                          <option value="done">DONE</option>
                        </select>
                      </td>

                      <td className="px-4 py-5 align-top">
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center gap-2">
                            <span>📩</span>
                            <span
                              className={
                                order.email_sent
                                  ? "font-semibold text-green-600"
                                  : "font-semibold text-red-500"
                              }
                            >
                              {order.email_sent ? "Sent" : "No"}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span>⏰</span>
                            <span
                              className={
                                order.reminder_sent
                                  ? "font-semibold text-green-600"
                                  : "font-semibold text-red-500"
                              }
                            >
                              {order.reminder_sent ? "Sent" : "No"}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span>🧾</span>
                            <span
                              className={
                                order.completed_email_sent
                                  ? "font-semibold text-green-600"
                                  : "font-semibold text-red-500"
                              }
                            >
                              {order.completed_email_sent ? "Sent" : "No"}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 align-top text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setSelected(order)}
                            className="rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black shadow-sm transition hover:scale-[1.03] hover:shadow-md"
                          >
                            Open
                          </button>

                          <button
                            onClick={() => openDeleteConfirm(order)}
                            className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-extrabold text-red-600 shadow-sm transition hover:bg-red-100"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {showClients && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/55 p-3 backdrop-blur-sm sm:p-6">
            <div className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[30px] bg-[#fffdf7] shadow-2xl">
              <div className="flex flex-col gap-4 border-b border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                    CRM
                  </p>
                  <h2 className="mt-1 text-3xl font-extrabold text-black">
                    Clients
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {clientProfiles.length} clients from existing orders
                  </p>
                </div>

                <div className="flex w-full gap-3 sm:w-auto">
                  <input
                    type="search"
                    value={clientSearch}
                    onChange={(event) => setClientSearch(event.target.value)}
                    placeholder="Search name, phone, email or address..."
                    className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-yellow-400 sm:w-80"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShowClients(false);
                      setSelectedClient(null);
                      setClientSearch("");
                    }}
                    className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-extrabold hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[360px_1fr]">
                <div className="min-h-0 overflow-y-auto border-r border-gray-200 bg-white p-3">
                  {filteredClientProfiles.length > 0 ? (
                    <div className="space-y-2">
                      {filteredClientProfiles.map((client) => (
                        <button
                          key={client.key}
                          type="button"
                          onClick={() => setSelectedClient(client)}
                          className={`w-full rounded-2xl border p-4 text-left transition ${
                            selectedClient?.key === client.key
                              ? "border-yellow-400 bg-yellow-50 shadow-sm"
                              : "border-gray-200 bg-white hover:border-yellow-300 hover:bg-[#fffdf4]"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="truncate font-extrabold text-black">
                                {client.fullName}
                              </p>
                              <p className="mt-1 truncate text-xs text-gray-500">
                                {client.phone || client.email || "No contact details"}
                              </p>
                            </div>
                            <span className="shrink-0 rounded-full bg-black px-2.5 py-1 text-xs font-bold text-white">
                              {client.orders.length}
                            </span>
                          </div>
                          <div className="mt-3 flex items-center justify-between text-xs">
                            <span className="text-gray-500">Net price</span>
                            <span className="font-extrabold text-black">
                              €{client.completedNetPrice.toFixed(2)}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="p-5 text-center text-sm text-gray-500">
                      No clients found.
                    </p>
                  )}
                </div>

                <div className="min-h-0 overflow-y-auto p-5 sm:p-7">
                  {selectedClient ? (
                    <ClientDetails
                      client={selectedClient}
                      formatOrderId={formatOrderId}
                      onOpenOrder={(order) => {
                        setSelected(order);
                        setShowClients(false);
                      }}
                    />
                  ) : (
                    <div className="flex h-full min-h-80 items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white p-8 text-center">
                      <div>
                        <p className="text-xl font-extrabold text-black">
                          Select a client
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                          Their contact details, net price and visit history will appear here.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {showManualForm && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4">
            <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Manual booking
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold text-black">
                    Add WhatsApp client
                  </h2>
                </div>

                <button
                  onClick={() => setShowManualForm(false)}
                  disabled={isCreatingManual}
                  className="rounded-2xl border border-gray-300 px-4 py-2 text-sm font-bold text-black transition hover:bg-gray-50 disabled:opacity-60"
                >
                  Close
                </button>
              </div>

              <div className="mt-6 rounded-3xl border border-black bg-[#fffdf4] p-4 shadow-sm">
  <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
    <div className="flex-1">
      <label className="mb-2 block text-sm font-extrabold text-black">
        AI order assistant
      </label>

      <textarea
        value={aiOrderText}
        onChange={(e) => setAiOrderText(e.target.value)}
        placeholder="Paste the full WhatsApp conversation or order details here..."
        className="min-h-[150px] w-full resize-y rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
      />
    </div>

    <button
      type="button"
      onClick={parseOrderWithAi}
      disabled={isParsingAiOrder || !aiOrderText.trim()}
      className="rounded-2xl bg-black px-5 py-3 text-sm font-extrabold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 lg:mt-7"
    >
      {isParsingAiOrder ? "Analysing..." : "Fill form with AI"}
    </button>
  </div>

  {aiOrderError && (
    <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">
      {aiOrderError}
    </div>
  )}

  {aiMissingFields.length > 0 && (
    <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-3">
      <p className="text-sm font-extrabold text-orange-800">
        Missing information
      </p>

      <div className="mt-2 flex flex-wrap gap-2">
        {aiMissingFields.map((field) => (
          <span
            key={field}
            className="rounded-full bg-white px-3 py-1 text-xs font-bold text-orange-700"
          >
            {field}
          </span>
        ))}
      </div>
    </div>
  )}

  {aiWarnings.length > 0 && (
    <div className="mt-4 rounded-2xl border border-yellow-300 bg-yellow-50 p-3">
      <p className="text-sm font-extrabold text-black">AI warnings</p>

      <div className="mt-2 space-y-1">
        {aiWarnings.map((warning, index) => (
          <p key={`${warning}-${index}`} className="text-sm text-gray-700">
            • {warning}
          </p>
        ))}
      </div>
    </div>
  )}
</div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <ClientAutocomplete
                  value={manualOrder.fullName}
                  suggestions={clientSuggestions}
                  open={showClientSuggestions}
                  onOpenChange={setShowClientSuggestions}
                  onChange={(value) =>
                    setManualOrder((current) => ({
                      ...current,
                      fullName: value,
                    }))
                  }
                  onSelect={selectKnownClient}
                />

                <AdminInput
                  label="Phone"
                  value={manualOrder.phone}
                  onChange={(v) => setManualOrder({ ...manualOrder, phone: v })}
                  placeholder="+34 ..."
                />

                <AdminInput
                  label="Email"
                  value={manualOrder.email}
                  onChange={(v) => setManualOrder({ ...manualOrder, email: v })}
                  placeholder="client@email.com"
                />

                <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
                  <label className="mb-2 block text-sm font-bold text-black">
                    Category
                  </label>
                  <select
                    value={manualOrder.category}
                    onChange={(e) =>
                      setManualOrder({
                        ...manualOrder,
                        category: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
                  >
                    {MANUAL_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <AdminInput
                  label="City"
                  value={manualOrder.city}
                  onChange={(v) => setManualOrder({ ...manualOrder, city: v })}
                  placeholder="Valencia"
                />

                <AdminInput
                  label="Area"
                  value={manualOrder.area}
                  onChange={(v) => setManualOrder({ ...manualOrder, area: v })}
                  placeholder="Patraix, Campanar, Arrancapins..."
                />

                <div className="md:col-span-2">
                  <AdminInput
                    label="Address"
                    value={manualOrder.houseAddress}
                    onChange={(v) =>
                      setManualOrder({ ...manualOrder, houseAddress: v })
                    }
                    placeholder="Street, number"
                  />
                </div>

                <AdminInput
                  label="Apartment / floor"
                  value={manualOrder.apartmentNumber}
                  onChange={(v) =>
                    setManualOrder({
                      ...manualOrder,
                      apartmentNumber: v,
                    })
                  }
                  placeholder="Floor, door, apartment"
                />

                <AdminInput
                  label="Address details"
                  value={manualOrder.addressDetails}
                  onChange={(v) =>
                    setManualOrder({
                      ...manualOrder,
                      addressDetails: v,
                    })
                  }
                  placeholder="Parking, intercom, access..."
                />

                <AdminInput
                  label="Date"
                  type="date"
                  value={manualOrder.preferredDate}
                  onChange={(v) =>
                    setManualOrder({
                      ...manualOrder,
                      preferredDate: v,
                    })
                  }
                />

                <AdminInput
                  label="Time"
                  type="time"
                  value={manualOrder.preferredTime}
                  onChange={(v) =>
                    setManualOrder({
                      ...manualOrder,
                      preferredTime: v,
                    })
                  }
                />

                <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm md:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-black">
                    Client notes
                  </label>
                  <textarea
                    value={manualOrder.notes}
                    onChange={(e) =>
                      setManualOrder({
                        ...manualOrder,
                        notes: e.target.value,
                      })
                    }
                    placeholder="What the client needs, photos, details, tools..."
                    className="min-h-[110px] w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-yellow-400 bg-yellow-50/40 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-extrabold text-black">Services</h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Same format as website calculator: label, price, qty,
                      subtotal.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setManualServices([
                        ...manualServices,
                        { label: "", price: 0, qty: 1 },
                      ])
                    }
                    className="rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black shadow-sm transition hover:scale-[1.02]"
                  >
                    + Add service
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  {manualServices.map((service, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 gap-3 rounded-2xl border border-gray-200 bg-white p-3 md:grid-cols-[1fr_120px_100px_100px]"
                    >
                      <input
                        value={service.label}
                        onChange={(e) => {
                          const next = [...manualServices];
                          next[index].label = e.target.value;
                          setManualServices(next);
                        }}
                        placeholder="Service name"
                        className="rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-yellow-400"
                      />

                      <input
                        type="number"
                        value={service.price}
                        onChange={(e) => {
                          const next = [...manualServices];
                          next[index].price = Number(e.target.value);
                          setManualServices(next);
                        }}
                        placeholder="Price"
                        className="rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-yellow-400"
                      />

                      <input
                        type="number"
                        value={service.qty}
                        onChange={(e) => {
                          const next = [...manualServices];
                          next[index].qty = Number(e.target.value);
                          setManualServices(next);
                        }}
                        placeholder="Qty"
                        className="rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-yellow-400"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setManualServices((prev) =>
                            prev.filter((_, i) => i !== index)
                          )
                        }
                        className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-yellow-400 bg-white p-4">
                  <label className="mb-4 flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-yellow-50 px-3 py-3">
                    <span>
                      <span className="block text-sm font-extrabold text-black">
                        Add IVA 21%
                      </span>
                      <span className="block text-xs text-gray-500">
                        Turn off to create this order without IVA
                      </span>
                    </span>
                    <input
                      type="checkbox"
                      checked={manualIncludeIva}
                      onChange={(event) =>
                        setManualIncludeIva(event.target.checked)
                      }
                      className="h-5 w-5 accent-yellow-400"
                    />
                  </label>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>€{manualSubtotal.toFixed(2)}</span>
                  </div>

                  <div className="mt-2 flex justify-between text-sm text-gray-600">
                    <span>IVA 21%</span>
                    <span>€{manualIva.toFixed(2)}</span>
                  </div>

                  <div className="mt-2 flex justify-between border-t border-yellow-400 pt-3 text-lg font-extrabold text-black">
                    <span>Total</span>
                    <span>€{manualTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setShowManualForm(false)}
                  disabled={isCreatingManual}
                  className="rounded-2xl border border-gray-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-gray-50 disabled:opacity-60"
                >
                  Cancel
                </button>

                <button
                  onClick={createManualOrder}
                  disabled={isCreatingManual}
                  className="rounded-2xl bg-black px-5 py-3 text-sm font-extrabold text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {isCreatingManual ? "Creating..." : "Create order"}
                </button>
              </div>
            </div>
          </div>
        )}

       {selected && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
    <div className="w-full max-w-[95vw] sm:max-w-[760px] lg:max-w-[1120px] h-[90vh] flex flex-col rounded-3xl bg-white p-4 sm:p-5 lg:p-5 shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
            Order details
          </p>
          <h2 className="mt-1 text-2xl font-extrabold text-black">
            {selected.full_name}
          </h2>
        </div>

        <div className="rounded-2xl border border-yellow-400 bg-yellow-50 px-3 py-2 text-sm font-bold text-black">
          {formatStatusLabel(selected.status)}
        </div>
      </div>

      <div className="mt-5 flex-1 overflow-y-auto grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 pr-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-3 text-sm xl:col-span-2">
          <div className="space-y-2">
            <p>📞 {selected.phone || "—"}</p>
            <p>📧 {selected.email || "—"}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Order
          </p>
          <p className="mt-2 font-bold text-black">
            {formatOrderId(selected)}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Address
          </p>
          <p className="mt-2 text-sm text-black">
            {selected.city || "—"}, {selected.area || "—"},{" "}
            {selected.address || "—"}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-3">
  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
    Schedule
  </p>

  <div className="mt-2 grid grid-cols-1 gap-2">
    <input
      type="date"
      value={selected.preferred_date || ""}
      onChange={(e) =>
        setSelected((prev) =>
          prev ? { ...prev, preferred_date: e.target.value } : prev
        )
      }
      className="rounded-xl border border-gray-300 px-3 py-2 text-sm text-black outline-none focus:border-yellow-400"
    />

    <input
      type="time"
     value={selected.preferred_time?.slice(0, 5) || ""}
      onChange={(e) =>
        setSelected((prev) =>
          prev ? { ...prev, preferred_time: e.target.value } : prev
        )
      }
      className="rounded-xl border border-gray-300 px-3 py-2 text-sm text-black outline-none focus:border-yellow-400"
    />

    <button
      onClick={updateOrderSchedule}
      className="rounded-xl bg-yellow-400 px-3 py-2 text-sm font-extrabold text-black transition hover:scale-[1.02]"
    >
      Save schedule
    </button>
  </div>
</div>

        <div className="rounded-2xl border border-gray-200 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Category
          </p>
          <p className="mt-2 text-sm font-semibold text-black">
            {selected.category || "—"}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Referral code
          </p>
          <p className="mt-2 text-sm font-extrabold text-black">
            {selected.referral_code || "Not generated yet"}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Completed at
          </p>
          <p className="mt-2 text-sm font-semibold text-black">
            {selected.completed_at
              ? formatMadridDateTime(selected.completed_at).full
              : "Not completed yet"}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-3 xl:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Services
          </p>

          <div className="mt-2 max-h-[260px] overflow-y-auto pr-2 space-y-1">
            {Array.isArray(selected.services) && selected.services.length > 0 ? (
              selected.services.map((item: ServiceItem, index: number) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_82px_64px] gap-2 border-b border-gray-100 py-2 last:border-b-0"
                >
                  <input
                    value={item.label || ""}
                    onChange={(event) =>
                      updateSelectedService(index, "label", event.target.value)
                    }
                    aria-label="Service name"
                    className="min-w-0 rounded-lg border border-gray-300 px-2 py-2 text-sm font-semibold text-black outline-none focus:border-yellow-400"
                  />
                  <label className="min-w-0">
                    <span className="sr-only">Price</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={Number(item.price || 0)}
                      onChange={(event) =>
                        updateSelectedService(
                          index,
                          "price",
                          Number(event.target.value)
                        )
                      }
                      aria-label="Service price"
                      className="w-full rounded-lg border border-gray-300 px-2 py-2 text-sm text-black outline-none focus:border-yellow-400"
                    />
                  </label>
                  <label className="min-w-0">
                    <span className="sr-only">Quantity</span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={Number(item.qty || 0)}
                      onChange={(event) =>
                        updateSelectedService(
                          index,
                          "qty",
                          Number(event.target.value)
                        )
                      }
                      aria-label="Service quantity"
                      className="w-full rounded-lg border border-gray-300 px-2 py-2 text-sm text-black outline-none focus:border-yellow-400"
                    />
                  </label>
                  <p className="col-span-3 text-right text-xs font-bold text-gray-500">
                    Service total: €{Number(item.subtotal || 0).toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No services listed</p>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Client notes
          </p>
          <p className="mt-2 whitespace-pre-line text-sm text-black">
            {selected.notes || "No client notes"}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-3 xl:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Internal notes
          </p>

          <textarea
            value={internalNotes}
            onChange={(e) => setInternalNotes(e.target.value)}
            placeholder="What to bring, tools, wall type, access notes, materials..."
            className="mt-2 min-h-[72px] w-full resize-none rounded-xl border border-gray-300 px-3 py-2 text-sm text-black outline-none transition focus:border-yellow-400"
          />

          <button
            onClick={saveInternalNotes}
            className="mt-2 rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black shadow-sm transition hover:scale-[1.02]"
          >
            Save internal notes
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-2xl border border-yellow-400 bg-yellow-50/60 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="font-semibold text-black">Pricing</p>
            <label className="flex cursor-pointer items-center gap-2 text-xs font-bold text-black">
              <input
                type="checkbox"
                checked={Number(selected.iva || 0) > 0}
                onChange={(event) =>
                  setSelectedIvaEnabled(event.target.checked)
                }
                className="h-4 w-4 accent-yellow-400"
              />
              IVA 21%
            </label>
          </div>

          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Net revenue</span>
              <span className="font-semibold text-black">
                €{Number(selected.subtotal || 0).toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">IVA reserve</span>
              <span className="font-semibold text-black">
                €{Number(selected.iva || 0).toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-yellow-400 pt-2">
              <span className="font-bold text-black">Gross total</span>
              <span className="text-base font-extrabold text-black">
                €{Number(selected.total || 0).toFixed(2)}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={saveOrderPricing}
            disabled={isSavingPricing}
            className="mt-4 w-full rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-extrabold text-black transition hover:scale-[1.01] disabled:opacity-60"
          >
            {isSavingPricing ? "Saving..." : "Save pricing"}
          </button>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Actions
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  `${selected.city || ""}, ${selected.area || ""}, ${
                    selected.address || ""
                  }`
                )
              }
              className="rounded-2xl border border-gray-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-50"
            >
              Copy address
            </button>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${selected.city || ""}, ${selected.area || ""}, ${
                  selected.address || ""
                }`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black transition hover:scale-[1.02]"
            >
              Open map
            </a>

            <a
              href={`tel:${selected.phone}`}
              className="rounded-2xl border border-gray-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-50"
            >
              Call
            </a>

            {selected.status !== "done" && (
              <button
                onClick={() => setShowCompleteConfirm(true)}
                className="rounded-2xl bg-black px-4 py-2 text-sm font-extrabold text-white transition hover:scale-[1.02]"
              >
                Mark as done
              </button>
            )}
          </div>

          <button
            onClick={() => setSelected(null)}
            className="mt-4 w-full rounded-2xl border border-gray-300 py-3 text-sm font-bold text-black transition hover:bg-gray-50"
          >
            Close
          </button>

          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="mt-3 w-full rounded-2xl border border-red-300 bg-red-50 py-3 text-sm font-extrabold text-red-600 transition hover:bg-red-100"
          >
            🗑 Delete order
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{showCompleteConfirm && selected && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
        Confirm action
      </p>

      <h3 className="mt-2 text-2xl font-extrabold text-black">
        Complete this order?
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-600">This will:</p>

      <div className="mt-3 space-y-2 text-sm text-black">
        <p>• Change status to Done</p>
        <p>• Send completed email to the client</p>
        <p>• Generate referral code</p>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setShowCompleteConfirm(false)}
          disabled={isCompleting}
          className="flex-1 rounded-2xl border border-gray-300 bg-white py-3 text-sm font-bold text-black transition hover:bg-gray-50 disabled:opacity-60"
        >
          Cancel
        </button>

        <button
          onClick={completeOrder}
          disabled={isCompleting}
          className="flex-1 rounded-2xl bg-black py-3 text-sm font-extrabold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {isCompleting ? "Completing..." : "Yes, complete"}
        </button>
      </div>
    </div>
  </div>
)}

{showDeleteConfirm && selected && (
  <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4">
    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-red-500">
        Warning
      </p>

      <h3 className="mt-2 text-2xl font-extrabold text-black">
        Delete this order?
      </h3>

      <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4">
        <p className="font-bold text-black">{selected.full_name}</p>

        <p className="mt-1 text-sm text-gray-600">
          {selected.phone || "No phone"}
        </p>

        <p className="mt-1 text-sm text-gray-600">
          €{Number(selected.total || 0).toFixed(2)}
        </p>
      </div>

      <p className="mt-5 text-sm text-gray-600">
        This action cannot be undone.
      </p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setShowDeleteConfirm(false)}
          disabled={isDeleting}
          className="flex-1 rounded-2xl border border-gray-300 bg-white py-3 text-sm font-bold text-black transition hover:bg-gray-50 disabled:opacity-60"
        >
          Cancel
        </button>

        <button
          onClick={deleteOrder}
          disabled={isDeleting}
          className="flex-1 rounded-2xl bg-red-600 py-3 text-sm font-extrabold text-white transition hover:bg-red-700 disabled:opacity-60"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
}

function AdminInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
      <label className="mb-2 block text-sm font-bold text-black">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
      />
    </div>
  );
}

function ClientAutocomplete({
  value,
  suggestions,
  open,
  onOpenChange,
  onChange,
  onSelect,
}: {
  value: string;
  suggestions: Order[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (value: string) => void;
  onSelect: (client: Order) => void;
}) {
  return (
    <div className="relative rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
      <label
        htmlFor="manual-client-name"
        className="mb-2 block text-sm font-bold text-black"
      >
        Client name
      </label>
      <input
        id="manual-client-name"
        type="text"
        value={value}
        onFocus={() => onOpenChange(true)}
        onChange={(event) => {
          onChange(event.target.value);
          onOpenChange(true);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") onOpenChange(false);
        }}
        onBlur={() => window.setTimeout(() => onOpenChange(false), 120)}
        placeholder="Start typing a client name..."
        autoComplete="off"
        role="combobox"
        aria-expanded={open}
        aria-controls="known-client-suggestions"
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black outline-none transition focus:border-yellow-400"
      />

      {open && (
        <div
          id="known-client-suggestions"
          role="listbox"
          className="absolute left-4 right-4 top-[94px] z-50 max-h-72 overflow-y-auto rounded-xl border border-gray-200 bg-white p-1 shadow-xl"
        >
          {suggestions.length > 0 ? (
            suggestions.map((client) => (
              <button
                key={client.id}
                type="button"
                role="option"
                aria-selected="false"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => onSelect(client)}
                className="block w-full rounded-lg px-3 py-2.5 text-left transition hover:bg-yellow-50 focus:bg-yellow-50 focus:outline-none"
              >
                <span className="block text-sm font-extrabold text-black">
                  {client.full_name}
                </span>
                <span className="mt-0.5 block truncate text-xs text-gray-500">
                  {[client.phone, client.email, client.area]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              </button>
            ))
          ) : (
            <p className="px-3 py-3 text-sm text-gray-500">
              No matching clients. A new client will be created.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function ClientDetails({
  client,
  formatOrderId,
  onOpenOrder,
}: {
  client: ClientProfile;
  formatOrderId: (order: Order) => string;
  onOpenOrder: (order: Order) => void;
}) {
  const lastVisitLabel = client.lastVisit
    ? new Date(client.lastVisit).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "No visits yet";

  return (
    <div className="space-y-5">
      <div className="rounded-3xl border border-yellow-400 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
              Client card
            </p>
            <h3 className="mt-2 text-3xl font-extrabold text-black">
              {client.fullName}
            </h3>
            <div className="mt-4 space-y-1.5 text-sm text-gray-700">
              <p>📞 {client.phone || "—"}</p>
              <p>📧 {client.email || "—"}</p>
              <p>
                📍 {[client.address, client.apartment, client.area, client.city]
                  .filter(Boolean)
                  .join(", ") || "—"}
              </p>
              {client.addressDetails && <p>ℹ️ {client.addressDetails}</p>}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {client.phone && (
              <a
                href={`tel:${client.phone}`}
                className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-extrabold text-black hover:bg-gray-50"
              >
                Call
              </a>
            )}
            {client.phone && (
              <a
                href={`https://wa.me/${client.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-extrabold text-white hover:brightness-95"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ClientStatCard
          label="Net price received"
          value={`€${client.completedNetPrice.toFixed(2)}`}
        />
        <ClientStatCard label="Total orders" value={String(client.orders.length)} />
        <ClientStatCard label="Last visit" value={lastVisitLabel} />
      </div>

      {client.bookedNetPrice !== client.completedNetPrice && (
        <p className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800">
          Total net price including unfinished orders:{" "}
          <strong>€{client.bookedNetPrice.toFixed(2)}</strong>
        </p>
      )}

      <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-xl font-extrabold text-black">Order history</h4>
          <span className="text-sm text-gray-500">{client.orders.length} orders</span>
        </div>

        <div className="mt-4 space-y-3">
          {client.orders.map((order) => (
            <button
              key={order.id}
              type="button"
              onClick={() => onOpenOrder(order)}
              className="flex w-full flex-col gap-3 rounded-2xl border border-gray-200 p-4 text-left transition hover:border-yellow-400 hover:bg-yellow-50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-extrabold text-black">
                    {formatOrderId(order)}
                  </span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-bold uppercase text-gray-600">
                    {order.status.replace("_", " ")}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-600">
                  {order.category || "Service"} · {order.preferred_date || "No date"}
                </p>
              </div>
              <span className="shrink-0 text-lg font-extrabold text-black">
                €{Number(order.subtotal || 0).toFixed(2)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function getOrderRouteAddress(order: Order) {
  return [order.address, order.apartment, order.area, order.city, "Spain"]
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(", ");
}

function TransitTimeBetweenOrders({
  fromOrder,
  toOrder,
  compact = false,
  useStartAddress = false,
}: {
  fromOrder?: Order;
  toOrder: Order;
  compact?: boolean;
  useStartAddress?: boolean;
}) {
  const [state, setState] = useState<
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success"; durationText: string; mapsUrl: string }
    | { status: "error"; message: string }
  >({ status: "idle" });

  const calculateTransitTime = async () => {
    const origin = fromOrder ? getOrderRouteAddress(fromOrder) : "";
    const destination = getOrderRouteAddress(toOrder);

    if ((!useStartAddress && !origin) || !destination) {
      setState({ status: "error", message: "Address missing" });
      return;
    }

    setState({ status: "loading" });
    try {
      const response = await fetch("/api/admin/transit-time", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origin,
          useStartAddress,
          destination,
          arrivalTime: toOrder.scheduled_at,
        }),
      });
      const result = (await response.json()) as {
        durationText?: string;
        mapsUrl?: string;
        error?: string;
      };

      if (!response.ok || !result.durationText || !result.mapsUrl) {
        throw new Error(result.error || "Route unavailable");
      }

      setState({
        status: "success",
        durationText: result.durationText,
        mapsUrl: result.mapsUrl,
      });
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "Route unavailable",
      });
    }
  };

  const baseClass = compact
    ? "mt-1 rounded-lg bg-blue-50 px-2 py-1.5 text-[10px]"
    : "mx-2 rounded-b-2xl border-x border-b border-blue-200 bg-blue-50 px-3 py-2 text-xs";

  return (
    <div className={`${baseClass} text-blue-800`}>
      {state.status === "success" ? (
        <a
          href={state.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between gap-2 font-bold hover:underline"
        >
          <span className="truncate">
            🚌 {state.durationText} to {toOrder.full_name}
          </span>
          <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <button
          type="button"
          onClick={calculateTransitTime}
          disabled={state.status === "loading"}
          className="w-full text-left font-bold disabled:cursor-wait disabled:opacity-60"
          title={state.status === "error" ? state.message : undefined}
        >
          {state.status === "loading"
            ? "🚌 Calculating transit…"
            : state.status === "error"
              ? `🚌 ${state.message} — try again`
              : useStartAddress
                ? `🏠 Check transit from home to ${toOrder.full_name}`
                : `🚌 Check transit to ${toOrder.full_name}`}
        </button>
      )}
    </div>
  );
}

function ClientStatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-yellow-400 bg-white p-4 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
        {label}
      </p>
      <p className="mt-2 text-2xl font-extrabold text-black">{value}</p>
    </div>
  );
}

function MobileOverviewValue({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-lg font-extrabold text-black">{value}</p>
      <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-gray-500">
        {label}
      </p>
    </div>
  );
}

function MetricCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-yellow-400 bg-white p-4 shadow-md transition-all duration-200 hover:-translate-y-[1px] hover:shadow-xl sm:rounded-3xl sm:p-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
        {title}
      </p>

      <div className="mt-2 break-words text-2xl font-extrabold tracking-tight text-black sm:mt-3 sm:text-4xl">
        {value}
      </div>

      <p className="mt-2 text-[11px] leading-4 text-gray-500 sm:mt-3 sm:text-xs sm:leading-5">
        {subtitle}
      </p>
    </div>
  );
}

function StatusCard({
  title,
  value,
}: {
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-yellow-400 bg-[#fffdf6] p-4 shadow-md transition-all duration-200 hover:-translate-y-[1px] hover:shadow-xl sm:rounded-3xl sm:p-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500">
        {title}
      </p>

      <div className="mt-2 text-2xl font-extrabold tracking-tight text-black sm:mt-3 sm:text-4xl">
        {value}
      </div>
    </div>
  );
}
