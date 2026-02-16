'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-cream-50 via-white to-sage-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-sage-900 mb-4">
              Aviso Legal
            </h1>
            <p className="text-sage-600">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-sage-700">
              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">1. Datos identificativos</h2>
                <p>
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa de los siguientes datos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Titular:</strong> Marta Muñiz García</li>
                  <li><strong>NIF:</strong> [Número de identificación]</li>
                  <li><strong>Domicilio:</strong> Santander, Cantabria, España</li>
                  <li><strong>Email:</strong> hola@martamg.com</li>
                  <li><strong>Teléfono:</strong> +34 680 614 901</li>
                  <li><strong>Número de Colegiado:</strong> [Número de colegiación]</li>
                  <li><strong>Colegio Profesional:</strong> Colegio Oficial de Psicólogos</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">2. Objeto</h2>
                <p>
                  El presente aviso legal regula el uso del sitio web martamg.com (en adelante, LA WEB), del que es titular Marta Muñiz García.
                </p>
                <p>
                  La navegación por LA WEB atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">3. Uso del sitio web</h2>
                <p>
                  El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen a través de LA WEB y a no emplearlos para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Difundir contenidos delictivos, violentos, pornográficos, racistas, xenófobos, ofensivos, de apología del terrorismo o que atenten contra los derechos humanos.</li>
                  <li>Provocar daños en los sistemas físicos y lógicos del sitio web, de sus proveedores o de terceras personas.</li>
                  <li>Introducir o difundir virus informáticos o cualquier otro sistema que pueda causar daños.</li>
                  <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">4. Propiedad intelectual e industrial</h2>
                <p>
                  Todos los contenidos del sitio web, como textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Marta Muñiz García, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.
                </p>
                <p>
                  Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Marta Muñiz García.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">5. Exclusión de garantías y responsabilidad</h2>
                <p>
                  Marta Muñiz García no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">6. Enlaces</h2>
                <p>
                  En el caso de que en LA WEB se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, Marta Muñiz García no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">7. Modificaciones</h2>
                <p>
                  Marta Muñiz García se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">8. Legislación aplicable y jurisdicción</h2>
                <p>
                  La relación entre el usuario y el prestador se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y Tribunales de Santander.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-sage-200">
              <Link
                href="/"
                className="inline-flex items-center text-sage-700 hover:text-sage-900 font-medium"
              >
                ← Volver al inicio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
