import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terapia Online | Psicóloga Online en Toda España | Marta Muñiz',
  description: 'Terapia psicológica online desde casa. Especializada en duelo, ansiedad, depresión y pareja. Sesiones por videollamada 55€. Atención profesional en toda España sin desplazamientos.',
  keywords: [
    'psicóloga online',
    'terapia online España',
    'psicóloga online duelo',
    'terapia ansiedad online',
    'psicóloga depresión online',
    'terapia pareja online',
    'psicóloga videollamada',
    'consulta psicología online',
    'terapia online Cantabria',
    'psicóloga online barata',
    'sesiones psicología online',
    'ayuda psicológica online',
    'terapia desde casa'
  ],
  openGraph: {
    title: 'Terapia Online | Psicóloga en Toda España',
    description: 'Terapia psicológica online con la comodidad de tu hogar. Especializada en duelo, ansiedad y pareja.',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://martamg.com/terapia-online',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
