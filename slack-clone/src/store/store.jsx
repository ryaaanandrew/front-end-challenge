import { configureStore } from "@reduxjs/toolkit";
import chatSliceReducer from "../pages/chat/chat-redux-slice";

export default configureStore({
  reducer: {
    chat: chatSliceReducer,
  },
});
