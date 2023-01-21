import React from "react";
import styles from "./OrderCart.module.css";
import products from "./products";

class OrderCart extends React.Component {
  addBtnHandler(e) {
    this.props.addBtnHandler(e.target.id);
  }

  removeBtnHandler(e) {
    this.props.removeBtnHandler(e.target.id);
  }
  render() {
    const arr = [];
    let sum = 0;
    let c = 0;
    for (let key in this.props.wholeStateObj) {
      if (this.props.wholeStateObj[key] && key !== "modal") {
        sum +=
          Number(products[key].price.substring(1)) *
          Number(this.props.wholeStateObj[key]);
        c += Number(this.props.wholeStateObj[key]);
        arr.push(
          <div className={`${styles["flex-cont"]} ${styles.border}`} key={key}>
            <div>
              <h4>{products[key].title}</h4>
              <p>{`$${(
                Number(products[key].price.substring(1)) *
                Number(this.props.wholeStateObj[key])
              ).toFixed(2)}`}</p>
            </div>
            <div className={styles["count-cont"]}>
              <button
                className={styles["count-btn"]}
                onClick={this.removeBtnHandler.bind(this)}
                id={key}
              >
                &mdash;
              </button>
              <p className={styles["count-text"]}>
                {this.props.wholeStateObj[key]}
              </p>
              <button
                className={styles["count-btn"]}
                onClick={this.addBtnHandler.bind(this)}
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
          className={`${styles["main-cont"]} ${
            !arr.length ? "" : styles.hidden
          }`}
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
          className={`${styles["main-cont"]} ${
            arr.length ? "" : styles.hidden
          }`}
        >
          <div className={`${styles["flex-cont"]} ${styles.border}`}>
            <h3>{`Cart(${c})`}</h3>
            <img
              src={"./Assets/pic.jpg"}
              className={styles["trash-icon"]}
              onClick={this.props.clearBtnHandler}
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
}

export default OrderCart;
