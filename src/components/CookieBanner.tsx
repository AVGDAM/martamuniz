'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCookie, FaTimes } from 'react-icons/fa';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Verificar si el usuario ya aceptó las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    console.log('Cookies accepted:', cookiesAccepted); // Debug
    
    if (!cookiesAccepted) {
      // Mostrar el banner después de 1 segundo
      const timer = setTimeout(() => {
        console.log('Mostrando banner'); // Debug
        setShowBanner(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  const acceptAllCookies = () => {
    localStorage.setItem('cookiesAccepted', 'all');
    localStorage.setItem('analyticsAccepted', 'true');
    setShowBanner(false);
    // Aquí puedes inicializar Google Analytics u otros servicios
    console.log('Todas las cookies aceptadas');
  };

  const acceptNecessaryCookies = () => {
    localStorage.setItem('cookiesAccepted', 'necessary');
    localStorage.setItem('analyticsAccepted', 'false');
    setShowBanner(false);
    console.log('Solo cookies necesarias aceptadas');
  };

  const savePreferences = (analytics: boolean) => {
    localStorage.setItem('cookiesAccepted', analytics ? 'all' : 'necessary');
    localStorage.setItem('analyticsAccepted', analytics.toString());
    setShowBanner(false);
    setShowSettings(false);
    console.log('Preferencias guardadas:', { analytics });
  };

  if (!mounted || !showBanner) return null;

  return (
    <>
      {/* Overlay */}
      {showSettings && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9998] backdrop-blur-sm"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
        <div className="bg-white border-t-2 border-sage-200 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {!showSettings ? (
              // Banner Principal
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="bg-sage-100 p-3 rounded-full flex-shrink-0">
                    <FaCookie className="text-sage-700 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-sage-900 mb-2">
                      🍪 Este sitio utiliza cookies
                    </h3>
                    <p className="text-sm text-sage-600 leading-relaxed">
                      Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. 
                      Al hacer clic en &quot;Aceptar todas&quot;, aceptas el uso de todas las cookies.{' '}
                      <Link 
                        href="/politica-cookies" 
                        className="text-sage-700 hover:text-sage-900 underline font-medium"
                      >
                        Más información
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-3 text-sm font-semibold text-sage-700 border-2 border-sage-300 rounded-full hover:bg-sage-50 transition-all whitespace-nowrap"
                  >
                    Configurar
                  </button>
                  <button
                    onClick={acceptNecessaryCookies}
                    className="px-6 py-3 text-sm font-semibold text-sage-700 border-2 border-sage-700 rounded-full hover:bg-sage-50 transition-all whitespace-nowrap"
                  >
                    Solo necesarias
                  </button>
                  <button
                    onClick={acceptAllCookies}
                    className="px-6 py-3 text-sm font-semibold text-white bg-sage-700 rounded-full hover:bg-sage-600 transition-all shadow-lg whitespace-nowrap"
                  >
                    Aceptar todas
                  </button>
                </div>
              </div>
            ) : (
              // Panel de Configuración
              <div className="relative">
                <button
                  onClick={() => setShowSettings(false)}
                  className="absolute top-0 right-0 text-sage-500 hover:text-sage-700 transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>

                <h3 className="font-serif text-xl text-sage-900 mb-4">
                  Configuración de Cookies
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Cookies Necesarias */}
                  <div className="bg-sage-50 rounded-xl p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sage-900 mb-1">
                          Cookies Necesarias
                        </h4>
                        <p className="text-sm text-sage-600">
                          Estas cookies son esenciales para el funcionamiento del sitio web y no pueden ser desactivadas.
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="bg-sage-300 rounded-full px-3 py-1 text-xs font-semibold text-sage-900">
                          Siempre activas
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cookies de Análisis */}
                  <CookieToggle
                    title="Cookies de Análisis"
                    description="Nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando información de forma anónima."
                    id="analytics"
                    defaultChecked={true}
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const analyticsCheckbox = document.getElementById('analytics') as HTMLInputElement;
                      savePreferences(analyticsCheckbox?.checked || false);
                    }}
                    className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-sage-700 rounded-full hover:bg-sage-600 transition-all"
                  >
                    Guardar preferencias
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-6 py-3 text-sm font-semibold text-sage-700 border-2 border-sage-300 rounded-full hover:bg-sage-50 transition-all"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Componente auxiliar para toggle de cookies
function CookieToggle({ 
  title, 
  description, 
  id, 
  defaultChecked = false 
}: { 
  title: string; 
  description: string; 
  id: string; 
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="bg-sage-50 rounded-xl p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-sage-900 mb-1">{title}</h4>
          <p className="text-sm text-sage-600">{description}</p>
        </div>
        <div className="ml-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id={id}
              className="sr-only peer"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <div className="w-11 h-6 bg-sage-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sage-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sage-700"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
