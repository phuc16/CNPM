import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import classNames from "classnames";

import "./App.css";

import NavBar from "./components/NavBar";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import OrdersList from "./pages/OrdersList";
import PaymentsList from "./pages/PaymentsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrders: false,
      isPayments: false,
      ordersList: [],
      paymentsList: [],
    };
  }

  componentDidMount() {
    // axios return value
    let ordersList = [
      {
        orderId: "OD123456",
        tableId: "Table 1",
        datetime: "2021-09-25 14:54:32",
        totalCost: 119,
      },
      {
        orderId: "OD123457",
        tableId: "Table 2",
        datetime: "2021-09-25 15:54:32",
        totalCost: 119,
      },
      {
        orderId: "OD123458",
        tableId: "Table 3",
        datetime: "2021-09-25 16:54:32",
        totalCost: 119,
      },
    ];
    let paymentsList = [
      {
        paymentId: "PM123456",
        type: "Direct",
        datetime: "2021-09-25 14:54:32",
        totalCost: 119,
      },
      {
        paymentId: "PM123457",
        type: "Online",
        datetime: "2021-09-25 15:54:32",
        totalCost: 119,
      },
      {
        paymentId: "PM123458",
        type: "Direct",
        datetime: "2021-09-25 16:54:32",
        totalCost: 119,
      },
      {
        paymentId: "PM1234569",
        type: "Direct",
        datetime: "2021-09-25 17:54:32",
        totalCost: 119,
      },
    ];

    this.setState({ ordersList });
    this.setState({ paymentsList });
  }

  changeToOrders() {
    this.setState({
      isOrders: true,
      isPayments: false,
    });
  }

  changeToPayments() {
    this.setState({
      isOrders: false,
      isPayments: true,
    });
  }

  handleConfirmOrder = (item) => {
    alert(`Confirm order ${item.orderId}`);
    const newOrdersList = this.state.ordersList;
    const index = newOrdersList.findIndex(
      (order) => order.orderId === item.orderId
    );
    newOrdersList.splice(index, 1);
    this.setState({ ordersList: newOrdersList });

    // axios send post update order to accept
  };

  handleConfirmPayment = (item) => {
    alert(`Confirm payment ${item.paymentId}`);
    const newPaymentsList = this.state.paymentsList;
    const index = newPaymentsList.findIndex(
      (payment) => payment.paymentId === item.paymentId
    );
    newPaymentsList.splice(index, 1);
    this.setState({ paymentsList: newPaymentsList });

    // axios send post update payment to accept
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar Title="Clerks Tabs" />
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
                <OrdersList
                  onOrderConfirm={this.handleConfirmOrder}
                  ordersList={this.state.ordersList}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/payments"
              render={(props) => (
                <PaymentsList
                  onPaymentConfirm={this.handleConfirmPayment}
                  paymentsList={this.state.paymentsList}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
