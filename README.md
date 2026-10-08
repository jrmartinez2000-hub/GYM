# Registro de Gimnasio V29+ corregida

## Corrección aplicada
- Eliminado el botón antiguo duplicado «Comenzar ejercicio».
- Se conserva un único botón que abre `abrirReconocimientoHibrido()`.
- Se mantiene el código antiguo interno porque la función «Siguiente ejercicio» todavía lo utiliza.
- Actualizado el nombre de caché del Service Worker para forzar la carga del HTML corregido.

## Instalación en GitHub Pages
1. Sustituye todos los archivos del repositorio por los incluidos en este ZIP.
2. Conserva la carpeta `audio` con su estructura.
3. Espera a que GitHub Pages publique el cambio y recarga la página.
4. Si la aplicación estaba instalada como PWA, ciérrala por completo y vuelve a abrirla.

## Comprobación
En la pantalla principal debe aparecer un solo botón «Comenzar ejercicio» y debe abrir el reconocimiento híbrido OCR + fotografía.
