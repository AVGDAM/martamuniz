'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contacto() {
  const contactMethods = [
    {
      icon: <FaWhatsapp className="w-12 h-12" />,
      title: 'WhatsApp',
      subtitle: 'La forma más rápida',
      info: '680 614 901',
      href: 'https://wa.me/34680614901',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
    },
    {
      icon: <FaEnvelope className="w-12 h-12" />,
      title: 'Email',
      subtitle: 'Escríbeme cuando quieras',
      info: 'hola@martamg.com',
      href: 'mailto:hola@martamg.com',
      color: 'from-sage-600 to-sage-700',
      hoverColor: 'hover:from-sage-700 hover:to-sage-800',
    },
    {
      icon: <FaPhone className="w-12 h-12" />,
      title: 'Teléfono',
      subtitle: 'Llámame directamente',
      info: '680 614 901',
      href: 'tel:+34680614901',
      color: 'from-sage-700 to-sage-900',
      hoverColor: 'hover:from-sage-800 hover:to-sage-900',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream-50 via-white to-sage-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-widest text-sage-600 font-medium mb-4">
              ESTOY AQUÍ PARA AYUDARTE
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-sage-900 mb-8 leading-tight">
              Contacto
            </h1>
            <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
              Estoy a tu disposición para resolver cualquier duda o agendar una cita. 
              Elige la forma de contacto que prefieras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${method.color} ${method.hoverColor} text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full mb-6 group-hover:bg-white/30 transition-all">
                    {method.icon}
                  </div>
                  <h3 className="font-serif text-2xl mb-2">
                    {method.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {method.subtitle}
                  </p>
                  <p className="text-xl font-semibold">
                    {method.info}
                  </p>
                  <div className="mt-6 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click para contactar →
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 lg:py-32 bg-sage-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-sage-100 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-sage-700 text-2xl" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-sage-900 mb-2">
                    Ubicación
                  </h3>
                  <p className="text-sage-700 leading-relaxed">
                    Consulta en<br />
                    <strong>Santander, Cantabria</strong>
                  </p>
                </div>
              </div>
              <p className="text-sage-600 text-sm">
                También ofrezco sesiones online para mayor flexibilidad y comodidad.
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-sage-100 p-4 rounded-full">
                  <FaClock className="text-sage-700 text-2xl" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-sage-900 mb-2">
                    Horario
                  </h3>
                  <div className="text-sage-700 space-y-2">
                    <p>
                      <strong>Lunes a Viernes:</strong><br />
                      Cita previa
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sage-600 text-sm">
                Horarios flexibles adaptados a tus necesidades. Contáctame para consultar disponibilidad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-sage-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6">
              ¿Empezamos?
            </h2>
            <p className="text-xl text-sage-100 mb-12 max-w-2xl mx-auto">
              El primer paso siempre es el más importante. Estoy aquí para acompañarte 
              en tu proceso de cambio y crecimiento personal.
            </p>
            
            <a
              href="https://wa.me/34680614901?text=Hola%20Marta,%20me%20gustaría%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-semibold text-sage-900 shadow-lg hover:bg-cream-100 transition-all hover:scale-105"
            >
              <FaWhatsapp className="mr-3 text-2xl" />
              Agendar Primera Cita
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
