import styles from "./UserMyInfo.module.css";

export default function UserMyInfo() {
  return (
    <div className={styles["main-cont"]}>
      <div>
        <label for="phoneNumber">Phone Number</label>
        <br />
        <input type="text" id="phoneNumber" value="09191230912" />
      </div>

      <div>
        <label for="fullName">Full Name</label>
        <br />
        <input type="text" id="fullName" value="Amirhossein Yadegari" />
      </div>

      <div>
        <label for="email">Email</label>
        <br />
        <input type="email" id="email" />
      </div>
    </div>
  );
}
