// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // Set to the real domain before deploy (phase 8).
  site: 'https://example.com',
  integrations: [mdx()],
  i18n: {
    // Norwegian only for now. Add 'en' here when the language switch comes back.
    locales: ['no'],
    defaultLocale: 'no',
  },
});
