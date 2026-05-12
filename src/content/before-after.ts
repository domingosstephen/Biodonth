// Before/after case catalog. Each case has a "before" and "after" image of the same patient.
// Until real Biodonth cases are available, the fallbacks use deterministic Picsum images
// (different seeds per slot so the slider visibly reveals different content).

export type BeforeAfterCase = {
  id: string;
  label: string;            // Short label shown in the thumbnail row, e.g. "Implante unitário"
  treatmentTag: string;     // Eyebrow above the slider when this case is active, e.g. "Reabilitação com implante"
  before: {
    src: string;
    fallback: string;
    alt: string;
  };
  after: {
    src: string;
    fallback: string;
    alt: string;
  };
};

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'implante-unitario',
    label: 'Implante unitário',
    treatmentTag: 'Reabilitação com implante',
    before: {
      src: '/images/antes-depois/implante-unitario-antes.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-ba-1a/1200/1500',
      alt: 'Sorriso antes do tratamento de implante unitário',
    },
    after: {
      src: '/images/antes-depois/implante-unitario-depois.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-ba-1b/1200/1500',
      alt: 'Sorriso após reabilitação com implante unitário',
    },
  },
  {
    id: 'facetas-anteriores',
    label: 'Facetas anteriores',
    treatmentTag: 'Estética com facetas em porcelana',
    before: {
      src: '/images/antes-depois/facetas-antes.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-ba-2a/1200/1500',
      alt: 'Sorriso antes do tratamento com facetas',
    },
    after: {
      src: '/images/antes-depois/facetas-depois.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-ba-2b/1200/1500',
      alt: 'Sorriso após tratamento com facetas em porcelana',
    },
  },
  {
    id: 'clareamento',
    label: 'Clareamento',
    treatmentTag: 'Clareamento dental',
    before: {
      src: '/images/antes-depois/clareamento-antes.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-ba-3a/1200/1500',
      alt: 'Sorriso antes do clareamento dental',
    },
    after: {
      src: '/images/antes-depois/clareamento-depois.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-ba-3b/1200/1500',
      alt: 'Sorriso após clareamento dental',
    },
  },
  {
    id: 'reabilitacao-total',
    label: 'Reabilitação total',
    treatmentTag: 'Reabilitação oral completa',
    before: {
      src: '/images/antes-depois/reabilitacao-antes.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-ba-4a/1200/1500',
      alt: 'Sorriso antes da reabilitação oral completa',
    },
    after: {
      src: '/images/antes-depois/reabilitacao-depois.jpg',
      fallback: 'https://picsum.photos/seed/biodonth-ba-4b/1200/1500',
      alt: 'Sorriso após reabilitação oral completa',
    },
  },
];
