'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Video, FolderDown, Users, Headphones, Radio, Zap } from 'lucide-react';
import { DeliverableItem } from '@/types/services';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

const DELIVERABLE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Video,
  FolderDown,
  Users,
  Headphones,
  Radio,
  Zap,
};

interface DeliverablesSectionProps {
  deliverables: DeliverableItem[];
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ deliverables }) => {
  return (
    <section id="lo-que-recibiras" className="py-24 bg-[#081827] relative">
      <Container>
        <SectionTitle
          badge="Inclusión Total"
          title="Todo lo que recibirás al"
          highlight="Unirte al Equipo"
          subtitle="Accede a un paquete completo de entrenamiento y soporte sin costos ocultos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => {
            const IconComponent = DELIVERABLE_ICONS[item.icon] || Zap;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-8 rounded-2xl bg-[#0E2239]/70 border border-white/10 hover:border-[#D6A74E]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#081827] border border-[#D6A74E]/30 flex items-center justify-center text-[#F3E0AA] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-[#D6A74E]" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D6A74E]/10 text-[#F3E0AA] border border-[#D6A74E]/30">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white mb-3 group-hover:text-[#F3E0AA] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
