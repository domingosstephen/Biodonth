# Biodonth — Project Brain

## Identity
- Client: Biodonth Odontologia Integrada
- Location: Artur Alvim, São Paulo, Brazil
- Sector: Premium integrated dentistry
- Audience: Adult Brazilian patients (PT-BR) seeking modern, high-quality dental care
- Positioning: Luxury wellness, NOT clinical. Closer to a high-end skincare clinic or Italian spa than a typical dental practice.

## Visual DNA
The brand is anchored in two sources:
1. Physical space: Bronze/antique-gold logo on textured marmorino (Venetian plaster) grey walls. Light oak reception desk. Warm metal on cool stone.
2. Existing Instagram (@biodonthodontologia): Editorial layouts with bronze serif headlines, tracked-out caps frames, and bronze-bordered image cards.

The website must feel like a seamless extension of the existing Instagram visual language. When a patient sees a post and clicks through, the experience is continuous.

## Language
Brazilian Portuguese ONLY. No English in any user-facing string — not in nav, buttons, error messages, form labels, alt text, or microcopy. Voice: warm, refined, confident, professional, never salesy, never overly clinical.

## Stack
- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first config via @theme in globals.css)
- next/font/google for fonts
- motion (framer-motion) for animation
- lucide-react for icons
- clsx + tailwind-merge for className composition

## Brand Tokens

### Colors (use Tailwind semantic names, never hex inline)
| Token | Hex | Usage |
|---|---|---|
| bronze | #A8824D | Primary brand. CTAs, key emphasis, display headlines. |
| bronze-light | #C9A372 | Hover states, fine accents |
| bronze-dark | #8B6A3E | Pressed/active states |
| charcoal | #2A2B2D | Primary text, anchors, dark sections |
| shadow | #1A1B1D | Deepest dark, overlays, footer |
| marmorino | #8E8F91 | Secondary text, frame text, dividers |
| marmorino-light | #B8B9BB | Borders, subtle dividers |
| concrete | #F5F3EF | Default canvas background |
| concrete-warm | #EDE9E1 | Section variation |
| pure | #FFFFFF | Elevated surfaces (cards, modals) |

### Typography
- Display: Instrument Serif (Google Fonts, free). For all headings, hero typography, editorial moments.
- Body: Inter (Google Fonts, variable). For all body copy, UI labels, navigation, frame text.
- Never introduce a third font.
- Instrument Serif italic is used for emphasis and tagline moments (matching the calligraphic italic in Biodonth's Instagram posts).
- Note: If at any point the brand requires a closer match to the exact Instagram font, the upgrade path is PP Editorial New or Reckless Neue. Swap is a single line change in layout.tsx.

### Type rules
- Sentence case ALWAYS — never Title Case, never ALL CAPS body copy.
- Two exceptions where uppercase IS used:
  1. `Frame` component text (BIODONTH ODONTOLOGIA top/bottom framing) with tracking-[0.4em] in marmorino
  2. `eyebrow` heading level with tracking-[0.18em] in bronze
- Body font-weight max 500. Display max 400 (the font is designed for that weight).
- Line-height: 1.6 body, 1.05–1.2 display.

## Signature Components (encode the existing Instagram visual language)

### Frame
Renders the tracked-out caps "BIODONTH ODONTOLOGIA" device at top, bottom, or both of a section. This is a signature brand element pulled directly from their Instagram posts.

### DisplayHeadline
The core editorial headline pattern. Combines:
1. A bronze regular line
2. An optional bronze italic line below
3. An optional marmorino body-sans subhead below
All sentence case, all left or center aligned. Every hero and major section headline on the site should use this component to stay consistent with the established brand voice.

### FramedImage
An image wrapped in a thin bronze border. Used for hero imagery, service showcases, before/after editorial moments. Matches the Instagram bronze-bordered image card device.

### Button variant="pill" (or PillBadge)
Rounded-full bronze CTA used as secondary action below the primary headline. Matches the bronze pill in Instagram post slide 5. PillBadge is a convenience wrapper around Button variant="pill".

## Design Principles
1. Generous whitespace. Premium = breathing room, not density.
2. Texture as accent, never noise. Subtle plaster effects in backgrounds — never behind body text.
3. Bronze is precious. Use like real metal — sparingly, with intent. Display headlines, primary CTAs, key brand moments only.
4. Large, confident typography. Display sizes should feel cinematic.
5. Motion is quiet. Subtle fades, slow reveals, --ease-premium curve. NO bouncy springs, NO heavy parallax, NO scroll-jacking.
6. No clinical tropes. No blue/green "trust" colors. No tooth illustrations as decoration. No stock white-teeth-zoom photos. No "since 2010" badges.
7. Functional UX always wins. Beautiful AND fast. Lighthouse target: 95+.

## File Structure
```
src/
  app/              # Next.js App Router pages
  components/
    ui/             # Primitives (Button, Container, Section, Heading, Frame, DisplayHeadline, FramedImage, PillBadge)
    layout/         # Nav, Footer
    sections/       # Composed page sections
  lib/              # Utilities (cn)
  content/          # PT-BR copy, centralized
public/
  brand/            # Logo SVGs
```

## Workflow Rules
- All new composed sections go in src/components/sections/.
- Centralize reused copy in src/content/.
- Never hardcode hex colors in components — use tokens (bg-bronze, text-charcoal).
- Never introduce new fonts.
- Never use English in user-facing strings.
- Verify PT-BR diacritics render correctly (ç, ã, õ, é, í, ó, ú, â, ê).
- Mobile-first responsive. Minimum tested width: 375px.
- Semantic HTML. Proper heading hierarchy. Alt text on all images. Focus states on all interactive elements.
- Use signature components (Frame, DisplayHeadline, FramedImage, PillBadge) wherever the pattern fits — these are how the website stays continuous with the existing brand.

## Logo Assets
Two source SVG files live in `/public/brand/`:
- `logo-full.svg` — full lockup (symbol + BIODONTH wordmark + "odontologia integrada" tagline)
- `logo-mark.svg` — symbol only, for compact contexts (nav at small sizes, favicon, social avatar)

Both files use `fill="currentColor"` throughout. **Color is controlled via CSS**, not by swapping files.
Use the SVG inline (recommended) or via next/image, and set color via Tailwind:
- Bronze on light bg: `text-bronze`
- White on dark bg: `text-pure`
- Charcoal alternate: `text-charcoal`
- Hover transitions: `transition-colors duration-300 hover:text-bronze-light`

For inline SVG use (preferred — enables CSS color control and avoids extra HTTP request), import via:
```tsx
import Logo from '@/../public/brand/logo-full.svg';
```
This requires `@svgr/webpack` or Next.js's built-in SVG support configured in `next.config.ts`. If not yet configured, add the configuration step to the Logo component build.

If a referenced logo file is not yet present, render a placeholder with the text "BIODONTH" in Instrument Serif and add a TODO comment in the component.

## Reference-Driven Build Process
This site is being built by analyzing reference websites section by section. Each new build command will specify:
- The reference site URL
- What specifically to copy (layout, animation, hierarchy, interaction pattern)
- How to translate it into Biodonth's brand system

Copy the STRUCTURE and PATTERN — never the actual visual style. The brand tokens and signature components in this file are the only source of truth for color, type, tone, and brand devices.
