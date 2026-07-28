'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, MessageSquare, BookOpen, Share2, Award, CheckCircle2 } from 'lucide-react';
import { StepItem } from '@/types/services';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

const STEP_ICONS: Record<string, React.FC<{ className?: string }>> = {
  UserPlus,
  MessageSquare,
  BookOpen,
  Share2,
  Award,
};

interface StepsTimelineSectionProps {
  steps: StepItem[];
}

export const StepsTimelineSection: React.FC<StepsTimelineSectionProps> = ({ steps }) => {
  return (
    <section id="como-funciona" className="py-24 bg-[#0E2239]/50 relative overflow-hidden">
      {/* Background Vertical Light Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D6A74E]/30 to-transparent hidden lg:block -translate-x-1/2 pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge="Ruta de Aceleración"
          title="¿Cómo funciona el Plan de"
          highlight="90 Días?"
          subtitle="Un proceso paso a paso transparente y estructurado para acompañarte desde tu inscripción hasta el crecimiento de tu equipo."
        />

        <div className="space-y-12 lg:space-y-16 max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const IconComponent = STEP_ICONS[step.icon] || CheckCircle2;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Box */}
                <div className="flex-1 w-full">
                  <div className="p-8 rounded-2xl bg-[#081827] border border-white/10 hover:border-[#D6A74E]/40 transition-all duration-300 shadow-xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-serif font-extrabold text-gold-gradient">
                        Paso {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#0E2239] border border-[#D6A74E]/30 flex items-center justify-center text-[#F3E0AA]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-white">
                      {step.title}
                    </h3>

                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#0E2239]/80 border border-[#D6A74E]/15 text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D6A74E] shrink-0 mt-0.5" />
                      <span>{step.detail}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Center Badge */}
                <div className="shrink-0 hidden lg:flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#081827] border-2 border-[#D6A74E] text-[#F3E0AA] font-serif font-bold flex items-center justify-center text-lg shadow-lg shadow-[#D6A74E]/20">
                    {step.number}
                  </div>
                </div>

                {/* Counterpart Spacer for Alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
