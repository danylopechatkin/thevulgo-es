export type ManualCustomer = {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  alternate_phone?: string | null;
  address: string | null;
  apartment: string | null;
  city: string | null;
  area: string | null;
};

/** Input order is the API's last_order_at descending order. */
export function findManualCustomers(clients: ManualCustomer[], query: string): ManualCustomer[] {
  const normalize = (value: string) => value.normalize("NFD").replace(/\p{M}/gu, "").toLocaleLowerCase();
  const text = normalize(query.trim());
  if (!text) return clients.slice(0, 5);
  const digits = text.replace(/\D/g, "");
  return clients.filter((client) =>
    [client.full_name, client.email].some((value) => normalize(value || "").includes(text)) ||
    (Boolean(digits) && /^[+\d\s().-]+$/.test(text) && [client.phone, client.alternate_phone].some(
      (phone) => (phone || "").replace(/\D/g, "").includes(digits),
    )),
  );
}
