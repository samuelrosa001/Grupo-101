import React from 'react';
import { Metadata } from 'next';
import { BridgeLandingPage } from '@/components/features/BridgeLandingPage';

export const metadata: Metadata = {
  title: 'Comunidad Oficial | Diamantes en 90 Días',
  description: 'Ingresa a la comunidad privada de capacitación y desarrollo de negocios independientes.',
};

export default function ComunidadPage() {
  return <BridgeLandingPage />;
}
