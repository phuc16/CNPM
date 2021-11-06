import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import classNames from "classnames";

import "./App.css";

import NavBar from "./components/NavBar";
import Orders from "./pages/Orders";
import Transactions from "./pages/Transactions";
import OrdersList from "./pages/OrdersList";
import TransactionsList from "./pages/TransactionsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrders: false,
      isTransactions: false,
      ordersList: [],
      transactionsList: [],
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
    let transactionsList = [
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
    this.setState({ transactionsList });
  }

  changeToOrders() {
    this.setState({
      isOrders: true,
      isTransactions: false,
    });
  }

  changeToTransactions() {
    this.setState({
      isOrders: false,
      isTransactions: true,
    });
  }

  handleConfirmOrder = (item) => {
    alert(`Confirm order ${item.orderId}`);
    // this.setState({...});
  };

  handleConfirmTransaction = (item) => {
    alert(`Confirm transaction ${item.paymentId}`);
    // this.setState({...});
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
                grey: this.state.isOrders && !this.state.isTransactions,
              })}
              to="/orders"
            >
              <h1>Pending Orders</h1>
            </Link>
            <Link
              onClick={() => this.changeToTransactions()}
              className={classNames("option", {
                grey: !this.state.isOrders && this.state.isTransactions,
              })}
              to="/transactions"
            >
              <h1>Pending Transactions</h1>
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
              path="/transactions/:id"
              render={(props) => (
                <Transactions
                  onConfirm={this.handleConfirmTransaction}
                  {...props}
                />
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
              path="/transactions"
              render={(props) => (
                <TransactionsList
                  onTransactionConfirm={this.handleConfirmTransaction}
                  transactionsList={this.state.transactionsList}
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
