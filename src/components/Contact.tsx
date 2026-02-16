'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-sage-800" ref={ref}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-xl text-sage-100 mb-12 max-w-2xl mx-auto">
            Si tienes alguna pregunta o quieres reservar una sesión, no dudes en contactarme
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:hola@martamg.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-sage-800 shadow-lg hover:bg-sage-50 transition-all hover:scale-105"
            >
              📧 hola@martamg.com
            </a>
            <a
              href="tel:+34680614901"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all hover:scale-105"
            >
              📞 680 614 901
            </a>
            <a
              href="https://wa.me/34680614901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-green-600 transition-all hover:scale-105"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
