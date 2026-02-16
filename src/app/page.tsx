import { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Marta Muñiz - Psicóloga en Santander | Duelo, Pareja y Terapia Online",
  description: "Psicóloga especializada en procesos de duelo, terapia de pareja, adicciones y trastorno de género. Sesiones presenciales en Santander y terapia online. +10 años de experiencia.",
  keywords: [
    "psicóloga Santander",
    "terapia online",
    "psicóloga duelo Santander",
    "terapia de pareja Santander",
    "psicóloga adicciones",
    "terapia género Santander",
    "psicóloga online España",
    "terapia duelo online",
    "ayuda psicológica Santander",
    "consulta psicología Cantabria"
  ],
  openGraph: {
    title: "Marta Muñiz - Psicóloga Especialista en Duelo y Pareja",
    description: "Terapia presencial en Santander y online. Especializada en duelo, pareja, adicciones y trastorno de género.",
    type: "website",
    locale: "es_ES",
    siteName: "Marta Muñiz Psicóloga",
    url: "https://martamg.com",
    images: [
      {
        url: "https://martamg.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marta Muñiz - Psicóloga en Santander | Terapia Online",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marta Muñiz - Psicóloga Especialista en Duelo y Pareja",
    description: "Terapia presencial en Santander y online. Especializada en duelo, pareja, ansiedad y depresión.",
    images: ["https://martamg.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://martamg.com",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://martamg.com/#organization",
    name: "Marta Muñiz - Psicóloga",
    url: "https://martamg.com",
    logo: "https://martamg.com/favicon.svg",
    image: "https://martamg.com/og-image.jpg",
    description: "Psicóloga especializada en procesos de duelo, terapia de pareja, adicciones y trastorno de género. Sesiones presenciales en Santander y terapia online.",
    telephone: "+34680614901",
    email: "hola@martamg.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Santander",
      addressLocality: "Santander",
      addressRegion: "Cantabria",
      postalCode: "39001",
      addressCountry: "ES"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.4623,
      longitude: -3.8099
    },
    areaServed: [
      {
        "@type": "Country",
        name: "España"
      },
      {
        "@type": "AdministrativeArea",
        name: "Cantabria"
      }
    ],
    priceRange: "€€",
    paymentAccepted: ["Efectivo", "Transferencia", "Bizum"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Psicología",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Terapia Individual Online",
            description: "Sesiones de terapia individual por videollamada"
          },
          price: "55",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Terapia de Pareja Online",
            description: "Sesiones de terapia de pareja por videollamada"
          },
          price: "70",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Terapia Individual Presencial",
            description: "Sesiones de terapia individual en consulta"
          },
          price: "60",
          priceCurrency: "EUR"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Terapia de Pareja Presencial",
            description: "Sesiones de terapia de pareja en consulta"
          },
          price: "80",
          priceCurrency: "EUR"
        }
      ]
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://martamg.com/#person",
    name: "Marta Muñiz",
    jobTitle: "Psicóloga Sanitaria",
    url: "https://martamg.com",
    image: "https://martamg.com/marta-muniz.jpg",
    telephone: "+34680614901",
    email: "hola@martamg.com",
    knowsAbout: [
      "Psicología Clínica",
      "Terapia de Duelo",
      "Terapia de Pareja",
      "Tratamiento de Adicciones",
      "Terapia Online",
      "Ansiedad",
      "Depresión"
    ],
    alumniOf: "Universidad de Psicología",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santander",
      addressRegion: "Cantabria",
      addressCountry: "ES"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://martamg.com/#website",
    url: "https://martamg.com",
    name: "Marta Muñiz - Psicóloga",
    description: "Psicóloga especializada en duelo, pareja y terapia online en Santander",
    publisher: {
      "@id": "https://martamg.com/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://martamg.com/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
      <Specialties />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
}
