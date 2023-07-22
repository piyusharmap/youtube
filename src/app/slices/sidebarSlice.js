import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState: {
    visible: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.visible = !state.visible;
    },
    closeSidebar: (state) => {
      state.visible = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
