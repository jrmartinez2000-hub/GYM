## Registro Gimnasio V19.7
- Basada íntegramente en la V19.6.
- Crea automáticamente una copia interna completa tras cualquier cambio persistente.
- La copia incluye todos los datos de localStorage y las fotografías de IndexedDB.
- Al arrancar o actualizar la aplicación, restaura primero la última copia automática y después carga la interfaz.
- Mantiene los botones manuales «Guardar copia JSON» y «Restaurar copia JSON».
- Al restaurar manualmente un JSON, actualiza también la copia automática interna.
- Mantiene temporizador por series, pausa, volumen, avisos, historial mensual y resto de funciones.
