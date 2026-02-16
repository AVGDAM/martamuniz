'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre mí', href: '/sobre-mi' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
];

const terapias = [
  { name: 'Terapia Individual', href: '/terapia-individual' },
  { name: 'Terapia de Pareja', href: '/terapia-pareja' },
  { name: 'Terapia Online', href: '/terapia-online' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="flex items-center gap-2">
              <div className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl">M</span>
              </div>
              <span className="font-serif text-xl text-sage-900">Marta Muñiz</span>
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-sage-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menú principal</span>
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" aria-hidden="true" />
            ) : (
              <FaBars className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navigation.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-sage-900 hover:text-sage-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Dropdown Terapias */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium leading-6 text-sage-900 hover:text-sage-600 transition-colors"
            >
              Terapias
              <FaChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-sage-100 py-2 animate-fade-in">
                {terapias.map((terapia) => (
                  <Link
                    key={terapia.name}
                    href={terapia.href}
                    className="block px-6 py-3 text-sm text-sage-900 hover:bg-sage-50 transition-colors"
                  >
                    {terapia.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {navigation.slice(2).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-sage-900 hover:text-sage-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://wa.me/34680614901"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sage-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sage-600 transition-all hover:scale-105"
          >
            Reservar cita
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden animate-slide-down">
          <div className="fixed inset-0 z-50 bg-white">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-serif text-xl">M</span>
                    </div>
                    <span className="font-serif text-xl text-sage-900">Marta Muñiz</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-sage-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Cerrar menú</span>
                  <FaTimes className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.slice(0, 2).map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-sage-900 hover:bg-sage-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    {/* Mobile Dropdown Terapias */}
                    <div>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-sage-900 hover:bg-sage-50"
                      >
                        Terapias
                        <FaChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileDropdownOpen && (
                        <div className="ml-6 mt-2 space-y-2">
                          {terapias.map((terapia) => (
                            <Link
                              key={terapia.name}
                              href={terapia.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDropdownOpen(false);
                              }}
                              className="block rounded-lg px-3 py-2 text-sm text-sage-700 hover:bg-sage-50"
                            >
                              {terapia.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {navigation.slice(2).map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-sage-900 hover:bg-sage-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="https://wa.me/34680614901"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-full bg-sage-700 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sage-600"
                    >
                      Reservar cita
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
