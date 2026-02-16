'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PoliticaPrivacidad() {
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
              Política de Privacidad
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
                <h2 className="font-serif text-2xl text-sage-900 mb-4">1. Responsable del tratamiento</h2>
                <p>
                  El responsable del tratamiento de los datos personales recogidos en martamg.com es:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identidad:</strong> Marta Muñiz García</li>
                  <li><strong>NIF:</strong> [Número de identificación]</li>
                  <li><strong>Dirección:</strong> Santander, Cantabria, España</li>
                  <li><strong>Email:</strong> hola@martamg.com</li>
                  <li><strong>Teléfono:</strong> +34 680 614 901</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">2. Finalidad del tratamiento</h2>
                <p>
                  Los datos personales proporcionados a través del sitio web serán tratados con las siguientes finalidades:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gestionar las consultas y solicitudes de información realizadas a través de los formularios de contacto.</li>
                  <li>Gestionar la solicitud de citas y el servicio de atención psicológica.</li>
                  <li>Mantener la relación terapéutica y el seguimiento del tratamiento psicológico.</li>
                  <li>Cumplir con las obligaciones legales aplicables a la actividad profesional.</li>
                  <li>Enviar comunicaciones sobre los servicios ofrecidos, previa solicitud o consentimiento expreso.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">3. Legitimación</h2>
                <p>
                  La base legal para el tratamiento de los datos personales es:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consentimiento del interesado:</strong> Al ponerse en contacto o solicitar los servicios.</li>
                  <li><strong>Ejecución de un contrato:</strong> Para la prestación de servicios de atención psicológica.</li>
                  <li><strong>Obligación legal:</strong> Cumplimiento de obligaciones establecidas en la normativa aplicable al ejercicio de la profesión de psicología.</li>
                  <li><strong>Interés legítimo:</strong> Responder a consultas y gestionar la relación profesional.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">4. Conservación de los datos</h2>
                <p>
                  Los datos personales serán conservados durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos, respetando en todo caso los plazos de conservación establecidos en la legislación aplicable y en particular en la normativa sobre historia clínica.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">5. Destinatarios de los datos</h2>
                <p>
                  Los datos personales no serán comunicados a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio solicitado.
                </p>
                <p>
                  En particular, los datos podrán ser comunicados a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Administraciones públicas competentes cuando exista obligación legal.</li>
                  <li>Profesionales del ámbito sanitario cuando sea necesario para la coordinación asistencial.</li>
                  <li>Compañías aseguradoras en caso de que el servicio se preste mediante seguro médico.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">6. Derechos de los interesados</h2>
                <p>
                  Los interesados tienen derecho a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Acceso:</strong> Obtener confirmación sobre si se están tratando datos personales y, en su caso, acceder a los mismos.</li>
                  <li><strong>Rectificación:</strong> Solicitar la rectificación de los datos inexactos o incompletos.</li>
                  <li><strong>Supresión:</strong> Solicitar la supresión de los datos cuando ya no sean necesarios o el tratamiento sea ilícito.</li>
                  <li><strong>Oposición:</strong> Oponerse al tratamiento de los datos en determinadas circunstancias.</li>
                  <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento en determinadas situaciones.</li>
                  <li><strong>Portabilidad:</strong> Recibir los datos en un formato estructurado y transmitirlos a otro responsable.</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, puede dirigirse a <strong>hola@martamg.com</strong> adjuntando copia de su DNI o documento identificativo equivalente.
                </p>
                <p>
                  Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que el tratamiento no se ajusta a la normativa vigente.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">7. Seguridad de los datos</h2>
                <p>
                  Marta Muñiz García se compromete a adoptar las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">8. Datos de salud</h2>
                <p>
                  Los datos de salud son especialmente protegidos por la normativa de protección de datos. El tratamiento de estos datos se realiza bajo el amparo del secreto profesional del psicólogo y las garantías establecidas en la Ley de Autonomía del Paciente y la normativa sobre historia clínica.
                </p>
                <p>
                  El acceso a los datos de salud está restringido exclusivamente a la profesional responsable del tratamiento y, cuando sea estrictamente necesario, a otros profesionales sanitarios implicados en la atención del paciente.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">9. Modificaciones</h2>
                <p>
                  Marta Muñiz García se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. En dichos supuestos, anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica.
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
