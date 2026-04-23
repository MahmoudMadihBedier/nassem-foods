export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  category: string;
  icon: string;
  items: MenuItem[];
  raw_text: string;
}
