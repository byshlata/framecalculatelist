import React, { FC, useState } from 'react';

import { Burger, Menu } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import { BadgeElement } from '../../../badge-element/badge-element';
import { MenuDataType } from '../../types/menu-data-type';

export const MenuBurger: FC<MenuDataType> = ({ dataMenu, counter }) => {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      shadow="md"
      width={200}
      opened={opened}
      onChange={setOpened}
      transitionProps={{ transition: 'rotate-right', duration: 150 }}
    >
      <Menu.Target>
        <Burger opened={opened} />
      </Menu.Target>

      <Menu.Dropdown>
        {dataMenu.map(({ title, navigateTo, icon, isBadge }) => {
          const item = (
            <Menu.Item key={title} icon={icon}>
              <NavLink to={navigateTo}>{title}</NavLink>
            </Menu.Item>
          );

          return isBadge ? (
            <BadgeElement key={title} counter={counter}>
              {item}
            </BadgeElement>
          ) : (
            item
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};
