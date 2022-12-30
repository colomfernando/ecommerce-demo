export const setInitialFilters = (state, action) => ({
  ...state,
  filters: action.payload,
});

export const setResults = (state, action) => ({
  ...state,
  results: action.payload,
});

export const setIsLoading = (state, action) => ({
  ...state,
  isLoading: action.payload,
});

export const setResetFilters = () => ({
  isLoading: false,
  filters: [],
  results: [],
});
