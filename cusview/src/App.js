import React, { Component } from 'react';

import './App.css';

import NavBar from "./components/NavBar";
import OrderHeader from './components/OrderHeader';
import OrderItem from './components/OrderItem';
import OrderFooter from './components/OrderFooter';

import { CartContext } from './contexts/Cart';

class App extends Component {

  render(){
    return (
      <div className="App">        
        <NavBar Title = "MY ORDER" />
        
          <div className="content">
            <CartContext.Consumer>
              {({tableId, orderId, cartItems}) =>
                <OrderHeader 
                    tableId={tableId}
                    orderId={orderId}
                    productQuantity={cartItems.length}
                />
              }
            </CartContext.Consumer>

            <div className="product-list">
              <CartContext.Consumer>
                {({ cartItems, removeProduct, changeQuantity }) =>(
                    cartItems.map((item) => (
                      <OrderItem
                        key = {item.id}
                        imgUrl={item.imgUrl}
                        name={item.name}
                        quantity={item.quantity}
                        pricePU={item.pricePU.toFixed(2)}
                        removeProduct = {() => removeProduct(item)}
                        minusQuantity = {() => changeQuantity(item, 'minus')}
                        addQuantity = {() => changeQuantity(item, 'add')}
                      />
                      )
                    )
                  )
                }
              </CartContext.Consumer>
            </div>
            <CartContext.Consumer>
              {({totalCost, totalQuantity, submit}) =>(
                <div>
                  {
                    totalQuantity > 0 && <OrderFooter 
                      totalCost={totalCost}
                      totalQuantity = {totalQuantity}
                      submit = {() => submit()}
                    />
                  }
                  {
                    totalQuantity === 0 && <h4>Please place your order</h4>
                  }
                </div>
              )
            }
            </CartContext.Consumer>
          </div>
        
      </div>
    );
  }
}

export default App;