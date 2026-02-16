# Marta Muñiz - Psicóloga Website

Web profesional para psicóloga construida con Next.js 16, TypeScript y Tailwind CSS.

## 🚀 Características

- **Next.js 16** con App Router
- **TypeScript** para type-safety
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones suaves y modernas
- **Mobile-First** diseño responsive
- **SEO Optimizado** con metadata completa
- **Animaciones modernas** y transiciones fluidas
- **Botón de WhatsApp** flotante para contacto rápido

## 📁 Estructura del Proyecto

```
martamuñizapp/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal con SEO
│   │   ├── page.tsx        # Página principal
│   │   └── globals.css     # Estilos globales
│   └── components/
│       ├── Header.tsx      # Navegación principal
│       ├── Hero.tsx        # Sección hero
│       ├── Specialties.tsx # Especialidades
│       ├── Services.tsx    # Servicios
│       ├── Pricing.tsx     # Precios y bonos
│       ├── Testimonials.tsx # Testimonios
│       ├── Contact.tsx     # Contacto
│       ├── Blog.tsx        # Blog
│       ├── Footer.tsx      # Footer
│       └── WhatsAppButton.tsx # Botón de WhatsApp
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Diseño

- **Colores personalizados**: Paleta sage, cream y tonos profesionales
- **Tipografía**: Playfair Display (serif) e Inter (sans-serif)
- **Animaciones**: Fade-in, slide-up, scale-in con Framer Motion
- **Responsive**: Optimizado para móvil, tablet y desktop

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📝 Personalización

### Cambiar información de contacto

Edita los siguientes archivos:
- `src/components/Contact.tsx` - Email y teléfono
- `src/components/WhatsAppButton.tsx` - Número de WhatsApp
- `src/components/Footer.tsx` - Información del footer

### Modificar colores

Edita `tailwind.config.ts` para personalizar la paleta de colores.

### SEO

El SEO está configurado en `src/app/layout.tsx`. Actualiza los metadatos según necesites.

## 🌐 Despliegue

Esta aplicación está lista para desplegarse en:
- Vercel (recomendado para Next.js)
- Netlify
- AWS Amplify
- Cualquier plataforma que soporte Node.js

## 📄 Licencia

Copyright © 2026 Marta Muñiz - Psicóloga. Todos los derechos reservados.
