"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  BadgeCheck,
  Camera,
  BellRing,
  Lock,
  Wifi,
  Plug,
  Router,
  Smartphone,
  Siren,
  Radio,
  House,
  Lightbulb,
  Thermometer,
  MonitorSmartphone,
  Speaker,
  Wrench,
  ScanSearch,
  BatteryCharging,
  KeyRound,
} from "lucide-react";

export default function SmartHomeClient() {
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === "es";

  const estimateHref = `/${locale}/estimate?category=smart-home`;

  const whatsappText = encodeURIComponent(
    isEs
      ? "Hola, me gustaría pedir presupuesto para instalación de hogar inteligente y dispositivos en Valencia."
      : "Hi! I’d like an estimate for smart home and device installation in Valencia."
  );

  const whatsappHref = `https://wa.me/34610076942?text=${whatsappText}`;

  const copy = {
    badge: "THEVULGO • Valencia",

    heroTitle: isEs ? "Hogar inteligente y dispositivos" : "Smart Home & Devices",
    heroSubtitle: isEs
      ? "Instalación de cámaras inteligentes, videoporteros, cerraduras inteligentes, sensores, enchufes, hubs, Wi-Fi y dispositivos conectados en Valencia."
      : "Smart camera installation, video doorbells, smart locks, sensors, plugs, hubs, Wi-Fi setup and connected home device installation in Valencia.",

    ctaTitle: isEs
      ? "¿Necesitas un presupuesto exacto para hogar inteligente?"
      : "Need an exact smart home estimate?",
    ctaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para cámaras inteligentes, cerraduras, sensores, enchufes, hubs o varios dispositivos conectados en una sola visita."
      : "Send your request now and get a clear estimate for smart cameras, locks, sensors, plugs, hubs or several connected devices in one visit.",
    estimateButton: isEs ? "Pedir presupuesto" : "Get estimate",

    seoBadge: isEs
      ? "Dispositivos inteligentes e instalación • Valencia"
      : "Smart devices & setup • Valencia",
    seoTitle: isEs
      ? "Servicios de instalación de hogar inteligente en Valencia"
      : "Smart Home Installation Services in Valencia",
    includedTitle: isEs ? "Qué está incluido" : "What is included",

    whyBadge: isEs
      ? "Por qué los clientes eligen este servicio"
      : "Why clients choose this service",
    whyTitle: isEs
      ? "Dispositivos conectados que funcionan mejor juntos"
      : "Connected devices that work better together",
    whyText: isEs
      ? "Este servicio es ideal para personas que quieren cámaras, sensores, acceso inteligente, iluminación o automatización instalados de forma limpia y configurados para facilitar el día a día."
      : "This service is ideal for people who want cameras, sensors, smart access, lighting or device automation installed cleanly and set up in a way that actually makes daily life easier.",

    faqTitle: isEs
      ? "Preguntas frecuentes sobre hogar inteligente"
      : "Smart Home & Devices FAQ",

    finalCtaTitle: isEs
      ? "¿Listo para reservar tu instalación inteligente?"
      : "Ready to book your smart home setup?",
    finalCtaText: isEs
      ? "Envía tu solicitud ahora y recibe un presupuesto claro para cámaras inteligentes, cerraduras, sensores, iluminación o varios dispositivos conectados en Valencia."
      : "Send your request now and get a clear estimate for smart cameras, locks, sensors, lighting or several connected devices in Valencia.",

    finalNote: isEs
      ? "El precio final depende del tipo de dispositivo, cantidad, complejidad de montaje, condiciones del Wi-Fi y alcance total de la instalación."
      : "Final price depends on device type, quantity, mounting complexity, Wi-Fi conditions and total setup scope.",
  };

  const trustPoints = [
    {
      title: isEs ? "Respuesta rápida" : "Fast response",
      text: isEs
        ? "Comunicación rápida y próximos pasos claros antes de la cita."
        : "Quick communication and clear next steps before the appointment.",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Instalación limpia" : "Clean setup",
      text: isEs
        ? "Instalación ordenada, colocación limpia y uso práctico en el día a día."
        : "Neat installation, tidy positioning and practical everyday usability.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: isEs ? "Precio transparente" : "Transparent pricing",
      text: isEs
        ? "Estimación clara antes de empezar, según el alcance y el tipo de dispositivo."
        : "Clear estimate logic before work begins, based on scope and device type.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
  ];

  const services = [
    {
      title: isEs ? "Instalación de cámara inteligente" : "Smart camera installation",
      desc: isEs
        ? "Instalación de cámaras inteligentes interiores o exteriores con ubicación práctica, montaje limpio y configuración básica para app cuando sea compatible."
        : "Installation of indoor or outdoor smart cameras with practical placement, clean mounting and basic app-ready setup where supported.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Camera className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Instalación de videoportero inteligente" : "Video doorbell installation",
      desc: isEs
        ? "Instalación de videoporteros inteligentes compatibles con montaje limpio y configuración básica para conexión con la app."
        : "Installation of compatible smart video doorbells with clean mounting and basic device setup for app connection.",
      price: isEs ? "desde €49" : "from €49",
      icon: <BellRing className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de cerradura inteligente" : "Smart lock installation",
      desc: isEs
        ? "Instalación de cerraduras inteligentes y dispositivos de acceso cuando la puerta y el sistema sean compatibles."
        : "Installation of compatible smart locks and door access devices where the door and fitting are suitable.",
      price: isEs ? "desde €59" : "from €59",
      icon: <Lock className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de cámara Wi-Fi" : "Wi-Fi camera setup",
      desc: isEs
        ? "Conexión y colocación básica de cámaras Wi-Fi para pisos, casas y vigilancia interior sencilla."
        : "Basic connection and positioning of Wi-Fi cameras for apartments, homes and small indoor monitoring setups.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Wifi className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Montaje de cámara con batería" : "Battery camera mounting",
      desc: isEs
        ? "Montaje de cámaras con batería en ubicaciones interiores o exteriores adecuadas, cuidando el ángulo y la cobertura."
        : "Mounting of battery-powered cameras in suitable indoor or outdoor locations with attention to angle and coverage.",
      price: isEs ? "desde €39" : "from €39",
      icon: <BatteryCharging className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Montaje de cámara inteligente cableada" : "Wired smart camera mounting",
      desc: isEs
        ? "Montaje limpio de cámaras inteligentes cableadas compatibles cuando la alimentación y la ubicación ya son adecuadas."
        : "Clean mounting of compatible wired smart cameras where power and location are already suitable.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Camera className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de motor de cortinas inteligente" : "Smart curtain motor setup",
      desc: isEs
        ? "Configuración de motores inteligentes para cortinas o persianas con apertura automática, app o control por voz."
        : "Setup of smart curtain or blind motors for automated opening, closing and app or voice control in modern home environments.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Wifi className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de sensores inteligentes" : "Smart sensor installation",
      desc: isEs
        ? "Instalación de sensores compatibles de movimiento, puerta, ventana o ambiente para automatización y alertas."
        : "Installation of compatible smart motion, door, window or environmental sensors for home automation and alerts.",
      price: isEs ? "desde €35" : "from €35",
      icon: <ScanSearch className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Configuración de sensor puerta / ventana" : "Door / window sensor setup",
      desc: isEs
        ? "Configuración de sensores de contacto para entradas, armarios, ventanas o puertas dentro de sistemas inteligentes."
        : "Setup of contact sensors for entry points, cabinets, windows or doors as part of smart monitoring systems.",
      price: isEs ? "desde €29" : "from €29",
      icon: <ShieldCheck className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Instalación de sensor de movimiento" : "Motion sensor installation",
      desc: isEs
        ? "Instalación y colocación básica de sensores de movimiento interiores compatibles."
        : "Basic installation and placement of compatible indoor motion sensors for smarter alerts and automation.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Radio className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de enchufe inteligente" : "Smart plug setup",
      desc: isEs
        ? "Configuración y colocación de enchufes inteligentes para lámparas, aparatos o control programado."
        : "Configuration and placement of smart plugs for lamps, appliances or timed control in everyday home use.",
      price: isEs ? "desde €25" : "from €25",
      icon: <Plug className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de interruptor inteligente" : "Smart switch setup",
      desc: isEs
        ? "Instalación o configuración de interruptores inteligentes compatibles y dispositivos de control conectados."
        : "Installation or setup of compatible smart switches and connected control devices where suitable.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de luz inteligente" : "Smart light setup",
      desc: isEs
        ? "Configuración de bombillas inteligentes, luces conectadas y control por app para habitaciones o escenas."
        : "Setup of smart bulbs, connected lights and app-controlled lighting for rooms, shelves or home scenes.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de monitor de energía inteligente" : "Smart energy monitor setup",
      desc: isEs
        ? "Instalación y configuración de dispositivos compatibles para controlar consumo eléctrico y mejorar eficiencia."
        : "Installation and setup of compatible smart energy monitoring devices to track power usage and improve efficiency in everyday home use.",
      price: isEs ? "desde €39" : "from €39",
      icon: <BatteryCharging className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de tira LED inteligente" : "Smart LED strip setup",
      desc: isEs
        ? "Instalación y configuración básica de tiras LED inteligentes para iluminación decorativa, escritorios o zonas multimedia."
        : "Installation and basic configuration of smart LED strips for accent lighting, media units, desks or decorative areas.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Lightbulb className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Configuración de hub / bridge" : "Hub / bridge setup",
      desc: isEs
        ? "Configuración de hubs y bridges compatibles para cámaras, luces, sensores y automatizaciones."
        : "Setup of compatible hubs and bridges used for smart cameras, lights, sensors and automation devices.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Router className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Colocación de extensor Wi-Fi" : "Wi-Fi extender placement",
      desc: isEs
        ? "Colocación y configuración básica de extensores Wi-Fi compatibles para mejorar señal de dispositivos inteligentes."
        : "Basic placement and setup of compatible Wi-Fi extenders to improve signal for smart devices around the home.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Wifi className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Vinculación de router / dispositivos" : "Router / smart device pairing",
      desc: isEs
        ? "Ayuda para conectar dispositivos inteligentes compatibles a Wi-Fi, apps y configuraciones básicas."
        : "Help with connecting compatible smart devices to Wi-Fi networks, apps and basic home setups.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Router className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de intercomunicador inteligente" : "Intercom device setup",
      desc: isEs
        ? "Configuración o montaje básico de intercomunicadores inteligentes y unidades de acceso compatibles."
        : "Basic setup or mounting of compatible smart intercom devices and connected access units where suitable.",
      price: isEs ? "desde €49" : "from €49",
      icon: <MonitorSmartphone className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de alarma inteligente" : "Smart alarm device setup",
      desc: isEs
        ? "Instalación y colocación de partes compatibles de alarma inteligente como hubs, sensores y sirenas."
        : "Installation and positioning of compatible smart alarm parts such as hubs, sensors and sirens for home use.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Siren className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Configuración de sirena interior" : "Indoor siren setup",
      desc: isEs
        ? "Configuración y colocación básica de sirenas interiores o dispositivos de alerta compatibles."
        : "Basic setup and positioning of compatible indoor sirens or alert devices in smart home systems.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Siren className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Montaje de sirena exterior" : "Outdoor siren mounting",
      desc: isEs
        ? "Montaje de sirenas exteriores compatibles cuando el dispositivo y la ubicación sean adecuados."
        : "Mounting of compatible outdoor sirens where the device and location are suitable for installation.",
      price: isEs ? "desde €39" : "from €39",
      icon: <Siren className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de termostato inteligente" : "Smart thermostat setup",
      desc: isEs
        ? "Configuración básica de termostatos inteligentes y control climático conectado cuando el sistema lo permita."
        : "Basic setup of compatible smart thermostats and connected climate control devices where the system allows it.",
      price: isEs ? "desde €49" : "from €49",
      icon: <Thermometer className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de asistente de voz" : "Voice assistant device setup",
      desc: isEs
        ? "Configuración de altavoces inteligentes y asistentes de voz para control básico de luces, enchufes y dispositivos."
        : "Setup of smart speakers and voice assistant devices for basic control of lights, plugs and compatible home devices.",
      price: isEs ? "desde €29" : "from €29",
      icon: <Speaker className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de pantalla inteligente" : "Smart display setup",
      desc: isEs
        ? "Configuración de pantallas inteligentes compatibles para monitoreo, intercomunicador o control del hogar."
        : "Configuration of compatible smart displays for monitoring, intercom use or home control in one place.",
      price: isEs ? "desde €35" : "from €35",
      icon: <MonitorSmartphone className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Ayuda con conexión a app" : "App connection help",
      desc: isEs
        ? "Ayuda básica para conectar dispositivos inteligentes compatibles a apps, cuentas y configuración de usuario."
        : "Basic assistance with connecting compatible smart devices to their mobile apps, accounts and user setup steps.",
      price: isEs ? "desde €25" : "from €25",
      icon: <Smartphone className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Solución de problemas smart home" : "Smart home troubleshooting",
      desc: isEs
        ? "Solución práctica de problemas comunes de conexión, ubicación o configuración en entornos inteligentes simples."
        : "Practical troubleshooting for common connection, positioning or device setup issues in simple smart home environments.",
      price: isEs ? "desde €35" : "from €35",
      icon: <Wrench className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Optimización de ángulo de cámara" : "Camera angle optimization",
      desc: isEs
        ? "Ajuste de cámaras instaladas para mejorar cobertura, vigilancia de entradas o visibilidad en zonas clave."
        : "Adjustment of mounted cameras to improve room coverage, entry monitoring or visibility around key areas.",
      price: isEs ? "desde €25" : "from €25",
      icon: <Camera className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración de acceso inteligente" : "Entry access device setup",
      desc: isEs
        ? "Configuración de dispositivos de entrada inteligente como cerraduras, teclados y accesorios compatibles."
        : "Setup of smart entry devices such as connected locks, keypads and access accessories where compatible.",
      price: isEs ? "desde €49" : "from €49",
      icon: <KeyRound className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Configuración smart de habitación" : "Smart home room setup",
      desc: isEs
        ? "Instalación combinada de varios dispositivos en una habitación: luces, enchufes, sensores y cámaras."
        : "Combined installation and setup of several smart devices in one room such as lights, plugs, sensors and cameras.",
      price: isEs ? "desde €69" : "from €69",
      icon: <House className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
    {
      title: isEs ? "Configuración smart para apartamento" : "Apartment smart setup",
      desc: isEs
        ? "Configuración inteligente para apartamentos con cámaras, enchufes, luces y sensores."
        : "Smart home setup for apartments including practical combinations of cameras, plugs, lights and sensors.",
      price: isEs ? "desde €79" : "from €79",
      icon: <House className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Recolocación y optimización de dispositivos" : "Device repositioning & optimization",
      desc: isEs
        ? "Mejora de ubicación de dispositivos existentes para mejor señal, cobertura y uso: cámaras, sensores y equipos Wi-Fi."
        : "Improving placement of existing smart devices for better signal, coverage and usability. Includes camera angles, sensors and Wi-Fi-dependent devices.",
      price: isEs ? "desde €29" : "from €29",
      icon: <ScanSearch className="h-5 w-5" />,
      className: "",
    },
    {
      title: isEs ? "Varias tareas de hogar inteligente" : "Multiple smart home tasks",
      desc: isEs
        ? "La mejor opción si necesitas instalar o configurar varios dispositivos en una sola visita: cámaras, sensores, enchufes, cerraduras, luces y apps."
        : "Best option if you need several devices installed or configured in one visit. Cameras, sensors, plugs, locks, lights and app setup can be grouped into one organized appointment.",
      price: isEs ? "presupuesto personalizado" : "custom quote",
      icon: <Wrench className="h-5 w-5" />,
      className: "lg:col-span-2",
    },
  ];

  const whyChoose = isEs
    ? [
        "Ideal para pisos, casas y propiedades en alquiler",
        "Útil para cámaras, acceso, iluminación y automatización diaria",
        "Varios dispositivos pueden agruparse en una sola visita",
        "Configuración práctica para que todo funcione junto",
        "Montaje limpio y mejor colocación de dispositivos",
        "Presupuesto claro antes de reservar con alcance definido",
      ]
    : [
        "Good for apartments, homes and rental properties",
        "Useful for cameras, access, lighting and everyday smart automation",
        "Several smart devices can be grouped into one organized visit",
        "Practical setup for clients who want everything working together",
        "Clean mounting and clearer device placement around the home",
        "Clear estimate before booking with defined scope",
      ];

  const includedItems = isEs
    ? [
        "Instalación de cámaras inteligentes y videoporteros",
        "Configuración de cerraduras inteligentes y acceso",
        "Sensores, sirenas y dispositivos de alarma inteligente",
        "Enchufes, luces y tiras LED inteligentes",
        "Hubs, bridges, routers y ayuda con conexión Wi-Fi",
        "Pantallas inteligentes, intercomunicadores y asistentes de voz",
        "Solución de problemas y organización por habitación",
        "Varios dispositivos conectados en una sola visita",
      ]
    : [
        "Smart camera and video doorbell installation",
        "Smart lock and entry access device setup",
        "Sensor, siren and smart alarm device setup",
        "Smart plugs, lights and LED strip configuration",
        "Hubs, bridges, routers and Wi-Fi device connection help",
        "Smart display, intercom and voice assistant setup",
        "Troubleshooting and room-based smart device organization",
        "Several connected devices grouped into one visit",
      ];

  const faqItems = [
    {
      q: isEs
        ? "¿Qué dispositivos de hogar inteligente instalas?"
        : "What kind of smart home devices do you install?",
      a: isEs
        ? "Esta página incluye dispositivos inteligentes comunes como cámaras, videoporteros, cerraduras inteligentes, enchufes, sensores, luces, hubs, sirenas, termostatos y tecnología doméstica compatible."
        : "This page includes common household smart devices such as cameras, video doorbells, smart locks, smart plugs, sensors, lights, hubs, sirens, thermostats and similar compatible home technology.",
    },
    {
      q: isEs
        ? "¿Se pueden configurar varios dispositivos en una visita?"
        : "Can several smart devices be set up in one visit?",
      a: isEs
        ? "Sí. Es una de las razones principales para usar este servicio. Cámaras, enchufes, sensores, luces y configuración de apps pueden agruparse en una sola cita."
        : "Yes. This is one of the strongest reasons to use this service. Cameras, plugs, sensors, lights and app setup can often be grouped into one organized appointment.",
    },
    {
      q: isEs ? "¿Proporcionas los dispositivos?" : "Do you provide the devices?",
      a: isEs
        ? "Normalmente el cliente ya tiene los dispositivos, y el servicio se enfoca en instalación, montaje, configuración y puesta en marcha. La compatibilidad se puede revisar antes por mensaje o fotos."
        : "Usually the client already has the devices, and the service focuses on installation, mounting, setup and practical configuration. Compatibility can often be checked in advance by message or photos.",
    },
    {
      q: isEs
        ? "¿Puedes conectar dispositivos al Wi-Fi y a la app?"
        : "Can you help connect devices to Wi-Fi and the app?",
      a: isEs
        ? "Sí. La vinculación básica, conexión a app y ayuda de configuración están incluidas cuando los dispositivos y la red son adecuados."
        : "Yes. Basic device pairing, app connection and simple smart home setup assistance are included where the devices and network conditions are suitable.",
    },
    {
      q: isEs
        ? "¿Instalas cámaras inteligentes y videoporteros?"
        : "Do you install smart cameras and video doorbells?",
      a: isEs
        ? "Sí. Es una de las categorías principales. Se pueden instalar cámaras interiores, exteriores, Wi-Fi y videoporteros compatibles."
        : "Yes. This is one of the main categories on this page. Indoor and outdoor smart cameras, Wi-Fi cameras and compatible video doorbells can be installed and positioned cleanly.",
    },
    {
      q: isEs ? "¿Puedes instalar cerraduras inteligentes?" : "Can you set up smart locks?",
      a: isEs
        ? "Sí, siempre que la cerradura, la puerta y las condiciones de montaje sean compatibles con el dispositivo."
        : "Compatible smart lock installation can be included where the door, lock type and fitting conditions are suitable for the device.",
    },
    {
      q: isEs
        ? "¿También solucionas problemas de dispositivos inteligentes?"
        : "Do you also troubleshoot smart devices?",
      a: isEs
        ? "Sí. Problemas comunes como mala ubicación, errores de vinculación, confusión de configuración o mala organización pueden corregirse durante la visita."
        : "Yes. Common practical issues such as bad placement, pairing problems, setup confusion or basic device organization can often be corrected during a visit.",
    },
    {
      q: isEs
        ? "¿Este servicio sirve para pisos de alquiler?"
        : "Is this service useful for rental apartments?",
      a: isEs
        ? "Sí. Los dispositivos inteligentes son muy útiles para pisos de alquiler, mudanzas, mejoras del hogar, control de habitaciones y seguridad básica."
        : "Yes. Smart home devices are very useful for rental apartments, move-ins, home upgrades, room control and simple apartment security improvements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <section className="relative py-16 sm:py-20 px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl" />
          <div className="absolute right-10 top-24 h-[320px] w-[320px] rounded-full bg-yellow-100/60 blur-3xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-white px-3 py-1 text-xs font-semibold text-black shadow-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              {copy.badge}
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black">
              {copy.heroTitle}
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
              {copy.heroSubtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div key={point.title} className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-md transition-all duration-200 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                  {point.icon}
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-black">{point.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-7">{point.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
              {services.map((s, index) => (
                <div key={`${s.title}-${index}`} className={`rounded-2xl border border-yellow-400 bg-white p-7 text-left shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.02] min-h-[210px] ${s.className || ""}`}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black shadow-md">
                    {s.icon}
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-black">{s.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{s.desc}</p>
                  <div className="mt-4 text-sm font-extrabold text-yellow-500">{s.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black">{copy.ctaTitle}</h2>
                <p className="mt-3 text-gray-600 leading-8">{copy.ctaText}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => router.push(estimateHref)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition">
                  {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                </button>

                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <div className="w-full rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 lg:p-12 shadow-xl">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-4 py-1 text-xs font-semibold text-black">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    {copy.seoBadge}
                  </div>
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-black">
                  {copy.seoTitle}
                </h2>

                <div className="mt-6 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base text-center sm:text-left">
                  {isEs ? (
                    <>
                      <p>
                        Servicios profesionales de{" "}
                        <strong>instalación de hogar inteligente en Valencia</strong> para pisos,
                        casas y propiedades en alquiler. THEVULGO ayuda con instalación y configuración
                        práctica de cámaras, videoporteros, cerraduras inteligentes, sensores, enchufes,
                        hubs, luces, sirenas y dispositivos de automatización.
                      </p>
                      <p>
                        Los dispositivos inteligentes son más útiles cuando están bien colocados,
                        instalados de forma limpia y configurados para ser fáciles de usar.
                        Una cámara mal orientada, Wi-Fi débil o una configuración confusa reduce el valor del sistema.
                      </p>
                      <p>
                        Esta página está diseñada para montaje de dispositivos, configuración de apps,
                        vinculación básica, organización por habitación, control de acceso y automatización simple.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Professional <strong>smart home installation services in Valencia</strong>
                        for apartments, homes and rental properties. THEVULGO helps with the practical
                        installation and setup of connected home devices such as smart cameras, video doorbells,
                        smart locks, sensors, plugs, hubs, lights, sirens and related home automation hardware.
                      </p>
                      <p>
                        Smart home devices are most useful when they are installed cleanly, placed correctly
                        and configured in a way that makes everyday use simple. A badly placed camera, weak Wi-Fi connection,
                        poor doorbell angle or confusing device setup can reduce the value of the whole system.
                      </p>
                      <p>
                        This page is designed for practical connected home work: device mounting, app setup,
                        basic pairing, room-based smart organization, entry monitoring and simple smart automation support.
                      </p>
                    </>
                  )}
                </div>

                <div className="mt-8">
                  <h3 className="text-center sm:text-left text-lg font-extrabold text-black mb-4">
                    {copy.includedTitle}
                  </h3>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-[15px] sm:text-base">
                    {includedItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-5 text-gray-700 leading-8 text-[15px] sm:text-base">
                  {isEs ? (
                    <>
                      <p>
                        Un buen servicio de hogar inteligente no consiste solo en montar dispositivos.
                        Se trata de hacer que todo sea práctico, fiable y cómodo de usar: mejores ángulos,
                        mejor acceso, mejor automatización y control diario más claro.
                      </p>
                      <p>
                        THEVULGO trabaja principalmente en <strong>Valencia y alrededores</strong>,
                        ayudando a crear pisos y casas inteligentes más útiles con montaje limpio y configuración organizada.
                      </p>
                      <p>
                        Antes de empezar, el cliente recibe un presupuesto transparente según el número de dispositivos,
                        tipo de dispositivo, complejidad de montaje y alcance total.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Good smart home service is not just about attaching devices to the wall.
                        It is about making the whole setup practical, reliable and comfortable to use in real life.
                      </p>
                      <p>
                        THEVULGO works mainly in <strong>Valencia and nearby areas</strong>,
                        helping clients build more useful smart apartments and homes with practical device installation,
                        cleaner positioning and more organized setup in one place.
                      </p>
                      <p>
                        Before work begins, clients receive a transparent estimate based on the number of devices,
                        device type, mounting complexity and setup scope.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="max-w-5xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-yellow-50 px-3 py-1 text-xs font-semibold text-black">
                  <BadgeCheck className="h-4 w-4" />
                  {copy.whyBadge}
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-black">
                  {copy.whyTitle}
                </h2>

                <p className="mt-4 max-w-4xl text-gray-600 leading-8">
                  {copy.whyText}
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-gray-700 text-[15px] sm:text-base">
                  {whyChoose.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-[2px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button onClick={() => router.push(estimateHref)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition">
                    {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                  </button>

                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-8 sm:p-10 shadow-xl">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-10 text-center sm:text-left">
                  {copy.faqTitle}
                </h2>

                <div className="space-y-8">
                  {faqItems.map((item, index) => (
                    <div key={item.q} className={index === 0 ? "" : "border-t border-gray-200 pt-6"}>
                      <h3 className="font-extrabold text-black text-lg">{item.q}</h3>
                      <p className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-3xl border border-yellow-400 bg-white p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
                    {copy.finalCtaTitle}
                  </h2>
                  <p className="mt-3 text-gray-600 leading-8">
                    {copy.finalCtaText}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={() => router.push(estimateHref)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-extrabold text-black shadow-lg hover:scale-[1.02] transition">
                    {copy.estimateButton} <ArrowRight className="h-4 w-4" />
                  </button>

                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-black shadow-md hover:scale-[1.02] transition">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-10 text-center text-sm text-gray-500">
            {copy.finalNote}
          </div>
        </div>
      </section>
    </div>
  );
}