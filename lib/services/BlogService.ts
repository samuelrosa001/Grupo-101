import blogData from '@/content/blog.json';
import { BlogPost } from '@/types/services';

export class BlogService {
  public static async getPosts(): Promise<BlogPost[]> {
    return Promise.resolve(blogData as BlogPost[]);
  }

  public static async getPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const posts = await this.getPosts();
    return posts.find((p) => p.slug === slug);
  }
}
