import { Metadata } from 'next';
import { ciudadesEspana, especialidades } from '@/data/locations';

type Props = {
  params: Promise<{ especialidad: string; ciudad: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  
  const especialidadData = especialidades.find(
    (e) => e.slug === resolvedParams.especialidad
  );
  
  const ciudadData = ciudadesEspana.find(
    (c) => c.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '') === resolvedParams.ciudad
  );

  if (!especialidadData || !ciudadData) {
    return { title: 'No encontrado' };
  }

  return {
    title: `Psicólogo ${especialidadData.nombre} Online ${ciudadData.nombre} - Terapia Especializada | Marta Muñiz`,
    description: `Psicóloga especializada en ${especialidadData.nombre.toLowerCase()} online para ${ciudadData.nombre}. ${especialidadData.descripcionCorta}. Sesiones por videollamada desde 55€.`,
    keywords: [
      `psicólogo ${especialidadData.slug} online ${ciudadData.nombre}`,
      `terapia ${especialidadData.slug} online ${ciudadData.nombre}`,
      `psicóloga ${especialidadData.slug} ${ciudadData.provincia}`,
      ...especialidadData.keywords.map(k => `${k} online ${ciudadData.nombre}`),
    ],
    openGraph: {
      title: `Psicólogo ${especialidadData.nombre} Online en ${ciudadData.nombre}`,
      description: `Terapia especializada en ${especialidadData.nombre.toLowerCase()} para personas de ${ciudadData.nombre}. Sesiones online desde 55€.`,
      type: "website",
      locale: "es_ES",
      url: `https://martamg.com/${especialidadData.slug}/online/${resolvedParams.ciudad}`,
      siteName: "Marta Muñiz Psicóloga",
      images: [
        {
          url: "https://martamg.com/og-especialidad-online.jpg",
          width: 1200,
          height: 630,
          alt: `Psicólogo ${especialidadData.nombre} Online ${ciudadData.nombre}`,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Psicólogo ${especialidadData.nombre} Online en ${ciudadData.nombre}`,
      description: `Terapia ${especialidadData.nombre.toLowerCase()} para ${ciudadData.nombre}. Sesiones online desde 55€.`,
      images: ["https://martamg.com/og-especialidad-online.jpg"],
    },
    alternates: {
      canonical: `https://martamg.com/${especialidadData.slug}/online/${resolvedParams.ciudad}`,
    },
  };
}

export default function EspecialidadCiudadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
