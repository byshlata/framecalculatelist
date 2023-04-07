import { useSelector } from 'react-redux';

import { selectorFixes, selectorFixInformation } from '../store';
import { calculateSimplePrice, pickFix } from '../utils';

import { Constant } from 'enums';

type ReturnType = {
  name: string;
  unit: string;
  counter: number;
  sum: number;
};
export const useFix = (
  materialList?: string,
  width?: number,
  length?: number,
): Partial<ReturnType> => {
  const fixInformation = useSelector(selectorFixInformation);
  const fixes = useSelector(selectorFixes);
  const fix = pickFix(materialList, fixes);
  const fixCounter =
    width &&
    length &&
    fix?.value &&
    Math.ceil((width * length) / Constant.MillimetersInMeter ** 2) * fix.value;

  return {
    name: fixInformation?.name,
    unit: fixInformation?.unit,
    counter: fixCounter,
    sum: calculateSimplePrice(fixInformation?.price, fixCounter),
  };
};
