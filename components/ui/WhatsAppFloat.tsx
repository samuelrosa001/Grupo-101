'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const WhatsAppFloat: React.FC = () => {
  return (
    <motion.a
      href={siteConfig.sponsor.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Unirse al grupo de WhatsApp oficial"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-medium shadow-2xl shadow-emerald-500/40 border border-emerald-300/30 group backdrop-blur-lg"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
      </span>
      <MessageCircle className="w-5 h-5 text-white fill-white/20" />
      <span className="hidden sm:inline text-xs font-semibold tracking-wide">
        Grupo de WhatsApp
      </span>
    </motion.a>
  );
};
