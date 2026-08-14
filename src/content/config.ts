import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.string(), // or z.date()
    description: z.string(),
  }),
});

export const collections = { blog };
