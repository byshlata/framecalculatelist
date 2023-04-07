import { FixType, UndefinedType } from '../types';

export const pickFix = (materialList?: string, fix?: FixType[]): UndefinedType<FixType> =>
  fix?.find(({ key }) => key === materialList);
