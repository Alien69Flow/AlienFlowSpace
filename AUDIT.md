# Auditoría técnica — AlienFlowSpace (Alien69Flow/AlienFlowSpace)

**Fecha:** 2026-10-08
**Alcance:** repo completo (`src/`, `public/`, configuración, despliegue Vercel).
**Método:** lectura del 100% de los archivos fuente + `tsc`, ESLint, `vite build`, servidor de desarrollo y sondas HTTP.

---

## 0. Resumen ejecutivo

El proyecto es una **SPA Vite 6 + React 18 + TypeScript** con shadcn/ui, Tailwind, Web3
(Reown AppKit + wagmi + viem + adaptadores Solana/Bitcoin) y un cliente Supabase **que no se usa**.
Despliega en Vercel como sitio estático con rewrite a `index.html`.

**Estado:** compila en desarrollo y se sirve correctamente, pero:

| Área | Estado | Detalle |
|---|---|---|
| TypeScript | ❌ 13 errores | `src/pages/CoNetWorKing.tsx` (prop `color` inexistente) |
| ESLint | ❌ 10 errores / 7 avisos | `npm run lint` sale con exit 1 |
| Build producción | ⚠️ No verificable aquí | Muere por OOM del sandbox (~1,3 GB de cgroup); **no** es fallo del repo |
| Assets | ❌ 2 referencias rotas | `stars-bg.png` (CSS) y `97b958b4-….png` (Tailwind) |
| Monetización | ❌ 0 ingresos posibles | Publicidad no montada, newsletter falsa, merch sin compra |
| Integridad de datos | ❌ Crítico | Dashboard DAO y estadísticas con datos inventados presentados como reales |

**Conclusión:** hay que cerrar primero los errores (sección 1–2) y, sobre todo, la brecha de
**credibilidad** (sección 3) antes de activar cobros: hoy un usuario que se conecta ve cifras
inventadas y funciones que no hacen nada. Eso mata la conversión de una DAO y expone a reclamaciones.

---

## 1. Errores que rompen la verificación (P0)

### 1.1 TypeScript: 13 errores TS2322 — `src/pages/CoNetWorKing.tsx:402-414`
Se pasa `color=""` a `<PartnerSection>`, componente que **no acepta** esa prop:

```
src/pages/CoNetWorKing.tsx(402,78): error TS2322:
  Property 'color' does not exist on type 'IntrinsicAttributes &
  { title: string; partners: Partner[]; icon?: ReactNode; delay?: number; }'
```

Evidencia: `npx tsc -b` → **exit 2**. Vite no comprueba tipos, por eso Vercel despliega igual,
pero cualquier IDE/CI lo marca y no se puede añadir un gate de calidad.
**Causa:** prop residual de un refactor; su valor es `""`, así que no tiene efecto visual.
**Solución aplicada:** eliminadas las 13 props muertas.

### 1.2 ESLint: 10 errores (`npm run lint` → exit 1)

| Archivo:línea | Regla | Problema real |
|---|---|---|
| `tailwind.config.ts:155` | `no-require-imports` | `plugins: [require("tailwindcss-animate")]` en un archivo ESM |
| `src/lib/translator.ts:6` | `no-explicit-any` | `google?: any` |
| `src/lib/translator.ts:15` | `ban-ts-comment` | `@ts-ignore` en vez de tipar el global |
| `src/config/appkit.ts:29,43,44` | `no-explicit-any` | 3 `as any` que anulan el tipado del stack Web3 |
| `src/components/PriceTicker.tsx:5,7` | `no-namespace`, `no-explicit-any` | `declare namespace JSX` + `any` para el web component de CoinGecko |
| `src/components/ui/command.tsx:24` | `no-empty-object-type` | `interface CommandDialogProps extends DialogProps {}` |
| `src/components/ui/textarea.tsx:5` | `no-empty-object-type` | `interface TextareaProps extends …{}` |

Los dos últimos son plantilla de shadcn/ui; el resto es código propio.

### 1.3 Referencias a assets inexistentes (404 en producción)

