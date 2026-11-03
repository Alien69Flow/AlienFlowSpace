# Newsletter: cómo queda conectado

El formulario de `alienflow.space` guarda direcciones de verdad, y solo dice «estás dentro»
cuando el servidor lo confirmó.

```
Navegador  ──POST {email}──▶  /api/newsletter  ──api-key──▶  Brevo
           (mismo origen,        (Vercel, clave
            sin secretos)         solo en el servidor)
```

## Qué hace cada pieza

| Pieza | Responsabilidad |
|---|---|
| `src/components/NewsletterSubscription.tsx` | Formulario. No muestra éxito nunca por su cuenta. |
| `src/lib/newsletter.ts` | Reglas: valida, llama al endpoint, interpreta la respuesta. |
| `api/newsletter.ts` | Función de Vercel. Único sitio donde vive `BREVO_API_KEY`. |

Comportamiento garantizado por el contrato:

- **200** solo si Brevo aceptó el contacto (o si ya estaba: entonces se le dice tal cual).
- **400** dirección inválida → mensaje para corregirla.
- **429** demasiados intentos desde esa conexión → mensaje y espera.
- **503 `not_configured`** falta configuración → el formulario cae al **modo reserva** (`mailto:`
  rellenado) y avisa por consola en desarrollo. Nunca finge un alta.
- **415/405** solo se acepta `POST` con `Content-Type: application/json` (un formulario de terceros
  no puede enviar aquí sin preflight).

## Puesta en marcha (5 minutos, todo en Brevo + Vercel)

1. Crea cuenta en Brevo y una lista (Contacts → Lists). Anota su id numérico.
2. Brevo → SMTP & API → API Keys → crea una clave con permiso de contactos.
3. En Vercel → Project → Settings → Environment Variables, añade para *Production* y *Preview*:
   - `BREVO_API_KEY` (secreto)
   - `BREVO_LIST_ID` (número)
   - `BREVO_DOI_TEMPLATE_ID` (opcional, recomendado en la UE)
4. Redeploy. El formulario empieza a guardar sin tocar código.

Nada de esto va en variables `VITE_`: esas viajan dentro del bundle y las lee cualquiera.

## Doble opt-in (recomendado)

Con `BREVO_DOI_TEMPLATE_ID` definido, `api/newsletter.ts` llama a
`POST /v3/contacts/doubleOptinConfirmation` con `includeListIds`, `templateId` y
`redirectionUrl`. Brevo envía el correo de confirmación y el contacto entra en la lista solo al
pinchar. Sin esa variable se usa `POST /v3/contacts` con `updateEnabled: true`, y la pantalla de
éxito lo dice con honestidad: «te hemos guardado», no «te hemos enviado un correo».

## Límites conocidos

- El freno antiabuso es **en memoria y por instancia**: sirve de contención barata, no de cuota
  real. Si aparece spam, el siguiente paso es un contador compartido (Upstash/Vercel KV).
- En `vite dev` no hay funciones de Vercel: el formulario sigue en modo reserva. El endpoint se
  prueba compilándolo y llamándolo con un `fetch` simulado (ver más abajo).
