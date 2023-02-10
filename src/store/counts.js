import { createSlice } from "@reduxjs/toolkit";

const countsSlice = createSlice({
  name: "countsSlice",
  initialState: {},
  reducers: {
    add(state, action) {
      if (!state[action.payload]) {
        state[action.payload] = 1;
      } else {
        state[action.payload]++;
      }
    },
    remove(state, action) {
      if (state[action.payload] > 0) state[action.payload]--;
    },
    clear() {
      return {};
    },
  },
});

export const countsRedeucer = countsSlice.reducer;
export const countsActions = countsSlice.actions;
