import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terapia Individual en Santander y Online | Marta Muñiz Psicóloga',
  description: 'Terapia psicológica individual en Santander y online. Especializada en ansiedad, depresión, duelo, estrés y baja autoestima. Primera sesión 60€. Más de 10 años de experiencia.',
  keywords: [
    'terapia individual Santander',
    'psicóloga individual online',
    'terapia ansiedad Santander',
    'psicóloga depresión online',
    'terapia duelo individual',
    'psicóloga estrés Cantabria',
    'ayuda psicológica individual',
    'terapia autoestima online',
    'psicóloga crisis vital',
    'sesiones psicología individual'
  ],
  openGraph: {
    title: 'Terapia Individual | Marta Muñiz Psicóloga',
    description: 'Terapia individual personalizada para ansiedad, depresión, duelo y más. Presencial en Santander y online.',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://martamg.com/terapia-individual',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
