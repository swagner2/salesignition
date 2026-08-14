import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.union([z.string(), z.date()]),
    description: z.string().optional(),
    category: z.string().optional().default('deliverability'),
  }),
});

export const collections = { blog };