1. **`/lovable-uploads/stars-bg.png`** — `src/index.css:151`
   ```css
   .bg-stars { background: black url('/lovable-uploads/stars-bg.png') repeat; }
   ```
   El archivo **no existe** en `public/`. Confirmado en runtime: `GET /lovable-uploads/stars-bg.png`
   → `200 text/html` (lo que devuelve es `index.html` del fallback SPA, no una imagen).
   Además el build avisa: *"didn't resolve at build time"*.
   `bg-stars` **no se usa en ningún componente** → clase muerta.

2. **`97b958b4-b3ba-464b-929a-b8783d910484.png`** — `tailwind.config.ts:147`
   ```ts
   'stars': "url('/public/lovable-uploads/97b958b4-….png')"
   ```
   Doble problema: el archivo **no existe** y la ruta lleva el prefijo `/public/`, que en Vite
   nunca se usa (los assets de `public/` se sirven desde la raíz). La utilidad `bg-stars` está rota.

### 1.4 CSS cargado dos veces
- `index.html:24` → `<link rel="stylesheet" href="/src/index.css" />` (residuo del editor de Lovable)
- `src/main.tsx:5` → `import './index.css'`

Confirmado en runtime: el HTML servido contiene ambas, y `main.tsx` transformado por Vite incluye
`import "/src/index.css";`. Resultado: **113 KB de CSS duplicados** (medidos en dev) y dos hojas
de estilo compitiendo por el orden de cascada.

### 1.5 El cliente Supabase es una bomba de relojería
`src/integrations/supabase/client.ts`:
```ts
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {…});
```
No existe `.env` **ni `.env.example`**. Hoy no explota únicamente porque **nadie importa este módulo**
(0 usos en todo `src/`). En el momento en que se use, `createClient(undefined, undefined)` lanza
en tiempo de import y **deja la app en pantalla blanca**. Además `supabase/config.toml` apunta a
un `project_id` sin carpeta de migraciones.

### 1.6 El build de producción no se puede verificar en este entorno
`npx vite build` completa la transformación (**7.224 módulos**) y muere en la fase de render:

```
✓ 7224 modules transformed.
Killed   (exit 137 — Memory cgroup out of memory)
```

El sandbox impone un cgroup de ~1,3 GB. Se probó con `--max-old-space-size` de 900/1050/1150/1180
y con `maxParallelFileOps: 1`: por debajo de ~900 MB V8 aborta por heap, por encima el cgroup mata
el proceso. **Conclusión: limitación del entorno, no del repo** (Vercel dispone de mucha más memoria),
pero conviene saber que el grafo de dependencias es enorme y cualquier CI con poca RAM va a fallar.

---

## 2. Fallos funcionales y de integridad (P1)

### 2.1 La newsletter es decorativa
`src/components/NewsletterSubscription.tsx:21`
```ts
setIsLoading(true);
await new Promise(resolve => setTimeout(resolve, 1000));   // ← no envía nada
setIsLoading(false);
setIsSubscribed(true);   // ← "You're In! Check your inbox"
```
El usuario ve *"You have been subscribed"* y **ningún email sale ni se guarda en ningún sitio**.
Es simultáneamente una **pérdida total de leads** y un mensaje engañoso.

### 2.2 Las "AI Keys" no existen
`src/utils/aiKeyGenerator.ts` genera una clave con `Math.random()` + `btoa` y su propio comentario
lo admite: *"not cryptographically secure, just for demo"*. Pero la UI
(`useWalletConnection` + `Header/ConnectButton`) muestra
*"AI Key Generated! Your unique AI key has been created and linked to your wallet"* y ofrece un
botón **"Copy AI Key"**. No hay backend, no autoriza nada y se almacena en `localStorage`.
Cualquiera puede fabricarse una clave desde la consola.

### 2.3 El Dashboard DAO muestra datos inventados como si fueran on-chain
`src/components/DAODashboard.tsx:35` → `// Mock data - In production, fetch from blockchain`.
- `activeVoters: 1618033` (dígitos del número áureo), `votingPower: '3.14M'`, participación 69 %.
- Tesorería de 9 activos con valores fijos y flechas de variación % inventadas.
- 4 propuestas con fechas **ya vencidas** (2026-02-25, 2026-02-28, 2026-03-10, 2026-03-15) marcadas
  como *Active* → bug visible hoy.
