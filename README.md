## Registro Gimnasio V19.9
- Corrige la actualización que volvía a mostrar la V19.7 después de restaurar la copia automática.
- La copia automática restaura solamente datos, preferencias y fotografías.
- La interfaz y el número de versión siempre proceden del index.html actualmente instalado.
- El arranque ya no ejecuta una recarga después de restaurar los datos.
- El service worker utiliza una caché exclusiva de V19.9, activa inmediatamente la nueva versión y evita servir una navegación antigua.
- Mantiene copia automática, restauración JSON manual, temporizador, historial mensual y resto de funciones.
