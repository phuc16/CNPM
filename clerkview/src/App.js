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
      // ordersList: [],
      // paymentsList: [],
      pageSize: 4,
    };
  }

  // componentDidMount() {
  //   this.getOrderList();
  //   this.getPaymentList();
  // }

  changeToOrders() {
    this.setState({
      isOrders: true,
      isPayments: false,
    });
    // this.getOrderList();
  }

  changeToPayments() {
    this.setState({
      isOrders: false,
      isPayments: true,
    });
    // this.getPaymentList();
  }

  // handleConfirmOrder = (item) => {
  //   alert(`Confirm order ${item.orderId}`);
  //   const newOrdersList = this.state.ordersList;
  //   const index = newOrdersList.findIndex(
  //     (order) => order.orderId === item.orderId
  //   );
  //   newOrdersList.splice(index, 1);
  //   this.setState({ ordersList: newOrdersList });

  //   // axios send post update order to accept
  // };

  // handleConfirmPayment = (item) => {
  //   alert(`Confirm payment ${item.paymentId}`);
  //   const newPaymentsList = this.state.paymentsList;
  //   const index = newPaymentsList.findIndex(
  //     (payment) => payment.paymentId === item.paymentId
  //   );
  //   newPaymentsList.splice(index, 1);
  //   this.setState({ paymentsList: newPaymentsList });

  //   // axios send post update payment to accept
  // };

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
  //   this.setState({ ordersList: orderList });
  // };

  // setPaymentList = (paymentsList) => {
  //   console.log(paymentsList);
  //   this.setState({ paymentsList: paymentsList });
  // };

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
              /**
               * props contain router object: history, location, params
               */
              render={(props) => (
                <Orders onConfirm={this.handleConfirmOrder} {...props} />
              )}
            />
            <Route
              exact
              path="/payments/:id"
              render={(props) => (
                <Payments onConfirm={this.handleConfirmPayment} {...props} />
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
