// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// project site: https://c-alliope.github.io/sigil/
export default defineConfig({
  site: 'https://c-alliope.github.io/sigil/',
  base: '/sigil/',
  vite: {
    plugins: [tailwindcss()],
  },
});
