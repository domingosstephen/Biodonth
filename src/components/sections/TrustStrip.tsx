import { Container } from '@/components/ui/Container';
import { HOME_TRUST_STRIP } from '@/content/home';

export function TrustStrip() {
  return (
    <section
      aria-label="Trust statement"
      className="relative bg-concrete border-t border-b border-marmorino-light/40 py-7 md:py-9"
    >
      <Container>
        <p className="max-w-3xl mx-auto text-center font-display italic text-marmorino leading-relaxed text-[clamp(15px,1.8vw,20px)] flex items-center justify-center gap-4">
          <span aria-hidden="true" className="hidden md:inline-block w-1 h-1 rounded-full bg-bronze shrink-0" />
          <span>{HOME_TRUST_STRIP.text}</span>
          <span aria-hidden="true" className="hidden md:inline-block w-1 h-1 rounded-full bg-bronze shrink-0" />
        </p>
      </Container>
    </section>
  );
}
