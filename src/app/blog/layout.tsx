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
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
