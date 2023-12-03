import { useDispatch, useSelector } from "react-redux";
import styles from "./UserControls.module.css";
import { authActions } from "../../store/auth";
import { pageActions } from "../../store/page";
import { userPageTabActions } from "../../store/userPageTab";
import { useNavigate } from "react-router-dom";

export default function UserControls({ closeWindow }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signOutHandler() {
    localStorage.clear();
    dispatch(authActions.signOut());
    // dispatch(pageActions.changePage(1));
    navigate("/order");
  }

  function goTab1() {
    dispatch(userPageTabActions.changeTab(1));
    // dispatch(pageActions.changePage(2));
    navigate("/user");
    closeWindow();
  }
  function goTab2() {
    dispatch(userPageTabActions.changeTab(2));
    // dispatch(pageActions.changePage(2));
    navigate("/user");
    closeWindow();
  }
  function goTab3() {
    dispatch(userPageTabActions.changeTab(3));
    // dispatch(pageActions.changePage(2));
    navigate("/user");
    closeWindow();
  }
  function goTab4() {
    dispatch(userPageTabActions.changeTab(4));
    // dispatch(pageActions.changePage(2));
    navigate("/user");
    closeWindow();
  }
  function goTab5() {
    dispatch(userPageTabActions.changeTab(5));
    // dispatch(pageActions.changePage(2));
    navigate("/user");
    closeWindow();
  }

  return (
    <>
      <div className={styles["main-cont"]}>
        <div className={styles.info}>
          <div>
            <h3>Ali Alavi</h3>
            <p>Wallet: 0$</p>
          </div>
          <img src="./Assets/pic.jpg" onClick={closeWindow} />
        </div>

        <div className={styles.tabs}>
          <div className={styles["flex-cont"]} onClick={goTab1}>
            <p>My Info</p>
            <img src="./Assets/pic.jpg" />
          </div>
          <div className={styles["flex-cont"]} onClick={goTab2}>
            <p>Addresses</p>
            <img src="./Assets/pic.jpg" />
          </div>
          <div className={styles["flex-cont"]} onClick={goTab3}>
            <p>Wallet</p>
            <img src="./Assets/pic.jpg" />
          </div>
          <div className={styles["flex-cont"]} onClick={goTab4}>
            <p>My Orders</p>
            <img src="./Assets/pic.jpg" />
          </div>
          <div className={styles["flex-cont"]} onClick={goTab5}>
            <p>Change Password</p>
            <img src="./Assets/pic.jpg" />
          </div>

          <p className={styles["sign-out"]} onClick={signOutHandler}>
            Sign Out
          </p>
        </div>
      </div>

      <div className={styles.overlay} onClick={closeWindow}></div>
    </>
  );
}
