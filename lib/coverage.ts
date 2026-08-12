export const cityAreas: Record<string, string[]> = {
  Valencia: ["Valencia", "L'Horta", "Alboraya", "Paterna", "Mislata", "Burjassot"],
  Madrid: ["Centro", "Arganzuela", "Retiro", "Salamanca", "Chamartín", "Tetuán", "Chamberí"],
  Barcelona: ["Ciutat Vella", "Eixample", "Sants-Montjuïc", "Les Corts", "Sarrià-Sant Gervasi", "Gràcia"],
  Alicante: ["Centro", "Ensanche Diputación", "Benalúa", "San Blas", "Playa de San Juan", "Albufereta"],
};

// No Spanish market currently requires an automatic travel deposit.
export const depositRequiredCities = new Set<string>();

export function requiresTravelDeposit(city: string) { return depositRequiredCities.has(city.trim()); }
export function travelDepositAmount(total: number, city: string) { return requiresTravelDeposit(city) ? Math.round(total * 50) / 100 : 0; }
