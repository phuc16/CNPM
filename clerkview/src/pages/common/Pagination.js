import React, { Component } from "react";
import _ from "lodash";
import "./Pagination.css";

class Pagination extends React.Component {
  render() {
    const { itemsCount, pageSize, currentPage, onPageChange } = this.props;

    const pageCount = Math.ceil(this.props.itemsCount / this.props.pageSize);
    if (pageCount === 1) return null;
    const numberList = _.range(1, pageCount + 1);
    return (
      <div className="pagination-div">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {numberList.map((number) => (
              <li
                key={number}
                className={
                  number === this.props.currentPage
                    ? "page-item active"
                    : "page-item"
                }
                onClick={() => this.props.onPageChange(number)}
              >
                <a className="page-link">{number}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
