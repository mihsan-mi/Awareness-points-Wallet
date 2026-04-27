# Aesthetic Manifest: Journalism in AI Age

This document defines the two primary visual protocols used across the project's artifacts. 

## 1. PROTOCOL: VOID (Cyberpunk / Surveillance)
**Usage:** High-stakes data interfaces, article readers, and AI hubs.
**Vibe:** Aggressive, high-tech, nocturnal, and high-contrast.

### Color Palette (CSS Variables)
```css
:root {
    --bg-void:        #05070B;
    --bg-panel:       rgba(255, 255, 255, 0.03);
    --verify-cyan:    #00E5FF; /* Action/Primary */
    --aware-amber:    #FF9E00; /* Warning/Secondary */
    --border-dim:     rgba(255, 255, 255, 0.07);
    --text-primary:   #E8EDF4;
    --text-muted:     rgba(232, 237, 244, 0.45);
    --glow-cyan:      0 0 14px rgba(0, 229, 255, 0.35);
}
```

### Key Elements
- **Backgrounds**: Deep black/blue with subtle radial gradients and 40px grid overlays.
- **Typography**: `Space Grotesk` (UI) and `Space Mono` (Data/Technical).
- **Animations**: Pulsing nodes, scanning sweep lines, and ticking text.
- **Components**: Floating HUD panels, slide-up bottom sheets, and ticker strips.

---

## 2. PROTOCOL: AURA (Speculative Neumorphism)
**Usage:** Personal wallets, biometric credentials, and identity management.
**Vibe:** Sophisticated, tactile, soft, and "optimistically safe."

### Color Palette (CSS Variables)
```css
:root {
    --bg-aura:        #EAF0F6;
    --text-primary:   #374759;
    --primary-green:  #00DB72; /* Status: OK */
    --neu-light:      #FFFFFF;
    --neu-dark:       #D4DCE6;
    --neu-shadow-raised: 6px 6px 12px var(--neu-dark), -6px -6px 12px var(--neu-light);
    --neu-shadow-sunken: inset 4px 4px 8px var(--neu-dark), inset -4px -4px 8px var(--neu-light);
}
```

### Key Elements
- **Backgrounds**: Soft off-white/blue with generous padding and corner radii (24px - 40px).
- **Typography**: `Outfit` or `Inter` for a modern, approachable feel.
- **Micro-Animations**: Elastic hover effects, smooth transitions on click.
- **Components**: Neumorphic cards, circular biometric scanners, and "glass" overlays.

---

## 3. PROTOCOL: RADAR (Dystopian / Brutalist)
**Usage**: Official state-controlled citizen terminals, high-impact alerts, and "official" surveillance tools.
**Vibe**: Raw, monumental, monumental, and deliberately "broken" or "poster-like."

### Color Palette (CSS Variables)
```css
:root {
    --radar-neon:     #DFFF00; /* Primary Contrast */
    --radar-magenta:  #FF00FF; /* Interaction Highlight */
    --radar-void:     #000000; /* Absolute Background */
    --radar-text:     #FFFFFF;
    --radar-dim:      rgba(255, 255, 255, 0.4);
    --radar-border:   2px solid #FFFFFF;
}
```

### Key Elements
- **Layout**: Monumental blocks, offset grid, vertical side-headers.
- **Typography**: Hero-sized numbers and high-contrast labels that overlap boundaries.
- **Interactions**: Sudden transitions, high-impact "blinks," and glitchy scan effects.
- **Surveillance Motifs**: Raw terminal IDs (`0xEF_STATUS`), ticking timers, and high-frequency scan lines.

---

## 4. Brand Consistency Rules
1. **Never Mix Protocols**: A single page or artifact should strictly adhere to one protocol to maintain psychological immersion.
2. **AP Display**: Awareness Points (AP) are the project's currency. They should always have a distinct "glow" or animation when updated.
3. **Surveillance Aesthetic**: Even the softest designs should hint at the "AI Age" context—e.g., mention of biometrics, ledger syncing, or data certificates.
