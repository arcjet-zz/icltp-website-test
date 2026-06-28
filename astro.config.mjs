import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

const site = process.env.SITE_URL ?? 'http://localhost:4321';

export default defineConfig({
  site,
  base: '/',
  output: 'static',
  integrations: [preact()],
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'directory',
  },
});
