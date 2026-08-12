export function getMadridNow() {
  return new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "Europe/Madrid",
    })
  );
}

export function toMadridDate(date: string | Date) {
  return new Date(
    new Date(date).toLocaleString("en-US", {
      timeZone: "Europe/Madrid",
    })
  );
}

export function formatMadridDateTime(date: string | Date) {
  const madrid = toMadridDate(date);

  const year = madrid.getFullYear();
  const month = String(madrid.getMonth() + 1).padStart(2, "0");
  const day = String(madrid.getDate()).padStart(2, "0");
  const hours = String(madrid.getHours()).padStart(2, "0");
  const minutes = String(madrid.getMinutes()).padStart(2, "0");

  return {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}`,
    full: `${year}-${month}-${day} ${hours}:${minutes}`,
  };
}

export function madridLocalStringToDate(value: string) {
  const normalized = value.replace("T", " ");
  const [datePart, timePart] = normalized.split(" ");

  const [year, month, day] = datePart.split("-").map(Number);
  const [hours, minutes, seconds = 0] = timePart.split(":").map(Number);

  return new Date(year, month - 1, day, hours, minutes, seconds);
}

function madridOffsetAt(timestamp: number) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(timestamp));
  const values = Object.fromEntries(
    parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value])
  );

  return Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute),
    Number(values.second)
  ) - timestamp;
}

export function madridLocalDateTimeToUtc(date: string, time: string) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const localAsUtc = Date.UTC(year, month - 1, day, hour, minute, 0);
  const firstPass = localAsUtc - madridOffsetAt(localAsUtc);
  const utcTimestamp = localAsUtc - madridOffsetAt(firstPass);

  return new Date(utcTimestamp).toISOString();
}

export const BUSINESS_TIMEZONE = "Europe/Madrid";
export const torontoLocalToUtc = madridLocalDateTimeToUtc;
// Legacy email helper. Email templates interpolate this value directly, so it
// must remain a formatted string rather than the structured CRM date object.
export const formatValenciaDateTime = (date: string | Date) =>
  formatMadridDateTime(date).full;
