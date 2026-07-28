'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle2, MessageSquare, Mail, User, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un correo electrónico válido'),
  phone: z.string().min(8, 'Ingresa un teléfono válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simular envío a Firebase Cloud Functions / API REST
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="pt-32 pb-24">
      <Container className="max-w-4xl">
        <SectionTitle
          badge="Contacto Directo"
          title="¿Tienes alguna duda sobre el"
          highlight="Programa?"
          subtitle="Déjanos un mensaje o contáctanos directamente vía WhatsApp con el patrocinador Eduardo Cruz Alcántara."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Info Card */}
          <div className="md:col-span-5 p-8 rounded-2xl bg-[#0E2239] border border-[#D6A74E]/30 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-2xl text-white">
                Estamos para ayudarte
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Recibirás orientación directa para resolver cualquier inquietud antes o después de tu registro oficial.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <User className="w-4 h-4 text-[#D6A74E]" />
                  <span>Eduardo Cruz Alcántara</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-[#D6A74E]" />
                  <span>contacto@desarrollodediamantes90dias.com</span>
                </div>
              </div>
            </div>

            <Button
              href={siteConfig.sponsor.whatsappUrl}
              isExternal
              variant="gold"
              size="md"
              className="w-full"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Escribir por WhatsApp</span>
            </Button>
          </div>

          {/* Form */}
          <div className="md:col-span-7 p-8 rounded-2xl bg-[#081827] border border-white/10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-white">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto">
                  Gracias por tu interés. Nos pondremos en contacto contigo a la brevedad.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nombre Completo
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Ej. Maria Lopez"
                    className="w-full px-4 py-3 rounded-xl bg-[#0E2239] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#D6A74E]"
                  />
                  {errors.name && (
                    <p className="text-rose-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Correo Electrónico
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0E2239] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#D6A74E]"
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="+52 55 1234 5678"
                    className="w-full px-4 py-3 rounded-xl bg-[#0E2239] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#D6A74E]"
                  />
                  {errors.phone && (
                    <p className="text-rose-400 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Mensaje o Consulta
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="¿En qué te podemos ayudar?"
                    className="w-full px-4 py-3 rounded-xl bg-[#0E2239] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#D6A74E]"
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="gold"
                  size="md"
                  className="w-full"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
