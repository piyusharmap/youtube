import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    searchbar: searchSlice,
  },
});

export default store;
