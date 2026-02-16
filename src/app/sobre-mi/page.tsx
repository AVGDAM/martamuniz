'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SobreMi() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metodos = [
    {
      icon: '🌱',
      title: 'Terapia conductual',
      description: 'En la terapia conductual, el enfoque principal está en el papel de aprendizaje en el desarrollo de comportamientos normales y anormales.',
    },
    {
      icon: '🧠',
      title: 'Terapia cognitiva',
      description: 'En la terapia cognitiva, el proceso se centra en lo que una persona piensa en lugar de lo que hace.',
    },
    {
      icon: '🎭',
      title: 'Psicoanalisis',
      description: 'En psicoanálisis, nos enfocamos en cambiar comportamientos problemáticos al entender las dinámicas inconscientes de cada uno.',
    },
    {
      icon: '💭',
      title: 'Terapia humanística',
      description: 'En la terapia humanística, el enfoque está en que la persona tenga una perspectiva holística de sí misma para tomar decisiones saludables y desarrollarse.',
    },
  ];

  const educacion = [
    {
      institucion: 'Harvard University',
      titulo: "Bachelor's degree in Psychology",
      periodo: '2012-2016',
    },
    {
      institucion: 'New York University',
      titulo: "Master's degree in Psychology",
      periodo: '2016-2018',
    },
  ];

  const licencias = [
    'NBCC board licensed, 2015, NYC',
    'EMDR board licensed, 2014, Washington DC',
    'NCMHCE board licensed, 2016, NYC',
  ];

  const experiencia = [
    {
      lugar: "St Jude's Hospital",
      puesto: 'Psychology Department',
      periodo: '2016-2020',
    },
    {
      lugar: 'NYC Psychotherapy',
      puesto: 'Head psycho therapist',
      periodo: '2020-present',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-widest text-sage-600 font-medium mb-4">
              SOBRE MÍ
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-sage-900 mb-8">
              Soy Marta Muñiz
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose prose-lg">
                <p className="text-sage-700 leading-relaxed mb-6">
                  Gracias a mi Programa Terapéutico especializado en procesos de Duelo, lograré resolver y sanar las emociones que están enfocadas con una situación tan complicada como es la pérdida de un ser querido o de tu salud física o las consecuencias a dar significado a tu vida.
                </p>
                <p className="text-sage-700 leading-relaxed">
                  Psicóloga sanitaria licenciada en la Universidad Pontificia de Salamanca, experta en Proceso de Duelo.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="https://assets.zyrosite.com/YBglg8BplKFxWa0K/marta-muniz-psicologa-santander-1-mk383yq1WaIKqD42.jpg"
                    alt="Marta Muñiz - Psicóloga"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Métodos Section */}
      <section className="py-20 lg:py-32 bg-white" ref={ref}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-sage-600 font-medium mb-4">
              EXPERIENCIA
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-sage-900 mb-4">
              Mis métodos
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {metodos.map((metodo, index) => (
              <motion.div
                key={metodo.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">{metodo.icon}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-sage-900 mb-2">
                    {metodo.title}
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    {metodo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educación y Experiencia */}
      <section className="py-20 lg:py-32 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-sage-600 font-medium mb-4">
              EDUCACIÓN
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-sage-900 mb-4">
              Haciendo mi mejor esfuerzo para aprender
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Educación */}
            <div>
              <h3 className="font-serif text-2xl text-sage-900 mb-6 text-center">Educación</h3>
              <div className="space-y-6">
                {educacion.map((item, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-semibold text-sage-900 mb-1">{item.institucion}</h4>
                    <p className="text-sage-600 text-sm mb-1">{item.titulo}</p>
                    <p className="text-sage-500 text-sm">{item.periodo}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Licencias */}
            <div>
              <h3 className="font-serif text-2xl text-sage-900 mb-6 text-center">Licencias</h3>
              <div className="space-y-4">
                {licencias.map((licencia, index) => (
                  <div key={index} className="text-center">
                    <p className="text-sage-600 text-sm">{licencia}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experiencia */}
            <div>
              <h3 className="font-serif text-2xl text-sage-900 mb-6 text-center">Experiencia</h3>
              <div className="space-y-6">
                {experiencia.map((item, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-semibold text-sage-900 mb-1">{item.lugar}</h4>
                    <p className="text-sage-600 text-sm mb-1">{item.puesto}</p>
                    <p className="text-sage-500 text-sm">{item.periodo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-sage-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-xl text-sage-100 mb-12">
            Si tienes alguna pregunta o quieres reservar una sesión, no dudes en contactarme
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
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

      {/* Mapa Section */}
      <section className="py-0">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.7709177445707!2d-3.8099437!3d43.4622703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI3JzQ0LjIiTiAzwrA0OCczNS44Ilc!5e0!3m2!1ses!2ses!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
