

# Plan de Actualización Integral: AlienFlowSpace dApp

---

## Problemas Identificados

1. **Botón AI Tor se superpone con ScrollToTop** - Ambos en `bottom-6/8 right-6/8`, z-index conflictivo
2. **Chat AI Tor muy pequeño al abrirse** - El iframe de aitor.lovable.app apenas muestra contenido útil
3. **Falta opción para abrir AI Tor en URL completa** - No hay botón "Open in new tab"
4. **Menú sin enlaces a Telegram MiniApp (ACE/AGameFlow) ni AlienTrip directo**
5. **Logos de partners en Academy** - Varios externos (Meslo, Motus DAO, My DNA Bank) probablemente rotos (URLs inventadas)
6. **Wallet Connect button** - Funcionalidad básica pero sin feedback visual claro ni manejo de errores robusto

---

## Cambios a Implementar

### 1. Fix Botón AI Tor vs ScrollToTop (Solapamiento)

**`src/components/ScrollToTop.tsx`**: Mover a `bottom-8 left-8` (esquina inferior izquierda) para evitar conflicto con AI Tor que está en `bottom-6 right-6`.

**`src/components/AIChatbot.tsx`**:
- Añadir botón "Open Full" (ExternalLink icon) en el header del chat que abre `https://aitor.lovable.app/` en nueva pestaña
- Aumentar tamaño del chat window: `h-[80vh] max-h-[700px]` y `sm:w-[420px] md:w-[480px]`
- Mejorar el header con botón de expandir a pantalla completa

### 2. Menú: Nuevos enlaces

**`src/components/Header/DesktopNav.tsx`** y **`src/components/Header/MobileNav.tsx`**:
- Añadir en el dropdown "EXPLORE SPACES" un separador y sección "APPS" con:
  - **ACE AGameFlow** → enlace externo a la Telegram MiniApp (necesito URL, usaré placeholder `https://t.me/AlienFlowBot`)
  - **AlienTrip** ya está en navLinks principales, verificar que funcione

### 3. Academy Partners - Fix logos rotos

**`src/pages/Academy.tsx`**:
- **HEALTHFLOW**: Reemplazar URLs inventadas (meslo.com/logo.svg, motusdao.io/logo.svg, mydnabank.com/logo.png) por iconos Lucide como fallback visual (Heart, Activity, Dna) ya que no existen logos verificables
- **SPACEFLOW**: SpaceX logo de Wikipedia puede fallar por CORS; usar fallback con `onError`
- Mejorar el diseño de la sección partners: aumentar tamaño de logos a `w-11 h-11`, mejorar spacing
- Añadir título de sección más prominente con icono

### 4. Wallet Connect - Mejoras

**`src/components/Header/ConnectButton.tsx`**:
- Simplificar el layout del AI Key (quitar show/hide, mostrar solo icono de copia)
- Mejorar feedback visual del estado de conexión
- Añadir indicador de red (network badge)
- Fix: el componente `regenerateAIKey` se importa pero no se usa en el render

### 5. UI/UX Global Polish

**Todos los archivos afectados**:
- Consistencia en rounded corners (`rounded-2xl`)
- Hover transitions uniformes (`hover:scale-[1.01] transition-all duration-300`)
- Mejorar contraste de textos sobre fondos oscuros

---

## Archivos a Modificar

| Archivo | Cambio Principal |
|---------|-----------------|
| `src/components/ScrollToTop.tsx` | Mover a esquina inferior izquierda |
| `src/components/AIChatbot.tsx` | Botón "Open Full", tamaño mayor, UI mejorada |
| `src/components/Header/DesktopNav.tsx` | Añadir sección APPS en dropdown |
| `src/components/Header/MobileNav.tsx` | Añadir sección APPS en acordeón |
| `src/pages/Academy.tsx` | Fix logos rotos, mejorar diseño partners |
| `src/components/Header/ConnectButton.tsx` | Simplificar, mejorar feedback |

---

## Pregunta Pendiente

Necesito la URL exacta de la Telegram MiniApp de ACE AGameFlow para el menú. Si no la tienes, usaré un placeholder que puedas actualizar después.

