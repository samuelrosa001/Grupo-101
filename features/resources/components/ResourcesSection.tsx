'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Lock, Sparkles, FileText, Layout, Video, Calculator } from 'lucide-react';
import { ResourceItem } from '@/types/services';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface ResourcesSectionProps {
  resources: ResourceItem[];
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ resources }) => {
  return (
    <section id="recursos" className="py-24 bg-[#0E2239]/40 relative">
      <Container>
        <SectionTitle
          badge="Herramientas & Academia"
          title="Recursos Destacados y"
          highlight="Biblioteca Digital"
          subtitle="Materiales de alto valor diseñados para facilitar tu prospección y aprendizaje diario."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res, index) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-[#081827] border border-white/10 flex flex-col justify-between hover:border-[#D6A74E]/40 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#0E2239] text-[#F3E0AA] border border-[#D6A74E]/20">
                    {res.category}
                  </span>
                  {res.isUpcoming ? (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      <Lock className="w-3 h-3" /> Próximamente
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      <Sparkles className="w-3 h-3" /> Disponible
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-lg text-white mb-2 group-hover:text-[#F3E0AA] transition-colors">
                  {res.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                {res.isUpcoming ? (
                  <button
                    disabled
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0E2239] text-slate-500 text-xs font-semibold flex items-center justify-center gap-2 cursor-not-allowed border border-white/5"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>En Fase de Preparación</span>
                  </button>
                ) : (
                  <a
                    href={res.downloadUrl || '#'}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0E2239] to-[#122842] hover:from-[#D6A74E]/20 hover:to-[#D6A74E]/30 text-[#F3E0AA] border border-[#D6A74E]/30 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-[#D6A74E]" />
                    <span>Acceder a Recurso</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
