import { cn } from '@/lib/cn';
import { Heading } from './Heading';
import { RevealText } from './RevealText';

interface DisplayHeadlineProps {
  bronze: string;
  bronzeItalic?: string;
  subhead?: string;
  align?: 'left' | 'center';
  reveal?: boolean;
  className?: string;
  headingLevel?: 'display' | 'h1' | 'h2';
}

export function DisplayHeadline({ bronze, bronzeItalic, subhead, align = 'center', reveal = false, className, headingLevel = 'display' }: DisplayHeadlineProps) {
  const centered = align === 'center';
  return (
    <div className={cn(centered && 'text-center', className)}>
      <Heading level={headingLevel} tone="bronze">
        {reveal ? <RevealText>{bronze}</RevealText> : bronze}
      </Heading>
      {bronzeItalic && (
        <Heading level={headingLevel} tone="bronze" italic>
          {reveal ? <RevealText delay={0.15}>{bronzeItalic}</RevealText> : bronzeItalic}
        </Heading>
      )}
      {subhead && (
        <p className={cn(
          'font-body font-normal text-[clamp(18px,2.2vw,26px)] text-marmorino leading-[1.4] mt-4 max-w-[60ch]',
          centered && 'mx-auto'
        )}>
          {subhead}
        </p>
      )}
    </div>
  );
}
