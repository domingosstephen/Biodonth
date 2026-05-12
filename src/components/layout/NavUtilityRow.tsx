'use client';

import { Phone } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import { Container } from '@/components/ui/Container';
import { TEL_URL, CONTACT, SOCIAL } from '@/content/contact';
import { cn } from '@/lib/cn';

interface NavUtilityRowProps {
  hidden?: boolean;
}

export function NavUtilityRow({ hidden }: NavUtilityRowProps) {
  return (
    <div
      className={cn(
        'hidden md:block w-full bg-concrete-warm/60 backdrop-blur-sm border-b border-marmorino-light/30 transition-all duration-500 ease-[var(--ease-premium)]',
        hidden && 'max-h-0 overflow-hidden opacity-0 !py-0 !border-b-0'
      )}
    >
      <Container className="flex items-center justify-between py-2">
        <a
          href={TEL_URL}
          className="inline-flex items-center gap-2 text-[13px] text-marmorino hover:text-bronze transition-colors duration-300"
        >
          <Phone size={14} />
          <span>{CONTACT.phone.display}</span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href={SOCIAL.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Biodonth"
            className="text-marmorino hover:text-bronze transition-colors duration-300"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href={SOCIAL.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook da Biodonth"
            className="text-marmorino hover:text-bronze transition-colors duration-300"
          >
            <FacebookIcon size={16} />
          </a>
        </div>
      </Container>
    </div>
  );
}
