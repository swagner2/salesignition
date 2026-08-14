import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  integrations: [markdoc()],
  output: 'static',
  redirects: {
    '/retentionos': '/retention-os',
  },
});
