import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: [false, "", 0, 0],
  reducers: {
    open(_, action) {
      return [
        true,
        action.payload.id,
        action.payload.count,
        action.payload.count,
      ];
    },
  },
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
