import React, { useState } from "react";
import OrderHeader from "./OrderHeader";
import OrderResInfo from "./OrderResInfo";
import OrderFoodsCont from "./OrderFoodsCont";
import OrderCart from "./OrderCart";
import OrderModal from "./OrderModal";
import styles from "./OrderPage.module.css";
// import Test from "./Test";

function OrderPage() {
  const [modalState, setModalState] = useState([false, "", 0, 0]);

  function modalCloser() {
    setModalState([false, "", 0, 0]);
    document.body.style.overflow = "unset";
    document.body.style.overflowX = "hidden";
  }

  function modalAddHandler() {
    if (modalState[2]) {
      setModalState([
        true,
        modalState[1],
        modalState[2] + 1,
        counts[modalState[1]],
      ]);
    } else {
      setModalState([true, modalState[1], 1, counts[modalState[1]]]);
    }
  }

  function modalRemoveHandler() {
    if (modalState[2] > 0) {
      setModalState([
        true,
        modalState[1],
        modalState[2] - 1,
        counts[modalState[1]],
      ]);
    }
  }

  function modalUpdateCart(id, count) {
    setCounts({ ...counts, [id]: count });
    setModalState([false, "", 0, 0]);
    document.body.style.overflow = "unset";
    document.body.style.overflowX = "hidden";
  }

  return (
    <div className={styles["main-cont"]}>
      <OrderHeader />
      <OrderResInfo />
      <div className={styles.cont}>
        <OrderFoodsCont />
        <OrderCart
          counts={counts}
          addBtnHandler={addBtnHandler}
          removeBtnHandler={removeBtnHandler}
          clearBtnHandler={clearBtnHandler}
        />
      </div>
      <OrderModal
        modalCloser={modalCloser}
        addBtnHandler={modalAddHandler}
        removeBtnHandler={modalRemoveHandler}
        updateCart={modalUpdateCart}
      />
      {/* <Test /> */}
    </div>
  );
}

export default OrderPage;
