import React, { Component } from "react";
import ItemsList from "./common/ItemsList";
import HeaderList from "./common/HeaderList";

class TransactionsList extends React.Component {
  columns = [
    { path: "paymentId", name: "PAYMENT ID" },
    { path: "type", name: "Type" },
    {
      key: "confirm",
      content: (item) => (
        <div className="item-btn item-btn-confirm">
          <div className="detail">
            <button
              onClick={() => {
                this.props.onTransactionConfirm(item);
                //alert(`Confirm item ${item.paymentId}`);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
    },
    { path: "datetime", name: "Date And Time" },
    { path: "totalCost", name: "Total Cost" },
    {
      key: "detail",
      content: (item) => (
        <div className="item-btn item-btn-details">
          <div className="detail">
            <button
              onClick={() => {
                this.props.history.push(`/transactions/${item.paymentId}`);
              }}
            >
              Details
            </button>
          </div>
        </div>
      ),
    },
  ];

  filterDirectTransactionsList = (transactionList) => {
    const directTransactionList = transactionList.filter(
      (transaction) => transaction.type === "Direct"
    );
    return directTransactionList;
  };

  render() {
    let { transactionsList, onTransactionConfirm } = this.props;

    transactionsList = this.filterDirectTransactionsList(transactionsList);

    return (
      <div>
        <HeaderList title="Transactions List" />
        <ItemsList items={transactionsList} columns={this.columns} />
      </div>
    );
  }
}

export default TransactionsList;
