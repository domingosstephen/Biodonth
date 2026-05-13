// PT-BR long-form content for /prevencao/[slug] pages.
// 6 audiences × 7 sections each. Single source of truth for audience subpage text.
// Voice: 60-minute consultation mechanism, written plan, no-pressure stance — reframed per life stage.
//
// [CONFIRM-BIODONTH] tags mark claims that need verification with Biodonth's operating reality.

export type PrevencaoFaqItem = { question: string; answer: string };

export type PrevencaoContent = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    bronze: string;
    bronzeItalic: string;
    description: string;
  };
  why: {
    eyebrow: string;
    title: string;
    titleItalic: string;
    paragraphs: string[];
  };
  included: {
    eyebrow: string;
    title: string;
    titleItalic: string;
    intro: string;
    items: { title: string; body: string }[];
  };
  signals: {
    eyebrow: string;
    title: string;
    titleItalic: string;
    intro: string;
    list: string[];
    bridge: string;
  };
  how: {
    eyebrow: string;
    title: string;
    titleItalic: string;
    intro: string;
    steps: { number: string; title: string; body: string }[];
  };
  faq: PrevencaoFaqItem[];
  closing: {
    eyebrow: string;
    bronze: string;
    bronzeItalic: string;
    description: string;
  };
};

export const PREVENCAO_CONTENT: Record<string, PrevencaoContent> = {

  // ─────────────────────────────────────────────
  'checkup-digital': {
    metadata: {
      title: 'Check-up preventivo digital',
      description: 'Check-up odontológico digital em Artur Alvim — exame com imagens intra-orais ampliadas em até 60× para detectar problemas em estágios iniciais. Sem dor, sem stress.',
    },
    hero: {
      eyebrow: 'Prevenção • Check-up digital',
      bronze: 'O exame que mostra',
      bronzeItalic: 'o que você não vê.',
      description: 'O check-up preventivo digital usa imagens intra-orais ampliadas em até 60 vezes para detectar pequenos problemas antes que virem grandes tratamentos. É a primeira visita que faz tudo o mais funcionar.',
    },
    why: {
      eyebrow: 'Por que este exame',
      title: 'O olho humano',
      titleItalic: 'não chega lá.',
      paragraphs: [
        'A maior parte dos problemas odontológicos começa pequena: uma micro-trinca no esmalte, uma mancha branca quase imperceptível, um início de retração gengival. Em escala normal, o dentista vê o que dá para ver — e tudo o mais segue invisível até virar dor.',
        'O check-up preventivo digital muda essa equação. Uma câmera intra-oral captura imagens de cada dente e amplia em até 60 vezes do tamanho natural, projetando em monitor. Pequenas alterações que passariam despercebidas em uma consulta convencional aparecem claramente — e podem ser tratadas com intervenções mínimas, frequentemente sem anestesia, sem dor, e a custo significativamente menor do que se virassem urgência.',
        'O exame não é diagnóstico de doença instalada — é mapeamento do que ainda não chegou lá. Os pacientes que fazem este exame uma vez por ano tendem a precisar de menos tratamentos invasivos ao longo da vida.',
      ],
    },
    included: {
      eyebrow: 'O que inclui',
      title: 'Cada exame entrega',
      titleItalic: 'um diagnóstico completo.',
      intro: 'O check-up digital completo é feito em uma sessão única de aproximadamente 60 minutos, e inclui todos os elementos abaixo. Você sai da clínica com o resultado em mãos.',
      items: [
        {
          title: 'Avaliação clínica completa.',
          body: 'Antes da câmera, o exame visual tradicional: gengiva, dentes, mordida, articulação da mandíbula, língua, palato. A base do diagnóstico continua sendo o olhar treinado do profissional.',
        },
        {
          title: 'Captação intra-oral com câmera digital.',
          body: 'Câmera intra-oral de alta resolução percorre cada dente, captando imagens em ângulos múltiplos. Você acompanha em tempo real no monitor — é o seu próprio dente, ampliado, à sua frente.',
        },
        {
          title: 'Avaliação de pontos críticos.',
          body: 'Identificação de áreas com início de cárie, micro-fraturas, manchas brancas (descalcificações iniciais), retrações gengivais incipientes, e qualquer alteração que mereça acompanhamento.',
        },
        {
          title: 'Relatório fotográfico do exame.',
          body: 'Você recebe um relatório com as imagens mais relevantes, anotações de cada achado, e recomendações específicas — desde "manter higiene atual, retornar em 12 meses" até intervenções pontuais sugeridas. Tudo escrito, para levar.',
        },
        {
          title: 'Plano de prevenção personalizado.',
          body: 'Com base no exame, montamos um plano de prevenção individualizado: frequência de profilaxia recomendada, técnica de escovação ajustada ao seu caso, uso de fluoreto se indicado, e cronograma de retornos.',
        },
      ],
    },
    signals: {
      eyebrow: 'Sinais para buscar agora',
      title: 'Quando vale',
      titleItalic: 'agendar o exame.',
      intro: 'O check-up digital é recomendado para todas as idades, idealmente uma vez por ano. Algumas situações tornam o agendamento mais urgente:',
      list: [
        'Faz mais de 12 meses desde o seu último check-up odontológico completo.',
        'Você nota pequenas alterações de cor, textura ou sensibilidade que não consegue identificar precisamente.',
        'Mudou recentemente de dentista e quer um diagnóstico de base independente do histórico anterior.',
        'Está prestes a começar um tratamento estético maior (clareamento, facetas, ortodontia) e quer mapear o estado atual antes de começar.',
        'Tem histórico familiar forte de cáries, doença periodontal ou outras condições odontológicas — predisposição genética é fator de risco.',
        'Pratica esportes com risco de impacto na face — vale documentar o estado dental antes da temporada.',
      ],
      bridge: 'O exame não tem requisito mínimo: pode ser feito por qualquer pessoa a partir dos 3 anos de idade (a partir desta idade as crianças costumam colaborar com a câmera).',
    },
    how: {
      eyebrow: 'Como o exame acontece',
      title: 'Sessenta minutos.',
      titleItalic: 'Você sai com tudo na mão.',
      intro: 'Diferente das consultas tradicionais, o check-up digital é um exame completo que entrega resultado no mesmo dia. Não há "voltar para retirar o laudo" — você sai sabendo o que tem e o que fazer.',
      steps: [
        {
          number: '01',
          title: 'Conversa inicial.',
          body: 'Os primeiros 10-15 minutos são conversa: histórico de saúde, queixas atuais (mesmo as pequenas), hábitos, frequência de escovação, medicações em uso. Esse contexto define o que o exame vai procurar com mais atenção.',
        },
        {
          number: '02',
          title: 'Exame clínico tradicional.',
          body: 'Avaliação visual e tátil convencional: dentes, gengiva, mordida, articulação. Cerca de 10 minutos.',
        },
        {
          number: '03',
          title: 'Captação digital.',
          body: 'A câmera intra-oral percorre cada dente — você acompanha no monitor. Esta é a parte mais reveladora do exame: ver os seus próprios dentes ampliados é, para a maioria dos pacientes, uma experiência inédita. Aproximadamente 20-25 minutos.',
        },
        {
          number: '04',
          title: 'Discussão dos achados.',
          body: 'Sentamos juntos para revisar as imagens captadas. Mostramos o que foi identificado, explicamos o significado clínico de cada achado, e respondemos perguntas. Você sai entendendo o estado atual da sua boca com nível de detalhe que poucas vezes uma consulta odontológica entrega.',
        },
        {
          number: '05',
          title: 'Entrega do relatório e plano.',
          body: 'Antes de você sair, recebe o relatório com as imagens principais, as observações de cada achado, e o plano personalizado de prevenção. Tudo escrito, com prazos claros para retornos. Não fechamos tratamentos no mesmo dia — se houver intervenções recomendadas, você leva para pensar.',
        },
      ],
    },
    faq: [
      {
        question: 'O exame dói?',
        answer: 'Não. A câmera intra-oral é um instrumento de imagem, similar a um espelho odontológico — não há nenhum procedimento invasivo. Pode haver leve desconforto momentâneo ao posicionar a câmera em pontos sensíveis (especialmente atrás dos dentes do siso), mas não há dor.',
      },
      {
        question: 'É melhor que radiografia?',
        answer: 'É complementar. A radiografia mostra o que está sob a superfície (dentro do dente, no osso). A câmera digital mostra o que está sobre a superfície em altíssima ampliação. Os dois exames se completam — em muitos casos, fazemos os dois.',
      },
      {
        question: 'Crianças podem fazer?',
        answer: 'Sim, a partir dos 3 anos de idade aproximadamente, quando a criança colabora com a câmera dentro da boca. Em crianças muito pequenas, o exame visual tradicional é mais adequado. Em adolescentes e adultos, o exame digital é padrão.',
      },
      {
        question: 'Preciso fazer todo ano?',
        answer: 'A recomendação é anual, sim — porque pequenas alterações que ainda não são problemas se desenvolvem em meses. Pacientes com risco elevado (histórico de cáries, gengivite, fumantes, diabéticos) podem se beneficiar de exames mais frequentes (a cada 6 meses).',
      },
      {
        question: 'O exame substitui a profilaxia?',
        answer: 'Não. Profilaxia (limpeza profissional) e check-up digital são tratamentos diferentes. Idealmente, fazemos os dois na mesma sessão para otimizar a sua agenda — mas eles têm objetivos distintos: profilaxia limpa, check-up digital diagnostica.',
      },
    ],
    closing: {
      eyebrow: 'Próximos passos',
      bronze: 'O primeiro exame',
      bronzeItalic: 'do ano começa aqui.',
      description: 'Se faz mais de 12 meses que você não passa por um check-up completo, esse é o ponto. Sessenta minutos, relatório na mão, plano para o ano. Sem pressão, sem urgência fabricada.',
    },
  },

  // ─────────────────────────────────────────────
  'kids': {
    metadata: {
      title: 'Odontopediatria preventiva (Kids)',
      description: 'Programa preventivo odontológico para crianças em Artur Alvim — primeira ida ao dentista sem trauma, com profissionais especializados em odontopediatria.',
    },
    hero: {
      eyebrow: 'Prevenção • Kids',
      bronze: 'A primeira ida,',
      bronzeItalic: 'sem trauma.',
      description: 'A relação que seu filho terá com o cuidado bucal pela vida inteira começa na primeira visita. Aqui, ela começa bem — sem dor, sem pressão, sem "abre a boca".',
    },
    why: {
      eyebrow: 'Por que começar cedo',
      title: 'A primeira consulta',
      titleItalic: 'define a próxima década.',
      paragraphs: [
        'A maior parte dos adultos com pavor de dentista — e estima-se que sejam mais de 30% da população brasileira — tiveram uma primeira experiência traumática na infância. Algo doloroso, súbito, sem explicação prévia. A imagem ficou. O medo se consolidou. E persiste, agora, em decisões evitadas por décadas.',
        'O caminho contrário é igualmente poderoso. Crianças que conhecem o consultório antes de qualquer dor, que constroem familiaridade com o dentista como construiriam com qualquer outro adulto da rotina, chegam à vida adulta com uma relação completamente diferente com o cuidado bucal. Escovam por hábito, não por cobrança. Vão ao dentista sem reclamar. Tratam a boca como tratam o resto do corpo: com atenção contínua, não em reação a problemas.',
        'O programa Kids da Biodonth é desenhado para essa segunda trajetória. A primeira ida é planejada para que toda ida seguinte parta de um lugar tranquilo.',
      ],
    },
    included: {
      eyebrow: 'O que inclui',
      title: 'Não é uma consulta.',
      titleItalic: 'É uma visita.',
      intro: 'A primeira consulta de uma criança até 3 anos é, na prática, uma conversa entre o odontopediatra e os pais, com a criança presente. A partir dos 3-4 anos, ganha estrutura de consulta. Em todas as idades, o foco é a relação — não o procedimento.',
      items: [
        {
          title: 'Conversa com os pais.',
          body: 'Antes de qualquer coisa, uma conversa estruturada com os responsáveis: alimentação, uso de chupeta/mamadeira, técnica de higiene, hábitos como roer unha ou ranger dentes. Saímos com orientações práticas e específicas para a sua criança.',
        },
        {
          title: 'Adaptação ao consultório.',
          body: 'A criança explora o espaço no seu ritmo. Senta na cadeira sem obrigação, manipula o espelhinho, vê os instrumentos sem que sejam usados nela. Familiaridade construída antes de qualquer procedimento.',
        },
        {
          title: 'Avaliação clínica (quando a criança colabora).',
          body: 'A partir do momento em que a criança permite — geralmente entre 2 e 4 anos, varia muito —, fazemos o exame clínico completo. Em crianças mais novas, no colo dos pais. Em crianças mais velhas, na cadeira como um adulto.',
        },
        {
          title: 'Aplicação de flúor (quando indicado).',
          body: 'Para crianças com risco de cárie, aplicação tópica de flúor é uma intervenção preventiva simples e rápida. Não é dolorosa, e a criança colabora normalmente.',
        },
        {
          title: 'Cronograma de retornos.',
          body: 'Os pais saem com a frequência recomendada de retornos (geralmente a cada 6 meses), com orientações entre as consultas, e com canal aberto para dúvidas. O programa Kids continua entre as visitas.',
        },
      ],
    },
    signals: {
      eyebrow: 'Sinais para buscar agora',
      title: 'Quando agendar',
      titleItalic: 'a primeira ida.',
      intro: 'A recomendação atual da Sociedade Brasileira de Odontopediatria é primeira consulta entre 6 e 12 meses de idade — ou logo após o nascimento do primeiro dente. Mas não há "tarde demais": qualquer idade até a adolescência é o momento certo se ainda não houve uma primeira visita.',
      list: [
        'Seu filho ainda não foi a um dentista, e está na faixa de 6 meses a 12 anos.',
        'Apareceu uma mancha branca, marrom ou escura em algum dente.',
        'A criança apresenta dor ao mastigar, ao beber gelado, ou aponta para a boca quando come.',
        'Há queda de algum dente por trauma (queda, bate na face).',
        'Você nota uso prolongado de chupeta ou hábito de sucção do dedo passados os 3 anos.',
        'A criança ronca alto, dorme de boca aberta ou respira pela boca durante o dia.',
        'Houve atraso no nascimento dos primeiros dentes (após 14 meses sem nenhum dente).',
      ],
      bridge: 'Nenhum desses sinais, isoladamente, é emergência. Mas qualquer um deles é razão suficiente para marcar a primeira consulta agora.',
    },
    how: {
      eyebrow: 'Como o programa funciona',
      title: 'O cuidado',
      titleItalic: 'que se constrói por anos.',
      intro: 'O programa Kids não é uma consulta isolada — é um relacionamento que se constrói ao longo dos anos formativos da criança. Cada consulta se apoia na anterior.',
      steps: [
        {
          number: '01',
          title: 'Primeira consulta — só para conhecer.',
          body: 'Tempo de sobra (frequentemente os 60 minutos completos), conversa com os pais, adaptação da criança ao espaço, e avaliação inicial quando viável. Se a criança não permite muito no primeiro dia, voltamos. Sem forçar.',
        },
        {
          number: '02',
          title: 'Consultas semestrais de acompanhamento.',
          body: 'A cada 6 meses, retorno para profilaxia leve, avaliação do desenvolvimento da boca, e orientação atualizada conforme a criança cresce (mudança de dentes de leite para permanentes, mudanças de alimentação, novas habilidades de escovação).',
        },
        {
          number: '03',
          title: 'Intervenções, quando necessárias.',
          body: 'Quando há cáries, traumas ou outras situações que exigem tratamento, conduzimos com técnicas atraumáticas sempre que possível. Em casos mais sensíveis, sedação consciente pode ser indicada — sempre conversada com os pais antes. Nada é feito por surpresa.',
        },
        {
          number: '04',
          title: 'Transição para o paciente adulto.',
          body: 'Ao chegar na adolescência, conversamos sobre transição para acompanhamento adulto na clínica. Muitos pacientes que começaram conosco aos 5 anos continuam aqui aos 25 — é essa a continuidade que a odontopediatria preventiva constrói.',
        },
      ],
    },
    faq: [
      {
        question: 'A partir de que idade?',
        answer: 'A recomendação atual da Sociedade Brasileira de Odontopediatria é primeira consulta entre 6 e 12 meses, ou logo após o nascimento do primeiro dente. Não há cedo demais. Há tarde — e tarde só virou tarde se nunca foi.',
      },
      {
        question: 'Vai ter choro?',
        answer: 'Em crianças muito pequenas (até 2 anos), choro de estranhamento é comum e não significa que algo deu errado — significa que a criança está reagindo ao ambiente novo. Em crianças preparadas em casa com tranquilidade, o choro é exceção. Em todas as idades, nunca forçamos procedimento se a criança está em sofrimento real.',
      },
      {
        question: 'Posso ficar na sala?',
        answer: 'Sim, sempre, em todas as idades. Os pais permanecem na sala durante toda a consulta. Em casos pontuais (crianças muito ansiosas que se acalmam mais sem os pais por perto), podemos sugerir que vocês fiquem na sala de espera — mas é exceção, e sempre combinado.',
      },
      {
        question: 'Tem que escovar os dentes do bebê?',
        answer: 'Sim. Mesmo antes do primeiro dente, recomenda-se limpar a boca do bebê com gaze úmida após mamadas. A partir do primeiro dente, escova de cerdas macias específica para a idade, com pasta com flúor em quantidade mínima (do tamanho de um grão de arroz). Os detalhes específicos para o seu bebê saem na primeira consulta.',
      },
      {
        question: 'E se meu filho tiver cárie?',
        answer: 'Cárie em dente de leite não é "vai cair de qualquer jeito" — pode causar dor, infecção e afetar o desenvolvimento dos dentes permanentes. Tratamos com técnicas atraumáticas quando possível (cimentos especiais que dispensam broca em casos iniciais), e com sedação consciente nos casos mais complexos. Sempre conversado com os pais antes.',
      },
    ],
    closing: {
      eyebrow: 'Próximos passos',
      bronze: 'A relação tranquila',
      bronzeItalic: 'começa hoje.',
      description: 'A primeira visita do seu filho não precisa ser uma consulta dolorosa em resposta a algum problema. Pode ser uma visita planejada, sem trauma, antes de qualquer urgência. Esse é o ponto de partida do programa Kids.',
    },
  },

  // ─────────────────────────────────────────────
  'gestante': {
    metadata: {
      title: 'Odontologia para gestantes',
      description: 'Acompanhamento odontológico preventivo durante a gestação, com segurança para mãe e bebê. Em Artur Alvim, com primeira consulta de 60 minutos.',
    },
    hero: {
      eyebrow: 'Prevenção • Gestante',
      bronze: 'A boca também',
      bronzeItalic: 'muda na gestação.',
      description: 'Gravidez muda o corpo inteiro — e a boca não é exceção. Acompanhamento odontológico específico, com segurança para você e para o bebê, em cada trimestre.',
    },
    why: {
      eyebrow: 'Por que cuidar agora',
      title: 'O que a gestação',
      titleItalic: 'faz com a sua boca.',
      paragraphs: [
        'As mudanças hormonais da gestação afetam diretamente a boca, frequentemente de formas que a gestante não associa imediatamente à gravidez. Aumento de sangramento gengival ao escovar, gengiva mais sensível e inchada, salivação alterada, maior susceptibilidade a cáries — tudo isso é resultado de processos hormonais e fisiológicos próprios desta fase.',
        'Esses sintomas não são "frescura" e não passam sozinhos. Sem cuidado adequado, podem evoluir: a gengivite gestacional pode virar periodontite, e estudos relacionam doença periodontal grave durante a gestação a maior risco de parto prematuro e baixo peso ao nascer. A relação é estatística, não determinante — mas existe, e é evitável.',
        'A boa notícia: a maior parte dos cuidados odontológicos durante a gestação é segura, quando feita por profissionais que conhecem as particularidades de cada trimestre. O programa Gestante da Biodonth é desenhado exatamente para isso.',
      ],
    },
    included: {
      eyebrow: 'O que inclui',
      title: 'Cuidado adaptado',
      titleItalic: 'a cada trimestre.',
      intro: 'O programa Gestante acompanha você do início da gestação até o pós-parto. Cada trimestre tem peculiaridades — o que pode ser feito em segurança muda ao longo dos 9 meses.',
      items: [
        {
          title: 'Avaliação completa no início da gestação.',
          body: 'Idealmente no primeiro trimestre, avaliação clínica completa para identificar qualquer condição que precise de atenção. É o melhor momento para tratamentos de gengiva, profilaxias profundas, e cuidados de prevenção antes que o corpo entre em mudanças mais intensas.',
        },
        {
          title: 'Profilaxia em frequência ajustada.',
          body: 'Recomendamos profilaxia a cada 3-4 meses durante a gestação (em vez dos 6 meses convencionais), porque a tendência ao acúmulo de placa e ao sangramento aumenta. A profilaxia em si é completamente segura em todos os trimestres.',
        },
        {
          title: 'Orientação personalizada de higiene.',
          body: 'Técnicas de escovação adaptadas para gengiva mais sensível, escolha de escova ideal, uso de enxaguante apropriado (alguns enxaguantes não são recomendados durante a gestação — orientamos quais), técnica de fio dental sem agredir gengiva inflamada.',
        },
        {
          title: 'Tratamento de gengivite gestacional, quando presente.',
          body: 'A gengivite gestacional é tratada com profilaxia profunda e ajustes de higiene. Quando necessário, raspagem subgengival no segundo trimestre — o período mais seguro para qualquer intervenção odontológica.',
        },
        {
          title: 'Acompanhamento do pós-parto.',
          body: 'Após o parto, retomada do cuidado regular. Algumas mudanças hormonais persistem durante a amamentação, e o programa Gestante se estende até a estabilização — em geral 2-3 meses após o nascimento do bebê.',
        },
      ],
    },
    signals: {
      eyebrow: 'Sinais para buscar agora',
      title: 'Quando marcar',
      titleItalic: 'sem adiar.',
      intro: 'Idealmente, a consulta odontológica gestacional acontece no primeiro trimestre, depois de confirmar a gravidez. Mas qualquer dos sinais abaixo torna o agendamento imediato:',
      list: [
        'Você descobriu que está grávida e ainda não fez consulta odontológica nesta gestação.',
        'A gengiva sangra ao escovar, e sangra mais agora do que sangrava antes da gravidez.',
        'Há sensibilidade aumentada nos dentes ao consumir bebidas frias ou quentes.',
        'Você nota um caroço pequeno e avermelhado na gengiva (granuloma gravídico — comum, tratável, mas precisa de avaliação).',
        'Tem dor de dente, mesmo leve — qualquer dor durante a gestação merece avaliação para que não vire urgência mais à frente.',
        'Está com náuseas frequentes (a acidez do estômago refluindo afeta o esmalte; há cuidados específicos para isso).',
        'Tem histórico de doença periodontal antes da gestação — o risco de agravamento é maior.',
      ],
      bridge: 'Em situações de emergência odontológica durante a gestação, o cuidado é igualmente possível — com adaptações específicas. Não adie por medo de "não pode tratar grávida". Pode, sim, e deve.',
    },
    how: {
      eyebrow: 'Como o programa funciona',
      title: 'Sessenta minutos,',
      titleItalic: 'com segurança como base.',
      intro: 'O programa Gestante começa com uma primeira consulta especialmente cuidadosa — porque há muito a conversar antes de tocar em qualquer coisa.',
      steps: [
        {
          number: '01',
          title: 'Primeira consulta — conversa estendida.',
          body: 'Os primeiros 20 minutos são conversa: histórico geral, idade gestacional, dados do pré-natal, medicações em uso, queixas atuais. Trabalhamos em coordenação com o seu obstetra quando necessário — para garantir que qualquer intervenção seja segura para a sua gestação específica.',
        },
        {
          number: '02',
          title: 'Avaliação clínica completa.',
          body: 'Exame visual cuidadoso, com atenção especial à gengiva (área onde as mudanças hormonais se manifestam mais), aos dentes, e à mordida. Em casos onde radiografia é necessária, usamos avental de chumbo e protocolo de raio-X com dose minimizada — radiografias odontológicas são seguras durante a gestação quando feitas com as proteções adequadas, especialmente após o primeiro trimestre.',
        },
        {
          number: '03',
          title: 'Apresentação do plano gestacional.',
          body: 'Você sai com um plano de cuidado escrito que cobre os 9 meses da gestação e os 2-3 meses pós-parto. Ele especifica: frequência de profilaxia, intervenções recomendadas e o trimestre ideal para cada uma, e orientações de cuidado domiciliar. Tudo pensado em torno do calendário da sua gravidez.',
        },
        {
          number: '04',
          title: 'Acompanhamento ao longo da gestação.',
          body: 'Consultas a cada 3-4 meses, mais frequentes se houver tratamentos em andamento. O segundo trimestre (semanas 14-28) é o período mais favorável para qualquer intervenção que não seja de urgência — e estruturamos o cronograma em torno disso.',
        },
        {
          number: '05',
          title: 'Cuidado especial do bebê após o nascimento.',
          body: 'Quando o bebê nasce, o programa Kids da Biodonth está pronto para receber. A primeira consulta odontopediátrica do bebê pode ser agendada já no primeiro mês, e os mesmos profissionais que cuidaram da gestação cuidam da continuidade.',
        },
      ],
    },
    faq: [
      {
        question: 'É seguro fazer dentista grávida?',
        answer: 'Sim, com adaptações. A grande maioria dos procedimentos odontológicos é segura durante a gestação, especialmente no segundo trimestre. Profilaxia, tratamento de gengivite, restaurações simples e raspagens podem ser feitas em qualquer trimestre. Tratamentos eletivos (clareamento, facetas) são adiados para depois do parto. Tratamentos de urgência são feitos quando necessários, com adaptações.',
      },
      {
        question: 'Posso tomar anestesia?',
        answer: 'Sim. A anestesia odontológica local é considerada segura durante a gestação, especialmente as formulações sem vasoconstrictor ou com vasoconstrictor em dose controlada (lidocaína 2% com adrenalina 1:200.000). Em casos específicos, conversamos com o seu obstetra antes de definir o protocolo.',
      },
      {
        question: 'E radiografia?',
        answer: 'Radiografias odontológicas são seguras durante a gestação quando feitas com proteção adequada (avental de chumbo cobrindo abdômen e tireoide) e quando clinicamente necessárias. Evitamos radiografias eletivas no primeiro trimestre por precaução adicional. Em casos onde imagem é essencial (suspeita de abscesso, planejamento de emergência), o protocolo seguro permite o procedimento.',
      },
      {
        question: 'Por que minha gengiva sangra mais agora?',
        answer: 'Porque os hormônios da gravidez (especialmente progesterona) aumentam a vascularização da gengiva, que fica mais sensível à inflamação. Mesmo com a mesma quantidade de placa bacteriana, a resposta inflamatória é maior. É chamado de gengivite gestacional, é comum, e é tratável. Não é normal e não deve ser ignorado — gengivite descontrolada pode evoluir para periodontite.',
      },
      {
        question: 'O bebê precisa começar a cuidar dos dentes desde já?',
        answer: 'A "saúde bucal do bebê" começa antes do primeiro dente. Durante a gestação, a sua nutrição afeta o desenvolvimento dos dentes do bebê. E após o nascimento, o cuidado bucal do bebê começa imediatamente — limpeza da boca com gaze úmida após mamadas, escovação assim que o primeiro dente nasce. Orientamos tudo isso ainda durante a gestação.',
      },
    ],
    closing: {
      eyebrow: 'Próximos passos',
      bronze: 'O cuidado começa',
      bronzeItalic: 'com segurança no primeiro lugar.',
      description: 'A primeira consulta do programa Gestante é desenhada para que você saia tranquila — sobre o que pode, sobre o que não pode, e sobre o que precisa ser feito quando. Sessenta minutos, plano escrito, sem decisão na hora.',
    },
  },

  // ─────────────────────────────────────────────
  'atleta': {
    metadata: {
      title: 'Odontologia para atletas',
      description: 'Programa preventivo odontológico para atletas em Artur Alvim — protetor bucal personalizado, prevenção de trauma, e o impacto da saúde bucal na performance.',
    },
    hero: {
      eyebrow: 'Prevenção • Atleta',
      bronze: 'A boca também',
      bronzeItalic: 'corre, salta, briga.',
      description: 'Performance atlética envolve corpo inteiro — boca incluída. Programa preventivo específico para atletas amadores e profissionais, com proteção, prevenção de trauma, e o que a saúde bucal tem a ver com seu desempenho.',
    },
    why: {
      eyebrow: 'Por que cuidar agora',
      title: 'Performance,',
      titleItalic: 'trauma e foco.',
      paragraphs: [
        'Atletas — amadores ou profissionais — submetem o corpo a cargas e riscos que a maioria das pessoas não conhece. A boca, por estar exposta, é uma das áreas mais vulneráveis. Trauma facial em esportes de contato. Desidratação afetando saliva e esmalte. Bruxismo de estresse competitivo. Alimentação rica em carboidratos rápidos. Suplementação com produtos ácidos.',
        'Mas há outro vetor menos visível: a saúde bucal afeta a performance. Inflamação gengival sistêmica reduz capacidade aeróbica em estudos consistentes. Dor dental compromete concentração. Má oclusão pode afetar respiração e postura. Foco no detalhe — incluindo o detalhe odontológico — é o que separa atletas que evoluem dos que estacionam.',
        'O programa Atleta da Biodonth é desenhado para esse conjunto: prevenção de trauma com protetores feitos sob medida, monitoramento dos efeitos colaterais odontológicos de treino intensivo, e otimização do que pode estar limitando o seu desempenho sem você notar.',
      ],
    },
    included: {
      eyebrow: 'O que inclui',
      title: 'Cuidado adaptado',
      titleItalic: 'ao seu esporte.',
      intro: 'O programa Atleta não é um pacote único — é adaptado ao esporte específico, ao nível de exposição a trauma, e ao calendário competitivo. Inclui os elementos abaixo conforme o seu caso.',
      items: [
        {
          title: 'Avaliação odontológica focada em atleta.',
          body: 'Exame clínico completo com atenção especial a desgastes oclusais (sinal de bruxismo), erosão de esmalte (sinal de exposição a bebidas ácidas), e mobilidade dentária (sinal de trauma prévio não diagnosticado).',
        },
        {
          title: 'Protetor bucal personalizado.',
          body: 'Para esportes com risco de impacto facial (lutas, boxe, MMA, futebol americano, hóquei, basquete, futebol amador competitivo, skate, BMX, esportes radicais em geral), confecção de protetor bucal sob medida — não os genéricos de farmácia. Protetor sob medida absorve impacto, fica seguro durante movimento intenso, e permite respirar e falar normalmente. Vida útil em torno de 12-18 meses.',
        },
        {
          title: 'Protocolo anti-bruxismo (quando indicado).',
          body: 'Atletas em fase competitiva intensa frequentemente desenvolvem bruxismo de estresse. Placa miorrelaxante de uso noturno (e em alguns casos diurno) reduz o desgaste dental e a tensão muscular facial, melhorando inclusive a qualidade do sono.',
        },
        {
          title: 'Orientação nutricional e de hidratação.',
          body: 'Conversa específica sobre suplementos (muitos são acidíficos e erodem esmalte se mal-utilizados), bebidas esportivas (idem), e estratégias para minimizar o impacto sem comprometer a performance. Recomendamos ajustes de timing, não restrições — você não vai parar de tomar isotônico, mas pode fazer diferente.',
        },
        {
          title: 'Acompanhamento sincronizado com calendário esportivo.',
          body: 'Profilaxia e ajustes programados para os períodos de menor competição (pré-temporada, off-season). Atletas em alta intensidade podem precisar de profilaxias trimestrais; atletas amadores, semestrais. Definido em conjunto.',
        },
      ],
    },
    signals: {
      eyebrow: 'Sinais para buscar agora',
      title: 'Quando vale',
      titleItalic: 'a primeira avaliação.',
      intro: 'Atletas em qualquer modalidade se beneficiam de avaliação odontológica especializada — mas alguns sinais tornam o agendamento prioritário:',
      list: [
        'Você pratica esporte com risco de impacto facial e ainda não usa protetor bucal sob medida.',
        'Acordou ou tem acordado com dor na mandíbula, dor de cabeça frontal, ou tensão na têmpora.',
        'Notou que seus dentes estão mais sensíveis ou aparentemente menores do que eram (desgaste por bruxismo ou erosão).',
        'Sofreu trauma facial em algum momento, mesmo leve — vale documentar se há algum dente "amolecido" ou alterado.',
        'Está em fase de aumento intenso de carga de treino ou competição.',
        'Consome regularmente bebidas esportivas, gel de carboidrato, ou suplementos pré-treino ácidos.',
        'Sente que sua respiração e foco em treino podem estar limitados sem motivo aparente — vale verificar se há fator dental contribuindo.',
      ],
      bridge: 'Nem todo atleta precisa de protetor (esportes sem contato não justificam). Mas todo atleta se beneficia de avaliação odontológica que conheça as exigências do seu esporte.',
    },
    how: {
      eyebrow: 'Como o programa funciona',
      title: 'Sessenta minutos,',
      titleItalic: 'plano por temporada.',
      intro: 'O programa Atleta integra ao seu calendário competitivo — não pede que você adapte sua vida ao consultório. Cada decisão é pensada em torno de quando você compete, quando recupera, e quando reforça.',
      steps: [
        {
          number: '01',
          title: 'Primeira consulta — perfil esportivo.',
          body: 'A conversa inicial passa por: esporte e modalidade, frequência de treino, nível competitivo (recreativo, amador, profissional), histórico de lesões, calendário competitivo do ano. Tudo isso define o que o programa vai priorizar.',
        },
        {
          number: '02',
          title: 'Avaliação clínica especializada.',
          body: 'Exame com olhar voltado a sinais específicos: desgastes oclusais, erosão de esmalte, sensibilidade ao frio, mobilidade dental, simetria da mordida, função da articulação mandibular. Em alguns casos, exames complementares (escaneamento, fotos de mordida em movimento).',
        },
        {
          number: '03',
          title: 'Apresentação do plano integrado.',
          body: 'Plano por escrito que detalha: confecção de protetor bucal (se indicado), placa miorrelaxante (se indicada), frequência de profilaxia adaptada ao seu calendário, orientações nutricionais específicas. Você sai entendendo exatamente o que protege a sua boca durante a temporada e o que otimiza fora dela.',
        },
        {
          number: '04',
          title: 'Confecção do protetor (quando indicado).',
          body: 'Para protetor bucal sob medida: moldagem precisa em uma sessão, confecção laboratorial em 7-10 dias, prova e ajustes em segunda sessão. O protetor é seu, com a sua mordida, com o seu nome se quiser. Não tem comparação com os genéricos.',
        },
        {
          number: '05',
          title: 'Acompanhamento programado.',
          body: 'Retornos a cada 3-6 meses dependendo do nível de exigência. Atletas em alta intensidade fazem mais ajustes; amadores intensos, em frequência semestral; recreativos, anual. Tudo definido em conjunto.',
        },
      ],
    },
    faq: [
      {
        question: 'Vale a pena protetor sob medida vs. genérico?',
        answer: 'Sim, em qualquer esporte com risco real de impacto. Protetores genéricos (de farmácia, de loja de esporte) são melhores que nada, mas têm encaixe imperfeito, podem soltar durante movimento intenso, e oferecem proteção significativamente menor contra concussões. Protetor sob medida custa mais, mas dura mais, protege mais, e permite respirar e comunicar melhor. Em esportes de alto contato, a diferença é importante.',
      },
      {
        question: 'Quanto tempo dura um protetor sob medida?',
        answer: 'Em uso regular (3-5 vezes por semana em treinos e competições), entre 12 e 24 meses. Indícios de que precisa trocar: deformação visível, perda de retenção (fica soltando), descoloração que não sai com limpeza, ou se você cresceu/mudou os dentes desde a confecção.',
      },
      {
        question: 'Suplementos e isotônicos podem prejudicar dentes?',
        answer: 'Podem, sim, se mal-utilizados. A maioria desses produtos é ácida (pH baixo) e em contato prolongado dissolve esmalte. Estratégias: consumir rapidamente em vez de "boquejar", enxaguar com água depois, esperar 30 minutos antes de escovar (escovar logo após acelera a erosão), e usar pasta com flúor reforçada. Você não precisa parar; precisa fazer diferente.',
      },
      {
        question: 'Bruxismo prejudica performance?',
        answer: 'Indiretamente, sim. Bruxismo noturno reduz qualidade do sono — e sono é onde a recuperação acontece. Sono comprometido reduz performance no dia seguinte. Bruxismo diurno (apertar dentes em foco) gera tensão na mandíbula e na face que pode afetar respiração e até postura. Placa miorrelaxante resolve a maioria dos casos.',
      },
      {
        question: 'Inflamação gengival realmente afeta desempenho?',
        answer: 'Estudos consistentes mostram correlação entre gengivite/periodontite e marcadores inflamatórios sistêmicos elevados. Esses marcadores reduzem capacidade aeróbica e prolongam tempo de recuperação. O efeito não é dramático em atletas amadores, mas para atletas que dependem de margens pequenas de performance, vale otimizar.',
      },
    ],
    closing: {
      eyebrow: 'Próximos passos',
      bronze: 'A boca também',
      bronzeItalic: 'merece treino.',
      description: 'Atletas cuidam de tudo — alimentação, sono, recuperação, equipamento. A boca entra na mesma lista. Sessenta minutos de primeira consulta, plano por temporada, sem urgência fabricada.',
    },
  },

  // ─────────────────────────────────────────────
  'empresa': {
    metadata: {
      title: 'Programa odontológico para empresas',
      description: 'Programa preventivo odontológico corporativo em Artur Alvim — check-ups regulares para colaboradores, com a qualidade da odontologia particular.',
    },
    hero: {
      eyebrow: 'Prevenção • Empresa',
      bronze: 'Benefício corporativo',
      bronzeItalic: 'que cuida de verdade.',
      description: 'Convênio odontológico tradicional entrega consultas curtas e padronizadas. O programa Empresa da Biodonth entrega odontologia particular para os seus colaboradores — com a qualidade real, não a aparência de qualidade.',
    },
    why: {
      eyebrow: 'Por que oferecer',
      title: 'Saúde bucal',
      titleItalic: 'também é capital humano.',
      paragraphs: [
        'Empresas que tratam saúde bucal como benefício secundário descobrem, com o tempo, o preço dessa decisão: absenteísmo por dor dental (mais comum do que se pensa), perda de produtividade em colaboradores com dor crônica, e uma percepção de "convênio que não cobre o que precisa" que erode a relação entre empresa e colaborador.',
        'A pesquisa em saúde ocupacional é consistente: colaboradores com saúde bucal monitorada apresentam menos faltas, melhor disposição, e maior satisfação geral com os benefícios oferecidos. O ROI do investimento em odontologia preventiva supera consistentemente o do investimento em convênios curativos.',
        'O programa Empresa da Biodonth foi desenhado como alternativa: em vez de cobertura ampla mas rasa (o modelo convênio), oferecemos cobertura focada e profunda — preventivo de qualidade, com possibilidade de tratamentos curativos em condições preferenciais para colaboradores que precisem.',
      ],
    },
    included: {
      eyebrow: 'O que inclui',
      title: 'Programa modular,',
      titleItalic: 'adaptado à sua empresa.',
      intro: 'O programa Empresa não é um pacote fechado — é construído junto com o RH ou área de wellness. Os elementos abaixo são as bases; a combinação certa depende do tamanho da empresa, perfil dos colaboradores, e orçamento disponível.',
      items: [
        {
          title: 'Check-ups preventivos anuais ou semestrais.',
          body: 'Cada colaborador participante recebe uma ou duas consultas preventivas por ano: avaliação clínica completa, profilaxia, e relatório individual. Frequência definida pela empresa.',
        },
        {
          title: 'Avaliação coletiva de saúde bucal (opcional).',
          body: 'Para empresas que querem dados agregados (sem identificação individual) sobre saúde bucal do quadro: relatório anual com indicadores gerais, identificação de áreas que demandam atenção, e recomendações de campanhas internas (semana de saúde, palestras, ações pontuais).',
        },
        {
          title: 'Condições preferenciais para tratamentos curativos.',
          body: 'Quando um colaborador é identificado com necessidade de tratamento, ele tem acesso a condições preferenciais — preços com desconto, parcelamento facilitado, e atendimento prioritário. A empresa pode optar por subsidiar parcial ou integralmente, definindo política em conjunto.',
        },
        {
          title: 'Palestras e ações educativas.',
          body: 'Workshops sobre saúde bucal no trabalho, sessões de orientação para colaboradores e dependentes, e materiais educativos personalizados. Frequência ajustada ao contrato.',
        },
        {
          title: 'Atendimento prioritário em urgências.',
          body: 'Colaboradores participantes têm canal direto para urgências (dor de dente, trauma, infecção). Encaixe no mesmo dia sempre que possível, sem fila.',
        },
      ],
    },
    signals: {
      eyebrow: 'Quando faz sentido',
      title: 'Sinais de que',
      titleItalic: 'sua empresa precisa.',
      intro: 'O programa Empresa faz sentido para diferentes tipos de organização — desde pequenas empresas (a partir de 10 colaboradores) até corporações com programas de wellness estabelecidos. Sinais de que é hora de avaliar:',
      list: [
        'Sua empresa não oferece benefício odontológico hoje, e está perdendo candidatos para concorrentes que oferecem.',
        'Oferece convênio odontológico, mas recebe reclamações frequentes sobre qualidade do atendimento ou cobertura limitada.',
        'Quer diferenciar a proposta de benefícios sem inflar custos com convênios "completos" que poucos usam adequadamente.',
        'Tem programa de wellness estabelecido e quer incluir o componente bucal — frequentemente esquecido em programas de saúde ocupacional.',
        'O quadro tem demografia que se beneficia especialmente de preventivo: faixa etária com risco crescente de problemas periodontais, ou colaboradores em fase de planejamento familiar.',
        'Identificou que faltas por motivo odontológico têm sido recorrentes, e quer abordar a causa em vez do sintoma.',
      ],
      bridge: 'Estamos abertos a desenhar pacotes para empresas de diferentes tamanhos — desde empresas pequenas com 10-20 colaboradores até organizações maiores. A primeira conversa é diagnóstica: entendemos o seu contexto antes de propor qualquer formato.',
    },
    how: {
      eyebrow: 'Como o programa funciona',
      title: 'Da primeira reunião',
      titleItalic: 'ao primeiro colaborador.',
      intro: 'O processo de implementação do programa Empresa é estruturado e relativamente rápido — em geral, 4 a 8 semanas da primeira reunião até os primeiros colaboradores serem atendidos.',
      steps: [
        {
          number: '01',
          title: 'Reunião diagnóstica.',
          body: 'Primeira conversa com o RH ou área responsável: tamanho da empresa, perfil dos colaboradores, benefícios atuais, expectativas, e orçamento estimado. Geralmente 60-90 minutos, podendo ser presencial na clínica ou na empresa.',
        },
        {
          number: '02',
          title: 'Proposta personalizada.',
          body: 'Com base na conversa, montamos uma proposta detalhada: serviços incluídos, frequência, valores totais e por colaborador, formato de pagamento (mensal vs. anual), e políticas de uso. Apresentamos por escrito.',
        },
        {
          number: '03',
          title: 'Estruturação do programa.',
          body: 'Após contratação, definimos: canais de comunicação com colaboradores, materiais de divulgação interna, agendamento (centralizado ou aberto para cada colaborador), e governança (relatórios à empresa, política de dados).',
        },
        {
          number: '04',
          title: 'Lançamento interno.',
          body: 'Apoiamos o RH na comunicação inicial aos colaboradores. Palestra de lançamento (opcional), material informativo, FAQ, e canal direto para dúvidas. Os primeiros colaboradores começam a agendar.',
        },
        {
          number: '05',
          title: 'Acompanhamento contínuo.',
          body: 'Relatórios periódicos à empresa (mensal, trimestral ou anual conforme contrato), ajustes ao programa quando necessário, e revisão anual para evolução. O programa cresce conosco.',
        },
      ],
    },
    faq: [
      {
        question: 'A partir de quantos colaboradores faz sentido?',
        answer: 'A partir de 10 colaboradores já é viável estruturar um programa. Para empresas menores, podemos oferecer condições preferenciais individuais sem programa estruturado. Para empresas maiores (50+), o programa ganha escala e custo por colaborador cai.',
      },
      {
        question: 'É mais caro que convênio?',
        answer: 'Depende do que você está comparando. Se for por preço puro por colaborador, convênio é geralmente mais barato — mas entrega cobertura limitada e qualidade variável. Se for por valor entregue (qualidade do atendimento, taxa real de uso, satisfação), o programa frequentemente sai mais barato e melhor. Apresentamos comparação real na proposta.',
      },
      {
        question: 'Como funciona o pagamento?',
        answer: 'Geralmente em formato de mensalidade fixa por colaborador participante, com tudo incluído (consultas preventivas anuais, ações educativas, gestão do programa). Tratamentos curativos individuais são cobrados separadamente, com as condições preferenciais negociadas. Empresa pode subsidiar parcial ou integralmente.',
      },
      {
        question: 'Família do colaborador entra?',
        answer: 'Pode entrar, sim, conforme política definida no contrato. Algumas empresas optam por incluir cônjuges e filhos como benefício adicional; outras restringem ao colaborador titular. Tudo configurável.',
      },
      {
        question: 'Atendem só na clínica em Artur Alvim?',
        answer: 'Sim, todos os atendimentos clínicos acontecem na clínica em Artur Alvim. Para empresas localizadas em outras regiões de São Paulo, isso pode ser fator limitante — vale conversar caso a caso. Ações educativas e palestras podem ser realizadas na empresa.',
      },
    ],
    closing: {
      eyebrow: 'Próximos passos',
      bronze: 'Vamos conversar',
      bronzeItalic: 'sobre o seu caso?',
      description: 'A primeira conversa do programa Empresa é diagnóstica — entendemos o seu contexto, perfil dos colaboradores, e o que você procura. Sem proposta antes da conversa. Sem proposta depois sem que faça sentido para os dois lados.',
    },
  },

  // ─────────────────────────────────────────────
  'melhor-idade': {
    metadata: {
      title: 'Odontologia para melhor idade (60+)',
      description: 'Programa odontológico preventivo para pacientes 60+ em Artur Alvim, com atenção a próteses, gengiva sensível e medicações concomitantes.',
    },
    hero: {
      eyebrow: 'Prevenção • Melhor idade',
      bronze: 'Cuidar dos dentes',
      bronzeItalic: 'aos 70 começa antes.',
      description: 'A boca dos 60+ tem peculiaridades — próteses em uso, gengiva mais delicada, medicações que afetam a saliva. O programa Melhor Idade é desenhado especificamente para essa fase.',
    },
    why: {
      eyebrow: 'Por que esta fase',
      title: 'O cuidado',
      titleItalic: 'que muda com a idade.',
      paragraphs: [
        'A odontologia para a melhor idade não é a mesma da idade adulta jovem. Há fatores específicos que mudam tudo: medicações de uso contínuo que reduzem fluxo salivar e aumentam risco de cárie. Próteses em uso há anos que podem estar desadaptadas. Gengiva mais sensível, com retração natural acumulada. Histórico odontológico longo, frequentemente fragmentado entre vários profissionais ao longo das décadas.',
        'Esses fatores não significam declínio — significam atenção especializada. Pacientes 60+ que mantêm acompanhamento odontológico regular e adaptado preservam os próprios dentes por mais tempo, ajustam próteses antes que virem fonte de desconforto, e mantêm qualidade de vida significativamente melhor do que pacientes que negligenciam a boca depois dos 60.',
        'O programa Melhor Idade da Biodonth foi desenhado para essa atenção. Consultas mais longas, profissionais que conhecem as peculiaridades desta fase, e tempo para conversar sobre o que importa — incluindo o histórico que muitas vezes não está documentado em lugar nenhum.',
      ],
    },
    included: {
      eyebrow: 'O que inclui',
      title: 'Cuidado completo',
      titleItalic: 'para a sua fase.',
      intro: 'O programa Melhor Idade inclui os elementos abaixo, com adaptações conforme o seu caso específico. Pacientes que usam próteses recebem atenção adicional na avaliação dessas peças.',
      items: [
        {
          title: 'Avaliação completa estendida.',
          body: 'Primeira consulta com tempo de sobra para conversar — frequentemente mais do que os 60 minutos padrão, especialmente se há histórico odontológico longo e variado. Incluímos avaliação de todas as próteses em uso, da gengiva ao redor, e da função mastigatória.',
        },
        {
          title: 'Revisão e ajuste de próteses.',
          body: 'Próteses que parecem "estar boas" frequentemente já não estão — o osso e a gengiva mudam com o tempo, e a prótese que se encaixava perfeitamente há 5 anos pode estar gerando irritação ou má mastigação hoje. Avaliamos e reajustamos quando possível, ou recomendamos substituição quando a peça já passou da vida útil.',
        },
        {
          title: 'Cuidado gengival especializado.',
          body: 'Gengiva da melhor idade requer técnica adaptada — profilaxia mais delicada, materiais menos abrasivos para limpeza domiciliar, e atenção especial a retrações que podem expor raízes sensíveis. Orientações por escrito.',
        },
        {
          title: 'Atenção à saliva e medicações.',
          body: 'Muitas medicações de uso contínuo nesta fase (anti-hipertensivos, antidepressivos, antialérgicos, alguns para diabetes) reduzem o fluxo salivar — o que aumenta dramaticamente o risco de cárie e desconforto bucal. Conversamos sobre estratégias de mitigação: produtos específicos, ajustes de rotina, e momentos do dia em que o cuidado é mais relevante.',
        },
        {
          title: 'Acompanhamento mais frequente.',
          body: 'Recomendamos profilaxia a cada 3-4 meses em vez dos 6 padrão — porque o risco aumenta com o tempo. Cada consulta é uma oportunidade de detectar mudanças cedo, quando ainda são fáceis de tratar.',
        },
      ],
    },
    signals: {
      eyebrow: 'Sinais para buscar agora',
      title: 'Quando vale',
      titleItalic: 'agendar hoje.',
      intro: 'O programa Melhor Idade é recomendado para todos os pacientes 60+, idealmente em frequência regular. Alguns sinais tornam o agendamento imediato:',
      list: [
        'Você usa prótese (parcial ou total) e não passa por avaliação odontológica há mais de 1 ano.',
        'Sente dor, irritação ou ferida na gengiva onde a prótese encosta.',
        'A prótese está "frouxa" — mexe ao falar ou ao comer, escapa quando boceja, ou exige cola.',
        'Notou aumento de cárie ou dentes "se desmanchando" — frequente em pacientes com boca seca por medicação.',
        'Tem boca seca persistente, especialmente à noite — afeta sono e aumenta dramaticamente o risco de cárie.',
        'Há gengiva mais retraída, expondo raízes que ficaram visíveis ao escovar.',
        'Faz tempo que não vai ao dentista por desconforto, medo ou esquecimento — e percebe que precisa retomar.',
        'Tem múltiplos dentes ausentes e está considerando próteses ou implantes pela primeira vez.',
      ],
      bridge: 'Não há "tarde demais" para começar a cuidar. Pacientes que retomam o acompanhamento aos 70, aos 75, aos 80 ainda preservam significativamente o que têm.',
    },
    how: {
      eyebrow: 'Como o programa funciona',
      title: 'Sessenta minutos,',
      titleItalic: 'em ritmo respeitoso.',
      intro: 'O programa Melhor Idade respeita o ritmo. Não há pressa, não há atendimento corrido, não há pressão. A primeira consulta especialmente é desenhada para que você se sinta acolhido — para muitos pacientes, é a primeira ida ao dentista em anos, e isso por si só já merece tempo.',
      steps: [
        {
          number: '01',
          title: 'Primeira consulta — conversa estendida.',
          body: 'A primeira parte é conversa: histórico médico geral (com calma, sem pressa), medicações em uso (traga a lista, se possível), histórico odontológico até onde você lembra, queixas atuais (mesmo as pequenas). Para muitos pacientes nesta fase, esse momento já vale a consulta inteira.',
        },
        {
          number: '02',
          title: 'Avaliação clínica completa.',
          body: 'Exame visual e tátil cuidadoso, com atenção especial a próteses (encaixe, integridade, condição da gengiva embaixo), à mucosa em geral, e a sinais de doenças sistêmicas que podem se manifestar na boca. Em alguns casos, exames complementares.',
        },
        {
          number: '03',
          title: 'Discussão do encontrado.',
          body: 'Conversamos sobre o que foi identificado, em linguagem clara, com tempo para todas as suas perguntas. Você sai entendendo o estado da sua boca — não com um diagnóstico técnico que ninguém explica.',
        },
        {
          number: '04',
          title: 'Plano personalizado.',
          body: 'Plano por escrito que detalha: frequência de retornos recomendada, intervenções sugeridas (se houver), orientações de cuidado domiciliar específicas para a sua boca, e cronograma realista. Nenhum tratamento é fechado neste dia — você leva para casa, conversa com família se quiser, e volta quando estiver pronto.',
        },
        {
          number: '05',
          title: 'Acompanhamento próximo.',
          body: 'Consultas regulares a cada 3-4 meses, com a mesma equipe ao longo do tempo. Continuidade importa especialmente nesta fase — você não precisa contar a sua história a cada consulta, porque já te conhecemos.',
        },
      ],
    },
    faq: [
      {
        question: 'Estou com 75 anos. Vale a pena começar agora?',
        answer: 'Sim, sem dúvida. Pacientes que iniciam acompanhamento odontológico aos 70, aos 75 ou aos 80 ainda têm benefício significativo: preservam o que têm por mais tempo, ajustam próteses antes de virarem fonte de dor, detectam precocemente alterações sistêmicas que se manifestam na boca. Não há idade tarde demais.',
      },
      {
        question: 'Tenho várias medicações. Posso fazer tratamento odontológico?',
        answer: 'Quase sempre, sim. A maior parte dos tratamentos odontológicos é segura para pacientes em uso de medicação contínua. Em alguns casos específicos (anticoagulantes, bisfosfonatos), há protocolos adaptados e podemos consultar o seu médico antes de procedimentos cirúrgicos. Traga a lista completa de medicações para a primeira consulta.',
      },
      {
        question: 'Minha prótese me incomoda há tempos. O que pode ser feito?',
        answer: 'Próteses que incomodam frequentemente podem ser ajustadas (reembasamento), substituídas (refeitas) ou migradas para soluções estabilizadas sobre implantes (overdenture). A escolha depende do estado da prótese atual, do estado do osso embaixo, e da sua expectativa. Sai tudo na avaliação inicial — frequentemente o ajuste resolve sem necessidade de procedimento maior.',
      },
      {
        question: 'Posso fazer implante na minha idade?',
        answer: 'Sim, na maior parte dos casos. Idade por si só não é contraindicação para implante. O que importa é a saúde geral (diabetes controlada, sem osteoporose grave em uso de bisfosfonatos), a saúde óssea local (avaliada por tomografia), e a expectativa do paciente. Pacientes em seus 70 e 80 anos têm implantes feitos regularmente, com taxas de sucesso comparáveis às de pacientes mais jovens.',
      },
      {
        question: 'Tenho boca seca. Tem solução?',
        answer: 'Há estratégias eficazes — substitutos salivares específicos, ajustes de medicação quando possível (conversado com o seu médico), pastilhas estimulantes, hidratação aumentada, e ajustes na rotina de escovação. A boca seca não é um destino: é um sintoma manejável.',
      },
    ],
    closing: {
      eyebrow: 'Próximos passos',
      bronze: 'O cuidado',
      bronzeItalic: 'no ritmo certo.',
      description: 'O programa Melhor Idade começa com uma conversa sem pressa. Sessenta minutos (ou mais, se precisar). Plano de cuidado escrito na sua mão. Sem decisão na hora.',
    },
  },
};
