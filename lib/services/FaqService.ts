import faqData from '@/content/faq.json';
import { FaqItem } from '@/types/services';

export class FaqService {
  public static async getFaqs(): Promise<FaqItem[]> {
    return Promise.resolve(faqData as FaqItem[]);
  }
}
