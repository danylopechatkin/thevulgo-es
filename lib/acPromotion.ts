export const AC_DEEP_CLEANING_SERVICE_ID = "ac-disinfection";
export const AC_CLEANING_PATH = "aire-acondicionado-valencia/limpieza";

export const acDeepCleaningPromotion = {
  active: true,
  regularPrice: 109,
  promoPrice: 49,
  currency: "EUR",
  unitType: "wall_split_indoor_unit",
} as const;

export function getAcDeepCleaningPrice() {
  return acDeepCleaningPromotion.active
    ? acDeepCleaningPromotion.promoPrice
    : acDeepCleaningPromotion.regularPrice;
}

export function getAcCleaningPath(locale: string) {
  const prefix = locale === "es" ? "/es" : "";
  return `${prefix}/${AC_CLEANING_PATH}`;
}

export function getAcCleaningBookingPath(locale: string, quantity = 1) {
  const prefix = locale === "es" ? "/es" : "";
  const params = new URLSearchParams({
    category: "air-conditioning",
    service: AC_DEEP_CLEANING_SERVICE_ID,
    quantity: String(Math.max(1, Math.min(20, Math.trunc(quantity)))),
  });
  return `${prefix}/estimate?${params.toString()}`;
}

export function getAcCleaningWhatsAppMessage(
  locale: string,
  quantity?: number,
) {
  const price = getAcDeepCleaningPrice();
  const quantityText = quantity
    ? locale === "es"
      ? ` Tengo ${quantity} unidad(es) split.`
      : ` I have ${quantity} split unit(s).`
    : "";

  if (locale === "es") {
    return acDeepCleaningPromotion.active
      ? `Hola, quiero reservar la oferta de limpieza profunda de aire acondicionado por ${price} €.${quantityText}`
      : `Hola, quiero reservar una limpieza profunda de aire acondicionado por ${price} € por unidad.${quantityText}`;
  }

  return acDeepCleaningPromotion.active
    ? `Hello, I would like to book the deep air conditioner cleaning offer for €${price}.${quantityText}`
    : `Hello, I would like to book deep air conditioner cleaning for €${price} per unit.${quantityText}`;
}
