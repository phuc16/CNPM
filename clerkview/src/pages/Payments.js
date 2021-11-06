import React, { Component } from "react";
import BillHeader from "./components/BillHeader";
import PaymentHeader from "./components/PaymentHeader";
import PaymentFooter from "./components/PaymentFooter";

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableId: -1,
      paymentId: "",
      type: "Direct",
      datetime: "",
      productItem: [],
    };
  }

  componentDidMount = () => {
    let paymentId = this.props.match.params.id;
    // axios query ?id=paymentId

    let state = {
      tableId: 1,
      paymentId: paymentId,
      datetime: "2021-09-25 14:54:32",
      type: "Direct",
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
    this.setState({
      tableId: state.tableId,
      paymentId: state.paymentId,
      datetime: state.datetime,
      type: state.type,
      productItem: state.productItem,
    });
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
    return <h2>Payments Pages</h2>;
  }

  render() {
    const { onConfirm } = this.props;

    const totalCost = this.getTotalCost();

    return (
      <div className="App">
        <div className="content">
          <PaymentHeader
            paymentId={this.state.paymentId}
            tableId={this.state.tableId}
            datetime={this.state.datetime}
          />
          <BillHeader
            tableId={this.state.tableId}
            paymentId={this.state.paymentId}
            datetime={this.state.datetime}
            productQuantity={this.state.productItem.length}
            products={this.state.productItem}
            totalCost={totalCost}
          />
          <PaymentFooter
            item={this.state}
            onConfirm={this.props.onConfirm}
            history={this.props.history}
          />
        </div>
      </div>
    );
  }
}

export default Payments;
