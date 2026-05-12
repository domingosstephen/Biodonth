// Biodonth contact constants. Single source of truth.
// Never hardcode phone/whatsapp/social URLs elsewhere — import from here.

export const CONTACT = {
  whatsapp: {
    raw: '5511950031000',
    display: '(11) 9.5003-1000',
  },
  phone: {
    raw: '551127386605',
    display: '(11) 2738-6605',
  },
  email: 'contato@biodonth.com.br', // TODO: confirm — not visible on current site
  address: {
    street: 'Rua Desembargador Rocha Portela, 1012',
    neighborhood: 'Arthur Alvim',
    city: 'São Paulo',
    state: 'SP',
    cep: '03567-000',
    full: 'Rua Desembargador Rocha Portela, 1012 — Arthur Alvim, São Paulo — SP, CEP 03567-000',
    short: 'Rua Desembargador Rocha Portela, 1012 — Arthur Alvim, SP',
  },
  hours: {
    weekdays: 'Seg–Sex, 08h às 17h',
    saturday: 'Sáb, 09h às 14h',
  },
} as const;

export const SOCIAL = {
  instagram: {
    handle: '@biodonthodontologia',
    url: 'https://instagram.com/biodonthodontologia',
  },
  facebook: {
    handle: 'biodonthodontologia',
    url: 'https://www.facebook.com/biodonthodontologia',
  },
} as const;

const WHATSAPP_DEFAULT_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de agendar uma consulta na Biodonth.'
);

export const WHATSAPP_CTA_URL =
  `https://api.whatsapp.com/send?phone=${CONTACT.whatsapp.raw}&text=${WHATSAPP_DEFAULT_MESSAGE}`;

export const TEL_URL = `tel:+${CONTACT.phone.raw}`;

export function buildMapEmbedUrl(query: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export function buildDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}
