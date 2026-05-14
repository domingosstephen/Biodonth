'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  videoSrc: string;
  ariaLabel: string;
};

export function VideoModal({ open, onClose, videoSrc, ariaLabel }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll
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

  // Focus close button on open
  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    }
  }, [open]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  // Autoplay on open, pause+reset on close
  useEffect(() => {
    if (open) {
      videoRef.current?.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[80] bg-shadow/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo institucional"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Close button */}
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Fechar vídeo"
            className="absolute top-4 right-4 md:top-6 md:right-6 z-[81] w-12 h-12 flex items-center justify-center text-concrete hover:text-bronze transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-bronze focus-visible:outline-offset-2"
          >
            <X size={24} />
          </button>

          {/* Video container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative w-full max-w-6xl aspect-video bg-shadow rounded-[2px] overflow-hidden border-[1.5px] border-bronze"
          >
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              controlsList="nodownload noplaybackrate"
              playsInline
              preload="none"
              className="w-full h-full object-cover bg-shadow"
              aria-label={ariaLabel}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
