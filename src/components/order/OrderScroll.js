import { useRef } from "react";
import styles from "./OrderScroll.module.css";

export default function OrderScroll() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  function scrollHandler(e) {
    leftRef.current.style.left = `${e.target.scrollLeft}px`;
    rightRef.current.style.right = `-${e.target.scrollLeft}px`;
  }

  return (
    <div className={styles["main-cont"]} onScroll={scrollHandler}>
      <div className={`${styles.left} ${styles.arrow}`} ref={leftRef}>
        &lt;
      </div>
      <div className={`${styles.right} ${styles.arrow}`} ref={rightRef}>
        &gt;
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/burger-icon.png" />
        <p>Single Burger</p>
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/burger-icon.png" />
        <p>Double Burger</p>
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/burger-icon.png" />
        <p>Triple Burger</p>
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/burger-icon.png" />
        <p>Quadruple Burger</p>
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/burger-icon.png" />
        <p>Chicken Burger</p>
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/burger-icon.png" />
        <p>Juicy Burger</p>
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/pizza-icon.png" />
        <p>Pizza</p>
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/chickenstrips-icon.png" />
        <p>Chicken Strips</p>
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/pizza-icon.png" />
        <p>Happy Land</p>
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/sandwich-icon.png" />
        <p>Sandwich</p>
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/appetizer-icon.png" />
        <p>Appetizer</p>
      </div>

      <div className={styles.item}>
        <img src="./Assets/icons/beverage-icon.png" />
        <p>Beverage</p>
      </div>
    </div>
  );
}
