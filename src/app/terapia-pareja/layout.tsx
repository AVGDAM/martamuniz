import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terapia de Pareja en Santander y Online | Marta Muñiz Psicóloga',
  description: 'Terapia de pareja en Santander y online. Mejora la comunicación, resuelve conflictos y fortalece tu relación. Primera sesión 70€. Psicóloga especializada con +10 años de experiencia.',
  keywords: [
    'terapia de pareja Santander',
    'psicóloga pareja online',
    'terapia matrimonial Santander',
    'problemas de pareja Cantabria',
    'terapia infidelidad',
    'comunicación pareja online',
    'crisis de pareja Santander',
    'psicóloga relaciones online',
    'terapia conflictos pareja',
    'consejería matrimonial Santander'
  ],
  openGraph: {
    title: 'Terapia de Pareja | Marta Muñiz Psicóloga',
    description: 'Mejora vuestra relación con terapia de pareja profesional. Presencial en Santander y online en toda España.',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://martamg.com/terapia-pareja',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
