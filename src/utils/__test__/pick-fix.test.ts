import { describe, expect, test } from 'vitest';

import { FrameData, KeyData } from '../../enums';

import { FixType } from 'types';
import { pickFix } from 'utils';

describe('find fix', () => {
  const first: FixType = {
    type: FrameData.Fix,
    key: KeyData.Metal,
    name: '',
    value: 1,
  };

  const second: FixType = {
    type: FrameData.Fix,
    key: KeyData.Plastic,
    name: '',
    value: 1,
  };

  test('fix should be', () => {
    expect(pickFix()).toEqual(undefined);
    expect(pickFix('plastic')).toEqual(undefined);
    expect(pickFix(KeyData.Metal)).toEqual(undefined);
    expect(pickFix(KeyData.Metal, [first, second])).toEqual(first);
    expect(pickFix(KeyData.Plastic, [first, second])).toEqual(second);
    expect(pickFix(KeyData.Plastic, [])).toEqual(undefined);
  });
});
