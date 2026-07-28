import deliverablesData from '@/content/deliverables.json';
import { DeliverableItem } from '@/types/services';

export class DeliverablesService {
  public static async getDeliverables(): Promise<DeliverableItem[]> {
    return Promise.resolve(deliverablesData as DeliverableItem[]);
  }
}
