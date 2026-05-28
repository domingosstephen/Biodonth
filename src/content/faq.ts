// FAQ entries. Answers provided by Biodonth. Sentence case.
// Edit copy here, not in the component. Order matters.

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'primeira-consulta',
    question: 'Como funciona a primeira consulta na Biodonth?',
    answer:
      'Na primeira consulta, nossa prioridade é conhecer você, entender suas queixas, avaliar sua saúde bucal e identificar o melhor caminho para o seu caso.\n\nEsse atendimento é conduzido com calma, escuta e avaliação criteriosa. Após o exame clínico e o diagnóstico, você recebe um plano de tratamento elaborado com orientação da nossa responsável técnica, contendo as etapas recomendadas, prazos estimados e valores definidos com transparência.\n\nCaso seja possível e você se sinta seguro, o tratamento pode ser iniciado no mesmo dia. Mas, se preferir analisar com calma, conversar com sua família ou decidir em outro momento, não há problema. Você terá as informações necessárias para tomar sua decisão com tranquilidade.',
  },
  {
    id: 'planos',
    question: 'A clínica atende convênios e planos odontológicos?',
    answer:
      'Atualmente, a Biodonth atende pelo convênio SulAmérica Odonto.\n\nPara os demais convênios e planos odontológicos, trabalhamos com a modalidade de reembolso. Nesse caso, o paciente realiza o tratamento de forma particular e recebe a documentação necessária para solicitar o reembolso diretamente ao seu plano, conforme as regras e coberturas contratadas.\n\nNossa equipe pode orientar você sobre esse processo no momento do atendimento.',
  },
  {
    id: 'pagamento',
    question: 'Quais são as formas de pagamento?',
    answer:
      'A Biodonth oferece diferentes formas de pagamento para facilitar o início e a continuidade do seu tratamento. Aceitamos PIX, cartão de débito, cartão de crédito, boleto bancário e dinheiro.\n\nTambém parcelamos tratamentos em até 24 vezes, conforme as condições disponíveis no momento da contratação. Para tratamentos mais longos, o pagamento pode ser estruturado por etapas, acompanhando a evolução do plano de tratamento.\n\nTodas as condições são apresentadas com clareza na primeira consulta, antes de qualquer compromisso, para que você possa decidir com tranquilidade.',
  },
  {
    id: 'criancas',
    question: 'A Biodonth atende crianças?',
    answer:
      'Sim. A Biodonth conta com profissionais especializados em odontopediatria e um ambiente preparado para que a criança se sinta acolhida, segura e à vontade desde o primeiro contato.\n\nA primeira visita pode ser apenas para conhecer a clínica, conversar com o dentista e se familiarizar com o ambiente, sem a necessidade de realizar nenhum procedimento. Esse cuidado ajuda a construir uma relação positiva com a odontologia desde cedo, tornando as próximas consultas mais leves e tranquilas.\n\nNosso objetivo é cuidar da saúde bucal da criança com carinho, paciência e orientação para toda a família.',
  },
  {
    id: 'emergencia',
    question: 'Em caso de emergência, como devo proceder?',
    answer:
      'Em caso de dor, desconforto intenso, trauma ou alguma intercorrência odontológica, entre em contato com a clínica pelo WhatsApp. Nossa equipe fará uma primeira avaliação da situação e orientará você sobre os próximos passos.\n\nSempre que possível, buscamos encaixar atendimentos de urgência no mesmo dia, de acordo com a disponibilidade da agenda e a gravidade do caso.\n\nPacientes que já estão em tratamento ativo na Biodonth contam com um canal de contato direto para situações urgentes, porque entendemos que dor e imprevistos precisam de atenção rápida e orientação segura.',
  },
  {
    id: 'tempo-tratamento',
    question: 'Quanto tempo dura um tratamento na clínica?',
    answer:
      'O tempo de tratamento depende do ponto de partida de cada paciente, do tipo de procedimento indicado e dos objetivos definidos no planejamento.\n\nAlguns cuidados, como uma limpeza, uma avaliação preventiva ou um clareamento, podem ser concluídos em poucas sessões. Já tratamentos como implantes, ortodontia e reabilitações orais exigem mais etapas e podem levar meses, pois dependem da resposta dos ossos, gengivas e tecidos, além do acompanhamento clínico adequado.\n\nNa primeira consulta, apresentamos um cronograma realista, com as principais etapas do tratamento, prazos estimados e marcos importantes. Assim, você entende o caminho antes de começar, sem promessas exageradas e sem omitir o que exige tempo, cuidado e acompanhamento.',
  },
  {
    id: 'idiomas',
    question: 'Vocês atendem em outros idiomas?',
    answer:
      'O atendimento principal da Biodonth é realizado em português.\n\nPara pacientes que se comunicam melhor em inglês ou espanhol, conseguimos oferecer suporte durante o atendimento, facilitando a conversa, a compreensão das orientações e a explicação do plano de tratamento.\n\nPara outros idiomas, recomendamos avisar a clínica com antecedência. Assim, podemos nos organizar da melhor forma possível para acolher você com clareza, respeito e atenção.',
  },
  {
    id: 'pos-tratamento',
    question: 'Como funciona o acompanhamento após o tratamento?',
    answer:
      'Na Biodonth, o cuidado não termina quando o tratamento é concluído. Após finalizar uma etapa, orientamos o paciente sobre os cuidados necessários e indicamos revisões periódicas para acompanhar a saúde bucal, preservar os resultados alcançados e prevenir novos problemas.\n\nEm tratamentos mais extensos, como implantes, ortodontia e reabilitações orais, o acompanhamento faz parte do planejamento desde o início. Assim, cada fase é monitorada com atenção, segurança e continuidade.',
  },
];
