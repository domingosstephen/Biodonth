// Real Google Business Profile reviews — pulled directly from Biodonth's GBP.
//
// HOW TO UPDATE:
// 1. Open Biodonth's Google Business Profile dashboard.
// 2. Pick 5–8 of the best recent 5-star reviews.
// 3. Copy the exact review text into `text` below. DO NOT edit, paraphrase, or fix
//    typos — they must remain authentic to the original GBP review.
// 4. Right-click the reviewer's profile photo on GBP → "Save image as" →
//    save to public/images/reviews/ (e.g. matheus-silva.jpg). Set photoSrc accordingly.
// 5. Update GBP_SUMMARY at the bottom with the current avg rating + count.
// 6. Commit. The site reflects the new reviews on next deploy.
//
// LEGAL/REGULATORY (CFO compliance):
// - All entries must be REAL reviews that exist publicly on Google.
// - No fabricated reviews. No paid reviews. No incentivized reviews.

export type Testimonial = {
  id: string;
  authorName: string;
  initials: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string;
  treatment?: string;
  photoSrc?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    authorName: 'Matheus Silva',
    initials: 'MS',
    rating: 5,
    text: 'Atendimento excelente desde a recepção, equipe profissional e um ambiente agradável. Fui muito bem orientado durante todo o tratamento com a Dr. Cláudia, que é super atenciosa e excepcional.',
    date: 'outubro 2025',
    photoSrc: '/images/reviews/matheus-silva.jpg',
  },
  {
    id: 't2',
    authorName: 'Vânia Freire',
    initials: 'VF',
    rating: 5,
    text: 'É muito fácil falar da Biodonth pois é um lugar de muito acolhimento, cuidado e profissionalismo. Meus dois filhos fazem tratamento ortodôntico nesta clínica. Logo na recepção você é bem acolhido, as recepcionistas são muito educadas e prestativas. O ambiente é muito gostoso e acolhedor. As dentistas são bem atenciosas e passam as informações com muita clareza. A dra Marcia e a dra Claudia são maravilhosas. Super recomendo a clínica.',
    date: 'dezembro 2025',
    treatment: 'Ortodontia',
    photoSrc: '/images/reviews/vania-freire.jpg',
  },
  {
    id: 't3',
    authorName: 'Danii Souza',
    initials: 'DS',
    rating: 5,
    text: 'um lugar de paz, todos super simpáticos tanto na recepção quanto dentro do consultório com a dentista. Tem uma câmera q tira foto dos dentes com um zoom q dá pra ver até a alma do dente kkkkk muito bom. Todos fazem o seu trabalho com excelência, profissionalismo, dedicação e com muita educação e sorrisos. Sou paciente e daria mais 1000 estrelas.',
    date: 'setembro 2025',
    photoSrc: '/images/reviews/danii-souza.jpg',
  },
  {
    id: 't4',
    authorName: 'Ronaldo Villela',
    initials: 'RV',
    rating: 5,
    text: 'Acabei de sair do consultorio. Adorei o lugar, recepção calorosa, atendimento humanizado, profissionais muito simpaticas e atenciosas, fazem com que o atendimento seja muito tranquilo e objetivo. Eles tem tecnologia de ponta e te mostram em detalhes os problemas e soluções para cada caso. Vale a visita com certeza. No caso de convênios, vá preparado pois na maioria das vezes os planos empresariais, são apenas para tratamentos mais básicos.',
    date: 'julho 2025',
    photoSrc: '/images/reviews/ronaldo-villela.jpg',
  },
  {
    id: 't5',
    authorName: 'Shirlei Alves',
    initials: 'SA',
    rating: 5,
    text: 'Fui muito bem recebida, um ambiente acolhedor, as atendentes são prestativas,atenciosas, uns amores, a Dra. Márcia e equipe Nem se fala umas queridas, fazem o atendimento com muita atenção e carinho, eu amei e super indico .',
    date: 'setembro 2025',
    photoSrc: '/images/reviews/shirlei-alves.jpg',
  },
  {
    id: 't6',
    authorName: 'Ana Ferreira',
    initials: 'AF',
    rating: 5,
    text: 'Atendimento maravilhoso. Fiz tratamento por um ano e agr volto para prevenção. Todas as doutoras são competentes e extremamente atenciosas, assim como os demais funcionários (recepção/ administração). Eu amo!',
    date: 'dezembro 2024',
    photoSrc: '/images/reviews/ana-ferreira.jpg',
  },
  {
    id: 't7',
    authorName: 'Nayara Silva',
    initials: 'NS',
    rating: 5,
    text: 'Eu super indico essa clínica. Meu filho foi super atendido, a maior paciência das Dra\'s com ele, carinho, cuidado. Ele tbm disse que é melhor dentista que ele já foi na vida dele. Parabéns a todas desde recepção até a cadeira de atendimento. Em especial Dra. Márcia',
    date: 'março 2025',
    treatment: 'Odontopediatria',
    photoSrc: '/images/reviews/nayara-silva.jpg',
  },
];

// Live Google Business Profile summary — update with values from the actual profile.
export const GBP_SUMMARY = {
  averageRating: 4.8,
  totalReviews: 284,
  profileUrl: 'https://share.google/wkDdGzXRKruUqHn0r',
} as const;
