import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    title: isEs ? "Política de privacidad | THEVULGO" : "Privacy policy | THEVULGO",
    description: isEs ? "Información sobre el tratamiento de datos personales en THEVULGO." : "Information about personal data processing at THEVULGO.",
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const isEs = locale === "es";
  const sections = isEs ? [
    ["Responsable y contacto", "THEVULGO gestiona los datos enviados mediante sus formularios. Para cualquier consulta de privacidad o para ejercer tus derechos, escribe a info@thevulgo.es."],
    ["Datos que recogemos", "Podemos recoger nombre, teléfono, email, zona, información sobre el servicio, comentarios y las fotografías que decidas adjuntar."],
    ["Para qué utilizamos los datos", "Utilizamos estos datos únicamente para responder a tu solicitud, preparar un presupuesto, organizar el servicio, comunicarnos contigo y mantener el seguimiento necesario en nuestra CRM."],
    ["Base del tratamiento", "Tratamos los datos para atender las medidas solicitadas antes de una posible contratación y, cuando corresponde, sobre la base del consentimiento que otorgas al enviar el formulario."],
    ["Proveedores", "Para prestar el servicio podemos utilizar proveedores tecnológicos de alojamiento, base de datos, almacenamiento y email, como Supabase, Vercel y Resend, sujetos a sus obligaciones de protección de datos y a las garantías aplicables."],
    ["Conservación", "Las solicitudes que no se conviertan en trabajo se conservarán durante un máximo de 12 meses para poder realizar seguimiento. Si contratas un servicio, algunos datos podrán conservarse durante los plazos necesarios para gestionar la relación y cumplir obligaciones aplicables. Puedes pedir antes su supresión cuando proceda."],
    ["Tus derechos", "Puedes solicitar acceso, rectificación, supresión, limitación, oposición o portabilidad, y retirar tu consentimiento, escribiendo a info@thevulgo.es. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos."],
    ["Fotografías", "Las fotografías se utilizan para valorar el trabajo solicitado. No envíes documentos, rostros u otra información personal que no sea necesaria. Los enlaces de acceso son privados y temporales."],
  ] : [
    ["Controller and contact", "THEVULGO manages the data submitted through its forms. For privacy questions or to exercise your rights, email info@thevulgo.es."],
    ["Data we collect", "We may collect your name, phone number, email, area, service information, comments and any photos you choose to attach."],
    ["How we use the data", "We use this data only to answer your request, prepare an estimate, organise the service, contact you and maintain the necessary follow-up in our CRM."],
    ["Legal basis", "We process the data to take the steps you request before a possible contract and, where appropriate, on the basis of the consent you give when submitting the form."],
    ["Providers", "We may use technology providers for hosting, databases, storage and email, including Supabase, Vercel and Resend, subject to their data-protection obligations and applicable safeguards."],
    ["Retention", "Requests that do not become jobs are kept for up to 12 months for follow-up. If you book a service, some data may be kept for the periods needed to manage the relationship and meet applicable obligations. You may request earlier deletion where applicable."],
    ["Your rights", "You may request access, correction, deletion, restriction, objection or portability, and withdraw consent, by emailing info@thevulgo.es. You may also lodge a complaint with the Spanish Data Protection Agency."],
    ["Photos", "Photos are used to assess the requested work. Do not send documents, faces or other personal information that is not needed. Access links are private and temporary."],
  ];

  return (
    <main className="min-h-screen bg-yellow-50 px-5 py-12 text-neutral-950 sm:px-8 sm:py-20">
      <article className="mx-auto max-w-4xl rounded-[2rem] border-2 border-yellow-400 bg-white p-6 shadow-xl sm:p-10">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-neutral-500">THEVULGO</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{isEs ? "Política de privacidad" : "Privacy policy"}</h1>
        <p className="mt-4 text-sm text-neutral-500">{isEs ? "Última actualización: 5 de agosto de 2026" : "Last updated: 5 August 2026"}</p>
        <div className="mt-10 space-y-8">
          {sections.map(([title, text]) => (
            <section key={title}>
              <h2 className="text-xl font-black">{title}</h2>
              <p className="mt-2 leading-7 text-neutral-700">{text}</p>
            </section>
          ))}
        </div>
        <Link href={`/${locale}`} className="mt-10 inline-flex rounded-xl bg-yellow-400 px-5 py-3 font-black text-black">{isEs ? "Volver al inicio" : "Back to home"}</Link>
      </article>
    </main>
  );
}
