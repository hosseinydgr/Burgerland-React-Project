import React from "react";
import OrderHeader from "./OrderHeader";
import OrderResInfo from "./OrderResInfo";
import OrderFoodsCont from "./OrderFoodsCont";
import OrderCart from "./OrderCart";
import OrderModal from "./OrderModal";
import styles from "./OrderPage.module.css";
import { ThemeProvider } from "styled-components";
// import Test from "./Test";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: [false, ""] };
    this.addBtnHandler = this.addBtnHandler.bind(this);
    this.removeBtnHandler = this.removeBtnHandler.bind(this);
    this.clearBtnHandler = this.clearBtnHandler.bind(this);
    this.modalOpener = this.modalOpener.bind(this);
    this.modalCloser = this.modalCloser.bind(this);
  }

  addBtnHandler(id) {
    if (!this.state[id]) {
      this.setState({ [id]: 1 });
    } else {
      this.setState((state) => ({ [id]: state[id] + 1 }));
    }
  }

  removeBtnHandler(id) {
    if (this.state[id] > 0) {
      this.setState((state) => ({ [id]: state[id] - 1 }));
    }
  }

  clearBtnHandler() {
    for (let key in this.state) {
      if (this.state[key] && key !== "modal") {
        this.setState({ [key]: 0 });
      }
    }
  }

  modalOpener(id) {
    this.setState({ modal: [true, id] });
  }

  modalCloser() {
    this.setState({ modal: [false, ""] });
  }

  render() {
    return (
      <div className={styles["main-cont"]}>
        <OrderHeader />
        <OrderResInfo />
        <div className={styles.cont}>
          <OrderFoodsCont
            wholeStateObj={this.state}
            addBtnHandler={this.addBtnHandler}
            removeBtnHandler={this.removeBtnHandler}
            modalOpener={this.modalOpener}
          />
          <OrderCart
            wholeStateObj={this.state}
            addBtnHandler={this.addBtnHandler}
            removeBtnHandler={this.removeBtnHandler}
            clearBtnHandler={this.clearBtnHandler}
          />
          <OrderModal
            modalState={this.state.modal}
            modalCloser={this.modalCloser}
          />
        </div>
        {/* <Test /> */}
      </div>
    );
  }
}

export default OrderPage;
