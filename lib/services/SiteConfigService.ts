import { siteConfig, SiteConfig } from '@/config/site';

export class SiteConfigService {
  public static async getConfig(): Promise<SiteConfig> {
    return Promise.resolve(siteConfig);
  }
}
