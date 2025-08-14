Coloca aquí los archivos del hero en vídeo.

Recomendado:

- space.mp4 → H.264, 6–12s, sin audio, ~2–4 MB
- space.webm → VP9/AV1 (opcional), misma duración
- poster.jpg → fotograma estático (para el primer paint)

Comandos sugeridos (ffmpeg):

```bash
ffmpeg -i input.mp4 -t 10 -an -vf "scale=-2:1080,fps=30" -b:v 2500k -movflags +faststart space.mp4
ffmpeg -i input.mp4 -t 10 -an -c:v libvpx-vp9 -b:v 1800k space.webm
ffmpeg -i input.mp4 -ss 00:00:01 -vframes 1 poster.jpg
```

Fuente sugerida del clip: Pexels – Tonos de luces en el espacio exterior (verifica licencia actual).

