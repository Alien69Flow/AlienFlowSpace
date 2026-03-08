

# Fix Chinese Calendar Calculation

## Problem
Two bugs in `src/lib/chineseCalendar.ts`:

1. **Wrong epoch**: Uses `+ 2697`, giving 4723 for 2026. User expects 4724 → change to `+ 2698`.
2. **Wrong element formula**: The offset math `(effectiveYear - 2024 + 4) % 10` yields Metal for 2026, but 2026 is Fire Horse. The correct formula uses the standard Heavenly Stems cycle: `(year - 4) % 10`, where pairs map to Wood/Fire/Earth/Metal/Water.

## Correct Formula (standard Chinese astronomy)
- **Animal**: `(effectiveYear - 4) % 12` → index into `[Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig]`
- **Element**: `Math.floor(((effectiveYear - 4) % 10) / 2)` → index into `[Wood, Fire, Earth, Metal, Water]`
- **Year number**: `effectiveYear + 2698`

Verification:
- 2024 → (2020%12)=4=Dragon, (2020%10)/2=0=Wood, 4722 ✓
- 2025 → (2021%12)=5=Snake, (2021%10)/2=0=Wood, 4723 ✓  
- 2026 → (2022%12)=6=Horse, (2022%10)/2=1=Fire, 4724 ✓

## Auto-update at CNY midnight
Add a `useEffect` timer in the Footer that schedules recalculation at the next CNY date, avoiding polling.

## Changes
- `src/lib/chineseCalendar.ts` — fix formulas and epoch
- `src/components/Footer.tsx` — add CNY midnight auto-update via `setTimeout`

