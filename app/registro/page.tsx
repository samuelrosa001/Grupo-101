import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { UserCheck, MessageSquare, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Registro Oficial Oriflame | Patrocinador Eduardo Cruz Alcántara',
  description: 'Inicia tu registro gratuito en Oriflame con el patrocinio oficial de Eduardo Cruz Alcántara y únete a la comunidad de 90 Días.',
};

export default function RegistroPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center">
      <Container className="max-w-3xl text-center space-y-8">
        <Badge>Paso 1 del Plan de 90 Días</Badge>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">
          Portal Oficial de <span className="text-gold-gradient">Registro</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Estás a un paso de completar tu inscripción gratuita en el portal oficial corporativo de Oriflame bajo el patrocinio de{' '}
          <strong className="text-white">Eduardo Cruz Alcántara</strong>.
        </p>

        <div className="p-8 rounded-3xl bg-[#0E2239] border border-[#D6A74E]/40 shadow-2xl text-left space-y-6">
          <h3 className="font-serif font-bold text-xl text-white">
            Beneficios inmediatos al registrarte:
          </h3>

          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D6A74E] shrink-0" />
              <span>Código oficial de distribuidor independiente sin costo inicial.</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D6A74E] shrink-0" />
              <span>Acceso directo al sistema de acompañamiento acelerado de 90 Días.</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D6A74E] shrink-0" />
              <span>Incorporación a nuestro grupo de entrenamiento VIP en WhatsApp.</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D6A74E] shrink-0" />
              <span>Descuentos especiales y promociones exclusivas de la marca sueca.</span>
            </li>
          </ul>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4">
            <Button
              href={siteConfig.sponsor.registerUrl}
              isExternal
              variant="gold"
              size="lg"
              className="w-full sm:w-auto flex-1"
            >
              <UserCheck className="w-5 h-5" />
              <span>Ir al Registro Oficial Oriflame</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              href={siteConfig.sponsor.whatsappUrl}
              isExternal
              variant="navy"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5 text-[#D6A74E]" />
              <span>Hablar por WhatsApp</span>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-[#D6A74E]" />
          <span>Sitio seguro y oficial respaldado por Eduardo Cruz Alcántara.</span>
        </div>
      </Container>
    </div>
  );
}
