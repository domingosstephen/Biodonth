import { cn } from '@/lib/cn';

const toneMap = {
  concrete: 'bg-concrete text-charcoal',
  'concrete-warm': 'bg-concrete-warm text-charcoal',
  pure: 'bg-pure text-charcoal',
  charcoal: 'bg-charcoal text-concrete',
  shadow: 'bg-shadow text-concrete',
} as const;

const spacingMap = {
  tight: 'py-16 md:py-20',
  default: 'py-24 md:py-32 lg:py-40',
  loose: 'py-32 md:py-48 lg:py-56',
} as const;

interface SectionProps {
  tone?: keyof typeof toneMap;
  spacing?: keyof typeof spacingMap;
  className?: string;
  children: React.ReactNode;
}

export function Section({ tone = 'concrete', spacing = 'default', className, children }: SectionProps) {
  return (
    <section className={cn(toneMap[tone], spacingMap[spacing], className)}>
      {children}
    </section>
  );
}
