import { describe, expect, test } from 'vitest';

import { calculateSum } from '../calculate-sum';

describe('sum calculate', () => {
  const first = {
    name: '',
    unit: '',
    counter: '',
    sum: '10',
  };

  const second = {
    name: '',
    unit: '',
    counter: '',
    sum: 5,
  };

  const third = {
    name: '',
    unit: '',
    counter: '',
    sum: '',
  };

  const fourth = {
    name: '',
    unit: '',
    counter: '',
    sum: NaN,
  };

  const fifth = {
    name: '',
    unit: '',
    counter: '',
    sum: undefined,
  };
  const sixth = {
    name: '',
    unit: '',
    counter: '',
  };

  test('sum should be calculate', () => {
    expect(calculateSum([first, second])).toEqual(15);
    expect(calculateSum([first, third])).toEqual(10);
    expect(calculateSum([first, fourth])).toEqual(10);
    expect(calculateSum([first, fifth])).toEqual(10);
    expect(calculateSum([fifth, fifth])).toEqual(0);
    expect(calculateSum([first, sixth])).toEqual(10);
  });
});
