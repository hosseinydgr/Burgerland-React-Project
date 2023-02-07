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
  const [counts, setCounts] = useState({});

  function addBtnHandler(id) {
    if (!counts[id]) {
      setCounts({ ...counts, [id]: 1 });
    } else {
      setCounts({ ...counts, [id]: counts[id] + 1 });
    }
  }

  function removeBtnHandler(id) {
    if (counts[id] > 0) {
      setCounts({ ...counts, [id]: counts[id] - 1 });
    }
  }

  function clearBtnHandler() {
    for (let key in counts) {
      if (counts[key]) {
        setCounts({ ...counts, [key]: 0 });
      }
    }
  }

  function modalOpener(id) {
    setModalState([true, id, counts[id], counts[id]]);
    document.body.style.overflow = "hidden";
  }

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
        <OrderFoodsCont
          counts={counts}
          addBtnHandler={addBtnHandler}
          removeBtnHandler={removeBtnHandler}
          modalOpener={modalOpener}
        />
        <OrderCart
          counts={counts}
          addBtnHandler={addBtnHandler}
          removeBtnHandler={removeBtnHandler}
          clearBtnHandler={clearBtnHandler}
        />
      </div>
      <OrderModal
        modalState={modalState}
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
