import Image from 'next/image';
import { cn } from '@/lib/cn';

interface FramedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  onError?: React.ReactEventHandler<HTMLImageElement>;
}

export function FramedImage({ src, alt, width, height, sizes, className, priority, onError }: FramedImageProps) {
  return (
    <div className={cn('border-[1.5px] border-bronze', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes ?? '100vw'}
        priority={priority}
        onError={onError}
        className="block w-full h-auto"
      />
    </div>
  );
}
