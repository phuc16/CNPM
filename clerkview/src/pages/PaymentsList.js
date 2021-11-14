import React, { Component } from "react";
import ItemsList from "./common/ItemsList";
import HeaderList from "./common/HeaderList";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";

class PaymentsList extends React.Component {
  columns = [
    { path: "PaymentID", name: "PAYMENT ID" },
    { path: "TableNo", name: "TABLE NO" },
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
    { path: "PaymentDate", name: "Date" },
    { path: "TotalCost", name: "Total Cost" },
    {
      key: "detail",
      content: (item) => (
        <div className="item-btn item-btn-details item-btn-cell">
          <div className="detail">
            <button
              onClick={() => {
                this.props.history.push(`/payments/${item.PaymentID}`);
              }}
            >
              Details
            </button>
          </div>
        </div>
      ),
    },
  ];

  componentDidMount = () => {
    this.props.getPaymentList();
  };

  render() {
    let {
      paymentsList,
      onPaymentConfirm,
      currentPage,
      pageSize,
      onPageChange,
      getPaymentList,
    } = this.props;

    paymentsList = paginate(paymentsList, currentPage, pageSize);

    return (
      <div>
        <HeaderList getList={getPaymentList} title="Payments List" />
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
