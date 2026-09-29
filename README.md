# sigil — cyber-sigilism ui kit

Cold, technical component kit. If a medieval alchemist and a 2000s hacker
designed a library together. Live demo: https://c-alliope.github.io/sigil/

## Run

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Pushes to `main` deploy the demo via `gh-pages` branch.

## Tokens

`src/styles/tokens.css` — abyss `#04070b` · ice `#e8f1f4` · steel `#8fa3ad` · signal `#e0263c`.
Signal red is for accents only. Radius 0, shadows only as glow.

## Structure

```
src/
  pages/index.astro       the whole scroll experience
  layouts/SigilBase.astro nav, lenis smooth scroll, zoom modal
  components/LineField.astro  generated line backdrop (swap for public/bg/*.png)
  styles/tokens.css       theme + motion + modal
public/bg/                drop hero.png + textures here when ready
```

## Roadmap

- [x] v0.1 — tokens, buttons, inputs, surfaces, motion, zoom specimens
- [ ] real PNG backgrounds (hero + textures)
- [ ] npm package phase
