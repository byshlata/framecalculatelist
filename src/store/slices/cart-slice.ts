import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartType, IdType } from 'types';
import { generateKey } from 'utils';

export type InitialStateCartType = {
  orders: CartType[];
  totalSum: number;
};

export const initialStateCart: InitialStateCartType = {
  orders: [],
  totalSum: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: {
    addOrder: (state, action: PayloadAction<CartType>) => {
      const id = generateKey();

      state.orders.push({ id, ...action.payload });
    },

    deleteOrder: (state, action: PayloadAction<IdType>) => {
      const newOrders = [];

      for (let i = 0; i < state.orders.length; i += 1) {
        if (state.orders[i].id === action.payload.id) {
          state.totalSum -= state.orders[i].totalTableSum;
        } else {
          newOrders.push(state.orders[i]);
        }
      }

      state.orders = newOrders;
    },
  },
});

export const { deleteOrder, addOrder } = cartSlice.actions;
