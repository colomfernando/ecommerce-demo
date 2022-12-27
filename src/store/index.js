import { configureStore } from '@reduxjs/toolkit';
import minicart from './minicart';
import order from './order';
import search from './search';

export const store = configureStore({
  reducer: { minicart, order, search },
});
