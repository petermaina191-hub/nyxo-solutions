# Nyxo Solutions — website source

Real Next.js App Router files (TypeScript), split so you can work on each
piece independently in VS Code. This replaces the single-file prototype.

## Folder structure

```
app/
  globals.css        global styles: tokens, glass, buttons, hover effects, grain, grid texture
  layout.tsx          root layout — wraps every page in NavBar + Footer + backdrop
  page.tsx             Home
  services/page.tsx    Services (11-category gradient grid)
  login/page.tsx        Login
  signup/page.tsx       Signup
  contact/page.tsx      Contact

components/
  Logo.tsx              brand mark + wordmark
  Button.tsx             shared button (renders as <Link> if you pass href)
  GlassCard.tsx          glass panel with the cursor-spotlight hover effect
  TechBackdrop.tsx       ambient grid + glow orbs (site-wide background)
  ConstellationField.tsx hand-coded Canvas 2D particle network (hero only)
  NavBar.tsx             sticky nav, active-link underline, mobile menu
  Footer.tsx
  SocialRow.tsx          Google / GitHub / Facebook / LinkedIn / Instagram buttons
  Field.tsx              icon-prefixed input
  AuthShell.tsx          shared card layout for Login/Signup
  ServiceCard.tsx         expandable, gradient-accented service card

data/
  services.ts            the 11 services + tiers + pricing, typed
```

## Setting this up

1. If you don't already have the project scaffolded:
   `npx create-next-app@latest nyxo-solutions --typescript --app`
2. Drop these `app/`, `components/`, and `data/` folders into your project
   root, replacing the generated ones.
3. Install icons: `npm install lucide-react`
4. Confirm your `tsconfig.json` has the `@/*` path alias (the default
   `create-next-app` setup already includes this):
   ```json
   "paths": { "@/*": ["./*"] }
   ```
5. `npm run dev`

## What changed from the single-file prototype

- **Real routes, not tabs.** Every page previously lived behind a
  `setPage()` state switch in one file. Now `/`, `/services`, `/login`,
  `/signup`, and `/contact` are actual Next.js routes using `next/link`
  and `usePathname` for the active nav state — this is what you'll
  actually deploy.
- **Premium hover system**, all CSS/canvas, none of it heavy:
  - Cards get a cursor-following soft glow (`GlassCard`'s spotlight),
    driven by `mousemove` events — not an animation loop, so it costs
    nothing when your mouse isn't over a card.
  - Nav links get an animated underline; the primary button has a
    subtle shimmering gradient on hover.
  - A faint blurred circuit-grid pattern and two slow-drifting glow
    orbs sit behind every page (`TechBackdrop`), plus a barely-there
    grain texture for a less "flat" feel — all static CSS/keyframes,
    GPU-composited, no JS render loop.
  - Everything respects `prefers-reduced-motion`.
- **No video background.** For your actual audience — Kenyan SME
  owners often on mobile data — a background video adds real download
  weight and battery drain for a purely decorative effect. The canvas
  constellation + CSS ambiance gets you most of the "alive" feeling
  premium sites have, at a fraction of the cost.

## Still placeholder / needs your attention

- **Social login buttons don't do anything yet.** Wire each one to
  Supabase's `signInWithOAuth({ provider: '...' })` once auth is
  connected — see the comment in `SocialRow.tsx`.
- **Forms don't submit anywhere.** Login/Signup/Contact are styled but
  not wired to a backend yet.
- **Prices in `data/services.ts` are starting-point placeholders** —
  sanity-check them against real competitor pricing before this goes
  live.
