import React, { useState } from "react";
import OrderHeader from "./OrderHeader";
import OrderResInfo from "./OrderResInfo";
import OrderFoodsCont from "./OrderFoodsCont";
import OrderCart from "./OrderCart";
import OrderModal from "./OrderModal";
import styles from "./OrderPage.module.css";

function OrderPage() {
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
