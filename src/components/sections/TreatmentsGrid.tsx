'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { DisplayHeadline } from '@/components/ui/DisplayHeadline';
import { Button } from '@/components/ui/Button';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { HOMEPAGE_TREATMENTS } from '@/content/treatments';
import { HOME_TREATMENTS } from '@/content/home';
import { FADE_UP, TRANSITION_DEFAULT } from '@/lib/motion';

export function TreatmentsGrid() {
  return (
    <section
      id="tratamentos"
      className="bg-concrete py-20 md:py-28 lg:py-36"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <motion.p
            variants={FADE_UP}
            transition={TRANSITION_DEFAULT}
            className="font-body uppercase text-[12px] md:text-[13px] tracking-[0.18em] text-bronze font-medium mb-6"
          >
            {HOME_TREATMENTS.eyebrow}
          </motion.p>

          <motion.div variants={FADE_UP} transition={TRANSITION_DEFAULT}>
            <DisplayHeadline
              bronze={HOME_TREATMENTS.bronze}
              bronzeItalic={HOME_TREATMENTS.bronzeItalic}
              subhead={HOME_TREATMENTS.description}
              align="center"
            />
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-7 md:gap-y-14"
        >
          {HOMEPAGE_TREATMENTS.map((treatment) => (
            <motion.div
              key={treatment.slug}
              variants={FADE_UP}
              transition={TRANSITION_DEFAULT}
            >
              <TreatmentCard treatment={treatment} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
          transition={{ ...TRANSITION_DEFAULT, delay: 0.3 }}
          className="mt-14 md:mt-20 text-center"
        >
          <Button
            variant="ghost"
            as="a"
            href={HOME_TREATMENTS.ctaHref}
            size="lg"
          >
            {HOME_TREATMENTS.ctaLabel}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
