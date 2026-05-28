'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type BeforeAfterProps = {
  before: { src: string; fallback: string; alt: string };
  after: { src: string; fallback: string; alt: string };
  beforeLabel?: string;
  afterLabel?: string;
  hint?: string;
  initial?: number;
  objectPosition?: string;
  scale?: number;
};

export function BeforeAfter({
  before,
  after,
  beforeLabel = 'Antes',
  afterLabel = 'Depois',
  hint = 'Arraste para ver a transformação',
  initial = 50,
  objectPosition,
  scale,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [beforeErrored, setBeforeErrored] = useState(false);
  const [afterErrored, setAfterErrored] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeSrc = beforeErrored ? before.fallback : before.src;
  const afterSrc = afterErrored ? after.fallback : after.src;

  // Reset when case changes
  useEffect(() => {
    setPosition(initial);
    setInteracted(false);
    setBeforeErrored(false);
    setAfterErrored(false);
  }, [before.src, after.src, initial]);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    setPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setInteracted(true);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  };

  const onPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false);
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let next = position;
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown': next -= 5; break;
      case 'ArrowRight':
      case 'ArrowUp': next += 5; break;
      case 'Home': next = 0; break;
      case 'End': next = 100; break;
      case 'PageDown': next -= 25; break;
      case 'PageUp': next += 25; break;
      default: return;
    }
    e.preventDefault();
    setInteracted(true);
    setPosition(Math.max(0, Math.min(100, next)));
  };

  const transitionClass = dragging ? '' : 'transition-[clip-path] duration-300 ease-[var(--ease-premium)]';
  const handleTransitionClass = dragging ? '' : 'transition-[left] duration-300 ease-[var(--ease-premium)]';

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-label="Comparação antes e depois"
      aria-orientation="horizontal"
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      onKeyDown={onKeyDown}
      className={`relative w-full aspect-[4/3] overflow-hidden border-[1.5px] border-bronze bg-concrete-warm select-none touch-pan-y focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-4 ${dragging ? 'cursor-grabbing' : 'cursor-ew-resize'}`}
    >
      {/* AFTER image — bottom layer */}
      <Image
        src={afterSrc}
        alt={after.alt}
        fill
        sizes="(max-width: 1024px) 90vw, 700px"
        className="object-cover pointer-events-none"
        style={{ ...(objectPosition ? { objectPosition } : {}), ...(scale ? { transform: `scale(${scale})` } : {}) }}
        onError={() => setAfterErrored(true)}
      />

      {/* BEFORE image — top layer, clipped */}
      <div
        className={`absolute inset-0 pointer-events-none ${transitionClass}`}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={before.alt}
          fill
          sizes="(max-width: 1024px) 90vw, 700px"
          className="object-cover"
          style={{ ...(objectPosition ? { objectPosition } : {}), ...(scale ? { transform: `scale(${scale})` } : {}) }}
          onError={() => setBeforeErrored(true)}
        />
      </div>

      {/* Vertical divider line */}
      <div
        aria-hidden="true"
        className={`absolute top-0 bottom-0 w-[1.5px] bg-bronze pointer-events-none ${handleTransitionClass}`}
        style={{ left: `${position}%`, transform: 'translateX(-0.75px)' }}
      />

      {/* Circular handle */}
      <div
        aria-hidden="true"
        className={`absolute top-1/2 pointer-events-none ${handleTransitionClass}`}
        style={{ left: `${position}%`, transform: 'translate(-50%, -50%)' }}
      >
        <div
          className={`flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-bronze border-2 border-concrete shadow-[0_4px_20px_-4px_rgba(168,130,77,0.5)] transition-transform duration-300 ease-[var(--ease-premium)] ${dragging ? 'scale-[1.12]' : 'hover:scale-[1.08]'}`}
        >
          <ChevronLeft className="w-3.5 h-3.5 text-concrete" strokeWidth={2.5} />
          <ChevronRight className="w-3.5 h-3.5 text-concrete -ml-0.5" strokeWidth={2.5} />
        </div>
      </div>

      {/* Antes label (top-left) */}
      <span
        aria-hidden="true"
        className="absolute top-4 left-4 md:top-5 md:left-5 inline-block bg-bronze text-concrete font-body font-medium text-[11px] md:text-[12px] tracking-[0.18em] uppercase px-3 py-1 rounded-[2px] pointer-events-none"
      >
        {beforeLabel}
      </span>

      {/* Depois label (top-right) */}
      <span
        aria-hidden="true"
        className="absolute top-4 right-4 md:top-5 md:right-5 inline-block bg-bronze text-concrete font-body font-medium text-[11px] md:text-[12px] tracking-[0.18em] uppercase px-3 py-1 rounded-[2px] pointer-events-none"
      >
        {afterLabel}
      </span>

      {/* Hint chip (bottom center) */}
      <div
        aria-hidden="true"
        className={`absolute bottom-5 md:bottom-7 left-1/2 inline-flex items-center gap-2 bg-shadow/70 backdrop-blur-sm text-concrete font-body text-[12px] px-4 py-2 rounded-full pointer-events-none transition-all duration-400 ease-[var(--ease-premium)] ${interacted ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-[bobX_2s_ease-in-out_infinite]'}`}
        style={interacted ? undefined : { transform: undefined }}
      >
        <ChevronLeft className="w-3 h-3" strokeWidth={2} />
        <span>{hint}</span>
        <ChevronRight className="w-3 h-3" strokeWidth={2} />
      </div>
    </div>
  );
}
