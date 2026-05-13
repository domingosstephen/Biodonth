// PT-BR copy for the /contato page.

export const CONTATO_PAGE = {
  metadata: {
    title: 'Contato | Biodonth Odontologia Integrada',
    description:
      'Fale com a Biodonth pelo WhatsApp, telefone ou formul\u00e1rio. Em Artur Alvim, S\u00e3o Paulo. Atendimento Seg-Sex 08h-17h, S\u00e1bado 09h-14h.',
  },

  hero: {
    eyebrow: 'Fale conosco',
    bronze: 'Sua primeira consulta',
    bronzeItalic: 'come\u00e7a com uma conversa.',
    description:
      'Pode ser pelo WhatsApp, por telefone, ou por escrito. O importante \u00e9 come\u00e7ar \u2014 porque o restante a gente combina junto.',
  },

  expect: {
    eyebrow: 'O que esperar',
    title: 'Tr\u00eas coisas que sempre acontecem',
    titleItalic: 'antes de qualquer tratamento.',
    items: [
      {
        number: '01',
        title: 'Tempo de sobra para escutar.',
        body:
          'A primeira consulta tem tempo de sobra. Conversamos sobre o que te trouxe aqui, examinamos sem pressa, e mapeamos o quadro inteiro antes de propor qualquer coisa.',
      },
      {
        number: '02',
        title: 'Plano de tratamento na sua m\u00e3o.',
        body:
          'Voc\u00ea sai com um plano escrito \u2014 etapas, prazos, valores, op\u00e7\u00f5es. Para levar para casa, pensar com calma, comparar se quiser, voltar quando estiver pronto.',
      },
      {
        number: '03',
        title: 'Nenhuma press\u00e3o para fechar.',
        body:
          'N\u00e3o pedimos compromisso na primeira consulta. Sem desconto-rel\u00e2mpago, sem urg\u00eancia fabricada, sem \u201cse voc\u00ea assinar hoje\u201d. A decis\u00e3o \u00e9 sua, no seu tempo.',
      },
    ],
  },

  channels: {
    eyebrow: 'Canais diretos',
    title: 'Escolha como prefere',
    titleItalic: 'iniciar a conversa.',
    whatsapp: {
      label: 'WhatsApp',
      description: 'O canal mais r\u00e1pido. Resposta normalmente no mesmo dia.',
      cta: 'Falar no WhatsApp',
    },
    phone: {
      label: 'Telefone',
      description: 'Para quem prefere uma liga\u00e7\u00e3o direta.',
      cta: 'Ligar agora',
    },
    email: {
      label: 'E-mail',
      description: 'Para mensagens longas, documentos ou exames.',
      cta: 'Enviar e-mail',
    },
    visit: {
      label: 'Visita presencial',
      description: 'Atendemos com hora marcada \u2014 sem agendamento, n\u00e3o conseguimos receber.',
    },
  },

  form: {
    title: 'Prefere escrever?',
    description:
      'Preencha em 30 segundos. Voc\u00ea \u00e9 direcionado ao WhatsApp com a mensagem j\u00e1 pronta \u2014 s\u00f3 revisar e enviar.',
    fields: {
      name: {
        label: 'Como podemos te chamar?',
        placeholder: 'Seu nome',
      },
      phone: {
        label: 'Seu WhatsApp',
        placeholder: '(11) 9XXXX-XXXX',
        hint: 'Para que possamos retornar caso a conversa se interrompa.',
      },
      treatment: {
        label: 'Qual tratamento te interessa? (opcional)',
        placeholder: 'Selecione um tratamento',
        defaultLabel: 'Ainda n\u00e3o sei / quero conversar',
      },
      message: {
        label: 'Conte um pouco sobre o que te trouxe aqui',
        placeholder: 'Pode ser uma frase, um par\u00e1grafo, ou s\u00f3 \u201cpreciso de uma consulta\u201d. A gente conversa o resto.',
      },
    },
    submitLabel: 'Continuar no WhatsApp',
    privacy:
      'N\u00e3o enviamos as suas mensagens por e-mail \u2014 elas v\u00e3o direto para o WhatsApp da cl\u00ednica. Seus dados n\u00e3o saem daqui.',
  },

  closing: {
    eyebrow: 'Onde estamos',
    bronze: 'A poucos minutos',
    bronzeItalic: 'de onde voc\u00ea est\u00e1.',
    description:
      'Em Artur Alvim, zona leste de S\u00e3o Paulo. Atendemos com hora marcada \u2014 basta avisar que voc\u00ea est\u00e1 vindo.',
    primaryCtaLabel: 'Como chegar',
    secondaryCtaLabel: 'Conhecer a cl\u00ednica',
    secondaryCtaHref: '/sobre',
  },

  breadcrumb: {
    home: 'In\u00edcio',
    current: 'Contato',
  },
} as const;
