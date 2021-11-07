import React, { Component } from "react";
import ItemsList from "./common/ItemsList";
import HeaderList from "./common/HeaderList";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";

class PaymentsList extends React.Component {
  columns = [
    { path: "paymentId", name: "PAYMENT ID" },
    { path: "type", name: "Type" },
    {
      key: "confirm",
      content: (item) => (
        <div className="item-btn item-btn-confirm item-btn-cell">
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
    { path: "datetime", name: "DateTime" },
    { path: "totalCost", name: "Total Cost" },
    {
      key: "detail",
      content: (item) => (
        <div className="item-btn item-btn-details item-btn-cell">
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
    let {
      paymentsList,
      onPaymentConfirm,
      currentPage,
      pageSize,
      onPageChange,
    } = this.props;

    paymentsList = this.filterDirectPaymentsList(paymentsList);

    paymentsList = paginate(paymentsList, currentPage, pageSize);

    return (
      <div>
        <HeaderList title="Payments List" />
        <ItemsList items={paymentsList} columns={this.columns} />
        <Pagination
          itemsCount={paymentsList.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </div>
    );
  }
}

export default PaymentsList;
