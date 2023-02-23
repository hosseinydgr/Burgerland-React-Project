import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./UserMyInfo.module.css";

export default function UserMyInfo() {
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  function nameChangeHandler(e) {
    setName(e.target.value);
  }

  function phoneChangeHandler(e) {
    setPhone(e.target.value);
  }

  function emailChangeHandler(e) {
    setEmail(e.target.value);
  }

  return (
    <form className={styles["main-cont"]}>
      <div className={styles["grid-cont"]}>
        <div>
          <label for="phoneNumber">Phone Number</label>
          <br />
          <input
            type="text"
            id="phoneNumber"
            value={phone}
            onChange={phoneChangeHandler}
            required
          />
        </div>

        <div>
          <label for="fullName">Full Name</label>
          <br />
          <input
            type="text"
            id="fullName"
            value={name}
            onChange={nameChangeHandler}
            required
          />
        </div>

        <div>
          <label for="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
      </div>

      <button type="submit">Save</button>
    </form>
  );
}
