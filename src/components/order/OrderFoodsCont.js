import React from "react";
import products from "./products";
import OrderFoodCategory from "./OrderFoodCategory";
import styles from "./OrderFoodsCont.module.css";

class OrderFoodsCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addBtnHandler() {}

  render() {
    const arr = [];
    const arr2 = [];
    for (let i = 0; i < products.length; i++) {
      arr.push(products[i].category);
    }
    const arr3 = [...new Set(arr)];
    for (let i = 0; i < arr3.length; i++) {
      arr2.push(
        <OrderFoodCategory
          categoryName={arr3[i]}
          key={i}
          countsObj={this.state}
        />
      );
    }

    return <div className={styles["main-cont"]}>{arr2}</div>;
  }
}

export default OrderFoodsCont;
