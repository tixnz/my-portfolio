import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * One MDX file per case in src/content/cases/<slug>.mdx.
 * Frontmatter holds the shared parts; the MDX body holds numbered sections
 * built from block components (Section, ImageRow, Findings, Decision, ...).
 */
const cases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
  schema: ({ image }) =>
    z.object({
      lang: z.enum(['no', 'en']).default('no'),
      title: z.string(),
      subtitle: z.string(),
      cover: image(),
      coverAlt: z.string(),
      cardImage: image(),
      cardImageAlt: z.string(),
      /** Card meta line, e.g. "2025 · App · Internship" */
      meta: z.string(),
      /** Card description under the title */
      summary: z.string(),
      theme: z.enum(['lys', 'mørk']).default('lys'),
      /** Front page order and card shape: wide (690 × 400 media) or tall (620 × 600 media) */
      order: z.number(),
      cardSize: z.enum(['wide', 'tall']).default('wide'),
      facts: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .min(1)
        .max(6),
      /** Slug of the case linked under "Neste prosjekt" */
      next: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { cases };
