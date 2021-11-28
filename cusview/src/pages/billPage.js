import React, { Component } from "react";
import NavBar from "../component/NavBar";
import BillHeader from "../Components/BillHeader";
import { CartContext } from "../contexts/Cart";

class BillPage extends Component {
  render() {
    return (
      <div className="App">
        <NavBar Title="BILL" />
        <div className="content">
          <CartContext.Consumer>
            {({ TableNo, PaymentMethod, reset, date, time, cartItems, totalCost }) => (
              <div>
              {cartItems.length > 0 && (
                <BillHeader
                TableNo={TableNo}
                date={date}
                time={time}
                productQuantity={cartItems.length}
                products={cartItems}
                totalCost={totalCost}
                PaymentMethod = {PaymentMethod}
                reset = {reset}
                />
              )}
              
              {cartItems.length === 0 && <h4>Please place your order</h4>}
              </div>
            )}
          </CartContext.Consumer>
        </div>
      </div>
    );
  }
}

export default BillPage;
