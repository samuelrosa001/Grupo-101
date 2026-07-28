import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16 bg-[#081827]">
      <Container className="max-w-2xl text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#0E2239] border border-[#D6A74E]/40 text-[#F3E0AA] mx-auto flex items-center justify-center shadow-2xl">
          <Compass className="w-10 h-10 text-[#D6A74E] animate-spin" style={{ animationDuration: '15s' }} />
        </div>

        <span className="text-6xl font-serif font-extrabold text-gold-gradient block">
          404
        </span>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
          Página No Encontrada
        </h1>

        <p className="text-slate-300 text-base max-w-md mx-auto leading-relaxed">
          La página que buscas no existe o ha sido movida como parte de las actualizaciones de nuestra plataforma.
        </p>

        <div className="pt-4 flex justify-center">
          <Button href="/" variant="gold" size="lg">
            <Home className="w-5 h-5" />
            <span>Volver a la Página Principal</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
