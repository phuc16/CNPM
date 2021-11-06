import React, { Component } from "react";
import ItemsList from "./common/ItemsList";
import HeaderList from "./common/HeaderList";

class OrdersList extends React.Component {
  columns = [
    { path: "orderId", name: "ORDER ID" },
    { path: "tableId", name: "TABLE ID" },
    { path: "datetime", name: "Date And Time" },
    { path: "totalCost", name: "Total Cost" },
    {
      key: "confirm",
      content: (item) => (
        <div className="item-btn item-btn-confirm">
          <div className="detail">
            <button
              onClick={() => {
                this.props.onOrderConfirm(item);
                //alert(`Confirm item ${item.orderId}`);
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
    const { ordersList, onOrderConfirm } = this.props;
    return (
      <div>
        <HeaderList title="Orders List" />
        <ItemsList items={ordersList} columns={this.columns} />
      </div>
    );
  }
}

export default OrdersList;
