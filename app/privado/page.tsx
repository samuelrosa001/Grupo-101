import React from 'react';
import { Metadata } from 'next';
import { AutoRedirectBridge } from '@/components/features/AutoRedirectBridge';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contacto Privado con Eduardo Cruz | Diamantes en 90 Días',
  description: 'Conectando directamente vía WhatsApp privado con Eduardo Cruz Alcántara para tu asesoría 1 a 1.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivadoPage() {
  return (
    <AutoRedirectBridge
      variant="private"
      targetUrl={siteConfig.sponsor.privateWhatsappUrl}
      delaySeconds={2}
    />
  );
}
