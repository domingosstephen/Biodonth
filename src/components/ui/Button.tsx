import { cn } from '@/lib/cn';

const variantMap = {
  primary: 'bg-bronze text-concrete hover:bg-bronze-dark rounded-[2px]',
  ghost: 'text-bronze hover:text-bronze-dark rounded-[2px] relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-[var(--ease-premium)] hover:after:w-full',
  dark: 'bg-charcoal text-concrete hover:bg-shadow rounded-[2px]',
  pill: 'bg-bronze text-pure hover:bg-bronze-dark rounded-full px-6 py-2.5 text-sm tracking-tight',
} as const;

const sizeMap = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
} as const;

type ButtonProps<T extends React.ElementType = 'button'> = {
  as?: T;
  variant?: keyof typeof variantMap;
  size?: keyof typeof sizeMap;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

export function Button<T extends React.ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as || 'button';
  const isPill = variant === 'pill';
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center font-body font-medium',
        'transition-all duration-300 ease-[var(--ease-premium)]',
        'focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2',
        variantMap[variant],
        !isPill && sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
