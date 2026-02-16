import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl">M</span>
              </div>
              <span className="font-serif text-xl text-white">Marta Muñiz</span>
            </div>
            <p className="text-sage-300 text-sm leading-relaxed">
              Psicóloga especializada en procesos de duelo, terapia de pareja y adicciones en Santander. Ofrezco apoyo profesional y personalizado para ayudarte a superar momentos difíciles y mejorar tu bienestar emocional. Sesiones presenciales y online disponibles.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-serif text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sage-300 text-sm">
              <li>📧 hola@martamg.com</li>
              <li>📞 +34 680 614 901</li>
              <li>
                <a 
                  href="https://wa.me/34680614901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>📍 Santander</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sage-300 text-sm">
              <li>
                <Link href="/aviso-legal" className="hover:text-white transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-sage-700 mt-12 pt-8">
          {/* SEO Links - Terapia Online por Ciudades (50) */}
          <div className="mb-8">
            <h4 className="font-serif text-sm text-sage-400 mb-4 text-center">Terapia Online por Ciudades</h4>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-sage-400">
              <Link href="/terapia-online/madrid" className="hover:text-white transition-colors">Madrid</Link>
              <Link href="/terapia-online/barcelona" className="hover:text-white transition-colors">Barcelona</Link>
              <Link href="/terapia-online/valencia" className="hover:text-white transition-colors">Valencia</Link>
              <Link href="/terapia-online/sevilla" className="hover:text-white transition-colors">Sevilla</Link>
              <Link href="/terapia-online/zaragoza" className="hover:text-white transition-colors">Zaragoza</Link>
              <Link href="/terapia-online/malaga" className="hover:text-white transition-colors">Málaga</Link>
              <Link href="/terapia-online/murcia" className="hover:text-white transition-colors">Murcia</Link>
              <Link href="/terapia-online/palma-de-mallorca" className="hover:text-white transition-colors">Palma</Link>
              <Link href="/terapia-online/las-palmas-de-gran-canaria" className="hover:text-white transition-colors">Las Palmas</Link>
              <Link href="/terapia-online/bilbao" className="hover:text-white transition-colors">Bilbao</Link>
              <Link href="/terapia-online/alicante" className="hover:text-white transition-colors">Alicante</Link>
              <Link href="/terapia-online/cordoba" className="hover:text-white transition-colors">Córdoba</Link>
              <Link href="/terapia-online/valladolid" className="hover:text-white transition-colors">Valladolid</Link>
              <Link href="/terapia-online/vigo" className="hover:text-white transition-colors">Vigo</Link>
              <Link href="/terapia-online/gijon" className="hover:text-white transition-colors">Gijón</Link>
              <Link href="/terapia-online/hospitalet-de-llobregat" className="hover:text-white transition-colors">L&apos;Hospitalet</Link>
              <Link href="/terapia-online/la-coruna" className="hover:text-white transition-colors">A Coruña</Link>
              <Link href="/terapia-online/vitoria-gasteiz" className="hover:text-white transition-colors">Vitoria</Link>
              <Link href="/terapia-online/granada" className="hover:text-white transition-colors">Granada</Link>
              <Link href="/terapia-online/elche" className="hover:text-white transition-colors">Elche</Link>
              <Link href="/terapia-online/oviedo" className="hover:text-white transition-colors">Oviedo</Link>
              <Link href="/terapia-online/santa-cruz-de-tenerife" className="hover:text-white transition-colors">Tenerife</Link>
              <Link href="/terapia-online/badalona" className="hover:text-white transition-colors">Badalona</Link>
              <Link href="/terapia-online/cartagena" className="hover:text-white transition-colors">Cartagena</Link>
              <Link href="/terapia-online/terrassa" className="hover:text-white transition-colors">Terrassa</Link>
              <Link href="/terapia-online/jerez-de-la-frontera" className="hover:text-white transition-colors">Jerez</Link>
              <Link href="/terapia-online/sabadell" className="hover:text-white transition-colors">Sabadell</Link>
              <Link href="/terapia-online/mostoles" className="hover:text-white transition-colors">Móstoles</Link>
              <Link href="/terapia-online/alcala-de-henares" className="hover:text-white transition-colors">Alcalá</Link>
              <Link href="/terapia-online/pamplona" className="hover:text-white transition-colors">Pamplona</Link>
              <Link href="/terapia-online/fuenlabrada" className="hover:text-white transition-colors">Fuenlabrada</Link>
              <Link href="/terapia-online/almeria" className="hover:text-white transition-colors">Almería</Link>
              <Link href="/terapia-online/leganes" className="hover:text-white transition-colors">Leganés</Link>
              <Link href="/terapia-online/donostia-san-sebastian" className="hover:text-white transition-colors">San Sebastián</Link>
              <Link href="/terapia-online/burgos" className="hover:text-white transition-colors">Burgos</Link>
              <Link href="/terapia-online/santander" className="hover:text-white transition-colors">Santander</Link>
              <Link href="/terapia-online/castellon-de-la-plana" className="hover:text-white transition-colors">Castellón</Link>
              <Link href="/terapia-online/getafe" className="hover:text-white transition-colors">Getafe</Link>
              <Link href="/terapia-online/albacete" className="hover:text-white transition-colors">Albacete</Link>
              <Link href="/terapia-online/alcorcon" className="hover:text-white transition-colors">Alcorcón</Link>
              <Link href="/terapia-online/san-cristobal-de-la-laguna" className="hover:text-white transition-colors">La Laguna</Link>
              <Link href="/terapia-online/logrono" className="hover:text-white transition-colors">Logroño</Link>
              <Link href="/terapia-online/badajoz" className="hover:text-white transition-colors">Badajoz</Link>
              <Link href="/terapia-online/huelva" className="hover:text-white transition-colors">Huelva</Link>
              <Link href="/terapia-online/salamanca" className="hover:text-white transition-colors">Salamanca</Link>
              <Link href="/terapia-online/tarragona" className="hover:text-white transition-colors">Tarragona</Link>
              <Link href="/terapia-online/leon" className="hover:text-white transition-colors">León</Link>
              <Link href="/terapia-online/cadiz" className="hover:text-white transition-colors">Cádiz</Link>
              <Link href="/terapia-online/lleida" className="hover:text-white transition-colors">Lleida</Link>
              <Link href="/terapia-online/marbella" className="hover:text-white transition-colors">Marbella</Link>
            </div>
          </div>

          {/* SEO Links - Especialidades Online (80) */}
          <div className="mb-8">
            <h4 className="font-serif text-sm text-sage-400 mb-4 text-center">Terapia Especializada Online</h4>
            
            {/* Duelo (20) */}
            <div className="mb-4">
              <p className="text-xs text-sage-500 mb-2 text-center">Psicóloga Duelo Online</p>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-sage-400">
                <Link href="/duelo/online/madrid" className="hover:text-white transition-colors">Madrid</Link>
                <Link href="/duelo/online/barcelona" className="hover:text-white transition-colors">Barcelona</Link>
                <Link href="/duelo/online/valencia" className="hover:text-white transition-colors">Valencia</Link>
                <Link href="/duelo/online/sevilla" className="hover:text-white transition-colors">Sevilla</Link>
                <Link href="/duelo/online/zaragoza" className="hover:text-white transition-colors">Zaragoza</Link>
                <Link href="/duelo/online/malaga" className="hover:text-white transition-colors">Málaga</Link>
                <Link href="/duelo/online/murcia" className="hover:text-white transition-colors">Murcia</Link>
                <Link href="/duelo/online/palma-de-mallorca" className="hover:text-white transition-colors">Palma</Link>
                <Link href="/duelo/online/las-palmas-de-gran-canaria" className="hover:text-white transition-colors">Las Palmas</Link>
                <Link href="/duelo/online/bilbao" className="hover:text-white transition-colors">Bilbao</Link>
                <Link href="/duelo/online/alicante" className="hover:text-white transition-colors">Alicante</Link>
                <Link href="/duelo/online/cordoba" className="hover:text-white transition-colors">Córdoba</Link>
                <Link href="/duelo/online/valladolid" className="hover:text-white transition-colors">Valladolid</Link>
                <Link href="/duelo/online/vigo" className="hover:text-white transition-colors">Vigo</Link>
                <Link href="/duelo/online/gijon" className="hover:text-white transition-colors">Gijón</Link>
                <Link href="/duelo/online/hospitalet-de-llobregat" className="hover:text-white transition-colors">L&apos;Hospitalet</Link>
                <Link href="/duelo/online/la-coruna" className="hover:text-white transition-colors">A Coruña</Link>
                <Link href="/duelo/online/vitoria-gasteiz" className="hover:text-white transition-colors">Vitoria</Link>
                <Link href="/duelo/online/granada" className="hover:text-white transition-colors">Granada</Link>
                <Link href="/duelo/online/elche" className="hover:text-white transition-colors">Elche</Link>
              </div>
            </div>

            {/* Pareja (20) */}
            <div className="mb-4">
              <p className="text-xs text-sage-500 mb-2 text-center">Terapia de Pareja Online</p>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-sage-400">
                <Link href="/pareja/online/madrid" className="hover:text-white transition-colors">Madrid</Link>
                <Link href="/pareja/online/barcelona" className="hover:text-white transition-colors">Barcelona</Link>
                <Link href="/pareja/online/valencia" className="hover:text-white transition-colors">Valencia</Link>
                <Link href="/pareja/online/sevilla" className="hover:text-white transition-colors">Sevilla</Link>
                <Link href="/pareja/online/zaragoza" className="hover:text-white transition-colors">Zaragoza</Link>
                <Link href="/pareja/online/malaga" className="hover:text-white transition-colors">Málaga</Link>
                <Link href="/pareja/online/murcia" className="hover:text-white transition-colors">Murcia</Link>
                <Link href="/pareja/online/palma-de-mallorca" className="hover:text-white transition-colors">Palma</Link>
                <Link href="/pareja/online/las-palmas-de-gran-canaria" className="hover:text-white transition-colors">Las Palmas</Link>
                <Link href="/pareja/online/bilbao" className="hover:text-white transition-colors">Bilbao</Link>
                <Link href="/pareja/online/alicante" className="hover:text-white transition-colors">Alicante</Link>
                <Link href="/pareja/online/cordoba" className="hover:text-white transition-colors">Córdoba</Link>
                <Link href="/pareja/online/valladolid" className="hover:text-white transition-colors">Valladolid</Link>
                <Link href="/pareja/online/vigo" className="hover:text-white transition-colors">Vigo</Link>
                <Link href="/pareja/online/gijon" className="hover:text-white transition-colors">Gijón</Link>
                <Link href="/pareja/online/hospitalet-de-llobregat" className="hover:text-white transition-colors">L&apos;Hospitalet</Link>
                <Link href="/pareja/online/la-coruna" className="hover:text-white transition-colors">A Coruña</Link>
                <Link href="/pareja/online/vitoria-gasteiz" className="hover:text-white transition-colors">Vitoria</Link>
                <Link href="/pareja/online/granada" className="hover:text-white transition-colors">Granada</Link>
                <Link href="/pareja/online/elche" className="hover:text-white transition-colors">Elche</Link>
              </div>
            </div>

            {/* Ansiedad (20) */}
            <div className="mb-4">
              <p className="text-xs text-sage-500 mb-2 text-center">Psicóloga Ansiedad Online</p>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-sage-400">
                <Link href="/ansiedad/online/madrid" className="hover:text-white transition-colors">Madrid</Link>
                <Link href="/ansiedad/online/barcelona" className="hover:text-white transition-colors">Barcelona</Link>
                <Link href="/ansiedad/online/valencia" className="hover:text-white transition-colors">Valencia</Link>
                <Link href="/ansiedad/online/sevilla" className="hover:text-white transition-colors">Sevilla</Link>
                <Link href="/ansiedad/online/zaragoza" className="hover:text-white transition-colors">Zaragoza</Link>
                <Link href="/ansiedad/online/malaga" className="hover:text-white transition-colors">Málaga</Link>
                <Link href="/ansiedad/online/murcia" className="hover:text-white transition-colors">Murcia</Link>
                <Link href="/ansiedad/online/palma-de-mallorca" className="hover:text-white transition-colors">Palma</Link>
                <Link href="/ansiedad/online/las-palmas-de-gran-canaria" className="hover:text-white transition-colors">Las Palmas</Link>
                <Link href="/ansiedad/online/bilbao" className="hover:text-white transition-colors">Bilbao</Link>
                <Link href="/ansiedad/online/alicante" className="hover:text-white transition-colors">Alicante</Link>
                <Link href="/ansiedad/online/cordoba" className="hover:text-white transition-colors">Córdoba</Link>
                <Link href="/ansiedad/online/valladolid" className="hover:text-white transition-colors">Valladolid</Link>
                <Link href="/ansiedad/online/vigo" className="hover:text-white transition-colors">Vigo</Link>
                <Link href="/ansiedad/online/gijon" className="hover:text-white transition-colors">Gijón</Link>
                <Link href="/ansiedad/online/hospitalet-de-llobregat" className="hover:text-white transition-colors">L&apos;Hospitalet</Link>
                <Link href="/ansiedad/online/la-coruna" className="hover:text-white transition-colors">A Coruña</Link>
                <Link href="/ansiedad/online/vitoria-gasteiz" className="hover:text-white transition-colors">Vitoria</Link>
                <Link href="/ansiedad/online/granada" className="hover:text-white transition-colors">Granada</Link>
                <Link href="/ansiedad/online/elche" className="hover:text-white transition-colors">Elche</Link>
              </div>
            </div>

            {/* Depresión (20) */}
            <div className="mb-4">
              <p className="text-xs text-sage-500 mb-2 text-center">Psicóloga Depresión Online</p>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-sage-400">
                <Link href="/depresion/online/madrid" className="hover:text-white transition-colors">Madrid</Link>
                <Link href="/depresion/online/barcelona" className="hover:text-white transition-colors">Barcelona</Link>
                <Link href="/depresion/online/valencia" className="hover:text-white transition-colors">Valencia</Link>
                <Link href="/depresion/online/sevilla" className="hover:text-white transition-colors">Sevilla</Link>
                <Link href="/depresion/online/zaragoza" className="hover:text-white transition-colors">Zaragoza</Link>
                <Link href="/depresion/online/malaga" className="hover:text-white transition-colors">Málaga</Link>
                <Link href="/depresion/online/murcia" className="hover:text-white transition-colors">Murcia</Link>
                <Link href="/depresion/online/palma-de-mallorca" className="hover:text-white transition-colors">Palma</Link>
                <Link href="/depresion/online/las-palmas-de-gran-canaria" className="hover:text-white transition-colors">Las Palmas</Link>
                <Link href="/depresion/online/bilbao" className="hover:text-white transition-colors">Bilbao</Link>
                <Link href="/depresion/online/alicante" className="hover:text-white transition-colors">Alicante</Link>
                <Link href="/depresion/online/cordoba" className="hover:text-white transition-colors">Córdoba</Link>
                <Link href="/depresion/online/valladolid" className="hover:text-white transition-colors">Valladolid</Link>
                <Link href="/depresion/online/vigo" className="hover:text-white transition-colors">Vigo</Link>
                <Link href="/depresion/online/gijon" className="hover:text-white transition-colors">Gijón</Link>
                <Link href="/depresion/online/hospitalet-de-llobregat" className="hover:text-white transition-colors">L&apos;Hospitalet</Link>
                <Link href="/depresion/online/la-coruna" className="hover:text-white transition-colors">A Coruña</Link>
                <Link href="/depresion/online/vitoria-gasteiz" className="hover:text-white transition-colors">Vitoria</Link>
                <Link href="/depresion/online/granada" className="hover:text-white transition-colors">Granada</Link>
                <Link href="/depresion/online/elche" className="hover:text-white transition-colors">Elche</Link>
              </div>
            </div>
          </div>

          {/* SEO Links - Presencial Cantabria (10) */}
          <div>
            <h4 className="font-serif text-sm text-sage-400 mb-4 text-center">Terapia Presencial en Cantabria</h4>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-sage-400">
              <Link href="/presencial/santander" className="hover:text-white transition-colors">Santander</Link>
              <Link href="/presencial/torrelavega" className="hover:text-white transition-colors">Torrelavega</Link>
              <Link href="/presencial/castro-urdiales" className="hover:text-white transition-colors">Castro Urdiales</Link>
              <Link href="/presencial/camargo" className="hover:text-white transition-colors">Camargo</Link>
              <Link href="/presencial/el-astillero" className="hover:text-white transition-colors">El Astillero</Link>
              <Link href="/presencial/pielagos" className="hover:text-white transition-colors">Piélagos</Link>
              <Link href="/presencial/santa-cruz-de-bezana" className="hover:text-white transition-colors">Santa Cruz de Bezana</Link>
              <Link href="/presencial/santoña" className="hover:text-white transition-colors">Santoña</Link>
              <Link href="/presencial/laredo" className="hover:text-white transition-colors">Laredo</Link>
              <Link href="/presencial/reinosa" className="hover:text-white transition-colors">Reinosa</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-8 pt-8 text-center text-sage-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Marta Muñiz - Psicóloga. Todos los derechos reservados.</p>
          <p className="mt-2">
            Hecho con ❤️ y ☕ por{' '}
            <a 
              href="https://avgg.es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sage-200 transition-colors underline"
            >
              avgg.es
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
