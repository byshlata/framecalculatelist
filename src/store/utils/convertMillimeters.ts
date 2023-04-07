import { convertToObj } from './convertToObj';

import { Constant } from 'enums';

export const convertMillimeters = (obj: { [key: string]: any }): {} => {
  const arrayHelper = Object.entries(obj)?.map((item) => {
    if (
      item[0] === 'width' ||
      item[0] === 'step' ||
      item[0] === 'max' ||
      item[0] === 'min'
    ) {
      return [item[0], item[1] * Constant.MillimetersInMeter];
    }

    return item;
  });

  return convertToObj(arrayHelper);
};
