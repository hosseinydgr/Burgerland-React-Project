import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth.js";
import { countsRedeucer } from "./counts.js";
import { modalReducer } from "./modalState.js";
import { pageReducer } from "./page.js";
import { productsReducer } from "./products.js";
import { userPageTabReducer } from "./userPageTab.js";

export const store = configureStore({
  reducer: {
    counts: countsRedeucer,
    modalState: modalReducer,
    auth: authReducer,
    userPageTab: userPageTabReducer,
    page: pageReducer,
    products: productsReducer,
  },
});
