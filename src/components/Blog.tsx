'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const blogPosts = [
  {
    title: 'Comprendiendo el Autocuidado: Procesos y Recuperación',
    category: 'AUTOCUIDADO',
    description: 'Este artículo nos ayuda a profundizar en lo que implica un diagnóstico de Trastorno de Conducta Alimentaria, lo importante de detectarlo a tiempo para que un profesional pueda ayudarnos para nuestra recuperación',
    image: '/blog-1.jpg',
  },
  {
    title: 'Comprendiendo el Duelo: Procesos y Apoyo Emocional',
    category: 'DUELO',
    description: 'El duelo es un proceso emocional que surge ante una pérdida significativa. Aunque cada experiencia es única y personal, su manejo puede ayudarnos a avanzar hacia una nueva etapa',
    image: '/blog-2.jpg',
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-sage-600 font-medium mb-4">
            Blog
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-sage-900 mb-4">
            Herramientas para el bienestar
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-sage-100 to-cream-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-sage-900/10"></div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <p className="text-sm uppercase tracking-wider text-sage-600 font-medium mb-3">
                    {post.category}
                  </p>
                  <h3 className="font-serif text-2xl text-sage-900 mb-4 group-hover:text-sage-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sage-600 leading-relaxed mb-6">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center text-sage-700 font-semibold group-hover:text-sage-600">
                    Leer más →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
