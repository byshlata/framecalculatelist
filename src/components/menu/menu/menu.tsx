import React, { FC } from 'react';

import { useMediaQuery } from '@mantine/hooks';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { dataMenu } from '../data/menu-data';

import { MenuBurger } from './menu-burger/menu-burger';
import { MenuDesktop } from './menu-desctop/menu-desktop';

import { selectorOrderCounter } from 'store';

export const Menu: FC = () => {
  const matches = useMediaQuery('(min-width: 720px)');
  const { pathname } = useLocation();
  const counter = useSelector(selectorOrderCounter);

  return matches ? (
    <MenuDesktop counter={counter} menuItem={pathname} dataMenu={dataMenu} />
  ) : (
    <MenuBurger counter={counter} menuItem={pathname} dataMenu={dataMenu} />
  );
};
