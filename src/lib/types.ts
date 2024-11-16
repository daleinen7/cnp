import type { SanityDocument } from '@sanity/client';

export interface NavItem {
  name: string;
  href: string;
  color: string;
}

export interface NavData extends SanityDocument {
  title: string;
  navItems: NavItem[];
}
