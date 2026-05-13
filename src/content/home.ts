// Homepage copy — persuasion-driven, transformation-centered, PT-BR.
// Named mechanism: "Consulta sem pressa"
// Voice principle: patient is the protagonist; the clinic is the guide; convênio is the silent antagonist.
//
// CLAIMS TAGGED [CONFIRM-BIODONTH] need verification with Biodonth's operating reality.

export const HOME_HERO = {
  eyebrow: 'Odontologia integrada \u2022 Artur Alvim',
  bronze: 'Volte a sorrir',
  bronzeItalic: 'sem pensar duas vezes.',
  subhead:
    'O sorriso que faz diferen\u00e7a no jantar, na foto, na entrevista. A Biodonth devolve a confian\u00e7a que voc\u00ea perdeu \u2014 com um plano feito para a sua boca, sem pressa na primeira consulta, e zero press\u00e3o para decidir na hora.',
  primaryCta: { label: 'Agendar consulta' },
  secondaryCta: {
    label: 'Conhe\u00e7a nossos tratamentos',
    href: '/tratamentos',
  },
  image: {
    src: '/images/hero/hero-smile.jpg',
    alt: 'Paciente sorrindo ap\u00f3s tratamento integrado na Biodonth',
    fallback:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1600&q=80&auto=format&fit=crop',
  },
} as const;

export const HOME_TRUST_STRIP = {
  text: 'Desde 2015, fazemos uma coisa s\u00f3 \u2014 e fazemos bem feito.',
} as const;

export const HOME_VIDEO = {
  eyebrow: 'Como \u00e9 estar aqui',
  bronze: 'O barulho da broca',
  bronzeItalic: 'fica para depois.',
  description:
    'Quando voc\u00ea entra, primeiro v\u00ea o piso, a luz, o sil\u00eancio. Quase nunca a cadeira. Essa \u00e9 uma escolha. A consulta come\u00e7a no acolhimento \u2014 no ch\u00e1, na conversa, na sua hist\u00f3ria \u2014 e s\u00f3 depois chega ao tratamento. Veja a Biodonth por dentro.',
  videoSrc: '/videos/biodonth-tour.mp4',
  posterSrc: '/images/video/biodonth-tour-poster.jpg',
  posterFallback:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80&auto=format&fit=crop',
  ariaLabel: 'V\u00eddeo institucional da cl\u00ednica Biodonth Odontologia Integrada',
  durationLabel: '1 min',
} as const;

export const HOME_TREATMENTS = {
  eyebrow: 'O que sabemos fazer',
  bronze: 'Todas as especialidades.',
  bronzeItalic: 'Uma equipe. Um plano.',
  description:
    'Da limpeza ao implante, da ortodontia \u00e0 reabilita\u00e7\u00e3o \u2014 sem peregrinar de cl\u00ednica em cl\u00ednica, sem repetir a mesma hist\u00f3ria em tr\u00eas consult\u00f3rios diferentes. As especialidades dialogam entre si dentro da mesma sala. \u00c9 isso que \u201cintegrada\u201d significa, e o que faz toda a diferen\u00e7a no seu resultado.',
  ctaLabel: 'Ver todos os tratamentos',
  ctaHref: '/tratamentos',
} as const;

export const HOME_BEFORE_AFTER = {
  eyebrow: 'Resultados de quem decidiu come\u00e7ar',
  bronze: 'Antes parece longe.',
  bronzeItalic: 'Depois parece sempre.',
  description:
    'Cada caso aqui \u00e9 de algu\u00e9m que adiou \u2014 por medo, por pre\u00e7o, por achar que n\u00e3o dava mais. Arraste a barra e veja onde a decis\u00e3o os levou.',
  hint: 'Arraste para ver a transforma\u00e7\u00e3o',
  beforeLabel: 'Antes',
  afterLabel: 'Depois',
} as const;

