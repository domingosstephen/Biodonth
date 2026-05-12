import Image from 'next/image';
import { cn } from '@/lib/cn';

interface FramedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  onError?: React.ReactEventHandler<HTMLImageElement>;
}

export function FramedImage({ src, alt, width, height, className, priority, onError }: FramedImageProps) {
  return (
    <div className={cn('border-[1.5px] border-bronze', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onError={onError}
        className="block w-full h-auto"
      />
    </div>
  );
}
