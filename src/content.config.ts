import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.string(), // ← matches your posts
      image: z.string().optional(),
    }),
  }),
};
