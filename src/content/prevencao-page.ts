// PT-BR content for the /prevencao listing page and the 6 audience programs.
// Individual audience subpage content lives in src/content/prevencao-content.ts (Command #21).
// This file: listing metadata + program cards + page-level copy.

export type PrevencaoProgram = {
  slug: string;          // URL segment
  audience: string;      // display label (e.g. "Kids", "Gestante")
  title: string;         // card headline
  description: string;   // card description, 1-2 sentences
  ageRange?: string;     // optional micro-label ("0-12 anos", "60+", etc.)
  image: {
    src: string;
    fallback: string;
    alt: string;
  };
};

export const PREVENCAO_PROGRAMS: PrevencaoProgram[] = [
  {
    slug: 'checkup-digital',
    audience: 'Check-up digital',
    title: 'O exame que vê o que escova nenhuma alcança.',
    description: 'Imagens intra-orais ampliadas em até 60× revelam problemas em estágios iniciais — antes da dor, antes do tratamento caro.',
    ageRange: 'Todas as idades',
    image: {
      src: '/images/prevencao/checkup-digital.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-prev-checkup/800/1000',
      alt: 'Equipamento de check-up odontológico digital intra-oral',
    },
  },
  {
    slug: 'kids',
    audience: 'Kids',
    title: 'A primeira ida ao dentista, sem trauma.',
    description: 'Programa preventivo para crianças que constrói uma relação tranquila com o cuidado da boca — uma que dura a vida inteira.',
    ageRange: '0–12 anos',
    image: {
      src: '/images/prevencao/kids.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-prev-kids/800/1000',
      alt: 'Criança sorrindo durante consulta odontológica',
    },
  },
  {
    slug: 'gestante',
    audience: 'Gestante',
    title: 'A boca também muda na gestação.',
    description: 'Acompanhamento odontológico específico para a gravidez, com atenção às mudanças hormonais e à segurança da mãe e do bebê.',
    ageRange: 'Gestantes',
    image: {
      src: '/images/prevencao/gestante.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-prev-gestante/800/1000',
      alt: 'Gestante em consulta odontológica preventiva',
    },
  },
  {
    slug: 'atleta',
    audience: 'Atleta',
    title: 'Saúde bucal também é performance.',
    description: 'Programa preventivo para atletas amadores e profissionais — protetores, prevenção de trauma, e o impacto da boca no desempenho.',
    ageRange: 'Atletas',
    image: {
      src: '/images/prevencao/atleta.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-prev-atleta/800/1000',
      alt: 'Atleta com protetor bucal personalizado',
    },
  },
  {
    slug: 'empresa',
    audience: 'Empresa',
    title: 'Benefício corporativo que cuida de verdade.',
    description: 'Programa odontológico para empresas — check-ups regulares para colaboradores, com a qualidade da odontologia particular, sem o ritmo de convênio.',
    ageRange: 'B2B',
    image: {
      src: '/images/prevencao/empresa.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-prev-empresa/800/1000',
      alt: 'Equipe corporativa em programa de saúde bucal',
    },
  },
  {
    slug: 'melhor-idade',
    audience: 'Melhor idade',
    title: 'Cuidar dos dentes aos 70 começa antes.',
    description: 'Programa preventivo para 60+ — com atenção a peculiaridades desta fase: gengiva mais delicada, próteses em uso, e o objetivo de manter os próprios dentes.',
    ageRange: '60+',
    image: {
      src: '/images/prevencao/melhor-idade.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-prev-melhor-idade/800/1000',
      alt: 'Paciente sênior em consulta odontológica preventiva',
    },
  },
];

export const PREVENCAO_PAGE = {
  metadata: {
    title: 'Prevenção',
    description:
      'Programas de prevenção odontológica da Biodonth, segmentados por audiência: check-up digital, kids, gestante, atleta, empresa e melhor idade. Em Arthur Alvim, São Paulo.',
  },

  hero: {
    eyebrow: 'Prevenção',
    bronze: 'O melhor tratamento',
    bronzeItalic: 'é o que não precisa acontecer.',
    description:
      'Cada fase da vida tem cuidados específicos para a boca. Conheça nossos programas preventivos — desenhados para que o sorriso aos 70 seja construído nos 30, 40, 50.',
  },

  intro: {
    eyebrow: 'A filosofia',
    title: 'Não tratamos quando',
    titleItalic: 'a dor chega.',
    paragraphs: [
      'A odontologia tradicional opera em modo de resposta: o paciente sente dor, agenda consulta, e o dentista trata. Esse modelo é eficiente para emergências — e caro, longo e desconfortável para tudo o mais.',
      'A Biodonth foi desenhada de outra forma. Cada um dos nossos programas preventivos parte de um princípio simples: o que detectamos no exame de hoje custa significativamente menos — em tempo, em dinheiro, em incômodo — do que o que vamos tratar quando virar urgência.',
      'Por isso temos seis programas distintos. Porque a prevenção que serve a uma criança de 5 anos não é a mesma que serve a uma gestante, a um atleta, ou a um paciente de 70. Cada um tem o seu caminho.',
    ],
  },

  grid: {
    eyebrow: 'Nossos programas',
    title: 'Seis caminhos para',
    titleItalic: 'a mesma destinação.',
    description:
      'Cada programa preventivo é construído para uma fase específica da vida ou um contexto específico de uso. Escolha o que mais se aproxima da sua situação — ou conversa conosco para descobrir qual faz mais sentido para você.',
  },

  philosophy: {
    eyebrow: 'O que une todos os programas',
    bronze: 'Prevenção é o',
    bronzeItalic: 'tratamento mais barato.',
    paragraphs: [
      'A literatura é consistente: cada R$ 1 investido em prevenção evita estimativamente R$ 4 a R$ 7 em tratamentos curativos posteriores. A profilaxia semestral evita a cárie. A cárie evitada evita a restauração. A restauração evitada evita o canal. O canal evitado evita a coroa. A coroa evitada evita o implante. A economia é cumulativa.',
      'Mas a economia financeira é só uma parte. A outra é o que não se mede em dinheiro: as consultas que não foram necessárias, as dores que não chegaram, o tempo que não foi gasto na cadeira, a ansiedade que não precisou ser administrada.',
      'Os programas preventivos da Biodonth são feitos com essa lógica do longo prazo. Você cuida hoje, e o futuro que evita é o ponto.',
    ],
  },

  closing: {
    eyebrow: 'Próximos passos',
    bronze: 'Comece pelo',
    bronzeItalic: 'programa que faz sentido.',
    description: 'Cada programa preventivo tem a sua primeira consulta — 60 minutos, sem pressão, com plano de cuidado escrito na sua mão. Escolha o que se aproxima do seu momento de vida, ou converse conosco para encontrarmos juntos.',
    primaryCtaLabel: 'Agendar consulta',
    secondaryCtaLabel: 'Falar no WhatsApp',
  },

  breadcrumb: {
    home: 'Início',
    current: 'Prevenção',
  },
} as const;
