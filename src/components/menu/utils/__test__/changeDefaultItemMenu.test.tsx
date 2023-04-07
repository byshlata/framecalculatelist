import { describe, expect, test } from 'vitest';

import { changeDefaultItemMenu } from '../changeDefaultItemMenu';

describe('title create', () => {
  const first = {
    title: 'first',
    icon: <div />,
    navigateTo: '/first',
  };

  const second = {
    title: 'second',
    icon: <div />,
    navigateTo: '/second',
  };

  test('title should be create', () => {
    expect(changeDefaultItemMenu([first, second])).toBeUndefined();
    expect(changeDefaultItemMenu([first, second], '')).toBeUndefined();
    expect(changeDefaultItemMenu([first, second], 'first')).toBeUndefined();
    expect(changeDefaultItemMenu([first, second], '/first')).toEqual('first');
  });
});
