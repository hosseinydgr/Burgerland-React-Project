import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pageSlice",
  initialState: 1,
  reducers: {
    changePage(_, action) {
      return action.payload;
    },
  },
});

export const pageReducer = pageSlice.reducer;
export const pageActions = pageSlice.actions;
