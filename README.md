REGISTRO GIMNASIO - V28.6
=========================

CONTENIDO
---------
- index.html: archivo principal para publicar/abrir la aplicación.
- Registro_Gimnasio_V28.6.html: copia identificada de la versión.
- manifest.json: configuración PWA.
- sw.js: service worker y caché offline de la V28.6.
- icon-192.png: icono y logotipo de 192 x 192.
- icon-512.png: icono de 512 x 512.

NOVEDADES V28.6
----------------
1. Máquinas recientes en «Comenzar ejercicio».
   - Muestra hasta 6 máquinas usadas recientemente.
   - Permite abrir directamente su registro con un toque.

2. Acceso a «Siguiente ejercicio» después de registrar.
   - Tras guardar un ejercicio aparece un acceso rápido para comenzar el siguiente.

3. Teclado bajo demanda.
   - Al abrir «Comenzar ejercicio» no se abre automáticamente el teclado.
   - El teclado se abre al pulsar «Introducir nombre».
   - Se conserva la adaptación al teclado Android mediante visualViewport.

4. Se mantiene el nuevo logotipo en la pantalla principal y en los iconos de la PWA.

INSTALACIÓN / ACTUALIZACIÓN
----------------------------
Mantener juntos todos los archivos del paquete al publicarlos. index.html, manifest.json, sw.js e iconos deben permanecer en el mismo directorio.

Si Android conserva una versión anterior instalada, puede ser necesario cerrar y volver a abrir la aplicación o reinstalar la PWA para actualizar recursos almacenados previamente.

DATOS
-----
La actualización está concebida para mantener las funciones y datos existentes de la V28.5.1. Antes de cualquier actualización importante es recomendable guardar una copia JSON desde Herramientas avanzadas.
