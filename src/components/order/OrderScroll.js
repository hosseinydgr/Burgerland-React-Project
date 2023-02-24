import { useRef } from "react";
import styles from "./OrderScroll.module.css";

export default function OrderScroll() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const firstItem = useRef(null);
  const lastItem = useRef(null);

  function scrollHandler(e) {
    leftRef.current.style.left = `${e.target.scrollLeft}px`;
    rightRef.current.style.right = `-${e.target.scrollLeft}px`;
  }

  function scrollToLeft() {
    firstItem.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  }

  function scrollToRight() {
    lastItem.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  }

  return (
    <div className={styles["main-cont"]} onScroll={scrollHandler}>
      <div
        className={`${styles.left} ${styles.arrow}`}
        ref={leftRef}
        onClick={scrollToLeft}
      >
        &lt;
      </div>
      <div
        className={`${styles.right} ${styles.arrow}`}
        ref={rightRef}
        onClick={scrollToRight}
      >
        &gt;
      </div>

      <div className={styles.item} ref={firstItem}>
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

      <div className={styles.item} ref={lastItem}>
        <img src="./Assets/icons/beverage-icon.png" />
        <p>Beverage</p>
      </div>
    </div>
  );
}
