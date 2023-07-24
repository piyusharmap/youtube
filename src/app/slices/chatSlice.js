import { createSlice } from "@reduxjs/toolkit";

import { LIVE_CHAT_OFFSET } from "../../constant";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    chatData: [],
  },
  reducers: {
    addToChat: (state, action) => {
      state.chatData.splice(LIVE_CHAT_OFFSET, 1);
      state.chatData.unshift(action.payload);
    },
  },
});

export const { addToChat } = chatSlice.actions;
export default chatSlice.reducer;
