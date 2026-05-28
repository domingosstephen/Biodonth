// Homepage copy — persuasion-driven, transformation-centered, PT-BR.
// Named mechanism: "Consulta sem pressa"
// Voice principle: patient is the protagonist; the clinic is the guide; convênio is the silent antagonist.
//
// CLAIMS TAGGED [CONFIRM-BIODONTH] need verification with Biodonth's operating reality.

export const HOME_HERO = {
  eyebrow: 'Odontologia integrada \u2022 Artur Alvim',
  bronze: 'Volte a sorrir com segurança,',
  bronzeItalic: 'cuidado e confiança.',
  subhead:
    'Na Biodonth, cada sorriso é avaliado de forma individual, com atenção à sua saúde bucal, às suas necessidades e aos seus objetivos. Nossa responsável técnica conduz um atendimento humanizado, sem pressa e com planejamento personalizado, para que você entenda cada etapa do tratamento antes de tomar qualquer decisão.',
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
  text: 'Desde 2015, unimos experiência, tecnologia e cuidado para transformar sorrisos.',
} as const;

export const HOME_VIDEO = {
  eyebrow: 'Como é estar aqui',
  bronze: 'Aqui, o cuidado começa',
  bronzeItalic: 'antes do tratamento.',
  description:
    'Quando você chega à Biodonth, a primeira sensação deve ser de acolhimento. Um ambiente tranquilo, uma conversa sem pressa e uma equipe preparada para ouvir sua história antes de falar sobre procedimentos. Porque, para nós, cada tratamento começa com confiança.',
  videoSrc: '/videos/biodonth-tour.mp4',
  posterSrc: '/images/video/biodonth-tour-poster.jpg',
  posterFallback:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80&auto=format&fit=crop',
  ariaLabel: 'V\u00eddeo institucional da cl\u00ednica Biodonth Odontologia Integrada',
  durationLabel: '1 min',
} as const;

export const HOME_TREATMENTS = {
  eyebrow: 'O que sabemos fazer',
  bronze: 'Uma equipe integrada para cuidar',
  bronzeItalic: 'do seu sorriso por completo.',
  description:
    'Na Biodonth, seu tratamento não é visto em partes isoladas. Da limpeza ao implante, da ortodontia à reabilitação, cada especialidade conversa com a outra para construir um plano mais completo, seguro e personalizado.\nVocê não precisa passar por vários lugares, repetir sua história ou tentar juntar opiniões diferentes. Aqui, a equipe olha para o seu caso como um todo — e isso faz toda diferença no resultado.',
  ctaLabel: 'Ver todos os tratamentos',
  ctaHref: '/tratamentos',
} as const;

export const HOME_BEFORE_AFTER = {
  eyebrow: 'Resultados de quem decidiu começar',
  bronze: 'Toda transformação começa',
  bronzeItalic: 'com uma decisão.',
  description:
    'Muitos dos pacientes que passam pela Biodonth chegaram até nós após adiar o tratamento por medo, insegurança ou por acreditarem que não havia mais solução. Com planejamento, cuidado e acompanhamento, cada caso encontra um caminho possível.\nArraste a barra e veja a transformação entre o antes e o depois.',
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
  bronze: 'Hora marcada, atendimento',
  bronzeItalic: 'com mais tranquilidade.',
  description:
    'Estamos na zona leste de São Paulo, a poucos minutos do metrô Artur Alvim. Agende sua consulta e conte com um atendimento organizado, acolhedor e pensado para respeitar o seu tempo.',
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
