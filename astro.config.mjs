import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://norxdev.github.io',
  base: '/fishing/',
  markdown: {
    syntaxHighlight: 'prism',
  },
});
