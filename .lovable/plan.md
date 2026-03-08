

## Plan: Navigation Typography/Logo Fix + ColorBends Rendering Fix

### What's happening

**Prompt 1 — Nav typography and logo:**
- Nav link items currently use `text-xs font-normal text-foreground` — need exact Apple styling: `font-size: 12px`, `font-weight: 400`, `letter-spacing: -0.01em`, `color: rgba(255,255,255,0.85)`
- Logo wordmark "AUTOBIT" currently `text-[17px] font-bold tracking-[1px]` — change to `font-size: 18px`, `font-weight: 600`, `letter-spacing: 0.08em`, `color: #ffffff`
- Need a flat solid white 18x18 SVG icon beside the wordmark
- Apply SF Pro font stack globally to body text

**Prompt 2 — ColorBends not rendering:**
- The component code and CSS exist but the CSS lacks `position: absolute; inset: 0`
- The hero wrapper needs `min-height: 100vh` (currently `min-h-[600px]`)
- The ColorBends wrapper div has `pointer-events-none` which may interfere; should pass style props directly

### Changes

**1. `src/components/Navbar.tsx`**
- Logo: Change to `text-[18px] font-semibold tracking-[0.08em] text-white` and add an inline flat white SVG icon (18x18) — a simple geometric mark (e.g., a bolt/square shape representing AUTOBIT)
- Nav links: Change from `text-xs font-normal text-foreground` to explicit inline style or classes for `font-size: 12px`, `font-weight: 400`, `letter-spacing: -0.01em`, `color: rgba(255,255,255,0.85)`
- "Start a project" right-side link: same 12px styling

**2. `src/index.css`**
- Update the `body` rule to include the SF Pro font stack: `font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', sans-serif`
- Already has this — just confirm it's applied consistently. The heading font stack is already set.

**3. `src/components/ColorBends.css`**
- Add `position: absolute; inset: 0;` to `.color-bends-container`

**4. `src/components/home/HeroSection.tsx`**
- Change hero section to `min-h-screen` (100vh)
- Remove the wrapper `<div>` around ColorBends; instead pass style props directly to ColorBends with `position: absolute, inset: 0, width: 100%, height: 100%, zIndex: 0`
- Use updated colors from prompt: `["#1a1a1a", "#222222", "#0d0d0d", "#111111"]`

