// FAQ entries. Persuasion-driven answers, patient-as-protagonist voice. Sentence case.
// Edit copy here, not in the component. Order matters — most-common questions first.
//
// CLAIMS TAGGED [CONFIRM-BIODONTH] need verification with Biodonth's operating reality.

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'primeira-consulta',
    question: 'Como funciona a primeira consulta na Biodonth?',
    // [CONFIRM-BIODONTH: is the first consultation exactly 60 minutes? Does the patient receive a written plan?]
    answer:
      'Sentamos, conversamos, examinamos, mapeamos \u2014 sem rel\u00f3gio. Voc\u00ea sai com um plano de tratamento escrito na m\u00e3o: etapas, prazos e valores.\n\nN\u00e3o fechamos nada nesse dia. Voc\u00ea leva para casa, conversa com quem precisa, e decide quando voltar.',
  },
  {
    id: 'planos',
    question: 'A cl\u00ednica atende conv\u00eanios e planos odontol\u00f3gicos?',
    answer:
      'A Biodonth \u00e9 particular e n\u00e3o atende conv\u00eanios. N\u00e3o \u00e9 descaso com o sistema \u2014 \u00e9 a \u00fanica forma de garantir o tempo, os materiais e a equipe que cada caso merece, sem o ritmo de quem precisa atender cinco pessoas por hora.\n\nPara que isso esteja ao seu alcance, oferecemos pagamento flex\u00edvel e parcelamento ajustados ao seu or\u00e7amento.',
  },
  {
    id: 'pagamento',
    question: 'Quais s\u00e3o as formas de pagamento?',
    answer:
      'PIX, d\u00e9bito, cr\u00e9dito (\u00e0 vista ou em at\u00e9 12 vezes) e dinheiro. Para tratamentos longos, estruturamos o pagamento por etapas, acompanhando o ritmo do tratamento \u2014 voc\u00ea nunca paga adiantado pelo que ainda n\u00e3o foi feito.\n\nTudo \u00e9 apresentado na primeira consulta, com total clareza, antes de qualquer compromisso.',
  },
  {
    id: 'criancas',
    question: 'A Biodonth atende crian\u00e7as?',
    answer:
      'Sim. Contamos com profissionais especializados em odontopediatria e um espa\u00e7o pensado para que a crian\u00e7a se sinta \u00e0 vontade \u2014 n\u00e3o numa \u201cconsulta\u201d, mas em uma visita.\n\nA primeira vez pode ser s\u00f3 para conhecer, sem nenhum procedimento. Assim, seu filho constr\u00f3i uma rela\u00e7\u00e3o com o dentista que ele leva para a vida.',
  },
  {
    id: 'emergencia',
    question: 'Em caso de emerg\u00eancia, como devo proceder?',
    answer:
      'Chame pelo WhatsApp da cl\u00ednica. Avaliamos a situa\u00e7\u00e3o \u00e0 dist\u00e2ncia e, sempre que poss\u00edvel, encaixamos no mesmo dia.\n\nPacientes em tratamento ativo t\u00eam um canal direto que prioriza urg\u00eancias \u2014 porque dor n\u00e3o espera hor\u00e1rio comercial.',
  },
  {
    id: 'tempo-tratamento',
    question: 'Quanto tempo dura um tratamento na cl\u00ednica?',
    answer:
      'Depende de onde voc\u00ea est\u00e1 e onde quer chegar. Uma limpeza ou um clareamento podem terminar em uma ou duas sess\u00f5es. Implantes, ortodontia e reabilita\u00e7\u00f5es podem levar meses ou anos \u2014 porque h\u00e1 ossos, gengivas e tecidos que respondem no tempo deles, n\u00e3o no nosso.\n\nNa primeira consulta, voc\u00ea sai com um cronograma realista, com marcos claros. Sem promessa de milagre, sem omitir o que demora.',
  },
  {
    id: 'idiomas',
    question: 'Voc\u00eas atendem em outros idiomas?',
    answer:
      'O atendimento principal \u00e9 em portugu\u00eas. Para quem se comunica melhor em ingl\u00eas, conseguimos oferecer suporte. Outros idiomas: nos avise antes e daremos o nosso melhor para acolh\u00ea-lo na sua l\u00edngua.',
  },
  {
    id: 'pos-tratamento',
    question: 'Como funciona o acompanhamento ap\u00f3s o tratamento?',
    answer:
      'O cuidado n\u00e3o termina quando o tratamento termina. Marcamos revis\u00f5es peri\u00f3dicas para acompanhar a sua sa\u00fade bucal, manter o que foi conquistado e prevenir o que pode aparecer.\n\nPara tratamentos extensos \u2014 implantes, ortodontia, reabilita\u00e7\u00f5es \u2014 o acompanhamento j\u00e1 est\u00e1 inclu\u00eddo desde o in\u00edcio.',
  },
];
