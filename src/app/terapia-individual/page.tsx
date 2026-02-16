'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheck, FaHeart, FaBrain, FaHandHoldingHeart } from 'react-icons/fa';

export default function TerapiaIndividual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const beneficios = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: 'Bienestar Emocional',
      description: 'Aprende a gestionar tus emociones de forma saludable y encuentra el equilibrio emocional que necesitas.',
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: 'Autoconocimiento',
      description: 'Descubre tus fortalezas, identifica patrones de pensamiento y desarrolla una mejor comprensión de ti mismo.',
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8" />,
      title: 'Herramientas Prácticas',
      description: 'Obtén estrategias y técnicas concretas que podrás aplicar en tu día a día para mejorar tu calidad de vida.',
    },
  ];

  const queIncluyeSesion = [
    'Espacio seguro y confidencial para expresarte libremente',
    'Sesiones de 60 minutos completamente personalizadas',
    'Ejercicios y técnicas adaptadas a tus necesidades',
    'Seguimiento continuo de tu progreso',
    'Material de apoyo entre sesiones',
    'Flexibilidad de horarios (presencial u online)',
  ];

  const problemasTrata = [
    'Procesos de duelo y pérdidas',
    'Ansiedad y estrés',
    'Depresión y estado de ánimo bajo',
    'Baja autoestima y confianza',
    'Adicciones y dependencias',
    'Traumas y experiencias difíciles',
    'Crisis vitales y cambios importantes',
    'Problemas de gestión emocional',
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
              TERAPIA PSICOLÓGICA EN SANTANDER
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-sage-900 mb-8 leading-tight">
              Terapia Individual
            </h1>
            <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Un espacio seguro y profesional donde trabajar en tu bienestar emocional. 
              Te ayudo a superar momentos difíciles y a encontrar las herramientas que 
              necesitas para vivir una vida más plena y satisfactoria.
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
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border-2 border-sage-700 px-8 py-4 text-base font-semibold text-sage-700 hover:bg-sage-50 transition-all hover:scale-105"
              >
                Más Información
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué es la Terapia Individual? */}
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
                ¿Qué es la Terapia Individual?
              </h2>
              <div className="space-y-4 text-sage-700 leading-relaxed">
                <p>
                  La terapia individual es un proceso terapéutico personalizado donde trabajamos 
                  juntos para que puedas entender y resolver los desafíos emocionales y psicológicos 
                  que estás enfrentando. Es un espacio solo para ti, donde puedes expresarte 
                  libremente sin juicios.
                </p>
                <p>
                  A través de diferentes técnicas psicológicas basadas en evidencia científica, 
                  te ayudaré a desarrollar las habilidades necesarias para manejar mejor tus 
                  emociones, pensamientos y comportamientos.
                </p>
                <p>
                  Mi enfoque es cálido, empático y profesional. Creo firmemente que cada persona 
                  tiene en su interior los recursos necesarios para superar sus dificultades, y mi 
                  trabajo es ayudarte a descubrirlos y potenciarlos.
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
                  ¿Es para mí la Terapia Individual?
                </h3>
                <p className="text-sage-700 mb-6">
                  La terapia individual es para ti si:
                </p>
                <ul className="space-y-3">
                  {[
                    'Sientes que necesitas hablar con alguien profesional',
                    'Estás pasando por un momento difícil',
                    'Quieres entenderte mejor a ti mismo/a',
                    'Buscas herramientas para gestionar tus emociones',
                    'Deseas hacer cambios en tu vida',
                    'Necesitas apoyo en un proceso de duelo',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheck className="text-sage-600 mt-1 flex-shrink-0" />
                      <span className="text-sage-700">{item}</span>
                    </li>
                  ))}
                </ul>
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
              Beneficios de la Terapia Individual
            </h2>
            <p className="text-lg text-sage-600 max-w-2xl mx-auto">
              Un proceso terapéutico puede transformar tu vida de muchas maneras
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

      {/* Qué incluye cada sesión */}
      <section className="py-20 lg:py-32 bg-white">
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
              Cada sesión está diseñada para maximizar tu progreso y bienestar
            </p>
          </motion.div>

          <div className="bg-cream-50 rounded-3xl p-8 lg:p-12">
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
      <section className="py-20 lg:py-32 bg-sage-50">
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
              Trabajo con diferentes problemas psicológicos y emocionales
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
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="w-3 h-3 bg-sage-600 rounded-full flex-shrink-0"></div>
                <span className="text-sage-700 font-medium text-lg">{problema}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifa */}
      <section className="py-20 lg:py-32 bg-white">
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
            {/* Sesión Individual */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-cream-50 rounded-3xl p-8 border-2 border-sage-200 hover:border-sage-400 transition-all hover:shadow-xl"
            >
              <p className="text-xs uppercase tracking-widest text-sage-600 font-medium mb-2">
                ENFOCADO EN TI
              </p>
              <h3 className="font-serif text-3xl text-sage-900 mb-3">
                Sesión Individual
              </h3>
              <p className="text-sage-600 mb-6">
                Un espacio seguro para ti
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-sage-900">60€</span>
                <p className="text-sage-600 mt-2">1 hora</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Sesión de 60 minutos',
                  'Atención personalizada',
                  'Presencial u online',
                  'Flexibilidad de horarios',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="text-sage-600 mt-1 flex-shrink-0" />
                    <span className="text-sage-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/34680614901?text=Hola,%20me%20gustaría%20reservar%20una%20sesión%20individual"
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
                  Compromiso con tu proceso
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">225€</span>
                  <p className="text-cream-100 mt-2">5 sesiones (45€/sesión)</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    '5 sesiones de 60 minutos',
                    'Seguimiento continuo',
                    'Material de apoyo',
                    'Ejercicios personalizados',
                    'Ahorro de 75€',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheck className="text-cream-200 mt-1 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/34680614901?text=Hola,%20me%20gustaría%20reservar%20el%20bono%20de%205%20sesiones%20individuales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-full bg-white px-6 py-4 text-base font-semibold text-sage-900 shadow-lg hover:bg-cream-100 transition-all hover:scale-105"
                >
                  Reservar Bono
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
            ¿Listo para dar el primer paso?
          </h2>
          <p className="text-xl text-sage-100 mb-12 max-w-2xl mx-auto">
            Pedir ayuda es un acto de valentía. Estoy aquí para acompañarte en tu proceso 
            y ayudarte a alcanzar el bienestar que mereces.
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
