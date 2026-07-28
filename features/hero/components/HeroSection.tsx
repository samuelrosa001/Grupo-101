'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { HeroData } from '@/types/services';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GoldParticles } from '@/components/ui/GoldParticles';
import { HeroIllustration } from '@/components/ui/HeroIllustration';

interface HeroSectionProps {
  data: HeroData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#081827] via-[#0E2239] to-[#081827]">
      {/* Golden Dust Subtle Canvas Particles */}
      <GoldParticles />

      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D6A74E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0E2239]/80 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-block">
              <Badge>{data.badge}</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1]">
              {data.title}{' '}
              <span className="text-gold-gradient font-serif font-extrabold block sm:inline">
                {data.highlightedTitle}
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              {data.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href={data.primaryCta.url}
                isExternal
                variant="gold"
                size="lg"
                className="group"
              >
                <UserCheck className="w-5 h-5" />
                <span>{data.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                href={data.secondaryCta.url}
                isExternal
                variant="navy"
                size="lg"
              >
                <MessageSquare className="w-5 h-5 text-[#D6A74E]" />
                <span>{data.secondaryCta.label}</span>
              </Button>
            </div>

            {/* Sponsor & Trust Badge */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D6A74E]" />
                <span>Patrocinador: <strong className="text-white">Eduardo Cruz Alcántara</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Comunidad Activa Oriflame</span>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {data.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#0E2239]/60 border border-white/10 text-left backdrop-blur-md"
                >
                  <span className="text-xl font-bold font-serif text-[#F3E0AA] block">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
