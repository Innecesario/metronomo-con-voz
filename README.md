# 🎛️ Metrónomo con Voz

Un metrónomo digital con **voz humana real en español** que cuenta los pulsos — como tener a alguien marcándote el ritmo junto a ti.

**[▶ Probar ahora](https://innecesario.github.io/metronomo-con-voz/)**

## Características

- **Voz real en español** — dice "un, dos, tres, cuat, cinco, seis" con muestras de voz pregrabadas
- **3 compases** — 4/4, 3/4 y 6/8
- **Subdivisión** — corcheas con tick intermedio entre pulsos (en 4/4 y 3/4)
- **40–200 BPM** — con presets rápidos (60, 80, 100, 120, 140, 160), slider y atajos de teclado
- **Volumen independiente** — control por separado para click y voz, con mute individual
- **Indicador LED** — luces ámbar que marcan visualmente cada pulso con números
- **Instalable en Android** (PWA) — se añade a la pantalla de inicio y funciona sin conexión

## Instalarlo en el móvil

1. Abre <https://innecesario.github.io/metronomo-con-voz/> en Chrome (Android)
2. Menú **⋮ → Instalar aplicación** (o *Añadir a pantalla de inicio*)
3. Se abre a pantalla completa, sin barra de direcciones, y funciona sin datos

En iPhone: Safari → Compartir → *Añadir a pantalla de inicio*.

## Atajos de teclado

| Tecla | Acción |
|-------|--------|
| `Espacio` | Play / Pause |
| `←` `→` | BPM ±1 |
| `↑` `↓` | BPM ±5 |

## Estructura

```
index.html      la app entera (HTML + CSS + JS + las 12 muestras de voz en base64)
manifest.json   datos de instalación (nombre, iconos, colores)
sw.js           service worker: guarda la app para usarla sin conexión
assets/         iconos del manifest, de la pantalla de inicio y de la pestaña
```

Las grabaciones originales (`samples/`) y la versión anterior (`v1.0/`) no se
publican: se quedan solo en local.

Para probarla en local no hace falta instalar nada: abre `index.html` con el
navegador. El service worker solo se activa cuando la sirves por `http(s)`
(por ejemplo con `python -m http.server`), porque el navegador no lo permite
desde `file://`.

## Tecnología

- **Web Audio API** — scheduler de alta precisión sin drift (patrón Chris Wilson)
- **12 muestras MP3** — 6 normales y 6 rápidas, embebidas en base64 dentro del HTML
- **PWA** — manifest con iconos *maskable* (el pedal va centrado dentro de la zona
  segura para que Android no lo recorte al aplicar su máscara) y service worker
- **CSS puro** — diseño con estética stompbox/pedal de efectos
- **Vanilla JS** — sin frameworks ni dependencias de build

Las tipografías (Oswald y Space Grotesk) se cargan de Google Fonts; el service
worker las guarda la primera vez, así que a partir de la primera visita también
están disponibles sin conexión.

## Licencia

MIT — úsalo, modifícalo, compártelo libremente.
