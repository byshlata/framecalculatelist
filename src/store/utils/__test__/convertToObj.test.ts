import { describe, expect, test } from 'vitest';

import { convertToObj } from '../convertToObj';

describe('convert to obj', () => {
  const first = [
    ['width', 1],
    ['step', 1],
    ['max', 1],
    ['min', 1],
    ['num', 1],
  ];
  const result = { width: 1, step: 1, max: 1, min: 1, num: 1 };

  test('date should be converted to obj', () => {
    expect(convertToObj(first)).toEqual(result);
    expect(convertToObj([])).toEqual({});
  });
});
