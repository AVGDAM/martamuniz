import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog de Psicología | Artículos sobre Salud Mental y Bienestar',
  description: 'Artículos profesionales sobre duelo, terapia de pareja, ansiedad, depresión y salud mental. Consejos de psicología para mejorar tu bienestar emocional.',
  keywords: [
    'blog psicología',
    'artículos salud mental',
    'consejos psicológicos',
    'superar el duelo',
    'mejorar relación de pareja',
    'tratar ansiedad',
    'superar depresión',
    'terapia online blog',
    'psicóloga Santander blog',
    'bienestar emocional',
  ],
  openGraph: {
    title: 'Blog de Psicología | Marta Muñiz',
    description: 'Artículos profesionales sobre salud mental, duelo, pareja y bienestar emocional.',
    type: "website",
    locale: "es_ES",
    url: "https://martamg.com/blog",
    siteName: "Marta Muñiz Psicóloga",
    images: [
      {
        url: "https://martamg.com/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blog de Psicología de Marta Muñiz",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Psicología | Marta Muñiz",
    description: "Artículos sobre salud mental, duelo, pareja y bienestar.",
    images: ["https://martamg.com/og-blog.jpg"],
  },
  alternates: {
    canonical: "https://martamg.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
