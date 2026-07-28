'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { BlogPost } from '@/types/services';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface BlogPreviewSectionProps {
  posts: BlogPost[];
}

export const BlogPreviewSection: React.FC<BlogPreviewSectionProps> = ({ posts }) => {
  return (
    <section id="blog" className="py-24 bg-[#081827] relative">
      <Container>
        <SectionTitle
          badge="Blog & Educación"
          title="Artículos para Impulsar tu"
          highlight="Conocimiento"
          subtitle="Contenido optimizado sobre marketing de atracción, liderazgo y desarrollo personal."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group h-full flex flex-col justify-between p-6 rounded-2xl bg-[#0E2239]/70 border border-white/10 hover:border-[#D6A74E]/40 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#081827] text-[#F3E0AA] border border-[#D6A74E]/20 font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D6A74E]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white mb-3 group-hover:text-[#F3E0AA] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#D6A74E]" />
                    <span className="text-white font-medium">{post.author.name}</span>
                  </div>

                  <span className="flex items-center gap-1 font-semibold text-[#F3E0AA] group-hover:translate-x-1 transition-transform">
                    Leer <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
