import { KeyData } from 'enums';

export type MaterialConstructionType<T> = {
  type: T;
  name: string;
  material?: KeyData.Plastic | KeyData.Metal;
  unit: string;
  width?: number;
  price: number;
};
