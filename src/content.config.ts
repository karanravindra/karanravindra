import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders"; // Not available with legacy API

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
  }),
});
const caseStudy = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "src/content/case-study" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { blog, caseStudy };
