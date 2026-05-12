import { Star } from 'lucide-react';
import { cn } from '@/lib/cn';

type StarsProps = {
  rating: number;
  size?: number;
  className?: string;
  label?: string;
};

export function Stars({ rating, size = 18, className, label }: StarsProps) {
  const filled = Math.round(rating);
  return (
    <span
      role="img"
      aria-label={label ?? `${rating} de 5 estrelas`}
      className={cn('inline-flex items-center gap-1', className)}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          size={size}
          strokeWidth={1.5}
          className={i < filled ? 'text-bronze fill-bronze' : 'text-marmorino-light'}
        />
      ))}
    </span>
  );
}
