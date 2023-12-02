import { useDispatch } from "react-redux";
import styles from "./SignIn.module.css";
import { pageActions } from "../../store/page";
import { authActions } from "../../store/auth";
import { useState } from "react";

export default function SignIn(props) {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function phoneChangeHandler(e) {
    setPhone(e.target.value);
  }

  function passwordChangeHandler(e) {
    setPassword(e.target.value);
  }

  function switchPage() {
    props.switchPage(false);
  }

  function goToOrder() {
    dispatch(pageActions.changePage(1));
  }

  async function signInHandler(e) {
    e.preventDefault();
    let flag = false;
    // const response = await fetch(`http://localhost:3000/users`);
    const response = await fetch(
      `https://654ceb3b77200d6ba859b019.mockapi.io/users`
    );
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
      if (data[i].phone === phone && data[i].password === password) {
        localStorage.setItem("user", JSON.stringify(data[i]));
        dispatch(authActions.login(data[i]));
        dispatch(pageActions.changePage(1));
        flag = true;
      }
    }
    if (!flag) alert("Not Valid");
  }

  return (
    <div className={styles["main-cont"]}>
      <form onSubmit={signInHandler}>
        <label for="phone">Phone Number</label>
        <input
          type="number"
          className={styles.phone}
          id="phone"
          value={phone}
          onChange={phoneChangeHandler}
          required
        />
        <label for="password" className={styles["margin-top"]}>
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={passwordChangeHandler}
          required
        />
        <button type="submit" className={styles["submit-btn"]}>
          Sign In
        </button>
      </form>
      <p>
        Haven't an account?{" "}
        <span className={styles["switch-page"]} onClick={switchPage}>
          Sign Up
        </span>
      </p>
      <p className={styles["go-to-order"]} onClick={goToOrder}>
        Get back to order page
      </p>
    </div>
  );
}
