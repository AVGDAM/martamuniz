'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PoliticaCookies() {
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
              Política de Cookies
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
                <h2 className="font-serif text-2xl text-sage-900 mb-4">1. ¿Qué son las cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita un sitio web. Las cookies permiten, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">2. Tipos de cookies utilizadas</h2>
                <p>
                  Este sitio web utiliza los siguientes tipos de cookies:
                </p>

                <div className="mt-6 space-y-6">
                  <div className="bg-sage-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-sage-900 mb-2">Cookies técnicas</h3>
                    <p className="text-sm">
                      Son aquellas que permiten al usuario la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en ella existen. Por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión o acceder a partes de acceso restringido.
                    </p>
                    <p className="text-sm mt-2"><strong>Duración:</strong> Sesión / Persistente</p>
                  </div>

                  <div className="bg-sage-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-sage-900 mb-2">Cookies de personalización</h3>
                    <p className="text-sm">
                      Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario, como por ejemplo el idioma o el tipo de navegador.
                    </p>
                    <p className="text-sm mt-2"><strong>Duración:</strong> Persistente</p>
                  </div>

                  <div className="bg-sage-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-sage-900 mb-2">Cookies de análisis</h3>
                    <p className="text-sm">
                      Son aquellas que, tratadas por nosotros o por terceros, permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.
                    </p>
                    <p className="text-sm mt-2"><strong>Proveedor:</strong> Google Analytics (si aplica)</p>
                    <p className="text-sm"><strong>Duración:</strong> 2 años</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">3. Cookies de terceros</h2>
                <p>
                  Este sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos, de uso del sitio por parte del usuario y para la prestación de otros servicios relacionados con la actividad del sitio web.
                </p>
                <p>
                  En particular, este sitio web puede utilizar:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> Para análisis estadístico de las visitas al sitio web.</li>
                  <li><strong>Google Maps:</strong> Para mostrar mapas interactivos con la ubicación de la consulta.</li>
                  <li><strong>Redes sociales:</strong> Botones de compartir en redes sociales que pueden instalar cookies propias.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">4. Cómo gestionar las cookies</h2>
                <p>
                  El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador, tableta o teléfono móvil.
                </p>
                <p className="mt-4">
                  A continuación, se facilitan los enlaces para gestionar las cookies en los principales navegadores:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Google Chrome:</strong>{' '}
                    <a 
                      href="https://support.google.com/chrome/answer/95647?hl=es" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sage-700 hover:text-sage-900 underline"
                    >
                      Configuración de cookies en Chrome
                    </a>
                  </li>
                  <li>
                    <strong>Mozilla Firefox:</strong>{' '}
                    <a 
                      href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sage-700 hover:text-sage-900 underline"
                    >
                      Configuración de cookies en Firefox
                    </a>
                  </li>
                  <li>
                    <strong>Safari:</strong>{' '}
                    <a 
                      href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sage-700 hover:text-sage-900 underline"
                    >
                      Configuración de cookies en Safari
                    </a>
                  </li>
                  <li>
                    <strong>Microsoft Edge:</strong>{' '}
                    <a 
                      href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sage-700 hover:text-sage-900 underline"
                    >
                      Configuración de cookies en Edge
                    </a>
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Importante:</strong> Si bloquea o elimina las cookies, es posible que algunas características del sitio web no funcionen correctamente.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">5. Aceptación de las cookies</h2>
                <p>
                  Al acceder a este sitio web y continuar navegando, usted acepta el uso de cookies en los términos contenidos en esta Política de Cookies. Si no acepta el uso de cookies, puede configurar su navegador para bloquearlas o abandonar el sitio web.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">6. Actualizaciones de la política</h2>
                <p>
                  Marta Muñiz García puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
                </p>
                <p>
                  Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicarán a los usuarios mediante un aviso informativo en el sitio web.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-sage-900 mb-4">7. Contacto</h2>
                <p>
                  Para cualquier duda o consulta sobre esta Política de Cookies, puede ponerse en contacto a través de:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Email:</strong> hola@martamg.com</li>
                  <li><strong>Teléfono:</strong> +34 680 614 901</li>
                </ul>
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
