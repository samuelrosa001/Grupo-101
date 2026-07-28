import React from 'react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function UnirsePage() {
  const whatsappUrl = siteConfig.sponsor.whatsappUrl;

  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-[#081827]">
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace("${whatsappUrl}");`,
        }}
      />

      <Container className="max-w-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#0E2239] border border-[#D6A74E]/40 text-[#F3E0AA] mx-auto flex items-center justify-center shadow-xl animate-pulse">
          <MessageSquare className="w-8 h-8 text-[#D6A74E]" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E2239] border border-[#D6A74E]/30 text-xs font-semibold text-[#F3E0AA]">
          <Sparkles className="w-3.5 h-3.5 text-[#D6A74E]" />
          <span>Redireccionando a WhatsApp...</span>
        </div>

        <h1 className="text-3xl font-serif font-bold text-white">
          Ingresando al Grupo Privado de <span className="text-gold-gradient">WhatsApp</span>
        </h1>

        <p className="text-slate-300 text-sm leading-relaxed">
          Te estamos redirigiendo automáticamente al grupo oficial de WhatsApp. Si no abre en un instante, presiona el botón inferior:
        </p>

        <div className="pt-2">
          <Button
            href={whatsappUrl}
            isExternal
            variant="gold"
            size="lg"
            className="w-full sm:w-auto"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Entrar al Grupo VIP de WhatsApp</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
