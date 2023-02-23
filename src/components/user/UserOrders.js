import { useSelector } from "react-redux";
import styles from "./UserOrders.module.css";

export default function UserOrders() {
  const user = useSelector((state) => state.auth.user);
  const arr = [];
  for (let i = 0; i < user.orders.length; i++) {
    arr.push(
      <div className={styles.order}>
        <img src="./Assets/pic.jpg" className={styles.status} />
        <div>
          <h4 className={styles.date}>
            {new Date(Number(user.orders[i].date)).toLocaleString()}
          </h4>
          <p className={styles.branch}>Sattarkhan Branch</p>
          <p className={styles.amount}>
            Amount to Pay: {user.orders[i].totalPrice}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["main-cont"]}>
      <h2 className={styles.title}>Orders</h2>
      {arr}
    </div>
  );
}
