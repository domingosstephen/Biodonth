// PT-BR copy for the /especialistas page.
// All specialist data is PLACEHOLDER pending Biodonth's review.
// [CONFIRM-BIODONTH] All names, CROs, roles, and philosophy quotes need replacement.

export type Especialista = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  philosophy: string;
  treatments: string[];
  cro: string;
  image: {
    src: string;
    alt: string;
  };
};

export const ESPECIALISTAS: Especialista[] = [
  {
    slug: 'diretora-clinica',
    name: 'Dra. [Nome 1]',
    initials: 'N1',
    role: 'Diretora cl\u00ednica \u2022 Reabilita\u00e7\u00e3o oral',
    philosophy:
      'Cada paciente carrega uma boca inteira at\u00e9 a primeira consulta. Meu trabalho \u00e9 n\u00e3o dividir essa boca em peda\u00e7os s\u00f3 para tratar mais r\u00e1pido. Vamos com calma, pe\u00e7a por pe\u00e7a, at\u00e9 voltar a fazer sentido.',
    treatments: ['reabilitacao-oral', 'protese', 'profilaxia'],
    cro: 'CRO-SP 00000',
    image: {
      src: '/images/especialistas/diretora-clinica.jpg',
      alt: 'Retrato da diretora cl\u00ednica da Biodonth',
    },
  },
  {
    slug: 'implantodontia',
    name: 'Dr. [Nome 2]',
    initials: 'N2',
    role: 'Implantodontia',
    philosophy:
      'Trabalhar com implantes \u00e9 trabalhar com tempo. Cada osso responde no seu ritmo, e a pressa \u00e9 o que separa um implante que dura 5 anos de um que dura 30. Minha parte \u00e9 n\u00e3o apressar.',
    treatments: ['implantes-dentarios'],
    cro: 'CRO-SP 00000',
    image: {
      src: '/images/especialistas/implantodontia.jpg',
      alt: 'Retrato do implantodontista da Biodonth',
    },
  },
  {
    slug: 'ortodontia',
    name: 'Dra. [Nome 3]',
    initials: 'N3',
    role: 'Ortodontia',
    philosophy:
      'Dentes alinhados n\u00e3o s\u00e3o vaidade \u2014 s\u00e3o sa\u00fade, fun\u00e7\u00e3o, autoestima e fon\u00e9tica. Mas tudo isso a gente conquista sem precisar avisar o mundo de aparelho. H\u00e1 mais de uma forma de chegar l\u00e1.',
    treatments: ['ortodontia'],
    cro: 'CRO-SP 00000',
    image: {
      src: '/images/especialistas/ortodontia.jpg',
      alt: 'Retrato da ortodontista da Biodonth',
    },
  },
  {
    slug: 'periodontia',
    name: 'Dr. [Nome 4]',
    initials: 'N4',
    role: 'Periodontia',
    philosophy:
      'A gengiva \u00e9 o trabalho que ningu\u00e9m v\u00ea. Quando ela est\u00e1 bem, a pessoa nem nota. Quando est\u00e1 mal, pode derrubar implantes, dentes e o sorriso inteiro. Eu cuido do invis\u00edvel para que o vis\u00edvel dure.',
    treatments: ['saude-gengiva'],
    cro: 'CRO-SP 00000',
    image: {
      src: '/images/especialistas/periodontia.jpg',
      alt: 'Retrato do periodontista da Biodonth',
    },
  },
  {
    slug: 'odontopediatria',
    name: 'Dra. [Nome 5]',
    initials: 'N5',
    role: 'Odontopediatria',
    philosophy:
      'A primeira ida ao dentista decide a rela\u00e7\u00e3o com o cuidado da boca pelo resto da vida. Eu prefiro que a primeira visita do seu filho seja sem dor, sem c\u00e1rie, sem urg\u00eancia \u2014 s\u00f3 para nos conhecer. \u00c9 assim que se forma um adulto que escova sem cobrar.',
    treatments: ['odontopediatria'],
    cro: 'CRO-SP 00000',
    image: {
      src: '/images/especialistas/odontopediatria.jpg',
      alt: 'Retrato da odontopediatra da Biodonth',
    },
  },
  {
    slug: 'estetica',
    name: 'Dr. [Nome 6]',
    initials: 'N6',
    role: 'Est\u00e9tica dental',
    philosophy:
      'Faceta bem feita ningu\u00e9m percebe que existe. Quando algu\u00e9m pergunta \u201co que voc\u00ea mudou?\u201d, a resposta foi errada. O sorriso natural \u00e9 o trabalho mais t\u00e9cnico \u2014 perfei\u00e7\u00e3o artificial \u00e9 f\u00e1cil de imitar, mas naturalidade exige precis\u00e3o.',
    treatments: ['facetas', 'clareamento'],
    cro: 'CRO-SP 00000',
    image: {
      src: '/images/especialistas/estetica.jpg',
      alt: 'Retrato do especialista em est\u00e9tica dental da Biodonth',
    },
  },
];

