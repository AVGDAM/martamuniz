import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

const articleMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
  'como-superar-duelo-perdida-ser-querido': {
    title: 'Cómo Superar el Duelo por la Pérdida de un Ser Querido | Terapia de Duelo',
    description: 'Guía profesional sobre las 5 etapas del duelo, cuándo buscar ayuda psicológica y cómo la terapia puede ayudarte a atravesar la pérdida de un ser querido.',
    keywords: [
      'superar duelo',
      'terapia duelo Santander',
      'pérdida ser querido',
      'psicóloga especializada duelo',
      'etapas del duelo',
      'ayuda psicológica duelo',
    ],
  },
  'terapia-pareja-cuando-acudir': {
    title: '¿Cuándo Ir a Terapia de Pareja? 7 Señales de Alarma | Psicóloga Parejas',
    description: 'Descubre las señales que indican que tu relación necesita terapia de pareja. No esperes a estar en crisis. Psicóloga especializada en Santander.',
    keywords: [
      'terapia de pareja Santander',
      'cuándo ir terapia pareja',
      'problemas de pareja',
      'psicóloga parejas',
      'mejorar relación pareja',
      'salvar relación',
    ],
  },
  'ansiedad-sintomas-tratamiento': {
    title: 'Ansiedad: Síntomas, Causas y Tratamiento Efectivo | Terapia TCC',
    description: 'Guía completa sobre la ansiedad: síntomas físicos y emocionales, diferencia con trastorno de ansiedad, y tratamiento con terapia cognitivo-conductual.',
    keywords: [
      'tratamiento ansiedad',
      'síntomas ansiedad',
      'terapia ansiedad Santander',
      'terapia cognitivo conductual',
      'psicóloga ansiedad',
      'superar ansiedad',
    ],
  },
  'terapia-online-ventajas-psicologia-virtual': {
    title: 'Terapia Online: Ventajas y Efectividad de la Psicología Virtual',
    description: '¿Es efectiva la terapia online? Descubre las ventajas de la psicología por videollamada, qué problemas trata y cómo funcionan las sesiones online.',
    keywords: [
      'terapia online España',
      'psicología virtual',
      'ventajas terapia online',
      'psicóloga online',
      'terapia videollamada',
      'efectividad terapia online',
    ],
  },
  'adicciones-comportamentales-como-detectarlas': {
    title: 'Adicciones Comportamentales: Cómo Detectarlas y Tratarlas',
    description: 'Las adicciones no solo son sustancias. Aprende a identificar adicciones a juego, compras, videojuegos o redes sociales y cómo tratarlas.',
    keywords: [
      'adicciones comportamentales',
      'adicción videojuegos',
      'adicción redes sociales',
      'tratamiento adicciones',
      'psicóloga adicciones Santander',
      'adicciones sin sustancias',
    ],
  },
  'depresion-diferencia-tristeza': {
    title: 'Depresión vs Tristeza: Diferencias y Cuándo Pedir Ayuda Psicológica',
    description: '¿Es tristeza o depresión? Aprende a diferenciarlas, conoce los síntomas de depresión clínica y cuándo buscar ayuda de un psicólogo.',
    keywords: [
      'diferencia tristeza depresión',
      'síntomas depresión',
      'tratamiento depresión',
      'psicóloga depresión Santander',
      'terapia depresión',
      'ayuda psicológica depresión',
    ],
  },
  'comunicacion-pareja-conflictos': {
    title: 'Cómo Mejorar la Comunicación en la Pareja y Resolver Conflictos',
    description: 'Técnicas profesionales para mejorar la comunicación en pareja, resolver conflictos constructivamente y fortalecer vuestra relación.',
    keywords: [
      'mejorar comunicación pareja',
      'resolver conflictos pareja',
      'comunicación asertiva',
      'problemas comunicación pareja',
      'terapia pareja comunicación',
      'técnicas comunicación pareja',
    ],
  },
  'autoestima-baja-ejercicios-practicos': {
    title: 'Autoestima Baja: 10 Ejercicios Prácticos para Fortalecerla',
    description: 'Ejercicios validados científicamente para mejorar tu autoestima. Guía práctica con técnicas que puedes aplicar hoy mismo.',
    keywords: [
      'mejorar autoestima',
      'ejercicios autoestima',
      'autoestima baja',
      'fortalecer autoestima',
      'terapia autoestima',
      'aumentar autoestima',
    ],
  },
  'identidad-genero-apoyo-psicologico': {
    title: 'Identidad de Género: Importancia del Apoyo Psicológico Afirmativo',
    description: 'Terapia afirmativa para explorar y afirmar tu identidad de género. Acompañamiento profesional y respetuoso en Santander y online.',
    keywords: [
      'terapia afirmativa género',
      'psicóloga identidad género',
      'terapia trans Santander',
      'apoyo psicológico género',
      'terapia LGTB',
      'informe psicológico género',
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const metadata = articleMetadata[resolvedParams.slug];

  if (!metadata) {
    return {
      title: 'Artículo no encontrado | Blog Marta Muñiz',
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
    },
  };
}

export default function BlogArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
