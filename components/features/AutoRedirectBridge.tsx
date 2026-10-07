'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { GoldParticles } from '@/components/ui/GoldParticles';
import {
  MessageSquare,
  Users,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Lock,
} from 'lucide-react';

export interface AutoRedirectBridgeProps {
  variant: 'group' | 'private';
  targetUrl: string;
  delaySeconds?: number;
}

export const AutoRedirectBridge: React.FC<AutoRedirectBridgeProps> = ({
  variant,
  targetUrl,
  delaySeconds = 2,
}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(delaySeconds);
  const [progress, setProgress] = useState<number>(0);
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const redirectedRef = useRef(false);

  const doRedirect = (url: string) => {
    if (redirectedRef.current) return;
    redirectedRef.current = true;
    setIsRedirecting(true);
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  };

  useEffect(() => {
    const startTime = Date.now();
    const durationMs = delaySeconds * 1000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const left = Math.max(0, Math.ceil((durationMs - elapsed) / 1000));
      const pct = Math.min(100, Math.max(0, (elapsed / durationMs) * 100));

      setSecondsLeft(left);
      setProgress(pct);

      if (elapsed >= durationMs) {
        clearInterval(interval);
        doRedirect(targetUrl);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [targetUrl, delaySeconds]);

  const handleManualClick = () => {
    doRedirect(targetUrl);
  };

  const isGroup = variant === 'group';

  return (
    <>
      {/* HTML-Level Native Auto-Redirect Fallbacks (Executes even before React hydration) */}
      <meta httpEquiv="refresh" content={`${delaySeconds};url=${targetUrl}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var triggered = false;
              setTimeout(function() {
                if (!triggered) {
                  triggered = true;
                  window.location.href = ${JSON.stringify(targetUrl)};
                }
              }, ${delaySeconds * 1000});
            })();
          `,
        }}
      />

      <div className="relative min-h-[85vh] pt-24 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#081827] via-[#0E2239] to-[#081827]">
        {/* Background Particles and Glow */}
        <GoldParticles />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#D6A74E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10 max-w-lg text-center space-y-6 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card glow className="text-center space-y-6 bg-[#0E2239]/95 border-[#D6A74E]/40 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
              {/* Top decorative animated light line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D6A74E] to-transparent animate-pulse" />

              {/* Glowing Icon with Pulse Animation */}
              <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                {/* Outer pulsing ring */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full bg-emerald-500/20 border border-emerald-400/40"
                />
                {/* Secondary rotating gold ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-1 rounded-full border border-dashed border-[#D6A74E]/40 pointer-events-none"
                />
                {/* Core Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  {isGroup ? (
                    <Users className="w-8 h-8 drop-shadow" />
                  ) : (
                    <MessageSquare className="w-8 h-8 drop-shadow" />
                  )}
                </div>
              </div>

              {/* Badge Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>
                  {isGroup ? 'Acceso al Grupo Oficial' : 'Contacto Directo y Privado'}
                </span>
              </div>

              {/* Header Titles */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {isRedirecting || secondsLeft === 0 ? (
                    <span>¡Abriendo WhatsApp...</span>
                  ) : isGroup ? (
                    <span>
                      Conectando con la{' '}
                      <span className="text-gold-gradient">Comunidad Oficial</span>
                    </span>
                  ) : (
                    <span>
                      Conectando con{' '}
                      <span className="text-gold-gradient">Mensaje Privado</span>
                    </span>
                  )}
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                  {isGroup ? (
                    <>
                      Te estamos transfiriendo directamente al <strong className="text-white">Grupo VIP de WhatsApp</strong> de Diamantes en 90 Días con <strong className="text-white">{siteConfig.sponsor.name}</strong>.
                    </>
                  ) : (
                    <>
                      Te estamos transfiriendo directamente al chat privado de WhatsApp con <strong className="text-white">{siteConfig.sponsor.name}</strong> para tu atención personalizada.
                    </>
                  )}
                </p>
              </div>

              {/* Dynamic Countdown & Progress Bar */}
              <div className="space-y-3 py-2 bg-[#081827]/60 rounded-xl p-4 border border-white/5">
                <div className="flex justify-between items-center text-xs font-medium text-slate-300">
                  <span className="flex items-center gap-1.5 text-[#F3E0AA]">
                    <Sparkles className="w-3.5 h-3.5 text-[#D6A74E]" />
                    <span>
                      {isGroup ? 'Transferencia al Grupo Oficial' : 'Canal Directo 1 a 1'}
                    </span>
                  </span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {secondsLeft > 0 ? `En ${secondsLeft}s...` : 'Redireccionando...'}
                  </span>
                </div>

                {/* Progress bar line */}
                <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-white/10">
                  <motion.div
                    className="bg-gradient-to-r from-[#D6A74E] to-emerald-400 h-full rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'linear', duration: 0.05 }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  {isGroup ? (
                    <>
                      <span>Grupo Oficial: <strong className="text-[#F3E0AA]">Diamantes 90 Días</strong></span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Lock className="w-3 h-3" /> Acceso VIP
                      </span>
                    </>
                  ) : (
                    <>
                      <span>Número oficial: <strong className="text-[#F3E0AA]">{siteConfig.sponsor.phone}</strong></span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Lock className="w-3 h-3" /> Chat Seguro
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Direct Action Button (Fallback & Instant Entry) */}
              <div className="pt-2 space-y-2.5">
                <Button
                  href={targetUrl}
                  onClick={handleManualClick}
                  variant="gold"
                  size="lg"
                  className="w-full py-3.5 text-sm sm:text-base font-bold shadow-xl shadow-[#D6A74E]/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isGroup ? (
                    <>
                      <Users className="w-5 h-5 text-[#081827]" />
                      <span>Entrar al Grupo Oficial Ahora</span>
                      <ArrowRight className="w-5 h-5 text-[#081827]" />
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5 text-[#081827]" />
                      <span>Entrar al Chat Privado Ahora</span>
                      <ArrowRight className="w-5 h-5 text-[#081827]" />
                    </>
                  )}
                </Button>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {isGroup
                    ? '¿No se abrió WhatsApp automáticamente? Haz clic en el botón dorado para unirte de inmediato.'
                    : '¿No se abrió WhatsApp automáticamente? Haz clic en el botón dorado para ir directo a la conversación.'}
                </p>
              </div>

              {/* Sponsor Info */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#D6A74E]" />
                <span>
                  {isGroup
                    ? <>Mentor Oficial: <strong className="text-white">{siteConfig.sponsor.name}</strong> • Comunidad de Socios</>
                    : <>Mentoría Directa con <strong className="text-white">{siteConfig.sponsor.name}</strong> • Asesoría 1 a 1</>}
                </span>
              </div>
            </Card>
          </motion.div>
        </Container>
      </div>
    </>
  );
};
