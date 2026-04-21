import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string(),
  image: z.string().optional(),
  author: z.string().optional(),
});

const blogEn = defineCollection({ type: 'content', schema: blogSchema });
const blogPt = defineCollection({ type: 'content', schema: blogSchema });

export const collections = {
  'blog-en': blogEn,
  'blog-pt': blogPt,
};
