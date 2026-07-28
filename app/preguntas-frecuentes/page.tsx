import React from 'react';
import { Metadata } from 'next';
import { FaqService } from '@/lib/services/FaqService';
import { FaqSection } from '@/features/faq/components/FaqSection';
import { FinalCtaSection } from '@/features/cta/components/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  description: 'Resolvemos todas tus dudas sobre el programa de 90 Días y la oportunidad Oriflame.',
};

export default async function PreguntasFrecuentesPage() {
  const faqs = await FaqService.getFaqs();

  return (
    <div className="pt-32">
      <FaqSection faqs={faqs} />
      <FinalCtaSection />
    </div>
  );
}
