'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { GoldParticles } from '@/components/ui/GoldParticles';
import {
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Users,
  ArrowRight,
  UserCheck,
} from 'lucide-react';

export const BridgeLandingPage: React.FC = () => {
  const [joinUrl, setJoinUrl] = useState<string>('');

  useEffect(() => {
    // Dynamically set WhatsApp URL on client side to keep static HTML crawler-safe
    setJoinUrl(siteConfig.sponsor.whatsappUrl);
  }, []);

  const handleJoinClick = (e: React.MouseEvent) => {
    if (!joinUrl) {
      e.preventDefault();
      window.open(siteConfig.sponsor.whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const benefits = [
    {
      title: 'Capacitaciones Semanales en Vivo',
      desc: 'Aprende estrategias de marketing de atracción y ventas paso a paso.',
    },
    {
      title: 'Comunidad & Networking Activo',
      desc: 'Conecta con otros emprendedores enfocados en crecer su negocio.',
    },
    {
      title: 'Acompañamiento y Mentoría Directa',
      desc: 'Resuelve tus dudas y recibe orientación de Eduardo Cruz Alcántara.',
    },
    {
      title: 'Materiales y Recursos Exclusivos',
      desc: 'Plantillas, guías digitales y herramientas listas para usar.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#081827] via-[#0E2239] to-[#081827]">
      {/* Background Particles and Glow */}
      <GoldParticles />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D6A74E]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 max-w-2xl text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-block">
            <Badge>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1" />
              Acceso Inmediato al Grupo
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            ¡Estás a un paso de unirte a la{' '}
            <span className="text-gold-gradient block sm:inline">
              Comunidad Oficial!
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Has completado tu registro. Haz clic en el botón a continuación para ingresar al grupo VIP y comenzar tu formación en{' '}
            <strong className="text-white">Desarrollo de Diamantes en 90 Días</strong>.
          </p>
        </motion.div>

        {/* Central Bridge Action Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Card glow className="text-left space-y-6 bg-[#0E2239]/95 border-[#D6A74E]/40 shadow-2xl">
            {/* Header with Group Info */}
            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
                <MessageSquare className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-white">Grupo Privado de la Comunidad</h2>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold">
                    Oficial
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Comunidad de Diamantes 90 Días • Mentor Eduardo Cruz Alcántara
                </p>
              </div>
            </div>

            {/* Main Action Button */}
            <div className="pt-2">
              <Button
                href={joinUrl || '#'}
                onClick={handleJoinClick}
                isExternal={!!joinUrl}
                variant="gold"
                size="lg"
                className="w-full py-4 text-base font-bold shadow-xl shadow-[#D6A74E]/30 flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5 text-[#081827]" />
                <span>Entrar al Grupo Oficial Ahora</span>
                <ArrowRight className="w-5 h-5 text-[#081827]" />
              </Button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Al hacer clic se abrirá el canal oficial de la comunidad.
              </p>
            </div>

            {/* What you will receive inside */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A74E] block">
                Lo que recibirás dentro del grupo:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#081827]/60 border border-white/5 space-y-1"
                  >
                    <div className="flex items-center gap-2 text-[#F3E0AA] text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{b.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 pl-5 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsor Info Footer inside Card */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D6A74E]" />
                <span>
                  Patrocinador: <strong className="text-white">{siteConfig.sponsor.name}</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Users className="w-3.5 h-3.5 text-[#D6A74E]" />
                <span>Acceso exclusivo para miembros</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Secondary Navigation Option */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400 pt-2"
        >
          <span>¿Quieres registrarte como socio oficial de Oriflame?</span>
          <Button
            href={siteConfig.sponsor.registerUrl}
            isExternal
            variant="outline"
            size="sm"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#D6A74E]" />
            <span>Crear Código de Socio</span>
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};
