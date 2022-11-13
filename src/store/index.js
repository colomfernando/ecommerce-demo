import { configureStore } from '@reduxjs/toolkit';
import minicart from './minicart';
import order from './order';

export const store = configureStore({
  reducer: { minicart, order },
});
