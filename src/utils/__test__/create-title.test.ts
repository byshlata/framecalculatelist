import { describe, expect, test } from 'vitest';

import { createTitle } from '../create-title';

describe('title create', () => {
  const defaultFirst = 'Hello';
  const first = [['world', '!']];
  const second = [
    ['world', '!'],
    ['world', '!'],
  ];
  const third = [
    ['world', ''],
    ['world', '!'],
  ];
  const fourth = [[], []];

  test('title should be create', () => {
    expect(createTitle(defaultFirst, first)).toEqual('Hello world !');
    expect(createTitle(defaultFirst, second)).toEqual('Hello world ! world !');
    expect(createTitle(defaultFirst, third)).toEqual('Hello world !');
    expect(createTitle(defaultFirst, fourth)).toEqual('Hello ');
    expect(createTitle('', fourth)).toEqual(' ');
    expect(createTitle('', first)).toEqual(' world !');
  });
});
