'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, UserCheck, Shield } from 'lucide-react';
import { NavItem } from '@/types/services';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

interface NavbarProps {
  navItems: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D6A74E] via-[#F3E0AA] to-[#9B7023] p-0.5 shadow-md group-hover:shadow-lg group-hover:shadow-[#D6A74E]/30 transition-all">
            <div className="w-full h-full bg-[#081827] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#F3E0AA]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-white text-lg tracking-tight leading-none group-hover:text-[#F3E0AA] transition-colors">
              Diamantes 90 Días
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">
              Eduardo Cruz Alcántara
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0E2239]/70 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-colors ${
                  isActive
                    ? 'text-[#F3E0AA]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#D6A74E]/20 border border-[#D6A74E]/40 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            href={siteConfig.sponsor.registerUrl}
            isExternal
            variant="gold"
            size="sm"
          >
            <UserCheck className="w-4 h-4" />
            <span>Registrarse</span>
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-[#0E2239] border border-white/10 text-slate-200 hover:text-white"
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#081827] border-b border-[#D6A74E]/20 px-4 py-6"
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                      isActive
                        ? 'bg-[#0E2239] text-[#F3E0AA] border border-[#D6A74E]/30'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.requiresAuth && (
                      <Shield className="w-3.5 h-3.5 text-[#D6A74E]" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3 mt-2">
                <Button
                  href={siteConfig.sponsor.registerUrl}
                  isExternal
                  variant="gold"
                  size="md"
                  className="w-full"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Quiero Comenzar Gratis</span>
                </Button>
                <Button
                  href={siteConfig.sponsor.whatsappUrl}
                  isExternal
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  <span>Entrar al Grupo VIP</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