- Botones **"Vote For" / "Vote Against"** sin handler: no hacen absolutamente nada.
- *"Last updated: <hora>"* + botón **Refresh** que sólo actualiza ese timestamp.

Lo correcto (y lo que sí existe y está bien hecho) son los enlaces reales a Aragon en Polygon
(`0xCA497d…` y `0x2A1F32…`). Hay que **leer de la cadena o marcar claramente los datos como demo**.

### 2.4 Estadísticas de portada inventadas
`src/components/StatsSection.tsx`: 314.159 miembros (dígitos de π), 195 países, 127 propuestas
aprobadas, y "Treasury Reserve" de 420 ETH + 8 BTC hardcodeados como si fueran on-chain
(etiquetados `ON-CHAIN`).

### 2.5 No hay ni un solo espacio publicitario montado
`src/components/AdBanner.tsx` es un placeholder (`// Google AdSense script would go here`) y
**no se usa en ninguna página** (0 importaciones). Sin esto no hay ingresos por tráfico.

### 2.6 Carrito de merchandising sin posibilidad de compra
`src/components/EcoProductCarousel.tsx` (usado en `Clubs.tsx` y `FeaturedClubCard.tsx`):
7 productos con nombre y descripción, **sin precio ni enlace de compra**. Las imágenes se muestran
en un marco de **80×80 px** pero pesan entre 1,1 y 2,8 MB cada una (ver 2.9).

### 2.7 Formulario de contacto dependiente de `mailto:`
`src/pages/Contact.tsx:75` abre el cliente de correo local. Si el usuario no lo tiene configurado,
el mensaje **se pierde** y la web muestra igualmente *"Transmission initiated!"*.

### 2.8 "IA" simulada
`src/pages/Contact.tsx` — la terminal "AiTor_Neural_Core_v6.9" responde con comparaciones
`if (input.toLowerCase().includes('help'))` … no hay modelo detrás. El chatbot flotante
(`AIChatbot.tsx`) es un `<iframe>` a **`aitor.lovable.app`**, mientras que el resto del sitio
apunta a **`aitor.alienflow.space`**: dominio de terceros, marca inconsistente y riesgo de
dependencia externa.

### 2.9 Rendimiento: el mayor enemigo de la conversión (y de AdSense)
- `public/` pesa **17 MB**. Solo los PNG de merch: 10,8 MB
  (`eco-hat-navy.png` 2,8 MB, `eco-dad-hat.png` 1,77 MB, `eco-hat-orange.png` 1,59 MB, …).
- `apps/ace.png` pesa **552 KB** y se renderiza a 36×36 px; `apps/adex.png` 340 KB lo mismo.
- Fondos `bg-fixed` de 1,28 MB (`BGRCM.png`) y 526 KB (`EMWBack.png`) en todas las páginas.
- **Todo el stack Web3** (AppKit + wagmi + viem + adaptadores Solana + Bitcoin + recharts) entra en
  el bundle inicial de *todas* las páginas: **7.224 módulos**. Sin `lazy()`/code-splitting, ni
  siquiera las páginas que no usan wallet.
- Ninguna imagen con `width`/`height` ni `loading="lazy"` (salvo el logo del Hero) → CLS y LCP malos.

### 2.10 Consentimiento de cookies decorativo
`CookieConsent.tsx` guarda `cookie-consent` en `localStorage` pero **no condiciona nada**:
`translator.ts` (Google) y los widgets de CoinGecko/CoinMarketCap inyectan scripts de terceros
siempre, antes y después de aceptar. Insuficiente para GDPR y **bloqueante para aprobar AdSense** en la UE.

### 2.11 Código muerto y lógica inalcanzable
- `src/components/Header/index.tsx:17` → `if (isMobile === undefined)` **nunca** se cumple, porque
  `useIsMobile()` retorna `!!isMobile` (siempre `boolean`). El skeleton del header es inalcanzable.
