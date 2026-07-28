import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Lock, Shield, Sparkles, UserCheck } from 'lucide-react';
import { isFeatureEnabled } from '@/config/features';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Área Privada de Miembros | Academia 90 Días',
  description: 'Espacio exclusivo para distribuidores activos del programa de 90 Días.',
};

export default function PrivadoPage() {
  const isPrivateEnabled = isFeatureEnabled('privateArea');

  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center">
      <Container className="max-w-3xl text-center space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-[#0E2239] border border-[#D6A74E]/40 text-[#F3E0AA] mx-auto flex items-center justify-center shadow-xl">
          <Lock className="w-8 h-8 text-[#D6A74E]" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">
          Zona Privada de <span className="text-gold-gradient">Miembros</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Esta sección albergará el sistema de autenticación (Firebase Auth), seguimiento de lecciones y área de descargas exclusivas para el rol de <strong className="text-white">Miembro / Distribuidor</strong>.
        </p>

        <div className="p-8 rounded-3xl bg-[#0E2239]/80 border border-white/10 text-left space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono">Módulo: privateArea</span>
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-semibold">
              {isPrivateEnabled ? 'Feature Flag: Activa' : 'Feature Flag: Inactiva'}
            </span>
          </div>

          <h3 className="font-serif font-semibold text-lg text-white">
            Estatus del Sistema de Autenticación:
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Preparado para conectar Firebase Auth & Firestore. Si ya eres distribuidor registrado con Eduardo Cruz Alcántara, puedes unirte al grupo de WhatsApp para acceder a los materiales inmediatos.
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4">
            <Button
              href={siteConfig.sponsor.whatsappUrl}
              isExternal
              variant="gold"
              size="md"
              className="w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4" />
              <span>Solicitar Acceso VIP</span>
            </Button>
            <Button href="/" variant="outline" size="md" className="w-full sm:w-auto">
              <span>Volver a la Página Principal</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
