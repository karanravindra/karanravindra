import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders"; // Not available with legacy API

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    tags: z.optional(z.array(z.string())),
  }),
});

export const collections = { blog };
