import { TabletType } from './tablet-type';

export type CartType = {
  id?: string;
  lengthCell: number;
  widthCell: number;
  tablet: Partial<TabletType>[];
  totalTableSum: number;
  counterOrder?: number;
};
