'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FaCheck, FaClock, FaHome, FaGlobe } from 'react-icons/fa';

export default function TerapiaOnline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const beneficios = [
    {
      icon: <FaClock className="w-8 h-8" />,
      title: 'Flexibilidad Total',
      description: 'Adapta las sesiones a tu horario sin desplazamientos. Perfecto para agendas ocupadas.',
    },
    {
      icon: <FaHome className="w-8 h-8" />,
      title: 'Desde Casa',
      description: 'Conéctate desde tu espacio seguro. Ahorra tiempo y energía en desplazamientos.',
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: 'Sin Fronteras',
      description: 'Vivas donde vivas, puedo acompañarte en tu proceso terapéutico.',
    },
  ];

  const queIncluyeSesion = [
    'Sesión de 50-60 minutos por videollamada',
    'Plataforma segura y confidencial (Google Meet, Zoom)',
    'Evaluación y diagnóstico profesional',
    'Técnicas terapéuticas basadas en evidencia',
    'Material y recursos descargables',
    'Seguimiento por email entre sesiones',
  ];

  const problemasTrata = [
    'Ansiedad y ataques de pánico',
    'Depresión y estado de ánimo bajo',
    'Estrés laboral o académico',
    'Duelo y pérdidas significativas',
    'Baja autoestima e inseguridad',
    'Trauma y experiencias difíciles',
    'Problemas de relaciones personales',
    'Crecimiento personal y autoconocimiento',
  ];

  const cuandoElegir = [
    'Vives fuera de Santander',
    'Tienes una agenda muy ocupada',
    'Prefieres la comodidad de tu hogar',
    'Tienes movilidad reducida',
    'Viajas con frecuencia',
    'Experimentas ansiedad social',
    'Vives en una zona rural',
    'Valoras el ahorro de tiempo',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream-50 via-white to-sage-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-widest text-sage-600 font-medium mb-4">
              TERAPIA PSICOLÓGICA ONLINE
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-sage-900 mb-8 leading-tight">
              Terapia Online
            </h1>
            <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed mb-8">
              La misma calidad profesional desde la comodidad de tu hogar. 
              La terapia online ofrece flexibilidad y accesibilidad sin comprometer 
              la efectividad del tratamiento. Ideal para personas con agendas ocupadas 
              o que viven en otras ciudades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/34680614901"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-sage-700 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-sage-600 transition-all hover:scale-105"
              >
                Reservar Primera Sesión
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border-2 border-sage-700 px-8 py-4 text-base font-semibold text-sage-700 hover:bg-sage-50 transition-all hover:scale-105"
              >
                Más Información
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué es la Terapia Online? */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl text-sage-900 mb-6">
                ¿Qué es la Terapia Online?
              </h2>
              <div className="space-y-4 text-sage-700 leading-relaxed">
                <p>
                  La terapia online es una modalidad de intervención psicológica que se realiza 
                  a través de videollamada, manteniendo la misma estructura, confidencialidad y 
                  efectividad que una sesión presencial.
                </p>
                <p>
                  Es perfecta si tienes una agenda ocupada, vives fuera de Santander o 
                  simplemente prefieres la comodidad de conectar desde tu hogar. La calidad 
                  del tratamiento es la misma que en consulta presencial.
                </p>
                <p>
                  Utilizo plataformas seguras y cifradas que garantizan tu privacidad. Cada 
                  sesión dura 50-60 minutos y trabajamos con los mismos objetivos terapéuticos 
                  que en la terapia presencial.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-sage-100 rounded-3xl p-8 lg:p-12">
                <h3 className="font-serif text-2xl text-sage-900 mb-6">
                  ¿Cómo funciona?
                </h3>
                <div className="space-y-4 text-sage-700">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Reserva tu cita</h4>
                      <p className="text-sm">Contacta por WhatsApp o email para agendar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Prepara tu espacio</h4>
                      <p className="text-sm">Lugar tranquilo y privado donde te sientas cómodo/a</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Conéctate</h4>
                      <p className="text-sm">Te envío el enlace seguro de videollamada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Sesión terapéutica</h4>
                      <p className="text-sm">50-60 minutos de trabajo profesional</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 lg:py-32 bg-sage-50" ref={ref}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl sm:text-5xl text-sage-900 mb-4">
              Ventajas de la Terapia Online
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Descubre por qué cada vez más personas eligen la terapia online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={beneficio.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 mb-6">
                  {beneficio.icon}
                </div>
                <h3 className="font-serif text-2xl text-sage-900 mb-4">
                  {beneficio.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {beneficio.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Cuándo elegir? */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl sm:text-5xl text-sage-900 mb-6">
              ¿Cuándo elegir la Terapia Online?
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              La terapia online puede ser tu mejor opción si te identificas con alguna de estas situaciones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cuandoElegir.map((situacion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-cream-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
              >
                <FaCheck className="text-sage-600 flex-shrink-0 text-xl" />
                <span className="text-sage-700 font-medium text-lg">{situacion}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye cada sesión */}
      <section className="py-20 lg:py-32 bg-sage-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl sm:text-5xl text-sage-900 mb-6">
              ¿Qué incluye cada sesión?
            </h2>
            <p className="text-lg text-sage-600">
              Cada sesión está diseñada para trabajar en profundidad tu bienestar
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <ul className="space-y-4">
              {queIncluyeSesion.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <FaCheck className="text-sage-600 mt-1 flex-shrink-0 text-xl" />
                  <span className="text-sage-700 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Problemas que trato */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl sm:text-5xl text-sage-900 mb-6">
              ¿En qué puedo ayudarte?
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              La terapia online es efectiva para una amplia variedad de dificultades emocionales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problemasTrata.map((problema, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-sage-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="w-3 h-3 bg-sage-600 rounded-full flex-shrink-0"></div>
                <span className="text-sage-700 font-medium text-lg">{problema}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifa */}
      <section className="py-20 lg:py-32 bg-sage-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl sm:text-5xl text-sage-900 mb-4">
              Tarifas
            </h2>
            <p className="text-lg text-sage-600">
              Inversión en tu bienestar emocional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sesión Online */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-sage-200 hover:border-sage-400 transition-all hover:shadow-xl"
            >
              <p className="text-xs uppercase tracking-widest text-sage-600 font-medium mb-2">
                FLEXIBLE Y CÓMODA
              </p>
              <h3 className="font-serif text-3xl text-sage-900 mb-3">
                Sesión Online
              </h3>
              <p className="text-sage-600 mb-6">
                Desde la comodidad de tu hogar
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-sage-900">55€</span>
                <p className="text-sage-600 mt-2">50-60 minutos</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Sesión por videollamada',
                  'Plataforma segura',
                  'Evaluación personalizada',
                  'Material descargable',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="text-sage-600 mt-1 flex-shrink-0" />
                    <span className="text-sage-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/34680614901?text=Hola,%20me%20gustaría%20reservar%20una%20sesión%20online"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-full bg-sage-700 px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-sage-600 transition-all hover:scale-105"
              >
                Reservar Ahora
              </a>
            </motion.div>

            {/* Bono 5 sesiones */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-sage-700 rounded-3xl p-8 text-white relative overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-600 rounded-full opacity-50 blur-2xl"></div>
              <div className="relative z-10">
                <div className="bg-cream-200 text-sage-900 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  -10% descuento
                </div>
                <p className="text-xs uppercase tracking-widest font-medium mb-2 text-cream-200">
                  AHORRA MÁS
                </p>
                <h3 className="font-serif text-3xl mb-3">
                  Bono 5 Sesiones
                </h3>
                <p className="text-cream-100 mb-6">
                  Mayor compromiso, mejores resultados
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">247,50€</span>
                  <p className="text-cream-100 mt-2">5 sesiones (49,50€/sesión)</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    '5 sesiones de 50-60 minutos',
                    'Plan estructurado',
                    'Material y recursos',
                    'Seguimiento continuo',
                    'Ahorro de 27,50€',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheck className="text-cream-200 mt-1 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/34680614901?text=Hola,%20me%20gustaría%20comprar%20el%20bono%20de%205%20sesiones%20online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-full bg-white px-6 py-4 text-base font-semibold text-sage-900 shadow-lg hover:bg-cream-100 transition-all hover:scale-105"
                >
                  Comprar Bono
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 bg-sage-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-sage-100 mb-12 max-w-2xl mx-auto">
            No dejes que la distancia o el tiempo sean un obstáculo para cuidar tu salud mental. 
            La terapia online te ofrece la misma calidad profesional con máxima flexibilidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:hola@martamg.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-sage-900 shadow-lg hover:bg-cream-100 transition-all hover:scale-105 min-w-[280px]"
            >
              📧 hola@martamg.com
            </a>
            <a
              href="tel:+34680614901"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all hover:scale-105 min-w-[280px]"
            >
              📞 680 614 901
            </a>
            <a
              href="https://wa.me/34680614901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-green-600 transition-all hover:scale-105 min-w-[280px]"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
