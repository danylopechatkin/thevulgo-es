import type { Metadata } from "next";
import SmallJobLanding from "@/app/components/SmallJobLanding";
import type { SmallJobCopy } from "@/app/components/SmallJobLanding";

type Props = { params: Promise<{ locale: string }> };
const baseUrl = "https://www.thevulgo.es";
const path = "colgar-espejos-valencia";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs
    ? "Colgar Espejos en Valencia | Montaje Seguro | THEVULGO"
    : "Mirror Hanging in Valencia | Safe Installation | THEVULGO";
  const description = isEs
    ? "Servicio para colgar espejos en Valencia. Instalación segura en azulejo, ladrillo, hormigón o pladur. Envía fotos y recibe presupuesto por WhatsApp."
    : "Mirror hanging service in Valencia. Safe installation on tile, brick, concrete or drywall. Send photos and get a quote by WhatsApp.";
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${path}`,
      languages: {
        es: `${baseUrl}/es/${path}`,
        en: `${baseUrl}/en/${path}`,
        "x-default": `${baseUrl}/es/${path}`,
      },
    },
    openGraph: { title, description, url: `${baseUrl}/${locale}/${path}`, siteName: "THEVULGO", type: "website", locale: isEs ? "es_ES" : "en_GB" },
    robots: { index: true, follow: true },
  };
}

export default async function MirrorHangingPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const copy: SmallJobCopy = isEs
    ? {
        badge: "Espejos · Valencia y alrededores",
        title: "Colgar espejos en Valencia de forma segura y nivelada",
        intro: "Instalamos espejos pequeños, grandes y de baño con las fijaciones adecuadas para el peso y el tipo de pared. Revisamos fotos, medidas y superficie antes de confirmar el precio.",
        startingPrice: "Desde 35 €",
        includedTitle: "Qué podemos instalar",
        includedIntro: "Cada espejo se revisa según peso, sistema de anclaje y pared disponible.",
        included: ["Espejos con ganchos o soportes", "Espejos de baño y recibidor", "Montaje sobre azulejo, ladrillo u hormigón", "Fijación sobre pladur cuando sea segura", "Nivelación, medición y prueba final"],
        processTitle: "Así preparamos la instalación",
        process: [["Envía fotos", "Necesitamos ver el espejo, la parte trasera, la pared y las medidas."], ["Confirmamos fijaciones", "Te indicamos si sirve el material incluido o si hacen falta tacos y soportes."], ["Instalamos y comprobamos", "Marcamos, perforamos, nivelamos y verificamos que quede firme."]],
        faqTitle: "Preguntas sobre instalación de espejos",
        faqs: [["¿Cuánto cuesta colgar un espejo?", "Una instalación sencilla suele empezar desde 35 €. El precio depende del tamaño, peso, pared, altura y fijaciones."], ["¿Podéis perforar azulejos?", "Sí, siempre que la zona sea adecuada y podamos comprobar que no hay instalaciones ocultas en el punto elegido."], ["¿Se puede colgar un espejo pesado?", "Sí, después de revisar el peso, los anclajes traseros y el tipo de pared. Algunos espejos requieren fijaciones especiales."], ["¿También instaláis varios accesorios?", "Sí. Podemos combinar el espejo con estantes, cuadros, accesorios de baño u otras tareas pequeñas en una visita."]],
        relatedTitle: "Puedes combinarlo con otras tareas",
        whatsappMessage: "Hola. Necesito colgar un espejo en Valencia. Puedo enviar fotos del espejo, la parte trasera, la pared y las medidas.",
        whatsappLabel: "Enviar fotos por WhatsApp",
        formLabel: "Pedir presupuesto",
        finalTitle: "Enséñanos el espejo y la pared",
        finalText: "Con fotos claras y medidas aproximadas podemos recomendar las fijaciones y darte un presupuesto antes de la visita.",
      }
    : {
        badge: "Mirrors · Valencia and nearby",
        title: "Safe and level mirror hanging in Valencia",
        intro: "We install small, large and bathroom mirrors using fixings suited to the weight and wall type. We review photos, dimensions and surface before confirming the price.",
        startingPrice: "From €35",
        includedTitle: "What we can install",
        includedIntro: "Each mirror is reviewed according to its weight, mounting system and available wall.",
        included: ["Mirrors with hooks or brackets", "Bathroom and hallway mirrors", "Tile, brick or concrete mounting", "Drywall mounting when suitable", "Levelling, measuring and final safety check"],
        processTitle: "How we prepare the installation",
        process: [["Send photos", "We need to see the mirror, its back, the wall and dimensions."], ["We confirm the fixings", "We tell you whether the included hardware works or extra plugs and brackets are needed."], ["Install and check", "We mark, drill, level and verify that the mirror is secure."]],
        faqTitle: "Mirror installation questions",
        faqs: [["How much does mirror hanging cost?", "A simple installation usually starts from €35. Price depends on size, weight, wall, height and fixings."], ["Can you drill into tile?", "Yes, provided the area is suitable and we can check that there are no hidden services at the chosen point."], ["Can you hang a heavy mirror?", "Yes, after checking the weight, rear mounts and wall type. Some mirrors require specialist fixings."], ["Can you install several accessories too?", "Yes. We can combine the mirror with shelves, pictures, bathroom accessories or other small tasks in one visit."]],
        relatedTitle: "Combine it with other small jobs",
        whatsappMessage: "Hi. I need a mirror hung in Valencia. I can send photos of the mirror, its back, the wall and dimensions.",
        whatsappLabel: "Send photos by WhatsApp",
        formLabel: "Request a quote",
        finalTitle: "Show us the mirror and wall",
        finalText: "With clear photos and approximate dimensions we can recommend the fixings and quote before the visit.",
      };

  const related = [
    { title: isEs ? "Colgar cuadros" : "Picture hanging", description: isEs ? "Cuadros, marcos y composiciones niveladas." : "Pictures, frames and level gallery arrangements.", href: `/${locale}/colgar-cuadros-valencia` },
    { title: isEs ? "Instalar estanterías" : "Shelf installation", description: isEs ? "Baldas y estantes con fijación segura." : "Shelves and ledges with secure wall fixing.", href: `/${locale}/services/furniture/instalacion-estanterias-valencia` },
    { title: isEs ? "Accesorios de baño" : "Bathroom accessories", description: isEs ? "Toalleros, soportes y accesorios." : "Towel rails, holders and accessories.", href: `/${locale}/services/bathroom/accessory-installation` },
  ];

  return <SmallJobLanding locale={locale} path={path} serviceName={isEs ? "Colgar espejos en Valencia" : "Mirror hanging in Valencia"} copy={copy} related={related} />;
}
