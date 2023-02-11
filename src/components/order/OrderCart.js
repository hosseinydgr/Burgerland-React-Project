import React from "react";
import styles from "./OrderCart.module.css";
import products from "./products";
import { useSelector, useDispatch } from "react-redux";
import { countsActions } from "../../store/counts";

function OrderCart(props) {
  const counts = useSelector((state) => state.counts);
  const dispatch = useDispatch();

  function addBtnHandler(e) {
    dispatch(countsActions.add(e.target.id));
  }

  function removeBtnHandler(e) {
    dispatch(countsActions.remove(e.target.id));
  }

  function clearBtnHandler() {
    dispatch(countsActions.clear());
  }

  const arr = [];
  let sum = 0;
  let c = 0;
  for (let key in counts) {
    if (counts[key] && key !== "modal") {
      sum += Number(products[key].price.substring(1)) * Number(counts[key]);
      c += Number(counts[key]);
      arr.push(
        <div className={`${styles["flex-cont"]} ${styles.border}`} key={key}>
          <div>
            <h4>{products[key].title}</h4>
            <p>{`$${(
              Number(products[key].price.substring(1)) * Number(counts[key])
            ).toFixed(2)}`}</p>
          </div>
          <div className={styles["count-cont"]}>
            <button
              className={styles["count-btn"]}
              onClick={removeBtnHandler}
              id={key}
            >
              &mdash;
            </button>
            <p className={styles["count-text"]}>{counts[key]}</p>
            <button
              className={styles["count-btn"]}
              onClick={addBtnHandler}
              id={key}
            >
              +
            </button>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      <div
        className={`${styles["main-cont"]} ${!arr.length ? "" : styles.hidden}`}
      >
        <h3 className={styles["empty-cart-title"]}>Cart</h3>
        <div className={styles["empty-cart-content"]}>
          <img
            src={"./Assets/empty-box-100-gray.png"}
            className={styles["empty-box"]}
          />
          <p>Cart Is Empty..!</p>
        </div>
      </div>

      <div
        className={`${styles["main-cont"]} ${arr.length ? "" : styles.hidden}`}
      >
        <div className={`${styles["flex-cont"]} ${styles.border}`}>
          <h3>{`Cart(${c})`}</h3>
          <img
            src={"./Assets/icons/trash-icon.png"}
            className={styles["trash-icon"]}
            onClick={clearBtnHandler}
          />
        </div>

        {arr}

        <div className={`${styles["flex-cont"]} ${styles.tax}`}>
          <p>Tax(9%)</p>
          <p>{`$${(sum * 0.09).toFixed(2)}`}</p>
        </div>

        <div className={styles["flex-cont"]}>
          <h4>Total Price</h4>
          <h4>{`$${(sum * 1.09).toFixed(2)}`}</h4>
        </div>

        <h4 className={styles["discount-btn"]}>Have a Discount Code?</h4>

        <button className={styles["checkout-btn"]}>Checkout</button>
      </div>
    </>
  );
}

export default OrderCart;
