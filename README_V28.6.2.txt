REGISTRO GIMNASIO - V28.6.2

#Audio del temporizador
La V28.6.2 incorpora una capa audio primero + TTS de respaldo. La aplicación intenta reproducir archivos de voz multimedia desde audio/. Si el archivo no existe, no carga o play() falla, usa automáticamente SpeechSynthesis con el texto equivalente.

##Archivos de voz admitidos
- audio/descanso.wav
- audio/fin-ejercicio.wav
- audio/prueba.wav
- audio/serie-01.wav ... audio/serie-30.wav

> Este paquete incluye 33 locuciones WAV sintéticas en español, generadas con eSpeak NG. La aplicación usa TTS como respaldo si un WAV no puede reproducirse.

#Prueba de salida
En Ajustes del temporizador se añade 🔊 Probar voz, que intenta el archivo prueba.wav y usa TTS si no está disponible.

#Se conserva
Todas las funciones de V28.6.1, incluidos Comenzar ejercicio, máquinas recientes, siguiente ejercicio, OCR, fotos, zoom, gráficos, volumen, historial, perfiles, temporizador y copias de seguridad.

#Archivos
- index.html
- Registro_Gimnasio_V28.6.2.html
- manifest.json
- sw.js
- icon-192.png
- icon-512.png
- README.md
- README_V28.6.2.txt
- audio/README.txt
