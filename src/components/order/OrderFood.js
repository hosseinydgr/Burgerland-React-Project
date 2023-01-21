import React from "react";
import styles from "./OrderFood.module.css";

class OrderFood extends React.Component {
  addBtnHandler(e) {
    this.props.addBtnHandler(this.props.id);
    e.stopPropagation();
  }

  removeBtnHandler(e) {
    this.props.removeBtnHandler(this.props.id);
    e.stopPropagation();
  }

  modalOpener() {
    this.props.modalOpener(this.props.id);
  }

  render() {
    return (
      <div className={styles["main-cont"]}>
        <img
          src={this.props.img}
          className={styles["food-img"]}
          onClick={this.modalOpener.bind(this)}
        />
        <div className={styles.content}>
          <p>
            <span
              onClick={this.modalOpener.bind(this)}
              className={styles.title}
            >
              {this.props.title}
            </span>
          </p>
          <div className={styles["flex-cont"]}>
            <p className={styles.price}>{this.props.price}</p>
            <button
              className={`${styles["add-btn"]} ${
                !this.props.count ? "" : styles.hidden
              }`}
              onClick={this.addBtnHandler.bind(this)}
            >
              +
            </button>
            <div
              className={`${styles["count-cont"]} ${
                this.props.count ? "" : styles.hidden
              }`}
            >
              <button
                className={styles["count-btn"]}
                onClick={this.removeBtnHandler.bind(this)}
              >
                &mdash;
              </button>
              <p className={styles["count-text"]}>{this.props.count}</p>
              <button
                className={styles["count-btn"]}
                onClick={this.addBtnHandler.bind(this)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderFood;
