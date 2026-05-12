// Biodonth treatments data. Single source of truth for treatment cards.
// 9 treatments matching the real Biodonth catalog (biodonth.com.br).
// Descriptions: persuasion-driven, patient-as-protagonist.

export type Treatment = {
  slug: string;
  name: string;
  shortDescription: string;
  image: {
    src: string;
    alt: string;
    fallback: string;
  };
};

export const TREATMENTS: Treatment[] = [
  {
    slug: 'implantes-dentarios',
    name: 'Implantes dent\u00e1rios',
    shortDescription: 'Volte a morder a ma\u00e7\u00e3 sem pensar duas vezes. Volte a rir no jantar sem cobrir a boca. O implante devolve o que faltava, e fica.',
    image: {
      src: '/images/tratamentos/implantes.jpg',
      alt: 'Tratamento de implante dent\u00e1rio na Biodonth',
      fallback: 'https://picsum.photos/seed/biodonth-implantes/800/1000',
    },
  },
  {
    slug: 'ortodontia',
    name: 'Ortodontia',
    shortDescription: 'Aparelho n\u00e3o precisa virar identidade. Alinhadores transparentes ou aparelho fixo discreto, escolhidos pelo seu rosto, sua agenda e sua rotina.',
    image: {
      src: '/images/tratamentos/ortodontia.jpg',
      alt: 'Tratamento ortod\u00f4ntico',
      fallback: 'https://picsum.photos/seed/biodonth-ortodontia/800/1000',
    },
  },
  {
    slug: 'facetas',
    name: 'Facetas em porcelana',
    shortDescription: 'O sorriso que voc\u00ea desenhou na cabe\u00e7a, em poucas semanas. Lentes de porcelana finas, planejadas no detalhe \u2014 daquelas que ningu\u00e9m percebe que existem.',
    image: {
      src: '/images/tratamentos/facetas.jpg',
      alt: 'Facetas dent\u00e1rias em porcelana',
      fallback: 'https://picsum.photos/seed/biodonth-facetas/800/1000',
    },
  },
  {
    slug: 'clareamento',
    name: 'Clareamento dental',
    shortDescription: 'A diferen\u00e7a que aparece em fotos, em entrevistas, em primeiros encontros. Em poucas sess\u00f5es, com gel que respeita o esmalte.',
    image: {
      src: '/images/tratamentos/clareamento.jpg',
      alt: 'Procedimento de clareamento dental',
      fallback: 'https://picsum.photos/seed/biodonth-clareamento/800/1000',
    },
  },
  {
    slug: 'reabilitacao-oral',
    name: 'Reabilita\u00e7\u00e3o oral',
    shortDescription: 'Quando comer pesa, falar cansa e sorrir n\u00e3o est\u00e1 mais no menu \u2014 o caminho \u00e9 refazer com calma. Etapa por etapa, sem pular, at\u00e9 a boca voltar a ser sua.',
    image: {
      src: '/images/tratamentos/reabilitacao.jpg',
      alt: 'Reabilita\u00e7\u00e3o oral completa',
      fallback: 'https://picsum.photos/seed/biodonth-reabilitacao/800/1000',
    },
  },
  {
    slug: 'odontopediatria',
    name: 'Odontopediatria',
    shortDescription: 'A primeira rela\u00e7\u00e3o do seu filho com o dentista \u00e9 a que ele leva para a vida. A gente faz quest\u00e3o de que ela comece bem.',
    image: {
      src: '/images/tratamentos/odontopediatria.jpg',
      alt: 'Atendimento de odontopediatria',
      fallback: 'https://picsum.photos/seed/biodonth-odontopediatria/800/1000',
    },
  },
  {
    slug: 'protese',
    name: 'Pr\u00f3tese dent\u00e1ria',
    shortDescription: 'Dentes que parecem seus, funcionam como seus, ficam onde voc\u00ea precisa que eles fiquem. Fixas ou remov\u00edveis, planejadas para durar.',
    image: {
      src: '/images/tratamentos/protese.jpg',
      alt: 'Pr\u00f3tese dent\u00e1ria',
      fallback: 'https://picsum.photos/seed/biodonth-protese/800/1000',
    },
  },
  {
    slug: 'profilaxia',
    name: 'Profilaxia',
    shortDescription: 'A limpeza que escova nenhuma alcan\u00e7a. O cuidado simples que evita os caros \u2014 e a \u00fanica visita que pedimos para voc\u00ea n\u00e3o pular nunca.',
    image: {
      src: '/images/tratamentos/profilaxia.jpg',
      alt: 'Profilaxia dental',
      fallback: 'https://picsum.photos/seed/biodonth-profilaxia/800/1000',
    },
  },
  {
    slug: 'saude-gengiva',
    name: 'Sa\u00fade da gengiva',
    shortDescription: 'A gengiva \u00e9 o alicerce. Antes de qualquer est\u00e9tica, antes de qualquer implante, \u00e9 onde o sorriso come\u00e7a \u2014 ou cai.',
    image: {
      src: '/images/tratamentos/gengiva.jpg',
      alt: 'Tratamento de periodontia',
      fallback: 'https://picsum.photos/seed/biodonth-gengiva/800/1000',
    },
  },
];

// Homepage preview: first 6 marquee treatments
export const HOMEPAGE_TREATMENTS = TREATMENTS.slice(0, 6);
