import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://norxdev.github.io', // GitHub Pages domain
  base: '/fishing/',                 // Include trailing slash for GitHub Pages
  output: 'static',                  // Static site output
});
