import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), cloudflare({ mode: 'server' })],
  output: 'server',
  adapter: cloudflare(),
  redirects: {
    '/index.html': '/',
    '/retentionos': '/retention-os',
  },
});
