import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    searchResults: {},
  },
  reducers: {
    addSearchResult: (state, action) => {
      state.searchResults = { ...state.searchResults, ...action.payload };
    },
    clearSearchResult: (state) => {
      state.searchResults = [];
    },
  },
});

export const { addSearchResult, clearSearchResult } = searchSlice.actions;
export default searchSlice.reducer;
