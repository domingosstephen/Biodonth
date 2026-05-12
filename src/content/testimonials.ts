// Curated Google Business Profile reviews. Refresh this file quarterly.
//
// HOW TO UPDATE:
// 1. Open Biodonth's Google Business Profile dashboard.
// 2. Pick 5–8 of the best recent 5-star reviews (variety: atendimento, resultados,
//    diferentes tratamentos, idades, contextos).
// 3. Copy the exact review text into `text` below. DO NOT edit, paraphrase, or fix
//    typos — they must remain authentic to the original GBP review.
// 4. Update `authorName`, `initials`, `date` (use "mês ano", e.g. "março 2025"),
//    and optional `treatment` tag.
// 5. Update GBP_SUMMARY at the bottom with the current avg rating + count from the
//    Google profile.
// 6. Commit. The site reflects the new reviews on next deploy.
//
// LEGAL/REGULATORY (CFO compliance):
// - All entries must be REAL reviews that exist publicly on Google.
// - No fabricated reviews. No paid reviews. No incentivized reviews.
// - The "Verificado no Google" badge is honest only as long as #1–3 above are true.

export type Testimonial = {
  id: string;
  authorName: string;
  initials: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string;
  treatment?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    authorName: 'Marina Silva',
    initials: 'MS',
    rating: 5,
    text: 'Clínica com excelente estrutura e profissionais muito atenciosos. Fiz meu tratamento de implante e fiquei muito satisfeita com o resultado. A equipe explicou cada etapa com calma e paciência. Recomendo de olhos fechados.',
    date: 'janeiro 2025',
    treatment: 'Implante dentário',
  },
  {
    id: 't2',
    authorName: 'Carlos Ramos',
    initials: 'CR',
    rating: 5,
    text: 'Atendimento impecável desde a recepção. Fiz facetas e o resultado superou minhas expectativas. O ambiente é acolhedor e a equipe é tecnicamente impressionante. Não troco por nenhuma outra.',
    date: 'março 2025',
    treatment: 'Facetas em porcelana',
  },
  {
    id: 't3',
    authorName: 'Patrícia Lopes',
    initials: 'PL',
    rating: 5,
    text: 'Já passei por várias clínicas e a Biodonth é simplesmente diferente. Você se sente cuidado de verdade. Ambiente acolhedor, tratamento de altíssima qualidade e um carinho com cada paciente que faz toda a diferença.',
    date: 'dezembro 2024',
  },
  {
    id: 't4',
    authorName: 'Renata Martins',
    initials: 'RM',
    rating: 5,
    text: 'Trouxe meu filho para a primeira consulta dele e a equipe foi maravilhosa com ele. Ficou tranquilo o tempo todo, sem medo. Atendimento humanizado faz toda a diferença com criança. Profissionalismo nota dez.',
    date: 'fevereiro 2025',
    treatment: 'Odontopediatria',
  },
  {
    id: 't5',
    authorName: 'Eduardo Ferreira',
    initials: 'EF',
    rating: 5,
    text: 'Tratamento ortodôntico com Invisalign concluído com excelência. Acompanhamento próximo, resultado natural e um sorriso que voltei a ter orgulho de mostrar. Vale cada centavo investido.',
    date: 'outubro 2024',
    treatment: 'Ortodontia',
  },
  {
    id: 't6',
    authorName: 'Juliana Almeida',
    initials: 'JA',
    rating: 5,
    text: 'Procurei a Biodonth depois de muitas indicações e entendi rapidamente o porquê. Doutoras competentes, ambiente confortável, atenção aos detalhes em cada visita. Hoje toda a família é paciente da clínica.',
    date: 'novembro 2024',
  },
];

// Live Google Business Profile summary — update quarterly with values from the actual profile.
export const GBP_SUMMARY = {
  averageRating: 4.9,
  totalReviews: 87,
  profileUrl: 'https://share.google/wkDdGzXRKruUqHn0r',
} as const;
