REGISTRO DE GIMNASIO V29+

NOVEDAD PRINCIPAL
- Reconocimiento híbrido local de máquinas mediante OCR y comparación fotográfica.
- Corrige errores OCR frecuentes como 5/S, 0/O, 1/I y 8/B cuando aparecen dentro de palabras.
- Compara la imagen nueva con las fotografías ya guardadas de las máquinas activas.
- Fusiona la coincidencia textual y visual con pesos adaptativos según la calidad del OCR.
- Abre automáticamente solo cuando la coincidencia es muy alta y claramente superior a la segunda.
- En casos dudosos muestra las tres mejores opciones con sus puntuaciones.
- Si falla OCR, continúa con fotografía; si no hay fotos, continúa con OCR y búsqueda manual.

PRIVACIDAD
- La comparación visual se ejecuta localmente en el navegador.
- No se envían fotografías a servicios externos.
- Tesseract.js sigue necesitando sus recursos web cuando no estén almacenados en caché.

RECOMENDACIONES
- Para mejorar la comparación, usa como foto guardada una imagen similar a la que tomarás al comenzar el ejercicio.
- Procura incluir la placa y parte de la estructura de la máquina.
- Si una máquina no tiene fotografía guardada, solo podrá puntuar por OCR/nombre.

INSTALACION
- Sustituir el index.html actual por index_V29_plus.html o renombrarlo a index.html.
- Mantener icon-192.png, manifest.json, sw.js y la carpeta audio existentes.
- No borra perfiles, historial, fotos ni datos guardados en el navegador.
