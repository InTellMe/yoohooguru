# YooHoo.Guru Brand Vision (Premier)

## Theme Config (tailwind.config.js)
Luxury palette and typography are now defined in Tailwind. Highlights:

- Typography: Inter for body, Playfair Display for hero and premium headings.
- Palette: deep neutrals with metallic accents for a luxury signal.
- Shadows: soft depth plus gold glow for premium CTAs.

Tailwind excerpt:
```js
extend: {
  colors: {
    luxury: {
      obsidian: '#0b0f19',
      midnight: '#0f172a',
      noir: '#111827',
      graphite: '#1f2937',
      pewter: '#6b7280',
      pearl: '#f7f2e8',
      champagne: '#f1d7a1',
      gold: '#d4af37',
      rose: '#e7c3b2',
      platinum: '#e5e7eb'
    },
    gold: {
      300: '#f6e3a1',
      400: '#e7c96f',
      500: '#d4af37',
      600: '#b8912c'
    }
  },
  fontFamily: {
    display: ['\"Playfair Display\"', 'serif'],
    sans: ['Inter', 'sans-serif']
  },
  boxShadow: {
    'luxe-soft': '0 16px 40px rgba(11, 15, 25, 0.35)',
    'luxe-gold': '0 0 32px rgba(212, 175, 55, 0.25)'
  }
}
```

## Layout Refactor Plan (Layout.tsx)
Goal: create a single, consistent visual hierarchy across pages with a premium
shell, page transitions, and intentional whitespace.

**Proposed file:** `apps/main/components/layout/Layout.tsx`

Structure:
```
<Layout variant="premier" hero={...} cta={...}>
  <SkipToContent />
  <Header />
  <SubNav optional />
  <motion.main id="content">
    {heroSlot}
    <Section className="py-16 lg:py-24">...</Section>
    <Section className="py-16 lg:py-24">...</Section>
    {ctaSlot}
  </motion.main>
  <Footer />
</Layout>
```

Layout principles:
- Premium hero zone with glass panels and large negative space.
- Consistent max width and grid rhythm (8pt scale).
- Clear hierarchy: hero > featured content > proof > CTA.
- Slots allow content hubs to keep identity without breaking the shell.

## Motion and Micro-Interactions (framer-motion)
Plan:
- Page transitions via `AnimatePresence` and `motion.main` in `_app.tsx`.
- Micro-interactions on premium buttons, cards, and hero stats.
- Respect `prefers-reduced-motion` by reducing duration and disabling non-essential motion.

## Accessibility Checklist (Hero Section)
Specific, WCAG AAA focused upgrades for `apps/main/components/sections/HeroSection.tsx`:
1. Add a visible skip-link target (`id="content"`) and ensure SkipToContent
   points to it.
2. Provide `aria-label` and `aria-describedby` for the "Watch How It Works"
   button, and mark the play icon as `aria-hidden="true"`.
3. Ensure CTA buttons meet 7:1 contrast in both default and hover states.
4. Add a high-contrast toggle for Hero and Heroes hubs; persist in localStorage.
5. Disable non-essential animations when `prefers-reduced-motion` is set.
6. Treat decorative background gradients as `aria-hidden` and avoid focus.
7. Enforce visible focus rings on primary and secondary CTAs.
8. Provide text alternatives for emoji badges (sr-only text).
9. Confirm the hero `h1` is unique and the subheading is a plain `p`.
