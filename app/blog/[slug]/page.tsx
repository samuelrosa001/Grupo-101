import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogService } from '@/lib/services/BlogService';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { FinalCtaSection } from '@/features/cta/components/FinalCtaSection';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await BlogService.getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await BlogService.getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-32 pb-16">
      <Container className="max-w-4xl">
        <div className="mb-8">
          <Button href="/blog" variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Blog</span>
          </Button>
        </div>

        <article className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#D6A74E]">
              <span className="px-3 py-1 rounded-full bg-[#0E2239] border border-[#D6A74E]/30 font-semibold uppercase">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#D6A74E]" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-[#D6A74E]" />
                {post.publishedAt}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10 text-sm text-slate-300">
              <div className="w-10 h-10 rounded-full bg-[#0E2239] border border-[#D6A74E]/40 flex items-center justify-center text-[#F3E0AA]">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-slate-400">{post.author.role}</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E2239]/60 border border-white/10 leading-relaxed text-slate-200 text-base space-y-4">
            <p className="text-lg font-medium text-[#F3E0AA] italic">
              "{post.excerpt}"
            </p>
            <p>{post.content}</p>
            <p>
              El programa de acompañamiento de 90 Días desarrollado por Eduardo Cruz Alcántara te permite implementar estas mismas metodologías desde la primera semana con el soporte total de nuestro equipo.
            </p>
          </div>
        </article>
      </Container>
      <FinalCtaSection />
    </div>
  );
}
