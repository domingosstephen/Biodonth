import { cn } from '@/lib/cn';

const levelMap = {
  display: {
    tag: 'h1' as const,
    styles: 'font-display font-normal text-[clamp(48px,7vw,88px)] leading-[1.05] tracking-[-0.015em]',
  },
  h1: {
    tag: 'h1' as const,
    styles: 'font-display font-normal text-[clamp(36px,5vw,64px)] leading-[1.1] tracking-[-0.01em]',
  },
  h2: {
    tag: 'h2' as const,
    styles: 'font-display font-normal text-[clamp(28px,4vw,44px)] leading-[1.15]',
  },
  h3: {
    tag: 'h3' as const,
    styles: 'font-display font-normal text-[clamp(22px,2.5vw,30px)] leading-[1.2]',
  },
  eyebrow: {
    tag: 'span' as const,
    styles: 'font-body uppercase text-[13px] tracking-[var(--tracking-eyebrow)] text-bronze font-medium',
  },
} as const;

const toneMap = {
  charcoal: 'text-charcoal',
  bronze: 'text-bronze',
  concrete: 'text-concrete',
} as const;

interface HeadingProps {
  level: keyof typeof levelMap;
  as?: React.ElementType;
  italic?: boolean;
  tone?: keyof typeof toneMap;
  className?: string;
  children: React.ReactNode;
}

export function Heading({ level, as, italic, tone, className, children }: HeadingProps) {
  const config = levelMap[level];
  const Component = as || config.tag;
  return (
    <Component className={cn(config.styles, tone && toneMap[tone], italic && 'italic', className)}>
      {children}
    </Component>
  );
}
