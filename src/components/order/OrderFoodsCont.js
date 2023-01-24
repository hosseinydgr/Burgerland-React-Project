import React from "react";
import products from "./products";
import OrderFoodCategory from "./OrderFoodCategory";
import OrderSearch from "./OrderSearch";
import OrderScroll from "./OrderScroll";
import styles from "./OrderFoodsCont.module.css";

class OrderFoodsCont extends React.Component {
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
          countsObj={this.props.wholeStateObj}
          addBtnHandler={this.props.addBtnHandler}
          removeBtnHandler={this.props.removeBtnHandler}
          modalOpener={this.props.modalOpener}
        />
      );
    }

    return (
      <div className={styles["main-cont"]}>
        <OrderScroll />
        <OrderSearch />
        <div>{arr2}</div>
      </div>
    );
  }
}

export default OrderFoodsCont;
