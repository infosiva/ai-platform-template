

## OWASP LLM Top 10 dispositions (gate item 45, 2026-10-07; list recalled from memory, unverified)
- LLM01 prompt injection: lib/guard.ts present, NOT yet wired into routes; no output filtering or tool sandbox review done. PARTIAL.
- LLM02 sensitive info disclosure: `redact()` helper available; not applied to every log. PARTIAL.
- LLM04/10 DoS / unbounded consumption: per-IP rate limit where present; token budgets not enforced. PARTIAL.
- LLM05 improper output handling: model output rendered as text; not audited for HTML sinks. UNVERIFIED.
- LLM06 excessive agency: no tool-calling agents audited. UNVERIFIED.
- Others (supply chain, poisoning, embeddings, misinformation): not assessed.


## ANIMATED SCOPE (gate items 19/21, 2026-10-07)
- Moves: aurora orbs in `.hc-bg` drift (22s/28s, ambient, transform only, purpose: depth/brand atmosphere); hero entry fade-up stagger (framer-motion, page load, once); before/after slider auto-reveal (explains the product); design-summary cross-fade every 3.2s (state indication); button press `scale(0.97)` 120ms ease-out `cubic-bezier(0.23,1,0.32,1)` (feedback); hover lift only under `(hover: hover) and (pointer: fine)`; FAQ expand.
- Trigger: load (ambient + entry), press/hover (interactive), timer (summary cross-fade, slider).
- Reduced motion: `@media (prefers-reduced-motion: reduce)` sets animation/transition durations to ~0, turns aurora off, removes press transform.
- Contrast (measured, scratchpad contrast.mjs): white on #e11d48 4.70; white on #be123c 6.29; ink-1/bg 17.2; ink-2/bg 9.06; ink-3 (#6f6963)/bg 5.19; ink-4 (#77716b)/white 4.82; rose-deep/bg 6.02; rose-deep/#fce8ea 5.35. Small text on pink uses rose-deep.
- Measured (Playwright, after last edit): 375x812 scrollWidth 375, CTA bottom 647 (above fold), 0 targets under 44px; 1280x800 scrollWidth 1280, CTA bottom 681, 0 targets under 44px. Nav links hidden under 520px (Try free stays).
- Impeccable audit (detect): only `overused-font` (Inter body, pre-existing, kept; headings Outfit). Known caveats: emoji in style chips; fixed Feedback pill/FAB overlap bottom edge; DESIGN.md says #6366f1 but page uses rose (hub theme overrides).
SKILL-STACK: done
