import { ciudadesEspana } from '@/data/locations';
import SEOPageTemplate from '@/components/SEOPageTemplate';

export async function generateStaticParams() {
  return ciudadesEspana.map((ciudad) => ({
    ciudad: ciudad.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
  }));
}

export default async function TerapiaOnlineCiudadPage({ 
  params 
}: { 
  params: Promise<{ ciudad: string }> 
}) {
  const resolvedParams = await params;
  const ciudadData = ciudadesEspana.find(
    (c) => c.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '') === resolvedParams.ciudad
  );

  if (!ciudadData) {
    return <div>Ciudad no encontrada</div>;
  }

  return (
    <SEOPageTemplate
      ciudad={ciudadData.nombre}
      provincia={ciudadData.provincia}
      comunidad={ciudadData.comunidad}
      tipo="online"
    />
  );
}
