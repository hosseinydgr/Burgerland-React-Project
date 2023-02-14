import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth.js";
import { countsRedeucer } from "./counts.js";
import { modalReducer } from "./modalState.js";

export const store = configureStore({
  reducer: {
    counts: countsRedeucer,
    modalState: modalReducer,
    auth: authReducer,
  },
});
