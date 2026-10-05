# Registro Gimnasio V27.3

- Integra directamente el parche de degradados dentro de `index.html`.
- Cada recuadro de grupo muscular de la pantalla principal recibe un degradado propio.
- Los grupos predeterminados conservan colores diferenciados.
- Cualquier grupo nuevo obtiene automáticamente una paleta estable derivada de su identificador.
- Un observador aplica los colores cuando la lista se vuelve a renderizar, al cambiar de perfil o al añadir grupos.
- No requiere cargar un archivo JavaScript adicional.
- Mantiene los datos de la instalación anterior porque no modifica las claves de almacenamiento.
