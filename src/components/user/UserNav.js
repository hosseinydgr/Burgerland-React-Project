import { useDispatch, useSelector } from "react-redux";
import { userPageTabActions } from "../../store/userPageTab";
import styles from "./UserNav.module.css";

export default function UserNav() {
  const activeTab = useSelector((state) => state.userPageTab);
  const dispatch = useDispatch();

  function goTab1() {
    dispatch(userPageTabActions.changeTab(1));
  }
  function goTab2() {
    dispatch(userPageTabActions.changeTab(2));
  }
  function goTab3() {
    dispatch(userPageTabActions.changeTab(3));
  }
  function goTab4() {
    dispatch(userPageTabActions.changeTab(4));
  }
  function goTab5() {
    dispatch(userPageTabActions.changeTab(5));
  }

  return (
    <div className={styles["main-cont"]}>
      <h1 className={styles["user-name"]}>Amirhossein Yadegari</h1>
      <p className={styles.wallet}>Wallet: $0</p>
      <nav className={styles["nav-bar"]}>
        <p
          className={
            activeTab === 1 ? `${styles.item} ${styles.active}` : styles.item
          }
          onClick={goTab1}
        >
          My Info
        </p>
        <p
          className={
            activeTab === 2 ? `${styles.item} ${styles.active}` : styles.item
          }
          onClick={goTab2}
        >
          Addresses
        </p>
        <p
          className={
            activeTab === 3 ? `${styles.item} ${styles.active}` : styles.item
          }
          onClick={goTab3}
        >
          Wallet
        </p>
        <p
          className={
            activeTab === 4 ? `${styles.item} ${styles.active}` : styles.item
          }
          onClick={goTab4}
        >
          Orders
        </p>
        <p
          className={
            activeTab === 5 ? `${styles.item} ${styles.active}` : styles.item
          }
          onClick={goTab5}
        >
          Change Password
        </p>
      </nav>
    </div>
  );
}
