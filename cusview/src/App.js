import React, { Component } from 'react';

import './App.css';

import NavBar from "./components/NavBar";
import OrderHeader from './components/OrderHeader';
import OrderItem from './components/OrderItem';
import OrderFooter from './components/OrderFooter';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tableId: 1,
      orderId: '0D123456',
      productItem:
      [
          {id: 1, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
           name: 'PIZZA MIXED', quantity: 1, pricePU: 4.8},
          {id: 2, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
           name: 'PIZZA MIXED', quantity: 2, pricePU: 4.8},
          {id: 3, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
           name: 'PIZZA MIXED', quantity: 2, pricePU: 4.8},
          {id: 4, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
           name: 'PIZZA MIXED', quantity: 3, pricePU: 4.8},
          {id: 5, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
           name: 'PIZZA MIXED', quantity: 4, pricePU: 4.8},
          {id: 6, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
           name: 'PIZZA MIXED', quantity: 5, pricePU: 4.8},
          {id: 7, imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',
           name: 'PIZZA MIXED', quantity: 1, pricePU: 4.8}
      ],
    };
  }
  
  getTotalCost(){
    let total = this.state.productItem.reduce((sum, product) => sum + product.pricePU * product.quantity, 0)
    total = total.toFixed(2);
    return total;
  }

  getTotalQuantity(){
    return this.state.productItem.reduce((sum, product) => sum + product.quantity, 0);
  }

  changeQuantity(item, change){
    return () => {
      const quantity = change === 'add' ? item.quantity + 1 : (item.quantity === 1 ? 1 : item.quantity - 1)
      const { productItem } = this.state;
      const index = productItem.indexOf(item);
      this.setState({
        productItem: [
          ...productItem.slice(0 , index),
          {...item, quantity : quantity},
          ...productItem.slice(index + 1)
        ]
      });
    };
  }

  removeProduct(item){
    return () => {
      const { productItem } = this.state;
      const index = productItem.indexOf(item);
      this.setState({
        productItem: [
          ...productItem.slice(0 , index),
          ...productItem.slice(index + 1)
        ]
      });
    };
  }

  render(){
    const totalCost = this.getTotalCost();
    const totalQuantity = this.getTotalQuantity();

    return (
      <div className="App">        
        <NavBar Title = "MY ORDER" />
        <div className="content">
          <OrderHeader 
              tableId={this.state.tableId}
              orderId={this.state.orderId}
              timePassed={this.state.timePassed}
              productQuantity={this.state.productItem.length}
          />
          <div className="product-list">
              {
                  this.state.productItem.map((product) => (
                      <OrderItem
                          key = {product.id}
                          imgUrl={product.imgUrl}
                          name={product.name}
                          quantity={product.quantity}
                          pricePU={product.pricePU.toFixed(2)}
                          removeProduct={this.removeProduct(product)}
                          minusQuantity = {this.changeQuantity(product, 'minus')}
                          addQuantity = {this.changeQuantity(product, 'add')}
                      />
                  ))
              }
          </div>
          {
            totalQuantity > 0 && <OrderFooter 
              totalCost={totalCost}
              totalQuantity = {totalQuantity}
            />
          }
          {
            totalQuantity === 0 && <h4>Please place your order</h4>
          }
        </div>
      </div>
    );
  }
}

export default App;