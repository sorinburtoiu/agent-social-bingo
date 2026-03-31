---
name: Cyberpunk Design Guide
description: "Use when redesigning or extending the UI for this app, especially for landing screens, game screens, bingo boards, modals, or visual polish work. Covers the project's cyberpunk neon / terminal noir direction, motion, typography, and mobile-first board constraints."
applyTo: ["src/components/**/*.tsx", "src/App.tsx", "src/index.css"]
---

# Cyberpunk Neon Design Guide

- Keep the app in a terminal-noir cyberpunk neon direction, not a generic SaaS or soft gradient style.
- Preserve the existing gameplay loop: start screen, game board, and bingo modal. Visual changes can be bold, but flow changes should be minimal unless explicitly requested.
- Protect the mobile-first board footprint. Decorative framing must not shrink the 5x5 grid so much that prompt text becomes hard to read.
- Treat the board as the focal surface. If layout space gets tight, reduce surrounding chrome before reducing square readability.

## Visual System

- Build the theme centrally in `src/index.css` with Tailwind v4-friendly tokens and reusable CSS variables.
- Use a distinctive web-loaded display font when it strengthens the concept, with practical fallbacks.
- Favor one dominant neon accent and one secondary signal color. Avoid muddy multi-accent palettes.
- Layer backgrounds with gradients, glows, grids, scanlines, or HUD framing instead of flat fills.
- Prefer cohesive panel, border, and glow treatments over one-off effects inside individual components.

## Motion

- Use motion for high-impact moments: screen entrance, CTA feedback, square activation, and bingo celebration.
- Keep ambient animation restrained. Constant motion should never compete with board interaction.
- Prefer CSS-first motion unless a React animation library is already established.
- Always include reduced-motion fallbacks for custom animation.

## Component Guidance

- Start screens should feel like a strong themed entry point, not a plain settings card.
- Game screens should read like a compact tactical HUD with clear status and instructions.
- Bingo squares need clearly differentiated default, marked, free-space, and winning states.
- Dense prompt text must remain legible inside squares. Optimize spacing, line-height, and contrast before adding ornament.
- Bingo modals should feel celebratory and in-universe, not like a default alert dialog.

## Avoid

- Default gray Tailwind surfaces as the final design language.
- Generic AI-aesthetic layouts, especially interchangeable hero cards and safe dashboard patterns.
- Overused font stacks like plain Inter, Arial, or system UI when a stronger display choice is appropriate.
- Decorative effects that weaken readability, focus visibility, or tap targets.

## Working Pattern

- Establish or extend tokens in `src/index.css` first.
- Then restyle screens and shared board elements so the visual language stays coherent.
- Verify the result with `npm run lint`, `npm run test`, and `npm run build` after UI changes.