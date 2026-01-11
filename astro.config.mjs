// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://norxdev.github.io', // Your main GitHub Pages domain
  base: '/fishing/',                // Include trailing slash for consistency
  output: 'static',                  // Static site output (correct for GitHub Pages)
});
