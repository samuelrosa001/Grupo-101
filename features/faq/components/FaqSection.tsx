'use client';

import React from 'react';
import { FaqItem } from '@/types/services';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Accordion } from '@/components/ui/Accordion';

interface FaqSectionProps {
  faqs: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  return (
    <section id="faq" className="py-24 bg-[#0E2239]/50 relative">
      <Container>
        <SectionTitle
          badge="Claridad Total"
          title="Preguntas"
          highlight="Frecuentes"
          subtitle="Resolvemos tus dudas principales con total honestidad, ética y profesionalismo."
        />

        <Accordion items={faqs} />
      </Container>
    </section>
  );
};
