'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { LogoFull } from '@/components/ui/Logo';
import { NavUtilityRow } from './NavUtilityRow';
import { NavMobileMenu } from './NavMobileMenu';
import { NAV_ITEMS } from '@/content/nav';
import { WHATSAPP_CTA_URL } from '@/content/contact';
import { cn } from '@/lib/cn';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rafRef = useRef<number>(0);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setScrolled(window.scrollY > 64);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  const primaryItems = NAV_ITEMS.filter((i) => !i.secondary);
  const secondaryItems = NAV_ITEMS.filter((i) => i.secondary);

  return (
    <header
      role="banner"
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[var(--ease-premium)]',
        scrolled && 'bg-concrete/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
      )}
    >
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-bronze focus:text-pure focus:px-4 focus:py-2 focus:rounded-[2px] focus:outline-none"
      >
        Pular para o conteúdo
      </a>

      <NavUtilityRow hidden={scrolled} />

      <Container className="flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-bronze transition-colors duration-500 ease-[var(--ease-premium)] focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
        >
          <LogoFull className="h-9 md:h-11 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {/* Primary items — always visible */}
          {primaryItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group relative text-[14px] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2',
                  active ? 'text-bronze' : 'text-charcoal hover:text-bronze'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 right-0 h-px bg-bronze',
                    active
                      ? 'scale-x-100'
                      : 'scale-x-0 origin-left transition-transform duration-400 ease-[var(--ease-premium)] group-hover:scale-x-100'
                  )}
                />
              </Link>
            );
          })}

          {/* Secondary items — visible at lg, hidden at md */}
          {secondaryItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'hidden lg:inline-flex group relative text-[14px] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2',
                  active ? 'text-bronze' : 'text-charcoal hover:text-bronze'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 right-0 h-px bg-bronze',
                    active
                      ? 'scale-x-100'
                      : 'scale-x-0 origin-left transition-transform duration-400 ease-[var(--ease-premium)] group-hover:scale-x-100'
                  )}
                />
              </Link>
            );
          })}

          {/* "Mais" dropdown — visible at md, hidden at lg */}
          {secondaryItems.length > 0 && (
            <details className="relative lg:hidden group">
              <summary className="list-none cursor-pointer text-[14px] font-medium text-charcoal hover:text-bronze transition-colors duration-300 inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2">
                Mais
                <ChevronDown size={14} className="transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="absolute right-0 top-full mt-2 bg-pure rounded-[2px] shadow-lg py-2 min-w-[160px] z-50">
                {secondaryItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block px-4 py-2 text-[14px] font-medium transition-colors duration-300',
                      isActive(item.href)
                        ? 'text-bronze'
                        : 'text-charcoal hover:text-bronze hover:bg-concrete'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button
            variant="pill"
            as="a"
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar consulta
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-charcoal hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </Container>

      <NavMobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
