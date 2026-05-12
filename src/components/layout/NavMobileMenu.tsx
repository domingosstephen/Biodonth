'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Phone } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import Link from 'next/link';
import { LogoMark } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { NAV_ITEMS } from '@/content/nav';
import { CONTACT, SOCIAL, TEL_URL, WHATSAPP_CTA_URL } from '@/content/contact';

interface NavMobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function NavMobileMenu({ open, onClose }: NavMobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[60] bg-concrete flex flex-col"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-5">
            <LogoMark className="h-10 w-auto text-bronze" />
            <button
              onClick={onClose}
              aria-label="Fechar menu"
              className="text-charcoal hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 overflow-y-auto px-6">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="border-b border-marmorino-light/40">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-5 font-display font-normal text-[clamp(28px,7vw,40px)] text-charcoal leading-tight hover:text-bronze active:text-bronze transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="mt-8 space-y-3 text-marmorino">
              <a
                href={TEL_URL}
                className="flex items-center gap-2 text-sm hover:text-bronze transition-colors duration-300"
              >
                <Phone size={14} />
                <span>{CONTACT.phone.display}</span>
              </a>
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-bronze transition-colors duration-300"
              >
                <span>{CONTACT.whatsapp.display}</span>
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={SOCIAL.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Biodonth"
                  className="hover:text-bronze transition-colors duration-300"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={SOCIAL.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da Biodonth"
                  className="hover:text-bronze transition-colors duration-300"
                >
                  <FacebookIcon size={18} />
                </a>
              </div>
            </div>
          </nav>

          {/* Bottom CTA */}
          <div className="px-6 py-6">
            <Button
              variant="pill"
              as="a"
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center"
            >
              Agendar consulta
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
