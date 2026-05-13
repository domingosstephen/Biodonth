// Legal pages content. Both pages share the same structural type.
// All [CONFIRM-BIODONTH] tags below need the reviewer's verification.
// IMPORTANT: Have Biodonth's advogado review both pages before launch.

export type LegalSection = {
  id: string;
  title: string;
  body: string[];
};

export type LegalPage = {
  metadata: {
    title: string;
    description: string;
  };
  breadcrumb: { home: string; current: string };
  hero: {
    eyebrow: string;
    bronze: string;
    bronzeItalic: string;
    description: string;
    lastUpdated: string;
  };
  toc: { title: string };
  sections: LegalSection[];
  closing: {
    eyebrow: string;
    bronze: string;
    bronzeItalic: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
};

export const PRIVACIDADE: LegalPage = {
  metadata: {
    title: 'Pol\u00edtica de privacidade | Biodonth Odontologia Integrada',
    description:
      'Como a Biodonth coleta, usa, armazena e protege os dados pessoais dos seus pacientes e visitantes, em conformidade com a LGPD.',
  },
  breadcrumb: { home: 'In\u00edcio', current: 'Pol\u00edtica de privacidade' },
  hero: {
    eyebrow: 'Pol\u00edtica de privacidade',
    bronze: 'Cuidamos dos seus dados',
    bronzeItalic: 'com o mesmo cuidado.',
    description:
      'Esta pol\u00edtica explica, em linguagem clara, como coletamos, usamos, armazenamos e protegemos as suas informa\u00e7\u00f5es \u2014 em conformidade com a Lei Geral de Prote\u00e7\u00e3o de Dados (Lei 13.709/2018).',
    // [CONFIRM-BIODONTH] Update this date on every revision to the policy.
    lastUpdated: '2025-01-15',
  },
  toc: { title: 'Nesta p\u00e1gina' },
  sections: [
    {
      id: 'quem-somos',
      title: '1. Quem somos',
      body: [
        // [CONFIRM-BIODONTH] CNPJ and full company name need confirmation.
        'A Biodonth Odontologia Integrada \u00e9 uma cl\u00ednica odontol\u00f3gica localizada na Rua Desembargador Rocha Portela, 1012, Artur Alvim, S\u00e3o Paulo \u2014 SP, CEP 03567-000. Atuamos como controladora dos seus dados pessoais para os fins descritos nesta pol\u00edtica, nos termos da Lei Geral de Prote\u00e7\u00e3o de Dados (LGPD \u2014 Lei n\u00ba 13.709/2018).',
        'Se voc\u00ea tiver qualquer d\u00favida sobre esta pol\u00edtica, sobre o uso dos seus dados, ou quiser exercer os seus direitos como titular, entre em contato pelo e-mail contato@biodonth.com.br ou pelo WhatsApp (11) 9.5003-1000.',
      ],
    },
    {
      id: 'dados-coletados',
      title: '2. Quais dados coletamos',
      body: [
        'Coletamos diferentes categorias de dados, dependendo de como voc\u00ea interage conosco:',
        '**Dados de visitantes do site** \u2014 Quando voc\u00ea navega em biodonth.com.br, podemos coletar dados t\u00e9cnicos automaticamente, como endere\u00e7o de IP, tipo de navegador, p\u00e1ginas visitadas, tempo de perman\u00eancia e origem do acesso. Esses dados s\u00e3o anonimizados e usados para fins estat\u00edsticos e de melhoria do site.',
        '**Dados de contato fornecidos** \u2014 Quando voc\u00ea preenche o formul\u00e1rio de contato, envia mensagem pelo WhatsApp, liga para a cl\u00ednica ou envia e-mail, coletamos as informa\u00e7\u00f5es que voc\u00ea fornece (nome, telefone, e-mail, mensagem, tratamento de interesse).',
        '**Dados de pacientes** \u2014 Como cl\u00ednica odontol\u00f3gica, coletamos dados pessoais sens\u00edveis (definidos pelo Art. 5\u00ba, II da LGPD) necess\u00e1rios ao seu tratamento: hist\u00f3rico de sa\u00fade, exames cl\u00ednicos, imagens odontol\u00f3gicas, prescri\u00e7\u00f5es, e qualquer informa\u00e7\u00e3o relevante para o cuidado da sua sa\u00fade bucal. Esses dados s\u00e3o tratados com prote\u00e7\u00e3o refor\u00e7ada conforme a LGPD e as resolu\u00e7\u00f5es do CFO/CRO-SP.',
      ],
    },
    {
      id: 'finalidades',
      title: '3. Para que usamos seus dados',
      body: [
        'Usamos seus dados para finalidades espec\u00edficas e leg\u00edtimas:',
        '**Para responder seus contatos** \u2014 Quando voc\u00ea nos procura por qualquer canal, usamos suas informa\u00e7\u00f5es apenas para retornar o contato e dar continuidade \u00e0 conversa.',
        '**Para agendar e conduzir tratamentos** \u2014 Pacientes confiam \u00e0 cl\u00ednica dados sens\u00edveis necess\u00e1rios ao planejamento, execu\u00e7\u00e3o e acompanhamento do tratamento odontol\u00f3gico.',
        '**Para cumprir obriga\u00e7\u00f5es legais** \u2014 Dados de prontu\u00e1rio s\u00e3o mantidos pelo prazo determinado pela legisla\u00e7\u00e3o e pelas resolu\u00e7\u00f5es do Conselho Federal de Odontologia.',
        '**Para melhorar nosso site e servi\u00e7os** \u2014 Dados anal\u00edticos anonimizados nos ajudam a entender quais conte\u00fados s\u00e3o \u00fateis e como otimizar a experi\u00eancia de quem nos visita online.',
      ],
    },
    {
      id: 'base-legal',
      title: '4. Bases legais para o tratamento',
      body: [
        'Tratamos seus dados com base nas seguintes hip\u00f3teses legais previstas no Art. 7\u00ba e Art. 11 da LGPD:',
        '**Consentimento (Art. 7\u00ba, I e Art. 11, I)** \u2014 Quando voc\u00ea preenche o formul\u00e1rio ou envia mensagem por iniciativa pr\u00f3pria, autoriza o tratamento dos dados fornecidos para os fins comunicados.',
        '**Execu\u00e7\u00e3o de contrato (Art. 7\u00ba, V)** \u2014 Para pacientes em tratamento, o uso dos dados \u00e9 necess\u00e1rio \u00e0 execu\u00e7\u00e3o do contrato de presta\u00e7\u00e3o de servi\u00e7os odontol\u00f3gicos.',
        '**Cumprimento de obriga\u00e7\u00e3o legal (Art. 7\u00ba, II e Art. 11, II, \u201ca\u201d)** \u2014 Manuten\u00e7\u00e3o do prontu\u00e1rio e cumprimento de obriga\u00e7\u00f5es fiscais, sanit\u00e1rias e profissionais.',
        '**Prote\u00e7\u00e3o da vida ou tutela da sa\u00fade (Art. 11, II, \u201cf\u201d)** \u2014 Quando o tratamento de dados sens\u00edveis \u00e9 necess\u00e1rio para a prote\u00e7\u00e3o da sua sa\u00fade, realizado por profissionais de sa\u00fade sob sigilo.',
        '**Leg\u00edtimo interesse (Art. 7\u00ba, IX)** \u2014 Para fins de an\u00e1lise estat\u00edstica agregada do site, melhoria dos servi\u00e7os e seguran\u00e7a das informa\u00e7\u00f5es.',
      ],
    },
    {
      id: 'compartilhamento',
      title: '5. Com quem compartilhamos seus dados',
      body: [
        'Seus dados n\u00e3o s\u00e3o vendidos. O compartilhamento ocorre apenas quando estritamente necess\u00e1rio:',
        // [CONFIRM-BIODONTH] List the actual third parties Biodonth uses.
        '**Provedores de servi\u00e7os essenciais** \u2014 Hospedagem do site, plataformas de mensageria (WhatsApp Business, Meta), servi\u00e7os de pagamento e ferramentas de gest\u00e3o cl\u00ednica. Cada parceiro \u00e9 vinculado por contrato a obriga\u00e7\u00f5es de confidencialidade e seguran\u00e7a equivalentes \u00e0s nossas.',
        '**Profissionais da equipe cl\u00ednica** \u2014 Especialistas envolvidos no seu caso t\u00eam acesso ao seu prontu\u00e1rio pelo tempo necess\u00e1rio ao atendimento, sob sigilo profissional do CFO/CRO-SP.',
        '**Autoridades p\u00fablicas** \u2014 Quando exigido por lei, ordem judicial ou solicita\u00e7\u00e3o formal de autoridade competente (vigil\u00e2ncia sanit\u00e1ria, justi\u00e7a, ANPD).',
        'N\u00e3o realizamos transfer\u00eancia internacional de dados como pr\u00e1tica usual. Caso isso seja necess\u00e1rio (por exemplo, se utilizarmos servi\u00e7os hospedados fora do Brasil), garantimos que o destino oferece o mesmo n\u00edvel de prote\u00e7\u00e3o exigido pela LGPD.',
      ],
    },
    {
      id: 'retencao',
      title: '6. Por quanto tempo guardamos seus dados',
      body: [
        'O per\u00edodo de reten\u00e7\u00e3o varia conforme a natureza do dado:',
        '**Dados de contato (formul\u00e1rio, e-mail, WhatsApp)** \u2014 Mantidos pelo tempo necess\u00e1rio ao atendimento da sua solicita\u00e7\u00e3o e, posteriormente, at\u00e9 5 anos para fins de comprova\u00e7\u00e3o e preven\u00e7\u00e3o de fraudes, salvo solicita\u00e7\u00e3o de exclus\u00e3o.',
        '**Prontu\u00e1rio odontol\u00f3gico de paciente** \u2014 Mantido pelo prazo m\u00ednimo de 20 anos a contar da \u00faltima consulta, conforme Resolu\u00e7\u00e3o CFO n\u00ba 118/2012 e legisla\u00e7\u00e3o correlata. Ap\u00f3s esse prazo, \u00e9 arquivado ou destru\u00eddo de forma segura.',
        '**Dados t\u00e9cnicos de navega\u00e7\u00e3o** \u2014 Mantidos por at\u00e9 6 meses em formato agregado e anonimizado.',
        '**Documentos fiscais e financeiros** \u2014 Mantidos pelos prazos exigidos pela legisla\u00e7\u00e3o tribut\u00e1ria (em regra, 5 anos).',
      ],
    },
    {
      id: 'seus-direitos',
      title: '7. Seus direitos como titular',
      body: [
        'A LGPD (Art. 18) garante a voc\u00ea os seguintes direitos sobre os seus dados pessoais:',
        '**Confirma\u00e7\u00e3o e acesso** \u2014 Saber se tratamos seus dados e obter c\u00f3pia das informa\u00e7\u00f5es que mantemos.',
        '**Corre\u00e7\u00e3o** \u2014 Solicitar a corre\u00e7\u00e3o de dados incompletos, inexatos ou desatualizados.',
        '**Anonimiza\u00e7\u00e3o, bloqueio ou elimina\u00e7\u00e3o** \u2014 Pedir a anonimiza\u00e7\u00e3o, bloqueio ou exclus\u00e3o de dados desnecess\u00e1rios, excessivos ou tratados em desconformidade com a LGPD.',
        '**Portabilidade** \u2014 Solicitar a portabilidade dos seus dados para outro fornecedor de servi\u00e7o.',
        '**Elimina\u00e7\u00e3o** \u2014 Pedir a elimina\u00e7\u00e3o dos dados tratados com base no seu consentimento, observadas as exce\u00e7\u00f5es legais (como a manuten\u00e7\u00e3o obrigat\u00f3ria do prontu\u00e1rio cl\u00ednico).',
        '**Informa\u00e7\u00e3o sobre compartilhamentos** \u2014 Saber com quais entidades p\u00fablicas e privadas seus dados foram compartilhados.',
        '**Revoga\u00e7\u00e3o do consentimento** \u2014 Retirar o consentimento previamente fornecido, a qualquer momento, observados os efeitos legais.',
        'Para exercer qualquer destes direitos, basta entrar em contato pelo e-mail contato@biodonth.com.br. Responderemos no prazo de at\u00e9 15 dias \u00fateis.',
      ],
    },
    {
      id: 'cookies',
      title: '8. Cookies e tecnologias similares',
      body: [
        // [CONFIRM-BIODONTH] Update once cookie usage is finalized.
        'O site biodonth.com.br pode utilizar cookies \u2014 pequenos arquivos armazenados no seu navegador \u2014 para garantir o funcionamento adequado das p\u00e1ginas, lembrar suas prefer\u00eancias e gerar an\u00e1lises agregadas de uso.',
        'Voc\u00ea pode desabilitar cookies a qualquer momento atrav\u00e9s das configura\u00e7\u00f5es do seu navegador. Alguns recursos do site podem deixar de funcionar corretamente caso voc\u00ea opte por bloque\u00e1-los.',
        'Quando utilizamos ferramentas anal\u00edticas (como Google Analytics ou Meta Pixel) configuramos esses servi\u00e7os com a IP anonimizado e tempo m\u00ednimo de reten\u00e7\u00e3o.',
      ],
    },
    {
      id: 'seguranca',
      title: '9. Como protegemos seus dados',
      body: [
        'Adotamos medidas t\u00e9cnicas e administrativas razo\u00e1veis para proteger seus dados contra acesso n\u00e3o autorizado, perda, altera\u00e7\u00e3o ou divulga\u00e7\u00e3o indevida. Entre essas medidas:',
        '**Controle de acesso** \u2014 Apenas profissionais autorizados acessam dados sens\u00edveis de pacientes, com credenciais individuais e registros de acesso.',
        '**Criptografia** \u2014 Conex\u00f5es com o site protegidas por HTTPS/SSL. Dados sens\u00edveis em sistemas de gest\u00e3o cl\u00ednica armazenados com criptografia em repouso e em tr\u00e2nsito.',
        '**Backup e recupera\u00e7\u00e3o** \u2014 Rotinas regulares de backup com reten\u00e7\u00e3o em m\u00faltiplos locais para garantir disponibilidade e integridade.',
        '**Confidencialidade profissional** \u2014 Toda a equipe \u00e9 vinculada ao sigilo profissional previsto no C\u00f3digo de \u00c9tica Odontol\u00f3gica e em cl\u00e1usulas contratuais de confidencialidade.',
        'Nenhum sistema, contudo, \u00e9 absolutamente imune. Em caso de incidente que envolva risco aos titulares, comunicaremos os afetados e a Autoridade Nacional de Prote\u00e7\u00e3o de Dados (ANPD) nos prazos legais.',
      ],
    },
    {
      id: 'contato-dpo',
      title: '10. Encarregado pelo tratamento (DPO) e canal de comunica\u00e7\u00e3o',
      body: [
        // [CONFIRM-BIODONTH] Confirm DPO contact.
        'O Encarregado pelo Tratamento de Dados Pessoais da Biodonth pode ser contatado pelo e-mail contato@biodonth.com.br, com o assunto \u201cLGPD\u201d no t\u00edtulo da mensagem.',
        'Voc\u00ea tamb\u00e9m pode apresentar reclama\u00e7\u00e3o diretamente \u00e0 Autoridade Nacional de Prote\u00e7\u00e3o de Dados (ANPD) pelo site oficial gov.br/anpd, caso considere que algum dos seus direitos n\u00e3o foi atendido adequadamente.',
      ],
    },
    {
      id: 'alteracoes',
      title: '11. Altera\u00e7\u00f5es nesta pol\u00edtica',
      body: [
        'Esta pol\u00edtica pode ser atualizada periodicamente para refletir mudan\u00e7as legais, t\u00e9cnicas ou operacionais. A data da \u00faltima atualiza\u00e7\u00e3o \u00e9 exibida no topo desta p\u00e1gina.',
        'Mudan\u00e7as relevantes ser\u00e3o comunicadas com destaque no site. Recomendamos que voc\u00ea revise esta pol\u00edtica periodicamente, especialmente antes de fornecer novos dados.',
      ],
    },
  ],
  closing: {
    eyebrow: 'D\u00favidas sobre seus dados?',
    bronze: 'Estamos aqui',
    bronzeItalic: 'para responder.',
    description:
      'Se voc\u00ea tem qualquer d\u00favida sobre esta pol\u00edtica, sobre o uso dos seus dados, ou quer exercer um dos direitos previstos na LGPD, entre em contato. Respondemos em at\u00e9 15 dias \u00fateis.',
    primaryCtaLabel: 'Falar conosco',
    secondaryCtaLabel: 'Ver termos de uso',
    secondaryCtaHref: '/termos-de-uso',
  },
};

export const TERMOS: LegalPage = {
  metadata: {
    title: 'Termos de uso | Biodonth Odontologia Integrada',
    description:
      'Termos de uso do site biodonth.com.br \u2014 regras e condi\u00e7\u00f5es para a navega\u00e7\u00e3o, intera\u00e7\u00e3o e uso dos conte\u00fados publicados.',
  },
  breadcrumb: { home: 'In\u00edcio', current: 'Termos de uso' },
  hero: {
    eyebrow: 'Termos de uso',
    bronze: 'As regras do site,',
    bronzeItalic: 'sem letras mi\u00fadas.',
    description:
      'Estes termos descrevem como voc\u00ea pode usar o site biodonth.com.br. Eles n\u00e3o substituem o termo de consentimento do tratamento odontol\u00f3gico, que \u00e9 assinado pessoalmente na cl\u00ednica.',
    lastUpdated: '2025-01-15',
  },
  toc: { title: 'Nesta p\u00e1gina' },
  sections: [
    {
      id: 'aceitacao',
      title: '1. Aceita\u00e7\u00e3o dos termos',
      body: [
        'Ao acessar e usar o site biodonth.com.br, voc\u00ea concorda com estes termos de uso. Se voc\u00ea n\u00e3o concorda com alguma das condi\u00e7\u00f5es, recomendamos que n\u00e3o utilize o site.',
        'Estes termos se aplicam apenas ao uso do site. Pacientes em tratamento na cl\u00ednica recebem, no momento da consulta, um termo de consentimento cl\u00ednico espec\u00edfico, distinto deste documento.',
      ],
    },
    {
      id: 'objeto',
      title: '2. Sobre o site',
      body: [
        'O site biodonth.com.br \u00e9 mantido pela Biodonth Odontologia Integrada, com sede em Artur Alvim, S\u00e3o Paulo \u2014 SP. Ele tem car\u00e1ter institucional e informativo: apresenta nossa cl\u00ednica, equipe, tratamentos, conte\u00fados educacionais sobre sa\u00fade bucal e canais de contato.',
        'O site n\u00e3o realiza atendimento cl\u00ednico, n\u00e3o emite diagn\u00f3sticos e n\u00e3o substitui consulta presencial com profissional habilitado.',
      ],
    },
    {
      id: 'conteudo',
      title: '3. Sobre o conte\u00fado publicado',
      body: [
        'Todos os textos, imagens, v\u00eddeos, ilustra\u00e7\u00f5es, marcas, logotipos e demais materiais publicados no site s\u00e3o de propriedade da Biodonth Odontologia Integrada ou utilizados sob licen\u00e7a, e s\u00e3o protegidos pelas leis brasileiras de propriedade intelectual (Lei n\u00ba 9.610/1998).',
        'Voc\u00ea pode visualizar, ler e compartilhar links para o conte\u00fado do site para fins pessoais e n\u00e3o comerciais. Est\u00e1 proibida a reprodu\u00e7\u00e3o, modifica\u00e7\u00e3o, redistribui\u00e7\u00e3o ou uso comercial de qualquer material sem autoriza\u00e7\u00e3o pr\u00e9via, expressa e por escrito da Biodonth.',
        'Os artigos publicados no nosso blog t\u00eam car\u00e1ter informativo e educacional. Embora produzidos com base em evid\u00eancias e em conformidade com o C\u00f3digo de \u00c9tica Odontol\u00f3gica, eles n\u00e3o substituem orienta\u00e7\u00e3o profissional individualizada.',
      ],
    },
    {
      id: 'links-externos',
      title: '4. Links para outros sites',
      body: [
        'Eventualmente, o site pode conter links para p\u00e1ginas externas que consideramos relevantes \u2014 sites institucionais, fontes cient\u00edficas, redes sociais oficiais.',
        'N\u00e3o temos controle sobre o conte\u00fado, as pol\u00edticas ou as pr\u00e1ticas de privacidade desses sites externos. O acesso a links externos \u00e9 de responsabilidade do usu\u00e1rio, e recomendamos a leitura dos termos e pol\u00edticas de cada site visitado.',
      ],
    },
    {
      id: 'conduta',
      title: '5. Conduta esperada do usu\u00e1rio',
      body: [
        'Ao utilizar o site, voc\u00ea se compromete a:',
        '**N\u00e3o usar o site para finalidades ilegais** ou que violem direitos de terceiros, incluindo direitos de propriedade intelectual, privacidade ou imagem.',
        '**N\u00e3o tentar comprometer a seguran\u00e7a** do site, por meio de tentativas de acesso n\u00e3o autorizado, inje\u00e7\u00e3o de c\u00f3digo, sobrecarga proposital ou qualquer t\u00e9cnica similar.',
        '**Fornecer informa\u00e7\u00f5es verdadeiras** ao preencher formul\u00e1rios de contato ou se comunicar conosco por qualquer canal vinculado ao site.',
        'O descumprimento dessas condutas pode resultar em medidas legais cab\u00edveis.',
      ],
    },
    {
      id: 'limitacao-responsabilidade',
      title: '6. Limita\u00e7\u00e3o de responsabilidade',
      body: [
        'A Biodonth se compromete a manter o site em pleno funcionamento, atualizado e seguro. Contudo, n\u00e3o garante que o site estar\u00e1 dispon\u00edvel 24 horas por dia, todos os dias, sem interrup\u00e7\u00f5es. Manuten\u00e7\u00f5es, atualiza\u00e7\u00f5es ou eventos fora do nosso controle podem ocasionar indisponibilidades tempor\u00e1rias.',
        'A Biodonth n\u00e3o se responsabiliza por decis\u00f5es tomadas pelo usu\u00e1rio com base exclusivamente em conte\u00fados publicados no site, sem consulta profissional individualizada. Qualquer decis\u00e3o cl\u00ednica deve passar por avalia\u00e7\u00e3o presencial.',
        'Tamb\u00e9m n\u00e3o nos responsabilizamos por danos decorrentes de problemas t\u00e9cnicos do dispositivo, da conex\u00e3o ou do navegador do usu\u00e1rio ao acessar o site.',
      ],
    },
    {
      id: 'agendamentos',
      title: '7. Solicita\u00e7\u00f5es de agendamento via site',
      body: [
        'Os formul\u00e1rios e canais de contato dispon\u00edveis no site (incluindo o bot\u00e3o de WhatsApp) s\u00e3o meios para iniciar uma conversa com a cl\u00ednica. O envio de uma mensagem n\u00e3o garante, por si s\u00f3, o agendamento.',
        'O agendamento efetivo \u00e9 confirmado apenas ap\u00f3s contato direto com a equipe da cl\u00ednica e a disponibilidade de hor\u00e1rio compat\u00edvel com a sua prefer\u00eancia. Para evitar contratempos, compare\u00e7a apenas em datas e hor\u00e1rios previamente confirmados.',
      ],
    },
    {
      id: 'foro',
      title: '8. Legisla\u00e7\u00e3o aplic\u00e1vel e foro',
      body: [
        'Estes termos s\u00e3o regidos pelas leis da Rep\u00fablica Federativa do Brasil. Eventuais conflitos ou diverg\u00eancias decorrentes do uso do site ser\u00e3o dirimidos no foro da Comarca de S\u00e3o Paulo \u2014 SP, com ren\u00fancia expressa a qualquer outro, por mais privilegiado que seja.',
      ],
    },
    {
      id: 'alteracoes-termos',
      title: '9. Altera\u00e7\u00f5es nestes termos',
      body: [
        'A Biodonth pode atualizar estes termos de tempos em tempos. Quando isso acontecer, a data de \u201c\u00daltima atualiza\u00e7\u00e3o\u201d no topo desta p\u00e1gina ser\u00e1 modificada.',
        'O uso continuado do site ap\u00f3s qualquer altera\u00e7\u00e3o implica aceita\u00e7\u00e3o dos novos termos. Recomendamos revisar este documento periodicamente.',
      ],
    },
    {
      id: 'contato-termos',
      title: '10. Contato',
      body: [
        'D\u00favidas sobre estes termos podem ser enviadas para contato@biodonth.com.br. Responderemos em at\u00e9 15 dias \u00fateis.',
      ],
    },
  ],
  closing: {
    eyebrow: 'D\u00favidas sobre os termos?',
    bronze: 'A gente est\u00e1',
    bronzeItalic: 'a um clique.',
    description:
      'Se algum ponto n\u00e3o ficou claro, ou se voc\u00ea quer entender melhor como os termos se aplicam ao seu caso, escreva pra gente.',
    primaryCtaLabel: 'Falar conosco',
    secondaryCtaLabel: 'Ver pol\u00edtica de privacidade',
    secondaryCtaHref: '/politica-de-privacidade',
  },
};