- `StarBackground.tsx` (canvas de estrellas) → 0 usos. `App.css` → no se importa desde ningún sitio.
- `LoadingScreen` solo se usa como `Suspense fallback` de contenido que **no** es `lazy()` → nunca se ve.
- `vite.verify.config.mts` fue temporal de esta auditoría (eliminado).

### 2.12 Inconsistencias de contenido
- Email de contacto: `alien69flow@proton.me` (Contact, README) vs `info@alienflow.space` (Footer).
- Discord y TikTok marcados `Coming Soon` con `link: '#'`.
- `Canonical`/`sitemap.xml` ausentes; `hreflang="es"` apunta a `/es/`, ruta que **no existe**.
- `og:image` relativa (`/lovable-uploads/ALogo.png`) → algunas redes sociales no la resuelven.
- `reown` metadata: nombre **"Alien World"** / "Alien World dApp" mientras la marca es AlienFlowSpace.

### 2.13 Reproducibilidad y calidad
- **Tres lockfiles** a la vez: `package-lock.json`, `bun.lock`, `bun.lockb`. Vercel, Lovable y local
  pueden instalar árboles distintos. Hay que elegir uno y borrar el resto.
- **Sin tests** (0 archivos) y **sin script `typecheck`**.
- `vite.config.ts` → `server.host: "::"` publica el servidor de desarrollo en todas las interfaces.
- `vercel.json` solo tiene rewrites: sin cabeceras de seguridad (CSP, HSTS, `X-Frame-Options`) ni
  política de caché para assets con hash.

---

## 3. Plan de monetización priorizado

Ordenado por **impacto/urgencia** para empezar a facturar cuanto antes. La sección 3.0 es
obligatoria: sin ella, activar cobros sobre datos falsos es un riesgo legal y reputacional.

### P0 — Credibilidad (bloqueante para cobrar)
1. **Datos reales o demo etiquetada.** Leer tesorería/propuestas de los DAOs de Aragon en Polygon
   (ya hay direcciones válidas) vía RPC público, o mostrar un badge `DEMO DATA` y quitar los
   botones de voto. Quitar el "Refresh" que no refresca. *(Impacto: alto · Esfuerzo: medio)*
2. **Sustituir cifras de vanidad** (314.159 miembros, 420 ETH) por métricas verificables o retirarlas.
3. **Eliminar la "AI Key" falsa** o convertirla en algo real (token firmado por backend).

### P1 — Ingresos inmediatos
4. **Montar publicidad de verdad.** Añadir `<AdBanner>` en `Index` (entre secciones) y en
   `Academy`/`Clubs`, cargando AdSense **solo** si `VITE_ADSENSE_CLIENT` está definido y el usuario
   aceptó cookies. AdSense exige CMP certificado → enlazar con 3.5. *(Impacto: alto · Esfuerzo: bajo)*
5. **Newsletter que capture de verdad.** Endpoint configurable por env (`VITE_NEWSLETTER_ENDPOINT`)
   o integración con un proveedor; **nunca** mostrar éxito si no se envió. Es el activo más valioso
   para vender patrocinios. *(Alto · Bajo)*
6. **Monetizar merchandising.** Añadir `price` + `url` de compra a los 7 productos del carrusel y un
   CTA "Buy" → afiliación o tienda propia. Ya existe el catálogo y las fotos: falta el botón.
   *(Alto · Bajo)*
7. **Enlazar afiliaciones ya presentes** (`AADS ?partner=2454032`, `lovable.dev/invite/VPTZ5JI`,
   Bitget vía Azrael Codex) en un bloque visible con `rel="sponsored"`. *(Medio · Bajo)*

### P2 — Conversión y rendimiento (sube ingresos de todo lo anterior)
8. **Code-splitting del stack Web3**: `React.lazy()` para `Web3Provider` + conectar wallet solo en
   las rutas que lo necesitan. Objetivo: bajar el bundle inicial a <300 KB gzip.
9. **Optimizar imágenes**: convertir los PNG de `public/` a WebP/AVIF y redimensionar
   (`apps/ace.png` 552 KB → ~4 KB). Servir el merch en el tamaño real (160–320 px). *(Alto · Bajo)*
