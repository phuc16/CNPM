import React, { Component } from "react";

import PaymentHeader from "../Components/PaymentHeader";
import PaymentBody from "../Components/PaymentBody";
import OnlineModal from "../modal/OnlineModal";
import NavBar from "../Components/NavBar";
import { CartContext } from "../contexts/Cart";

function getDay() {
  let newDate = new Date();
  let date_raw = newDate.getDate();
  let month_raw = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return date_raw + "/" + month_raw + "/" + year;
}

function getTime() {}

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: getDay(),
      time: "6:29:00 PM",
      tableId: 1,
      orderId: "OD123456",
      paymentId: "0D123456",
      totalCost: "119$",
      check: false,
    };
  }

  handleOpen() {
    this.setState({
      check: true,
    });
  }

  decline() {
    this.setState({
      check: false,
    });
  }

  proceed() {
    this.setState({ check: false });
  }

  render() {
    return (
      <div className="App">
        <NavBar Title="Payment" />
        <div className="content">
          <OnlineModal
            show={this.state.check}
            invalid={this.decline.bind(this)}
            valid={this.proceed.bind(this)}
            returnBack={this.decline.bind(this)}
          ></OnlineModal>

          <CartContext.Consumer>
            {({ tableId, orderId, date, time, totalCost }) => (
              <PaymentHeader
                tableId={tableId}
                orderId={orderId}
                date={date}
                time={time}
                totalCost={totalCost}
              />
            )}
          </CartContext.Consumer>
          <PaymentBody openModal={this.handleOpen.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Payment;
