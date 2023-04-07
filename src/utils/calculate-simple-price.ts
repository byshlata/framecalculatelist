export const calculateSimplePrice = (valuePrice?: number, value?: number): number =>
  value && valuePrice && value === +value && valuePrice === +valuePrice
    ? value * valuePrice
    : 0;
