import React from 'react';
import { Metadata } from 'next';
import { ResourcesService } from '@/lib/services/ResourcesService';
import { ResourcesSection } from '@/features/resources/components/ResourcesSection';
import { FinalCtaSection } from '@/features/cta/components/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Biblioteca de Recursos Digitales',
  description: 'Descarga plantillas, guías prácticas y manuales para impulsar tu negocio independiente.',
};

export default async function RecursosPage() {
  const resources = await ResourcesService.getResources();

  return (
    <div className="pt-32">
      <ResourcesSection resources={resources} />
      <FinalCtaSection />
    </div>
  );
}
