import heroData from '@/content/hero.json';
import { HeroData } from '@/types/services';

export class HeroService {
  public static async getHeroData(): Promise<HeroData> {
    // In the future, this method can fetch from Firebase Firestore, Supabase, Strapi or Sanity CMS
    return Promise.resolve(heroData as HeroData);
  }
}
