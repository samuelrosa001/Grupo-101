'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', glow = false }) => {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`relative rounded-2xl p-6 md:p-8 bg-[#0E2239]/80 backdrop-blur-xl border border-white/10 transition-all duration-300 ${
        glow ? 'border-[#D6A74E]/40 shadow-xl shadow-[#D6A74E]/10' : 'hover:border-[#D6A74E]/30 hover:shadow-xl hover:shadow-[#081827]'
      } ${className}`}
    >
      {/* Subtle Top Gold Highlight */}
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#D6A74E]/40 to-transparent opacity-60 pointer-events-none" />
      {children}
    </motion.div>
  );
};
