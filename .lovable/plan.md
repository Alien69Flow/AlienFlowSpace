
# Fix Loading Issues + Modest UI Polish for Academy, Clubs, CoNetWorKing

## Root Cause of Loading Issue

The `LoadingScreen` component is **full-screen with `fixed inset-0 z-[99999]`**, covering the entire viewport. When used in `Suspense` fallback for 8 lazy components, it blocks the UI forever as each component triggers this overlay.

## Solution

### 1. Fix LoadingScreen (`src/components/LoadingScreen.tsx`)
Replace full-screen takeover with a lightweight inline skeleton:
- Remove `fixed inset-0` positioning
- Simple centered spinner with logo pulse
- No z-index override — fits naturally in layout

### 2. Academy Page Polish (`src/pages/Academy.tsx`)
Modest improvements, keeping readability:
- Standardize card backgrounds to `bg-black/50 backdrop-blur-md` (not heavy blur)
- Add subtle `hover:border-alien-gold/50` transitions
- Keep existing structure — no major layout changes

### 3. Clubs Page Polish (`src/pages/Clubs.tsx`)
- Add `motion.div` entry animations to club cards (staggered fade-in)
- Standardize search bar styling with subtle border glow
- Category filter pills with active state highlight

### 4. CoNetWorKing Page Polish (`src/pages/CoNetWorKing.tsx`)
- Add section header animations (slide up on scroll)
- Partner cards with subtle scale hover effect
- Service cards already have hover effects — keep them

## Files Changed
| File | Change |
|------|--------|
| `src/components/LoadingScreen.tsx` | Inline spinner (fix blocking issue) |
| `src/pages/Academy.tsx` | Card hover polish |
| `src/pages/Clubs.tsx` | Entry animations, filter styling |
| `src/pages/CoNetWorKing.tsx` | Section animations |

All changes use existing dependencies. No heavy glass effects — prioritizing readability and responsiveness.
