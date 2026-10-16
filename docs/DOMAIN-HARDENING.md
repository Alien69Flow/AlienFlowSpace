# Endurecer los dominios secundarios (aitor, ace, adex, atrip)

Medido el 2026-10-16: las cuatro apps responden 200 y despliegan en Vercel, pero envían **solo
`Strict-Transport-Security`**. No envían `X-Frame-Options` ni `frame-ancestors`, así que cualquier página
ajena puede incrustarlas en un `<iframe>` y superponer su propia interfaz encima. En `adex` eso significa
capturar clics sobre una app con cartera, y en `aitor` sobre una app con checkout cripto. El sitio
principal (`alienflow.space`) sí manda las cuatro cabeceras y sirve de referencia.

Estos cambios van en el repositorio de cada app (cada una tiene su propio `vercel.json`), no en
`AlienFlowSpace`. Copia el bloque en el fichero existente, sin borrar lo que ya haya dentro.

---

## 1. Cabeceras para cada app

Añade al `vercel.json` de cada repositorio (`aitor`, `ace`, `adex`, `atrip`) este bloque dentro de
`"headers"`. Si el fichero aún no tiene `"headers"`, añádelo como hermano de `"rewrites"`.

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains" },
        { "key": "X-Permitted-Cross-Domain-Policies", "value": "none" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob: https:; media-src 'self' data: blob:; worker-src 'self' blob:; connect-src 'self' https: wss:; frame-src 'self'; upgrade-insecure-requests"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```

### ATENCIÓN: `aitor` necesita una variante distinta

`alienflow.space` **incrusta `aitor` en el panel de chat**. Ese bloque de arriba, con
`X-Frame-Options: SAMEORIGIN`, **rompería ese panel**: la cabecera no admite lista de orígenes y
bloquearía también a `alienflow.space`. Para `aitor` usa esta variante: **sin** `X-Frame-Options` y con
`frame-ancestors` nombrando a los dos orígenes que sí deben poder incrustarla:

```json
{
  "key": "Content-Security-Policy",
  "value": "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self' https://alienflow.space https://www.alienflow.space; form-action 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob: https:; media-src 'self' data: blob:; worker-src 'self' blob:; connect-src 'self' https: wss:; frame-src 'self'; upgrade-insecure-requests"
}
```

Y quita `X-Frame-Options` del listado de `aitor`. En `ace`, `adex` y `atrip` no hay nada que los
incruste, así que ahí `SAMEORIGIN` es lo correcto y lo más simple.

Notas que importan para no romper cada app:
- **`frame-ancestors` en lugar de `X-Frame-Options`**: `frame-ancestors` sí acepta una lista de
  orígenes, `X-Frame-Options` no. Por eso `aitor` usa la CSP y no la cabecera clásica: así bloquea el
  *clickjacking* de cualquier web ajena y sigue dejando entrar a la nuestra.
- **`script-src` con `'unsafe-inline'`/`'unsafe-eval'` y `connect-src https: wss:`** están ahí a
  propósito: Vite inyecta estilos y el stack de cartera abre WebSockets a dominios que cambian. Endurecer
  eso exige probar en navegador (cartera, login, mapas). Mejor pasar de 0 cabeceras a 7 hoy que dejar la
  app abierta esperando una CSP perfecta.
- **`aitor` usa Cesium** (`/cesium/Cesium.js` y un web worker): si al endurecer la CSP ves una pantalla
  negra en el globo, añade `worker-src 'self' blob:` (ya está) y `child-src 'self' blob:`.
- **`ace`, `adex` y `atrip` no publican `sitemap.xml`**, y `atrip` tampoco `robots.txt`. Añadirlos es
  copiar los dos ficheros de `public/` de este repositorio y ajustar el dominio.

## 2. Medición (los cinco sitios)

Sin analítica no hay resultado medible. En `AlienFlowSpace` ya está montado con
`@vercel/analytics` + `@vercel/speed-insights` y eventos de conversión
(`src/lib/analytics.ts`: `cta_click`, `chat_open`, `affiliate_click`, `outbound_click`,
`newsletter_submit/success/fallback/error`). Para repetirlo en una app:

```sh
npm i @vercel/analytics @vercel/speed-insights
```

En su `main.tsx` (o donde monte el árbol de React):

```tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// dentro del árbol, junto a <App />
<Analytics />
<SpeedInsights />
```

Y un `trackEvent` propio, como el de este repositorio, para los eventos que sí son dinero: apertura del
chat, clic en afiliado, inicio de checkout, alta en newsletter.

## 3. Cómo comprobar que quedó bien

```sh
# cabeceras de una app (deben aparecer las 7, no solo HSTS)
curl -sSLI https://aitor.alienflow.space/ | grep -iE 'content-security-policy|x-frame-options|x-content-type-options'

# el clickjacking debe quedar bloqueado: frame-ancestors 'self' + X-Frame-Options SAMEORIGIN
# la analítica debe aparecer en el HTML servido tras el despliegue
curl -sSL https://aitor.alienflow.space/ | grep -o 'vercel-insights\|va.vercel-scripts'
```

Verificación esperada: `1 de 4` cabeceras pasa a `4 de 4` (o 7 contando las nuevas), el HTML incluye el
script de medición y el panel de Vercel Analytics empieza a contar visitas y eventos desde el primer
despliegue.
