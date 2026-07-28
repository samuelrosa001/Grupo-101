import navData from '@/content/navigation.json';
import { NavItem } from '@/types/services';

export class NavigationService {
  public static async getNavigation(): Promise<NavItem[]> {
    return Promise.resolve(navData as NavItem[]);
  }
}
