import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import { pageActions } from "../../store/page";
import styles from "./Header.module.css";
import UserControls from "./UserControls";
import { useNavigate } from "react-router-dom";

function OrderHeader() {
  const isIn = useSelector((state) => state.auth.isIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isControlsOpen, setIsControlsOpen] = useState(false);

  let content;
  if (isIn) {
    content = (
      <div style={{ position: "relative" }}>
        <button className={styles["action-btn"]} onClick={openControls}>
          {user.name}
        </button>
        {isControlsOpen && <UserControls closeWindow={closeControls} />}
      </div>
    );
  } else {
    content = (
      <button className={styles["action-btn"]} onClick={authPageOpener}>
        Sign In / Sign Up
      </button>
    );
  }

  function openControls() {
    setIsControlsOpen(true);
  }

  function closeControls() {
    setIsControlsOpen(false);
  }

  function logoClickHandler() {
    // dispatch(pageActions.changePage(1));
    navigate("/order");
  }

  async function authPageOpener() {
    // dispatch(pageActions.changePage(3));
    navigate("/auth");
  }

  return (
    <div className={styles["main-cont"]}>
      {content}
      <img
        className={styles.logo}
        src="./Assets/logo.jpg"
        alt="logo"
        onClick={logoClickHandler}
      />
    </div>
  );
}

export default OrderHeader;
