'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Terapia Individual',
    subtitle: 'Enfocado en ti',
    description: 'Un espacio seguro para ti',
    price: '50€',
    duration: '1 hora',
    image: '/therapy-individual.jpg',
  },
  {
    title: 'Terapia de Pareja',
    subtitle: 'Juntos es mejor',
    description: 'Mejora vuestra relación',
    price: '60€',
    duration: '1 hora',
    image: '/therapy-couple.jpg',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="terapias" className="py-20 lg:py-32 bg-gradient-to-b from-white to-cream-50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-sage-200 to-cream-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-sage-900/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/30 text-8xl font-serif">{index + 1}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <p className="text-sm uppercase tracking-wider text-sage-600 font-medium mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="font-serif text-3xl text-sage-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sage-600 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-3xl font-bold text-sage-700">{service.price}</p>
                      <p className="text-sm text-sage-500">{service.duration}</p>
                    </div>
                  </div>
                  <a
                    href="#contacto"
                    className="block w-full text-center rounded-full bg-sage-700 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-sage-600 transition-all hover:scale-105"
                  >
                    Reservar ahora
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
