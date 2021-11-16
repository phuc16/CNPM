import React, { Component } from "react";

import OrderHeader from "./components/OrderHeader";
import OrderItem from "./components/OrderItem";
import OrderFooter from "./components/OrderFooter";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TableNo: -1,
      OrderID: "",
      Date: "",
      productItem: [],
    };
  }

  componentDidMount = async () => {
    let OrderID = this.props.match.params.id;
    let OrderDetail = await this.props.getOrderDetail(OrderID);
    console.log("Order Detail Page: ", OrderDetail, OrderID);

    let state = {
      TableNo: OrderDetail[0].TableNo,
      OrderID: OrderDetail[0].OrderID,
      Date: OrderDetail[0].OrderDate,
      productItem: OrderDetail,
    };

    this.setState({
      TableNo: state.TableNo,
      OrderID: state.OrderID,
      Date: state.Date,
      productItem: state.productItem,
    });
  };

  getTotalCost() {
    let total = this.state.productItem.reduce(
      (sum, product) => sum + product.PricePerUnit * product.Quantity,
      0
    );
    total = total.toFixed(2);
    return total;
  }

  render() {
    const { onConfirm, getOrderDetail } = this.props;

    const totalCost = this.getTotalCost();
    return (
      <div className="content">
        <OrderHeader
          tableId={this.state.TableNo}
          orderId={this.state.OrderID}
          date={this.state.Date}
        />
        <div className="product-list">
          {this.state.productItem.map((product) => (
            <OrderItem
              key={product.Name}
              imgUrl={product.ImgLink}
              name={product.Name}
              quantity={product.Quantity}
              pricePU={product.PricePerUnit}
            />
          ))}
        </div>
        <OrderFooter
          item={this.state}
          onConfirm={this.props.onConfirm}
          totalCost={totalCost}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default Orders;
