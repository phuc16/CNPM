import "./App.css";
import React, { Component } from "react";

import NavBar from "./components/NavBar";
import BillHeader from "./components/BillHeader";
import BillItem from "./components/BillItem";
import BillFooter from "./components/BillFooter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableId: 1,
      orderId: "OD12345",
      date: "1/11/2021",
      time: "10:00:00 AM",
      productItem: [
        {
          id: 1,
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
          name: "PIZZA LARGE",
          quantity: 1,
          pricePU: 4.8,
        },
        {
          id: 2,
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
          name: "PIZZA MEDIUM",
          quantity: 2,
          pricePU: 3.8,
        },
        {
          id: 2,
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
          name: "PIZZA MEDIUM",
          quantity: 2,
          pricePU: 3.8,
        },
      ],
    };
  }

  getTotalCost() {
    let total = this.state.productItem.reduce(
      (sum, product) => sum + product.pricePU * product.quantity,
      0
    );
    total = total.toFixed(2);
    return total;
  }

  render() {
    const totalCost = this.getTotalCost();

    return (
      <div className="App">
        <NavBar Title="BILL" />
        <div className="content">
          <BillHeader
            tableId={this.state.tableId}
            orderId={this.state.orderId}
            date={this.state.date}
            time={this.state.time}
            productQuantity={this.state.productItem.length}
            products={this.state.productItem}
            totalCost={totalCost}
          />
        </div>
      </div>
    );
  }
}

export default App;
