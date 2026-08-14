import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  integrations: [markdoc()],
  output: 'server',
  adapter: cloudflare(),
  redirects: {
    '/retentionos': '/retention-os',
  },
});
