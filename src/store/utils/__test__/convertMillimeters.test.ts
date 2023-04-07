import { describe, expect, test } from 'vitest';

import { convertMillimeters } from '../convertMillimeters';

describe('convert to millimeters', () => {
  const first = { width: 1, step: 1, max: 1, min: 1, num: 1 };
  const result = { width: 1000, step: 1000, max: 1000, min: 1000, num: 1 };

  test('date should be converted to millimeters', () => {
    expect(convertMillimeters(first)).toEqual(result);
    expect(convertMillimeters({})).toEqual({});
  });
});
