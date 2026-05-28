// Before/after case catalog. Each case has a "before" and "after" image of the same patient.
// objectPosition controls the crop focus — shifted to the mouth/teeth area.

export type BeforeAfterCase = {
  id: string;
  label: string;            // Short label shown in the thumbnail row
  treatmentTag: string;     // Eyebrow above the slider when this case is active
  objectPosition?: string;  // CSS object-position to focus on teeth area
  scale?: number;           // CSS scale to zoom into the mouth region
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
    id: 'implante',
    label: 'Implante',
    treatmentTag: 'Reabilitação com implante',
    objectPosition: 'center 75%',
    before: {
      src: '/images/antes-depois/implante-antes.png',
      fallback: 'https://picsum.photos/seed/biodonth-ba-1a/1200/1500',
      alt: 'Sorriso antes do tratamento de implante',
    },
    after: {
      src: '/images/antes-depois/implante-depois.png',
      fallback: 'https://picsum.photos/seed/biodonth-ba-1b/1200/1500',
      alt: 'Sorriso após reabilitação com implante',
    },
  },
  {
    id: 'facetas',
    label: 'Facetas',
    treatmentTag: 'Estética com facetas em porcelana',
    objectPosition: 'center 80%',
    scale: 1.6,
    before: {
      src: '/images/antes-depois/faceta-antes.png',
      fallback: 'https://picsum.photos/seed/biodonth-ba-2a/1200/1500',
      alt: 'Sorriso antes do tratamento com facetas',
    },
    after: {
      src: '/images/antes-depois/faceta-depois.png',
      fallback: 'https://picsum.photos/seed/biodonth-ba-2b/1200/1500',
      alt: 'Sorriso após tratamento com facetas em porcelana',
    },
  },
  {
    id: 'clareamento',
    label: 'Clareamento',
    treatmentTag: 'Clareamento dental',
    objectPosition: 'center 80%',
    scale: 1.6,
    before: {
      src: '/images/antes-depois/clareamento-antes.png',
      fallback: 'https://picsum.photos/seed/biodonth-ba-3a/1200/1500',
      alt: 'Sorriso antes do clareamento dental',
    },
    after: {
      src: '/images/antes-depois/clareamento-depois.png',
      fallback: 'https://picsum.photos/seed/biodonth-ba-3b/1200/1500',
      alt: 'Sorriso após clareamento dental',
    },
  },
  {
    id: 'alinhador',
    label: 'Alinhador',
    treatmentTag: 'Correção com alinhadores transparentes',
    objectPosition: 'center 90%',
    scale: 1.9,
    before: {
      src: '/images/antes-depois/alinhador-antes.png',
      fallback: 'https://picsum.photos/seed/biodonth-ba-4a/1200/1500',
      alt: 'Sorriso antes do tratamento com alinhadores',
    },
    after: {
      src: '/images/antes-depois/alinhador-depois.png',
      fallback: 'https://picsum.photos/seed/biodonth-ba-4b/1200/1500',
      alt: 'Sorriso após tratamento com alinhadores transparentes',
    },
  },
];
