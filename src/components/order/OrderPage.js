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
    this.state = { modal: [false, "", 0, 0] };
    this.addBtnHandler = this.addBtnHandler.bind(this);
    this.removeBtnHandler = this.removeBtnHandler.bind(this);
    this.clearBtnHandler = this.clearBtnHandler.bind(this);
    this.modalOpener = this.modalOpener.bind(this);
    this.modalCloser = this.modalCloser.bind(this);
    this.modalAddHandler = this.modalAddHandler.bind(this);
    this.modalRemoveHandler = this.modalRemoveHandler.bind(this);
    this.modalUpdateCart = this.modalUpdateCart.bind(this);
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
    this.setState((state) => ({ modal: [true, id, state[id], state[id]] }));
    document.body.style.overflow = "hidden";
  }

  modalCloser() {
    this.setState({ modal: [false, "", 0, 0] });
    document.body.style.overflow = "unset";
    document.body.style.overflowX = "hidden";
  }

  modalAddHandler() {
    if (this.state.modal[2]) {
      this.setState((state) => ({
        modal: [
          true,
          state.modal[1],
          state.modal[2] + 1,
          state[state.modal[1]],
        ],
      }));
    } else {
      this.setState((state) => ({
        modal: [true, state.modal[1], 1, state[state.modal[1]]],
      }));
    }
  }

  modalRemoveHandler() {
    if (this.state.modal[2] > 0) {
      this.setState((state) => ({
        modal: [
          true,
          state.modal[1],
          state.modal[2] - 1,
          state[state.modal[1]],
        ],
      }));
    }
  }

  modalUpdateCart(id, count) {
    this.setState({ [id]: count });
    this.setState({ modal: [false, "", 0, 0] });
    document.body.style.overflow = "unset";
    document.body.style.overflowX = "hidden";
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
            addBtnHandler={this.modalAddHandler}
            removeBtnHandler={this.modalRemoveHandler}
            updateCart={this.modalUpdateCart}
          />
        </div>
        {/* <Test /> */}
      </div>
    );
  }
}

export default OrderPage;
