import { MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_CTA_URL } from '@/content/contact';
import { TRATAMENTOS_PAGE } from '@/content/tratamentos-page';

export function TratamentosMidCta() {
  const { midCta } = TRATAMENTOS_PAGE;

  return (
    <section
      aria-label="Convite ao contato"
      className="relative bg-concrete-warm border-t border-b border-marmorino-light/40 py-14 md:py-18 lg:py-20"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <p className="font-display italic text-[clamp(22px,2.6vw,32px)] leading-snug text-bronze mb-3">
            {midCta.bronzeItalic}
          </p>
          <p className="font-body text-[clamp(15px,1.6vw,18px)] text-charcoal leading-relaxed max-w-xl">
            {midCta.plain}
          </p>
          <div className="mt-8 md:mt-10">
            <Button
              variant="pill"
              as="a"
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
                {midCta.ctaLabel}
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
