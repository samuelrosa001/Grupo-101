import footerData from '@/content/footer.json';
import { FooterSection } from '@/types/services';

export interface FooterData {
  brand: {
    title: string;
    sponsor: string;
    description: string;
  };
  sections: FooterSection[];
}

export class FooterService {
  public static async getFooterData(): Promise<FooterData> {
    return Promise.resolve(footerData as FooterData);
  }
}
