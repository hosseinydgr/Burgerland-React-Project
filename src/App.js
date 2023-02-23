import "./App.css";
import React from "react";
import OrderPage from "./components/order/OrderPage";
import UserPage from "./components/user/UserPage";
import { useSelector } from "react-redux";
import AuthPage from "./components/auth/AuthPage";

function App() {
  const currentPage = useSelector((state) => state.page);
  let content;
  switch (currentPage) {
    case 1:
      content = <OrderPage />;
      break;
    case 2:
      content = <UserPage />;
      break;
    case 3:
      content = <AuthPage />;
      break;
    default:
      content = "Something Went Wrong..!";
  }

  return <>{content}</>;
}

export default App;
