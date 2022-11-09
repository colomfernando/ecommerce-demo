import { configureStore } from '@reduxjs/toolkit';
import minicart from './minicart';

export const store = configureStore({
  reducer: { minicart },
});
