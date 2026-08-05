import type { Metadata } from "next";
import SmallJobLanding from "@/app/components/SmallJobLanding";
import type { SmallJobCopy } from "@/app/components/SmallJobLanding";

type Props = { params: Promise<{ locale: string }> };
const baseUrl = "https://www.thevulgo.es";
const path = "instalacion-barras-cortina-valencia";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const title = isEs
    ? "Instalación de Barras de Cortina en Valencia | THEVULGO"
    : "Curtain Rod Installation in Valencia | THEVULGO";
  const description = isEs
    ? "Instalación de barras y rieles de cortina en Valencia. Medición, taladro, soportes, nivelación y fijación a pared o techo. Presupuesto por WhatsApp."
    : "Curtain rod and rail installation in Valencia. Measuring, drilling, brackets, levelling and wall or ceiling fixing. Quote by WhatsApp.";
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${path}`,
      languages: { es: `${baseUrl}/es/${path}`, en: `${baseUrl}/en/${path}`, "x-default": `${baseUrl}/es/${path}` },
    },
    openGraph: { title, description, url: `${baseUrl}/${locale}/${path}`, siteName: "THEVULGO", type: "website", locale: isEs ? "es_ES" : "en_GB" },
    robots: { index: true, follow: true },
  };
}

export default async function CurtainRodPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";

  const copy: SmallJobCopy = isEs
    ? {
        badge: "Cortinas · Valencia y alrededores",
        title: "Instalación de barras y rieles de cortina en Valencia",
        intro: "Montamos barras, rieles y soportes de cortina en pared o techo. Medimos, nivelamos y elegimos la fijación adecuada para que el conjunto quede recto y firme.",
        startingPrice: "Desde 35 €",
        includedTitle: "Qué instalamos",
        includedIntro: "Puedes enviar el modelo comprado y fotos del hueco para confirmar el trabajo.",
        included: ["Barras de cortina simples y dobles", "Rieles de pared o techo", "Soportes y anclajes", "Medición, centrado y nivelación", "Reajuste de barras o rieles sueltos"],
        processTitle: "De la medida a la instalación",
        process: [["Envía fotos y medidas", "Muestra la ventana, pared o techo y el modelo de barra o riel."], ["Revisamos el montaje", "Confirmamos longitud, soportes, tipo de pared y material necesario."], ["Instalamos y probamos", "Marcamos, perforamos, nivelamos y comprobamos el movimiento de la cortina."]],
        faqTitle: "Preguntas sobre barras y rieles",
        faqs: [["¿Cuánto cuesta instalar una barra de cortina?", "Una instalación sencilla suele empezar desde 35 €. Depende de la longitud, número de soportes, altura y tipo de pared."], ["¿Instaláis rieles en el techo?", "Sí, si el techo y el sistema de fijación son adecuados. Envía fotos del riel y del techo antes de reservar."], ["¿Se puede instalar en pladur?", "Sí, cuando el peso y la estructura lo permiten, utilizando fijaciones apropiadas para pladur."], ["¿Podéis instalar varias barras en una visita?", "Sí. Podemos presupuestar varias ventanas y combinar el trabajo con estantes, cuadros u otras pequeñas instalaciones."]],
        relatedTitle: "Otros trabajos de pared",
        whatsappMessage: "Hola. Necesito instalar una barra o riel de cortina en Valencia. Puedo enviar fotos, medidas y el modelo comprado.",
        whatsappLabel: "Enviar fotos por WhatsApp",
        formLabel: "Pedir presupuesto",
        finalTitle: "Envíanos el modelo y las medidas",
        finalText: "Con una foto de la ventana, pared o techo y del producto comprado podemos darte una estimación clara.",
      }
    : {
        badge: "Curtains · Valencia and nearby",
        title: "Curtain rod and rail installation in Valencia",
        intro: "We fit curtain rods, tracks and brackets to walls or ceilings. We measure, level and choose suitable fixings so everything is straight and secure.",
        startingPrice: "From €35",
        includedTitle: "What we install",
        includedIntro: "Send the purchased model and photos of the opening so we can confirm the work.",
        included: ["Single and double curtain rods", "Wall or ceiling tracks", "Brackets and anchors", "Measuring, centring and levelling", "Adjustment of loose rods or rails"],
        processTitle: "From measurement to installation",
        process: [["Send photos and measurements", "Show the window, wall or ceiling and the rod or rail model."], ["We review the mounting", "We confirm length, brackets, wall type and required materials."], ["Install and test", "We mark, drill, level and test the curtain movement."]],
        faqTitle: "Curtain rod and rail questions",
        faqs: [["How much does curtain rod installation cost?", "A simple installation usually starts from €35. It depends on length, number of brackets, height and wall type."], ["Do you fit ceiling tracks?", "Yes, when the ceiling and mounting system are suitable. Send photos of the track and ceiling before booking."], ["Can it be installed on drywall?", "Yes, when weight and structure allow it, using fixings appropriate for drywall."], ["Can you install several rods in one visit?", "Yes. We can quote several windows and combine this with shelves, pictures or other small installations."]],
        relatedTitle: "Other wall installation jobs",
        whatsappMessage: "Hi. I need a curtain rod or rail installed in Valencia. I can send photos, dimensions and the purchased model.",
        whatsappLabel: "Send photos by WhatsApp",
        formLabel: "Request a quote",
        finalTitle: "Send the model and measurements",
        finalText: "With a photo of the window, wall or ceiling and purchased product we can provide a clear estimate.",
      };

  const related = [
    { title: isEs ? "Colgar cuadros" : "Picture hanging", description: isEs ? "Marcos y decoración bien nivelados." : "Level frames and wall decoration.", href: `/${locale}/colgar-cuadros-valencia` },
    { title: isEs ? "Colgar espejos" : "Mirror hanging", description: isEs ? "Montaje seguro según peso y pared." : "Safe mounting for the mirror and wall type.", href: `/${locale}/colgar-espejos-valencia` },
    { title: isEs ? "Pequeños trabajos de taladro" : "Small drilling jobs", description: isEs ? "Tacos, soportes y pequeñas fijaciones." : "Wall plugs, brackets and small fixings.", href: `/${locale}/services/repairs/small-drilling-jobs` },
  ];

  return <SmallJobLanding locale={locale} path={path} serviceName={isEs ? "Instalación de barras de cortina en Valencia" : "Curtain rod installation in Valencia"} copy={copy} related={related} />;
}
