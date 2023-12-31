import "./App.css";
import React from "react";
import OrderPage from "./components/order/OrderPage";
import UserPage from "./components/user/UserPage";
import { useSelector } from "react-redux";
import AuthPage from "./components/auth/AuthPage";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/order" /> },
  { path: "/order", element: <OrderPage /> },
  { path: "/user", element: <UserPage /> },
  { path: "/auth", element: <AuthPage /> },
]);

function App() {
  // const currentPage = useSelector((state) => state.page);
  // let content;
  // switch (currentPage) {
  //   case 1:
  //     content = <OrderPage />;
  //     break;
  //   case 2:
  //     content = <UserPage />;
  //     break;
  //   case 3:
  //     content = <AuthPage />;
  //     break;
  //   default:
  //     content = "Something Went Wrong..!";
  // }
  // return <>{content}</>;

  return <RouterProvider router={router} />;
}

export default App;

const broadcast = new BroadcastChannel("channel-1");
broadcast.onmessage = (event) => {
  if (event.data && event.data.type === "update") {
    //process message...
    console.log("service worker, message received...");
    if (window.confirm("به روزسانی موجود است."))
      broadcast.postMessage({ type: "reload" });
    // window.location.reload();
  }
};
