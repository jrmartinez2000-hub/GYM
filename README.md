# Registro de Gimnasio V29.5

- Corregido el uso real del número de series y repeticiones durante la temporización.
- Cada serie utiliza su propio número de repeticiones y duración.
- Valores iniciales únicamente para máquinas sin configuración previa:
  - 3 segundos por repetición.
  - 90 segundos de descanso.
  - 15 segundos de preparación inicial.
- Incremento automático según las repeticiones de la última serie:
  - hasta 8: +1 por serie anterior;
  - de 9 a 12: +2;
  - más de 12: +3.
- El incremento ya no es editable y se recalcula al cambiar las repeticiones.
- La configuración utilizada queda guardada en cada máquina.
