export type NavItem = {
  label: string;
  href: string;
  secondary?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'In\u00edcio',        href: '/' },
  { label: 'Tratamentos',   href: '/tratamentos' },
  { label: 'Preven\u00e7\u00e3o',     href: '/prevencao' },
  { label: 'Especialistas', href: '/especialistas' },
  { label: 'Sobre',         href: '/sobre' },
  { label: 'Depoimentos',   href: '/#depoimentos', secondary: true },
  { label: 'Blog',          href: '/blog',         secondary: true },
  { label: 'Contato',       href: '/contato' },
];
