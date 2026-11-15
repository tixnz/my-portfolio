import type { ImageMetadata } from 'astro';

/**
 * Case images live in src/assets/cases/<slug>/. Content files refer to them by
 * a short path like "sats-quests/skisser.png" so MDX stays readable; this
 * resolves the path to the optimisable image at build time.
 */
const files = import.meta.glob<ImageMetadata>('/src/assets/cases/**/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  import: 'default',
});

export type ImageRef = string | ImageMetadata;

export function resolveImage(ref: ImageRef): ImageMetadata {
  if (typeof ref !== 'string') return ref;
  const image = files[`/src/assets/cases/${ref}`];
  if (!image) {
    throw new Error(`Image not found: src/assets/cases/${ref}`);
  }
  return image;
}
