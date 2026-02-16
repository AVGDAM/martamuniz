import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Marta Muñiz Psicóloga en Santander',
  description: 'Contacta con Marta Muñiz, psicóloga en Santander. WhatsApp 680 614 901 | Email hola@martamg.com. Consulta presencial en Santander y sesiones online disponibles.',
  keywords: [
    'contacto psicóloga Santander',
    'pedir cita psicóloga Santander',
    'teléfono psicóloga Cantabria',
    'reservar sesión psicología',
    'consulta psicóloga Santander',
    'agendar terapia online'
  ],
  openGraph: {
    title: 'Contacto | Marta Muñiz Psicóloga',
    description: 'Reserva tu cita de psicología. WhatsApp, teléfono y email. Consulta en Santander y online.',
    type: 'website',
    locale: 'es_ES',
  },
  alternates: {
    canonical: 'https://martamg.com/contacto',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