export const HOME_TESTIMONIALS = {
  eyebrow: 'O que dizem quem j\u00e1 passou por aqui',
  bronze: 'A gente prefere',
  bronzeItalic: 'que eles contem.',
  description:
    'N\u00e3o pedimos avalia\u00e7\u00f5es. N\u00e3o filtramos. Estas s\u00e3o as avalia\u00e7\u00f5es que est\u00e3o no Google, da mais recente para a mais antiga. Cada uma de uma pessoa que esteve onde voc\u00ea est\u00e1 agora.',
  ratingCountLabel: (n: number) =>
    n === 1 ? '1 avalia\u00e7\u00e3o no Google' : `${n} avalia\u00e7\u00f5es no Google`,
  seeOnGoogleLabel: 'Ver no Google',
  verifiedBadge: 'Verificado no Google',
} as const;

export const HOME_FAQ = {
  eyebrow: 'Antes de marcar, algumas respostas',
  bronze: 'Sabemos que algumas',
  bronzeItalic: 'perguntas pesam.',
  description:
    'Sobre tempo, sobre pre\u00e7o, sobre dor. Algumas a gente responde na consulta. Outras d\u00e1 para responder antes \u2014 para que a primeira conversa seja sobre voc\u00ea, n\u00e3o sobre o que voc\u00ea ainda n\u00e3o entendeu.',
  ctaText: 'A sua pergunta n\u00e3o est\u00e1 aqui?',
  ctaLabel: 'Fale conosco no WhatsApp',
} as const;

export const HOME_LOCATION = {
  eyebrow: 'Onde estamos',
  bronze: 'Hora marcada,',
  bronzeItalic: 'sem fila no balc\u00e3o.',
  // [CONFIRM-BIODONTH: distance to Estação Artur Alvim, parking availability. Edit if inaccurate.]
  description:
    'Em Artur Alvim, zona leste de S\u00e3o Paulo, a poucos minutos do metr\u00f4. Marque um hor\u00e1rio que cabe na sua vida \u2014 n\u00e3o no hor\u00e1rio de uma fila \u2014 e seja recebido na hora que combinamos.',
  labels: {
    address: 'Endere\u00e7o',
    hours: 'Atendimento',
    contact: 'Contato',
    directions: 'Como chegar',
    schedule: 'Agendar consulta',
    whatsappPrefix: 'WhatsApp',
    phonePrefix: 'Telefone',
  },
  mapQuery: 'Rua Desembargador Rocha Portela, 1012, Artur Alvim, S\u00e3o Paulo, SP',
} as const;

export const FOOTER = {
  brand: {
    tagline: 'Odontologia integrada em Artur Alvim, S\u00e3o Paulo.',
    statement:
      'Desde 2015, recebendo quem decidiu cuidar do sorriso com calma. Poucos pacientes por dia. Planos completos. Equipe inteira pensando o seu caso.',
  },
  columns: {
    navigate: {
      label: 'Navegar',
      links: [
        { label: 'In\u00edcio',        href: '/' },
        { label: 'Tratamentos',   href: '/tratamentos' },
        { label: 'Preven\u00e7\u00e3o',     href: '/prevencao' },
        { label: 'Especialistas', href: '/especialistas' },
        { label: 'Sobre',         href: '/sobre' },
        { label: 'Depoimentos',   href: '/#depoimentos' },
        { label: 'D\u00favidas',       href: '/#duvidas' },
        { label: 'Blog',          href: '/blog' },
        { label: 'Contato',       href: '/contato' },
      ],
    },
    contact: { label: 'Contato' },
    social:  { label: 'Acompanhe' },
  },
  cta: { label: 'Agendar consulta' },
  legal: {
    copyright: (year: number) =>
      `\u00a9 ${year} Biodonth Odontologia Integrada. Todos os direitos reservados.`,
    cro: 'CRO-SP: 00000', // TODO: replace with CRO of responsible technician
    privacyLink: { label: 'Pol\u00edtica de privacidade', href: '/politica-de-privacidade' },
    termsLink:   { label: 'Termos de uso',           href: '/termos-de-uso' },
  },
  fab: {
    ariaLabel: 'Falar no WhatsApp com a Biodonth',
    tooltip: 'Fale conosco',
  },
} as const;
