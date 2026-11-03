# Monetización: qué hay montado y cómo se enciende

Tres fuentes, en orden de rapidez. Ninguna tapa contenido, ninguna se cobra antes de
ver el contenido y ninguna carga un script de terceros sin consentimiento.

## 1. Patrocinador propio (lista hoy, sin aprobaciones)

`src/data/sponsors.ts` + `src/components/AdBanner.tsx`.

Una tarjeta de la casa: título, una línea, botón. **Cero cookies, cero peticiones a
terceros, cero scripts.** No depende de AdSense ni de ninguna política de anuncios, así
que se puede vender por meses y facturar aunque no haya cuenta publicitaria.

Para publicar uno, una entrada:

```ts
{
  id: 'mi-patrocinador',
  slot: 'clubs',              // 'clubs' | 'conetworking'
  name: 'Nombre',
  body: 'Una línea de qué ofrece, sin promesas de rentabilidad.',
  href: 'https://…',
  cta: 'Ver más',
  badge: 'Patrocinado',       // opcional
}
```

Dónde aparece: lo monta `src/components/Layout.tsx`, condicionado a la ruta, **solo en
`/clubs` y `/conetworking`**, entre el contenido y el pie. Un espacio por página, siempre
después del contenido: en Academy, AlienTrip o la home no existe. Vacío = no se pinta nada.

Precio orientativo para venderlo: el sitio no publica cifras de tráfico verificables
todavía, así que se vende por paquete mensual con un mínimo medido con Vercel Analytics
(`ad_impression`, `ad_click`) tras la primera semana.

## 2. AdSense (solo con consentimiento, y solo si lo configuras)

Dos variables en Vercel → Environment Variables:

- `VITE_ADSENSE_CLIENT` (`ca-pub-…`)
- `VITE_ADSENSE_SLOT` (el id del bloque de anuncios)

Reglas del componente, en este orden:

1. Sin esas variables, **no se carga ningún script**: la página queda igual que hoy.
2. Con ellas pero **sin consentimiento**, tampoco: el `<ins>` y `adsbygoogle.js` solo
   existen tras pulsar «Accept» en el banner.
3. Si el visitante rechaza, no hay anuncios y no hay cookies. El banner ya no escribe
   `localStorage` por su cuenta: todo pasa por `src/lib/consent.ts`.

AdSense exige CMP certificada para tráfico de la UE; esta implementación respeta el
consentimiento en el código, pero para cumplir el requisito del programa hay que
declarar la CMP en la cuenta de AdSense. Sin ese paso, AdSense puede limitar el
serving en la UE aunque el sitio se comporte bien.

## 3. Merch (`src/data/merch.ts`)

El catálogo es un array tipado; el carrusel de `Clubs` y de la tarjeta destacada se
alimenta de él. Para añadir o mejorar producto:

```ts
{
  id: 'nueva-prenda',
  name: 'Nombre',
  description: 'Una línea.',
  detail: 'Material o edición',           // opcional
  image: '/lovable-uploads/xxx-thumb.webp',
  price: { amount: 29, currency: 'EUR' }, // sin esto no hay CTA de compra
  url: 'https://tienda/…',                // sin esto no hay CTA de compra
  badge: 'new' | 'limited' | 'bestseller',// opcional
}
```

- **Con precio y enlace**: se muestra precio y «Ver en la tienda» (evento `merch_click`).
- **Sin precio o sin enlace**: dice «Precio próximamente» y **no** muestra un botón
  muerto. Rellenar esos dos campos en los siete productos actuales es lo único que
  falta para que el merch sea comprable desde el sitio.
- Las imágenes deben ser WebP de 200 px (las originales de 1000 px sumaban 9,4 MiB).

## Qué falta, y es tuyo

1. `sponsors.ts`: los patrocinadores reales (nombre, línea, enlace).
2. `merch.ts`: precio y URL de tienda de cada producto.
3. `VITE_ADSENSE_CLIENT` + `VITE_ADSENSE_SLOT`, y la CMP declarada en AdSense.
4. Brevo (newsletter): `BREVO_API_KEY` + `BREVO_LIST_ID` — ver `docs/NEWSLETTER.md`.

## Lo que este diseño evita a propósito

- Pop-ups, interstitials, anuncios que se mueven solos o que tapan el contenido.
- Anuncios en `/academy` y `/alien-trip`: son páginas de lectura, ahí se pierde más
  confianza de la que se gana.
- Cajas «Ad Space» vacías: si no hay nada que mostrar, no hay hueco.
- Cargar el script publicitario antes del consentimiento (multa potencial en la UE y
  motivo habitual de suspensión de AdSense).
