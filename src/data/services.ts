export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  benefits: string[];
  faq: { q: string; a: string }[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: "ortodontia",
    title: "Ortodontia",
    shortTitle: "Ortodontia",
    tagline: "Dentes alinhados, sorriso perfeito",
    description:
      "Tratamento ortodôntico moderno para corrigir o alinhamento dos dentes e a mordida. Utilizamos aparelhos de última geração que oferecem mais conforto, menos consultas e resultados mais rápidos.",
    icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
    benefits: [
      "Aparelhos estéticos e convencionais",
      "Planejamento digital do tratamento",
      "Acompanhamento mensal personalizado",
      "Resultados visíveis desde as primeiras semanas",
    ],
    faq: [
      {
        q: "Quanto tempo dura o tratamento ortodôntico?",
        a: "O tempo varia de 12 a 30 meses, dependendo da complexidade do caso. Na avaliação inicial, damos uma estimativa precisa.",
      },
      {
        q: "Adultos podem usar aparelho?",
        a: "Sim! Não existe idade limite para ortodontia. Atendemos pacientes adultos com opções estéticas discretas.",
      },
    ],
    related: ["clareamento", "facetas", "reabilitacao-oral"],
  },
  {
    slug: "clareamento",
    title: "Clareamento Dental",
    shortTitle: "Clareamento",
    tagline: "Dentes mais brancos, sorriso mais confiante",
    description:
      "O clareamento dental é um procedimento seguro e eficaz que remove manchas e devolve a cor natural dos dentes. Oferecemos clareamento em consultório e caseiro supervisionado para resultados duradouros.",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    benefits: [
      "Resultados visíveis já na primeira sessão",
      "Procedimento seguro e indolor",
      "Clareamento em consultório ou caseiro",
      "Dentes até 8 tons mais claros",
    ],
    faq: [
      {
        q: "O clareamento enfraquece os dentes?",
        a: "Não. Quando realizado por um profissional qualificado, o clareamento é seguro e não danifica o esmalte dentário.",
      },
      {
        q: "Quanto tempo dura o resultado?",
        a: "O resultado pode durar de 1 a 3 anos, dependendo da alimentação e hábitos de higiene do paciente.",
      },
    ],
    related: ["facetas", "profilaxia", "ortodontia"],
  },
  {
    slug: "facetas",
    title: "Facetas e Lentes de Contato",
    shortTitle: "Facetas",
    tagline: "Transforme seu sorriso com lentes de contato dental",
    description:
      "As facetas e lentes de contato dental são lâminas ultrafinas aplicadas sobre os dentes para corrigir cor, formato e pequenos desalinhamentos. Um procedimento que transforma completamente o seu sorriso com aparência natural.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    benefits: [
      "Resultado natural e harmônico",
      "Correção de cor, forma e proporção",
      "Procedimento minimamente invasivo",
      "Durabilidade de longo prazo",
    ],
    faq: [
      {
        q: "Qual a diferença entre faceta e lente de contato dental?",
        a: "As lentes de contato são mais finas e exigem pouco ou nenhum desgaste do dente. As facetas são um pouco mais espessas. Na avaliação, indicamos a melhor opção.",
      },
      {
        q: "As facetas escurecem com o tempo?",
        a: "Facetas de porcelana são altamente resistentes a manchas. As de resina podem sofrer leve alteração, mas manutenções periódicas mantêm o resultado.",
      },
    ],
    related: ["clareamento", "ortodontia", "reabilitacao-oral"],
  },
  {
    slug: "implante",
    title: "Implante Dentário",
    shortTitle: "Implante",
    tagline: "Recupere a função e a beleza do seu sorriso",
    description:
      "Implantes dentários de titânio de alta qualidade para substituir dentes perdidos. Devolvemos a capacidade de mastigar, sorrir e viver com confiança — como se fossem seus dentes naturais.",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
    benefits: [
      "Implantes de titânio com alta taxa de sucesso",
      "Procedimento seguro com anestesia local",
      "Resultado natural e duradouro",
      "Melhora na mastigação e autoestima",
    ],
    faq: [
      {
        q: "O implante dói?",
        a: "O procedimento é feito com anestesia local e o desconforto pós-operatório é mínimo, controlado com medicação simples.",
      },
      {
        q: "Quanto tempo dura um implante?",
        a: "Com os cuidados adequados e visitas regulares, um implante pode durar a vida toda.",
      },
    ],
    related: ["protese", "reabilitacao-oral", "profilaxia"],
  },
  {
    slug: "protese",
    title: "Prótese Dentária",
    shortTitle: "Prótese",
    tagline: "Devolva a funcionalidade e estética ao seu sorriso",
    description:
      "Próteses fixas e removíveis de última geração para substituir dentes perdidos. Utilizamos materiais de alta qualidade para garantir conforto, funcionalidade e uma aparência natural.",
    icon: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75",
    benefits: [
      "Próteses fixas e removíveis",
      "Materiais de alta qualidade",
      "Conforto e funcionalidade",
      "Aparência natural",
    ],
    faq: [
      {
        q: "Qual prótese é ideal para mim?",
        a: "Depende do seu caso. Na avaliação, analisamos as melhores opções entre prótese fixa, removível ou sobre implante.",
      },
      {
        q: "Quanto tempo dura uma prótese?",
        a: "Com cuidados adequados, uma prótese pode durar muitos anos. Recomendamos revisões periódicas para ajustes.",
      },
    ],
    related: ["implante", "reabilitacao-oral", "profilaxia"],
  },
  {
    slug: "profilaxia",
    title: "Profilaxia — Limpeza Profissional",
    shortTitle: "Profilaxia",
    tagline: "Prevenção é o melhor tratamento",
    description:
      "A profilaxia é a limpeza profissional dos dentes, essencial para prevenir cáries, gengivite e periodontite. Removemos tártaro e placa bacteriana para manter sua saúde bucal em dia.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    benefits: [
      "Remoção de tártaro e placa bacteriana",
      "Prevenção de cáries e doenças gengivais",
      "Polimento dental profissional",
      "Orientação de higiene personalizada",
    ],
    faq: [
      {
        q: "Com que frequência devo fazer limpeza?",
        a: "Recomendamos a cada 6 meses, mas a frequência pode variar conforme seu caso clínico.",
      },
      {
        q: "A limpeza profissional dói?",
        a: "É um procedimento confortável e indolor na maioria dos casos.",
      },
    ],
    related: ["saude-gengiva", "odontopediatria", "reabilitacao-oral"],
  },
  {
    slug: "reabilitacao-oral",
    title: "Reabilitação Oral",
    shortTitle: "Reabilitação Oral",
    tagline: "Recupere a saúde e a beleza do seu sorriso por completo",
    description:
      "A reabilitação oral é o tratamento completo que envolve diversas especialidades para devolver a função mastigatória, estética e saúde bucal. Ideal para pacientes que precisam de múltiplos tratamentos integrados.",
    icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
    benefits: [
      "Planejamento multidisciplinar integrado",
      "Tratamento completo e personalizado",
      "Recuperação funcional e estética",
      "Acompanhamento contínuo",
    ],
    faq: [
      {
        q: "O que envolve a reabilitação oral?",
        a: "Pode envolver implantes, próteses, tratamentos de canal, periodontia e estética — tudo integrado em um único plano de tratamento.",
      },
      {
        q: "Quanto tempo leva?",
        a: "Depende da complexidade. Pode variar de alguns meses a mais de um ano, mas cada etapa é planejada para sua comodidade.",
      },
    ],
    related: ["implante", "protese", "facetas"],
  },
  {
    slug: "saude-gengiva",
    title: "Saúde da Gengiva — Periodontia",
    shortTitle: "Saúde da Gengiva",
    tagline: "Gengivas saudáveis, sorriso completo",
    description:
      "A periodontia cuida da saúde das gengivas e dos tecidos que sustentam os dentes. Tratamos gengivite, periodontite e realizamos procedimentos preventivos para manter suas gengivas saudáveis.",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    benefits: [
      "Tratamento de gengivite e periodontite",
      "Raspagem e alisamento radicular",
      "Prevenção da perda óssea",
      "Cirurgias periodontais quando necessário",
    ],
    faq: [
      {
        q: "Gengiva sangrando é normal?",
        a: "Não. Sangramento na gengiva é sinal de inflamação e deve ser avaliado pelo dentista o quanto antes.",
      },
      {
        q: "Periodontite tem cura?",
        a: "A periodontite pode ser controlada com tratamento adequado. Quanto antes diagnosticada, melhor o prognóstico.",
      },
    ],
    related: ["profilaxia", "reabilitacao-oral", "implante"],
  },
  {
    slug: "odontopediatria",
    title: "Odontopediatria",
    shortTitle: "Odontopediatria",
    tagline: "Cuidado especial para os sorrisos dos pequenos",
    description:
      "A odontopediatria é a especialidade dedicada à saúde bucal de bebês, crianças e adolescentes. Oferecemos atendimento acolhedor e lúdico para que os pequenos cresçam com hábitos saudáveis e sem medo do dentista.",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    benefits: [
      "Atendimento lúdico e acolhedor",
      "Prevenção desde os primeiros dentes",
      "Aplicação de flúor e selantes",
      "Orientação para pais e responsáveis",
    ],
    faq: [
      {
        q: "Quando levar o bebê ao dentista pela primeira vez?",
        a: "A partir do nascimento do primeiro dente ou até o primeiro ano de vida. A prevenção começa cedo!",
      },
      {
        q: "Como preparar a criança para o dentista?",
        a: "Fale de forma positiva sobre a visita, evite palavras como 'dor' e 'agulha'. Nosso ambiente é preparado para receber os pequenos com carinho.",
      },
    ],
    related: ["profilaxia", "ortodontia", "saude-gengiva"],
  },
];

import { config } from './clinic-config';

export const WHATSAPP_URL = config.whatsappUrl;
export const PHONE = config.phone;
export const WHATSAPP_PHONE = config.whatsappPhone;
export const ADDRESS = config.address;
export const GOOGLE_MAPS_EMBED = config.mapsEmbed;
export const INSTAGRAM = config.instagram ?? '';
export const FACEBOOK = config.facebook ?? '';
