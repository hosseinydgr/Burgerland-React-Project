import React from "react";
import OrderHeader from "./OrderHeader";
import OrderResInfo from "./OrderResInfo";
import OrderFoodsCont from "./OrderFoodsCont";
// import Test from "./Test";

class OrderPage extends React.Component {
  render() {
    return (
      <div>
        <OrderHeader />
        <OrderResInfo />
        <OrderFoodsCont />
        {/* <Test /> */}
      </div>
    );
  }
}

export default OrderPage;
