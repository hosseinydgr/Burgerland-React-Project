import React, { useEffect, useState } from "react";
import OrderHeader from "./OrderHeader";
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
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(authActions.login());
    }
    // localStorage.clear();
  }, []);

  return (
    <div className={styles["main-cont"]}>
      <OrderHeader />
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
