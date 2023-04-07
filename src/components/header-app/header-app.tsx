import React, { FC } from 'react';

import { Header } from '@mantine/core';

import { Menu } from 'components';

export const HeaderApp: FC = () => {
  return (
    <Header height={60} p="xs">
      <Menu />
    </Header>
  );
};
