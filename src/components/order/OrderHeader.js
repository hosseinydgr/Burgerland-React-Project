import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import styles from "./OrderHeader.module.css";

function OrderHeader() {
  const isIn = useSelector((state) => state.auth.isIn);
  const dispatch = useDispatch();

  let content;
  if (isIn) {
    content = (
      <button className={styles["action-btn"]}>
        {localStorage.getItem("userName")}
      </button>
    );
  } else {
    content = (
      <div className={styles["login-cont"]}>
        <button className={styles["action-btn"]}>Sign Up</button>
        <button className={styles["action-btn"]} onClick={loginHandler}>
          Login
        </button>
      </div>
    );
  }

  async function loginHandler() {
    //   const response = await fetch(`http://localhost:3000/users/0`);
    //   const data = await response.json();
    //   localStorage.setItem("userId", data.id);
    //   localStorage.setItem("userName", data.name);
    //   dispatch(authActions.login());
  }

  return (
    <div className={styles["main-cont"]}>
      {content}
      <img className={styles.logo} src="./Assets/logo.jpg" alt="logo" />
    </div>
  );
}

export default OrderHeader;
