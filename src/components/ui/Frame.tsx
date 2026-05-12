import { cn } from '@/lib/cn';

interface FrameProps {
  position?: 'top' | 'bottom' | 'both';
  children?: React.ReactNode;
}

function FrameLine({ className }: { className?: string }) {
  return (
    <div className={cn('w-full text-center font-body uppercase text-[11px] md:text-[12px] tracking-[var(--tracking-frame)] text-marmorino py-6', className)}>
      BIODONTH ODONTOLOGIA
    </div>
  );
}

export function Frame({ position = 'both', children }: FrameProps) {
  return (
    <>
      {(position === 'top' || position === 'both') && <FrameLine />}
      {children}
      {(position === 'bottom' || position === 'both') && <FrameLine />}
    </>
  );
}
