// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hébergement GitHub Pages (HTTPS automatique).
// Domaine perso plus tard ? -> site: 'https://blog.mondomaine.fr', base: '/'
// + créer public/CNAME contenant le domaine.
export default defineConfig({
  site: 'https://m371h3u.github.io',
  base: '/askya',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', wrap: false },
  },
});
