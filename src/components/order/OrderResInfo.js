import React from "react";
import styles from "./OrderResInfo.module.css";

class OrderResInfo extends React.Component {
  render() {
    return (
      <div className={styles["main-cont"]}>
        <div className={styles["res-info"]}>
          <h2>B1 Branch</h2>
          <h3 className={styles["margin-y"]}>Addres: Somewhere</h3>
          <button className={styles["change-branch-btn"]}>Change Branch</button>
        </div>
        <div className={styles["timing-info"]}>
          <p>You can't order now!</p>
          <p>Start from 11:00</p>
        </div>
        <div className={styles.overlay}></div>
      </div>
    );
  }
}

export default OrderResInfo;