export const ESPECIALISTAS_PAGE = {
  metadata: {
    title: 'Especialistas | Biodonth Odontologia Integrada',
    description:
      'Conhe\u00e7a a equipe da Biodonth \u2014 seis especialistas que trabalham juntos em cada caso. Em Artur Alvim, S\u00e3o Paulo, com consulta sem pressa como ponto de partida.',
  },

  hero: {
    eyebrow: 'Nossa equipe',
    bronze: 'Equipe. N\u00e3o soma',
    bronzeItalic: 'de especialistas.',
    description:
      'Profissionais que trabalham juntos no mesmo plano \u2014 e que voc\u00ea passa a conhecer pelo nome.',
  },

  intro: {
    eyebrow: 'Como atendemos',
    title: 'Voc\u00ea nunca trata com',
    titleItalic: 'um profissional isolado.',
    paragraphs: [
      'Em uma cl\u00ednica integrada, cada caso complexo passa pela equipe inteira antes do plano ser apresentado. O profissional que conduz a sua consulta \u00e9 a face do trabalho de todos \u2014 e isso muda tudo no resultado.',
      'N\u00e3o \u00e9 coincid\u00eancia que os planos da Biodonth tendem a ser mais curtos do que o que voc\u00ea ouve em outras cl\u00ednicas. Quando todas as especialidades pensam o caso juntas, a gente v\u00ea o que est\u00e1 duplicado, o que pode esperar e o que precisa come\u00e7ar primeiro.',
    ],
  },

  philosophy: {
    eyebrow: 'O que nos une',
    bronze: 'N\u00e3o vendemos tratamentos.',
    bronzeItalic: 'Vendemos tempo.',
    paragraphs: [
      'A maior parte dos profissionais que vem trabalhar na Biodonth chega cansada do ritmo. Cansada de atender em 10 minutos. Cansada de n\u00e3o conseguir explicar. Cansada de n\u00e3o conseguir acompanhar o caso inteiro at\u00e9 o fim.',
      'O que oferecemos a quem trabalha aqui \u00e9 o que oferecemos a quem se trata aqui: tempo. Para a equipe, \u00e9 tempo para pensar o caso, conversar com os colegas, fazer bem feito. Para voc\u00ea, \u00e9 tempo para entender, decidir, voltar.',
      '\u00c9 essa moeda \u2014 tempo \u2014 que une todo mundo nesta cl\u00ednica. E \u00e9 o que mais escasseia no resto do mercado.',
    ],
  },

  closing: {
    eyebrow: 'Pr\u00f3ximos passos',
    bronze: 'Conhe\u00e7a a equipe',
    bronzeItalic: 'pessoalmente.',
    description:
      'Sua primeira consulta come\u00e7a com a equipe inteira do seu lado \u2014 e termina com um plano de tratamento na sua m\u00e3o. Sem pressa, sem press\u00e3o, sem fechamento na hora.',
    primaryCtaLabel: 'Agendar consulta',
    secondaryCtaLabel: 'Conhecer os tratamentos',
    secondaryCtaHref: '/tratamentos',
  },

  breadcrumb: {
    home: 'In\u00edcio',
    current: 'Especialistas',
  },

  treatmentDisplayNames: {
    'implantes-dentarios': 'Implantes',
    'ortodontia': 'Ortodontia',
    'facetas': 'Facetas',
    'clareamento': 'Clareamento',
    'reabilitacao-oral': 'Reabilita\u00e7\u00e3o oral',
    'odontopediatria': 'Odontopediatria',
    'protese': 'Pr\u00f3tese',
    'profilaxia': 'Profilaxia',
    'saude-gengiva': 'Sa\u00fade da gengiva',
  } as Record<string, string>,
} as const;
