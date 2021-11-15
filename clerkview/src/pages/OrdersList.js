import React, { Component } from "react";
import ItemsList from "./common/ItemsList";
import HeaderList from "./common/HeaderList";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";

class OrdersList extends React.Component {
  columns = [
    { path: "OrderID", name: "ORDER ID" },
    { path: "TableNo", name: "TABLE NO" },
    {
      key: "confirm",
      content: (item) => (
        <div className="item-btn item-btn-confirm item-btn-cell">
          <div className="detail">
            <button
              onClick={() => {
                this.props.onOrderConfirm(item);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
    },
    { path: "OrderDate", name: "Date" },
    { path: "TotalCost", name: "Total Cost" },
    {
      key: "detail",
      content: (item) => (
        <div className="item-btn item-btn-details item-btn-cell">
          <div className="detail">
            <button
              onClick={() => {
                this.props.history.push(`/orders/${item.OrderID}`);
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
    this.props.getOrderList();
  };

  render() {
    let {
      ordersList,
      onOrderConfirm,
      currentPage,
      pageSize,
      onPageChange,
      getOrderList,
    } = this.props;

    ordersList = paginate(ordersList, currentPage, pageSize);

    return (
      <div>
        <HeaderList getList={getOrderList} title="Orders List" />
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
