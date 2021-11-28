import React, { Component, createContext } from "react";
import Axios from "axios";

export const OrderContext = createContext();

class OrderProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersList: [],
    };
  }

  getOrderList = () => {
    Axios.get("http://localhost:3001/clerk/order").then((response) => {
      this.setOrderList(response.data);
    });
  };

  setOrderList = (orderList) => {
    console.log(orderList);
    this.setState({ ordersList: orderList });
  };

  updateOrderStatus = (orderId) => {
    Axios.post("http://localhost:3001/clerk/updateorder", { orderId: orderId }).then(
      (res) => {
        console.log("Update order success", res);
      }
    );
  };

  handleConfirmOrder = (item) => {
    alert(`Confirm order ${item.OrderID}`);
    const newOrdersList = this.state.ordersList;
    const index = newOrdersList.findIndex(
      (order) => order.OrderID === item.OrderID
    );
    newOrdersList.splice(index, 1);
    this.setState({ ordersList: newOrdersList });

    this.updateOrderStatus(item.OrderID);
  };

  getOrderDetail = async (orderId) => {
    const response = await Axios.post("http://localhost:3001/clerk/order/detail", {
      orderId: orderId,
    });
    // .then((response) => {
    //   console.log("Order detail get: ", response.data);
    //   return response.data;
    // });
    return response.data;
  };

  render() {
    return (
      <OrderContext.Provider
        value={{
          ordersList: this.state.ordersList,
          getOrderList: this.getOrderList,
          handleConfirmOrder: this.handleConfirmOrder,
          getOrderDetail: this.getOrderDetail,
          updateOrderStatus: this.updateOrderStatus,
        }}
      >
        {this.props.children}
      </OrderContext.Provider>
    );
  }
}

export default OrderProvider;
