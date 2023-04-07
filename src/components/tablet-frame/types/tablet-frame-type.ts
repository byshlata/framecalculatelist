import { TabletType } from 'types';

export type TabletFrameType = {
  id?: string;
  lengthCell: number;
  widthCell: number;
  bodyTable: Partial<TabletType>[];
  totalTableSum: number;
  onClick: (id?: string) => void;
  buttonName: string;
};
