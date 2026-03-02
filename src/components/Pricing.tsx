'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheck } from 'react-icons/fa';

const pricingPlans = [
  {
    title: 'Terapia Individual',
    subtitle: 'Un espacio seguro para ti',
    price: '50€',
    sessions: '1 hora',
    discount: '',
    features: [
      'Sesión individual de 60 minutos',
      'Atención personalizada',
      'Consulta puntual',
    ],
  },
  {
    title: 'Terapia de Pareja',
    subtitle: 'Mejora vuestra relación',
    price: '60€',
    sessions: '1 hora',
    discount: '',
    features: [
      'Sesión de pareja de 60 minutos',
      'Técnicas de comunicación',
      'Consulta puntual',
    ],
  },
  {
    title: 'Bono individual',
    subtitle: 'La participante individual te ayuda a aprender sobre tu proceso. Profundizamos a través de preguntas de forma creativa y te ofrecemos técnicas y pautas para tu día a día.',
    price: '225€',
    sessions: '5 sesiones',
    discount: '10%',
    features: [
      'Sesiones individuales de 60 minutos',
      'Ejercicios personalizados',
      'Seguimiento continuo',
      'Material de apoyo',
      'Caducidad: 6 meses',
    ],
  },
  {
    title: 'Bono de pareja',
    subtitle: 'La terapia de pareja ayuda a las personas que deciden compartir una vida juntas a resolver sus conflictos y a mejorar su amor tanto en la unión de la pareja.',
    price: '270€',
    sessions: '5 sesiones',
    discount: '10%',
    features: [
      'Sesiones de pareja de 60 minutos',
      'Técnicas de comunicación',
      'Ejercicios conjuntos',
      'Seguimiento personalizado',
      'Caducidad: 6 meses',
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:pt-12 lg:pb-32 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl text-sage-900 mb-4">
            Tarifas y Bonos
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Sesiones individuales o bonos con descuento especial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.discount && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-sage-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    -{plan.discount} descuento
                  </div>
                </div>
              )}
              
              <div className="bg-cream-50 rounded-3xl p-6 lg:p-8 border-2 border-sage-200 hover:border-sage-400 transition-all hover:shadow-xl h-full flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl text-sage-900 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-sage-600 text-sm mb-4 leading-relaxed">
                    {plan.subtitle}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-sage-700">{plan.price}</span>
                  </div>
                  <p className="text-sage-600 text-sm">{plan.sessions}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <FaCheck className="text-sage-600 mt-1 mr-2 flex-shrink-0 text-sm" />
                      <span className="text-sage-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/34680614901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-full bg-sage-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-sage-600 transition-all hover:scale-105"
                >
                  Reservar ahora
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
