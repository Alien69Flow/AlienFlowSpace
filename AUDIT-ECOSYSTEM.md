# Auditoría del ecosistema — AlienFlowSpace DAO + dominios secundarios

**Fecha:** 2026-10-16 (mediciones tomadas entre 21:40 y 22:00 UTC)
**Alcance:** `alienflow.space` y sus subdominios `aitor`, `ace`, `adex`, `atrip`, `api`; el repositorio
`Alien69Flow/AiTor` (lectura); los flujos de ingresos declarados en `AlienFlowSpace`.
**Método:** sondas HTTP reales (códigos, cabeceras, tamaños, 404s), lectura del bundle desplegado en busca
de secretos y endpoints, y lectura del árbol y los documentos de AiTor. Todo lo que aparece aquí está
medido; lo que no pude verificar se marca explícitamente.

---

## 0. Resumen ejecutivo

| Área | Estado | Medido |
|---|---|---|
| Dominios y subdominios | 5 de 6 responden y despliegan en Vercel | `alienflow.space` (307 → www), `www`, `aitor`, `ace`, `adex`, `atrip` en 200. `api.alienflow.space` **no resuelve** |
| Cabeceras de seguridad | ❌ Apps expuestas | El sitio principal 4/4; **las cuatro apps solo HSTS** (sin CSP, sin `X-Frame-Options`) → se pueden incrustar en un iframe ajeno |
| SEO/robots por app | ⚠️ Irregular | `robots.txt`: aitor ✅, ace ✅, adex ✅, atrip ❌. `sitemap.xml`: solo aitor |
| Higiene de secretos | ✅ Limpio (lo comprobado) | El bundle en vivo de Aitor (1,43 MB) **no expone** `sk-…`, `AIza…`, `service_role`, `OPENAI_API_KEY` ni token de bot de Telegram. `.npmrc` sin tokens |
| Independencia de Aitor | ❌ No es independiente | Auth y endpoints de Lovable siguen dentro de su propio bundle; LLM externo; hosting y Supabase de terceros |
| Ingresos | ❌ Cero medibles | **No hay analítica en ninguno de los 5 sitios.** Sin métricas no hay "resultados medibles" posibles |
| Rendimiento de arranque | ⚠️ Pesado | KB iniciales (JS+CSS sin comprimir): www 3.271 · adex 2.508 · ace 2.000 · atrip 1.789 · aitor 1.507 |

---

## 1. Dominios: lo que hay delante

| Host | HTTP | Título | Cabeceras de seguridad | robots | sitemap | 404 |
|---|---|---|---|---|---|---|
| `alienflow.space` | 307 → `www` | ΔlieπFlΦw $pac€ DAO \| Web 3/4/5 | 4/4 | ✅ | ✅ | ✅ 404 |
| `www.alienflow.space` | 200 | (mismo) | 4/4 | ✅ | ✅ | ✅ 404 |
| `aitor.alienflow.space` | 200 | Ai Tor — Real-Time AI Intelligence Terminal & Web3 DAO | **1/4** (solo HSTS) | ✅ | ✅ | ✅ 404 |
| `ace.alienflow.space` | 200 | ACE \| A Cash Energy | **1/4** | ✅ | ❌ | ✅ 404 |
| `adex.alienflow.space` | 200 | Alien DEX & Play | **1/4** | ✅ | ❌ | ✅ 404 |
| `atrip.alienflow.space` | 200 | AlienTrip — Tu viaje completo en un solo lugar | **1/4** | ❌ | ❌ | ✅ 404 |
| `api.alienflow.space` | **DNS no resuelve** | — | — | — | — | — |

Dos consecuencias directas:

1. **Las cuatro apps se pueden incrustar en un iframe ajeno** (no envían `X-Frame-Options` ni
   `frame-ancestors`). En un DEX con cartera y en un checkout cripto eso es *clickjacking* clásico: un
   atacante superpone el sitio en una página suya y captura clics. El sitio principal sí lo bloquea; las
   apps, que son justo las que manejan valor, no.
