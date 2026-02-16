import { ciudadesEspana, especialidades } from '@/data/locations';
import SEOPageTemplate from '@/components/SEOPageTemplate';

export async function generateStaticParams() {
  const topCiudades = ciudadesEspana.slice(0, 20);
  const params: { especialidad: string; ciudad: string }[] = [];

  especialidades.forEach((esp) => {
    topCiudades.forEach((ciudad) => {
      params.push({
        especialidad: esp.slug,
        ciudad: ciudad.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
      });
    });
  });

  return params;
}

export default async function EspecialidadCiudadPage({ 
  params 
}: { 
  params: Promise<{ especialidad: string; ciudad: string }> 
}) {
  const resolvedParams = await params;
  
  const especialidadData = especialidades.find(
    (e) => e.slug === resolvedParams.especialidad
  );
  
  const ciudadData = ciudadesEspana.find(
    (c) => c.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '') === resolvedParams.ciudad
  );

  if (!especialidadData || !ciudadData) {
    return <div>No encontrado</div>;
  }

  return (
    <SEOPageTemplate
      ciudad={ciudadData.nombre}
      provincia={ciudadData.provincia}
      comunidad={ciudadData.comunidad}
      tipo="especialidad-online"
      especialidad={especialidadData.nombre}
      especialidadSlug={especialidadData.slug}
    />
  );
}
