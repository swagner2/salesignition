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
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Deliverability', value: 'deliverability' },
            { label: 'Klaviyo', value: 'klaviyo' },
            { label: 'AI & Systems', value: 'ai' },
            { label: 'Strategy', value: 'strategy' },
            { label: 'Campaigns', value: 'campaigns' },
            { label: 'Case Study', value: 'casestudy' },
          ],
          defaultValue: 'deliverability',
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
