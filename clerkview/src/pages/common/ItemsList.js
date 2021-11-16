import React, { Component } from "react";
import "./ItemsList.css";

// Columns: Array
// Details: Array corresponding for each item in Columns

class ItemsList extends React.Component {
  renderCell = (item, column) => {
    if (column.path) {
      return (
        <span className="item-info-cell" key={column.path || column.key}>
          <h2>
            {column.name}:{" "}
            {column.path === "OrderDate" || column.path === "PaymentDate"
              ? item[column.path].split(/[T]/)[0]
              : item[column.path]}
            {column.path === "TotalCost" ? "$" : null}
          </h2>
        </span>
      );
    }
    if (column.key) {
      return column.content(item);
    }
  };

  render() {
    const { items, columns } = this.props;
    return (
      <div className="items-list-container">
        {items.map((item) => (
          <div className="item-list" key={item.OrderID || item.PaymentID}>
            {columns.map((column) => this.renderCell(item, column))}
          </div>
        ))}
      </div>
    );
  }
}

export default ItemsList;
