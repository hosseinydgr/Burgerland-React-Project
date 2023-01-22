import React from "react";
import products from "./products";
import styles from "./OrderModal.module.css";

class OrderModal extends React.Component {
  updateCart() {
    if (this.props.modalState[2] !== this.props.modalState[3])
      this.props.updateCart(this.props.modalState[1], this.props.modalState[2]);
  }

  render() {
    if (!this.props.modalState[2]) this.props.modalState[2] = 0;
    if (!this.props.modalState[3]) this.props.modalState[3] = 0;

    return (
      <>
        <div
          className={`${styles.modal} ${
            this.props.modalState[0] ? "" : styles.hidden
          }`}
        >
          <div>
            <img
              src="./Assets/icons/close-icon.png"
              className={styles["close-icon"]}
              onClick={this.props.modalCloser}
            />
          </div>

          <div>
            <img
              src={products[Number(this.props.modalState[1])].img}
              className={styles["product-img"]}
            />
          </div>

          <div className={styles.content}>
            <h3>{products[Number(this.props.modalState[1])].title}</h3>
            <p>{products[Number(this.props.modalState[1])].price}</p>
            <p className={styles.description}>
              {products[Number(this.props.modalState[1])].shortDesc}
            </p>
          </div>

          <div className={styles.footer}>
            <button
              className={`${styles["add-to-cart-btn"]} ${
                this.props.modalState[2] === 0 ||
                this.props.modalState[2] === this.props.modalState[3]
                  ? styles.inactive
                  : ""
              }`}
              onClick={this.updateCart.bind(this)}
            >
              Update the Cart{" "}
              <span className={styles.price}>
                {this.props.modalState[2]
                  ? `$${(
                      Number(
                        products[Number(this.props.modalState[1])].price.slice(
                          1
                        )
                      ) * this.props.modalState[2]
                    ).toFixed(2)}`
                  : products[Number(this.props.modalState[1])].price}
              </span>
            </button>

            <button
              className={`${styles["add-btn"]} ${
                !this.props.modalState[2] ? "" : styles.hidden
              }`}
              onClick={this.props.addBtnHandler}
            >
              +
            </button>

            <div
              className={`${styles["count-cont"]} ${
                this.props.modalState[2] ? "" : styles.hidden
              }`}
            >
              <button
                className={styles["count-btn"]}
                onClick={this.props.removeBtnHandler}
              >
                &mdash;
              </button>
              <p className={styles["count-text"]}>{this.props.modalState[2]}</p>
              <button
                className={styles["count-btn"]}
                onClick={this.props.addBtnHandler}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${styles.overlay} ${
            this.props.modalState[0] ? "" : styles.hidden
          }`}
          onClick={this.props.modalCloser}
        ></div>
      </>
    );
  }
}

export default OrderModal;