2. **`api.alienflow.space` no existe**, pero figura como dominio permitido en el `config.json` de
   permisos de Aitor. Un manifiesto que autoriza un dominio inexistente es una promesa vacía (o un
   descuido): o se publica el endpoint, o se corrige el manifiesto.

Ninguna de las apps expone *source maps* (`.map` → 404) y todas resuelven bien las rutas inexistentes
con 404 real.

---

## 2. Independencia operativa de Aitor

### 2.1 Lo que está bien (y es más de lo que se suele encontrar)

- **Es un producto propio y serio**: `supabase/functions/*` con backend de chat propio, `backend/agents`,
  `src/services/agentTools.ts`, `src/lib/mcp`, 40+ hooks de datos en tiempo real, `.agents/skills/`
  (`security-auditor`, `social-media-manager`), `Skill.md`, `ROADMAP.md`, `AUTOMATIONS.md`.
- **Sin secretos filtrándose al navegador**: verificado sobre el bundle real de producción. El chat pasa
  por su función de servidor, no lleva la clave del modelo al cliente. Esto es lo correcto y no siempre
  ocurre.
- **La automatización ya funciona en un canal real**: Telegram está activo como canal de aprobación
  humana ("GENERA → PRESENTA (Telegram) → APRUEBA").

### 2.2 Lo que ata a Aitor a terceros (medido en su propio bundle)

| Dependencia externa | Evidencia | Qué se rompe si desaparece |
|---|---|---|
| **Lovable** | `oauth.lovable.app` y `aitor.lovable.app` aparecen **5 veces** en el JS en vivo | El login y los enlaces compartidos dejan de funcionar |
| `@lovable.dev/cloud-auth-js`, `@lovable.dev/mcp-js`, `lovable-tagger`, `src/integrations/lovable/`, `.lovable/` | `package.json` y árbol del repo | Auth y MCP |
| **Supabase** (proyecto `wkdtvrxavkhbifjtvvdw`) | 5 referencias en el bundle | Datos, auth, edge functions |
| **Vercel** | cabecera `server: Vercel` en todas las apps | Hosting y despliegue |
| **Proveedor LLM** | `src/lib/ai-models.ts` declara ids tipo `google/gemini-2.5-flash` con `provider: "ΔlieπFlΦw"` | **No hay modelo propio**: la inferencia es de terceros, se llame como se llame en la UI |
| APIs para automatizar | `AUTOMATIONS.md`: solo Telegram activo; X, LinkedIn, Instagram, Facebook, Discord, Farcaster, GitHub, HackMD y DoraHacks figuran como "Requiere API Key" | Publicación automática en esas redes |

Ya existe un `docs/lovable-supabase-migration.md` en el repo: el camino estaba identificado, pero **no
ejecutado**.

### 2.3 Veredicto honesto

**Aitor hoy no es independiente.** Depende de Lovable (auth), de Supabase y Vercel (infraestructura de
terceros, aunque de cuentas propias) y de un proveedor de inferencia externo. La regla que planteas
—"puede usar APIs externas, pero no depender de otras entidades o inteligencias"— se cumple en la forma
(sus agentes son suyos) y **no en el fondo** (el cerebro y el login son de otros).

Independencia alcanzable por tramos, en este orden:

1. **Auth propio** (el tramo más rentable): sacar `oauth.lovable.app` sustituyéndolo por Supabase Auth
   con la cuenta que ya es suya. Elimina la única dependencia que puede dejar a los usuarios fuera.
2. **Un solo proveedor LLM con clave propia** (OpenRouter/Google/Anthropic), elegido y pagado por la DAO,
   con la clave en el servidor. Sigue siendo externo, pero **es una API bajo su control**, no una
   entidad que decide por ellos.
3. **Modelo propio solo si hay GPU**: un modelo open-weights autoalojado (vLLM/Ollama en un servidor
   arrendado) es el único paso que elimina al proveedor. Es caro y solo tiene sentido cuando el tráfico
   justifique la factura.
4. **Multi-proveedor con conmutación** (último tramo): que Aitor pueda cambiar de proveedor sin tocar el
   código, para que ningún tercero tenga poder de veto sobre el sistema.

---

