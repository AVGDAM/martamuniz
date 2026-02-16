'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Script from 'next/script';
import { FaArrowLeft, FaCalendar, FaClock, FaWhatsapp } from 'react-icons/fa';
import { use } from 'react';

const articles = {
  'como-superar-duelo-perdida-ser-querido': {
    title: 'Cómo Superar el Duelo por la Pérdida de un Ser Querido',
    category: 'Duelo',
    date: '15 de febrero de 2026',
    readTime: '8 min',
    image: '🕊️',
    content: [
      {
        type: 'intro',
        text: 'La pérdida de un ser querido es una de las experiencias más dolorosas que podemos atravesar. El duelo es un proceso natural y necesario, pero no por ello menos difícil. Como psicóloga especializada en duelo, acompaño a personas que atraviesan este momento tan delicado.',
      },
      {
        type: 'heading',
        text: 'Las 5 Etapas del Duelo',
      },
      {
        type: 'paragraph',
        text: 'Aunque cada persona vive el duelo de manera única, la psiquiatra Elisabeth Kübler-Ross identificó 5 etapas comunes: negación, ira, negociación, depresión y aceptación. Es importante entender que estas etapas no son lineales y puedes experimentarlas en diferente orden o volver a alguna.',
      },
      {
        type: 'heading',
        text: '¿Cuándo Buscar Ayuda Profesional?',
      },
      {
        type: 'paragraph',
        text: 'Si el dolor persiste de forma intensa más allá de 6-12 meses, si interfiere gravemente en tu vida diaria, si experimentas pensamientos de hacerte daño, o si sientes que estás "atascado" en el proceso, es momento de buscar apoyo psicológico profesional.',
      },
      {
        type: 'heading',
        text: 'Cómo Puede Ayudarte la Terapia',
      },
      {
        type: 'paragraph',
        text: 'En terapia de duelo trabajamos con técnicas validadas científicamente como la terapia centrada en el duelo, EMDR para procesar el trauma, y técnicas de regulación emocional. El objetivo no es "olvidar" sino aprender a vivir con la pérdida de forma saludable.',
      },
      {
        type: 'list',
        items: [
          'Expresar y procesar emociones difíciles en un espacio seguro',
          'Trabajar la culpa y los "y si hubiera..." que aparecen',
          'Encontrar un nuevo significado y propósito tras la pérdida',
          'Mantener una conexión sana con el recuerdo del ser querido',
          'Recuperar gradualmente la capacidad de disfrutar la vida',
        ],
      },
      {
        type: 'conclusion',
        text: 'Si estás atravesando un duelo, quiero que sepas que no estás solo/a. El dolor que sientes es válido y mereces recibir apoyo. Como psicóloga especializada en duelo en Santander, ofrezco sesiones presenciales y online para acompañarte en este proceso.',
      },
    ],
  },
  'terapia-pareja-cuando-acudir': {
    title: '¿Cuándo es el Momento de Ir a Terapia de Pareja?',
    category: 'Pareja',
    date: '12 de febrero de 2026',
    readTime: '6 min',
    image: '💑',
    content: [
      {
        type: 'intro',
        text: 'Muchas parejas esperan hasta estar al borde de la ruptura para buscar ayuda. Sin embargo, la terapia de pareja es más efectiva cuando se inicia ante las primeras señales de dificultad. No hace falta estar en crisis para invertir en vuestra relación.',
      },
      {
        type: 'heading',
        text: '7 Señales de que Necesitáis Terapia de Pareja',
      },
      {
        type: 'list',
        items: [
          'Comunicación deteriorada: discusiones constantes o evitación total',
          'Falta de intimidad emocional y/o sexual',
          'Problemas de confianza tras una infidelidad',
          'Conflictos recurrentes que nunca se resuelven',
          'Diferencias en planes de vida (hijos, lugar de residencia, etc.)',
          'Sensación de ser compañeros de piso más que pareja',
          'Uno o ambos consideran la separación como opción',
        ],
      },
      {
        type: 'heading',
        text: '¿Qué Trabajamos en Terapia de Pareja?',
      },
      {
        type: 'paragraph',
        text: 'La terapia de pareja no busca culpables, sino patrones disfuncionales que se pueden cambiar. Trabajamos habilidades de comunicación asertiva, gestión de conflictos, recuperación de la intimidad, y construcción de acuerdos realistas.',
      },
      {
        type: 'heading',
        text: 'Mitos sobre la Terapia de Pareja',
      },
      {
        type: 'paragraph',
        text: 'MITO: "Si vamos a terapia significa que nuestra relación fracasó". REALIDAD: Buscar ayuda es señal de madurez y compromiso. MITO: "El terapeuta dirá quién tiene razón". REALIDAD: No se trata de ganar o perder, sino de entenderse mejor.',
      },
      {
        type: 'conclusion',
        text: 'Como psicóloga especializada en terapia de pareja en Santander, he acompañado a muchas parejas a reconstruir su relación. Si reconoces algunas de estas señales, no esperes más. También ofrezco terapia de pareja online para mayor flexibilidad.',
      },
    ],
  },
  'ansiedad-sintomas-tratamiento': {
    title: 'Ansiedad: Síntomas, Causas y Tratamiento Efectivo',
    category: 'Salud Mental',
    date: '8 de febrero de 2026',
    readTime: '10 min',
    image: '🧠',
    content: [
      {
        type: 'intro',
        text: 'La ansiedad es uno de los motivos de consulta más frecuentes en psicología. Según datos, 1 de cada 4 personas experimentará un trastorno de ansiedad en algún momento de su vida. Pero hay buenas noticias: la ansiedad tiene tratamiento eficaz.',
      },
      {
        type: 'heading',
        text: 'Síntomas de la Ansiedad',
      },
      {
        type: 'paragraph',
        text: 'La ansiedad se manifiesta en tres niveles: físico (taquicardia, tensión muscular, problemas digestivos, dificultad para respirar), cognitivo (preocupación constante, pensamientos catastróficos, dificultad de concentración), y conductual (evitación, inquietud, problemas de sueño).',
      },
      {
        type: 'heading',
        text: 'Diferencia entre Ansiedad Normal y Trastorno de Ansiedad',
      },
      {
        type: 'paragraph',
        text: 'Es normal sentir ansiedad ante situaciones estresantes. Se convierte en trastorno cuando es desproporcionada, persiste en el tiempo, interfiere en tu vida diaria (trabajo, relaciones, ocio), y no puedes controlarla por ti mismo/a.',
      },
      {
        type: 'heading',
        text: 'Tratamiento: Terapia Cognitivo-Conductual',
      },
      {
        type: 'paragraph',
        text: 'La TCC es el tratamiento con mayor evidencia científica para la ansiedad. Trabajamos identificando y modificando pensamientos distorsionados, técnicas de relajación y respiración, exposición gradual a situaciones temidas, y estrategias de afrontamiento.',
      },
      {
        type: 'list',
        items: [
          'Aprender a identificar los desencadenantes de tu ansiedad',
          'Técnicas de regulación emocional que funcionan',
          'Modificar patrones de pensamiento ansiosos',
          'Recuperar el control sobre tu vida',
          'Prevenir recaídas a largo plazo',
        ],
      },
      {
        type: 'conclusion',
        text: 'Si la ansiedad está limitando tu vida, es momento de actuar. Ofrezco terapia para ansiedad tanto presencial en Santander como online. Juntos trabajaremos para que recuperes tu bienestar y tranquilidad.',
      },
    ],
  },
  'terapia-online-ventajas-psicologia-virtual': {
    title: 'Ventajas de la Terapia Online: ¿Es Efectiva la Psicología Virtual?',
    category: 'Terapia Online',
    date: '5 de febrero de 2026',
    readTime: '7 min',
    image: '💻',
    content: [
      {
        type: 'intro',
        text: 'La terapia online ha experimentado un crecimiento exponencial en los últimos años. Pero muchas personas se preguntan: ¿es realmente efectiva? La respuesta corta es sí. Múltiples estudios demuestran que la terapia online tiene la misma eficacia que la presencial para la mayoría de problemas psicológicos.',
      },
      {
        type: 'heading',
        text: 'Ventajas de la Terapia Online',
      },
      {
        type: 'list',
        items: [
          'Accesibilidad: Recibe ayuda desde cualquier lugar de España',
          'Flexibilidad horaria: Más fácil encontrar hueco en tu agenda',
          'Comodidad: Sesión desde tu casa, sin desplazamientos',
          'Continuidad: Mantén tu terapia aunque viajes o te mudes',
          'Precio más accesible: 55€ sesión vs 60€ presencial',
          'Mayor privacidad: Nadie te ve entrar a consulta',
        ],
      },
      {
        type: 'heading',
        text: '¿Para qué Problemas es Efectiva?',
      },
      {
        type: 'paragraph',
        text: 'La terapia online es altamente efectiva para ansiedad, depresión, duelo, problemas de pareja, estrés, autoestima, y adicciones comportamentales. La única limitación serían crisis graves que requieran intervención presencial inmediata.',
      },
      {
        type: 'heading',
        text: 'Cómo Funciona mi Terapia Online',
      },
      {
        type: 'paragraph',
        text: 'Utilizamos videollamada por plataforma segura que garantiza confidencialidad total. Las sesiones duran 55 minutos, igual que presencial. Solo necesitas conexión a internet estable y un lugar privado donde hablar con tranquilidad.',
      },
      {
        type: 'conclusion',
        text: 'Si vives fuera de Santander, tienes horarios complicados, o simplemente prefieres la comodidad de tu hogar, la terapia online es una excelente opción. Ofrezco sesiones online a toda España manteniendo la misma calidad y profesionalidad.',
      },
    ],
  },
  'adicciones-comportamentales-como-detectarlas': {
    title: 'Adicciones Comportamentales: Cómo Detectarlas y Tratarlas',
    category: 'Adicciones',
    date: '1 de febrero de 2026',
    readTime: '9 min',
    image: '🎮',
    content: [
      {
        type: 'intro',
        text: 'Cuando pensamos en adicciones, solemos pensar en sustancias. Pero existen adicciones igual de graves que no involucran drogas: juego, compras, videojuegos, redes sociales, pornografía, trabajo... Son las adicciones comportamentales o conductuales.',
      },
      {
        type: 'heading',
        text: '¿Qué es una Adicción Comportamental?',
      },
      {
        type: 'paragraph',
        text: 'Es la pérdida de control sobre una conducta que genera consecuencias negativas pero que la persona es incapaz de detener. El cerebro activa los mismos circuitos de recompensa que en adicciones a sustancias.',
      },
      {
        type: 'heading',
        text: 'Señales de Alarma',
      },
      {
        type: 'list',
        items: [
          'Necesitas cada vez más tiempo en esa actividad (tolerancia)',
          'Aparece malestar intenso cuando no puedes realizarla (abstinencia)',
          'Has intentado reducir o parar sin éxito',
          'Descuidas trabajo, estudios, relaciones o salud',
          'Continúas a pesar de las consecuencias negativas',
          'Mientes u ocultas el tiempo que dedicas a esa conducta',
        ],
      },
      {
        type: 'heading',
        text: 'Tratamiento de Adicciones Comportamentales',
      },
      {
        type: 'paragraph',
        text: 'El tratamiento combina terapia cognitivo-conductual para modificar patrones de pensamiento, prevención de recaídas, identificación de desencadenantes, desarrollo de estrategias de afrontamiento saludables, y trabajo con las emociones subyacentes (ansiedad, soledad, baja autoestima).',
      },
      {
        type: 'conclusion',
        text: 'Si reconoces estas señales en ti o en un ser querido, buscar ayuda es el primer paso. Como psicóloga especializada en adicciones, ofrezco un espacio sin juicios donde trabajar hacia la recuperación.',
      },
    ],
  },
  'depresion-diferencia-tristeza': {
    title: 'Depresión vs Tristeza: Cómo Diferenciarlas y Cuándo Pedir Ayuda',
    category: 'Salud Mental',
    date: '28 de enero de 2026',
    readTime: '8 min',
    image: '🌧️',
    content: [
      {
        type: 'intro',
        text: 'Todos nos sentimos tristes a veces. Es una emoción humana normal ante pérdidas, decepciones o dificultades. Pero ¿cómo saber si lo que sientes es tristeza pasajera o depresión que requiere ayuda profesional? Aprender a diferenciarlas es crucial.',
      },
      {
        type: 'heading',
        text: 'Tristeza Normal',
      },
      {
        type: 'paragraph',
        text: 'La tristeza tiene una causa identificable, mejora con el tiempo y el apoyo, permite momentos de disfrute, no impide funcionar en el día a día, y responde a situaciones positivas. Es parte natural de la vida.',
      },
      {
        type: 'heading',
        text: 'Depresión Clínica',
      },
      {
        type: 'list',
        items: [
          'Persiste más de 2 semanas de forma intensa',
          'Estado de ánimo bajo casi todo el día, casi todos los días',
          'Pérdida de interés o placer en todo (anhedonia)',
          'Cambios significativos en apetito/peso o sueño',
          'Fatiga o pérdida de energía constante',
          'Sentimientos de inutilidad o culpa excesiva',
          'Dificultad para concentrarse o tomar decisiones',
          'Pensamientos recurrentes de muerte',
        ],
      },
      {
        type: 'heading',
        text: '¿Cuándo Buscar Ayuda?',
      },
      {
        type: 'paragraph',
        text: 'Si presentas 5 o más síntomas durante más de 2 semanas, si la tristeza interfiere gravemente en tu vida, si aparecen pensamientos de hacerte daño, o si has perdido la esperanza de mejorar, es fundamental buscar ayuda profesional.',
      },
      {
        type: 'heading',
        text: 'Tratamiento de la Depresión',
      },
      {
        type: 'paragraph',
        text: 'La depresión se trata eficazmente con psicoterapia, especialmente terapia cognitivo-conductual y activación conductual. En casos moderados-graves puede combinarse con medicación. La recuperación es posible.',
      },
      {
        type: 'conclusion',
        text: 'Si llevas semanas sin sentirte tú mismo/a, sin energía ni ilusión, no minimices lo que sientes. La depresión no es debilidad, es un problema de salud mental con solución. Ofrezco terapia para depresión presencial en Santander y online.',
      },
    ],
  },
  'comunicacion-pareja-conflictos': {
    title: 'Cómo Mejorar la Comunicación en la Pareja y Resolver Conflictos',
    category: 'Pareja',
    date: '25 de enero de 2026',
    readTime: '7 min',
    image: '💬',
    content: [
      {
        type: 'intro',
        text: 'La mala comunicación es la causa número uno de ruptura de parejas. No se trata de no discutir nunca (todas las parejas tienen conflictos), sino de cómo manejáis esos desacuerdos. La buena noticia: comunicarse bien se aprende.',
      },
      {
        type: 'heading',
        text: 'Errores Comunes de Comunicación',
      },
      {
        type: 'list',
        items: [
          'Críticas destructivas: Atacar la persona, no el comportamiento',
          'Actitud defensiva: Justificarse sin escuchar',
          'Desprecio: Sarcasmo, insultos, menosprecio',
          'Evasión: Retirarse del conflicto sin resolver nada',
          'Suposiciones: "Ya deberías saber lo que necesito"',
          'Sacar trapos viejos: Revisar errores pasados',
        ],
      },
      {
        type: 'heading',
        text: 'Técnicas de Comunicación Efectiva',
      },
      {
        type: 'paragraph',
        text: 'Mensajes en primera persona ("yo siento" vs "tú siempre"), validación emocional antes de resolver, escucha activa sin interrumpir, elegir momento y lugar adecuados, centrarse en un tema a la vez, buscar soluciones en lugar de ganar la discusión.',
      },
      {
        type: 'heading',
        text: 'Cómo Resolver Conflictos Constructivamente',
      },
      {
        type: 'paragraph',
        text: 'Identificar claramente el problema, expresar necesidades y sentimientos sin atacar, escuchar el punto de vista del otro con empatía, buscar soluciones donde ambos ganen (no ganar-perder), comprometerse a cambios específicos, y revisar después si funciona.',
      },
      {
        type: 'conclusion',
        text: 'Si sentís que no os entendéis, que las discusiones escalan rápido, o que evitáis hablar de temas importantes, la terapia de pareja puede enseñaros herramientas concretas. Ofrezco sesiones presenciales en Santander y terapia de pareja online.',
      },
    ],
  },
  'autoestima-baja-ejercicios-practicos': {
    title: 'Autoestima Baja: 10 Ejercicios Prácticos para Fortalecerla',
    category: 'Desarrollo Personal',
    date: '22 de enero de 2026',
    readTime: '11 min',
    image: '✨',
    content: [
      {
        type: 'intro',
        text: 'La autoestima no es algo con lo que naces: se construye. Si vives con autocrítica constante, dudas de ti mismo/a, o sientes que no eres suficiente, esta guía te ayudará. La autoestima puede mejorarse con práctica consciente.',
      },
      {
        type: 'heading',
        text: 'Señales de Autoestima Baja',
      },
      {
        type: 'list',
        items: [
          'Diálogo interno negativo constante',
          'Dificultad para aceptar cumplidos',
          'Comparación constante con otros',
          'Dificultad para poner límites',
          'Miedo excesivo al rechazo o al error',
          'Necesidad de aprobación externa constante',
        ],
      },
      {
        type: 'heading',
        text: '10 Ejercicios para Mejorar tu Autoestima',
      },
      {
        type: 'paragraph',
        text: '1. Diario de logros: Escribe cada día 3 cosas que hiciste bien. 2. Desafía el crítico interno: Cuando aparezca autocrítica, pregúntate si hablarías así a un amigo. 3. Lista de fortalezas: Identifica 10 cualidades positivas tuyas. 4. Practica autocompasión: Trátate con la misma amabilidad que a otros. 5. Establece límites: Di "no" cuando necesites.',
      },
      {
        type: 'paragraph',
        text: '6. Celebra pequeños logros: No minimices tus avances. 7. Cuida tu cuerpo: Ejercicio, alimentación, descanso. 8. Rodéate de personas que te valoren. 9. Identifica creencias limitantes y cuestiónalas. 10. Acepta que eres humano/a: Los errores no definen tu valor.',
      },
      {
        type: 'heading',
        text: 'Cuándo Buscar Ayuda Profesional',
      },
      {
        type: 'paragraph',
        text: 'Si la baja autoestima afecta gravemente tu vida (evitas relaciones, oportunidades laborales), viene de traumas infantiles sin resolver, o genera depresión/ansiedad, es recomendable trabajarlo en terapia.',
      },
      {
        type: 'conclusion',
        text: 'Construir una autoestima sana es un proceso, no un destino. Si necesitas apoyo para recorrer este camino, estoy aquí. Ofrezco terapia individual presencial en Santander y online para trabajar la autoestima desde la raíz.',
      },
    ],
  },
  'identidad-genero-apoyo-psicologico': {
    title: 'Identidad de Género: La Importancia del Apoyo Psicológico',
    category: 'Diversidad',
    date: '18 de enero de 2026',
    readTime: '9 min',
    image: '🌈',
    content: [
      {
        type: 'intro',
        text: 'Explorar y afirmar la identidad de género puede ser un proceso complejo que afecta muchas áreas de la vida. El apoyo psicológico especializado y afirmativo puede marcar una diferencia crucial en tu bienestar. No estás solo/a en este camino.',
      },
      {
        type: 'heading',
        text: '¿Qué es la Terapia Afirmativa?',
      },
      {
        type: 'paragraph',
        text: 'La terapia afirmativa parte del respeto absoluto a tu identidad de género. No busca "cambiar" o "curar" nada, sino acompañarte en el proceso de autoconocimiento, toma de decisiones informadas, y gestión del impacto emocional y social.',
      },
      {
        type: 'heading',
        text: 'Áreas de Trabajo en Terapia',
      },
      {
        type: 'list',
        items: [
          'Exploración de tu identidad de género en espacio seguro',
          'Gestión del estrés de minoría y posible discriminación',
          'Proceso de salir del armario (coming out) si lo deseas',
          'Apoyo en decisiones sobre transición social/médica',
          'Manejo de ansiedad, depresión o disforia de género',
          'Relaciones familiares y de pareja',
          'Desarrollo de resiliencia y autocuidado',
        ],
      },
      {
        type: 'heading',
        text: 'Informes Psicológicos',
      },
      {
        type: 'paragraph',
        text: 'Si estás considerando iniciar un proceso de transición médica, puedo realizar los informes psicológicos requeridos, siempre con el objetivo de facilitar tu acceso a la atención que necesitas, nunca como obstáculo.',
      },
      {
        type: 'heading',
        text: 'Confidencialidad y Respeto',
      },
      {
        type: 'paragraph',
        text: 'El espacio terapéutico es completamente confidencial. Usaré el nombre y pronombres que elijas, y respetaré tu ritmo en todo el proceso. Tu bienestar y autonomía son lo primero.',
      },
      {
        type: 'conclusion',
        text: 'Si estás cuestionando tu identidad de género, iniciando una transición, o simplemente necesitas apoyo en este aspecto de tu vida, estoy aquí sin juicios. Ofrezco terapia afirmativa presencial en Santander y online para toda España.',
      },
    ],
  },
};

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-sage-900 mb-4">Artículo no encontrado</h1>
          <Link href="/blog" className="text-sage-600 hover:text-sage-700">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    image: `https://martamg.com${article.image !== '🕊️' && article.image !== '💑' && article.image !== '😰' && article.image !== '💻' && article.image !== '🎲' && article.image !== '😔' && article.image !== '💬' && article.image !== '✨' && article.image !== '🌈' ? article.image : '/og-image.jpg'}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Marta Muñiz",
      url: "https://martamg.com/sobre-mi",
      jobTitle: "Psicóloga Sanitaria"
    },
    publisher: {
      "@type": "Organization",
      name: "Marta Muñiz - Psicóloga",
      logo: {
        "@type": "ImageObject",
        url: "https://martamg.com/favicon.svg"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://martamg.com/blog/${slug}`
    },
    articleSection: article.category,
    keywords: [article.category, "psicología", "terapia", "salud mental"],
    description: article.content.find(c => c.type === 'intro')?.text || article.title
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors mb-8"
        >
          <FaArrowLeft />
          <span>Volver al blog</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {/* Category Badge */}
          <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 text-sm font-semibold rounded-full mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sage-600">
            <div className="flex items-center gap-2">
              <FaCalendar />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock />
              <span>{article.readTime} de lectura</span>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {article.content.map((section, index) => {
            if (section.type === 'intro') {
              return (
                <p key={index} className="text-xl text-sage-800 leading-relaxed mb-8 font-medium">
                  {section.text}
                </p>
              );
            }
            if (section.type === 'heading') {
              return (
                <h2 key={index} className="text-3xl font-serif text-sage-900 mt-12 mb-6">
                  {section.text}
                </h2>
              );
            }
            if (section.type === 'paragraph') {
              return (
                <p key={index} className="text-sage-700 leading-relaxed mb-6">
                  {section.text}
                </p>
              );
            }
            if (section.type === 'list') {
              return (
                <ul key={index} className="list-none space-y-3 mb-8">
                  {section.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-sage-600 mt-1">✓</span>
                      <span className="text-sage-700">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (section.type === 'conclusion') {
              return (
                <div key={index} className="bg-sage-50 border-l-4 border-sage-600 p-6 rounded-r-lg mt-12">
                  <p className="text-sage-800 leading-relaxed font-medium">
                    {section.text}
                  </p>
                </div>
              );
            }
            return null;
          })}
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-sage-600 to-sage-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-serif mb-4">¿Te has sentido identificado/a?</h3>
          <p className="text-sage-100 mb-6 max-w-2xl mx-auto">
            Si necesitas ayuda profesional, estoy aquí para acompañarte. 
            Puedes contactarme por WhatsApp o agendar una primera sesión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/34680614901?text=Hola, he leído el artículo sobre terapia y me gustaría solicitar información"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-sage-700 rounded-lg hover:bg-sage-50 transition-colors font-semibold"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp</span>
            </a>
            <Link
              href="/contacto"
              className="inline-block px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-sage-800 transition-colors font-semibold"
            >
              Pedir Cita
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
