import React from 'react';
import { Metadata } from 'next';
import { DeliverablesService } from '@/lib/services/DeliverablesService';
import { DeliverablesSection } from '@/features/deliverables/components/DeliverablesSection';
import { FinalCtaSection } from '@/features/cta/components/FinalCtaSection';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Capacitaciones & Mentoría',
  description: 'Programa de capacitación continua y mentoría estratégica para distribuidores Oriflame.',
};

export default async function CapacitacionesPage() {
  const deliverables = await DeliverablesService.getDeliverables();

  return (
    <div className="pt-32">
      <Container className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
          Programa de <span className="text-gold-gradient">Capacitaciones</span>
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
          Acceso completo a módulos en video, webinars semanales y herramientas de educación contínua.
        </p>
      </Container>
      <DeliverablesSection deliverables={deliverables} />
      <FinalCtaSection />
    </div>
  );
}
