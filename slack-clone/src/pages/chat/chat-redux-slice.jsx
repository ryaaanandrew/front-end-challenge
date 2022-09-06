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
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = chatSlice.actions;

export default chatSlice.reducer;
