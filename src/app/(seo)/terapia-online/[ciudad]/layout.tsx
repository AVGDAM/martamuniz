import { Metadata } from 'next';
import { ciudadesEspana } from '@/data/locations';

type Props = {
  params: Promise<{ ciudad: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const ciudadData = ciudadesEspana.find(
    (c) => c.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '') === resolvedParams.ciudad
  );

  if (!ciudadData) {
    return {
      title: 'Ciudad no encontrada',
    };
  }

  return {
    title: `Psicóloga Online en ${ciudadData.nombre} - Terapia por Videollamada | Marta Muñiz`,
    description: `Psicóloga online para personas de ${ciudadData.nombre}, ${ciudadData.provincia}. Terapia por videollamada con psicóloga colegiada. Ansiedad, depresión, duelo, pareja. Primera sesión 55€.`,
    keywords: [
      `psicóloga online ${ciudadData.nombre}`,
      `terapia online ${ciudadData.nombre}`,
      `psicólogo online ${ciudadData.nombre}`,
      `terapia videollamada ${ciudadData.nombre}`,
      `psicóloga ${ciudadData.provincia}`,
      `terapia ansiedad online ${ciudadData.nombre}`,
      `psicólogo pareja online ${ciudadData.nombre}`,
      `terapia depresión online ${ciudadData.nombre}`,
    ],
    openGraph: {
      title: `Psicóloga Online en ${ciudadData.nombre} - Terapia por Videollamada`,
      description: `Terapia online profesional para personas de ${ciudadData.nombre} y ${ciudadData.provincia}. Sesiones por videollamada desde 55€.`,
    },
  };
}

export default function TerapiaOnlineCiudadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
