import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../header/Header.js";
import UserAddresses from "./UserAddresses";
import UserChangePassword from "./UserChangePassword";
import UserMyInfo from "./UserMyInfo";
import UserNav from "./UserNav";
import UserOrders from "./UserOrders";
import UserWallet from "./UserWallet";

export default function UserPage() {
  const currentTab = useSelector((state) => state.userPageTab);
  let content;
  switch (currentTab) {
    case 1:
      content = <UserMyInfo />;
      break;
    case 2:
      content = <UserAddresses />;
      break;
    case 3:
      content = <UserWallet />;
      break;
    case 4:
      content = <UserOrders />;
      break;
    case 5:
      content = <UserChangePassword />;
      break;
    default:
      content = "Something Went Wrong..!";
  }
  return (
    <>
      <Header />
      <UserNav />
      {content}
    </>
  );
}
