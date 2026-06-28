import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    route: z.string(),
    eyebrow: z.string(),
    description: z.string(),
    source: z.string(),
    updatedAt: z.coerce.date(),
    order: z.number(),
  }),
});

export const collections = { articles };
