import React, { useEffect, useState } from "react";
// import products from "./products";
import OrderFoodCategory from "./OrderFoodCategory";
import OrderSearch from "./OrderSearch";
import OrderScroll from "./OrderScroll";
import styles from "./OrderFoodsCont.module.css";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../store/products";

function OrderFoodsCont(props) {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(function () {
    (async function () {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      dispatch(productsActions.setup(data));
      // console.log(data);
    })();
  }, []);

  let arr2;

  if (products) {
    const arr = [];
    arr2 = [];
    for (let i = 0; i < products.length; i++) {
      arr.push(products[i].category);
    }
    const arr3 = [...new Set(arr)];
    for (let i = 0; i < arr3.length; i++) {
      arr2.push(<OrderFoodCategory categoryName={arr3[i]} key={i} />);
    }
  }

  return (
    <div className={styles["main-cont"]}>
      <OrderScroll />
      <OrderSearch />
      <div>
        {products
          ? arr2
          : 'You need to setup json server. run "npm install -g json-server" first, then run "json-server --watch db.json".'}
      </div>
    </div>
  );
}

export default OrderFoodsCont;
