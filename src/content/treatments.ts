// Biodonth treatments data. Single source of truth for treatment cards.
// 12 treatments matching the real Biodonth catalog.
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
    name: 'Implantes dentários',
    shortDescription: 'Volte a morder a maçã sem pensar duas vezes. Volte a rir no jantar sem cobrir a boca. O implante devolve o que faltava, e fica.',
    image: {
      src: '/images/tratamentos/implantes.png',
      alt: 'Tratamento de implante dentário na Biodonth',
      fallback: 'https://picsum.photos/seed/biodonth-implantes/800/1000',
    },
  },
  {
    slug: 'protese',
    name: 'Prótese dentária',
    shortDescription: 'Dentes que parecem seus, funcionam como seus, ficam onde você precisa que eles fiquem. Fixas ou removíveis, planejadas para durar.',
    image: {
      src: '/images/tratamentos/protese.png',
      alt: 'Prótese dentária',
      fallback: 'https://picsum.photos/seed/biodonth-protese/800/1000',
    },
  },
  {
    slug: 'cirurgias',
    name: 'Cirurgias',
    shortDescription: 'Quando o caso pede intervenção, a equipe está preparada. Cirurgias orais planejadas com precisão, segurança e acompanhamento do início ao fim.',
    image: {
      src: '/images/tratamentos/cirurgias.png',
      alt: 'Cirurgias orais na Biodonth',
      fallback: 'https://picsum.photos/seed/biodonth-cirurgias/800/1000',
    },
  },
  {
    slug: 'ortodontia',
    name: 'Ortodontia',
    shortDescription: 'Aparelho não precisa virar identidade. Alinhadores transparentes ou aparelho fixo discreto, escolhidos pelo seu rosto, sua agenda e sua rotina.',
    image: {
      src: '/images/tratamentos/ortodontia.jpg',
      alt: 'Tratamento ortodôntico',
      fallback: 'https://picsum.photos/seed/biodonth-ortodontia/800/1000',
    },
  },
  {
    slug: 'alinhadores',
    name: 'Alinhadores transparentes',
    shortDescription: 'Corrigir os dentes sem que ninguém perceba. Alinhadores removíveis, confortáveis e praticamente invisíveis — o tratamento que cabe na sua rotina.',
    image: {
      src: '/images/tratamentos/alinhadores.png',
      alt: 'Tratamento com alinhadores transparentes',
      fallback: 'https://picsum.photos/seed/biodonth-alinhadores/800/1000',
    },
  },
  {
    slug: 'odontopediatria',
    name: 'Odontopediatria',
    shortDescription: 'A primeira relação do seu filho com o dentista é a que ele leva para a vida. A gente faz questão de que ela comece bem.',
    image: {
      src: '/images/tratamentos/odontopediatria.jpg',
      alt: 'Atendimento de odontopediatria',
      fallback: 'https://picsum.photos/seed/biodonth-odontopediatria/800/1000',
    },
  },
  {
    slug: 'facetas',
    name: 'Facetas e lentes de contato',
    shortDescription: 'O sorriso que você desenhou na cabeça, em poucas semanas. Lentes de porcelana finas, planejadas no detalhe — daquelas que ninguém percebe que existem.',
    image: {
      src: '/images/tratamentos/facetas.png',
      alt: 'Facetas dentárias em porcelana',
      fallback: 'https://picsum.photos/seed/biodonth-facetas/800/1000',
    },
  },
  {
    slug: 'clareamento',
    name: 'Clareamento dental',
    shortDescription: 'A diferença que aparece em fotos, em entrevistas, em primeiros encontros. Em poucas sessões, com gel que respeita o esmalte.',
    image: {
      src: '/images/tratamentos/clareamento.jpg',
      alt: 'Procedimento de clareamento dental',
      fallback: 'https://picsum.photos/seed/biodonth-clareamento/800/1000',
    },
  },
  {
    slug: 'harmonizacao-orofacial',
    name: 'Harmonização facial',
    shortDescription: 'O equilíbrio que o rosto pede, com a precisão de quem entende a anatomia por completo. Resultados naturais, planejados pelo olhar do dentista.',
    image: {
      src: '/images/tratamentos/hof.png',
      alt: 'Harmonização orofacial',
      fallback: 'https://picsum.photos/seed/biodonth-hof/800/1000',
    },
  },
  {
    slug: 'checkup',
    name: 'Check-up preventivo digital',
    shortDescription: 'A consulta que antecipa problemas antes de eles aparecerem. O cuidado regular que mantém a boca saudável e evita surpresas.',
    image: {
      src: '/images/tratamentos/checkup.png',
      alt: 'Check-up dental na Biodonth',
      fallback: 'https://picsum.photos/seed/biodonth-checkup/800/1000',
    },
  },
  {
    slug: 'saude-gengiva',
    name: 'Periodontia',
    shortDescription: 'A gengiva é o alicerce. Antes de qualquer estética, antes de qualquer implante, é onde o sorriso começa — ou cai.',
    image: {
      src: '/images/tratamentos/gengiva.jpeg',
      alt: 'Tratamento de periodontia',
      fallback: 'https://picsum.photos/seed/biodonth-gengiva/800/1000',
    },
  },
  {
    slug: 'endodontia',
    name: 'Endodontia',
    shortDescription: 'Salvar o dente que dói é melhor do que perder. Tratamento de canal moderno, preciso e mais confortável do que você imagina.',
    image: {
      src: '/images/tratamentos/endodontia.png',
      alt: 'Tratamento endodôntico na Biodonth',
      fallback: 'https://picsum.photos/seed/biodonth-endodontia/800/1000',
    },
  },
];

// Homepage preview: first 6 marquee treatments
export const HOMEPAGE_TREATMENTS = TREATMENTS.slice(0, 6);
