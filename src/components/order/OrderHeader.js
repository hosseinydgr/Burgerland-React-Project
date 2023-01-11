import React from "react";
import styles from "./OrderHeader.module.css";

class OrderHeader extends React.Component {
  render() {
    return (
      <div className={styles["main-cont"]}>
        <button className={styles.account}>Hossein Yadegari</button>
        <img className={styles.logo} src={"./Assets/pic.jpg"} alt="logo" />
      </div>
    );
  }
}

export default OrderHeader;
