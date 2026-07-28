'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#081827] via-[#0E2239] to-[#040C14] relative overflow-hidden">
      {/* Golden Aura Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D6A74E]/15 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 md:p-16 bg-[#0E2239]/90 border border-[#D6A74E]/40 shadow-2xl shadow-[#081827] text-center backdrop-blur-2xl relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081827] border border-[#D6A74E]/30 text-xs font-semibold text-[#F3E0AA] mb-6">
            <Sparkles className="w-4 h-4 text-[#D6A74E] animate-pulse" />
            <span>Da el primer paso hoy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
            Hoy puede ser el primer paso para desarrollar tu{' '}
            <span className="text-gold-gradient font-serif font-extrabold block sm:inline">
              Nuevo Proyecto.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Únete a nuestro grupo de emprendedores y accede de inmediato al Plan de Acompañamiento de 90 Días respaldado por Eduardo Cruz Alcántara.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={siteConfig.sponsor.registerUrl}
              isExternal
              variant="gold"
              size="lg"
              className="w-full sm:w-auto"
            >
              <UserCheck className="w-5 h-5" />
              <span>Quiero comenzar gratis</span>
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
              <span>Entrar al Grupo VIP</span>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
