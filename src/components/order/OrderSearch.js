import styles from "./OrderSearch.module.css";
import { useRef } from "react";

export default function OrderSearch() {
  const inputRef = useRef(null);

  function handleImgClick() {
    inputRef.current.focus();
  }

  return (
    <div className={styles.cont}>
      <img
        src="./Assets/icons/search-icon.png"
        alt="search-icon"
        onClick={handleImgClick}
      />
      <input type="text" placeholder="Quick Search" ref={inputRef} />
    </div>
  );
}
