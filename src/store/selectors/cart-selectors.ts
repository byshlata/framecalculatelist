import { AppRootStore } from 'store';
import { CartType } from 'types';

export const selectorOrders = (state: AppRootStore): CartType[] => state.cart.orders;

export const selectorOrderCounter = (state: AppRootStore): number =>
  state.cart.orders.length;
