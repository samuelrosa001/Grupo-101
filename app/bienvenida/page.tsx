import React from 'react';
import { Metadata } from 'next';
import { AutoRedirectBridge } from '@/components/features/AutoRedirectBridge';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Acceso a la Comunidad Oficial | Diamantes en 90 Días',
  description: 'Conectando directamente con el Grupo Oficial de WhatsApp de la comunidad Diamantes en 90 Días con Eduardo Cruz Alcántara.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function BienvenidaPage() {
  return (
    <AutoRedirectBridge
      variant="group"
      targetUrl={siteConfig.sponsor.whatsappUrl}
      delaySeconds={2}
    />
  );
}
