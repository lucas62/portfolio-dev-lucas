export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'product', label: 'Product' },
  { id: 'features', label: 'Features' },
  { id: 'docs', label: 'Docs' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'changelog', label: 'Changelog' },
];
