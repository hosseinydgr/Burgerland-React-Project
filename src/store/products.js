import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: [],
  reducers: {
    setup(_, action) {
      return action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
