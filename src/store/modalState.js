import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: [false, "", 0, 0],
  reducers: {
    open(_, action) {
      return [
        true,
        action.payload.id,
        action.payload.count || 0,
        action.payload.count || 0,
      ];
    },

    close() {
      return [false, "", 0, 0];
    },
    add(state) {
      state[2]++;
    },
    remove(state) {
      if (state[2] > 0) state[2]--;
    },
  },
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
