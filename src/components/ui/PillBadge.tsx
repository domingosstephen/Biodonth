import { Button } from './Button';

interface PillBadgeProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function PillBadge({ children, onClick, className }: PillBadgeProps) {
  return (
    <Button variant="pill" onClick={onClick} className={className}>
      {children}
    </Button>
  );
}