## 3. Flujos de ingresos: lo que existe y lo que falta medir

### 3.1 Lo que hay

| Pieza | Dónde | Estado real |
|---|---|---|
| Enlaces de afiliado | `Academy.tsx`, `Clubs.tsx`, `CoNetWorKing.tsx` (`AADS ?partner=2454032`, `lovable.dev/invite`, Bitget) | Publicados, sin `rel="sponsored"` |
| Tiers + checkout cripto | **AiTor**: `src/lib/tiers.ts`, `src/hooks/useCryptoCheckout.ts` | La única vía de cobro del ecosistema |
| Banner publicitario | `AlienFlowSpace/src/components/AdBanner.tsx` | **No se usa en ninguna página**; sin AdSense cargado |
| Newsletter | `NewsletterSubscription.tsx` | Honesto (no miente con "suscrito"), pero **sin endpoint configurado** → cae siempre al `mailto`, **no captura ningún lead** |
| Merch | `EcoProductCarousel.tsx` | Sin precio ni botón de compra: no hay ingreso posible |

### 3.2 El bloqueo de fondo: no hay nada que medir

- `@vercel/analytics` y `@vercel/speed-insights` están en las dependencias de AlienFlowSpace y **no se
  llaman en ninguna parte del código**. En AiTor no hay ninguna dependencia de analítica.
- En el HTML servido no aparece ningún script de medición (ni Vercel Insights, ni GA, ni AdSense).
- Por tanto: hoy **es imposible** saber visitas, origen, conversión o ingresos por app. "Resultados
  mensurables" no es un objetivo pendiente de esfuerzo, es un objetivo **sin instrumento**.

Orden de trabajo propuesto (impacto primero, esfuerzo bajo primero):

1. **Instrumentar antes de optimizar**: analítica en los 5 dominios (Vercel Analytics es inmediato: la
   cuenta ya existe) + eventos de conversión propios (clic en afiliado, apertura del chat, alta en
   newsletter, inicio de checkout). Sin esto, nada de lo demás se puede demostrar.
2. **Cerrar el newsletter**: configurar `VITE_NEWSLETTER_ENDPOINT` (o el proveedor que elijáis) y
   guardar el email en Supabase. Hoy se pierde el 100 % de los leads.
3. **Marcar los afiliados** con `rel="sponsored"` y medir clics: es ingreso que ya está en la página y no
   se está contando.
4. **Monetizar el merch**: precio + enlace de compra en los 7 productos (catálogo y fotos ya existen).
5. **Activar anuncios** solo cuando 1 esté funcionando: AdSense exige consentimiento (CMP) y métricas.
6. **Revisar el checkout cripto de AiTor** como producto de pago real (tiers), que es la única vía de
   ingresos recurrentes que ya está escrita.

---

## 4. Correcciones aplicadas en esta sesión

| # | Qué | Estado |
|---|---|---|
| 1 | El chat de AlienFlowSpace incrustaba `aitor.lovable.app` mientras el enlace apuntaba a `aitor.alienflow.space`. Ahora ambos leen una sola constante y el panel carga la app propia | ✅ desplegado y verificado en vivo (0 apariciones de `aitor.lovable.app` en los 73 chunks) |
| 2 | CSP de AlienFlowSpace: `frame-src` acepta `https://aitor.alienflow.space` (se mantiene Lovable como reversión de una línea) | ✅ verificado en la cabecera en vivo |

## 5. Pendiente, con su dueño

| Tarea | Dueño | Nota |
|---|---|---|
| `X-Frame-Options`/`frame-ancestors` en las 4 apps | Dev | Se hace en el `vercel.json` de cada repo de app |
| Conectar el repo AiTor a la sesión de trabajo | Propietario | Sin eso solo puedo auditarlo en lectura |
| Configurar analítica y endpoint del newsletter | Propietario (variables) + dev (código) | Requiere claves/cuentas |
| Sustituir `oauth.lovable.app` por Supabase Auth | Dev | Existe ya un `docs/lovable-supabase-migration.md` en AiTor |
| Decidir proveedor LLM único con clave propia | Propietario | Decisión de negocio: coste frente a dependencia |
