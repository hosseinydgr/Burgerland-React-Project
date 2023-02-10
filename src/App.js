import "./App.css";
import React from "react";
import OrderPage from "./components/order/OrderPage";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <OrderPage />
      </Provider>
    </>
  );
}

export default App;
