

# Fix Loading Screen Issue

## Problem
`Index.tsx` has **8 separate `Suspense` boundaries**, each with its own `LoadingScreen` fallback. When the page loads, all 8 lazy components load simultaneously, showing **8 stacked loading screens** instead of content.

## Solution
Use a **single Suspense boundary** wrapping all lazy-loaded sections, showing one loading screen while everything loads together.

## Changes

### `src/pages/Index.tsx`
- Wrap all lazy components in **one** `<Suspense fallback={<LoadingScreen />}>`
- Keep lazy imports for code-splitting benefits
- Content appears together once loaded

```tsx
<Suspense fallback={<LoadingScreen />}>
  <Hero />
  <FinancialFreedomSection />
  <ExploreSpacesSection />
  {/* ... all sections */}
</Suspense>
```

## Result
- Single loading animation while content loads
- No more stacked loading screens
- Same user experience as before

