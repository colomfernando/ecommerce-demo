const { createSlice } = require('@reduxjs/toolkit');
import {
  setInitialFilters,
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
    setInitialFiltersAction: setInitialFilters,
    setResultsAction: setResults,
    setIsLoadingAction: setIsLoading,
    setResetFiltersAction: setResetFilters,
  },
});

export const {
  setInitialFiltersAction,
  setResultsAction,
  setIsLoadingAction,
  setResetFiltersAction,
} = searchSlice.actions;
export default searchSlice.reducer;
