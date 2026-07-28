import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { LayoutDashboard, Shield, TrendingUp, Users, Award } from 'lucide-react';
import { isFeatureEnabled } from '@/config/features';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Dashboard de Distribuidores | 90 Días',
  description: 'Panel de control de métricas, equipo y progreso para distribuidores.',
};

export default function DashboardPage() {
  const isDashboardEnabled = isFeatureEnabled('dashboard');

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Container className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E2239] text-xs text-[#F3E0AA] border border-[#D6A74E]/30 mb-2">
              <Shield className="w-3.5 h-3.5 text-[#D6A74E]" />
              <span>Rol Requerido: Distributor / Admin</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-white">
              Dashboard de <span className="text-gold-gradient">Control de Equipo</span>
            </h1>
          </div>
          <Button href={siteConfig.sponsor.registerUrl} isExternal variant="gold" size="sm">
            <span>Portal Oriflame</span>
          </Button>
        </div>

        {/* Placeholder Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#0E2239] border border-white/10">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs">Meta de 90 Días</span>
              <TrendingUp className="w-4 h-4 text-[#D6A74E]" />
            </div>
            <p className="text-2xl font-serif font-bold text-white">Nivel Diamante</p>
            <p className="text-[11px] text-emerald-400 mt-1">En fase de mentoría</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E2239] border border-white/10">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs">Miembros del Equipo</span>
              <Users className="w-4 h-4 text-[#D6A74E]" />
            </div>
            <p className="text-2xl font-serif font-bold text-white">Comunidad VIP</p>
            <p className="text-[11px] text-slate-400 mt-1">Soporte WhatsApp 24/7</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E2239] border border-white/10">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs">Módulos Completados</span>
              <Award className="w-4 h-4 text-[#D6A74E]" />
            </div>
            <p className="text-2xl font-serif font-bold text-white">Capacitación</p>
            <p className="text-[11px] text-slate-400 mt-1">Video Bajo Demanda</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E2239] border border-white/10">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs">Feature Flag</span>
              <LayoutDashboard className="w-4 h-4 text-[#D6A74E]" />
            </div>
            <p className="text-2xl font-serif font-bold text-white">
              {isDashboardEnabled ? 'Activo' : 'Inactivo'}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Listo para Firebase CRM</p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-[#081827] border border-[#D6A74E]/30 text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="font-serif font-bold text-2xl text-white">
            Panel Enterprise en Preparación
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Esta vista está totalmente abstraída en la arquitectura del proyecto. En la siguiente etapa se conectará a Firebase Firestore y Cloud Functions para ofrecer seguimiento en tiempo real de tu red de distribuidores.
          </p>
          <Button href="/" variant="outline" size="md">
            <span>Regresar a Inicio</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
