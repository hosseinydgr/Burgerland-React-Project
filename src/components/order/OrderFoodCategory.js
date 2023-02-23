import React from "react";
import OrderFood from "./OrderFood";
import styles from "./OrderFoodCategory.module.css";
import { useSelector } from "react-redux";

function OrderFoodCategory(props) {
  const products = useSelector((state) => state.products);
  const arr = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === props.categoryName) {
      arr.push(
        <OrderFood
          img={products[i].img}
          title={products[i].title}
          price={products[i].price}
          id={products[i].id}
          key={products[i].id}
        />
      );
    }
  }

  return (
    <div className={styles["main-cont"]}>
      <h2 className={styles["category-title"]}>{props.categoryName}</h2>
      <div className={styles["foods-cont"]}>{arr}</div>
    </div>
  );
}

export default OrderFoodCategory;
