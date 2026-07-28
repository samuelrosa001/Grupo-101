'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isExternal?: boolean;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  href,
  isExternal = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D6A74E] disabled:opacity-50 cursor-pointer overflow-hidden';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm font-semibold tracking-wide',
    lg: 'px-8 py-4 text-base font-semibold tracking-wide',
  };

  const variantStyles = {
    gold: 'bg-gradient-to-r from-[#F3E0AA] via-[#D6A74E] to-[#B8852E] text-[#081827] shadow-lg shadow-[#D6A74E]/25 hover:shadow-xl hover:shadow-[#D6A74E]/40 border border-[#FFF0CA]/30',
    navy: 'bg-[#0E2239] text-white hover:bg-[#122842] border border-[#D6A74E]/30 shadow-lg shadow-[#0E2239]/50',
    outline:
      'bg-transparent text-[#F3E0AA] border border-[#D6A74E]/40 hover:bg-[#D6A74E]/10 hover:border-[#D6A74E]',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={combinedClass}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={combinedClass}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
