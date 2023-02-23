import styles from "./UserWallet.module.css";

export default function UserWallet() {
  return (
    <div className={styles["main-cont"]}>
      <h1>Wallet</h1>
      <p className={styles["wallet-box"]}>Wallet: $0</p>
      <label for="amount">Enter the amount you prefer:</label>
      <input
        type="text"
        id="amount"
        className={styles.amount}
        placeholder="Amount, for example: 100$"
      />
      <div className={styles["flex-cont"]}>
        <img src="./Assets/pic.jpg" className={styles["bank-logo"]} />
        <div>
          <input type="radio" id="saman-portal" name="portals" />
          <label for="saman-portal">Charge via "Saman Bank" portal</label>
        </div>
      </div>
      <button className={styles["charge-btn"]}>Charge</button>
    </div>
  );
}
