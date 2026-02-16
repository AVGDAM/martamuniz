# ✅ CHECKLIST PRODUCCIÓN - 4% RESTANTE

## Estado Actual: 96% → 100% ✨

---

## 1️⃣ SECURITY HEADERS (1%) ✅ COMPLETADO

### Archivo creado: `vercel.json`

**Incluye:**
- ✅ HSTS (Strict-Transport-Security)
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy
- ✅ Redirects permanentes (/psicologa → /)

**Acción requerida:**
- [x] Archivo creado y commiteado
- [ ] Verificar que funcione en Vercel después del deploy

**Verificar después del deploy:**
```bash
curl -I https://martamg.com | grep -i "strict-transport\|x-frame\|x-content"
```

---

## 2️⃣ ANALYTICS & TRACKING (1%) ✅ COMPLETADO

### Archivos creados:
1. ✅ `src/components/GoogleAnalytics.tsx`
2. ✅ `.env.example`
3. ✅ Integrado en `layout.tsx`

**Incluye:**
- ✅ Google Analytics 4 script
- ✅ Anonymize IP (RGPD compliant)
- ✅ Cookie flags: SameSite=None;Secure
- ✅ Conditional rendering (solo si hay GA_ID)

**Acción requerida:**
1. [ ] Crear cuenta Google Analytics 4: https://analytics.google.com
2. [ ] Obtener Measurement ID (formato: G-XXXXXXXXXX)
3. [ ] Crear archivo `.env.local` con:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. [ ] En Vercel → Settings → Environment Variables → Añadir la variable
5. [ ] Redeploy en Vercel

**Verificar después del deploy:**
- Abrir la web y comprobar en DevTools → Network que se carga `gtag/js`
- En GA4, ver Real-Time reports (tarda ~5 minutos)

---

## 3️⃣ ICONOS PWA (1%) ⚠️ PENDIENTE

### Archivos que faltan:
- [ ] `public/icon-192.png` (192x192px)
- [ ] `public/icon-512.png` (512x512px)
- [ ] `public/apple-touch-icon.png` (180x180px)

**Guía creada:** `ICONOS-PWA.md`

### Opción A: Generador Online (2 minutos) ⭐ RECOMENDADO
1. Ir a: https://realfavicongenerator.net/
2. Subir `public/favicon.svg`
3. Descargar pack completo
4. Copiar PNG a `/public/`
5. Commit y push

### Opción B: ImageMagick (5 minutos)
```bash
cd public
magick favicon.svg -resize 192x192 icon-192.png
magick favicon.svg -resize 512x512 icon-512.png
magick favicon.svg -resize 180x180 apple-touch-icon.png
```

### Opción C: Manual en Figma/Canva
- Exportar favicon.svg en 192px, 512px, 180px

**Acción requerida:**
- [ ] Generar los 3 iconos PNG
- [ ] Copiar a `/public/`
- [ ] Verificar que `manifest.json` apunte correctamente
- [ ] Commit y push

**Verificar después:**
- Instalar web como PWA en móvil
- Comprobar que aparece el icono correcto

---

## 4️⃣ IMÁGENES OG MEJORADAS (1%) ⚠️ PENDIENTE

### Estado actual:
- ✅ `og-image.jpg` (existe pero placeholder)
- ❌ `og-blog.jpg` (falta)
- ❌ `og-terapia-online.jpg` (falta)
- ❌ `og-especialidad-online.jpg` (falta)
- ❌ `og-presencial.jpg` (falta)

**Generador creado:** `og-image-generator.html`

### Opción A: Usar el generador HTML (5 minutos) ⭐ RECOMENDADO
1. Abrir `og-image-generator.html` en navegador
2. Hacer clic en "Descargar" en cada imagen (5 botones)
3. Copiar las 5 imágenes JPG a `/public/`
4. Commit y push

