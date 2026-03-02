'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const specialties = [
  {
    title: 'Duelo',
    description: 'El duelo es uno de los procesos más dolorosos por los que puede pasar una persona. El enfoque terapéutico está en ayudarte a aceptar la pérdida y seguir adelante con tu vida.',
    icon: '🌱',
  },
  {
    title: 'Pareja',
    description: 'La terapia de pareja o terapia de familia ayuda a las personas que deciden compartir su vida juntas para resolver sus problemas juntas y mejorar sus relaciones afectivas.',
    icon: '💑',
  },
  {
    title: 'Adicciones',
    description: 'Descubrir el motivo y la solución de tu adicción es posible. El trabajo para dejar una adicción llevará un proceso que podrás conseguir con tus propios recursos.',
    icon: '🌿',
  },
  {
    title: 'Violencia de género',
    description: 'Te acompaño en el proceso de recuperación y sanación tras una situación de violencia de género, ayudándote a recuperar tu seguridad, autoestima y bienestar emocional.',
    icon: '🌸',
  },
];

export default function Specialties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="especialidades" className="py-20 lg:pb-12 lg:pt-32 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-sage-600 font-medium mb-4">
            Servicios
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-sage-900 mb-4">
            Mis Especialidades
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Con más de 10 años de experiencia ayudando a las personas a superar sus problemas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-cream-50 rounded-2xl p-8 h-full border border-sage-100 hover:border-sage-300 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="text-5xl mb-4">{specialty.icon}</div>
                <h3 className="font-serif text-2xl text-sage-900 mb-4">
                  {specialty.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
