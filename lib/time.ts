export function getMadridNow() {
  return new Date();
}

export function toMadridDate(date: string | Date) {
  return new Date(date);
}

export function formatMadridDateTime(date: string | Date) {
  const d = new Date(date);

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");

  return {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}`,
    full: `${year}-${month}-${day} ${hours}:${minutes}`,
  };
}