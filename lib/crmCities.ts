import { AVAILABLE_CITIES, type AvailableCity } from "./cities";

export function cityFromTrackedPath(path: string): AvailableCity {
  const segment = path.split("?")[0].split("/").filter(Boolean)[1]?.toLowerCase();
  const city = segment ? `${segment[0].toUpperCase()}${segment.slice(1)}` : "Valencia";
  return AVAILABLE_CITIES.includes(city as AvailableCity)
    ? (city as AvailableCity)
    : "Valencia";
}

export function workerSupportsCity(
  primaryCity: string | null | undefined,
  serviceCities: string[] | null | undefined,
  orderCity: string,
) {
  const cities = serviceCities?.length ? serviceCities : [primaryCity || "Valencia"];
  return cities.includes(orderCity);
}
