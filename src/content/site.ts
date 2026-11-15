import { t } from '../i18n/ui.no';

/** Site-wide settings and navigation. Copy comes from the i18n file. */
export const site = {
  name: 'Zehra Tien Ayden',
  lang: 'no',
  /** Default page description, also used when the page is shared */
  description:
    'Portefølje for Zehra Tien Ayden, UX-designer med master i interaksjonsdesign fra Universitetet i Oslo.',
  email: 'zehratieen@gmail.com',
  phone: '+47 482 74 967',
  /**
   * Resume PDF. Put the file in public/cv/ with this name and the CV link in
   * the menu starts working; no code change needed.
   */
  cvUrl: '/cv/zehra-tien-ayden-cv.pdf',
};

export const nav = [
  { href: '/#prosjekter', label: t('nav.projects') },
  { href: '/om-meg/', label: t('nav.about') },
  { href: site.cvUrl, label: t('nav.cv'), file: true },
] as const;

export const contactLink = { href: '/kontakt/', label: t('nav.contact') } as const;
