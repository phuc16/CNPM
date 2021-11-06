import React, { Component } from "react";
import ItemsList from "./common/ItemsList";
import HeaderList from "./common/HeaderList";

class PaymentsList extends React.Component {
  columns = [
    { path: "paymentId", name: "PAYMENT ID" },
    { path: "type", name: "Type" },
    { path: "datetime", name: "Date And Time" },
    { path: "totalCost", name: "Total Cost" },
    {
      key: "confirm",
      content: (item) => (
        <div className="item-btn item-btn-confirm">
          <div className="detail">
            <button
              onClick={() => {
                this.props.onPaymentConfirm(item);
                //alert(`Confirm item ${item.paymentId}`);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
    },
    {
      key: "detail",
      content: (item) => (
        <div className="item-btn item-btn-details">
          <div className="detail">
            <button
              onClick={() => {
                this.props.history.push(`/payments/${item.paymentId}`);
              }}
            >
              Details
            </button>
          </div>
        </div>
      ),
    },
  ];

  filterDirectPaymentsList = (paymentList) => {
    const directPaymentList = paymentList.filter(
      (payment) => payment.type === "Direct"
    );
    return directPaymentList;
  };

  render() {
    let { paymentsList, onPaymentConfirm } = this.props;

    paymentsList = this.filterDirectPaymentsList(paymentsList);

    return (
      <div>
        <HeaderList title="Payments List" />
        <ItemsList items={paymentsList} columns={this.columns} />
      </div>
    );
  }
}

export default PaymentsList;
