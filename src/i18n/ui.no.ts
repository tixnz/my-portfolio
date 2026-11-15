/**
 * UI strings (Norwegian). Every piece of interface copy lives here or in
 * src/content, never inside components. Add ui.en.ts with the same keys when
 * the English version arrives.
 */
export const ui = {
  'skip.toContent': 'Hopp til innhold',
  'nav.label': 'Hovedmeny',
  'nav.projects': 'Prosjekter',
  'nav.about': 'Om meg',
  'nav.cv': 'CV',
  'nav.contact': 'Kontakt',
  'nav.home': 'Til forsiden',
  'nav.menuOpen': 'Meny',
  'nav.menuClose': 'Lukk',
  'card.cta': 'Se prosjekt ↗',
  'case.allProjects': '← Alle prosjekter',
  'case.nextProject': 'Neste prosjekt',
  'case.contents': 'Innhold',
  'strip.hint': 'Dra sideveis, eller bruk pilene',
  'strip.prev': 'Forrige skjerm',
  'strip.next': 'Neste skjerm',
  'footer.copyright': '© Zehra Tien Ayden {year}',
} as const;

export type UiKey = keyof typeof ui;

export function t(key: UiKey, vars: Record<string, string | number> = {}): string {
  return ui[key].replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? ''));
}
