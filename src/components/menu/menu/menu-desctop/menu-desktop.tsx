import React, { FC } from 'react';

import { Center, Tabs } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import { BadgeElement } from '../../../badge-element/badge-element';
import { MenuDataType } from '../../types/menu-data-type';
import { changeDefaultItemMenu } from '../../utils/changeDefaultItemMenu';

export const MenuDesktop: FC<MenuDataType> = ({ dataMenu, counter, menuItem }) => {
  const defaultItem = changeDefaultItemMenu(dataMenu, menuItem);

  return (
    <Center maw={400} mx="auto">
      <Tabs value={defaultItem}>
        <Tabs.List>
          {dataMenu.map(({ icon, title, navigateTo, isBadge }) => {
            const item = (
              <Tabs.Tab key={title} value={title} icon={icon}>
                <NavLink to={navigateTo}>{title}</NavLink>
              </Tabs.Tab>
            );

            return isBadge ? (
              <BadgeElement key={title} counter={counter}>
                {item}
              </BadgeElement>
            ) : (
              item
            );
          })}
        </Tabs.List>
      </Tabs>
    </Center>
  );
};
