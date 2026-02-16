import { Metadata } from 'next';
import { ciudadesCantabria } from '@/data/locations';

type Props = {
  params: Promise<{ ciudad: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const ciudadData = ciudadesCantabria.find(
    (c) => c.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '') === resolvedParams.ciudad
  );

  if (!ciudadData) {
    return { title: 'Ciudad no encontrada' };
  }

  return {
    title: `Psicóloga en ${ciudadData.nombre}, Cantabria - Terapia Presencial | Marta Muñiz`,
    description: `Psicóloga en ${ciudadData.nombre}, Cantabria. Terapia presencial en Santander para personas de ${ciudadData.nombre}. Ansiedad, depresión, duelo, pareja. Psicóloga sanitaria colegiada.`,
    keywords: [
      `psicóloga ${ciudadData.nombre}`,
      `psicólogo ${ciudadData.nombre}`,
      `terapia ${ciudadData.nombre}`,
      `psicóloga ${ciudadData.nombre} Cantabria`,
      `psicólogo cerca de ${ciudadData.nombre}`,
      `terapia presencial ${ciudadData.nombre}`,
      `psicóloga Cantabria`,
    ],
    openGraph: {
      title: `Psicóloga en ${ciudadData.nombre}, Cantabria`,
      description: `Terapia presencial en Santander para personas de ${ciudadData.nombre} y alrededores.`,
    },
  };
}

export default function PsicologaCantabriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
