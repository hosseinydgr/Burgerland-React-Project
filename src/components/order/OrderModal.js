import React from "react";
import products from "./products";
import styles from "./OrderModal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modalState";
import { countsActions } from "../../store/counts";

function OrderModal(props) {
  const modalState = useSelector((state) => state.modalState);
  const dispatch = useDispatch();

  function updateCart() {
    if (modalState[2] !== modalState[3])
      props.updateCart(modalState[1], modalState[2]);
  }

  function modalCloser() {
    dispatch(modalActions.close());
    document.body.style.overflow = "unset";
    document.body.style.overflowX = "hidden";
  }

  function addBtnHandler() {
    dispatch(modalActions.add());
  }

  function removeBtnHandler() {
    dispatch(modalActions.remove());
  }

  function updateCart() {
    dispatch(
      countsActions.updateByModal({
        id: modalState[1],
        newValue: modalState[2],
      })
    );
    dispatch(modalActions.close());
    document.body.style.overflow = "unset";
    document.body.style.overflowX = "hidden";
  }

  // if (!modalState[2]) modalState[2] = 0;
  // if (!modalState[3]) modalState[3] = 0;

  return (
    <>
      <div className={`${styles.modal} ${modalState[0] ? "" : styles.hidden}`}>
        <div>
          <img
            src="/Assets/icons/close-icon.png"
            className={styles["close-icon"]}
            onClick={modalCloser}
          />
        </div>

        <div>
          <img
            src={products[Number(modalState[1])].img}
            className={styles["product-img"]}
          />
        </div>

        <div className={styles.content}>
          <h3>{products[Number(modalState[1])].title}</h3>
          <p>{products[Number(modalState[1])].price}</p>
          <p className={styles.description}>
            {products[Number(modalState[1])].shortDesc}
          </p>
        </div>

        <div className={styles.footer}>
          <button
            className={`${styles["add-to-cart-btn"]} ${
              modalState[2] === 0 || modalState[2] === modalState[3]
                ? styles.inactive
                : ""
            }`}
            onClick={updateCart}
          >
            Update the Cart{" "}
            <span className={styles.price}>
              {modalState[2]
                ? `$${(
                    Number(products[Number(modalState[1])].price.slice(1)) *
                    modalState[2]
                  ).toFixed(2)}`
                : products[Number(modalState[1])].price}
            </span>
          </button>

          <button
            className={`${styles["add-btn"]} ${
              !modalState[2] ? "" : styles.hidden
            }`}
            onClick={addBtnHandler}
          >
            +
          </button>

          <div
            className={`${styles["count-cont"]} ${
              modalState[2] ? "" : styles.hidden
            }`}
          >
            <button className={styles["count-btn"]} onClick={removeBtnHandler}>
              &mdash;
            </button>
            <p className={styles["count-text"]}>{modalState[2]}</p>
            <button className={styles["count-btn"]} onClick={addBtnHandler}>
              +
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${styles.overlay} ${modalState[0] ? "" : styles.hidden}`}
        onClick={modalCloser}
      ></div>
    </>
  );
}

export default OrderModal;
