import { t } from '../i18n/ui.no';

/** Site-wide settings and navigation. Copy comes from the i18n file. */
export const site = {
  name: 'Zehra Tien Ayden',
  lang: 'no',
  // Placeholder contact details until final text is in.
  email: 'hei@example.com',
  linkedin: 'https://www.linkedin.com/',
};

export const nav = [
  { href: '/#prosjekter', label: t('nav.projects') },
  { href: '/om-meg/', label: t('nav.about') },
  { href: '/cv/', label: t('nav.cv') },
] as const;

export const contactLink = { href: '/kontakt/', label: t('nav.contact') } as const;
