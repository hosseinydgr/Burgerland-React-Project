import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: { isIn: false },
  reducers: {
    login(state) {
      state.isIn = true;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
