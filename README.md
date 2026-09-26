# Registro Gimnasio PWA

Archivos preparados para publicar directamente con GitHub Pages.

## Publicación
1. Crea un repositorio nuevo en GitHub.
2. Sube todos los archivos de esta carpeta a la raíz del repositorio.
3. En **Settings > Pages**, selecciona **Deploy from a branch**.
4. Selecciona la rama **main** y la carpeta **/(root)**, después pulsa **Save**.
5. Abre la dirección publicada por GitHub Pages desde Edge o Chrome.
6. Usa la opción **Instalar aplicación** del navegador.

## Archivos
- `index.html`: aplicación principal.
- `manifest.json`: configuración instalable de la PWA.
- `sw.js`: funcionamiento sin conexión y caché.
- `icon-192.png` y `icon-512.png`: iconos locales.

## Nota
La biblioteca XLSX se descarga desde un CDN. Tras abrir la aplicación con conexión al menos una vez, el Service Worker intentará conservarla en caché para usos posteriores.
