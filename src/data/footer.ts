export interface FooterColumn {
  title: string;
  links: string[];
}

export const INSTALL_COMMAND = 'curl -sSf https://nexus.sh | sh';
export const VERSION = 'v2.4.0';
export const BUILD = 'BUILD 2026.05';

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: 'PRODUCT', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
  { title: 'RESOURCES', links: ['Docs', 'API', 'Examples', 'Blog'] },
  { title: 'COMPANY', links: ['About', 'Careers', 'Contact', 'Press'] },
];
