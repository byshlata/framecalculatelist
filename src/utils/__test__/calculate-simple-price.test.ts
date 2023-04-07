import { describe, test, expect } from 'vitest';

import { calculateSimplePrice } from '../calculate-simple-price';

describe('number multiplication', () => {
  const first = 1;
  const second = 5;

  test('number should be multiply', () => {
    expect(calculateSimplePrice(first, second)).toEqual(5);
    expect(calculateSimplePrice(first, NaN)).toEqual(0);
    expect(calculateSimplePrice(NaN, NaN)).toEqual(0);
    expect(calculateSimplePrice(NaN, first)).toEqual(0);
    expect(calculateSimplePrice(first, undefined)).toEqual(0);
    expect(calculateSimplePrice(undefined, undefined)).toEqual(0);
    expect(calculateSimplePrice(undefined, first)).toEqual(0);
  });
});
