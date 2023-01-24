import React from "react";
import styles from "./OrderSearch.module.css";

class OrderSearch extends React.Component {
  render() {
    return (
      <div className={styles.cont}>
        <img src="./Assets/icons/search-icon.png" alt="search-icon" />
        <input type="text" placeholder="Quick Search" />
      </div>
    );
  }
}

export default OrderSearch;
