import { MenuType, UndefinedType } from 'types';

export const changeDefaultItemMenu = (
  dataMenu: MenuType[],
  url?: string,
): UndefinedType<string> => dataMenu.find(({ navigateTo }) => navigateTo === url)?.title;
