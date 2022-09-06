import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "counter",
  initialState: {
    channels: [
      { name: "Channel 1" },
      { name: "Channel 2" },
      { name: "Channel 3" },
      { name: "Channel 4" },
      { name: "Games" },
    ],
    users: [
      { name: "User 1" },
      { name: "User 2" },
      { name: "User 3" },
      { name: "User 4" },
      { name: "Ryan" },
    ],
  },
  reducers: {
    createChannel: (state, action) => {
      state.channels = [...state.channels, { name: action.payload }];
    },
    removeChannel: (state, action) => {
      state.channels = state.channels.filter((item, i) => i !== action.payload);
    },
  },
});

export const { createChannel, removeChannel } = chatSlice.actions;

export default chatSlice.reducer;
