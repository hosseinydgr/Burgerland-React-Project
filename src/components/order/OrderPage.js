import React, { useEffect, useState } from "react";
import Header from "../header/Header.js";
import OrderResInfo from "./OrderResInfo";
import OrderFoodsCont from "./OrderFoodsCont";
import OrderCart from "./OrderCart";
import OrderModal from "./OrderModal";
import styles from "./OrderPage.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

function OrderPage() {
  const dispatch = useDispatch();

  useEffect(function () {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(authActions.login(JSON.parse(user)));
    }
  }, []);

  return (
    <div className={styles["main-cont"]}>
      <Header />
      <OrderResInfo />
      <div className={styles.cont}>
        <OrderFoodsCont />
        <OrderCart />
      </div>
      <OrderModal />
    </div>
  );
}

export default OrderPage;
