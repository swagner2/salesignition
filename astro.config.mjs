import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

const isDev = process.argv.includes('dev');

export default defineConfig({
  integrations: [
    react(),
    markdoc(),
    ...(isDev ? [keystatic()] : []),
    cloudflare({ mode: 'server' })
  ],
  output: 'server',
  adapter: cloudflare(),
  redirects: {
    '/retentionos': '/retention-os',
  },
});
