import styles from "./UserChangePassword.module.css";

export default function UserChangePassword() {
  return (
    <div className={styles["main-cont"]}>
      <h2>Change Password</h2>
      <input type="text" placeholder="Current Password" />
      <input type="text" placeholder="New Password" />
      <input type="text" placeholder="Repeat New Password" />
      <button>Change Password</button>
    </div>
  );
}
