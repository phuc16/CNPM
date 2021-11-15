import React, { Component } from "react";
import NavBar from "../component/NavBar";
import OrderHeader from "../Components/OrderHeader";
import OrderItem from "../Components/OrderItem";
import OrderFooter from "../Components/OrderFooter";

import { CartContext } from "../contexts/Cart";

class CartPage extends Component {
  render() {
    return (
      <div className="App">
        <NavBar Title="MY ORDER"/>
        <div className="content">
          <CartContext.Consumer>
            {({ TableNo, cartItems }) => (
              <OrderHeader
                TableNo ={TableNo}
                productQuantity={cartItems.length}
              />
            )}
          </CartContext.Consumer>

          <div className="product-list">
            <CartContext.Consumer>
              {({ cartItems, removeProduct, changeQuantity }) =>
                cartItems.map((item) => (
                  <OrderItem
                    key={item.ProductID}
                    ImgLink={item.ImgLink}
                    Name={item.Name}
                    quantity={item.quantity}
                    Price={item.Price.toFixed(2)}
                    removeProduct={() => removeProduct(item)}
                    minusQuantity={() => changeQuantity(item, "minus")}
                    addQuantity={() => changeQuantity(item, "add")}
                  />
                ))
              }
            </CartContext.Consumer>
          </div>
          <CartContext.Consumer>
            {({ TableNo, totalCost, totalQuantity, submit }) => (
              <div>
                {totalQuantity > 0 && (
                  <OrderFooter
                    totalCost={totalCost}
                    totalQuantity={totalQuantity}
                    TableNo = {TableNo}
                    submit={() => submit()}
                  />
                )}
                {totalQuantity === 0 && <h4>Please place your order</h4>}
              </div>
            )}
          </CartContext.Consumer>
        </div>
      </div>
    );
  }
}

export default CartPage;
