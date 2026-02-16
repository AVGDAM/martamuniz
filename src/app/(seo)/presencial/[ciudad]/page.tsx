import { ciudadesCantabria } from '@/data/locations';
import SEOPageTemplate from '@/components/SEOPageTemplate';

export async function generateStaticParams() {
  return ciudadesCantabria.map((ciudad) => ({
    ciudad: ciudad.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
  }));
}

export default async function PsicologaCantabriaPage({ 
  params 
}: { 
  params: Promise<{ ciudad: string }> 
}) {
  const resolvedParams = await params;
  const ciudadData = ciudadesCantabria.find(
    (c) => c.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '') === resolvedParams.ciudad
  );

  if (!ciudadData) {
    return <div>Ciudad no encontrada</div>;
  }

  return (
    <SEOPageTemplate
      ciudad={ciudadData.nombre}
      provincia="Cantabria"
      comunidad="Cantabria"
      tipo="presencial"
    />
  );
}
