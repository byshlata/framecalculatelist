import { TabletType } from '../types';

export const calculateSum = (array?: Partial<TabletType>[]): number => {
  let sum = 0;

  array?.forEach((element) => {
    if (element?.sum) {
      sum += +element.sum;
    }
  });

  return sum;
};
