'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Raquel',
    text: 'Marta me ha ayudado a superar un momento muy difícil en mi vida. Su profesionalidad y empatía son excepcionales.',
  },
  {
    name: 'Manuel',
    text: 'Mi pareja y yo acudimos a Marta cuando nuestra relación atravesaba una crisis. Su ayuda fue fundamental.',
  },
  {
    name: 'Laura',
    text: 'Después de la pérdida de mi madre, Marta me guió en mi proceso de duelo con mucha sensibilidad y profesionalidad.',
  },
  {
    name: 'Carlos',
    text: 'Su enfoque y dedicación me ayudaron a encontrar las herramientas necesarias para recuperar el control de mi vida.',
  },
  {
    name: 'Ana',
    text: 'La terapia con Marta ha sido transformadora. Me ha ayudado a entenderme mejor y a construir relaciones más sanas.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-sage-900 relative overflow-hidden" ref={ref}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-sage-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cream-300 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
            Testimonios
          </h2>
          <div className="w-24 h-1 bg-cream-300 mx-auto"></div>
        </motion.div>

        {/* Grid asimétrico y moderno */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Primera columna - 2 testimonios */}
          <div className="space-y-4">
            {[0, 1].map((index) => (
              <motion.div
                key={testimonials[index].name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105 group">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{testimonials[index].text}&rdquo;
                  </p>
                  <p className="text-cream-200 font-semibold text-base">
                    — {testimonials[index].name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Segunda columna - 1 testimonio destacado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:row-span-1"
          >
            <div className="bg-cream-200 rounded-3xl p-8 h-full flex flex-col justify-center hover:scale-105 transition-all shadow-2xl">
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-sage-700">★</span>
                ))}
              </div>
              <p className="text-sage-900 text-base leading-relaxed mb-6 italic text-center">
                &ldquo;{testimonials[2].text}&rdquo;
              </p>
              <p className="text-sage-700 font-bold text-xl text-center">
                {testimonials[2].name}
              </p>
            </div>
          </motion.div>

          {/* Tercera columna - 2 testimonios */}
          <div className="space-y-4">
            {[3, 4].map((index) => (
              <motion.div
                key={testimonials[index].name}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: (index - 3) * 0.1 + 0.3 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105 group">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{testimonials[index].text}&rdquo;
                  </p>
                  <p className="text-cream-200 font-semibold text-base">
                    — {testimonials[index].name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
