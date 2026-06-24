# 🎛️ Metrónomo con Voz

Un metrónomo digital con **voz humana real en español** que cuenta los pulsos — como tener a alguien marcándote el ritmo junto a ti.

**[▶ Probar ahora](https://TU-USUARIO.github.io/metronomo-con-voz/metronomo.html)**

## Características

- **Voz real en español** — dice "un, dos, tres, cuat, cinco, seis" con muestras de voz pregrabadas
- **3 compases** — 4/4, 3/4 y 6/8
- **Subdivisión** — corcheas con tick intermedio entre pulsos (en 4/4 y 3/4)
- **40–200 BPM** — con presets rápidos (60, 80, 100, 120, 140, 160), slider y atajos de teclado
- **Volumen independiente** — control por separado para click y voz, con mute individual
- **Indicador LED** — luces ámbar que marcan visualmente cada pulso con números
- **Sin dependencias** — un solo archivo HTML, abre y funciona

## Atajos de teclado

| Tecla | Acción |
|-------|--------|
| `Espacio` | Play / Pause |
| `←` `→` | BPM ±1 |
| `↑` `↓` | BPM ±5 |

## Cómo usarlo

1. Descarga `metronomo.html`
2. Ábrelo con cualquier navegador (Chrome, Edge, Firefox)
3. Haz clic en **PLAY**

No necesitas servidor, ni Node, ni instalar nada.

## Tecnología

- **Web Audio API** — scheduler de alta precisión sin drift (patrón Chris Wilson)
- **Muestras MP3** — 12 muestras de voz embebidas en base64 dentro del HTML
- **CSS puro** — diseño con estética stompbox/pedal de efectos
- **Vanilla JS** — sin frameworks, sin dependencias externas

## Licencia

MIT — úsalo, modifícalo, compártelo libremente.
