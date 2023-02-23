import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tabSlice",
  initialState: 1,
  reducers: {
    changeTab(_, action) {
      return action.payload;
    },
  },
});

export const userPageTabReducer = tabSlice.reducer;
export const userPageTabActions = tabSlice.actions;
