import menuDataJson from '../menu_data.json';
import { MenuCategory } from '../../domain/entities/Menu';

export class MenuRepository {
  static getMenu(): MenuCategory[] {
    return menuDataJson as MenuCategory[];
  }
}
