// slices/authenticationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: true,
  },
  reducers: {
    setIsLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLogin } = authenticationSlice.actions;
export default authenticationSlice.reducer;
