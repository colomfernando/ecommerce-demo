import { createSlice } from '@reduxjs/toolkit';
import { saveOrder } from './actions';

const initialState = {
  items: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    saveOrderAction: saveOrder,
  },
});

export const { saveOrderAction } = orderSlice.actions;
export default orderSlice.reducer;
