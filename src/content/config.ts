import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.union([z.string(), z.date()]), // Accepts both strings and date objects
    description: z.string().optional(),           // Make description optional to prevent empty save failures
  }),
});

export const collections = { blog };
