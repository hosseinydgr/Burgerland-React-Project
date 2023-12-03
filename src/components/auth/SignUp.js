import { useDispatch } from "react-redux";
import { pageActions } from "../../store/page";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function switchPage() {
    props.switchPage(true);
  }

  function goToOrder() {
    // dispatch(pageActions.changePage(1));
    navigate("/order");
  }

  return (
    <div className={styles["main-cont"]}>
      <form>
        <label for="name">Your Name</label>
        <input type="text" id="name" required />
        <label className={styles["margin-top"]} for="phone">
          Phone Number
        </label>
        <input type="number" id="phone" className={styles.phone} required />
        <label className={styles["margin-top"]} for="email">
          Email(optional)
        </label>
        <input type="text" id="email" />
        <label className={styles["margin-top"]} for="password">
          Password
        </label>
        <input type="password" id="password" required />
        <button className={styles["submit-btn"]} type="submit">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span className={styles["switch-page"]} onClick={switchPage}>
          Sign In
        </span>
      </p>
      <p className={styles["go-to-order"]} onClick={goToOrder}>
        Get back to order page
      </p>
    </div>
  );
}
