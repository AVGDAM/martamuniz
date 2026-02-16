import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Marta Muñiz - Psicóloga en Santander | Terapia Online",
  description: "Psicóloga sanitaria en Santander especializada en procesos de duelo, terapia de pareja, adicciones y trastorno de género. Sesiones presenciales y terapia online en toda España. +10 años de experiencia.",
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
    "consulta psicología Cantabria",
    "psicóloga sanitaria colegiada",
    "terapia ansiedad online",
    "psicóloga depresión Santander"
  ],
  authors: [{ name: "Marta Muñiz", url: "https://martamg.com" }],
  creator: "Marta Muñiz",
  publisher: "Marta Muñiz",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Marta Muñiz - Psicóloga Especialista en Duelo y Pareja",
    description: "Terapia presencial en Santander y online en toda España. Especializada en duelo, pareja, adicciones y trastorno de género.",
    type: "website",
    locale: "es_ES",
    url: "https://martamg.com",
    siteName: "Marta Muñiz Psicóloga",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://martamg.com",
  },
  category: "Salud Mental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Marta Muñiz - Psicóloga',
    description: 'Psicóloga sanitaria especializada en duelo, terapia de pareja, adicciones y trastorno de género. Sesiones presenciales en Santander y terapia online.',
    url: 'https://martamg.com',
    telephone: '+34680614901',
    email: 'hola@martamg.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santander',
      addressRegion: 'Cantabria',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.4623',
      longitude: '-3.8099',
    },
    priceRange: '55€ - 70€',
    areaServed: [
      {
        '@type': 'Country',
        name: 'España',
      },
      {
        '@type': 'City',
        name: 'Santander',
      },
    ],
    availableLanguage: ['Español'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Psicología',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Terapia Individual',
            description: 'Terapia psicológica individual para ansiedad, depresión, duelo y más',
            provider: {
              '@type': 'Person',
              name: 'Marta Muñiz',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Terapia de Pareja',
            description: 'Terapia para mejorar la comunicación y resolver conflictos en pareja',
            provider: {
              '@type': 'Person',
              name: 'Marta Muñiz',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Terapia Online',
            description: 'Sesiones de psicología por videollamada desde cualquier lugar',
            provider: {
              '@type': 'Person',
              name: 'Marta Muñiz',
            },
          },
        },
      ],
    },
  };

  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
