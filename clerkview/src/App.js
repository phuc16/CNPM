import React, { Component } from "react";
import Pagination from "./pages/common/Pagination";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import classNames from "classnames";

import { OrderContext } from "./contexts/OrdersContext";
import { PaymentContext } from "./contexts/PaymentsContext";

import "./App.css";

import NavBar from "./components/NavBar";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import OrdersList from "./pages/OrdersList";
import PaymentsList from "./pages/PaymentsList";

import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrderPage: 1,
      currentPaymentPage: 1,
      isOrders: false,
      isPayments: false,
      pageSize: 4,
    };
  }

  changeToOrders() {
    this.setState({
      isOrders: true,
      isPayments: false,
    });
    this.getOrderDetail(20);
  }

  changeToPayments() {
    this.setState({
      isOrders: false,
      isPayments: true,
    });
    this.getPaymentDetail(22);
  }

  handleOrderPageChange = (page) => {
    console.log(page);
    this.setState({ currentOrderPage: page });
  };

  handlePaymentPageChange = (page) => {
    console.log(page);
    this.setState({ currentPaymentPage: page });
  };

  // retrieve data from server

  // updateOrderStatus = (orderId) => {
  //   Axios.post("http://localhost:3001/updateorder", { orderId: orderId }).then(
  //     () => {
  //       console.log("Update order success");
  //     }
  //   );
  // };

  // updatePaymentStatus = (paymentId) => {
  //   Axios.post("http://localhost:3001/updatepayment", {
  //     paymentId: paymentId,
  //   }).then(() => {
  //     console.log("Update payment success");
  //   });
  // };

  // getOrderList = () => {
  //   Axios.get("http://localhost:3001/orders").then((response) => {
  //     this.setOrderList(response.data);
  //   });
  // };

  // getPaymentList = () => {
  //   Axios.get("http://localhost:3001/payment").then((response) => {
  //     this.setPaymentList(response.data);
  //   });
  // };

  // setOrderList = (orderList) => {
  //   console.log(orderList);
  //   // this.setState({ ordersList: orderList });
  // };

  // setPaymentList = (paymentsList) => {
  //   console.log(paymentsList);
  //   // this.setState({ paymentsList: paymentsList });
  // };

  getOrderDetail = (orderId) => {
    Axios.post("http://localhost:3001/orders/detail", {
      orderId: orderId,
    }).then((response) => {
      console.log("Order detail get: ", response.data);
    });
  };

  getPaymentDetail = (paymentId) => {
    Axios.post("http://localhost:3001/payment/detail", {
      paymentId: paymentId,
    }).then((response) => {
      console.log("Payment detail get: ", response.data);
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar className="clerk-tabs" Title="Clerks Tabs" />
          <div className="select-bar">
            <Link
              onClick={() => this.changeToOrders()}
              className={classNames("option", {
                grey: this.state.isOrders && !this.state.isPayments,
              })}
              to="/orders"
            >
              <h1>Pending Orders</h1>
            </Link>
            <Link
              onClick={() => this.changeToPayments()}
              className={classNames("option", {
                grey: !this.state.isOrders && this.state.isPayments,
              })}
              to="/payments"
            >
              <h1>Pending Payments</h1>
            </Link>
          </div>
          <Switch>
            <Route
              exact
              path="/orders/:id"
              render={(props) => (
                <OrderContext.Consumer>
                  {({ updateOrderStatus, getOrderDetail }) => {
                    return (
                      <Orders
                        onConfirm={updateOrderStatus}
                        getOrderDetail={getOrderDetail}
                        {...props}
                      />
                    );
                  }}
                </OrderContext.Consumer>
              )}
            />
            <Route
              exact
              path="/payments/:id"
              render={(props) => (
                <PaymentContext.Consumer>
                  {({ updatePaymentStatus, getPaymentDetail }) => {
                    return (
                      <Payments
                        onConfirm={updatePaymentStatus}
                        getPaymentDetail={getPaymentDetail}
                        {...props}
                      />
                    );
                  }}
                </PaymentContext.Consumer>
              )}
            />
            <Route
              exact
              path="/orders"
              render={(props) => (
                <OrderContext.Consumer>
                  {({ ordersList, getOrderList, handleConfirmOrder }) => {
                    return (
                      <OrdersList
                        currentPage={this.state.currentOrderPage}
                        onOrderConfirm={handleConfirmOrder}
                        ordersList={ordersList}
                        onPageChange={this.handleOrderPageChange}
                        pageSize={this.state.pageSize}
                        getOrderList={getOrderList}
                        // updateOrderStatus={this.updateOrderStatus}
                        {...props}
                      />
                    );
                  }}
                </OrderContext.Consumer>
              )}
            />
            <Route
              exact
              path="/payments"
              render={(props) => (
                <PaymentContext.Consumer>
                  {({ paymentsList, getPaymentList, handleConfirmPayment }) => {
                    return (
                      <PaymentsList
                        currentPage={this.state.currentPaymentPage}
                        onPaymentConfirm={handleConfirmPayment}
                        paymentsList={paymentsList}
                        onPageChange={this.handlePaymentPageChange}
                        pageSize={this.state.pageSize}
                        getPaymentList={getPaymentList}
                        // updatePaymentStatus={this.updatePaymentStatus}
                        {...props}
                      />
                    );
                  }}
                </PaymentContext.Consumer>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
