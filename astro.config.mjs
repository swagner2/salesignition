import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  output: 'server', // Uses SSR mode for cloudflare edge routes (like Keystatic API)
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  integrations: [react(), markdoc()]
});
