import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'slug',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        slug: fields.slug({ name: { label: 'Slug' } }),
        title: fields.text({ label: 'Title' }),
        publishDate: fields.date({ label: 'Published Date' }),
        description: fields.text({ label: 'Description', multiline: true }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    pages: collection({
      label: 'Marketing Pages',
      slugField: 'slug',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        slug: fields.slug({ name: { label: 'Slug / URL Path' } }),
        title: fields.text({ label: 'Page Title' }),
        content: fields.markdoc({ label: 'Body Content (Markdown/HTML)' }),
      },
    }),
  },
});
