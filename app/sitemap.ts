import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { BlogService } from '@/lib/services/BlogService';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await BlogService.getPosts();

  const blogRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const routes = [
    '',
    '/como-funciona',
    '/capacitaciones',
    '/recursos',
    '/blog',
    '/preguntas-frecuentes',
    '/contacto',
    '/registro',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes, ...blogRoutes];
}
