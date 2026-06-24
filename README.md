# 🎛️ Metrónomo con Voz

Metrónomo digital con **voz humana en español** que cuenta los pulsos.



> Esta rama es la versión actual del proyecto. La versión original (v1.0) está disponible en la rama [`v1.0`](../../tree/v1.0).

---

## Qué hace

- **Voz real en español** — muestras de voz pregrabadas que dicen "un, dos, tres, cuat, cinco, seis" adaptándose automáticamente al tempo
- **3 compases** — 4/4, 3/4 y 6/8, con jerarquía visual de tres niveles (downbeat / acento / tiempo débil)
- **Subdivisión** — toggle para activar corcheas con tick intermedio entre pulsos (disponible en 4/4 y 3/4; preparado para tresillos)
- **40–200 BPM** — slider fluido, presets rápidos (60–160), botones ±1/±5 y atajos de teclado
- **Volumen independiente** — control por separado para click y voz, con mute individual
- **Indicador LED** — luces ámbar animadas con números, diferenciadas por jerarquía rítmica
- **Pantalla activa en móvil** — mantiene la pantalla encendida mientras suena, incluso abriendo el HTML desde el almacenamiento local del teléfono
- **Responsive** — funciona bien en desktop, móvil y tablet; se adapta a cualquier tamaño de pantalla
- **Sin dependencias externas** — un solo archivo HTML autocontenido, abre y funciona

---

## Cómo usarlo

1. Descarga `metronomo.html`
2. Ábrelo con cualquier navegador moderno (Chrome, Edge, Firefox, Chrome para Android)
3. Pulsa **PLAY**

No necesitas servidor, Node, ni instalar nada. En móvil puedes abrirlo directamente desde el explorador de archivos.

---

## Atajos de teclado

| Tecla | Acción |
|-------|--------|
| `Espacio` | Play / Pause |
| `←` `→` | BPM ±1 |
| `↑` `↓` | BPM ±5 |

---

## Comportamiento de la voz por tempo

La voz se adapta automáticamente al tempo para que nunca se corte ni suene forzada:

| Rango | Intervalo entre pulsos | Qué suena |
|-------|----------------------|-----------|
| < 80 BPM | > 750 ms | Palabras completas con cola natural |
| 80–159 BPM | 375–750 ms | Sílabas cortas ("un", "dos"...) |
| 160–184 BPM | 325–375 ms | Pulso de ruido corto |
| ≥ 185 BPM | < 325 ms | Solo click, sin voz |

---

## Tecnología

- **Web Audio API** — scheduler de alta precisión sin drift (patrón Chris Wilson con look-ahead de 100 ms)
- **Muestras MP3 embebidas** — 12 muestras de voz en base64 (velocidad normal y rápida para los 6 pulsos)
- **Síntesis por formantes** — fallback con oscilador fundamental + filtros bandpass para los rangos de BPM altos
- **NoSleep.js** — video loop silencioso embebido para mantener la pantalla activa en Android sin necesitar HTTPS
- **CSS con `clamp()`** — escalado fluido entre tamaños de pantalla sin breakpoints rígidos
- **Vanilla JS** — sin frameworks ni dependencias externas

---

## Diferencias respecto a v1.0

| Característica | v1.0 | Esta versión |
|----------------|------|-------------|
| Compases | Solo 4/4 | 4/4, 3/4, 6/8 |
| Subdivisión | No | Sí (corcheas, toggle) |
| Jerarquía visual 6/8 | — | 3 niveles (downbeat / acento / débil) |
| Voz | Síntesis por formantes | Muestras MP3 reales |
| Responsive | Básico | Fluido con `clamp()` + `dvh` |
| Pantalla activa (móvil) | No | Sí (NoSleep.js embebido) |
| Favicon | No | Sí |

---

## Licencia

MIT — úsalo, modifícalo, compártelo libremente.
