import React from "react";
import products from "./products";
import OrderFood from "./OrderFood";
import styles from "./OrderFoodCategory.module.css";

class OrderFoodCategory extends React.Component {
  render() {
    const arr = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === this.props.categoryName) {
        arr.push(
          <OrderFood
            img={products[i].img}
            title={products[i].title}
            price={products[i].price}
            id={products[i].id}
            count={this.props.countsObj[products[i].id]}
            key={products[i].id}
            addBtnHandler={this.props.addBtnHandler}
            removeBtnHandler={this.props.removeBtnHandler}
            modalOpener={this.props.modalOpener}
          />
        );
      }
    }

    return (
      <div className={styles["main-cont"]}>
        <h2 className={styles["category-title"]}>{this.props.categoryName}</h2>
        <div className={styles["foods-cont"]}>{arr}</div>
      </div>
    );
  }
}

export default OrderFoodCategory;
