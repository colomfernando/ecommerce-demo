import { createSlice } from '@reduxjs/toolkit';
import { openMinicart, closeMinicart } from './actions';

const initialState = {
  isOpen: false,
};
const miniCartSlice = createSlice({
  name: 'minicart',
  initialState,
  reducers: {
    openMinicartAction: openMinicart,
    closeMinicartAction: closeMinicart,
  },
});

export const { openMinicartAction, closeMinicartAction } =
  miniCartSlice.actions;

export default miniCartSlice.reducer;
