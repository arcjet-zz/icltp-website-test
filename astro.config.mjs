import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? 'local/icltp-website-test').split('/');
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: isGitHubPages ? `/${repository}` : '/',
  output: 'static',
  integrations: [preact()],
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'directory',
  },
});
