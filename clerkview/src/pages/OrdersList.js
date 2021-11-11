import React, { Component } from "react";
import ItemsList from "./common/ItemsList";
import HeaderList from "./common/HeaderList";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";

class OrdersList extends React.Component {
  columns = [
    { path: "orderId", name: "ORDER ID" },
    { path: "tableId", name: "TABLE ID" },
    {
      key: "confirm",
      content: (item) => (
        <div className="item-btn item-btn-confirm item-btn-cell">
          <div className="detail">
            <button
              onClick={() => {
                this.props.onOrderConfirm(item);
                this.props.updateOrderStatus(123457);
                //alert(`Confirm item ${item.orderId}`);
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
                this.props.history.push(`/orders/${item.orderId}`);
              }}
            >
              Details
            </button>
          </div>
        </div>
      ),
    },
  ];

  render() {
    let { ordersList, onOrderConfirm, currentPage, pageSize, onPageChange, updateOrderStatus } =
      this.props;

    ordersList = paginate(ordersList, currentPage, pageSize);

    return (
      <div>
        <HeaderList title="Orders List" />
        <ItemsList items={ordersList} columns={this.columns} />
        <Pagination
          itemsCount={ordersList.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </div>
    );
  }
}

export default OrdersList;
