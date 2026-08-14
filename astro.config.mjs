import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), cloudflare({ mode: 'server' })],
  output: 'server',
  adapter: cloudflare(),
  redirects: {
    '/retentionos': '/retention-os',
  },
});
