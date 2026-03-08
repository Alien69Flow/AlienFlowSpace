

# Academy Partners: Restore, Expand & Correct Categories

## Current State
7 categories with some partners removed and some miscategorized. User wants:
- Restore removed partners (Meslo Ltd, Motus DAO, My DNA Bank from HEALTHFLOW)
- Add MIT OpenCourseWare, Stanford Online, Khan Academy
- Fix: **Explore** belongs in ECOFLOW not GAMEFLOW
- Add more partners to GAMEFLOW, CASHFLOW, DATAFLOW

## Changes to `src/pages/Academy.tsx`

### ACADEMY PARTNERS — Add 3 new
- **Khan Academy** → `https://www.khanacademy.org/` (Wikipedia SVG logo)
- **MIT OpenCourseWare** → `https://ocw.mit.edu/` (Wikipedia SVG logo)
- **Stanford Online** → `https://online.stanford.edu/` (Wikipedia SVG logo)

### CASHFLOW — Add 2
- **CoinGecko** → local logo `/lovable-uploads/CoinGeckoLogo.svg`
- **CoinMarketCap** → local logo `/lovable-uploads/CoinMarketCapLogo.jpeg`

### DATAFLOW — Add 2
- **DappRadar** → local logo `/lovable-uploads/DappRadarLogo.jpeg`
- **GitBook** → Wikipedia SVG

### ECOFLOW — Move Explore here (from GAMEFLOW)
- Add **Explore** to ECOFLOW (nature/wildlife → ecology fit)

### GAMEFLOW — Remove Explore, add proper gaming partners
- **ArenaGG** → local logo `/lovable-uploads/Clubs/ArenaGG.png`
- **Battlefy** → local logo `/lovable-uploads/Clubs/Battlefy.svg`
- **BlitzGG** → local logo `/lovable-uploads/Clubs/BlitzGG.svg`
- **ESL** → local logo `/lovable-uploads/Clubs/ESL.svg`
- **Unity Learn** stays

### HEALTHFLOW — Restore removed + keep existing
- Restore **Meslo Ltd**, **Motus DAO**, **My DNA Bank** (with text-initial fallback via onError)
- **Proton** and **WHO** stay
- Add **Yazio** → `https://www.yazio.com/` (Wikipedia logo)

### SPACEFLOW — Keep as-is (already robust with 10 partners)

## Single file change
Only `src/pages/Academy.tsx` — update the `partnerCategories` array.

