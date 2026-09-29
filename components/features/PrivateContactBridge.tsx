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
  ArrowRight,
  UserCheck,
  Lock,
} from 'lucide-react';

export const PrivateContactBridge: React.FC = () => {
  const [chatUrl, setChatUrl] = useState<string>('');

  useEffect(() => {
    // Client-side hydration for safe redirect
    setChatUrl(siteConfig.sponsor.privateWhatsappUrl);
  }, []);

  const handleChatClick = (e: React.MouseEvent) => {
    if (!chatUrl) {
      e.preventDefault();
      window.open(siteConfig.sponsor.privateWhatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const benefits = [
    {
      title: 'Orientación Inicial Paso a Paso',
      desc: 'Resuelve todas tus dudas sobre el modelo de negocio y cómo arrancar hoy.',
    },
    {
      title: 'Estrategia Personalizada 1 a 1',
      desc: 'Diseño de un plan de trabajo adaptado a tus metas para los primeros 90 días.',
    },
    {
      title: 'Acompañamiento y Mentoría Directa',
      desc: 'Contacto directo, confidencial y sin intermediarios con Eduardo Cruz Alcántara.',
    },
    {
      title: 'Materiales y Recursos Exclusivos',
      desc: 'Guías de inicio rápido, plantillas de prospección y herramientas listas para usar.',
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
              Contacto Directo y Privado
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            ¡Estás a un paso de contactar a tu{' '}
            <span className="text-gold-gradient block sm:inline">
              Mentor Privado!
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Haz clic en el botón a continuación para enviar un mensaje directo a{' '}
            <strong className="text-white">Eduardo Cruz Alcántara</strong> al número privado{' '}
            <span className="text-[#F3E0AA] font-semibold">{siteConfig.sponsor.phone}</span> y recibir atención personalizada en{' '}
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
            {/* Header with Private Contact Info */}
            <div className="flex items-center gap-4 pb-4 border-b border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
                <MessageSquare className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-white">Chat Privado con Eduardo Cruz</h2>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold">
                    Oficial
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Atención Personalizada 1 a 1 • {siteConfig.sponsor.phone}
                </p>
              </div>
            </div>

            {/* Main Action Button */}
            <div className="pt-2">
              <Button
                href={chatUrl || '#'}
                onClick={handleChatClick}
                isExternal={!!chatUrl}
                variant="gold"
                size="lg"
                className="w-full py-4 text-base font-bold shadow-xl shadow-[#D6A74E]/30 flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5 text-[#081827]" />
                <span>Enviar Mensaje Privado Ahora</span>
                <ArrowRight className="w-5 h-5 text-[#081827]" />
              </Button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Al hacer clic se abrirá una conversación directa en WhatsApp con el número {siteConfig.sponsor.phone}.
              </p>
            </div>

            {/* What you will receive inside */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A74E] block">
                Lo que recibirás en tu atención personalizada:
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
                <Lock className="w-3.5 h-3.5 text-[#D6A74E]" />
                <span>Canal directo y confidencial</span>
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
