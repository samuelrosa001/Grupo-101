import stepsData from '@/content/steps.json';
import { StepItem } from '@/types/services';

export class StepsService {
  public static async getSteps(): Promise<StepItem[]> {
    return Promise.resolve(stepsData as StepItem[]);
  }
}
