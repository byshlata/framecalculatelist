import { TabletType } from 'types';

export type TabletElementType = {
  head?: TabletType;
  bodyTablet?: Partial<TabletType>[];
};
