import React from 'react';
import { Metadata } from 'next';
import { StepsService } from '@/lib/services/StepsService';
import { StepsTimelineSection } from '@/features/steps/components/StepsTimelineSection';
import { FinalCtaSection } from '@/features/cta/components/FinalCtaSection';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Cómo Funciona | Sistema de 90 Días',
  description: 'Conoce paso a paso la ruta estructurada para acelerar tu desarrollo en Oriflame con el patrocinio de Eduardo Cruz Alcántara.',
};

export default async function ComoFuncionaPage() {
  const steps = await StepsService.getSteps();

  return (
    <div className="pt-32">
      <Container className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
          Cómo Funciona el <span className="text-gold-gradient">Sistema de 90 Días</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
          Un plan de aceleración diseñado para brindarte la máxima claridad en cada etapa de tu negocio independiente.
        </p>
      </Container>
      <StepsTimelineSection steps={steps} />
      <FinalCtaSection />
    </div>
  );
}
