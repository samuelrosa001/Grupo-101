import React from 'react';
import { Metadata } from 'next';
import { PrivateContactBridge } from '@/components/features/PrivateContactBridge';

export const metadata: Metadata = {
  title: 'Contacto Privado con Eduardo Cruz | Diamantes en 90 Días',
  description: 'Comunícate directamente vía WhatsApp privado con Eduardo Cruz Alcántara para recibir orientación personalizada.',
};

export default function PrivadoPage() {
  return <PrivateContactBridge />;
}

