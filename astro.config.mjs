import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

/**
 * The public address, used for canonical links and sharing images.
 * Order: SITE_URL (set this once you have your own domain) → the address
 * Vercel or Netlify gives the deploy → localhost for local builds.
 */
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  process.env.URL || // Netlify
  'http://localhost:4321';

export default defineConfig({
  site,
  integrations: [mdx()],
  i18n: {
    // Norwegian only for now. Add 'en' here when the language switch comes back.
    locales: ['no'],
    defaultLocale: 'no',
  },
});
