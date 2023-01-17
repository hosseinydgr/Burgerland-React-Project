import React from "react";
import styles from "./OrderFood.module.css";

class OrderFood extends React.Component {
  render() {
    return (
      <div className={styles["main-cont"]}>
        <img src={this.props.img} className={styles["food-img"]} />
        <div className={styles.content}>
          <p>{this.props.title}</p>
          <div className={styles["flex-cont"]}>
            <p className={styles.price}>{this.props.price}</p>
            <button
              className={`${styles["add-btn"]} ${
                !this.props.count ? "" : styles.hidden
              }`}
            >
              +
            </button>
            <div
              className={`${styles["count-cont"]} ${
                this.props.count ? "" : styles.hidden
              }`}
            >
              <button className={styles["count-btn"]}>+</button>
              <p className={styles["count-text"]}>{this.props.count}</p>
              <button className={styles["count-btn"]}>-</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderFood;
