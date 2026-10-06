# Registro Gimnasio V28.2

- Conserva las funciones de V28.1.
- Solo en la gráfica de volumen, el eje Y termina exactamente en el 110% del volumen máximo histórico diario de esa máquina.
- El límite se mantiene al cambiar entre 30 días, 90 días, 1 año y Total.
- El historial diario muestra calorías y duración estimada de la sesión.
- La sesión termina en la hora del último registro del día.
- Si el primer ejercicio es cardio, el inicio se estima restando su tiempo registrado.
- Si el primer ejercicio es de fuerza, el inicio se estima restando espera inicial, ejercicios y descansos del temporizador según el número de series.
- Los nuevos registros guardan además el inicio estimado para mantener el cálculo estable aunque cambien después los ajustes del temporizador.
