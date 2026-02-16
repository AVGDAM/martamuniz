'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheck, FaMapMarkerAlt, FaVideo, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

interface SEOPageProps {
  ciudad: string;
  provincia?: string;
  comunidad?: string;
  tipo: 'online' | 'presencial' | 'especialidad-online';
  especialidad?: string;
  especialidadSlug?: string;
}

export default function SEOPageTemplate({ ciudad, provincia, comunidad, tipo, especialidad, especialidadSlug }: SEOPageProps) {
  
  // Generar variaciones de contenido basadas en el hash de la ciudad
  const ciudadHash = ciudad.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variante = ciudadHash % 3; // 3 variantes diferentes
  
  // Generar contenido dinámico basado en el tipo
  const getTitle = () => {
    if (tipo === 'especialidad-online') {
      return `Psicóloga ${especialidad} Online en ${ciudad}`;
    }
    if (tipo === 'online') {
      return `Psicóloga Online en ${ciudad} - Terapia por Videollamada`;
    }
    return `Psicóloga en ${ciudad} - Terapia Presencial`;
  };

  const getIntro = () => {
    const intros = [
      // Variante 0
      {
        online: `¿Vives en ${ciudad} y buscas un psicólogo online? Ofrezco terapia psicológica por videollamada para personas de ${ciudad}, ${provincia || ''} y toda ${comunidad}. Sesiones flexibles desde la comodidad de tu hogar con la misma eficacia que la terapia presencial.`,
        especialidad: `¿Buscas un psicólogo especializado en ${especialidad?.toLowerCase()} en ${ciudad}? Ofrezco terapia online personalizada para personas de ${ciudad} y toda ${provincia || comunidad}. Sesiones por videollamada con la misma eficacia que la terapia presencial.`,
        presencial: `¿Buscas un psicólogo en ${ciudad}? Como psicóloga sanitaria colegiada, ofrezco terapia presencial en Santander, ideal para personas de ${ciudad} y alrededores de ${provincia || comunidad}.`
      },
      // Variante 1
      {
        online: `Soy Marta Muñiz, psicóloga sanitaria especializada en terapia online para personas de ${ciudad}. Si estás en ${comunidad} y necesitas apoyo psicológico, puedo ayudarte desde la comodidad de tu casa. La terapia por videollamada es tan efectiva como la presencial.`,
        especialidad: `Como psicóloga especializada en ${especialidad?.toLowerCase()}, trabajo con personas de ${ciudad} que necesitan ${especialidad === 'Duelo' ? 'superar una pérdida' : especialidad === 'Pareja' ? 'mejorar su relación' : especialidad === 'Ansiedad' ? 'gestionar su ansiedad' : 'recuperar su bienestar'}. Ofrezco sesiones online adaptadas a tus necesidades y horarios.`,
        presencial: `Atiendo en mi consulta de Santander a personas de ${ciudad} y toda ${provincia || comunidad}. Como psicóloga sanitaria colegiada, ofrezco un espacio seguro y profesional para trabajar en tu bienestar emocional.`
      },
      // Variante 2
      {
        online: `¿Necesitas ayuda de un psicólogo pero vives en ${ciudad}? No hay problema. Ofrezco terapia psicológica online para toda ${comunidad}, incluyendo ${ciudad} y ${provincia}. Trabajaremos juntos por videollamada en horarios que se adapten a tu vida.`,
        especialidad: `Especializada en terapia de ${especialidad?.toLowerCase()}, ayudo a personas de ${ciudad} a ${especialidad === 'Duelo' ? 'atravesar el proceso de duelo' : especialidad === 'Pareja' ? 'fortalecer su relación de pareja' : especialidad === 'Ansiedad' ? 'superar la ansiedad' : 'salir de la depresión'}. Sesiones online con máxima flexibilidad y confidencialidad.`,
        presencial: `Si buscas terapia presencial y vives en ${ciudad} o cerca, mi consulta en Santander es de fácil acceso. Trabajo con personas de toda ${provincia || comunidad} que prefieren la terapia cara a cara.`
      }
    ];

    const selectedIntro = intros[variante];
    if (tipo === 'especialidad-online') return selectedIntro.especialidad;
    if (tipo === 'online') return selectedIntro.online;
    return selectedIntro.presencial;
  };

  const getBeneficios = () => {
    const beneficiosVariantes = [
      // Variante 0
      {
        base: [
          'Psicóloga sanitaria colegiada con experiencia',
          'Primera sesión para conocernos sin compromiso',
          'Horarios flexibles adaptados a tu agenda',
          'Confidencialidad y profesionalidad garantizada',
        ],
        online: [
          `Terapia online para personas de ${ciudad}`,
          'Sin desplazamientos - Ahorra tiempo y dinero',
          'Sesiones por videollamada segura y privada',
        ],
        presencial: [
          `Atención a personas de ${ciudad} y zona`,
          'Consulta céntrica en Santander',
          `Fácil acceso desde ${ciudad}`,
        ]
      },
      // Variante 1
      {
        base: [
          'Profesional colegiada y especializada',
          'Sesión inicial sin obligación de continuar',
          'Flexibilidad horaria total',
          'Total confidencialidad profesional',
        ],
        online: [
          `Sesiones online desde ${ciudad}`,
          'Cero desplazamientos necesarios',
          'Videollamadas 100% seguras',
        ],
        presencial: [
          `Consulta accesible desde ${ciudad}`,
          'Ubicación céntrica y accesible',
          `Bien comunicado con ${ciudad}`,
        ]
      },
      // Variante 2
      {
        base: [
          'Psicóloga sanitaria certificada',
          'Primera cita orientativa y sin presión',
          'Horarios que se ajustan a tu vida',
          'Privacidad absoluta garantizada',
        ],
        online: [
          `Atención online en ${ciudad}`,
          'Ahorra tiempo sin moverte de casa',
          'Plataforma de videollamada cifrada',
        ],
        presencial: [
          `Trabajo con clientes de ${ciudad}`,
          'Fácil acceso en el centro de Santander',
          `Conexión directa desde ${ciudad}`,
        ]
      }
    ];

    const selected = beneficiosVariantes[variante];
    
    if (tipo === 'online' || tipo === 'especialidad-online') {
      return [...selected.online, ...selected.base];
    }

    return [...selected.presencial, ...selected.base];
  };

  const faqs = [
    {
      pregunta: tipo === 'online' ? `¿Cómo funciona la terapia online para personas de ${ciudad}?` : `¿Cómo llegar desde ${ciudad} a tu consulta?`,
      respuesta: tipo === 'online' 
        ? `La terapia online es muy sencilla. Reservas tu cita, recibes un enlace seguro de videollamada y nos conectamos a la hora acordada. No importa si estás en ${ciudad} o en cualquier otro lugar de España - solo necesitas conexión a internet y un lugar privado.`
        : `Mi consulta está ubicada en el centro de Santander, fácilmente accesible desde ${ciudad}. Puedes llegar en coche (hay parking cercano) o en transporte público. La sesión dura 55 minutos.`
    },
    {
      pregunta: '¿Cuánto cuesta una sesión?',
      respuesta: tipo === 'online' 
        ? 'Las sesiones online tienen un precio de 55€ (55 minutos). También ofrezco bonos de 5 sesiones con 10% de descuento (247,50€) para mayor compromiso con el proceso terapéutico.'
        : 'Las sesiones presenciales cuestan 60€ (55 minutos). Los bonos de 5 sesiones tienen un 10% de descuento (270€).'
    },
    {
      pregunta: tipo === 'especialidad-online' 
        ? `¿Es efectiva la terapia online para ${especialidad?.toLowerCase()}?`
        : '¿Es tan efectiva la terapia online como la presencial?',
      respuesta: tipo === 'especialidad-online'
        ? `Sí, múltiples estudios demuestran que la terapia online es igual de efectiva que la presencial para tratar ${especialidad?.toLowerCase()}. La clave está en la relación terapéutica, y esta se establece perfectamente por videollamada.`
        : 'Sí, la evidencia científica demuestra que la terapia online tiene la misma eficacia que la presencial para la mayoría de problemas psicológicos. La calidad de la relación terapéutica es lo que marca la diferencia, no el formato.'
    },
    {
      pregunta: '¿Cuánto dura el proceso terapéutico?',
      respuesta: 'La duración depende de cada persona y sus objetivos. Algunas personas notan mejoría en 6-8 sesiones para problemas puntuales, mientras que otros procesos más profundos pueden requerir varios meses. En la primera sesión evaluaremos tu situación y estimaremos un plan personalizado.'
    },
    {
      pregunta: tipo === 'online' ? '¿Qué necesito para las sesiones online?' : '¿Necesito llevar algo a la primera sesión?',
      respuesta: tipo === 'online'
        ? 'Solo necesitas un dispositivo con cámara (ordenador, tablet o móvil), conexión a internet estable, y un lugar tranquilo donde puedas hablar con privacidad durante 55 minutos.'
        : 'No necesitas llevar nada especial. Solo ven con la disposición de hablar sobre lo que te preocupa. Si tienes informes médicos o psicológicos previos, pueden ser útiles pero no son imprescindibles.'
    },
    {
      pregunta: '¿Cómo reservo mi primera cita?',
      respuesta: `Puedes contactarme por WhatsApp (680 614 901), email (hola@martamg.com) o llamada telefónica. Te responderé lo antes posible para agendar una cita que se ajuste a tu horario.`
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-r from-sage-50 to-cream-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sage-600 mb-4"
          >
            <FaMapMarkerAlt />
            <span>{ciudad}, {comunidad || provincia}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-sage-900 mb-6"
          >
            {getTitle()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-sage-700 leading-relaxed mb-8"
          >
            {getIntro()}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/34680614901?text=Hola, me gustaría solicitar información sobre terapia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold"
            >
              <FaWhatsapp className="text-xl" />
              <span>Reservar Cita por WhatsApp</span>
            </a>
            <Link
              href="/contacto"
              className="inline-block px-6 py-3 border-2 border-sage-600 text-sage-600 rounded-lg hover:bg-sage-50 transition-colors font-semibold"
            >
              Ver Más Formas de Contacto
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-sage-900 mb-12 text-center"
          >
            ¿Por Qué Elegir Mi Servicio {tipo === 'online' || tipo === 'especialidad-online' ? 'Online' : 'Presencial'}?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {getBeneficios().map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white p-6 rounded-lg shadow-md"
              >
                <FaCheck className="text-sage-600 mt-1 flex-shrink-0" />
                <span className="text-sage-700">{beneficio}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades */}
      {tipo !== 'especialidad-online' && (
        <section className="py-16 px-4 bg-gradient-to-r from-cream-50 to-sage-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-sage-900 mb-12 text-center"
            >
              Especialidades de Terapia
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { nombre: 'Duelo', desc: 'Superar pérdidas' },
                { nombre: 'Pareja', desc: 'Mejorar relaciones' },
                { nombre: 'Ansiedad', desc: 'Gestionar estrés' },
                { nombre: 'Depresión', desc: 'Recuperar ilusión' },
              ].map((esp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="text-xl font-serif text-sage-900 mb-2">{esp.nombre}</h3>
                  <p className="text-sage-600">{esp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Precios */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-sage-900 mb-12 text-center"
          >
            Tarifas Transparentes
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-sage-200"
            >
              <h3 className="text-2xl font-serif text-sage-900 mb-4">Sesión Individual</h3>
              <div className="text-4xl font-bold text-sage-600 mb-2">
                {tipo === 'online' || tipo === 'especialidad-online' ? '55€' : '60€'}
              </div>
              <p className="text-sage-600 mb-4">55 minutos por sesión</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sage-700">
                  <FaCheck className="text-sage-600" />
                  <span>Primera sesión sin compromiso</span>
                </li>
                <li className="flex items-center gap-2 text-sage-700">
                  <FaCheck className="text-sage-600" />
                  <span>Pago por sesión</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-sage-600 to-sage-700 p-8 rounded-lg shadow-lg text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-yellow-400 text-sage-900 px-3 py-1 rounded-full text-sm font-bold">
                -10%
              </div>
              <h3 className="text-2xl font-serif mb-4">Bono 5 Sesiones</h3>
              <div className="text-4xl font-bold mb-2">
                {tipo === 'online' || tipo === 'especialidad-online' ? '247,50€' : '270€'}
              </div>
              <p className="text-sage-100 mb-4">10% de descuento</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-sage-200" />
                  <span>5 sesiones de 55 minutos</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-sage-200" />
                  <span>Mayor compromiso terapéutico</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nueva sección: Cómo funciona */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-sage-900 mb-12 text-center"
          >
            {tipo === 'online' || tipo === 'especialidad-online' 
              ? `Cómo Funciona la Terapia Online desde ${ciudad}`
              : `Cómo Trabajamos Juntos`
            }
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                paso: '1',
                titulo: variante === 0 ? 'Primer Contacto' : variante === 1 ? 'Contacta Conmigo' : 'Ponte en Contacto',
                desc: variante === 0 
                  ? `Escríbeme por WhatsApp, email o teléfono. Te responderé rápidamente para agendar tu primera sesión en un horario que te venga bien.`
                  : variante === 1
                  ? `Llámame, escríbeme un email o manda un WhatsApp. Acordaremos juntos el mejor momento para tu primera cita.`
                  : `Contáctame por tu medio preferido y programaremos una primera sesión que encaje con tus horarios.`
              },
              {
                paso: '2',
                titulo: variante === 0 ? 'Primera Sesión' : variante === 1 ? 'Nos Conocemos' : 'Sesión Inicial',
                desc: variante === 0
                  ? `En la primera sesión hablaremos de lo que te trae a terapia, tus objetivos y cómo puedo ayudarte. Sin presión ni compromiso.`
                  : variante === 1
                  ? `Dedicaremos la primera cita a entender tu situación, tus necesidades y a establecer objetivos terapéuticos claros.`
                  : `Te escucharé con atención, entenderé tu caso y te explicaré cómo podemos trabajar juntos para alcanzar tus metas.`
              },
              {
                paso: '3',
                titulo: variante === 0 ? 'Proceso Terapéutico' : variante === 1 ? 'Trabajamos Juntos' : 'Camino al Bienestar',
                desc: variante === 0
                  ? `Comenzamos el trabajo terapéutico con sesiones regulares. Irás notando cambios y mejoría a tu propio ritmo.`
                  : variante === 1
                  ? `Iniciamos las sesiones terapéuticas aplicando técnicas probadas científicamente adaptadas a tu caso particular.`
                  : `Empezamos el proceso con sesiones periódicas donde trabajaremos hacia tu bienestar con herramientas profesionales.`
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-sage-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.paso}
                </div>
                <h3 className="text-xl font-serif text-sage-900 mb-3">{item.titulo}</h3>
                <p className="text-sage-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nueva sección: Sobre Mí (variada) */}
      <section className="py-16 px-4 bg-gradient-to-r from-cream-50 to-sage-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-sage-900 mb-8 text-center"
          >
            {variante === 0 ? 'Sobre Mí' : variante === 1 ? 'Quién Soy' : 'Mi Experiencia'}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <p className="text-sage-700 leading-relaxed mb-4">
              {variante === 0
                ? `Soy Marta Muñiz, psicóloga sanitaria colegiada con años de experiencia ayudando a personas de ${ciudad} y toda ${comunidad}. Me especializo en crear un espacio seguro donde puedas expresarte libremente y trabajar hacia tu bienestar.`
                : variante === 1
                ? `Me llamo Marta Muñiz y trabajo como psicóloga sanitaria ayudando a personas de ${comunidad}, incluyendo ${ciudad}, a superar sus dificultades emocionales. Mi enfoque es cercano, profesional y basado en la evidencia científica.`
                : `Como psicóloga sanitaria, he acompañado a numerosas personas de ${ciudad} y ${provincia || comunidad} en sus procesos terapéuticos. Mi objetivo es ofrecerte herramientas reales y efectivas para mejorar tu calidad de vida.`
              }
            </p>
            <p className="text-sage-700 leading-relaxed mb-4">
              {variante === 0
                ? `Mi formación incluye especialización en duelo, terapia de pareja, ansiedad y depresión. Trabajo con terapia cognitivo-conductual, una de las terapias con mayor respaldo científico.`
                : variante === 1
                ? `Estoy especializada en procesos de duelo, problemas de pareja, trastornos de ansiedad y depresión. Utilizo técnicas de terapia cognitivo-conductual adaptadas a cada persona.`
                : `Mis áreas de especialización son duelo, relaciones de pareja, gestión de ansiedad y tratamiento de depresión. Aplico la terapia cognitivo-conductual con un enfoque personalizado.`
              }
            </p>
            <p className="text-sage-700 leading-relaxed">
              {tipo === 'online' || tipo === 'especialidad-online'
                ? variante === 0
                  ? `Aunque mi consulta está en Santander, trabajo online con personas de todo ${comunidad}, incluyendo ${ciudad}. La terapia online me permite ayudar a más personas sin que la distancia sea un obstáculo.`
                  : variante === 1
                  ? `Ofrezco terapia online para que personas de ${ciudad} y otras localidades de ${comunidad} puedan acceder a ayuda profesional desde casa.`
                  : `La modalidad online me permite atender a personas de ${ciudad} y toda ${provincia || comunidad} con la misma calidad que la terapia presencial.`
                : variante === 0
                  ? `Mi consulta está en Santander, bien comunicada con ${ciudad}. Muchas personas de ${provincia || comunidad} vienen regularmente a sesión.`
                  : variante === 1
                  ? `Atiendo en Santander, con fácil acceso para personas de ${ciudad} y alrededores. El espacio está pensado para que te sientas cómodo/a.`
                  : `La consulta en Santander recibe a personas de ${ciudad} y toda la zona de ${provincia || comunidad}. Es un espacio tranquilo y confidencial.`
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nueva sección: Qué Esperar */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-sage-900 mb-8 text-center"
          >
            {variante === 0 
              ? 'Qué Esperar de la Primera Sesión' 
              : variante === 1 
              ? 'Tu Primera Cita: Sin Presiones'
              : 'Cómo Será Nuestra Primera Sesión'
            }
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-sage-900 mb-3 flex items-center">
                <span className="mr-3">💬</span>
                {variante === 0 ? 'Un Espacio para Ti' : variante === 1 ? 'Hablamos de Ti' : 'Te Escucho'}
              </h3>
              <p className="text-sage-700">
                {variante === 0
                  ? `La primera sesión es un momento para conocernos. Te haré algunas preguntas sobre lo que te trae a terapia, pero no tienes que compartir nada con lo que no te sientas cómodo/a. Vamos a tu ritmo.`
                  : variante === 1
                  ? `En nuestra primera cita hablaremos de lo que necesitas. No hay preguntas incómodas ni juicios. Solo un espacio seguro donde puedes expresar cómo te sientes.`
                  : `Durante la primera sesión me cuentas qué te está pasando y qué te gustaría cambiar. Es una conversación relajada y confidencial, sin presión.`
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-sage-900 mb-3 flex items-center">
                <span className="mr-3">🎯</span>
                {variante === 0 ? 'Definimos Objetivos' : variante === 1 ? 'Tus Metas' : 'Hacia Dónde Vamos'}
              </h3>
              <p className="text-sage-700">
                {variante === 0
                  ? `Juntos definiremos qué quieres lograr con la terapia. Pueden ser objetivos concretos como "superar mi ansiedad" o más generales como "sentirme mejor". Todo es válido.`
                  : variante === 1
                  ? `Te preguntaré qué esperas conseguir con la terapia. No importa si tus objetivos son claros o difusos, trabajaremos juntos para darles forma.`
                  : `Hablaremos de tus objetivos terapéuticos. Desde metas específicas hasta deseos de cambio general. Los iremos ajustando según avanzamos.`
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-sage-900 mb-3 flex items-center">
                <span className="mr-3">🔒</span>
                {variante === 0 ? 'Confidencialidad Total' : variante === 1 ? 'Privacidad Garantizada' : 'Todo Queda Entre Nosotros'}
              </h3>
              <p className="text-sage-700">
                {variante === 0
                  ? `Todo lo que hablemos queda protegido por el secreto profesional. Como psicóloga sanitaria colegiada, estoy obligada legalmente a mantener la confidencialidad.`
                  : variante === 1
                  ? `Lo que compartas conmigo no sale de consulta. El secreto profesional es una obligación legal que tomo muy en serio.`
                  : `Tus sesiones son completamente confidenciales. Cumplo estrictamente con el código deontológico y la normativa de protección de datos.`
                }
              </p>
            </div>

            {(tipo === 'online' || tipo === 'especialidad-online') && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-serif text-sage-900 mb-3 flex items-center">
                  <span className="mr-3">💻</span>
                  {variante === 0 ? 'Conexión Fácil' : variante === 1 ? 'Tecnología Sencilla' : 'Online pero Cercano'}
                </h3>
                <p className="text-sage-700">
                  {variante === 0
                    ? `Usamos videollamada segura. Solo necesitas conexión a internet y un lugar tranquilo. Te enviaré el enlace antes de la sesión. Desde ${ciudad} podrás conectarte sin problemas.`
                    : variante === 1
                    ? `La terapia online es muy simple: videollamada desde tu móvil u ordenador. Busca un sitio privado en ${ciudad} donde nadie te interrumpa y listo.`
                    : `Sesiones por videollamada cifrada. Desde ${ciudad} o cualquier lugar, solo necesitas intimidad y buena conexión. Te explico todo antes de empezar.`
                  }
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Nueva sección: Problemas que trato */}
      <section className="py-16 px-4 bg-gradient-to-r from-sage-50 to-cream-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-sage-900 mb-12 text-center"
          >
            {tipo === 'especialidad-online'
              ? `Ayuda Especializada en ${especialidad} ${ciudad ? `para Personas de ${ciudad}` : ''}`
              : variante === 0
              ? `Problemas Frecuentes que Trato`
              : variante === 1
              ? `¿En Qué Puedo Ayudarte?`
              : `Motivos de Consulta Habituales`
            }
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              let problemasArray;

              if (tipo === 'especialidad-online') {
                if (especialidadSlug === 'duelo') {
                  problemasArray = [
                    { icon: '💔', titulo: 'Pérdida de Seres Queridos', desc: 'Acompañamiento en el proceso de duelo por fallecimiento de familiares o amigos cercanos.' },
                    { icon: '🌊', titulo: 'Duelo Complicado', desc: 'Cuando el dolor no disminuye con el tiempo o interfiere gravemente en tu vida diaria.' },
                    { icon: '💬', titulo: 'Expresión Emocional', desc: 'Ayuda para identificar, expresar y gestionar las emociones del duelo de manera saludable.' },
                    { icon: '🔄', titulo: 'Reorganización Vital', desc: 'Apoyo para adaptarte a una nueva realidad sin la persona fallecida.' },
                    { icon: '🕊️', titulo: 'Rituales de Despedida', desc: 'Creación de rituales significativos que ayuden en el proceso de aceptación.' },
                    { icon: '🌱', titulo: 'Crecimiento Post-Duelo', desc: 'Encontrar significado y aprender a vivir plenamente después de la pérdida.' },
                  ];
                } else if (especialidadSlug === 'pareja') {
                  problemasArray = [
                    { icon: '💑', titulo: 'Crisis de Pareja', desc: 'Momentos difíciles, discusiones frecuentes o sensación de distanciamiento en la relación.' },
                    { icon: '🗣️', titulo: 'Problemas de Comunicación', desc: 'Dificultades para expresarse, escuchar o entenderse mutuamente.' },
                    { icon: '🔥', titulo: 'Infidelidades', desc: 'Recuperación tras una infidelidad y reconstrucción de la confianza en la pareja.' },
                    { icon: '⚖️', titulo: 'Desequilibrios', desc: 'Problemas de roles, carga desigual de responsabilidades o falta de reciprocidad.' },
                    { icon: '❤️‍🩹', titulo: 'Reavivar la Relación', desc: 'Pérdida de pasión, rutina excesiva o sensación de que "ya no sois como antes".' },
                    { icon: '👶', titulo: 'Decisiones Importantes', desc: 'Ayuda en momentos de cambio: hijos, convivencia, matrimonio o separación.' },
                  ];
                } else if (especialidadSlug === 'ansiedad') {
                  problemasArray = [
                    { icon: '😰', titulo: 'Crisis de Ansiedad', desc: 'Ataques de pánico, taquicardias, sensación de ahogo o miedo a perder el control.' },
                    { icon: '🔄', titulo: 'Ansiedad Generalizada', desc: 'Preocupación constante y excesiva por múltiples aspectos de la vida diaria.' },
                    { icon: '🏠', titulo: 'Fobias Específicas', desc: 'Miedos intensos a situaciones u objetos concretos: espacios cerrados, alturas, animales...' },
                    { icon: '👥', titulo: 'Ansiedad Social', desc: 'Miedo o incomodidad en situaciones sociales, exposición pública o conocer gente nueva.' },
                    { icon: '💭', titulo: 'Pensamientos Intrusivos', desc: 'Ideas o imágenes recurrentes que generan malestar y son difíciles de controlar.' },
                    { icon: '🌙', titulo: 'Ansiedad Nocturna', desc: 'Dificultad para dormir por preocupaciones o activación excesiva antes de acostarte.' },
                  ];
                } else {
                  // depresión
                  problemasArray = [
                    { icon: '😔', titulo: 'Tristeza Persistente', desc: 'Sentimientos de vacío, apatía o desesperanza que no desaparecen con el tiempo.' },
                    { icon: '🛌', titulo: 'Falta de Energía', desc: 'Cansancio extremo, dificultad para levantarte o realizar actividades cotidianas.' },
                    { icon: '🚫', titulo: 'Pérdida de Interés', desc: 'Ya no disfrutas de cosas que antes te gustaban, aislamiento social.' },
                    { icon: '💭', titulo: 'Pensamientos Negativos', desc: 'Autocrítica excesiva, culpa, baja autoestima o pensamientos oscuros recurrentes.' },
                    { icon: '🍽️', titulo: 'Cambios de Apetito/Sueño', desc: 'Dormir mucho o muy poco, comer en exceso o pérdida de apetito.' },
                    { icon: '🔄', titulo: 'Depresión Recurrente', desc: 'Episodios depresivos que reaparecen o depresión crónica de larga duración.' },
                  ];
                }
              } else {
                // Contenido genérico con variaciones
                problemasArray = [
                  { 
                    icon: '😰', 
                    titulo: variante === 0 ? 'Ansiedad y Estrés' : variante === 1 ? 'Gestión de Ansiedad' : 'Problemas de Ansiedad',
                    desc: variante === 0 
                      ? 'Crisis de ansiedad, preocupaciones constantes, estrés laboral o académico que afecta tu día a día.'
                      : variante === 1
                      ? 'Ataques de pánico, ansiedad generalizada, fobias o miedos que limitan tu vida cotidiana.'
                      : 'Nerviosismo excesivo, taquicardias, pensamientos intrusivos o dificultad para relajarte.'
                  },
                  { 
                    icon: '😔', 
                    titulo: variante === 0 ? 'Depresión' : variante === 1 ? 'Estado de Ánimo Bajo' : 'Tristeza y Apatía',
                    desc: variante === 0
                      ? 'Tristeza persistente, falta de motivación, apatía o sentimientos de vacío que no mejoran.'
                      : variante === 1
                      ? 'Desánimo constante, pérdida de interés en actividades, cansancio emocional o pensamientos negativos.'
                      : 'Sentimientos de desesperanza, llanto frecuente, aislamiento o dificultad para disfrutar de la vida.'
                  },
                  {
                    icon: '💔',
                    titulo: variante === 0 ? 'Duelo y Pérdidas' : variante === 1 ? 'Procesos de Duelo' : 'Superación de Pérdidas',
                    desc: variante === 0
                      ? 'Pérdida de seres queridos, rupturas, cambios vitales importantes o duelos complicados.'
                      : variante === 1
                      ? 'Acompañamiento en momentos de pérdida, duelo por fallecimiento o separaciones dolorosas.'
                      : 'Ayuda para procesar pérdidas significativas y aprender a vivir con la ausencia.'
                  },
                  {
                    icon: '💑',
                    titulo: variante === 0 ? 'Problemas de Pareja' : variante === 1 ? 'Terapia de Pareja' : 'Relaciones de Pareja',
                    desc: variante === 0
                      ? 'Crisis, falta de comunicación, infidelidades, celos o decisiones sobre la relación.'
                      : variante === 1
                      ? 'Conflictos recurrentes, distanciamiento emocional, problemas de convivencia o decisiones difíciles.'
                      : 'Rupturas, discusiones constantes, problemas de confianza o sensación de estancamiento.'
                  },
                  {
                    icon: '🔄',
                    titulo: variante === 0 ? 'Autoestima y Autoconcepto' : variante === 1 ? 'Inseguridad Personal' : 'Confianza en Ti Mismo/a',
                    desc: variante === 0
                      ? 'Baja autoestima, inseguridades, autocrítica excesiva o dificultad para valorarte.'
                      : variante === 1
                      ? 'Falta de confianza, sentimiento de inferioridad, comparación constante con otros.'
                      : 'Pensamientos autodestructivos, miedo al rechazo o necesidad de aprobación externa.'
                  },
                  {
                    icon: '🌈',
                    titulo: variante === 0 ? 'Identidad y Orientación' : variante === 1 ? 'Diversidad Sexual y de Género' : 'LGTBIQ+',
                    desc: variante === 0
                      ? 'Dudas sobre orientación sexual, identidad de género, proceso de salida del armario.'
                      : variante === 1
                      ? 'Acompañamiento en el proceso de autodescubrimiento, coming out o transición de género.'
                      : 'Apoyo en la exploración de tu identidad, gestión del entorno social y familiar.'
                  },
                ];
              }

              return problemasArray.map((problema, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-3">{problema.icon}</div>
                  <h3 className="text-xl font-serif text-sage-900 mb-2">{problema.titulo}</h3>
                  <p className="text-sage-700 text-sm">{problema.desc}</p>
                </motion.div>
              ));
            })()}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sage-700 mt-12 max-w-3xl mx-auto"
          >
            {tipo === 'especialidad-online'
              ? `Si vives en ${ciudad} y necesitas ayuda especializada en ${especialidad}, puedo acompañarte en tu proceso. La terapia online nos permite trabajar juntos sin importar la distancia.`
              : variante === 0
              ? `Estos son solo algunos ejemplos. Si vives en ${ciudad} y necesitas ayuda psicológica, contáctame para hablar de tu situación particular.`
              : variante === 1
              ? `¿Te identificas con alguno de estos problemas? Desde ${ciudad} puedo ayudarte. No dudes en contactarme para una primera consulta.`
              : `Si alguno de estos motivos resuena contigo y vives en ${ciudad} o ${provincia || comunidad}, estoy aquí para ayudarte.`
            }
          </motion.p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gradient-to-r from-sage-50 to-cream-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-sage-900 mb-12 text-center"
          >
            Preguntas Frecuentes
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-serif text-sage-900 mb-3">{faq.pregunta}</h3>
                <p className="text-sage-700 leading-relaxed">{faq.respuesta}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-sage-900 mb-6"
          >
            ¿Listo/a para Dar el Primer Paso?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-sage-700 mb-8"
          >
            Contacta conmigo y empecemos a trabajar en tu bienestar. 
            {tipo === 'online' || tipo === 'especialidad-online' 
              ? ` Desde ${ciudad} o cualquier lugar de España.`
              : ` Atiendo a personas de ${ciudad} y alrededores.`
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://wa.me/34680614901?text=Hola, me gustaría solicitar información sobre terapia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
            >
              <FaWhatsapp className="text-2xl" />
              <span>WhatsApp: 680 614 901</span>
            </a>
            <a
              href="mailto:hola@martamg.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold text-lg"
            >
              <FaEnvelope className="text-xl" />
              <span>hola@martamg.com</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
