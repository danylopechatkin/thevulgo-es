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