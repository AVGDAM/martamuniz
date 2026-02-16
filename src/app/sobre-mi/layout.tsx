import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Mí | Marta Muñiz - Psicóloga Sanitaria en Santander',
  description: 'Marta Muñiz, psicóloga sanitaria colegiada con más de 10 años de experiencia. Especializada en duelo, terapia de pareja, adicciones y trastorno de género. Consulta en Santander y online.',
  keywords: [
    'Marta Muñiz psicóloga',
    'psicóloga sanitaria Santander',
    'psicóloga colegiada Cantabria',
    'experiencia psicóloga duelo',
    'formación psicóloga Santander',
    'psicóloga especialista pareja'
  ],
  openGraph: {
    title: 'Sobre Mí | Marta Muñiz Psicóloga',
    description: 'Conoce mi formación, experiencia y metodología de trabajo. Psicóloga sanitaria especializada en duelo y pareja.',
    type: 'profile',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://martamg.com/sobre-mi',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
