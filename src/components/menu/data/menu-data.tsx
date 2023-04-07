import { Calculator, Home, ShoppingCart } from 'tabler-icons-react';

import { Path } from 'enums';
import { MenuType } from 'types';

export const dataMenu: MenuType[] = [
  {
    icon: <Home size={20} strokeWidth={2} color="black" />,
    title: 'Домой',
    navigateTo: Path.Home,
  },
  {
    icon: <Calculator size={20} strokeWidth={2} color="black" />,
    title: 'Калькулятор онлайн',
    navigateTo: Path.FrameCalculate,
  },
  {
    icon: <ShoppingCart size={20} strokeWidth={2} color="black" />,
    title: 'Корзина',
    navigateTo: Path.Cart,
    isBadge: true,
  },
];
