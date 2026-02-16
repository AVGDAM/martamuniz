# Instrucciones para crear iconos PWA

## Opción 1: Online (Más rápido - 2 minutos)
1. Ir a: https://realfavicongenerator.net/
2. Subir el archivo `public/favicon.svg`
3. Descargar el pack completo
4. Copiar los PNG a `/public/`:
   - icon-192.png
   - icon-512.png
   - apple-touch-icon.png

## Opción 2: Con ImageMagick (5 minutos)
```bash
# Instalar ImageMagick (si no lo tienes)
brew install imagemagick

# Convertir SVG a PNG
cd public
magick favicon.svg -resize 192x192 icon-192.png
magick favicon.svg -resize 512x512 icon-512.png
magick favicon.svg -resize 180x180 apple-touch-icon.png
```

## Opción 3: Con Inkscape (si prefieres GUI)
1. Abrir `favicon.svg` en Inkscape
2. File → Export PNG Image
3. Exportar en 192x192, 512x512, 180x180

## Verificar
Una vez creados, actualizar en `manifest.json` las rutas de los iconos.

## Notas
- **192x192**: Android home screen
- **512x512**: Android splash screen
- **180x180**: iOS home screen (apple-touch-icon)
- Formato: PNG con fondo transparente o sólido (#7A9B76)
