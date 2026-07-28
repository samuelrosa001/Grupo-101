'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Diamond, Laptop, PenTool, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none aspect-[4/4.5] flex items-center justify-center p-4">
      {/* Outer Glowing Radial Aura */}
      <div className="absolute inset-0 bg-radial from-[#D6A74E]/20 via-[#0E2239]/40 to-transparent rounded-full blur-3xl" />

      {/* Main Glass Frame Inspired by Reference Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full h-full rounded-3xl bg-gradient-to-b from-[#0E2239]/90 to-[#081827]/95 border border-[#D6A74E]/30 p-6 md:p-8 shadow-2xl shadow-[#081827] flex flex-col justify-between overflow-hidden backdrop-blur-2xl"
      >
        {/* Top Metallic Header Panel */}
        <div className="relative z-10 border-b border-[#D6A74E]/20 pb-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Sparkles className="w-4 h-4 text-[#D6A74E]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#F3E0AA]">
              Programa de Acompañamiento
            </span>
          </motion.div>
          
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide leading-tight uppercase">
            Desarrollo de <br />
            <span className="text-gold-gradient font-serif font-extrabold text-3xl sm:text-4xl">
              DIAMANTES
            </span>
            <br />
            <span className="text-white text-xl sm:text-2xl">EN 90 DÍAS</span>
          </h3>

          {/* Floating 3D Gold Diamond Icon */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-2 right-4 w-12 h-12 rounded-xl bg-gradient-to-tr from-[#D6A74E] via-[#F3E0AA] to-[#9B7023] p-0.5 shadow-lg shadow-[#D6A74E]/40"
          >
            <div className="w-full h-full bg-[#0E2239] rounded-[10px] flex items-center justify-center">
              <Diamond className="w-6 h-6 text-[#F3E0AA]" />
            </div>
          </motion.div>
        </div>

        {/* Center Graphic: Executive Team Visual & Growth Chart */}
        <div className="relative z-10 my-4 flex-1 flex flex-col justify-center gap-4">
          {/* Executive Pair Representation Banner */}
          <div className="relative rounded-2xl bg-gradient-to-r from-[#081827] via-[#122842] to-[#0E2239] p-5 border border-white/10 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6A74E]/10 rounded-full blur-2xl group-hover:bg-[#D6A74E]/20 transition-all duration-500" />
            
            <div className="flex items-center justify-between gap-4">
              {/* Executive Man Icon & Desk representation */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#0E2239] border border-[#D6A74E]/40 flex items-center justify-center text-[#F3E0AA]">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Estrategia & Plan</h4>
                  <p className="text-xs text-slate-400">Planificación táctica diario</p>
                </div>
              </div>

              {/* Executive Woman Icon & Laptop representation */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#0E2239] border border-[#D6A74E]/40 flex items-center justify-center text-[#F3E0AA]">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Negocio Digital</h4>
                  <p className="text-xs text-slate-400">Herramientas en vivo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upward Growth Bars Graph Inspired by Image */}
          <div className="rounded-2xl bg-[#081827]/90 p-4 border border-[#D6A74E]/20 flex items-end justify-between gap-3 h-32 relative">
            <div className="absolute top-3 left-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#D6A74E]" />
              <span className="text-xs font-semibold text-slate-300">Crecimiento Progresivo</span>
            </div>

            {/* Bars */}
            <div className="flex-1 bg-[#0E2239] rounded-lg h-[30%] flex items-center justify-center text-[10px] text-slate-400 font-mono">Día 1</div>
            <div className="flex-1 bg-[#0E2239] rounded-lg h-[45%] flex items-center justify-center text-[10px] text-slate-400 font-mono">Día 30</div>
            <div className="flex-1 bg-gradient-to-t from-[#9B7023] to-[#D6A74E] rounded-lg h-[70%] flex items-center justify-center text-[10px] text-[#081827] font-bold font-mono">Día 60</div>
            <div className="flex-1 bg-gradient-to-t from-[#D6A74E] to-[#F3E0AA] rounded-lg h-[95%] shadow-lg shadow-[#D6A74E]/30 flex items-center justify-center text-[10px] text-[#081827] font-bold font-mono">Día 90</div>
          </div>
        </div>

        {/* Bottom Trust Badge Footer */}
        <div className="relative z-10 pt-4 border-t border-[#D6A74E]/20 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D6A74E]" />
            <span>Sistema Validado</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D6A74E]" />
            <span>Respaldo Oriflame</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
