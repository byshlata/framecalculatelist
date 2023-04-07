import { describe, expect, test } from 'vitest';

import { generateKey } from 'utils/generate-key';

describe('key creat', () => {
  test('key should be created', () => {
    expect(generateKey(1)).not.toEqual(generateKey(2));
  });
});
