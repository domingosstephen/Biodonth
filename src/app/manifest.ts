import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Biodonth Odontologia Integrada',
    short_name: 'Biodonth',
    description:
      'Cl\u00ednica de odontologia integrada em Artur Alvim, S\u00e3o Paulo. Primeira consulta sem pressa, plano de tratamento na m\u00e3o.',
    start_url: '/',
    display: 'minimal-ui',
    background_color: '#F5F3EF',
    theme_color: '#A8824D',
    icons: [
      {
        src: '/brand/Biodonth-logo-mark.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
