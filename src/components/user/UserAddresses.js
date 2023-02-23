import { useSelector } from "react-redux";
import styles from "./UserAddresses.module.css";

export default function UserAddresses() {
  const user = useSelector((state) => state.auth.user);
  const arr = [];
  for (let i = 0; i < user.adds.length; i++) {
    arr.push(
      <div
        className={styles["address-cont"]}
        onMouseEnter={shoeEdit}
        onMouseLeave={hideEdit}
        key={i}
        id={i}
      >
        <img src="./Assets/pic.jpg" className={styles["loc-icon"]} />

        <div>
          <h5>{user.adds[i].title}</h5>
          <p className={styles["exact-address"]}>
            <span>{user.adds[i].address}</span> |{" "}
            <span>{user.adds[i].city}</span> | <span>{user.adds[i].state}</span>
          </p>
          <p className={styles["phone-number"]}>
            Phone Number: <span>{user.adds[i].phone}</span>
          </p>
        </div>

        <div className={`${styles["edit-cont"]} ${styles.hidden}`}>
          <img src="./Assets/pic.jpg" className={styles["pen-icon"]} />
          <img src="./Assets/pic.jpg" className={styles["trash-icon"]} />
        </div>
      </div>
    );
  }

  function shoeEdit(e) {
    // console.log(e.currentTarget.lastElementChild);
    e.currentTarget.lastElementChild.className = `${styles["edit-cont"]}`;
  }

  function hideEdit(e) {
    e.currentTarget.lastElementChild.className = `${styles["edit-cont"]} ${styles.hidden}`;
  }

  return (
    <>
      <div className={styles["main-cont"]}>
        <div className={styles["flex-cont"]}>
          <h3>My Addresses:</h3>
          <button className={styles["add-address-btn"]}>
            + Add a new address
          </button>
        </div>
        {arr}
      </div>

      <div className={`${styles.modal} ${styles.hidden}`}>
        <div className={styles["modal-header"]}>
          <h3>Address</h3>
          <img
            src="./Assets/icons/close-icon.png"
            className={styles["close-icon"]}
          />
        </div>

        <div className={styles["modal-content"]}>
          <div>
            <label for="fullAddress">Address</label>
            <br />
            <textarea id="fullAddress" />
          </div>

          <div className={styles["flex-cont"]}>
            <div>
              <label for="city">City</label>
              <br />
              <input type="text" id="city" />
            </div>

            <div>
              <label for="state">State</label>
              <br />
              <input type="text" id="state" />
            </div>
          </div>

          <div className={styles["flex-cont"]}>
            <div>
              <label for="title">Title</label>
              <br />
              <input type="text" id="title" />
            </div>

            <div>
              <label for="number">Phone Number</label>
              <br />
              <input type="text" id="number" />
            </div>
          </div>
          <button>Save Changes</button>
        </div>
      </div>
      <div className={`${styles.overlay} ${styles.hidden}`}></div>
    </>
  );
}
