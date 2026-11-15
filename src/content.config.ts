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
      /**
       * Logo title instead of the 112 px text title (UNG + MUNCH):
       * titlePrefix is set as text, followed by the logo image.
       */
      titlePrefix: z.string().optional(),
      titleLogo: image().optional(),
      titleLogoAlt: z.string().optional(),
      /** Optional: UNG + MUNCH uses a logo title with no subtitle */
      subtitle: z.string().optional(),
      /** Hero image on the case page. Required once the case page is built (phase 4/5). */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** "contain" shows the whole cover on coverBackground (Værsel: phones on green) */
      coverFit: z.enum(['cover', 'contain']).default('cover'),
      coverBackground: z.string().optional(),
      cardImage: image(),
      cardImageAlt: z.string(),
      /** Card title if it differs from the case title, e.g. "UX Cup" */
      cardTitle: z.string().optional(),
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
      /** Large centred statement after the facts row */
      statement: z.string().optional(),
      /** Intro paragraph under the statement */
      intro: z.string().optional(),
      /** Table of contents: section ids in the MDX body and their short labels */
      toc: z.array(z.object({ id: z.string(), label: z.string() })).default([]),
      /** Logo above the table of contents (e.g. SATS wordmark) */
      tocLogo: image().optional(),
      tocLogoAlt: z.string().optional(),
      /** Logo height in px (SATS wordmark 52, Værsel badge 180) */
      tocLogoHeight: z.number().default(52),
      /** Slug of the case linked under "Neste prosjekt" */
      next: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { cases };
