import React from 'react';
import { Metadata } from 'next';
import { BridgeLandingPage } from '@/components/features/BridgeLandingPage';

export const metadata: Metadata = {
  title: 'Bienvenido a la Comunidad | Diamantes en 90 Días',
  description: 'Ingresa a la comunidad privada de capacitación y desarrollo de negocios independientes con Eduardo Cruz Alcántara.',
};

export default function BienvenidaPage() {
  return <BridgeLandingPage />;
}
