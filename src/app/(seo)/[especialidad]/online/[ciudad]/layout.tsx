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
