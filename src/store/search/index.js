const { createSlice } = require('@reduxjs/toolkit');
import { setInitialFilters, setResults, setIsLoading } from './actions';

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
  },
});

export const { setInitialFiltersAction, setResultsAction, setIsLoadingAction } =
  searchSlice.actions;
export default searchSlice.reducer;
