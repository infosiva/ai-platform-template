# DESIGN — AI Platform Template
Source of truth: `agents/design-system` (MASTER.md). This file is the project pointer.

- Accent: `#6366f1` on bg `#fafaf9` (template default; each deployment sets its own accent in `vertical.config.ts`)
- Layout/palette/bg animation/GA4/flags: overridable by the hub via Edge Config `theme_template` (loaded by `lib/theme-loader.ts`, applied in `app/layout.tsx`); hub values win over the defaults here.
- Background: `components/AnimatedBg.tsx` (hub `layout.bgAnimation`, reduced-motion safe, default `none` = unchanged look).
- Logo: `components/Logo.tsx`; favicon is a static icon (no `app/icon.tsx`).

## AI platform (ai-core) status
Template exemption: `lib/ai.ts` is the canonical free-chain gateway for forks. ai-core adoption (upload/RAG/limits) is decided per product at fork time and recorded in that product HANDOFF.md.
