import React, { Component } from "react";

import axios from 'axios';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: null,
      tableId: 1,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      cartItems: [],
      PaymentMethod: 0,
    };

    this.addItemToCart = this.addItemToCart.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.submit = this.submit.bind(this);
    this.changeToOnline = this.changeToOnline.bind(this);
    this.changeToPhysical = this.changeToPhysical.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset(){
    this.setState({
      tableId: 1,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      cartItems: [],
      PaymentMethod: 0,
    });
  }

  addItemToCart(item) {
    const { cartItems } = this.state;
    let index = -1;

    for (const i in cartItems) {
      if (cartItems[i].id === item.id) {
        index = i;
      }
    }

    if (index === -1) {
      this.setState({
        cartItems: this.state.cartItems.concat({ ...item, quantity: 1 }),
      });
    } else {
      const quantity = this.state.cartItems[index].quantity + 1;
      this.setState({
        cartItems: [
          ...cartItems.slice(0, index),
          { ...item, quantity: quantity },
          ...cartItems.slice(index + 1),
        ],
      });
    }
  }

  getTotalCost() {
    let total = this.state.cartItems.reduce(
      (sum, item) => sum + item.pricePU * item.quantity, 0
    );
    total = total.toFixed(2);
    return total;
  }

  getTotalQuantity() {
    return this.state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  changeToPhysical(){
    this.setState({
      PaymentMethod: 1
    });
  }

  changeToOnline(){
    this.setState({
      PaymentMethod: 2
    });
  }

  changeQuantity(item, change) {
    const quantity =
      change === "add" ? item.quantity + 1 : item.quantity <= 1 ? 1 : item.quantity - 1;
    const { cartItems } = this.state;
    const index = cartItems.indexOf(item);
    this.setState({
      cartItems: [
        ...cartItems.slice(0, index),
        { ...item, quantity: quantity },
        ...cartItems.slice(index + 1),
      ],
    });
  }

  removeProduct(item) {
    const { cartItems } = this.state;
    const index = cartItems.indexOf(item);
    this.setState({
      cartItems: [...cartItems.slice(0, index), ...cartItems.slice(index + 1)],
    });
  }

  submit() {
    alert(
      `Product: ${this.state.cartItems.length}, quantity: ${this.getTotalQuantity()}. View console 4 detail`
    );  
    const items = {
      tableId: this.state.tableId,
      cartItems: this.state.cartItems
    };
    axios.post('http://localhost:3001/post/order', { items })
    .then((response) => {
      console.log(response.data.results);
      this.setState({orderId: response.data.results});
      console.log(this.state.orderId);
    })
    .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          tableId: this.state.tableId,
          orderId: this.state.orderId,
          cartItems: this.state.cartItems,
          date: this.state.date,
          time: this.state.time,
          PaymentMethod: this.state.PaymentMethod,
          totalCost: this.getTotalCost(),
          totalQuantity: this.getTotalQuantity(),
          addItemToCart: this.addItemToCart,
          changeQuantity: this.changeQuantity,
          changeToOnline: this.changeToOnline,
          changeToPhysical: this.changeToPhysical,
          removeProduct: this.removeProduct,
          submit: this.submit,
          reset: this.reset
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
