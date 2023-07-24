import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import searchSlice from "./slices/searchSlice";
import chatSlice from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    searchbar: searchSlice,
    chat: chatSlice,
  },
});

export default store;
