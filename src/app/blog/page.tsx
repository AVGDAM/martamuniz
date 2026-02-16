'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendar, FaClock, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    slug: 'como-superar-duelo-perdida-ser-querido',
    title: 'Cómo Superar el Duelo por la Pérdida de un Ser Querido',
    excerpt: 'El duelo es un proceso natural pero doloroso. Descubre las 5 etapas del duelo y estrategias profesionales para atravesar este difícil momento con apoyo psicológico.',
    category: 'Duelo',
    date: '15 de febrero de 2026',
    readTime: '8 min',
    image: '/blog-duelo-perdida.jpg',
  },
  {
    id: 2,
    slug: 'terapia-pareja-cuando-acudir',
    title: '¿Cuándo es el Momento de Ir a Terapia de Pareja?',
    excerpt: 'No hace falta estar al borde de la ruptura. Conoce las 7 señales que indican que tu relación necesita ayuda profesional y cómo la terapia puede salvar tu relación.',
    category: 'Pareja',
    date: '12 de febrero de 2026',
    readTime: '6 min',
    image: '/blog-terapia-pareja.jpg',
  },
  {
    id: 3,
    slug: 'ansiedad-sintomas-tratamiento',
    title: 'Ansiedad: Síntomas, Causas y Tratamiento Efectivo',
    excerpt: 'La ansiedad afecta a millones de personas. Aprende a identificar los síntomas físicos y emocionales, y descubre técnicas de terapia cognitivo-conductual que realmente funcionan.',
    category: 'Salud Mental',
    date: '8 de febrero de 2026',
    readTime: '10 min',
    image: '/blog-ansiedad-sintomas.jpg',
  },
  {
    id: 4,
    slug: 'terapia-online-ventajas-psicologia-virtual',
    title: 'Ventajas de la Terapia Online: ¿Es Efectiva la Psicología Virtual?',
    excerpt: 'La terapia online ofrece flexibilidad y comodidad sin sacrificar efectividad. Estudios demuestran que tiene la misma eficacia que la presencial para la mayoría de problemas.',
    category: 'Terapia Online',
    date: '5 de febrero de 2026',
    readTime: '7 min',
    image: '/blog-terapia-online.jpg',
  },
  {
    id: 5,
    slug: 'adicciones-comportamentales-como-detectarlas',
    title: 'Adicciones Comportamentales: Cómo Detectarlas y Tratarlas',
    excerpt: 'No solo las sustancias crean adicción. El juego, las compras, las redes sociales... Descubre cómo identificar una adicción comportamental y buscar ayuda profesional.',
    category: 'Adicciones',
    date: '1 de febrero de 2026',
    readTime: '9 min',
    image: '/blog-adicciones-comportamentales.jpg',
  },
  {
    id: 6,
    slug: 'depresion-diferencia-tristeza',
    title: 'Depresión vs Tristeza: Cómo Diferenciarlas y Cuándo Pedir Ayuda',
    excerpt: 'Sentirse triste es normal, pero ¿cuándo se convierte en depresión? Conoce las diferencias clave y los signos de alarma que indican que necesitas apoyo psicológico.',
    category: 'Salud Mental',
    date: '28 de enero de 2026',
    readTime: '8 min',
    image: '/blog-depresion-tristeza.jpg',
  },
  {
    id: 7,
    slug: 'comunicacion-pareja-conflictos',
    title: 'Cómo Mejorar la Comunicación en la Pareja y Resolver Conflictos',
    excerpt: 'La mala comunicación destruye relaciones. Aprende técnicas de comunicación asertiva, escucha activa y gestión de conflictos para fortalecer tu vínculo de pareja.',
    category: 'Pareja',
    date: '25 de enero de 2026',
    readTime: '7 min',
    image: '/blog-comunicacion-pareja.jpg',
  },
  {
    id: 8,
    slug: 'autoestima-baja-ejercicios-practicos',
    title: 'Autoestima Baja: 10 Ejercicios Prácticos para Fortalecerla',
    excerpt: 'La autoestima se construye día a día. Descubre ejercicios validados científicamente que puedes hacer hoy mismo para mejorar tu relación contigo mismo/a.',
    category: 'Desarrollo Personal',
    date: '22 de enero de 2026',
    readTime: '11 min',
    image: '/blog-autoestima-baja.jpg',
  },
  {
    id: 9,
    slug: 'identidad-genero-apoyo-psicologico',
    title: 'Identidad de Género: La Importancia del Apoyo Psicológico',
    excerpt: 'Explorar la identidad de género puede ser un proceso complejo. Descubre cómo la terapia afirmativa puede acompañarte en este camino con respeto y profesionalidad.',
    category: 'Diversidad',
    date: '18 de enero de 2026',
    readTime: '9 min',
    image: '/blog-identidad-genero.jpg',
  },
];

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-sage-900 mb-6"
          >
            Blog de Psicología
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-sage-700 max-w-2xl mx-auto"
          >
            Artículos sobre bienestar emocional, relaciones saludables y crecimiento personal. 
            Información profesional para cuidar tu salud mental.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <Link href={`/blog/${post.slug}`}>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-sage-100 text-sage-700 text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-serif text-sage-900 mb-3 group-hover:text-sage-700 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sage-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-sage-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FaCalendar />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaClock />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-sage-700 font-semibold group-hover:gap-3 transition-all">
                      <span>Leer más</span>
                      <FaArrowRight className="text-sm" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center items-center gap-2 mt-12"
            >
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-3 rounded-lg transition-all ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-sage-700 hover:bg-sage-50 shadow-md hover:shadow-lg'
                }`}
                aria-label="Página anterior"
              >
                <FaChevronLeft />
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                      currentPage === page
                        ? 'bg-sage-600 text-white shadow-lg'
                        : 'bg-white text-sage-700 hover:bg-sage-50 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-lg transition-all ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-sage-700 hover:bg-sage-50 shadow-md hover:shadow-lg'
                }`}
                aria-label="Página siguiente"
              >
                <FaChevronRight />
              </button>
            </motion.div>
          )}

          {/* Posts counter */}
          <p className="text-center mt-6 text-sage-600">
            Mostrando {startIndex + 1} - {Math.min(endIndex, blogPosts.length)} de {blogPosts.length} artículos
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-sage-50 to-cream-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-sage-900 mb-6"
          >
            ¿Necesitas Ayuda Profesional?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-sage-700 mb-8"
          >
            Si te identificas con alguno de estos temas, estoy aquí para ayudarte. 
            Agenda una primera sesión sin compromiso.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contacto"
              className="inline-block px-8 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold"
            >
              Pedir Cita
            </Link>
            <Link
              href="/terapia-online"
              className="inline-block px-8 py-4 border-2 border-sage-600 text-sage-600 rounded-lg hover:bg-sage-50 transition-colors font-semibold"
            >
              Terapia Online
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
