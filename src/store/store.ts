import { configureStore } from '@reduxjs/toolkit';

import { appSlice } from './slices/app-slice';
import { cartSlice } from './slices/cart-slice';
import { setInitData } from './utils/set-init-data';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    cart: cartSlice.reducer,
  },
  preloadedState: {
    app: setInitData(),
  },
});

export type AppRootStore = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
