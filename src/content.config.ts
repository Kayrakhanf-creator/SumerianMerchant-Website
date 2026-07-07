import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Devlog posts: drop a .md file into src/content/blog with
 * `title`, `date` (YYYY-MM-DD) and `excerpt` frontmatter — it appears
 * on /blog automatically at build time. No server involved.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { blog };
