import React, { Component } from "react";

import OrderHeader from "./components/OrderHeader";
import OrderItem from "./components/OrderItem";
import OrderFooter from "./components/OrderFooter";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableId: 1,
      orderId: "0D123456",
      datetime: "2021-09-25 14:54:32",
      productItem: [
        {
          id: 1,
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
          name: "Spicey meatballs",
          quantity: 1,
          pricePU: 19.99,
        },
        {
          id: 2,
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
          name: "Spicey meatballs",
          quantity: 1,
          pricePU: 19.99,
        },
        {
          id: 3,
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
          name: "Spicey meatballs",
          quantity: 4,
          pricePU: 19.99,
        },
        {
          id: 4,
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
          name: "Spicey meatballs",
          quantity: 1,
          pricePU: 19.99,
        },
      ],
    };
  }

  componentDidMount = () => {
    // axios
    // this.setState({productItem: productIem});
  };

  getTotalCost() {
    let total = this.state.productItem.reduce(
      (sum, product) => sum + product.pricePU * product.quantity,
      0
    );
    total = total.toFixed(2);
    return total;
  }

  render() {
    const { onConfirm } = this.props;

    const totalCost = this.getTotalCost();
    return (
      <div className="content">
        <OrderHeader
          tableId={this.state.tableId}
          orderId={this.state.orderId}
          datetime={this.state.datetime}
        />
        <div className="product-list">
          {this.state.productItem.map((product) => (
            <OrderItem
              key={product.id}
              imgUrl={product.imgUrl}
              name={product.name}
              quantity={product.quantity}
              pricePU={product.pricePU}
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
