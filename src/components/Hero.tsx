'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-cream-50 via-white to-sage-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm uppercase tracking-wider text-sage-600 font-medium mb-4">
              Psicóloga en Santander
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-sage-900 mb-6 leading-tight">
              Marta Muñiz
              <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2">Psicóloga</span>
            </h1>
            <p className="text-lg text-sage-700 mb-8 max-w-xl leading-relaxed">
              Gracias a mi Programa Terapéutico especializado en procesos de Duelo, lograrás expresar y liberar las emociones que estás sintiendo ante una situación tan complicada como la muerte de un ser querido, y comenzarás a dar significado a tu vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/34680614901"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-sage-700 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-sage-600 transition-all hover:scale-105"
              >
                Reservar una sesión
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center justify-center rounded-full border-2 border-sage-700 px-8 py-4 text-base font-semibold text-sage-700 hover:bg-sage-50 transition-all hover:scale-105"
              >
                Conoce mis especialidades
              </a>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://assets.zyrosite.com/YBglg8BplKFxWa0K/marta-muniz-psicologa-santander-1-mk383yq1WaIKqD42.jpg"
                  alt="Marta Muñiz - Psicóloga en Santander"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cream-300 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
