import React from 'react';
import { Metadata } from 'next';
import { BlogService } from '@/lib/services/BlogService';
import { BlogPreviewSection } from '@/features/blog/components/BlogPreviewSection';
import { FinalCtaSection } from '@/features/cta/components/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Blog & Educación en Negocios',
  description: 'Estrategias de marketing digital, liderazgo y desarrollo personal para emprendedores.',
};

export default async function BlogPage() {
  const posts = await BlogService.getPosts();

  return (
    <div className="pt-32">
      <BlogPreviewSection posts={posts} />
      <FinalCtaSection />
    </div>
  );
}
