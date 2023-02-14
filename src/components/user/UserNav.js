import styles from "./UserNav.module.css";

export default function UserNav() {
  return (
    <div className={styles["main-cont"]}>
      <h1 className={styles["user-name"]}>Amirhossein Yadegari</h1>
      <p className={styles.wallet}>Wallet: $0</p>
      <nav className={styles["nav-bar"]}>
        <p className={`${styles.item} ${styles.active}`}>MY Info</p>
        <p className={styles.item}>Addresses</p>
        <p className={styles.item}>Wallet</p>
        <p className={styles.item}>Orders</p>
        <p className={styles.item}>Change Password</p>
      </nav>
    </div>
  );
}
