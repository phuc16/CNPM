import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import BillHeader from "../Components/BillHeader";
import { CartContext } from "../contexts/Cart";

class BillPage extends Component {
  render() {
    return (
      <div className="App">
        <NavBar Title="BILL" />
        <div className="content">
          <CartContext.Consumer>
            {({ tableId, orderId, date, time, cartItems, totalCost }) => (
              <BillHeader
                tableId={tableId}
                orderId={orderId}
                date={date}
                time={time}
                productQuantity={cartItems.length}
                products={cartItems}
                totalCost={totalCost}
              />
            )}
          </CartContext.Consumer>
        </div>
      </div>
    );
  }
}

export default BillPage;
