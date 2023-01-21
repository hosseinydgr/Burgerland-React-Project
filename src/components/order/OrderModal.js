import React from "react";
import products from "./products";
import styles from "./OrderModal.module.css";

class OrderModal extends React.Component {
  render() {
    return (
      <>
        <div
          className={`${styles.modal} ${
            this.props.modalState[0] ? "" : styles.hidden
          }`}
        >
          <div>
            <img
              src="./Assets/pic.jpg"
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
            <button className={styles["add-to-cart-btn"]}>
              Add to Cart <span className={styles.price}>$134.54</span>
            </button>

            <div className={styles["count-cont"]}>
              <button
                className={styles["count-btn"]}
                // onClick={this.removeBtnHandler.bind(this)}
              >
                &mdash;
              </button>
              <p className={styles["count-text"]}>3</p>
              <button
                className={styles["count-btn"]}
                // onClick={this.addBtnHandler.bind(this)}
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
