import styles from "./UserAddresses.module.css";

export default function UserAddresses() {
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

        <div
          className={styles["address-cont"]}
          onMouseEnter={shoeEdit}
          onMouseLeave={hideEdit}
        >
          <img src="./Assets/pic.jpg" className={styles["loc-icon"]} />

          <div>
            <h5>Home</h5>
            <p className={styles["exact-address"]}>
              <span>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used
              </span>{" "}
              | <span>Karaj</span> | <span>Alborz</span>
            </p>
            <p className={styles["phone-number"]}>Phone Number: 123456789</p>
          </div>

          <div className={`${styles["edit-cont"]} ${styles.hidden}`}>
            <img src="./Assets/pic.jpg" className={styles["pen-icon"]} />
            <img src="./Assets/pic.jpg" className={styles["trash-icon"]} />
          </div>
        </div>
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
