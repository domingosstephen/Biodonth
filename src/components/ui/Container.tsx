import { cn } from '@/lib/cn';

const widthMap = {
  narrow: 'max-w-(--container-narrow)',
  default: 'max-w-(--container-default)',
  wide: 'max-w-(--container-wide)',
} as const;

interface ContainerProps {
  width?: keyof typeof widthMap;
  className?: string;
  children: React.ReactNode;
}

export function Container({ width = 'default', className, children }: ContainerProps) {
  return (
    <div className={cn('mx-auto px-6 md:px-10', widthMap[width], className)}>
      {children}
    </div>
  );
}
