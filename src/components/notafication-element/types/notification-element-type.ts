import { ReactNode } from 'react';

export type NotificationElementType = {
  text: string | string[];
  title: string;
  children: ReactNode;
};
