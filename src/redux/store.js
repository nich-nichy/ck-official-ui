// store.js
import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./slices/authenticationSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
