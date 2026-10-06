REGISTRO GIMNASIO - V28.6.1
===========================

CORRECCION PRINCIPAL
--------------------
- Corrige el estado residual del teclado Android en «Comenzar ejercicio».
- Al abrir el panel se muestran siempre inicialmente «Introducir nombre» y «Hacer foto».
- El estado keyboard-open se reinicia tanto al abrir como al cerrar el panel.
- La ocultación de los botones solo puede activarse cuando el buscador está visible, el campo de nombre tiene el foco y visualViewport confirma la reducción de altura por teclado.
- Al cerrar el panel se elimina el foco del buscador y se restaura la altura de la lista.

FUNCIONES CONSERVADAS DE V28.6
------------------------------
- Máquinas recientes.
- Botón «Siguiente ejercicio» tras registrar.
- Teclado bajo demanda.
- OCR y alta de máquinas mediante fotografía.
- Fotografías y zoom táctil.
- Temporizador y temporizador contextual.
- Historial, calorías y duración estimada de sesión.
- Evolución por peso, tiempo y volumen estimado.
- Perfiles, grupos musculares y degradados.
- Importación/exportación Excel y copias JSON.

ARCHIVOS DEL PAQUETE
--------------------
- index.html
- Registro_Gimnasio_V28.6.1.html
- manifest.json
- sw.js
- icon-192.png
- icon-512.png
- README_V28.6.1.txt

ACTUALIZACION
-------------
Publicar juntos todos los archivos. El service worker usa una nueva caché «registro-gimnasio-v28.6.1» para evitar reutilizar recursos de versiones anteriores.

Antes de una actualización importante sigue siendo recomendable guardar una copia JSON desde Herramientas avanzadas.
