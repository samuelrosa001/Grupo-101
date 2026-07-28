import benefitsData from '@/content/benefits.json';
import { BenefitItem } from '@/types/services';

export class BenefitsService {
  public static async getBenefits(): Promise<BenefitItem[]> {
    return Promise.resolve(benefitsData as BenefitItem[]);
  }
}
