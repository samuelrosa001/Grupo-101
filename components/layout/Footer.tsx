'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { FooterData } from '@/lib/services/FooterService';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';

interface FooterProps {
  footerData: FooterData;
}

export const Footer: React.FC<FooterProps> = ({ footerData }) => {
  return (
    <footer className="bg-[#040C14] border-t border-[#D6A74E]/20 text-slate-400 text-sm pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Ambient Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial from-[#D6A74E]/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D6A74E] to-[#9B7023] p-0.5">
                <div className="w-full h-full bg-[#081827] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#F3E0AA]" />
                </div>
              </div>
              <span className="font-serif font-bold text-white text-xl">
                {footerData.brand.title}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              {footerData.brand.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E2239] border border-[#D6A74E]/30 text-xs text-[#F3E0AA]">
              <ShieldCheck className="w-4 h-4 text-[#D6A74E]" />
              <span>Patrocinador Oficial: {siteConfig.sponsor.name}</span>
            </div>
          </div>

          {/* Navigation Link Columns */}
          {footerData.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-serif font-semibold text-white text-sm tracking-wider uppercase">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.isExternal ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-[#F3E0AA] text-xs transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#D6A74E]" />
                      </a>
                    ) : (
                      <Link
                        href={link.url}
                        className="text-slate-400 hover:text-white text-xs transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 space-y-6">
          <div className="p-4 rounded-xl bg-[#081827] border border-white/5 text-xs text-slate-400 leading-relaxed max-w-4xl mx-auto text-center">
            <span className="font-semibold text-slate-300">Aviso Legal e Informativo: </span>
            {siteConfig.disclaimer}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {siteConfig.legalYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-1">
              Desarrollado con <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para la comunidad de emprendedores de Oriflame.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
