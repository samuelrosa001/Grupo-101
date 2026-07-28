'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  Smartphone,
  Wrench,
  ShieldCheck,
  Clock,
  TrendingUp,
  Globe,
} from 'lucide-react';
import { BenefitItem } from '@/types/services';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  GraduationCap,
  Users,
  Smartphone,
  Wrench,
  ShieldCheck,
  Clock,
  TrendingUp,
  Globe,
};

interface BenefitsSectionProps {
  benefits: BenefitItem[];
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <section id="por-que-unirte" className="py-24 bg-[#081827] relative">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#D6A74E]/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionTitle
          badge="Valor Exclusivo"
          title="¿Por qué desarrollar tu proyecto con"
          highlight="Nosotros?"
          subtitle="Diseñamos un ecosistema moderno para acompañarte desde tus primeros pasos hasta la consolidación de tu equipo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0E2239] border border-[#D6A74E]/30 flex items-center justify-center text-[#F3E0AA] group-hover:scale-110 group-hover:border-[#D6A74E] transition-all">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      {item.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#081827] text-[#D6A74E] border border-[#D6A74E]/20">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-xl text-white mb-2 group-hover:text-[#F3E0AA] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