10. **`width`/`height`/`loading="lazy"`/`decoding="async"`** en todas las imágenes.
11. **CMP real** conectada a `CookieConsent` que bloquee Google Translate, CoinGecko y AdSense
    hasta el consentimiento. *(Requisito legal + de AdSense)*

### P3 — Modelo de negocio DAO
12. **Membresía de pago** en `$AFS`/`$A69F` (Aragon ya desplegado) con beneficios visibles:
    acceso a Academy, NFT, descuentos en merch.
13. **Página `/token`**: tokenomics, cómo comprar, dónde verificar el contrato. Hoy no existe.
14. **`/dao` con datos on-chain** en lugar del dashboard simulado (ver P0-1).
15. **Bounties/patrocinios** (DoraHacks ya está enlazado) como línea de ingresos.
16. **SEO técnico**: `sitemap.xml`, `canonical`, `og:image` absoluta, quitar `hreflang` inexistente.

### P4 — Deuda técnica
17. Añadir CI (GitHub Actions): `typecheck` + `lint` + `build`. Ya existe CodeQL.
18. Cabeceras de seguridad y caché en `vercel.json`.
19. Elegir un único lockfile y borrar los otros dos.
20. Tests mínimos (smoke de rutas + `ErrorBoundary`).
21. Resolver inconsistencias de email/Discord/TikTok y el nombre "Alien World" en Reown.

---

## 4. Lo que ya está bien

- Arquitectura limpia: `alien/*` como sistema de diseño propio, `ErrorBoundary` envolviendo las rutas,
  `ScrollToTop`, `AnimatePresence` por ruta.
- Rutas SPA completas con `404` (`NotFound`) y páginas legales (`PrivacyPolicy`, `TermsOfService`).
- Tipado de Supabase generado y utilidades de calendario (chino/hindú/hebreo) con correcciones
  de año nuevo bien resueltas.
- Enlaces reales y verificables de los DAO en Aragon/Polygon.
- `postinstall` de dependencias y `optimizeDeps` ya contemplados; alias `@/` correcto.
- Optimizaciones ya presentes: `font-display: swap`, `preconnect` a Google Fonts, `preload` del
  woff2 y del logo.

---

## 5. Correcciones aplicadas en esta sesión

| # | Archivo | Cambio |
|---|---|---|
| 1 | `src/pages/CoNetWorKing.tsx` | Eliminadas 13 props `color=""` inexistentes → 13 errores TS resueltos |
| 2 | `src/index.css` | Eliminada la clase muerta `.bg-stars` y `@keyframes moveStars` que apuntaban a un PNG inexistente |
| 3 | `tailwind.config.ts` | `backgroundImage.stars` roto eliminado; `require()` → `import` ESM |
| 4 | `index.html` | Eliminado el `<link rel="stylesheet" href="/src/index.css">` duplicado |
| 5 | `src/components/PriceTicker.tsx` | Web component tipado sin `declare namespace JSX` ni `any` |
| 6 | `src/config/appkit.ts` | Eliminados los 3 `as any`; redes EVM tipadas como `[AppKitNetwork, ...AppKitNetwork[]]` |
| 7 | `src/lib/translator.ts` | Global `google` tipado, eliminado `@ts-ignore` |
| 8 | `src/components/ui/command.tsx`, `ui/textarea.tsx` | Interfaces vacías → alias de tipo |
| 9 | `src/pages/Clubs.tsx` | `useMemo` sin dependencias → cálculo directo (aviso de hooks resuelto) |
| 10 | `src/components/Header/index.tsx` | Eliminada la rama inalcanzable `isMobile === undefined` |
| 11 | `src/integrations/supabase/client.ts` | Falla con mensaje explícito en lugar de `createClient(undefined, undefined)` |
| 12 | `.env.example` | Documentadas las variables de entorno requeridas |
| 13 | `package.json` | Añadido script `typecheck` |

Todas las correcciones están verificadas con `tsc -b`, `eslint .` y sondas HTTP contra el
servidor de desarrollo.
