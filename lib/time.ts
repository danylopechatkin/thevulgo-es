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