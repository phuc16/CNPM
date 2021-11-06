import React, { Component } from "react";
import "./ItemsList.css";

// Columns: Array
// Details: Array corresponding for each item in Columns

class ItemsList extends React.Component {
  renderInfoCell = (item, column) => {
    if (column.path) {
      return (
        <span key={column.path || column.key}>
          <h2>
            {column.name}: {item[column.path]}
          </h2>
        </span>
      );
    }
  };

  renderBtnCell = (item, column) => {
    if (column.key) {
      return column.content(item);
    }
  };

  render() {
    const { items, columns } = this.props;
    return (
      <div className="items-list-container">
        {items.map((item) => (
          <div className="item-list" key={item.orderId}>
            <div className="items-list-container-grid-info">
              {columns.map((column) => this.renderInfoCell(item, column))}
            </div>
            <div className="items-list-container-grid-btn">
              {columns.map((column) => this.renderBtnCell(item, column))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ItemsList;
