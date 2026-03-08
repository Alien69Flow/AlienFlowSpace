

# Plan: Fix Navigation, Apps Buttons, Academy Partners & Wallet Config

## Issues Found

1. **AlienTrip missing from DesktopNav** — It was removed from `navLinks` in DesktopNav (only exists inside the APPS dropdown). MobileNav still has it in navLinks.

2. **Apps placement** — You want AGameFlow and AlienTrip as icon buttons next to the wallet/portal buttons in the header bar (ConnectButton area), not inside the Explore Spaces dropdown.

3. **Academy partners** — Some logos use external URLs that may be broken (CORS), HEALTHFLOW partners use Lucide fallback icons instead of real logos. Categories can be improved.

4. **Wallet "Invalid App Configuration"** — The console shows `WebSocket connection closed abnormally with code: 3000 (Unauthorized: origin not allowed)`. This means the Reown/WalletConnect project (ID: `ced40e4d52234c471808977208586c7e`) does not have the Lovable preview domain (`*.lovable.app` / `*.lovableproject.com`) whitelisted in its allowed origins. **This must be fixed in the Reown Cloud dashboard** at https://cloud.reown.com — you need to add these domains to the project's allowed origins:
   - `alienflowspace.lovable.app`
   - `*.lovableproject.com`
   - `id-preview--83ea2c39-5424-4ac2-b26f-e00df7bb6c06.lovable.app`

## Changes

### 1. `src/components/Header/ConnectButton.tsx`
Add two new icon buttons (AGameFlow + AlienTrip) next to the existing wallet and portal buttons:
- **AGameFlow** → external link to `https://agameflow.lovable.app` with Gamepad2 icon
- **AlienTrip** → external link to `https://alientrip.lovable.app` with Rocket icon
- Same circular button styling as wallet/portal buttons

### 2. `src/components/Header/DesktopNav.tsx`
- Remove the APPS section from the Explore Spaces dropdown (keep only Academy, Clubs, CoNetWorKing)
- Remove the `DropdownMenuSeparator` and apps rendering code

### 3. `src/components/Header/MobileNav.tsx`
- Remove the APPS section from inside the Explore Spaces accordion
- Keep AlienTrip in main navLinks (it's already there)

### 4. `src/pages/Academy.tsx` — Partners cleanup
- Fix HEALTHFLOW: remove partners without real logos (Meslo Ltd, Motus DAO, My DNA Bank) or replace with verifiable partners that have real logos
- Remove external Wikipedia URLs for logos (CORS issues) — use text-based fallbacks or verified local assets
- Ensure all categories have correct partner assignments

### 5. Wallet fix
- **User action required**: Go to https://cloud.reown.com, open project `ced40e4d52234c471808977208586c7e`, and add the Lovable domains to allowed origins. This cannot be fixed from code.

## Files Modified
| File | Change |
|------|--------|
| `src/components/Header/ConnectButton.tsx` | Add AGameFlow + AlienTrip icon buttons |
| `src/components/Header/DesktopNav.tsx` | Remove APPS section from dropdown |
| `src/components/Header/MobileNav.tsx` | Remove APPS section from accordion |
| `src/pages/Academy.tsx` | Fix broken partner logos, clean categories |

