import { ReactNode } from 'react';

export type MenuType = {
  title: string;
  icon: ReactNode;
  navigateTo: string;
  isBadge?: boolean;
};
