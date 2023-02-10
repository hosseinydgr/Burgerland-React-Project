import { configureStore } from "@reduxjs/toolkit";
import { countsRedeucer } from "./counts.js";
import { modalReducer } from "./modalState.js";

export const store = configureStore({
  reducer: { counts: countsRedeucer, modalState: modalReducer },
});
