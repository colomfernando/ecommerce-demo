const { createSlice } = require('@reduxjs/toolkit');
import {
  setFilters,
  setResults,
  setIsLoading,
  setResetFilters,
} from './actions';

const initialState = {
  isLoading: true,
  filters: {},
  results: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setFiltersAction: setFilters,
    setResultsAction: setResults,
    setIsLoadingAction: setIsLoading,
    setResetFiltersAction: setResetFilters,
  },
});

export const {
  setFiltersAction,
  setResultsAction,
  setIsLoadingAction,
  setResetFiltersAction,
} = searchSlice.actions;
export default searchSlice.reducer;
