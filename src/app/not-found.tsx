'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-sage-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.h1 
            className="font-serif text-9xl sm:text-[12rem] lg:text-[14rem] text-sage-200 font-bold leading-none mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            404
          </motion.h1>

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-sage-100 rounded-full">
              <FaSearch className="text-sage-700 text-3xl" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-4xl sm:text-5xl text-sage-900 mb-6"
          >
            Página no encontrada
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-sage-700 mb-12 max-w-lg mx-auto leading-relaxed"
          >
            Lo sentimos, la página que buscas no existe o ha sido movida. 
            ¿Te gustaría volver al inicio o contactar conmigo?
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-sage-700 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-sage-600 transition-all hover:scale-105"
            >
              <FaHome className="mr-2" />
              Volver al Inicio
            </Link>
            <a
              href="https://wa.me/34680614901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-sage-700 px-8 py-4 text-base font-semibold text-sage-700 hover:bg-sage-50 transition-all hover:scale-105"
            >
              💬 Contactar
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <p className="text-sm uppercase tracking-widest text-sage-600 font-medium mb-4">
              Enlaces Rápidos
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/sobre-mi"
                className="text-sage-700 hover:text-sage-900 underline underline-offset-4 transition-colors"
              >
                Sobre mí
              </Link>
              <span className="text-sage-300">•</span>
              <Link
                href="/terapia-individual"
                className="text-sage-700 hover:text-sage-900 underline underline-offset-4 transition-colors"
              >
                Terapia Individual
              </Link>
              <span className="text-sage-300">•</span>
              <Link
                href="/terapia-pareja"
                className="text-sage-700 hover:text-sage-900 underline underline-offset-4 transition-colors"
              >
                Terapia de Pareja
              </Link>
              <span className="text-sage-300">•</span>
              <Link
                href="/terapia-online"
                className="text-sage-700 hover:text-sage-900 underline underline-offset-4 transition-colors"
              >
                Terapia Online
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