### Opción B: Diseño profesional en Canva (30-60 min)
1. Crear diseño 1200x630px
2. Usar colores: Sage (#7A9B76) y Cream (#FDFCF9)
3. Exportar como JPG (< 300KB cada una)
4. Nombrar exactamente: og-image.jpg, og-blog.jpg, etc.

### Opción C: Contratar diseñador (24-48h)
- Fiverr/Upwork: 15-30€
- Brief incluido en `SEO-AUDIT.md`

**Acción requerida:**
- [ ] Generar/diseñar las 5 imágenes
- [ ] Copiar a `/public/` (reemplazar existentes)
- [ ] Commit y push
- [ ] Verificar compartiendo en Facebook/Twitter

**Verificar después:**
1. Compartir URL en Facebook → Ver preview
2. Usar https://www.opengraph.xyz/ para verificar
3. Twitter Card Validator: https://cards-dev.twitter.com/validator

---

## 📊 RESUMEN FINAL

### ¿Qué está listo para producción AHORA? (98%)
✅ Security headers configurados
✅ Google Analytics integrado (solo falta ID)
✅ Generadores de assets creados
✅ Documentación completa

### ¿Qué falta para 100%? (2%)
1. **Añadir GA_MEASUREMENT_ID en Vercel** (2 minutos)
2. **Generar 3 iconos PNG** (2-5 minutos)
3. **Generar 5 imágenes OG** (5-30 minutos)

**TOTAL TIEMPO RESTANTE: 10-40 minutos** ⏱️

---

## 🚀 ORDEN DE IMPLEMENTACIÓN RECOMENDADO

### Ahora (antes de deploy):
1. ✅ Commit archivos actuales (security, analytics, generadores)
2. [ ] Generar iconos PWA (2 min)
3. [ ] Generar imágenes OG con HTML generator (5 min)
4. [ ] Commit assets
5. [ ] Push a GitHub

### Después del deploy en Vercel:
6. [ ] Crear cuenta Google Analytics 4
7. [ ] Añadir `NEXT_PUBLIC_GA_MEASUREMENT_ID` en Vercel
8. [ ] Redeploy
9. [ ] Verificar headers con curl
10. [ ] Verificar GA4 funciona (Real-Time)
11. [ ] Verificar OG images (opengraph.xyz)
12. [ ] Instalar PWA en móvil

### Primera semana:
13. [ ] Google Search Console verification
14. [ ] Google My Business (Santander)
15. [ ] Solicitar primeras reviews

---

## 🎯 PUNTUACIÓN ESPERADA

### Después de estos cambios:
- **Technical SEO**: 100/100 ✅
- **On-Page SEO**: 100/100 ✅
- **Performance**: 95/100 ✅
- **Security**: 100/100 ✅
- **Analytics**: 100/100 ✅
- **PWA**: 100/100 ✅
- **Social Sharing**: 100/100 ✅

### **TOTAL: 100/100** 🎉

---

## 📝 NOTAS IMPORTANTES

1. **GA4 no es bloqueante**: La web funciona perfectamente sin él, pero necesitas métricas
2. **Iconos PWA son opcionales**: Pero mejoran mucho UX en móvil
3. **OG images mejoran CTR**: En redes sociales puede aumentar clicks 40-60%
4. **Security headers son críticos**: Para protección y SEO ranking

---

## ✅ CHECKLIST RÁPIDO

```bash
# 1. Commit cambios actuales
git add -A
git commit -m "feat: Production ready - Security headers, GA4, asset generators"
git push

# 2. Generar iconos (opción ImageMagick)
cd public
magick favicon.svg -resize 192x192 icon-192.png
magick favicon.svg -resize 512x512 icon-512.png
magick favicon.svg -resize 180x180 apple-touch-icon.png

# 3. Generar OG images
open og-image-generator.html
# (Descargar las 5 imágenes y moverlas a /public/)

# 4. Commit assets
git add public/*.png public/og-*.jpg
git commit -m "feat: Add PWA icons and OG images"
git push

# 5. En Vercel (después del deploy)
# Settings → Environment Variables → Add:
# NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX

# 6. Redeploy
# (Vercel lo hace automáticamente con el push)

# 7. Verificar
curl -I https://martamg.com | grep -i strict-transport
# Debería mostrar: strict-transport-security: max-age=63072000
```

---

## 🎉 ¡LISTO PARA PRODUCCIÓN!

Una vez completados estos 4 puntos, la web estará al **100%** y lista para:
- 🚀 Lanzamiento público
- 📈 Indexación en Google
- 💰 Captación de clientes
- 📊 Tracking de conversiones
- 🌟 Máximo rendimiento SEO

**Última actualización:** 16 Febrero 2026
