import { MetadataRoute } from 'next';
import { ciudadesEspana, ciudadesCantabria, especialidades } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://martamg.com';
  
  const blogPosts = [
    'como-superar-duelo-perdida-ser-querido',
    'terapia-pareja-cuando-acudir',
    'ansiedad-sintomas-tratamiento',
    'terapia-online-ventajas-psicologia-virtual',
    'adicciones-comportamentales-como-detectarlas',
    'depresion-diferencia-tristeza',
    'comunicacion-pareja-conflictos',
    'autoestima-baja-ejercicios-practicos',
    'identidad-genero-apoyo-psicologico',
  ];

  // Páginas principales
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre-mi`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terapia-individual`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terapia-pareja`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terapia-online`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Blog posts
  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Terapia online por ciudades (50 ciudades)
  const terapiaOnlineCiudades = ciudadesEspana.map((ciudad) => ({
    url: `${baseUrl}/terapia-online/${ciudad.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Especialidades online por ciudad (Top 20 ciudades × 4 especialidades = 80 páginas)
  const especialidadesCiudades: MetadataRoute.Sitemap = [];
  const topCiudades = ciudadesEspana.slice(0, 20);
  
  especialidades.forEach((esp) => {
    topCiudades.forEach((ciudad) => {
      especialidadesCiudades.push({
        url: `${baseUrl}/${esp.slug}/online/${ciudad.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    });
  });

  // Terapia presencial en ciudades de Cantabria
  const presencialCantabria = ciudadesCantabria.map((ciudad) => ({
    url: `${baseUrl}/presencial/${ciudad.nombre.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Páginas legales
  const legalPages = [
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politica-cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];
  
  return [
    ...mainPages,
    ...blogPages,
    ...terapiaOnlineCiudades,
    ...especialidadesCiudades,
    ...presencialCantabria,
    ...legalPages,
  ];
}
