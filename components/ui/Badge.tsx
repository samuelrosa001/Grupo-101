import React from 'react';
import { Sparkles } from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, icon = true, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#0E2239]/90 text-[#F3E0AA] border border-[#D6A74E]/30 shadow-lg shadow-[#D6A74E]/5 backdrop-blur-md ${className}`}
    >
      {icon && <Sparkles className="w-3.5 h-3.5 text-[#D6A74E] animate-pulse" />}
      <span>{children}</span>
    </div>
  );
};
