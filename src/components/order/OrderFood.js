import React from "react";
import styles from "./OrderFood.module.css";
import { useDispatch, useSelector } from "react-redux";
import { countsActions } from "../../store/counts";
import { modalActions } from "../../store/modalState";

function OrderFood(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counts[props.id]);

  function addBtnHandler(e) {
    dispatch(countsActions.add(props.id));
    e.stopPropagation();
  }

  function removeBtnHandler(e) {
    dispatch(countsActions.remove(props.id));
    e.stopPropagation();
  }

  function modalOpener() {
    dispatch(modalActions.open({ id: props.id, count: count }));
    document.body.style.overflow = "hidden";
  }

  return (
    <div className={styles["main-cont"]}>
      <img
        src={props.img}
        className={styles["food-img"]}
        onClick={modalOpener}
      />
      <div className={styles.content}>
        <p>
          <span onClick={modalOpener} className={styles.title}>
            {props.title}
          </span>
        </p>
        <div className={styles["flex-cont"]}>
          <p className={styles.price}>{props.price}</p>
          <button
            className={`${styles["add-btn"]} ${!count ? "" : styles.hidden}`}
            onClick={addBtnHandler}
          >
            +
          </button>
          <div
            className={`${styles["count-cont"]} ${count ? "" : styles.hidden}`}
          >
            <button className={styles["count-btn"]} onClick={removeBtnHandler}>
              &mdash;
            </button>
            <p className={styles["count-text"]}>{count}</p>
            <button className={styles["count-btn"]} onClick={addBtnHandler}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderFood;
