import resourcesData from '@/content/resources.json';
import { ResourceItem } from '@/types/services';

export class ResourcesService {
  public static async getResources(): Promise<ResourceItem[]> {
    return Promise.resolve(resourcesData as ResourceItem[]);
  }
}
